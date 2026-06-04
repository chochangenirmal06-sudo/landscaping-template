You are a research agent building a demo landscaping website for a real business.
Your job is to research the business thoroughly and return a single filled-out
TypeScript config object — ready to paste directly into a codebase with zero edits.

════════════════════════════════════════════
  BUSINESS TO RESEARCH
════════════════════════════════════════════
Business Name : [BUSINESS NAME]
Website       : [WEBSITE URL]
Google Profile: [GOOGLE BUSINESS URL]
Facebook      : [FACEBOOK URL]
Instagram     : [INSTAGRAM URL or "none"]
Logo image    : [ATTACH LOGO IMAGE]

════════════════════════════════════════════
  YOUR RESEARCH CHECKLIST — do ALL of these
════════════════════════════════════════════
□ Visit the website — read every page (Home, About, Services, Contact)
□ Visit the Google Business Profile — extract rating, review count, hours, address, photos
□ Visit the Facebook page — check About section for founding year, phone, hours
□ Visit Instagram if provided — note visual style and any services mentioned
□ Extract the DOMINANT colors from the attached logo image
□ Pull 3 real Google reviews — 5-star preferred, verbatim text, first name + last initial only
□ Note every service listed anywhere — website nav, Google services tab, Facebook posts
□ Note every credential, license, or certification mentioned anywhere

════════════════════════════════════════════
  ABSOLUTE OUTPUT RULES
════════════════════════════════════════════
• Return ONLY the TypeScript code block — nothing before it, nothing after it.
• Fill EVERY field. Never leave any string as "".
• For any field you cannot confirm: write realistic, plausible content
  AND add a trailing comment:  // PLACEHOLDER — verify
• Do NOT change any field names, object keys, or array shapes.
• Do NOT add fields that don't exist in the template.
• Preserve all inline code comments exactly as shown.

════════════════════════════════════════════
  SECTION-BY-SECTION INSTRUCTIONS
════════════════════════════════════════════

▸ business.name
  Short brand name used inline (e.g. "GreenEdge", not "GreenEdge Landscaping LLC")

▸ business.fullName
  Full legal trading name exactly as listed on their website or Google profile.

▸ business.tagline
  One punchy sentence. Format: "[City]'s [superlative] Landscaping Company."
  Use their own words if their website has a tagline. Otherwise write one.

▸ business.heroLine1 / heroLine2
  Split the tagline across two lines.
  Line 1 = city + adjective phrase (e.g. "Richmond's Premier")
  Line 2 = always ends with "Landscaping Company." or equivalent noun phrase

▸ business.heroSubtitle
  1–2 warm, confident sentences about what they do. Reference their actual services.

▸ business.stats.projectsCompleted
  Use their website if stated. Otherwise estimate: (currentYear − established) × 30,
  round to nearest 50, add "+". Example: 37 years × 30 = 1110 → "1100+"

▸ business.stats.rating
  Pull from Google Business Profile. Format: "4.9★"

▸ business.stats.yearsExperience
  currentYear (2026) minus established year. Format: "15+"

▸ business.mapEmbedUrl
  Use this pattern — substitute the business's city lat/lng:
  https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110000!2d[LNG]!3d[LAT]!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s[BUSINESS+NAME]!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus

▸ business.ctaBadges
  Exactly 3 short trust signals shown in a row in the CTA section.
  Pick the 3 most impactful ones for this specific business.

▸ cta.headlineLines
  Exactly 3 strings. The last string is rendered in italic.
  Write a punchy 3-line call-to-action. The last line should be a short, memorable phrase.
  Example: ["Your dream yard", "is one call", "away."]

▸ colors
  Extract the dominant colors from the attached logo image.
  Map them to the roles below. If the logo uses only 1–2 colors, derive the
  rest using shades and tints of those colors.
  - primary     → darkest brand color (used for navbar/footer/dark sections)
  - primaryText → color that is legible on top of primary (usually white or cream)
  - secondary   → mid-tone supporting color (section labels, italic accents)
  - accent      → logo highlight color (decorative lines, icons)
  - accentDark  → slightly darker accent (CTA buttons)
  - accentLight → slightly lighter accent (button hover state)
  - accentText  → text that sits ON TOP OF accent buttons (ensure contrast)
  - bg          → very light tint of the brand palette (light section backgrounds)
  - bgText      → dark readable color for body text on bg
  - textMuted   → muted grey-ish version of bgText

▸ whyChooseUs.cards
  Write 4 cards that reflect this business's ACTUAL strengths.
  Use facts you found: years in business, certifications, crew size, service area size.
  icon options: "clock" | "award" | "message-circle" | "shield" | "users" | "home" | "leaf" | "star"

▸ about.story
  3 paragraphs. Use real facts from website/Google.
  Para 1: founding story — who, when, why, what they believed in
  Para 2: scale today — crew count, neighborhoods, what they handle
  Para 3: differentiator — not a franchise, personal service, consistent crew

▸ about.valuePills
  4 short achievement pills shown on the home page About Preview section.
  Examples: "1150+ Projects Completed", "Licensed & Insured", "Free Consultations", "BBB Accredited"
  Use real numbers where possible.

▸ about.images
  images[0] = used as the photo in the About Preview section on the home page
  images[1] = second photo in the full About page collage
  Keep both as gallery image paths: "/images/gallery1.jpg" etc.
  Pick index numbers that represent different service categories.

▸ SERVICES — this is the most critical section, read carefully:

  The template below contains a DEFAULT SET of common landscaping services.
  For each default service:
    → Set active: true  if the business clearly offers it (website, Google, Facebook)
    → Set active: false if they clearly do NOT offer it
    → If unsure: keep active: true

  After the default services, add a new entry for EVERY service the business
  offers that is NOT covered by the defaults. Common extras: fencing,
  sod installation, drainage systems, outdoor lighting, pressure washing,
  artificial turf, water features, stump grinding, snow removal, HOA services,
  commercial grounds maintenance, Christmas lights, pond installation, pergolas.

  For custom services: write a real slug, name, tagline, description, badge,
  and 3 features. Leave image as "" and price/priceLabel as "".

▸ homepageServicesLimit
  Set to 6. The home page shows this many service cards; /services shows all.

▸ gallery
  Keep all 9 entries with src paths as "/images/gallery1.jpg" through gallery9.jpg.
  For category: use service categories that match what this business offers.
  Infer from the services they provide — don't guess at photo content.

▸ testimonials
  Pull 3 REAL reviews from their Google Business Profile.
  Use verbatim text. First name + last initial only (e.g. "Sarah M.").
  If you cannot access real reviews, write 3 realistic ones and mark PLACEHOLDER.

▸ faq answers
  Customize every answer using real facts:
  - Mention their actual phone number in the estimates answer
  - Mention their actual license/certification type
  - Name actual neighborhoods/cities they serve
  - Give realistic lead times based on what services they offer

════════════════════════════════════════════
  CONFIG TEMPLATE — fill every field
════════════════════════════════════════════

```typescript
export const clientConfig = {

 // ─── BUSINESS INFO ───────────────────────────
 business: {
   name: "",
   fullName: "",
   tagline: "",
   heroLine1: "",
   heroLine2: "",
   heroSubtitle: "",
   city:        "",
   state:       "",
   serviceArea: "",
   address:     "",
   phone:     "",
   phoneHref: "",
   fax:       "",   // if found, else ""  // PLACEHOLDER — verify
   email:     "",
   contactFormEmail: "",
   hours:       "",
   established: "",
   ctaLabel: "Get a Quote",          // navbar + hero + CTA section primary button
   serviceCardCtaLabel: "Learn More", // "Learn More" link on each home page service card
   seeAllServicesLabel: "See All Services", // button below home page service grid
   aboutCtaLabel: "View More Details", // button in the About Preview section on home page
   trustBadges: [
     // Choose from: "Licensed & Insured", "Free Estimates", "5-Star Rated Service",
     // "Locally Owned & Operated", "Family Owned & Operated", "Veteran Owned",
     // "BBB Accredited", "Satisfaction Guaranteed", "Certified Class A Contractor"
     // Add custom ones if their website highlights something specific. Minimum 3.
   ],
   // Exactly 3 short trust signals shown inline in the CTA section on the home page
   ctaBadges: [
     "",
     "",
     "",
   ],
   stats: {
     projectsCompleted: "",  // estimate if not stated: (2026 - established) × 30, round to nearest 50, add "+"
     rating:            "",  // from Google profile, format: "4.9★"
     yearsExperience:   "",  // 2026 - established year, format: "15+"
   },
   mapEmbedUrl: "",
 },

 // ─── CTA SECTION (home page bottom call-to-action) ───
 cta: {
   eyebrow: "Get Started",
   // Three lines displayed stacked; the last line is rendered in italic
   headlineLines: ["", "", ""],
   subtext: "",
 },

 // ─── WHY CHOOSE US ───────────────────────────
 // icon options: "clock" | "award" | "message-circle" | "shield" | "users" | "home" | "leaf" | "star"
 whyChooseUs: {
   headline: "",
   subtext:  "",
   cards: [
     {
       icon: "clock",
       title: "",
       body: "",
     },
     {
       icon: "award",
       title: "",
       body: "",
     },
     {
       icon: "message-circle",
       title: "",
       body: "",
     },
     {
       icon: "shield",
       title: "",
       body: "",
     },
   ],
 },

 // ─── BRAND ───────────────────────────────────
 logo: "/images/logo.png",
 logoSize: 100,          // navbar logo height in px — adjust if logo looks too big or small
 heroBg: "/images/herobg.png",

 // Extract these from the attached logo image. See color instructions above.
 colors: {
   primary:      "",
   primaryText:  "",
   secondary:    "",
   accent:       "",
   accentDark:   "",
   accentLight:  "",
   accentText:   "",
   bg:           "",
   bgText:       "",
   textMuted:    "",
 },

 // ─── SOCIAL ──────────────────────────────────
 social: {
   instagram: "",  // full URL or "#" if not found
   facebook:  "",  // full URL or "#" if not found
   twitter:   "#", // full URL or "#" if not found
 },

 // ─── ABOUT ───────────────────────────────────
 about: {
   headline: "",
   story: [
     "",  // Para 1: founding story — who, when, why
     "",  // Para 2: scale today — crews, neighborhoods, scope
     "",  // Para 3: differentiator — not a franchise, personal, consistent
   ],
   founderName:  "",
   founderTitle: "",
   founderImage: "/images/owner.png",
   founderBio: [
     "",  // Para 1: career background, why they started the company
     "",  // Para 2: personal tie to the city / community
   ],
   founderCredentials: [
     // Real licenses, certifications, memberships found on their website.
     // Examples: state contractor license, VNLA member, BBB Accredited, ISA Certified Arborist
     // If none found, write one realistic one marked: // PLACEHOLDER — verify
   ],
   principles: [
     { title: "We show up.",             description: "On time, every time. Reliability is how trust gets built." },
     { title: "We don't cut corners.",   description: "Every edge, every mitre, every placement is deliberate." },
     { title: "We communicate.",         description: "You'll always know exactly where your project stands." },
     { title: "We finish what we start.", description: "Every project is seen through to completion. No exceptions." },
   ],
   // images[0] = shown in the About Preview section on the home page — use a gallery path
   // images[1] = second photo in the full About page collage — use a different gallery path
   images: ["/images/gallery5.jpg", "/images/gallery3.jpg"],
   // 4 short achievement pills shown in the About Preview section on the home page
   valuePills: [
     "",
     "",
     "",
     "",
   ],
 },

 // ─── SERVICES ────────────────────────────────
 // homepageServicesLimit — how many cards to show on the home page (rest shown on /services)
 homepageServicesLimit: 6,
 // For each service: set image to "" (a fallback is used automatically until you provide one).
 // The AI prompt comment is ready to paste into Midjourney / DALL-E / Ideogram.
 services: [
   // ── DEFAULT SERVICES ─────────────────────────────────────────────────
   // Set active: true/false based on whether this business offers each service.
   // Cross-reference their website service pages, Google services tab, and Facebook posts.
   // If unsure, keep active: true.
   // Do NOT change slug, badge, or image fields on the defaults below.
   {
     active: true,  // ← set false if they don't offer this
     slug: "lawn-care-maintenance",
     name: "Lawn Care & Maintenance",
     tagline: "A lawn worth coming home to.",
     description: "Weekly mowing, edging, fertilization and weed control that keeps your lawn immaculate year-round.",
     price: "",
     priceLabel: "",
     badge: "MAINTENANCE",
     image: "",
     features: ["Weekly Mowing & Edging", "Fertilization Programs", "Weed & Pest Control"],
   },
   {
     active: true,
     slug: "landscape-design-installation",
     name: "Landscape Design & Installation",
     tagline: "Your vision, beautifully installed.",
     description: "Custom designs crafted to complement your home's architecture, with expert installation using the right plants for your soil, light, and climate.",
     price: "",
     priceLabel: "",
     badge: "DESIGN",
     image: "",
     features: ["Custom Plant Selection", "Proper Planting Techniques", "Residential & Commercial"],
   },
   {
     active: true,
     slug: "irrigation-systems",
     name: "Irrigation Systems",
     tagline: "Smart water. Healthy lawn.",
     description: "Smart sprinkler installation, precision repairs and seasonal optimization that saves water and money.",
     price: "",
     priceLabel: "",
     badge: "IRRIGATION",
     image: "",
     features: ["Smart System Install", "Leak Detection & Repair", "Seasonal Calibration"],
   },
   {
     active: true,
     slug: "hardscaping-patios",
     name: "Hardscaping & Patios",
     tagline: "Outdoor spaces built to last.",
     description: "Patios, walkways, retaining walls and stone steps built to last and designed to impress.",
     price: "",
     priceLabel: "",
     badge: "HARDSCAPE",
     image: "",
     features: ["Patios & Walkways", "Retaining Walls", "Stone Steps & Edging"],
   },
   {
     active: true,
     slug: "seasonal-cleanup",
     name: "Seasonal Cleanup",
     tagline: "Spring-ready. Fall-perfect. Always.",
     description: "Spring prep, fall leaf removal and winter readiness so your yard looks great in every season.",
     price: "",
     priceLabel: "",
     badge: "SEASONAL",
     image: "",
     features: ["Spring & Fall Cleanup", "Leaf Removal", "Winter Prep"],
   },
   {
     active: true,
     slug: "tree-shrub-care",
     name: "Tree & Shrub Care",
     tagline: "Healthy trees. Beautiful property.",
     description: "Expert trimming, shaping, disease treatments and health programs for trees and ornamental shrubs.",
     price: "",
     priceLabel: "",
     badge: "TREE CARE",
     image: "",
     features: ["Crown Trimming & Shaping", "Disease & Pest Treatments", "Shrub Pruning"],
   },
   {
     active: true,
     slug: "mulching-soil-health",
     name: "Mulching & Soil Health",
     tagline: "Feed your soil. Grow everything.",
     description: "Premium mulch installation and soil amendment that retains moisture and feeds your plants naturally.",
     price: "",
     priceLabel: "",
     badge: "MULCHING",
     image: "",
     features: ["Premium Mulch Install", "Soil Amendment", "Weed Suppression"],
   },
   {
     active: true,
     slug: "weed-control-disease-insect",
     name: "Weed Control & Disease/Insect Programs",
     tagline: "Healthy turf. Healthy trees. All season.",
     description: "In-house lawn weed control and tree and shrub disease and insect programs delivered by a licensed specialist.",
     price: "",
     priceLabel: "",
     badge: "TURF CARE",
     image: "",
     features: ["Integrated Pest Management", "Warm & Cool Season Turf Programs", "Small Tree & Shrub Disease Control"],
   },

   // ── CUSTOM SERVICES ──────────────────────────────────────────────────
   // Add one block below for EVERY service this business offers that is NOT
   // covered by the 8 defaults above. Common ones to watch for:
   //   sod installation, drainage systems, sump pumps, fencing,
   //   outdoor / landscape lighting, pressure washing, artificial turf,
   //   stump grinding, pond / water features, pergolas / shade structures,
   //   Christmas light installation, snow removal, commercial grounds maintenance,
   //   HOA services, sports turf, erosion control, vista clearing, grading.
   //
   // Template (copy and fill for each custom service found):
   // {
   //   active: true,
   //   slug: "",           // kebab-case URL slug, e.g. "outdoor-lighting"
   //   name: "",           // display name, e.g. "Outdoor Lighting"
   //   tagline: "",        // short punchy line, e.g. "Your yard, lit beautifully."
   //   description: "",    // 1–2 sentences from their website or written realistically
   //   price: "",          // starting price if stated, e.g. "$200" — or ""
   //   priceLabel: "",     // e.g. "for standard install" — or ""
   //   badge: "",          // short ALL-CAPS label, e.g. "LIGHTING"
   //   image: "",          // leave as "" — a fallback image is used automatically
   //   features: ["", "", ""],  // 3 specific bullet points
   // },
 ],

 // ─── GALLERY ─────────────────────────────────
 // These 9 images feed both the Our Work page and the home page Portfolio section.
 // src paths are filled in manually after downloading real photos.
 // category: use service categories relevant to this business's work
 gallery: [
   { src: "/images/gallery1.jpg", category: "" },
   { src: "/images/gallery2.jpg", category: "" },
   { src: "/images/gallery3.jpg", category: "" },
   { src: "/images/gallery4.jpg", category: "" },
   { src: "/images/gallery5.jpg", category: "" },
   { src: "/images/gallery6.jpg", category: "" },
   { src: "/images/gallery7.jpg", category: "" },
   { src: "/images/gallery8.jpg", category: "" },
   { src: "/images/gallery9.jpg", category: "" },
 ],

 // ─── TESTIMONIALS ────────────────────────────
 testimonials: [
   {
     active: true,
     name: "",      // first name + last initial only, e.g. "Sarah M."
     location: "",  // neighborhood or city from the review, e.g. "Richmond, VA"
     rating: 5,
     text: "",      // verbatim review text from Google
   },
   {
     active: true,
     name: "",
     location: "",
     rating: 5,
     text: "",
   },
   {
     active: true,
     name: "",
     location: "",
     rating: 5,
     text: "",
   },
 ],

 // ─── FAQ ─────────────────────────────────────
 faq: [
   {
     question: "Do you offer free estimates?",
     answer: "",  // mention their actual phone number
   },
   {
     question: "Are you licensed and insured?",
     answer: "",  // mention their actual license type / certification
   },
   {
     question: "Do you offer recurring maintenance plans?",
     answer: "",  // mention actual schedule options they offer
   },
   {
     question: "What areas do you serve?",
     answer: "",  // list actual neighborhoods / cities found on their site
   },
   {
     question: "How far in advance should I book?",
     answer: "",  // realistic lead times based on the services they offer
   },
 ],

}
```
