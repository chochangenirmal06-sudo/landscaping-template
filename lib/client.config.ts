export const clientConfig = {

  // ─── BUSINESS INFO ───────────────────────────
  business: {
    name: "GreenEdge",
    fullName: "GreenEdge Landscaping",
    tagline: "Austin's Most Trusted Landscaping Company.",
    heroSubtitle: "From first mow to full transformation — we take care of your yard like it's our own.",
    city: "Austin",
    state: "TX",
    serviceArea: "Serving Greater Austin, TX",
    address: "Austin, Texas",
    phone: "(512) 555-0190",
    phoneHref: "tel:5125550190",
    email: "hello@greenedge.com",
    contactFormEmail: "npermanent67@gmail.com",
    hours: "Mon–Sat: 7AM – 6PM",
    established: "2009",
    stats: {
      projectsCompleted: "500+",
      rating: "4.9★",
      yearsExperience: "15+",
    },
    // Google Maps embed URL for the CTA section.
    // Generate at: https://www.google.com/maps/embed → Share → Embed a map → copy src URL
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110844.72736442!2d-97.8394!3d30.2672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b592d8d2ac6b%3A0x2dc4a0e2035cd8b2!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
  },

  // ─── WHY CHOOSE US ───────────────────────────
  // Headline for the "Why Choose Us" section.
  // The four cards below it are generic and do not need editing.
  whyChooseUs: {
    headline: "Austin's Go-To Landscaping Pros",
    subtext: "With over 15 years of experience and a hands-on approach, we deliver trusted, top-quality landscaping tailored to your needs.",
  },

  // ─── BRAND ───────────────────────────────────
  // Logo goes in public/images/logo.png
  // If no logo available use null
  logo: "/images/logo.png",

  // Change these 10 values to rebrand the entire site.
  // primary + primaryText pair: dark background color and what reads on top of it.
  // accent + accentDark + accentLight: highlight color family (lines, icons, buttons).
  // accentText: text that sits on top of accent-colored buttons.
  // bg + bgText pair: light section background and body text on it.
  // secondary: supporting tone for section labels and subtle italic accents.
  // textMuted: secondary / helper text throughout.
  colors: {
    primary:     "#1A2E1A",  // dark backgrounds — navbar, footer, dark sections
    primaryText: "#F5F0E8",  // text / icons on primary-colored backgrounds
    secondary:   "#4A7C59",  // section labels, supporting tone
    accent:      "#C89B3E",  // decorative lines, icons, quote marks
    accentDark:  "#B8902A",  // CTA buttons
    accentLight: "#E8C06A",  // button hover state
    accentText:  "#1A2E1A",  // text on accent-colored buttons
    bg:          "#F5F0E8",  // light section backgrounds
    bgText:      "#1A2E1A",  // body text on light backgrounds
    textMuted:   "#6B7280",  // secondary / muted text
  },

  // ─── SOCIAL ──────────────────────────────────
  social: {
    instagram: "#",
    facebook: "#",
    twitter: "#",
  },

  // ─── ABOUT ───────────────────────────────────
  about: {
    headline: "A landscaping firm rooted in Austin, TX.",
    story: [
      "GreenEdge was founded in 2009 by a team of Austin natives who believed that your outdoor space deserves the same care and attention as the inside of your home. We started with a single truck and a belief that showing up on time and doing excellent work was enough. It still is.",
      "Today we serve 500+ homeowners across Greater Austin — from West Lake Hills to Cedar Park — handling everything from weekly lawn care to full landscape design and hardscaping.",
      "We are not a franchise. We are not a call center. We are your neighbors — and we treat your yard like it's our own.",
    ],
    founderName: "James Mitchell",
    founderTitle: "Founder & Lead Designer",
    founderImage: "/images/owner.png",
    founderBio: [
      "James started GreenEdge after spending a decade working for corporate landscaping firms where speed always won over quality. He wanted to build something different — a company where every client felt like the only client.",
      "A UT Austin graduate and lifelong Austinite, James leads every major project personally.",
    ],
    founderCredentials: [
      "Licensed Irrigator — TX LI #7834",
      "TCIA Member",
      "City of Austin Master Native Certified",
    ],
    principles: [
      { title: "We show up.", description: "On time, every time. Reliability is how trust gets built." },
      { title: "We don't cut corners.", description: "Every edge, every mitre, every placement is deliberate." },
      { title: "We communicate.", description: "You'll always know exactly where your project stands." },
      { title: "We finish what we start.", description: "Every project is seen through to completion. No exceptions." },
    ],
  },

  // ─── SERVICES ────────────────────────────────
  // Set active: false to hide across entire site
  services: [
    {
      active: true,
      slug: "lawn-care-maintenance",
      name: "Lawn Care & Maintenance",
      tagline: "A lawn worth coming home to.",
      description: "Weekly mowing, edging, fertilization and weed control that keeps your lawn immaculate year-round.",
      price: "$85",
      priceLabel: "for standard residential lawn",
      badge: "MAINTENANCE",
      image: "/images/Lawn%20Care%20%26%20Maintenance1.png",
      features: ["Weekly Mowing & Edging", "Fertilization Programs", "Weed & Pest Control"],
    },
    {
      active: true,
      slug: "landscape-design",
      name: "Landscape Design",
      tagline: "Your vision. Our expertise.",
      description: "Custom designs crafted to complement your home's architecture and personal vision for outdoor living.",
      price: "$499",
      priceLabel: "for initial design consultation",
      badge: "DESIGN",
      image: "/images/Landscape%20Design1.png",
      features: ["Initial Consultation", "Digital Landscape Plans", "Residential & Commercial"],
    },
    {
      active: true,
      slug: "irrigation-systems",
      name: "Irrigation Systems",
      tagline: "Smart water. Healthy lawn.",
      description: "Smart sprinkler installation, precision repairs and seasonal optimization that saves water and money.",
      price: "$299",
      priceLabel: "for system inspection & tune-up",
      badge: "IRRIGATION",
      image: "/images/Irrigation%20Systems1.png",
      features: ["Smart System Install", "Leak Detection & Repair", "Seasonal Calibration"],
    },
    {
      active: true,
      slug: "hardscaping-patios",
      name: "Hardscaping & Patios",
      tagline: "Outdoor spaces built to last.",
      description: "Patios, walkways, retaining walls and outdoor kitchens built to last and designed to impress.",
      price: "$1,500",
      priceLabel: "for standard patio installation",
      badge: "HARDSCAPE",
      image: "/images/Hardscaping%20%26%20Patios1.png",
      features: ["Patios & Walkways", "Retaining Walls", "Outdoor Kitchens"],
    },
    {
      active: true,
      slug: "seasonal-cleanup",
      name: "Seasonal Cleanup",
      tagline: "Spring-ready. Fall-perfect. Always.",
      description: "Spring prep, fall leaf removal and winter readiness so your yard looks great in every season.",
      price: "$250",
      priceLabel: "for standard residential cleanup",
      badge: "SEASONAL",
      image: "/images/Seasonal%20Cleanup1.png",
      features: ["Spring & Fall Cleanup", "Leaf Removal", "Winter Prep"],
    },
    {
      active: true,
      slug: "tree-shrub-care",
      name: "Tree & Shrub Care",
      tagline: "Healthy trees. Beautiful property.",
      description: "Expert trimming, shaping, health treatments and safe removal by certified arborists.",
      price: "$150",
      priceLabel: "for standard trim & shape",
      badge: "TREE CARE",
      image: "/images/Tree%20%26%20Shrub%20Care1.png",
      features: ["Crown Trimming & Shaping", "Health Treatments", "Safe Removal"],
    },
    {
      active: true,
      slug: "mulching-soil-health",
      name: "Mulching & Soil Health",
      tagline: "Feed your soil. Grow everything.",
      description: "Premium mulch installation and soil amendment that retains moisture and feeds your plants naturally.",
      price: "$120",
      priceLabel: "for standard mulch installation",
      badge: "MULCHING",
      image: "/images/Mulching%20%26%20Soil%20Health1.png",
      features: ["Premium Mulch Install", "Soil Amendment", "Weed Suppression"],
    },
    {
      active: true,
      slug: "garden-bed-design",
      name: "Garden Bed Design",
      tagline: "Color, texture, and life — year round.",
      description: "Custom seasonal and perennial garden beds designed for the local climate — colorful and low-maintenance.",
      price: "$350",
      priceLabel: "for initial garden bed design",
      badge: "GARDEN",
      image: "/images/Garden%20Bed%20Design1.png",
      features: ["Seasonal Planting", "Perennial Beds", "Native Plant Selection"],
    },
  ],

  // ─── GALLERY ─────────────────────────────────
  // Add up to 9 images downloaded from their
  // Facebook or Instagram. Name them gallery1.jpg
  // through gallery9.jpg and place in public/images/
  // For demo, remove filters — just a clean grid.
  gallery: [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg",
    "/images/gallery5.jpg",
    "/images/gallery6.jpg",
    "/images/gallery7.jpg",
    "/images/gallery8.jpg",
    "/images/gallery9.jpg",
  ],

  // ─── TESTIMONIALS ────────────────────────────
  // Pull 3 real Google reviews
  // Set active: false to hide any testimonial
  testimonials: [
    {
      active: true,
      name: "Sarah M.",
      location: "West Lake Hills, TX",
      rating: 5,
      text: "GreenEdge completely transformed our backyard. The attention to detail was incredible — they treated our yard like it was their own home.",
    },
    {
      active: true,
      name: "David R.",
      location: "Cedar Park, TX",
      rating: 5,
      text: "We've used three landscaping companies over the years. GreenEdge is the only one we've kept. Reliable, communicative, and the quality shows.",
    },
    {
      active: true,
      name: "Jennifer K.",
      location: "Round Rock, TX",
      rating: 5,
      text: "From the initial consultation to the final walkthrough, the process was seamless. Our front yard has never looked better.",
    },
  ],

  // ─── FAQ ─────────────────────────────────────
  faq: [
    {
      question: "Do you offer free estimates?",
      answer: "Yes — all estimates are completely free and no-obligation. We'll assess your property and provide a detailed quote within 1 business day.",
    },
    {
      question: "Are you licensed and insured?",
      answer: "Fully licensed and insured. We carry general liability and workers compensation on every job.",
    },
    {
      question: "Do you offer recurring maintenance plans?",
      answer: "Yes. We offer weekly, bi-weekly and monthly maintenance plans for residential and commercial properties.",
    },
    {
      question: "What areas do you serve?",
      answer: "We serve Greater Austin including West Lake Hills, Cedar Park, Round Rock, Pflugerville, and surrounding areas.",
    },
    {
      question: "How far in advance should I book?",
      answer: "For maintenance, we can usually start within a week. For design and installation projects, 2–3 weeks lead time is recommended.",
    },
  ],

}
