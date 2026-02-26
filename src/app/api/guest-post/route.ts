import { NextRequest, NextResponse } from 'next/server'
import { sendEmail, MAIL_FROM, ADMIN_EMAIL } from '@/lib/ses'

/* ─── Helper: plain-text admin notification ───────────────────────── */
function buildAdminText(fields: Record<string, string>) {
    const entries = Object.entries(fields)
        .map(([k, v]) => `${k.padEnd(12)}: ${v || '—'}`)
        .join('\n')

    return [
        '=== New Guest Post Submission — AnoCloud Blog ===',
        '',
        entries,
        '',
        `Submitted: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST`,
    ].join('\n')
}

/* ─── Helper: HTML confirmation to the guest post author ─────────── */
function buildConfirmationHtml(firstName: string) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Guest Post Received – AnoCloud Blog</title>
</head>
<body style="margin:0;padding:0;background:#f6f6f6;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f6f6f6;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.07);">

        <tr>
          <td style="background:#003b2d;padding:32px 40px;text-align:center;">
            <h1 style="margin:0;color:#56c48f;font-size:26px;letter-spacing:-0.5px;">AnoCloud Blog</h1>
            <p style="margin:6px 0 0;color:rgba(255,255,255,0.6);font-size:13px;">Guest Contributor Programme</p>
          </td>
        </tr>

        <tr>
          <td style="padding:40px 40px 32px;">
            <h2 style="margin:0 0 16px;color:#111;font-size:20px;">Hi ${firstName}, your submission is in! ✍️</h2>
            <p style="margin:0 0 16px;color:#444;font-size:15px;line-height:1.7;">
              Thanks for pitching a guest post to the AnoCloud Blog. Our editorial team will review your submission and get back to you within <strong>3 business days</strong>.
            </p>
            <p style="margin:0 0 24px;color:#444;font-size:15px;line-height:1.7;">
              In the meantime, feel free to explore our latest articles at
              <a href="https://www.anocloud.in/resources/blog" style="color:#005241;">anocloud.in/resources/blog</a>.
            </p>
            <table cellpadding="0" cellspacing="0">
              <tr>
                <td style="background:#005241;border-radius:8px;">
                  <a href="https://www.anocloud.in/resources/blog" style="display:inline-block;padding:12px 28px;color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;">
                    Read the Blog →
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <tr>
          <td style="padding:24px 40px;border-top:1px solid #f0f0f0;background:#fafafa;">
            <p style="margin:0;color:#999;font-size:12px;line-height:1.6;">
              AnoCloud Technologies Pvt. Ltd. · <a href="https://www.anocloud.in" style="color:#005241;text-decoration:none;">www.anocloud.in</a>
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`
}

/* ═══════════════════════════════════════════════════════════════════
   POST /api/guest-post
═══════════════════════════════════════════════════════════════════ */
export async function POST(req: NextRequest) {
    let body: Record<string, string>

    try {
        body = await req.json()
    } catch {
        return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
    }

    const { firstName, email } = body

    /* ── Validate required fields ── */
    if (!firstName?.trim() || !email?.trim()) {
        return NextResponse.json(
            { error: 'First name and email are required.' },
            { status: 422 },
        )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
        return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 422 })
    }

    try {
        /* ── 1. Confirmation email → contributor ── */
        await sendEmail({
            Source: `AnoCloud Blog <${MAIL_FROM}>`,
            Destination: { ToAddresses: [email] },
            Message: {
                Subject: { Data: 'Guest Post Received – AnoCloud Blog', Charset: 'UTF-8' },
                Body: {
                    Html: { Data: buildConfirmationHtml(firstName), Charset: 'UTF-8' },
                    Text: {
                        Data: `Hi ${firstName},\n\nThanks for submitting a guest post to the AnoCloud Blog! Our team will review it within 3 business days.\n\n– The AnoCloud Editorial Team`,
                        Charset: 'UTF-8',
                    },
                },
            },
        })

        /* ── 2. Notification email → admin ── */
        await sendEmail({
            Source: `AnoCloud Blog Form <${MAIL_FROM}>`,
            Destination: { ToAddresses: [ADMIN_EMAIL] },
            ReplyToAddresses: [email],
            Message: {
                Subject: {
                    Data: `New Guest Post Submission from ${firstName}`,
                    Charset: 'UTF-8',
                },
                Body: {
                    Text: {
                        Data: buildAdminText(body),
                        Charset: 'UTF-8',
                    },
                },
            },
        })

        return NextResponse.json({ success: true }, { status: 200 })
    } catch (err: unknown) {
        console.error('[/api/guest-post] SES error:', err)

        const message =
            err instanceof Error ? err.message : 'Failed to send email. Please try again later.'

        return NextResponse.json({ error: message }, { status: 500 })
    }
}
