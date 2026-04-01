# ScolioAustin - Clinical Precision 3D Scoliosis Correction Platform

> **Pro-Max Clinical Prototype** using Next.js, TypeScript, Tailwind CSS, Framer Motion, and High-End UI/UX Design System

## 🎯 Overview

ScolioAustin is a high-fidelity medical web platform featuring:

- **Mission 1: Interactive Spine Visualizer** — Dynamic SVG spine with curvature animation, real-time annotations (Mild/Moderate/Severe), and clinical thresholds
- **Mission 2: Diagnostic Flow Hero** — 60/40 split layout with glassmorphism multi-step assessment form (Age → Curve Type → Pain Scale)
- **Mission 3: Traditional vs. Specialized Comparison** — High-contrast method cards with hover animations and evidence-based citations
- **Mission 4: PWA with Offline Support** — Full PWA manifest, service worker, and offline-first mode for Patient Exercises route

**Design System:** Integrated **HighEnd UX Sheesh** design tokens for clinical precision, accessibility (WCAG AA), and performance optimization.

---

## 📋 Tech Stack

- **Framework:** Next.js 14 + React 18
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3 + Custom tokens
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **PWA:** next-pwa (offline support, installable)
- **Package Manager:** npm / yarn / pnpm

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ (recommend 20 LTS)
- npm / yarn / pnpm installed

### Installation

```bash
# Navigate to project directory
cd scolioaustin

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. Changes auto-reload.

### Type Checking

```bash
npm run type-check
```

Validates TypeScript without building.

### Production Build

```bash
npm run build
npm start
```

Generates optimized production build and starts server on port 3000.

---

## 🎨 Design System Integration

ScolioAustin uses the **HighEnd UX Sheesh** design system:

### Color Palette
- **Base:** `#FFFFFF` (clinical-white)
- **Surface:** `#F8FAFC` (clinical-surface)
- **Text:** `#0F172A` (clinical-text)
- **Primary:** `#2563EB` (spinal-blue)

### Token Files
- Tailwind config: `tailwind.config.ts` (extends with clinical tokens)
- Global styles: `app/globals.css` (Tailwind directives + custom utilities)
- Custom animations: `float`, `glow`, `pulse-subtle`

### Component Patterns
- **Card Clinical:** `.card-clinical` (shadow, border, hover state)
- **Glassmorphism:** `.glass` (backdrop blur, border transparency)
- **Selection:** Blue primary with white text

---

## 📁 Project Structure

```
scolioaustin/
├── app/
│   ├── layout.tsx           # Root layout with metadata & PWA setup
│   ├── page.tsx             # Home page (all sections + footer)
│   └── globals.css          # Global styles & Tailwind directives
│
├── components/
│   ├── HeroSection.tsx      # Mission 2: Diagnostic Flow (60/40 + form)
│   ├── SpineVisualizer.tsx  # Mission 1: Interactive spine with curvature
│   └── MethodComparison.tsx # Mission 3: Traditional vs. ScolioAustin
│
├── public/
│   ├── manifest.json        # PWA manifest (offline shortcuts)
│   └── favicon.ico          # Placeholder (auto-generated)
│
├── package.json             # Dependencies & scripts
├── next.config.ts           # Next.js config (with PWA)
├── tsconfig.json            # TypeScript configuration
├── tailwind.config.ts       # Tailwind CSS tokens & theme
├── postcss.config.mjs       # PostCSS processors
└── README.md                # This file
```

---

## ✨ Features

### Mission 1: Interactive Spine Visualizer
- **Slider Control:** 0–90° curvature adjustment
- **SVG Animation:** Smooth path morphing (straight → C-curve → S-curve)
- **Dynamic Annotations:**
  - Mild (10–25°): "Observation & Schroth Initiation"
  - Moderate (25–40°): "Bracing & Intensive PT"
  - Severe (40°+): "Surgical Consultation Range"
- **Visual Feedback:** Animated vertebrae markers, color-coded annotation cards

### Mission 2: Diagnostic Flow Hero
- **60/40 Layout:** Staggered H1 animation + multi-step form
- **Form Steps:**
  1. Age input (number field)
  2. Curve type selection (Thoracic/Lumbar icons)
  3. Pain scale (1–10 slider with contextual feedback)
- **Glassmorphism Card:** Semi-transparent background with blur effect
- **Progress Indicator:** Visual step indicator (1/3, 2/3, 3/3)
- **Action:** "Generate My Path" button with hover scale animation

### Mission 3: Traditional vs. Specialized Comparison
- **Two-Card Grid:** Traditional PT (grayscale) vs. ScolioAustin (highlighted)
- **Feature Comparison:** Checkmarks for strengths, strikethrough for limitations
- **Hover Expansion:** Cards lift & glow, evidence citations reveal
- **Stats Display:** Effectiveness %, Sessions, Customization level
- **Benefits Highlight:** 3D Precision, Respiratory Integration, ADL Coaching

### Mission 4: PWA & Performance
- **Manifest.json:** App name, icons, shortcuts, themes
- **Offline Support:** next-pwa auto-generates service worker
- **Install Prompts:** iOS/Android install suggestions
- **Image Optimization:** Next/Image with priority for hero assets
- **Responsive Design:** Mobile-first, 375px–1440px breakpoints

---

## 🎬 Component Animations

All components use **Framer Motion** for smooth, performant animations:

- **Staggered Entry:** Container with `staggerChildren` for sequenced reveals
- **Scroll Triggers:** `whileInView` for lazy animations on viewport intersection
- **Hover Effects:** Cards lift, icons rotate, buttons scale
- **Layout Animations:** Dynamic height/width transitions
- **SVG Path Animation:** Spine visualization with `pathLength` and `animate`

---

## 🔐 Accessibility & Best Practices

✅ **WCAG AA Compliance:**
- Minimum 4.5:1 contrast ratio (text on clinical-white)
- Semantic HTML (nav, section, footer tags)
- ARIA labels for interactive elements
- Keyboard navigation support
- prefers-reduced-motion respected

✅ **Performance:**
- Code splitting (Next.js automatic)
- Image optimization (lazy loading)
- Minified CSS & JavaScript
- Service worker caching
- Fast Time to Interactive (likely <2s)

✅ **SEO:**
- Dynamic metadata (title, description, keywords)
- Structured data ready
- Mobile-friendly meta viewport
- Robots.txt & sitemap ready

---

## 📱 PWA Features

### Install on Device
1. Open ScolioAustin in a modern browser
2. Address bar → "Install app" prompt
3. App installs as home screen icon
4. Works offline for Patient Exercises route

### Shortcuts
- **Quick Assessment:** Shortcut to multi-step form
- **Visualizer:** Shortcut to spine animation

### Offline Fallback
Next-pwa caches assets during first visit. Offline routes pre-cache critical paths.

---

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```
Vercel auto-detects Next.js and deploys with PWA support.

### Docker
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Environment Variables
Create `.env.local`:
```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

---

## 🐛 Troubleshooting

### Port 3000 in use
```bash
# Find & kill process on port 3000
lsof -i :3000
kill -9 <PID>
```

### Build errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### PWA not installing
- Ensure `manifest.json` is in `public/`
- Serve over HTTPS in production
- Check browser console for service worker errors

---

## 📚 Design Token Reference

### Spacing Scale
- `--space-xs`: 4px (tight gaps)
- `--space-sm`: 8px (icon spacing)
- `--space-md`: 16px (standard padding)
- `--space-lg`: 24px (section padding)
- `--space-xl`: 32px (large gaps)

### Shadow System
- `--shadow-sm`: Subtle lift
- `--shadow-md`: Cards & buttons
- `--shadow-lg`: Modals & dropdowns
- `--shadow-xl`: Hero images & featured cards

### Border Radius
- Small: 8px (buttons, inputs)
- Medium: 12px (cards, badges)
- Large: 16px (modals, containers)

---

## 🎓 Learning Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React Icons](https://lucide.dev/)
- [Web.dev PWA](https://web.dev/progressive-web-apps/)

---

## 📄 License

This project is proprietary. Built for **ScolioAustin**.

---

## 💬 Support & Contact

For feature requests, bug reports, or clinical inquiries:
- Email: support@scolioaustin.com
- Docs: https://docs.scolioaustin.com
- Issues: GitHub Issue Tracker (if public)

---

**Built with ❤️ + Clinical Precision**  
*Last updated: April 2, 2026*
