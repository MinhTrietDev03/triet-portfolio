# Le Minh Triet — Software Engineering Portfolio

A modern, animated personal portfolio built with **React 19 + Vite + TypeScript + Tailwind CSS** and **Three.js / React Three Fiber** for the 3D background. Features smooth Framer Motion transitions, an EmailJS-powered contact form, and a responsive, dark-themed UI.

![Tech](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-3-06B6D4?logo=tailwindcss&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-r3f-black?logo=three.js)

## ✨ Highlights

- 🎨 **3D animated background** powered by Three.js / R3F
- 🪟 **Glassmorphism** UI with smooth Framer Motion transitions
- 📱 **Fully responsive** (mobile, tablet, desktop)
- 📜 **Animated skill marquees** (infinite horizontal scroll per category)
- 🏆 **Certificates gallery** with image lightbox modal
- 📂 **Projects showcase** with detailed modal (overview, features, tech stack, screenshots)
- 📬 **Real email sending** via EmailJS
- ⚡ Lightning-fast Vite build + optimized bundle

## 🛠️ Tech Stack

- **Framework:** React 19, Vite 6, TypeScript 5
- **Styling:** Tailwind CSS 3, custom CSS animations
- **Animation:** Framer Motion 12
- **3D:** Three.js, @react-three/fiber, @react-three/drei
- **Icons:** Lucide React, react-icons (Simple Icons)
- **Email:** @emailjs/browser
- **Backend (optional):** @supabase/supabase-js

## 📂 Project Structure

```
src/
├── components/
│   ├── Navigation.tsx        # Sticky header w/ active section
│   ├── Hero.tsx              # Intro with 3D avatar
│   ├── About.tsx             # About section
│   ├── Skills.tsx            # Marquee skill rows
│   ├── Projects.tsx          # Featured projects grid
│   ├── ProjectDetailModal.tsx# Project detail w/ gallery
│   ├── WorkExperience.tsx    # Timeline
│   ├── Certificates.tsx      # Certs w/ lightbox
│   ├── Contact.tsx           # EmailJS contact form
│   └── Background3D.tsx      # 3D scene
├── App.tsx
├── main.tsx
└── index.css
public/
├── certificates/             # Cert images (HUTECH, Cybersoft, ...)
├── projects/
│   └── fastbite/             # FastBite app screenshots
├── profile.png
└── favicon.svg
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm (or pnpm / yarn)

### Install & run

```bash
# 1. Clone
git clone https://github.com/leminhtriet/leminhtriet-portfolio.git
cd leminhtriet-portfolio

# 2. Install deps
npm install

# 3. Start dev server
npm run dev
```

Open <http://localhost:5173> in your browser.

### Build for production

```bash
npm run build
npm run preview    # preview the production build locally
```

### Lint & typecheck

```bash
npm run lint
npm run typecheck
```

## 📬 Configure Real Email Sending (Contact Form)

The contact form works out-of-the-box in **demo mode** (1.2s simulated delay). To send real emails to `minhtriet03.dev@gmail.com`:

1. Sign up free at [emailjs.com](https://www.emailjs.com/)
2. **Add Service** → connect your Gmail
3. **Create Template** with these variables: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`, `{{to_email}}`
4. Copy **Service ID**, **Template ID**, and **Public Key**
5. Fill in `.env` (copy from `.env.example`):

   ```env
   VITE_EMAILJS_SERVICE_ID=service_xxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
   ```

6. Restart `npm run dev` — the form will now send real emails.

> 🔒 `.env` is gitignored. **Never commit** your EmailJS public key to public repos if you want to keep it private (the free tier has rate limits).

## 🌐 Deployment

This project is **Vercel-ready** out of the box. See [Deployment Guide](#-deploy-to-vercel) below.

## 📜 License

MIT © 2026 [Le Minh Triet](https://github.com/leminhtriet)

## 📫 Contact

- **Email:** minhtriet03.dev@gmail.com
- **GitHub:** [@leminhtriet](https://github.com/leminhtriet)
- **LinkedIn:** [Le Minh Triet](https://www.linkedin.com/in/le-minh-triet-76bb9a35b)
- **Facebook:** [Triet Le Minh](https://www.facebook.com/triet.leminh.942/)
