export const verificationTemplate = `
    <!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Email Verification - PASTE</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background: #f8f9fa;
        padding: 20px;
        color: #333;
      }
      .container {
        background: #ffffff;
        border-radius: 8px;
        max-width: 480px;
        margin: auto;
        padding: 30px;
        box-shadow: 0 0 10px rgba(0,0,0,0.05);
      }
      .otp {
        font-size: 24px;
        font-weight: bold;
        color: #1e88e5;
        letter-spacing: 4px;
        margin: 20px 0;
      }
      .footer {
        font-size: 12px;
        color: #888;
        margin-top: 30px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h2>Email Verification - PASTE</h2>
      <p>Hi <strong>{name}</strong>,</p>
      <p>You recently signed up for an account on <strong>PASTE</strong>. To verify your email address, please use the following One-Time Password (OTP):</p>

      <div class="otp">{otp}</div>

      <p>This OTP will expire in 24 Hours.</p>
      <p>If you didn&apos;t request this verification, please ignore this email.</p>

      <div class="footer">
        This message was sent by PASTE. <br />
        &copy; {year} PASTE App. All rights reserved.
      </div>
    </div>
  </body>
</html>

`;

export const welcomeTemplate = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Welcome to PASTE</title>
    <style>
      body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: #f3f4f6;
        padding: 40px 20px;
        color: #333;
      }
      .container {
        background-color: #ffffff;
        max-width: 520px;
        margin: 0 auto;
        padding: 40px 30px;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
        text-align: center;
      }
      .brand {
        font-size: 32px;
        font-weight: bold;
        color: #1e88e5;
        letter-spacing: 2px;
        margin-bottom: 20px;
      }
      h2 {
        color: #333;
        margin-bottom: 10px;
      }
      p {
        font-size: 16px;
        line-height: 1.6;
        margin-bottom: 20px;
      }
      .footer {
        font-size: 12px;
        color: #999;
        margin-top: 30px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="brand">PASTE</div>
      <h2>Welcome, {name} 👋</h2>
      <p>Thanks for signing up for <strong>PASTE</strong>!</p>
      <p>Your account has been created successfully.</p>
      <p>Start organizing your tasks, capturing notes, and boosting productivity — all in one place.</p>
      <p>Let&apos;s get started!</p>

      <div class="footer">
        &copy; {year} PASTE App. All rights reserved.
      </div>
    </div>
  </body>
</html>
`;