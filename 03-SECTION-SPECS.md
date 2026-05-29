# GreenEdge — Section Specifications

Each section is defined with layout, content, animations, and conversion intent.

---

## 1. Navbar

**Purpose:** Navigation + persistent CTA  
**Height:** 72px  
**Behavior:** Transparent over Hero → `bg-forest/95 backdrop-blur` on scroll

**Layout:**
```
[Logo: GreenEdge mark + wordmark]    [Nav Links]    [📞 Call]  [Book Estimate →]
```

**Nav Links:** Services | Our Work | Reviews | FAQ | Contact  
**Mobile:** Hamburger → full-screen slide-down menu  
**CTA Button:** Gold, "Get Free Estimate"  
**Logo:** Stylized leaf/edge mark + "GreenEdge" in Playfair Display  

**Sticky:** Yes — `position: fixed top-0`  
**z-index:** 50  

---

## 2. Hero

**Purpose:** Immediate impact, communicate premium quality, primary CTA  
**Height:** 100vh (min 700px)  
**Background:** Full-bleed photo of a stunning landscaped home (dark overlay 50%)  
**Text color:** Cream/white

**Content:**
```
[Label]     AUSTIN'S PREMIER LANDSCAPING

[Headline]  Where Every Edge
            Is Perfect.

[Sub]       Transform your outdoor space with Austin's most trusted
            landscaping team. Serving homeowners since 2009.

[CTAs]      [Book Free Estimate →]   [View Our Work ↓]

[Trust row] ⭐ 4.9/5 Rating  |  500+ Projects  |  Licensed & Insured  |  15 Yrs Experience
```

**Animation (GSAP):**
1. Background image fades in (opacity 0→1, 800ms)
2. Label slides up + fades in
3. Each word of headline staggers in (y: 80→0)
4. Sub and CTAs fade up
5. Trust row slides up last
6. Scroll: parallax bg shifts down at 30% rate

**Scroll Indicator:** Animated bouncing chevron at bottom center

---

## 3. Social Proof Bar

**Purpose:** Instant credibility, break visual rhythm  
**Background:** `--color-forest` (dark green)  
**Height:** ~80–100px

**Content (5 items, divider-separated):**
```
⭐ 4.9 Google Rating  |  500+ Happy Clients  |  15 Years in Austin  |  Licensed & Insured  |  Same-Week Quotes
```

**Animation:** Count-up numbers when in view (Framer Motion + custom hook)

---

## 4. Services

**Purpose:** Explain what we do, link to individual service details  
**Background:** `--color-cream`

**Header:**
```
OUR SERVICES
Everything Your Property Needs
We handle every aspect of your outdoor space — from routine maintenance
to dramatic landscape transformations.
```

**6 Service Cards (2x3 grid, collapses to 1-col mobile):**

| # | Icon | Service | Blurb |
|---|------|---------|-------|
| 1 | 🌿 | Lawn Care & Maintenance | Weekly mowing, edging, fertilization, and weed control |
| 2 | 🎨 | Landscape Design | Custom designs that complement your home's architecture |
| 3 | 💧 | Irrigation Systems | Smart sprinkler installation, repair, and optimization |
| 4 | 🪨 | Hardscaping | Patios, walkways, retaining walls, and outdoor living spaces |
| 5 | 🍂 | Seasonal Cleanup | Spring prep, fall leaf removal, and winter readiness |
| 6 | 🌳 | Tree & Shrub Care | Trimming, shaping, health treatments, and removal |

**Card Design:**
- Icon in gold circle
- Title in Playfair Display
- Short description in DM Sans
- "Learn More →" text link

**Animation:** Stagger reveal on scroll, card hover lifts

---

## 5. Why Choose Us

**Purpose:** Differentiation — why GreenEdge over competitors  
**Background:** `--color-forest` (dark, image-textured or solid)  
**Text:** Cream/white

**Layout:** Left column headline + right column 4-item grid

**Header (left):**
```
WHY GREENEDGE
The Difference
Is in the Details.
Hundreds of Austin homeowners trust us
with their most important investment.
[Book Your Free Estimate →]
```

**4 Differentiators (right, 2x2 grid):**

| Icon | Title | Copy |
|------|-------|------|
| ✓ | Guaranteed Satisfaction | We're not done until you love it — period. |
| ⏱ | On-Time, Every Time | We respect your schedule and show up when promised. |
| 🛡 | Fully Licensed & Insured | $2M liability coverage. Your property is always protected. |
| 📋 | Detailed Project Plans | You see exactly what we'll do before we lift a shovel. |

**Animation:** Left content slides in from left, right grid staggers in from right

---

## 6. Before & After

**Purpose:** Visceral proof — show the transformation  
**Background:** `--color-stone`

**Header:**
```
REAL RESULTS
The Transformation
Speaks for Itself.
```

**Layout:** Large drag-slider component  
- Single image pair with drag handle in the center
- Left: BEFORE label, right: AFTER label
- Below: 2 smaller static before/afters as thumbnails

**Interaction:** Drag handle left/right to reveal before/after  
**Mobile:** Touch-friendly drag  

**Caption below slider:**
```
"The Hendersons' backyard — from overgrown mess to outdoor oasis in 3 weeks."
```

---

## 7. Our Process

**Purpose:** Reduce anxiety — show how easy it is to get started  
**Background:** `--color-cream`

**Header:**
```
HOW IT WORKS
From First Call to
Finished Project.
Getting started is simpler than you think.
```

**4-Step Process (horizontal timeline on desktop, vertical on mobile):**

| Step | Title | Description |
|------|-------|-------------|
| 01 | Free Consultation | We visit your property, listen to your vision, and assess the space — no cost, no obligation. |
| 02 | Custom Proposal | Within 48 hours, you receive a detailed plan with transparent pricing. No surprises. |
| 03 | We Get to Work | Our crew shows up on time, works clean, and keeps you updated throughout. |
| 04 | You Love It | Final walkthrough together. We don't leave until everything is perfect. |

**Animation:** Steps animate in sequence as user scrolls through them (Framer Motion)

---

## 8. Gallery / Portfolio

**Purpose:** Visual proof of quality  
**Background:** `--color-charcoal` (dark, makes photos pop)

**Header:**
```
OUR WORK
Over 500 Projects.
Every One of Them Perfect.
```

**Layout:** Masonry grid — 12 images, mix of portrait/landscape  
- Hover: overlay with project type label  
- Click: lightbox (shadcn Dialog or custom)  

**Filter tabs (optional):** All | Lawn Care | Hardscaping | Design | Trees

**CTA below grid:**
```
[View Full Portfolio →]    (links to /work or Instagram)
```

---

## 9. Testimonials

**Purpose:** Social proof — real customer voices  
**Background:** `--color-forest`  
**Text:** Cream

**Header:**
```
WHAT CLIENTS SAY
Austin Homeowners
Love Their Yards.
```

**Layout:** Auto-scrolling horizontal carousel (pauses on hover)  
**Cards:** White/cream cards on dark bg  

**5 Testimonials:**

1. **Sarah M., Westlake Hills**  
   ⭐⭐⭐⭐⭐  
   "GreenEdge completely transformed our backyard. I cry happy tears every time I look out the window. Worth every penny."

2. **Tom & Linda R., Barton Creek**  
   ⭐⭐⭐⭐⭐  
   "Third landscaping company we tried. First one we're keeping. They showed up when they said, did exactly what they promised, and our yard has never looked better."

3. **James K., Tarrytown**  
   ⭐⭐⭐⭐⭐  
   "The irrigation system they installed cut my water bill by 30%. The lawn is healthier than it's ever been. Call them before your neighbor does."

4. **Maria S., Circle C Ranch**  
   ⭐⭐⭐⭐⭐  
   "From the first call to the final walkthrough, they were professional, clean, and communicative. I felt respected as a customer the entire time."

5. **David H., Rollingwood**  
   ⭐⭐⭐⭐⭐  
   "We had a deadline for a party. They finished two days early. The yard was the talk of the neighborhood. Absolutely recommend."

**Below carousel:**
```
⭐ 4.9 out of 5 based on 312 Google Reviews    [Read More Reviews →]
```

---

## 10. Pricing / Mid-Page CTA

**Purpose:** Anchor price expectations, push toward conversion  
**Background:** `--color-gold` or `--color-cream` with gold accents

**Option A — Simple CTA Banner:**
```
[Large headline] Ready for a Yard You're Proud Of?
[Sub]            Estimates are free. Results are guaranteed.
[CTA]            [Book Your Free Estimate →]   [Or call: (512) 555-0190]
```

**Option B — Pricing Tiers (3 cards):**

| Plan | Price | Includes |
|------|-------|---------|
| Maintenance | From $149/mo | Weekly mow, edge, blow, monthly fertilization |
| Enhancement | From $899 | One-time landscape refresh, mulch, trim, cleanup |
| Transformation | Custom Quote | Full redesign, hardscaping, irrigation |

Use Option A for simplicity, Option B if we want to anchor expectations.

---

## 11. FAQ

**Purpose:** Remove objections, answer common questions  
**Background:** `--color-stone`

**Header:**
```
FAQ
Questions We Hear
All the Time.
```

**7 Questions (shadcn Accordion):**

1. **How quickly can you start?** — Most projects begin within 1–2 weeks of approval.
2. **Do you offer free estimates?** — Absolutely. On-site estimates are always free with no obligation.
3. **Are you licensed and insured?** — Yes. We carry $2M in general liability and full workers' comp.
4. **Do I need to be home during the work?** — Not required, but we love a final walkthrough with you.
5. **What areas do you serve?** — All of Austin and surrounding areas within 30 miles.
6. **Do you offer maintenance contracts?** — Yes — weekly, bi-weekly, and monthly plans available.
7. **What if I'm not happy with the result?** — We make it right. That's our written guarantee.

---

## 12. Contact / Estimate Form

**Purpose:** Primary conversion point — capture lead  
**Background:** `--color-forest` (dark) with form card in cream/white

**Header:**
```
GET YOUR FREE ESTIMATE
Let's Talk About
Your Project.
No pressure. No obligation. Just a conversation
about what's possible for your outdoor space.
```

**Left column — Contact Info:**
```
📞  (512) 555-0190
📧  hello@greenedgeatx.com
📍  Serving all of Austin, TX
⏰  Mon–Sat: 7am – 6pm
```

**Right column — Form Fields:**
- Full Name *
- Phone Number *
- Email Address *
- Service Interested In (dropdown): Lawn Care / Landscape Design / Irrigation / Hardscaping / Cleanup / Other
- Tell Us About Your Project (textarea)
- [Get My Free Estimate →] (gold button, full width)
- Micro-copy: "We respond within 24 hours. No spam, ever."

**Success State:** Inline message, then redirect to `/thank-you`

---

## 13. Footer

**Purpose:** Navigation, trust, legal  
**Background:** `--color-charcoal`  
**Text:** Cream/muted

**Layout (4 columns):**

```
[Logo + tagline]        [Services]         [Company]         [Contact]
GreenEdge               Lawn Care          About Us          (512) 555-0190
Where Every Edge        Landscape Design   Our Work          hello@greenedgeatx.com
Is Perfect.             Irrigation         Reviews           Austin, TX
                        Hardscaping        FAQ
[Social icons]          Seasonal Cleanup   Careers
Instagram Pinterest     Tree Care          Contact
Facebook Houzz
```

**Bottom bar:**
```
© 2025 GreenEdge Landscaping. All rights reserved.    Privacy Policy | Terms of Service
```

**Trust badges:** Licensed | Insured | BBB Accredited | Google Guaranteed
