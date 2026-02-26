import { NextRequest, NextResponse } from 'next/server'
import { sendEmail, MAIL_FROM, ADMIN_EMAIL } from '@/lib/ses'

/* ─── Helper: HTML confirmation email to the user ─────────────────── */
function buildConfirmationHtml(firstName: string, service: string) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>We received your message – AnoCloud</title>
</head>
<body style="margin:0;padding:0;background:#f6f6f6;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f6f6f6;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.07);">

        <!-- Header -->
        <tr>
          <td style="background:#003b2d;padding:32px 40px;text-align:center;">
            <h1 style="margin:0;color:#56c48f;font-size:26px;letter-spacing:-0.5px;">AnoCloud</h1>
            <p style="margin:6px 0 0;color:rgba(255,255,255,0.6);font-size:13px;letter-spacing:0.05em;">Cloud · AI · Security</p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:40px 40px 32px;">
            <h2 style="margin:0 0 16px;color:#111;font-size:20px;">Hi ${firstName}, thanks for reaching out! 👋</h2>
            <p style="margin:0 0 16px;color:#444;font-size:15px;line-height:1.7;">
              We've received your message${service ? ` regarding <strong>${service}</strong>` : ''} and a member of our team will be in touch within <strong>1 business day</strong>.
            </p>
            <p style="margin:0 0 24px;color:#444;font-size:15px;line-height:1.7;">
              If you have anything to add in the meantime, simply reply to this email.
            </p>

            <!-- CTA -->
            <table cellpadding="0" cellspacing="0">
              <tr>
                <td style="background:#005241;border-radius:8px;">
                  <a href="https://www.anocloud.in" style="display:inline-block;padding:12px 28px;color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;">
                    Visit AnoCloud →
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:24px 40px;border-top:1px solid #f0f0f0;background:#fafafa;">
            <p style="margin:0;color:#999;font-size:12px;line-height:1.6;">
              AnoCloud Technologies Pvt. Ltd. · C/67 Vijay Nagar, Jamshedpur 831009<br>
              <a href="https://www.anocloud.in" style="color:#005241;text-decoration:none;">www.anocloud.in</a> ·
              <a href="mailto:hello@anocloud.in" style="color:#005241;text-decoration:none;">hello@anocloud.in</a>
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`
}

/* ─── Helper: plain-text admin notification ───────────────────────── */
function buildAdminText(fields: Record<string, string>) {
    return [
        '=== New Contact Form Submission — AnoCloud ===',
        '',
        `Name    : ${fields.firstName} ${fields.lastName ?? ''}`.trim(),
        `Email   : ${fields.email}`,
        `Phone   : ${fields.phone || '—'}`,
        `Service : ${fields.service || '—'}`,
        '',
        'Message:',
        fields.message || '(no message provided)',
        '',
        `Submitted: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST`,
    ].join('\n')
}

/* ═══════════════════════════════════════════════════════════════════
   POST /api/contact
═══════════════════════════════════════════════════════════════════ */
export async function POST(req: NextRequest) {
    let body: Record<string, string>

    try {
        body = await req.json()
    } catch {
        return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
    }

    const { firstName, email, lastName = '', phone = '', service = '', message = '' } = body

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
        /* ── 1. Confirmation email → user ── */
        await sendEmail({
            Source: `AnoCloud <${MAIL_FROM}>`,
            Destination: { ToAddresses: [email] },
            Message: {
                Subject: { Data: 'We received your message – AnoCloud', Charset: 'UTF-8' },
                Body: {
                    Html: { Data: buildConfirmationHtml(firstName, service), Charset: 'UTF-8' },
                    Text: {
                        Data: `Hi ${firstName},\n\nThanks for contacting AnoCloud! We've received your message and will reply within 1 business day.\n\n– The AnoCloud Team`,
                        Charset: 'UTF-8',
                    },
                },
            },
        })

        /* ── 2. Notification email → admin ── */
        await sendEmail({
            Source: `AnoCloud Contact Form <${MAIL_FROM}>`,
            Destination: { ToAddresses: [ADMIN_EMAIL] },
            ReplyToAddresses: [email],
            Message: {
                Subject: {
                    Data: `New enquiry from ${firstName} ${lastName}`.trim() + (service ? ` — ${service}` : ''),
                    Charset: 'UTF-8',
                },
                Body: {
                    Text: {
                        Data: buildAdminText({ firstName, lastName, email, phone, service, message }),
                        Charset: 'UTF-8',
                    },
                },
            },
        })

        return NextResponse.json({ success: true }, { status: 200 })
    } catch (err: unknown) {
        console.error('[/api/contact] SES error:', err)

        const message =
            err instanceof Error ? err.message : 'Failed to send email. Please try again later.'

        return NextResponse.json({ error: message }, { status: 500 })
    }
}
