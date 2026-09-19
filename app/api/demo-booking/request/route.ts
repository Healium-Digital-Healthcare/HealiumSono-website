import { NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error("RESEND_API_KEY environment variable is missing.")
      return NextResponse.json(
        { error: "Resend API key is not configured on the server." },
        { status: 500 }
      )
    }

    const resend = new Resend(apiKey)
    const body = await req.json()

    // Extract fields from request body
    const { firstName, lastName, company, email, phone, message, terms } = body

    if (!firstName || !lastName || !email || !terms) {
      return NextResponse.json(
        { error: "Missing required fields!" },
        { status: 400 }
      )
    }

    const toEmail = process.env.DEMO_NOTIFICATION_EMAIL || "info@healiumintelliscan.com"
    const fromEmail = process.env.RESEND_FROM_EMAIL || "Healium Demo Booking <no-reply@healiumsono.com>"

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `New Demo Booking Request from ${firstName} ${lastName}`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Demo Booking Request</title>
</head>
<body style="margin:0; padding:0; background-color:#F9F8F7; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color:#2D2D2D;">
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:#F9F8F7; padding: 40px 10px;">
    <tr>
      <td align="center">
        <!-- Main Card Container -->
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #FFFFFF; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.05); border: 1px solid #EFEAE0;">
          
          <!-- Top Accent Banner -->
          <tr>
            <td style="background: linear-gradient(135deg, #C8B5E8 0%, #687FE5 100%); padding: 24px 32px; text-align: left;">
              <img src="https://healiumsono.com/logo/logo.svg" alt="Healium Sono" width="40" height="40" style="display: block; border: 0;" />
            </td>
          </tr>

          <!-- Header Title -->
          <tr>
            <td style="padding: 32px 32px 16px 32px;">
              <span style="display: inline-block; background-color: #F0EBFA; color: #687FE5; font-size: 12px; font-weight: 600; padding: 4px 12px; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.5px;">New Demo Request</span>
              <h1 style="margin: 12px 0 6px 0; font-size: 24px; font-weight: 700; color: #2D2D2D; letter-spacing: -0.5px;">Demo Booking Request</h1>
              <p style="margin: 0; font-size: 14px; color: #666666;">Submitted via the Healium website demo form.</p>
            </td>
          </tr>

          <!-- Lead Details Table -->
          <tr>
            <td style="padding: 0 32px 24px 32px;">
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #FBF9FF; border-radius: 12px; border: 1px solid #EAE3F7; padding: 16px 20px;">
                <tr>
                  <td style="padding: 8px 0; font-size: 13px; font-weight: 600; color: #687FE5; width: 35%;">FIRST NAME</td>
                  <td style="padding: 8px 0; font-size: 15px; font-weight: 500; color: #2D2D2D;">${firstName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-size: 13px; font-weight: 600; color: #687FE5;">LAST NAME</td>
                  <td style="padding: 8px 0; font-size: 15px; font-weight: 500; color: #2D2D2D;">${lastName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-size: 13px; font-weight: 600; color: #687FE5;">EMAIL ADDRESS</td>
                  <td style="padding: 8px 0; font-size: 15px; font-weight: 500; color: #2D2D2D;"><a href="mailto:${email}" style="color: #687FE5; text-decoration: underline;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-size: 13px; font-weight: 600; color: #687FE5;">COMPANY</td>
                  <td style="padding: 8px 0; font-size: 15px; font-weight: 500; color: #2D2D2D;">${company || 'N/A'}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-size: 13px; font-weight: 600; color: #687FE5;">PHONE NUMBER</td>
                  <td style="padding: 8px 0; font-size: 15px; font-weight: 500; color: #2D2D2D;">${phone ? `<a href="tel:${phone}" style="color: #2D2D2D; text-decoration: none;">${phone}</a>` : 'N/A'}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-size: 13px; font-weight: 600; color: #687FE5;">TERMS ACCEPTED</td>
                  <td style="padding: 8px 0; font-size: 15px; font-weight: 500; color: #2D2D2D;">${terms ? 'Yes' : 'No'}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message Section -->
          <tr>
            <td style="padding: 0 32px 32px 32px;">
              <div style="font-size: 12px; font-weight: 600; color: #687FE5; text-transform: uppercase; margin-bottom: 8px; letter-spacing: 0.5px;">MESSAGE / NOTES</div>
              <div style="background-color: #F9F8F7; border-radius: 10px; padding: 16px; font-size: 14px; line-height: 1.6; color: #444444; border: 1px solid #EFEAE0;">
                ${message ? message.replace(/\n/g, '<br/>') : 'No additional message provided.'}
              </div>
            </td>
          </tr>

          <!-- Action Button -->
          <tr>
            <td align="center" style="padding: 0 32px 32px 32px;">
              <a href="mailto:${email}?subject=Re:%20Demo%20Booking%20-%20Healium%20Sono" style="display: inline-block; background-color: #C8B5E8; color: #2D2D2D; font-size: 15px; font-weight: 600; padding: 14px 36px; border-radius: 30px; text-decoration: none;">Reply to Prospect</a>
            </td>
          </tr>

          <!-- Footer Bar -->
          <tr>
            <td style="background-color: #F4F1EA; padding: 20px 32px; text-align: center; border-top: 1px solid #EFEAE0;">
              <p style="margin: 0 0 6px 0; font-size: 12px; font-weight: 600; color: #555555;">Healium Sono &bull; AI-Powered Remote Ultrasound Diagnostics</p>
              <p style="margin: 0; font-size: 11px; color: #888888;">This is an automated notification from the website demo request form.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({ success: true, data })
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Something went wrong" },
      { status: 500 }
    )
  }
}
