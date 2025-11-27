# Meba General Trading PLC

A professional website for Meba General Trading PLC, a leading import and export company specializing in international trade solutions.

## Features

- **Modern UI/UX**: Professional design optimized for the trading industry
- **Responsive Design**: Works seamlessly on all devices
- **Contact Form**: Integrated email functionality with Gmail SMTP
- **Service Showcase**: Comprehensive display of import and export services
- **Management Team**: Professional team presentation
- **Certifications**: Display of company recognitions and awards

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Modern styling
- **Framer Motion** - Smooth animations
- **Nodemailer** - Email functionality

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

Create a `.env.local` file in the root directory:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_EMAIL=your-email@gmail.com
```

See `README_EMAIL_SETUP.md` for detailed email setup instructions.

## Project Structure

```
├── src/
│   ├── app/              # Next.js app router pages
│   │   ├── api/          # API routes
│   │   ├── contact/      # Contact page
│   │   └── page.tsx      # Home page
│   ├── components/       # React components
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── AboutUs.tsx
│   │   ├── Services.tsx
│   │   └── ...
│   └── globals.css       # Global styles
├── public/               # Static assets
└── package.json
```

## Deployment

The site can be deployed on:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **Any Node.js hosting platform**

## License

© 2025 Meba General Trading PLC. All rights reserved.
