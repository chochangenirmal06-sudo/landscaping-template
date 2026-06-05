import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { clientConfig } from '@/lib/client.config'

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const body = await req.json()
  const { colors, business } = clientConfig

  // CSS variables don't work in email clients — interpolate config values directly.
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 620px; margin: 0 auto; border-radius: 8px; overflow: hidden;">

      <!-- Header -->
      <div style="background: ${colors.primary}; padding: 32px; text-align: center;">
        <h1 style="color: ${colors.accentDark}; font-size: 26px; margin: 0; letter-spacing: 0.05em;">
          ${business.fullName}
        </h1>
        <p style="color: rgba(255,255,255,0.65); margin: 8px 0 0; font-size: 14px;">
          New Quote Request
        </p>
      </div>

      <!-- Body -->
      <div style="background: ${colors.bg}; padding: 36px;">

        <!-- Contact Information -->
        <h2 style="color: ${colors.bgText}; font-size: 14px; text-transform: uppercase;
          letter-spacing: 0.12em; border-bottom: 2px solid ${colors.accentDark};
          padding-bottom: 8px; margin: 0 0 16px;">
          Contact Information
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 28px;">
          <tr>
            <td style="padding: 8px 0; color: ${colors.textMuted}; font-size: 13px; width: 36%;">Full Name</td>
            <td style="padding: 8px 0; color: ${colors.bgText}; font-size: 13px; font-weight: 600;">${body.fullName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: ${colors.textMuted}; font-size: 13px;">Email</td>
            <td style="padding: 8px 0; color: ${colors.bgText}; font-size: 13px; font-weight: 600;">${body.email}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: ${colors.textMuted}; font-size: 13px;">Phone</td>
            <td style="padding: 8px 0; color: ${colors.bgText}; font-size: 13px; font-weight: 600;">${body.phone}</td>
          </tr>
        </table>

        <!-- Property Location -->
        <h2 style="color: ${colors.bgText}; font-size: 14px; text-transform: uppercase;
          letter-spacing: 0.12em; border-bottom: 2px solid ${colors.accentDark};
          padding-bottom: 8px; margin: 0 0 16px;">
          Property Location
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 28px;">
          <tr>
            <td style="padding: 8px 0; color: ${colors.textMuted}; font-size: 13px; width: 36%;">Street Address</td>
            <td style="padding: 8px 0; color: ${colors.bgText}; font-size: 13px; font-weight: 600;">${body.streetAddress || '—'}</td>
          </tr>
        </table>

        <!-- Project Details -->
        <h2 style="color: ${colors.bgText}; font-size: 14px; text-transform: uppercase;
          letter-spacing: 0.12em; border-bottom: 2px solid ${colors.accentDark};
          padding-bottom: 8px; margin: 0 0 16px;">
          Project Details
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 28px;">
          <tr>
            <td style="padding: 8px 0; color: ${colors.textMuted}; font-size: 13px; width: 36%;">Service Needed</td>
            <td style="padding: 8px 0; color: ${colors.bgText}; font-size: 13px; font-weight: 600;">${body.serviceNeeded || '—'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: ${colors.textMuted}; font-size: 13px; vertical-align: top;">Issues to Address</td>
            <td style="padding: 8px 0; color: ${colors.bgText}; font-size: 13px; font-weight: 600;">${body.issues || 'Not specified'}</td>
          </tr>
        </table>

      </div>

      <!-- Footer -->
      <div style="background: ${colors.primary}; padding: 20px; text-align: center;">
        <p style="color: rgba(255,255,255,0.45); font-size: 12px; margin: 0;">
          ${business.fullName} &middot; ${business.address} &middot; ${business.email}
        </p>
      </div>

    </div>
  `

  try {
    const { error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: business.contactFormEmail,
      subject: `New Quote Request — ${business.fullName}`,
      html,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact route error:', err)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
