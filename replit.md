# Roots & Wings Literacy

## Overview
A mobile-first, SEO-optimized website for a virtual literacy tutoring business. The site features a warm, nature-inspired "handmade classroom" aesthetic with sage greens, warm beige/cream, and soft blush accents.

## Current State
- **Status**: Complete MVP — Netlify/GitHub-ready
- **Pages**: Home, Services, Pricing, About, Contact
- **Features**: Netlify Forms contact form, SEO meta tags, JSON-LD schema, sitemap, robots.txt, image lazy-loading, GitHub Pages SPA routing

## Recent Changes
- 2026-01-04: Initial build complete with all 5 pages, contact form API, and SEO implementation
- 2026-03-13: Netlify Forms integration (replaces server API), removed "Book a Free Consult" buttons, added image lazy loading, GitHub Pages 404 SPA redirect, netlify.toml config

## Project Architecture

### Frontend (client/)
- **Framework**: React with TypeScript
- **Routing**: Wouter
- **Styling**: Tailwind CSS with custom design system
- **Components**: shadcn/ui
- **State Management**: TanStack Query

### Backend (server/)
- **Framework**: Express.js
- **Storage**: In-memory (MemStorage)
- **API**: Contact form submission endpoint

### Key Files
- `client/src/App.tsx` - Main router with SEO wrapper
- `client/src/components/layout/` - Header, Footer, Layout
- `client/src/components/sections/` - Homepage sections
- `client/src/pages/` - Page components
- `server/routes.ts` - API endpoints
- `shared/schema.ts` - Types and validation schemas

## Design System

### Colors (defined in index.css)
- **Primary (Sage Green)**: `--primary: 145 25% 38%`
- **Background (Warm Beige)**: `--background: 30 8% 97%`
- **Blush Accent**: `--blush: 12 45% 75%`
- **Foreground (Warm Brown)**: `--foreground: 25 12% 15%`

### Typography
- **Serif (Headings)**: Libre Baskerville
- **Sans (Body)**: DM Sans

### Configuration
- Analytics: Placeholders in client/index.html
- No booking/Calendly links remain in the codebase

## Contact Form
- Uses **Netlify Forms** — submits via `fetch` POST to `/` with `form-name: contact`
- Hidden detection form in `client/index.html` (required by Netlify)
- Falls back gracefully in non-Netlify environments (dev/GitHub Pages)

## Deployment
- **Netlify**: `netlify.toml` at repo root — build: `npm run build`, publish: `dist/public`, SPA redirects configured
- **GitHub Pages**: `client/public/404.html` redirects unknown paths to root; `client/index.html` restores path from sessionStorage

## User Preferences
- Mobile-first responsive design
- Nature-inspired botanical icons
- Warm, approachable aesthetic
- Strong call-to-action buttons

## Development
- Run: `npm run dev`
- Port: 5000
