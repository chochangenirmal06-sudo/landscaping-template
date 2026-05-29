# GreenEdge — Claude Code Workflow

This is your operating manual for building the site in Claude Code, section by section.

---

## Setup — Run This First (Once)

Open Claude Code in your project folder and run:

```bash
# 1. Create Next.js 14 project
npx create-next-app@latest greenedge --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*"

cd greenedge

# 2. Install animation libraries
npm install framer-motion gsap

# 3. Install shadcn/ui
npx shadcn-ui@latest init
# Choose: Default style, CSS variables: yes, color: slate (we'll override)

# 4. Add shadcn components we need
npx shadcn-ui@latest add button card accordion input textarea badge dialog

# 5. Install Google Fonts (next/font)
# Already available via next/font/google — no npm install needed

# 6. Install additional utilities
npm install clsx tailwind-merge lucide-react
```

---

## Claude Code Prompt Structure

When you open Claude Code for each section, use this prompt format:

```
[PASTE THE SECTION SPEC FROM 03-SECTION-SPECS.md]
[PASTE THE DESIGN SYSTEM FROM 02-DESIGN-SYSTEM.md]

Build the [SECTION NAME] component at components/sections/[ComponentName].tsx.
Follow the design system exactly. Make it premium and high-converting.
Use Framer Motion for scroll animations. [Any section-specific notes.]
```

---

## Build Order & Checklist

Work through sections in this exact order. Do not move on until each is ✅.

### Phase A — Foundation (Do first, always)

- [ ] `app/layout.tsx` — fonts (Playfair Display + DM Sans), metadata, global wrapper
- [ ] `styles/globals.css` — CSS variables from design system, Tailwind base overrides
- [ ] `tailwind.config.ts` — custom colors, fonts, spacing mapped to design system
- [ ] `app/page.tsx` — skeleton that imports all sections (add as you build)

**Claude Code prompt for foundation:**
```
Set up the global styles and config for GreenEdge Landscaping.
- tailwind.config.ts: Add custom colors (forest, sage, meadow, cream, stone, bark, 
  charcoal, gold, gold-light) and font families (playfair, dmsans)
- globals.css: CSS custom properties matching the design system + Tailwind base
- layout.tsx: Load Playfair Display (400, 700, italic) and DM Sans (400, 600) 
  from next/font/google. Set metadata (title, description, favicon placeholder)
- page.tsx: Import shell (just a div for now)
Design system: [paste 02-DESIGN-SYSTEM.md]
```

---

### Phase B — Section by Section

For each section, use this Claude Code prompt template:

**Section:** Navbar
```
Build components/sections/Navbar.tsx for GreenEdge Landscaping.
Specs: [paste Navbar section from 03-SECTION-SPECS.md]
Design system: [paste 02-DESIGN-SYSTEM.md]
Requirements:
- Fixed position, z-50
- Transparent on hero, transitions to bg-forest/95 + backdrop-blur on scroll
- Logo: "GreenEdge" in Playfair Display with a simple leaf SVG mark
- Mobile hamburger → full-screen menu with stagger animation (Framer Motion)
- CTA button in gold
- Use Framer Motion for mobile menu open/close
```

**Section:** Hero
```
Build components/sections/Hero.tsx for GreenEdge Landscaping.
Specs: [paste Hero section from 03-SECTION-SPECS.md]
Design system: [paste 02-DESIGN-SYSTEM.md]
Requirements:
- 100vh full-bleed, image from Unsplash (landscape/garden, dark overlay)
- GSAP timeline: label → headline words stagger → sub → CTAs → trust row
- Parallax on scroll using GSAP ScrollTrigger
- Trust row with 4 items separated by dots
- Two CTAs: primary gold button + ghost "View Our Work"
- Bouncing chevron scroll indicator at bottom
```

*(Continue for each section — paste relevant spec + design system)*

---

## Iteration Protocol

For each section, after Claude Code generates it:

1. **Preview in browser** (`npm run dev`)
2. **Check against spec** — does it match `03-SECTION-SPECS.md`?
3. **Check design system** — correct colors, fonts, spacing?
4. **Check animations** — smooth? correct timing?
5. **Check mobile** — DevTools responsive mode at 375px, 768px
6. **If anything is off**, tell Claude Code specifically what to fix

Use this feedback format with Claude Code:
```
The [section name] looks good but:
1. The headline font needs to be Playfair Display, not sans-serif
2. The card hover animation is too fast — slow it to 300ms
3. On mobile (375px), the grid is breaking — should be 1 column
Fix these and keep everything else the same.
```

---

## Image Strategy

Use Unsplash URLs for now (free, high quality, no download needed):

```
Hero bg:       https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&auto=format
Services:      https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&auto=format
Gallery imgs:  Search unsplash.com for "landscaping", "lawn care", "garden design"
Before/After:  https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&auto=format
```

In Next.js, use `<Image>` from `next/image` with `unoptimized` or add Unsplash to `next.config.js`:
```js
// next.config.js
images: {
  domains: ['images.unsplash.com']
}
```

---

## Deployment (After All Sections Complete)

```bash
# 1. Final build check
npm run build

# 2. Push to GitHub
git init
git add .
git commit -m "feat: GreenEdge demo complete"
git remote add origin https://github.com/YOUR_USERNAME/greenedge
git push -u origin main

# 3. Deploy to Vercel
# Go to vercel.com → New Project → Import from GitHub → Deploy
# Or via CLI:
npm install -g vercel
vercel --prod
```

---

## Common Claude Code Tips

- **Be specific about file paths** — always say `components/sections/Hero.tsx`
- **Reference the design system** — paste relevant sections, don't assume it knows
- **One section at a time** — don't ask for multiple sections in one prompt
- **Paste existing code** when asking for fixes — Claude Code has context but be explicit
- **Ask for explanations** if something looks wrong — "why did you use X instead of Y?"

---

## Quality Bar

Before considering any section "done," it must pass:

- [ ] Matches the spec in `03-SECTION-SPECS.md`
- [ ] Uses correct fonts (Playfair Display headlines, DM Sans body)
- [ ] Uses correct colors from design system
- [ ] Animations are smooth and purposeful (not janky or excessive)
- [ ] Fully responsive: looks great at 375px, 768px, 1280px, 1920px
- [ ] No console errors
- [ ] CTA buttons are visually prominent and labeled correctly
- [ ] Content matches `05-COPY-AND-CONTENT.md`
