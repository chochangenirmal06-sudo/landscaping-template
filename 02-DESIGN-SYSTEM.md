# GreenEdge — Design System

## Aesthetic Direction

**Premium Organic Modernism.**

Think: high-end landscape architecture firm meets editorial magazine. Not a cheap lawn mower ad. Clean, confident, with a connection to nature expressed through color and texture — not clip art trees.

One thing someone will remember: **The contrast between deep forest green and warm cream/stone, with gold accents that feel earned, not flashy.**

---

## Color Palette

```css
:root {
  /* Primary */
  --color-forest:     #1A2E1A;   /* Deep forest green — dominant */
  --color-sage:       #4A7C59;   /* Mid green — accents, hover states */
  --color-meadow:     #7BAE7F;   /* Light green — subtle backgrounds */

  /* Neutrals */
  --color-cream:      #F5F0E8;   /* Warm off-white — page background */
  --color-stone:      #E8E0D0;   /* Warm gray — section alternates */
  --color-bark:       #6B5B45;   /* Warm brown — body text, warmth */
  --color-charcoal:   #1C1C1C;   /* Near black — headings */

  /* Accent */
  --color-gold:       #C89B3E;   /* Muted gold — CTAs, highlights */
  --color-gold-light: #E8C06A;   /* Hover state for gold */

  /* Utility */
  --color-white:      #FFFFFF;
  --color-error:      #C0392B;
  --color-success:    #2D6A4F;
}
```

### Usage Rules
- **Backgrounds**: Alternate `--color-cream` and `--color-stone` sections
- **Hero background**: `--color-forest` (dark) with image overlay
- **Primary CTA button**: `--color-gold` text on `--color-forest` bg, or inverse
- **Section headings**: `--color-charcoal` on light sections, `--color-cream` on dark
- **Body text**: `--color-bark` (warmer, less harsh than pure black)

---

## Typography

### Font Pairing
```
Display / Headlines:  "Playfair Display" (Google Fonts) — serif, editorial weight
Body / UI:            "DM Sans" (Google Fonts) — clean, modern, readable
Accent / Labels:      "DM Sans" uppercase tracking — no third font
```

### Scale (Tailwind custom)
```
text-display:  clamp(3rem, 6vw, 5.5rem)  — Hero headline
text-h1:       clamp(2rem, 4vw, 3.5rem)  — Section headlines
text-h2:       clamp(1.5rem, 3vw, 2.25rem)
text-h3:       1.25rem – 1.5rem
text-body:     1rem (16px)
text-small:    0.875rem (14px)
text-label:    0.75rem uppercase tracking-widest
```

### Rules
- Headlines: Playfair Display, weight 700
- Sub-headlines: Playfair Display italic, weight 400
- Body: DM Sans, weight 400
- Buttons/Labels: DM Sans, weight 600, slight tracking

---

## Spacing System

Use Tailwind's default spacing scale. Key values:
```
Section padding vertical:   py-20 md:py-32
Section padding horizontal: px-4 md:px-8 lg:px-16
Max content width:          max-w-7xl mx-auto
Card gap:                   gap-6 md:gap-8
```

---

## Component Styles

### Buttons

**Primary CTA** (Book a Free Estimate)
```
bg: --color-gold
text: --color-forest (dark)
padding: px-8 py-4
font: DM Sans 600, tracking-wide, uppercase
border-radius: rounded-none (sharp) or rounded-sm
hover: bg-gold-light, slight scale(1.02)
transition: 200ms ease
```

**Secondary / Ghost**
```
border: 2px solid current color
bg: transparent
hover: bg fills in
```

**Text Link**
```
text-sage underline-offset-4 hover:underline
```

### Cards (Service Cards, Testimonial Cards)
```
bg: white or --color-cream
border: 1px solid --color-stone
border-radius: rounded-lg
padding: p-6 md:p-8
shadow: shadow-md hover:shadow-xl
transition: 300ms ease (shadow + slight translateY)
```

### Section Labels (above headlines)
```
text-label (0.75rem uppercase tracking-widest)
color: --color-gold
```

Example:
```
OUR SERVICES
↓
Everything Your Property Needs
```

---

## Animation Conventions

### Framer Motion (section reveals)
```js
// Standard section entry
initial: { opacity: 0, y: 40 }
whileInView: { opacity: 1, y: 0 }
transition: { duration: 0.6, ease: "easeOut" }
viewport: { once: true, margin: "-100px" }

// Staggered children
parent: { transition: { staggerChildren: 0.1 } }
child: same initial/animate as above
```

### GSAP (Hero only)
```js
// Staggered text reveal on load
gsap.from(".hero-word", {
  y: 80, opacity: 0,
  stagger: 0.08,
  duration: 1,
  ease: "power3.out"
})
// Parallax background on scroll
gsap.to(".hero-bg", { yPercent: 30, ease: "none", scrollTrigger: {...} })
```

### Hover Micro-interactions
- Service cards: `translateY(-4px)` + shadow lift
- Nav links: underline slides in from left
- CTA button: scale(1.02) + glow shadow in gold

---

## Imagery Style

- **Photography tone**: Golden hour light, lush greens, clean suburban homes
- **No stock photo clichés**: No men pointing at plants, no clip art
- Use Unsplash sources with `?auto=format&fit=crop` params for consistency
- Before/After: Same angle, high contrast transformation
- Team photos: Candid, professional, outdoors

---

## shadcn/ui Components to Install

```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add accordion   # FAQ
npx shadcn-ui@latest add dialog      # Lightbox (if needed)
npx shadcn-ui@latest add input
npx shadcn-ui@latest add textarea
npx shadcn-ui@latest add badge
```
