# Data Analyst Portfolio

A modern, professional single-page portfolio website for a fresher data analyst. Built to make a strong impression when applying for internships and entry-level data analyst positions.

## Features

- **10 Sections**: Hero, About, Skills, Projects, Dashboard Showcase, Experience, Certifications, Resume, Contact, Footer
- **Dark / Light Mode**: System preference detection + manual toggle persisted in localStorage
- **Smooth Animations**: CSS keyframe animations triggered by Intersection Observer on scroll
- **Typing Animation**: Rotating role text in the hero section
- **Stat Counters**: Animated counters for projects, SQL problems solved, and dashboards
- **Glassmorphism UI**: Modern glass-effect cards throughout
- **Contact Form**: Netlify Forms integration via AJAX fetch
- **Responsive**: Fully mobile-first responsive design
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | TanStack Start (React 19) |
| Styling | Tailwind CSS v4 |
| Icons | Lucide React |
| Fonts | Inter (Google Fonts) |
| Forms | Netlify Forms |
| Hosting | Netlify |

## Running Locally

```bash
npm install
npm run dev
# App runs at http://localhost:3000
```

For Netlify features (Forms, Edge Functions), use:

```bash
netlify dev
# App runs at http://localhost:8888
```

## Customization

Replace placeholder content in the component files:

| What | File |
|------|------|
| Name, bio, location | `src/components/portfolio/Hero.tsx`, `About.tsx` |
| Skills & levels | `src/components/portfolio/Skills.tsx` |
| Project cards | `src/components/portfolio/Projects.tsx` |
| Education & experience | `src/components/portfolio/Experience.tsx` |
| Certifications | `src/components/portfolio/Certifications.tsx` |
| Profile photo | Replace `public/headshot-on-white.jpg` |
| Resume PDF | Add `public/resume.pdf` |
