# Email Setup Instructions

## Gmail SMTP Configuration

The contact form is configured to use Gmail SMTP with the following settings.

### Environment Variables

Create a `.env.local` file in the root directory and add the following:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_EMAIL=your-email@gmail.com
```

### Current Configuration:
- **SMTP Host**: smtp.gmail.com
- **SMTP Port**: 587
- **SMTP User**: sileshieabel@gmail.com
- **SMTP Pass**: (App Password - already configured)

### Important Notes:
- Never commit `.env.local` to version control
- Use App Passwords, not your regular Gmail password
- The App Password is a 16-character code without spaces
- Make sure 2FA is enabled before generating App Passwords

### Testing:
After setup, test the contact form on your website. You should receive emails at the address specified in `CONTACT_EMAIL`.

