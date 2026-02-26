import {
    SESClient,
    SendEmailCommand,
    type SendEmailCommandInput,
} from '@aws-sdk/client-ses'

/* ────────────────────────────────────────────────────────────────────
   Shared SES client — reads credentials from environment variables.
   Never import this file in client-side (TSX) code.
──────────────────────────────────────────────────────────────────── */
export const sesClient = new SESClient({
    region: process.env.AWS_REGION ?? 'ap-south-1',
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
})

/** Thin wrapper so routes don't need to import SendEmailCommand directly. */
export async function sendEmail(params: SendEmailCommandInput) {
    const command = new SendEmailCommand(params)
    return sesClient.send(command)
}

/** Verified sender address used as From: on every outgoing email. */
export const MAIL_FROM = process.env.MAIL_FROM ?? 'hello@anocloud.in'

/** Admin / company inbox that receives notification emails. */
export const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? 'hello@anocloud.in'
