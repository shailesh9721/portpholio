# 🚀 Professional Portfolio — MERN + Tailwind CSS

A stunning, production-ready portfolio for Full Stack Developers built with the **MERN stack** (MongoDB, Express, React, Node.js) and **Tailwind CSS**.

## ✨ Features

- **Dark, glassmorphism design** with blue/purple gradient theme
- **Animated hero** with typewriter effect and floating particles
- **Scroll-reveal animations** on all sections
- **Interactive skills** section with animated progress bars
- **Project showcase** with live demo & GitHub links
- **Working contact form** — messages saved to MongoDB + email notifications
- **Rate limiting** & input validation on the backend
- **Responsive** for all screen sizes
- **Cursor glow** effect (desktop)
- **Custom scrollbar** styling

## 📁 Project Structure

```
portfolio/
├── client/               # React + Vite + Tailwind frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx       ← Typewriter, social links
│   │   │   ├── About.jsx      ← Stats, bio, download CV
│   │   │   ├── Skills.jsx     ← Animated progress bars
│   │   │   ├── Projects.jsx   ← Project cards with links
│   │   │   ├── Contact.jsx    ← Form with validation
│   │   │   └── Footer.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── tailwind.config.js
│   └── vite.config.js
│
└── server/               # Node.js + Express + MongoDB backend
    ├── models/
    │   └── Contact.js         ← Mongoose schema
    ├── controllers/
    │   └── contactController.js
    ├── routes/
    │   └── contact.js
    ├── index.js               ← Main server entry
    └── .env.example
```

## 🛠️ Quick Setup

### 1. Install all dependencies

```bash
npm run install:all
```

### 2. Configure environment

```bash
cp server/.env.example server/.env
```

Edit `server/.env`:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/portfolio

# Optional: for email notifications on contact form
EMAIL_USER=your.gmail@gmail.com
EMAIL_PASS=your_gmail_app_password
EMAIL_TO=your.gmail@gmail.com
```

> 💡 **MongoDB**: Use [MongoDB Atlas](https://cloud.mongodb.com) for free cloud hosting, or install MongoDB locally.

### 3. Run in development

```bash
npm run dev
```

This starts both:
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000

## 🎨 Customization Guide

### Personal Info
Update these files with your details:

| File | What to change |
|------|---------------|
| `client/src/components/Hero.jsx` | Name, roles in typewriter |
| `client/src/components/About.jsx` | Bio, stats, initials |
| `client/src/components/Skills.jsx` | Your tech skills & levels |
| `client/src/components/Projects.jsx` | Your actual projects |
| `client/src/components/Contact.jsx` | Your email, LinkedIn, GitHub |
| `client/src/components/Footer.jsx` | Your name |

### Add Your Photo
Replace the initials avatar in `About.jsx`:
```jsx
// Replace the div with an <img> tag:
<img src="/your-photo.jpg" className="w-32 h-32 rounded-2xl object-cover" alt="Your Name" />
```

### Color Theme
All colors are controlled by Tailwind classes. Main colors used:
- Primary: `indigo-500` / `indigo-600`
- Accent: `purple-500` / `purple-600`
- Background: `#080618`

## 🚀 Deployment

### Frontend (Netlify / Vercel)
```bash
cd client && npm run build
# Deploy the /client/dist folder
```

### Backend (Railway / Render / Heroku)
```bash
cd server && npm start
# Set environment variables in your hosting dashboard
```

### Full-Stack (Railway)
Deploy the whole repo — Railway can handle both services.

## 📡 API Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| `POST` | `/api/contact` | Submit contact form |
| `GET` | `/api/contact` | Get all messages (admin) |
| `GET` | `/api/health` | Health check |

### Contact Rate Limits
- General API: 100 req / 15 min
- Contact form: 5 submissions / hour per IP

## 🧰 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, Vite, Tailwind CSS 3 |
| Backend | Node.js, Express 4 |
| Database | MongoDB + Mongoose |
| Email | Nodemailer (optional) |
| Security | Helmet, express-rate-limit, express-validator |
| Fonts | Syne (display), DM Sans (body), JetBrains Mono |

---

Made with ❤️ and way too much ☕
