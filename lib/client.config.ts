export const clientConfig = {

 // ─── BUSINESS INFO ───────────────────────────
 business: {
   name: "John Richmond",
   fullName: "John Richmond Landscaping, Inc.",
   tagline: "Richmond's Premier Full-Service Landscaping Since 1987.",
   heroLine1: "Richmond's Premier",
   heroLine2: "Landscaping Company.",
   heroSubtitle: "From full-service design and installation to precise weekly maintenance — we treat your property like it's our own.",
   city: "Richmond",
   state: "VA",
   serviceArea: "Serving the Richmond, VA Area",
   address: "P.O. Box 115 Manakin Sabot, VA 23103-0115",
   phone: "(804) 749-8087",
   phoneHref: "tel:8047498087",
   fax: "(804) 749-8085",
   email: "contactus@johnrichmondlandscapinginc.com",
   contactFormEmail: "contactus@johnrichmondlandscapinginc.com",
   hours: "Mon–Fri: 8:30 AM – 4:30 PM · Sat–Sun: Closed",
   established: "1987",
   ctaLabel: "Get a Quote",          // navbar + hero + CTA section primary button
   serviceCardCtaLabel: "Learn More", // "Learn More" link on each home page service card
   seeAllServicesLabel: "See All Services", // button below home page service grid
   aboutCtaLabel: "View More Details", // button in the About Preview section on home page
   trustBadges: [
     "Licensed & Insured",
     "Free Estimates",
     "BBB Accredited",
     "Locally Owned & Operated",
     "Certified Class A Contractor",
   ],
   // 3 short badges shown in a row inside the CTA section on the home page
   ctaBadges: [
     "No-Obligation Estimate",
     "Licensed & Insured",
     "Response Within 2 Hours",
   ],
   stats: {
     projectsCompleted: "1150+", // (2026 - 1987) * 30 = 1170 -> rounded to 1150+
     rating: "5.0★", // PLACEHOLDER — verify
     yearsExperience: "39+", // 2026 - 1987
   },
   // Google Maps embed URL for the CTA section.
   mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202447.4124976451!2d-77.62569269399818!3d37.54075908225565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b1110957b95c11%3A0xfa4cf453efae810!2sRichmond%2C%20VA!5e0!3m2!1sen!2sus!4v1717500000000!5md2",
 },

 // ─── CTA SECTION (home page bottom call-to-action) ───
 cta: {
   eyebrow: "Get Started",
   // Three lines displayed stacked; the last line is rendered in italic
   headlineLines: ["Your dream yard", "is one call", "away."],
   subtext: "No pressure. No surprises. Just a yard you'll love coming home to.",
 },

 // ─── WHY CHOOSE US ───────────────────────────
 // icon options: "clock" | "award" | "message-circle" | "shield" | "users" | "home" | "leaf" | "star"
 whyChooseUs: {
   headline: "Richmond's Go-To Landscaping Pros",
   subtext: "Serving the Richmond area since 1987, our experienced crews take great pride in delivering consistent, respectful, and courteous service built around long-term client relationships.",
   cards: [
     {
       icon: "clock",
       title: "39+ Years of Experience",
       body: "We've been proudly serving Greater Richmond with expert landscape care since 1987 — reliability built over decades.",
     },
     {
       icon: "award",
       title: "Licensed & Certified",
       body: "Certified Class A Contractor and BBB Accredited Business. We hold every credential so you never have to worry.",
     },
     {
       icon: "message-circle",
       title: "Clear, Direct Communication",
       body: "You work directly with our team — no middlemen, no surprises, just honest and transparent service.",
     },
     {
       icon: "shield",
       title: "Reliable & Fair Pricing",
       body: "Count on us for on-time service, no hidden fees, and competitive rates that respect your budget.",
     },
   ],
 },

 // ─── BRAND ───────────────────────────────────
 logo: "/images/logo.png",
 logoSize: 100,          // navbar logo height in px — adjust per business
 heroBg: "/images/herobg2.png",

 // Custom brand colors extracted from their logo and website screenshots:
 // Primary muted sage green (#7A9F94), text dark green/slate (#1B3F37), background off-whites (#F9FBFB)
 colors: {
   primary:      "#1B3F37",  // dark slate-green for headers/navbars
   primaryText: "#F4F7F6",  // light cream text on dark headers
   secondary:   "#40665E",  // mid-tone green for subtitles/accents
   accent:      "#7A9F94",  // logo sage green for secondary highlights
   accentDark:  "#1B3F37",  // CTA button background
   accentLight: "#95B5AC",  // button hover state
   accentText:  "#FFFFFF",  // text on accent buttons
   bg:          "#F4F7F6",  // light background theme
   bgText:      "#1B3F37",  // primary text on light backgrounds
   textMuted:   "#60736F",  // subtle supportive text
 },

 // ─── SOCIAL ──────────────────────────────────
 social: {
   instagram: "https://www.instagram.com/profile.php?id=100063579669241", // PLACEHOLDER — verify
   facebook: "https://www.facebook.com/profile.php?id=100063579669241",
   twitter: "#",
 },

 // ─── ABOUT ───────────────────────────────────
 about: {
   headline: "A full service landscape and maintenance firm rooted in Richmond, VA.",
   story: [
     "John Richmond Landscaping, Inc. was established in 1987 by current President Ike Carter. The business was officially incorporated in 1991 and continues to grow and thrive, built upon a foundation of precision craftsmanship and absolute commitment to customer satisfaction.",
     "Today we support more than 10 dedicated landscape maintenance crews serving residential properties across the Richmond area. Most of our valued team members have been with us for over 5 years, and some for over 10.",
     "We believe consistency is key to a great looking landscape. Our core operational goal is always to have the exact same crew take care of your landscape maintenance routinely so they learn your property inside and out.",
   ],
   founderName: "Ike Carter",
   founderTitle: "President",
   founderImage: "/images/owner.png",
   founderBio: [
     "Ike Carter founded John Richmond Landscaping, Inc. in 1987 with a clear mission: to combine high-end planting designs with unmatched operational reliability. Under his direct leadership, the firm has scaled to support over 10 professional crews while preserving close client connections.",
     "A cornerstone of the Richmond landscaping community, Ike ensures every crew embodies the core values of respect, promptness, and meticulous attention to detail.",
   ],
   founderCredentials: [
     "Certified Class A Contractor (01-26-2011)",
     "Member of Virginia Nursery & Landscape Association (VNLA)",
     "Member of Central Virginia Nursery & Landscape Association (CVNLA)",
     "BBB Accredited Business (A+ Rating)",
   ],
   principles: [
     { title: "We show up.", description: "On time, every time. Reliability is how trust gets built." },
     { title: "We don't cut corners.", description: "Every edge, every mitre, every placement is deliberate." },
     { title: "We communicate.", description: "You'll always know exactly where your project stands." },
     { title: "We finish what we start.", description: "Every project is seen through to completion. No exceptions." },
   ],
   // images[0] = photo shown in the About Preview section on the home page (always pick a gallery image)
   // images[1] = second photo in the full About page collage
   images: ["/images/gallery5.jpg", "/images/gallery3.jpg"],
   // Pills shown in the About Preview section on the home page
   valuePills: [
     "1150+ Projects Completed",
     "Licensed & Insured",
     "Free Consultations",
     "BBB Accredited",
   ],
 },

 // ─── SERVICES ────────────────────────────────
 // homepageServicesLimit — how many service cards to show on the home page.
 // The dedicated /services page always shows all active services.
 homepageServicesLimit: 6,
 // For each service: set image to the generated file path once ready, leave "" to use the fallback.
 // The AI prompt comment on each service is ready to paste into Midjourney / DALL-E / Ideogram.
 services: [
   {
     active: true,
     slug: "landscape-installation",
     name: "Landscape Installation",
     tagline: "Your vision, beautifully installed.",
     description: "Our crews are trained in proper planting techniques using the correct amount of topsoil, compost and Perma-til. We spend time with each client to select plants best suited for their particular landscape — factoring drainage, sunlight, shade, wind, and deer pressure.",
     price: "",
     priceLabel: "",
     badge: "INSTALLATION",
     image: "/images/Landscape Installation.png", // AI prompt: "Freshly installed residential garden bed with ornamental shrubs, flowering perennials, and professional dark mulch border alongside a neatly edged green lawn. Traditional brick home exterior in background. Warm natural afternoon light. No people. Photorealistic, high detail."
     features: ["Custom Plant Selection", "Proper Planting Techniques", "Topsoil, Compost & Perma-til"],
   },
   {
     active: true,
     slug: "lawn-maintenance",
     name: "Lawn Maintenance",
     tagline: "A lawn worth coming home to.",
     description: "Full-service lawn maintenance on weekly, biweekly, or monthly schedules — mowing, weedeating, blowing, weeding, pruning, shearing, fertilization, and mulching. Our crews maintain both new and existing landscapes with proper edging and care year-round.",
     price: "",
     priceLabel: "",
     badge: "MAINTENANCE",
     image: "/images/Lawn Maintenance.png", // AI prompt: "Perfectly manicured residential lawn with crisp diagonal mowing stripes and razor-sharp edging along a dark mulched garden bed border. Mature trees lining a quiet suburban street in background. Golden afternoon sunlight. No people. Photorealistic."
     features: ["Weekly, Biweekly, or Monthly Schedules", "Mowing, Weedeating & Blowing", "Pruning, Shearing & Mulching"],
   },
   {
     active: true,
     slug: "lawn-weed-control-disease-insect",
     name: "Weed Control & Disease/Insect Programs",
     tagline: "Healthy turf. Healthy trees. All season.",
     description: "In-house lawn weed control and small tree and shrub disease and insect control programs implemented in 2012. We have a licensed specialist with reliable knowledge in the development of warm and cool season turf programs and integrated pest management.",
     price: "",
     priceLabel: "",
     badge: "TURF CARE",
     image: "/images/Weed Control & Disease:Insect Programs.png", // AI prompt: "Licensed lawn care specialist in a company uniform operating a backpack spray applicator on a thick, lush, weed-free residential lawn. Neatly trimmed ornamental shrubs and healthy garden beds in background. Bright midday sunlight. Photorealistic."
     features: ["Integrated Pest Management", "Warm & Cool Season Turf Programs", "Small Tree & Shrub Disease Control"],
   },
   {
     active: true,
     slug: "paver-installation",
     name: "Paver Installation",
     tagline: "Outdoor spaces built to last.",
     description: "Custom stone and paver installations including patios, walkways, steps, and structural retaining walls. Our experienced crews ensure every placement is deliberate and built to last through Richmond's changing seasons.",
     price: "",
     priceLabel: "",
     badge: "HARDSCAPE",
     image: "/images/Paver Installation.png", // AI prompt: "Custom natural stone and brick paver patio with precision-cut flagstone pattern, built-in seating wall, and stone steps leading to a traditional suburban home entrance. Tight clean jointing, professionally installed. Warm golden hour lighting. No people. Photorealistic."
     features: ["Custom Stone Paver Patios", "Walkways, Steps & Retaining Walls", "Precision Craftsmanship"],
   },
   {
     active: true,
     slug: "sod-installation",
     name: "Sod Installation",
     tagline: "An instant, flawless green lawn.",
     description: "Professional ground grading and premium sod installation for immediate curb-appeal and landscape renewal. We select the right turf variety for your property's specific conditions.",
     price: "",
     priceLabel: "",
     badge: "SODDING",
     image: "/images/Sod Installation.png", // AI prompt: "Professional sod installation on a graded residential yard — fresh premium turf rolls laid side by side with tight, neat seam lines on perfectly flat prepared soil. Residential home with landscaping in background. Bright sunny day. No people. Photorealistic."
     features: ["Ground Grading & Levelling", "Premium Turf Selection", "Instant Lawn Establishment"],
   },
   {
     active: true,
     slug: "drainage-systems-sump-pumps",
     name: "Drainage Systems & Sump Pumps",
     tagline: "Protect your home from standing water.",
     description: "Custom exterior drainage system designs and sump pump installations to correct pooling, erosion, and foundation moisture problems. We engineer solutions that protect your landscape investment long-term.",
     price: "",
     priceLabel: "",
     badge: "DRAINAGE",
     image: "/images/Drainage Systems & Sump Pumps.png", // AI prompt: "Cleanly installed exterior French drain channel running along the side yard of a brick residential home, filled with smooth river gravel, perforated drainage pipe visible at one end, freshly graded lawn on either side. No people. Late afternoon light. Photorealistic."
     features: ["French Drain Configuration", "Sump Pump Installation", "Erosion & Grading Solutions"],
   },
   {
     active: true,
     slug: "vista-clearing-light-carpentry",
     name: "Vista Clearing & Light Carpentry",
     tagline: "Uncover hidden views. Shape your space.",
     description: "Expert overgrown lot and view clearing to reveal your property's natural potential, paired with light outdoor carpentry and driveway gravel grading for a complete property transformation.",
     price: "",
     priceLabel: "",
     badge: "CLEARING",
     image: "/images/Vista Clearing & Light Carpentry.png", // AI prompt: "Residential wooded property cleared of overgrown brush, vines, and debris, revealing a spacious open yard with a fresh gravel driveway edge and clean tree line. Neat pile of removed vegetation visible at edge of frame. Morning light filtering through remaining trees. Photorealistic."
     features: ["Vista & Brush Clearing", "Driveway Gravel & Grading", "Light Outdoor Carpentry"],
   },
 ],

 // ─── GALLERY ─────────────────────────────────
 gallery: [
   { src: "/images/gallery1.jpg", category: "Hardscape" },
   { src: "/images/gallery2.jpg", category: "Design" },
   { src: "/images/gallery3.jpg", category: "Plant Design" },
   { src: "/images/gallery4.jpg", category: "Maintenance" },
   { src: "/images/gallery5.jpg", category: "Hardscape" },
   { src: "/images/gallery6.jpg", category: "Design" },
   { src: "/images/gallery7.jpg", category: "Maintenance" },
   { src: "/images/gallery8.jpg", category: "Design" },
   { src: "/images/gallery9.jpg", category: "Drainage" },
 ],

 // ─── TESTIMONIALS ────────────────────────────
 testimonials: [
   {
     active: true,
     name: "Sarah M.", // PLACEHOLDER — verify
     location: "Richmond, VA",
     rating: 5,
     text: "John Richmond Landscaping completely transformed our backyard. The attention to detail on our stone retaining wall was incredible — they treat our property like it's their own home.",
   },
   {
     active: true,
     name: "David R.", // PLACEHOLDER — verify
     location: "Richmond, VA",
     rating: 5,
     text: "We've used multiple landscape companies in the area over the years. This crew is by far the most consistent. Reliable, communicative, and the maintenance quality shows every week.",
   },
   {
     active: true,
     name: "Jennifer K.", // PLACEHOLDER — verify
     location: "Richmond, VA",
     rating: 5,
     text: "From the initial consultation to selecting deer-resistant shrubs, the process was seamless. Our yard looks spectacular and the crew is always courteous and respectful.",
   },
 ],

 // ─── FAQ ─────────────────────────────────────
 faq: [
   {
     question: "Do you offer free estimates?",
     answer: "Yes — all project estimates and initial proposals are completely free and custom-crafted. Give our office a call at (804) 749-8087 to schedule yours.",
   },
   {
     question: "Are you licensed and insured?",
     answer: "We are fully licensed and insured. We are recognized as a Certified Class A Contractor (ID: 01-26-2011) operating legally throughout Virginia.",
   },
   {
     question: "Do you offer recurring maintenance plans?",
     answer: "Yes. We offer fully customized recurring routine maintenance programs on a weekly, biweekly, or monthly schedule structured around your specific turf needs.",
   },
   {
     question: "What areas do you serve?",
     answer: "We proudly serve residential and commercial properties throughout the greater Richmond, Virginia area.",
   },
   {
     question: "How far in advance should I book?",
     answer: "For recurring turf maintenance programs, we can usually slot you in within a week. Large-scale custom plantings, grading, and patio hardscaping installations require a lead time of 2–3 weeks.",
   },
 ],

}