# Roots & Wings Literacy

## Overview
A mobile-first, SEO-optimized website for a virtual literacy tutoring business. The site features a warm, nature-inspired "handmade classroom" aesthetic with sage greens, warm beige/cream, and soft blush accents.

## Current State
- **Status**: Complete MVP
- **Pages**: Home, Services, Pricing, About, Contact
- **Features**: Contact form with validation, SEO meta tags, JSON-LD schema, sitemap, robots.txt

## Recent Changes
- 2026-01-04: Initial build complete with all 5 pages, contact form API, and SEO implementation

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
- Booking link: Search for `BOOKING_LINK` constant in components
- Analytics: Placeholders in client/index.html

## API Endpoints

### POST /api/contact
Submits a contact form.
```typescript
{
  parentName: string;
  email: string;
  childAgeGrade: string;
  areasOfConcern: string[];
  message?: string;
}
```

## User Preferences
- Mobile-first responsive design
- Nature-inspired botanical icons
- Warm, approachable aesthetic
- Strong call-to-action buttons

## Development
- Run: `npm run dev`
- Port: 5000
