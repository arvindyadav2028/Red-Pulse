import crypto from "crypto";

/**
 * Generate a secure 6-digit OTP
 */
export function generateOtp() {
    return String(crypto.randomInt(100000, 999999));
}

/**
 * Branded HTML email for OTP
 */
export function getOtpHtml(otp) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>RedPulse — Email Verification</title>
</head>
<body style="margin:0;padding:0;background:#0f172a;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center" style="padding:40px 20px;">
        <table width="480" cellpadding="0" cellspacing="0" style="background:#1e293b;border-radius:16px;overflow:hidden;border:1px solid #334155;">
          <!-- Header -->
          <tr>
            <td style="background:#dc2626;padding:24px 32px;">
              <p style="margin:0;font-size:22px;font-weight:bold;color:#fff;">🩸 RedPulse</p>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:32px;">
              <h2 style="color:#f1f5f9;margin:0 0 12px;">Verify your email</h2>
              <p style="color:#94a3b8;margin:0 0 24px;line-height:1.6;">
                Use the code below to complete your sign-up. It expires in <strong style="color:#f1f5f9;">10 minutes</strong>.
              </p>
              <!-- OTP Box -->
              <div style="background:#0f172a;border:1px solid #475569;border-radius:12px;padding:20px;text-align:center;margin-bottom:24px;">
                <p style="font-size:42px;font-weight:bold;letter-spacing:10px;color:#f8fafc;margin:0;">${otp}</p>
              </div>
              <p style="color:#64748b;font-size:13px;margin:0;">
                If you didn't create a RedPulse account, you can safely ignore this email.
              </p>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding:16px 32px;border-top:1px solid #334155;">
              <p style="color:#475569;font-size:12px;margin:0;">© 2026 RedPulse. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
