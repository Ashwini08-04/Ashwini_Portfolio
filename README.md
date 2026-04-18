# Ashwini Sonawane — Portfolio

A modern, animated dark-theme portfolio built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.

## ✨ Features
- Dark neon theme (cyan + violet + pink accents)
- Custom animated cursor
- Scroll progress bar
- Typing effect hero with particle animation
- Framer Motion animations on every section
- 3D tilt project cards
- Animated skill bars
- Timeline experience section
- Contact form with API route
- Preloader animation
- Mobile responsive

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🌐 Deploy to Vercel

```bash
npx vercel
# or connect your GitHub repo at vercel.com
```

## 📂 Project Structure

```
src/
├── app/
│   ├── api/contact/route.ts   # Contact form API
│   ├── globals.css            # Global styles + animations
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Main page
├── components/
│   ├── ui/
│   │   ├── Cursor.tsx         # Custom cursor
│   │   ├── Navbar.tsx         # Sticky navbar
│   │   ├── Preloader.tsx      # Loading screen
│   │   └── ScrollProgress.tsx # Top progress bar
│   └── sections/
│       ├── Hero.tsx           # Hero + typing effect
│       ├── About.tsx          # About + certifications
│       ├── Skills.tsx         # Animated skill bars
│       ├── Experience.tsx     # Timeline
│       ├── Projects.tsx       # 3D tilt project cards
│       ├── Achievements.tsx   # Achievements + Why Hire
│       ├── Contact.tsx        # Form + contact info
│       └── Footer.tsx         # Footer + back to top
└── lib/
    └── utils.ts               # Utility functions
```

## 🔧 Customization

- **Content**: Edit text in each section component
- **Colors**: Modify CSS variables in `globals.css`
- **Projects**: Add/edit the `projects` array in `Projects.tsx`
- **Resume**: Add your `resume.pdf` to the `/public` folder
- **Email**: Set up Resend or SendGrid in `api/contact/route.ts`

## 📧 Email Setup (Optional)

To make the contact form send real emails:

1. Sign up at [resend.com](https://resend.com)
2. Add `RESEND_API_KEY=your_key` to `.env.local`
3. Uncomment the Resend code in `src/app/api/contact/route.ts`
