# GreenEdge — Site Architecture

## Pages

For Phase 1 (demo), this is a **single-page scrolling site** with a dedicated `/thank-you` page after form submission.

```
/                  → Main landing page (all sections)
/thank-you         → Post-form submission confirmation
```

Optionally (if time allows):
```
/services/[slug]   → Individual service detail pages
```

---

## Section Order (Main Page)

Each section is a standalone React component. Order is optimized for conversion.

| # | Section | Component File | Priority |
|---|---------|---------------|---------|
| 1 | **Navbar** | `Navbar.tsx` | Critical |
| 2 | **Hero** | `Hero.tsx` | Critical |
| 3 | **Social Proof Bar** | `SocialProofBar.tsx` | High |
| 4 | **Services** | `Services.tsx` | Critical |
| 5 | **Why Choose Us** | `WhyUs.tsx` | High |
| 6 | **Before & After** | `BeforeAfter.tsx` | High |
| 7 | **Process** | `Process.tsx` | Medium |
| 8 | **Gallery** | `Gallery.tsx` | High |
| 9 | **Testimonials** | `Testimonials.tsx` | Critical |
| 10 | **Pricing / CTA** | `PricingCTA.tsx` | High |
| 11 | **FAQ** | `FAQ.tsx` | Medium |
| 12 | **Contact / Estimate Form** | `ContactForm.tsx` | Critical |
| 13 | **Footer** | `Footer.tsx` | High |

---

## Folder Structure (Next.js App Router)

```
greenedge/
├── app/
│   ├── layout.tsx             # Root layout (fonts, metadata)
│   ├── page.tsx               # Main landing page (imports all sections)
│   └── thank-you/
│       └── page.tsx           # Thank you page
├── components/
│   ├── sections/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── SocialProofBar.tsx
│   │   ├── Services.tsx
│   │   ├── WhyUs.tsx
│   │   ├── BeforeAfter.tsx
│   │   ├── Process.tsx
│   │   ├── Gallery.tsx
│   │   ├── Testimonials.tsx
│   │   ├── PricingCTA.tsx
│   │   ├── FAQ.tsx
│   │   ├── ContactForm.tsx
│   │   └── Footer.tsx
│   └── ui/                    # shadcn/ui components live here
├── lib/
│   └── utils.ts               # shadcn utility (cn helper)
├── public/
│   └── images/                # All site images
├── styles/
│   └── globals.css            # Tailwind base + CSS variables
├── tailwind.config.ts
├── next.config.js
└── package.json
```

---

## Scroll & Animation Strategy

- **Navbar**: Transparent on load → solid on scroll (with backdrop blur)
- **Hero**: GSAP timeline — text reveals + parallax background
- **Each section**: Framer Motion `whileInView` with stagger on cards/items
- **Before/After**: Drag slider with JS
- **Gallery**: Masonry or lightbox grid
- **Testimonials**: Auto-scrolling carousel
- **Form**: Inline success state (no page reload), then redirect to `/thank-you`

---

## Responsiveness

All sections must be fully responsive:
- Mobile: `< 768px`
- Tablet: `768px – 1024px`  
- Desktop: `> 1024px`

Mobile-first Tailwind classes throughout.
