# Design Guidelines: Roots & Wings Literacy Website

## Design Approach
**Reference-Based Approach**: Drawing from warm, approachable educational platforms with a handcrafted aesthetic (think: gentle classroom meets modern web design)

## Visual Aesthetic
**Overall Vibe**: Warm, gentle, nature-inspired "handmade classroom" aesthetic that feels cozy yet professional

**Color Palette**:
- Primary: Sage greens (various tones for depth)
- Secondary: Warm beige/cream backgrounds
- Accent: Soft blush for highlights and CTAs
- Typography: Warm brown for text
- Ensure WCAG-compliant contrast ratios

## Typography System

**Heading Font**: Elegant serif (warm, bookish feel)
- H1: Large, welcoming statements
- H2: Section headers with botanical spacing
- H3: Subsection markers

**Body Font**: Clean, easy-to-read sans-serif
- Body text: Optimized for readability
- Buttons: Medium weight sans-serif

## Layout & Spacing

**Spacing System**: Use Tailwind units 4, 8, 12, 16, 20 for consistent rhythm
- Section padding: py-16 to py-20 desktop, py-12 mobile
- Card padding: p-8 desktop, p-6 mobile
- Component gaps: gap-8 to gap-12

**Layout Principles**:
- Mobile-first responsive design
- Generous whitespace throughout
- Clean, modern structure with breathing room
- Soft rounded corners on all cards and buttons (rounded-2xl, rounded-xl)

## Design Motifs & Textures

**Background Elements**:
- Subtle paper/wood texture overlays (low opacity)
- Light botanical line art/doodles as decorative elements
- Gentle section dividers with leaf/branch motifs

**Iconography**:
- Small botanical icons (leaves, buds, sprouts) as bullet points
- Custom SVG icon mark: book + sprout combination for logo
- Use simple line-art style for service icons

## Component Library

**Navigation**:
- Sticky header with text-based logo "roots & wings literacy" + icon mark
- Desktop: horizontal nav with hover states
- Mobile: hamburger menu with smooth slide-in
- Prominent "Book a Free Consult" CTA button in header

**Cards**:
- Soft background cards with gentle shadows
- Rounded corners (rounded-2xl)
- Pricing cards: vertical layout with visual hierarchy
- Service cards: icon + title + description format
- Testimonial cards: quote + parent name with subtle botanical accent

**Buttons**:
- Primary CTA: Soft blush background with warm brown text
- Secondary: Outlined sage green
- All buttons: rounded-full for friendly feel
- When on images: apply backdrop-blur-md to button backgrounds

**Forms**:
- Rounded input fields (rounded-lg)
- Soft focus states with sage green accent
- Clear labels and helpful validation messages
- Multi-select dropdowns for "Areas of Concern"

**Trust Elements**:
- Trust strip below hero: "1:1 • Play-based • Personalized • Virtual" with subtle dividers
- Testimonial layout: 3-column grid desktop, stacked mobile
- FAQ: Accordion style with botanical icons as expand/collapse indicators

## Hero Section

**Layout**:
- Full-width hero with warm background treatment
- Centered content: headline + tagline + CTA
- Height: 70-80vh desktop, auto mobile
- Include subtle botanical illustration overlay (low opacity)

**Content Structure**:
- H1: "Virtual Literacy Tutoring with Miss Meg"
- Supportive tagline underneath
- Primary CTA button: "Book a Free Consult"

## Page-Specific Layouts

**Homepage Sections** (in order):
1. Hero
2. Trust strip (horizontal badges)
3. Services overview (5 cards in grid: 2-2-1 or 3-2 layout)
4. "I Provide" highlight block (boxed list with checkmarks)
5. Pricing preview (4 cards, link to full pricing page)
6. Testimonials (3-column grid)
7. FAQ (single column, accordion style)
8. Final CTA banner (full-width, contrasting background)

**Services Page**: Grid layout showcasing 5 focus areas with detailed descriptions and botanical icons

**Pricing Page**: Clean card layout for all 5 packages with note about value/personalization

**About Page**: Two-column layout (image + bio), followed by "Why Roots & Wings?" section

**Contact Page**: Two-column split: form on left, contact info/details on right (stack on mobile)

## Footer
- Multi-column layout: Quick links, Contact info, Tagline
- Botanical divider line above
- Social links (if applicable)
- Copyright with warm brown text

## Images

**Logo**: SVG text-based "roots & wings literacy" with custom book + sprout icon mark

**Decorative Elements**: Botanical line art (leaves, branches, sprouts) as SVG illustrations placed strategically throughout

**Hero Background**: Subtle warm texture or soft botanical pattern (optimized, low file size)

**Service Icons**: Simple line-art style botanical/educational icons for each service area

No large photographic hero image required - focus on illustrated/texture-based backgrounds to maintain handcrafted aesthetic.

## Animations
Minimal and purposeful:
- Smooth page transitions
- Gentle hover states on cards (subtle lift)
- Accordion expand/collapse for FAQ
- Mobile menu slide-in