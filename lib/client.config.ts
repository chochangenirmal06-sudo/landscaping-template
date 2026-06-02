export const clientConfig = {

  // ─── BUSINESS INFO ───────────────────────────
  business: {
    name: "North Shore",
    fullName: "North Shore Landscaping",
    tagline: "Newcastle's Most Trusted Landscaping Company.",
    heroLine1: "Newcastle's Premier Artisanal",
    heroLine2: "Landscaping Company.",
    heroSubtitle: "Transforming outdoor spaces across Newcastle and the North East with expert garden design, professional paving, and bespoke styling tailored completely to your lifestyle.",
    city: "Newcastle upon Tyne",
    state: "UK",
    serviceArea: "Serving Newcastle upon Tyne and the North East",
    address: "Newcastle upon Tyne, United Kingdom",
    phone: "+44 7590 579997",
    phoneHref: "tel:+447590579997",
    email: "tom@northshorelandscaping.co.uk",
    contactFormEmail: "npermanent67@gmail.com",
    hours: "Mon–Fri: 8AM – 5PM",
    established: "2020",
    ctaLabel: "Get a Free Quote",
    trustBadges: [
      "5-Star Rated Service",
      "Locally Owned & Operated",
      "Free Estimates",
      "Satisfaction Guaranteed",
    ],
    stats: {
      projectsCompleted: "150+",
      rating: "5.0★",
      yearsExperience: "6+",
    },
    // Google Maps embed URL for the CTA section.
    // Generate at: https://www.google.com/maps/embed → Share → Embed a map → copy src URL
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d146747.0145657475!2d-1.74836655!3d54.9961019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487e716bc5cd057d%3A0xc0095ab70b80baee!2sNorth%20Shore%20Landscaping!5e0!3m2!1sen!2suk!4v1717326000000!5m2!1sen!2suk",
  },

  // ─── WHY CHOOSE US ───────────────────────────
  // Headline for the "Why Choose Us" section.
  // The four cards below it are generic and do not need editing.
  whyChooseUs: {
    headline: "Newcastle's Choice for Precision Landscaping",
    subtext: "With over 6 years of experience across Newcastle and the North East, our passionate team works with precision and premium materials to design outdoor features built to stand the test of time.",
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
    primary:     "#1E233B",  // deep navy background from the logo
    primaryText: "#FFFFFF",  // crisp white text on dark navy
    secondary:   "#D97706",  // supporting orange accents
    accent:      "#F59E0B",  // vibrant amber/orange matching the logo graphics
    accentDark:  "#D97706",  // CTA buttons
    accentLight: "#FBBF24",  // button hover state
    accentText:  "#1E233B",  // text on accent-colored buttons
    bg:          "#F8FAFC",  // off-white slate section backgrounds
    bgText:      "#1E233B",  // body text on light backgrounds
    textMuted:   "#64748B",  // secondary / muted text
  },

  // ─── SOCIAL ──────────────────────────────────
  social: {
    instagram: "https://www.instagram.com/northshorelandscapingne/",
    facebook: "https://www.facebook.com/northshorelandscapingNE/",
    twitter: "#",
  },

  // ─── ABOUT ───────────────────────────────────
  about: {
    headline: "A landscaping firm rooted in Newcastle upon Tyne.",
    story: [
      "North Shore Landscaping was founded in 2020 by a team of dedicated trade professionals who believed that outdoor spaces should be natural extensions of the home. Operating across Newcastle and the North East, we launched with a vision to combine reliable structural work with refined finish-level attention to detail.",
      "Today we serve residential clients throughout the region — from Jesmond and Gosforth to coastal Tynemouth — delivering premium transformations including porcelain paving, custom joinery, timber framing, and modern garden fencing.",
      "We are not a franchise. We are not a call center. We are your neighbors — and we treat your yard like it's our own.",
    ],
    founderName: "Tom",
    founderTitle: "Founder & Lead Artisan",
    founderImage: null,
    founderBio: [
      "Jack established North Shore Landscaping to focus exclusively on highly tailored garden installations where material quality and meticulous trade craftsmanship are prioritized over shortcuts.",
      "A proud North East local with extensive regional experience, Jack oversees every core design and build phase from planning to the final layout.",
    ],
    founderCredentials: [
      "City & Guilds Certified Landscape Carpentry // PLACEHOLDER — verify",
      "Premium Porcelain Installation Specialist // PLACEHOLDER — verify",
    ],
    principles: [
      { title: "We show up.", description: "On time, every time. Reliability is how trust gets built." },
      { title: "We don't cut corners.", description: "Every edge, every mitre, every placement is deliberate." },
      { title: "We communicate.", description: "You'll always know exactly where your project stands." },
      { title: "We finish what we start.", description: "Every project is seen through to completion. No exceptions." },
    ],
  },

  // ─── SERVICES ────────────────────────────────
  // Set active: false to hide any service across the entire site.
  // To add a custom service not in the list below, append a new entry.
  // Every active entry automatically gets its own page at /services/[slug].
  // The image field is optional — omit it and a default service image is used.
  //
  // Template for a custom service:
  // {
  //   active: true,
  //   slug: "pressure-washing",           // kebab-case, used in the URL
  //   name: "Pressure Washing",
  //   tagline: "Spotless surfaces. Instantly.",
  //   description: "Professional pressure washing for driveways, patios, fences, and siding.",
  //   price: "$150",
  //   priceLabel: "for standard residential",
  //   badge: "CLEANING",
  //   image: "/images/pressure-washing.jpg",  // optional — omit to use a default
  //   features: ["Driveways & Walkways", "Patios & Decks", "Fences & Fences"],
  // },
  services: [
    {
      active: false,
      slug: "lawn-care-maintenance",
      name: "Lawn Care & Maintenance",
      tagline: "A lawn worth coming home to.",
      description: "Weekly mowing, edging, fertilization and weed control that keeps your lawn immaculate year-round.",
      price: "£85",
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
      price: "£499",
      priceLabel: "for initial design consultation",
      badge: "DESIGN",
      image: "/images/Landscape%20Design1.png",
      features: ["Initial Consultation", "Digital Landscape Plans", "Residential & Commercial"],
    },
    {
      active: false,
      slug: "irrigation-systems",
      name: "Irrigation Systems",
      tagline: "Smart water. Healthy lawn.",
      description: "Smart sprinkler installation, precision repairs and seasonal optimization that saves water and money.",
      price: "£299",
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
      price: "£2,500",
      priceLabel: "for premium stone installation",
      badge: "HARDSCAPE",
      image: "/images/Hardscaping%20%26%20Patios1.png",
      features: ["Premium Porcelain Paving", "Brick Work & Retaining Walls", "Bespoke Pathways"],
    },
    {
      active: true,
      slug: "seasonal-cleanup",
      name: "Seasonal Cleanup",
      tagline: "Spring-ready. Fall-perfect. Always.",
      description: "Spring prep, fall leaf removal and winter readiness so your yard looks great in every season.",
      price: "£250",
      priceLabel: "for standard residential cleanup",
      badge: "SEASONAL",
      image: "/images/Seasonal%20Cleanup1.png",
      features: ["Spring & Fall Cleanup", "Leaf Removal", "Winter Prep"],
    },
    {
      active: false,
      slug: "tree-shrub-care",
      name: "Tree & Shrub Care",
      tagline: "Healthy trees. Beautiful property.",
      description: "Expert trimming, shaping, health treatments and safe removal by certified arborists.",
      price: "£150",
      priceLabel: "for standard trim & shape",
      badge: "TREE CARE",
      image: "/images/Tree%20%26%20Shrub%20Care1.png",
      features: ["Crown Trimming & Shaping", "Hedge Management", "Safe Removal"],
    },
    {
      active: false,
      slug: "mulching-soil-health",
      name: "Mulching & Soil Health",
      tagline: "Feed your soil. Grow everything.",
      description: "Premium mulch installation and soil amendment that retains moisture and feeds your plants naturally.",
      price: "£120",
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
      price: "£350",
      priceLabel: "for initial garden bed design",
      badge: "GARDEN",
      image: "/images/Garden%20Bed%20Design1.png",
      features: ["Seasonal Planting", "Perennial Beds", "Native Plant Selection"],
    },
    {
      active: true,
      slug: "porcelain-paving",
      name: "Porcelain & Natural Stone Paving",
      tagline: "Ultra-modern, low maintenance paving solutions.",
      description: "Precision-laid porcelain tiling and premium natural stone patios constructed with complete sub-base integrity.",
      price: "£3,500", // PLACEHOLDER — verify
      priceLabel: "starting cost for custom sizing",
      badge: "PAVEMENTS",
      image: "/images/paving.png",
      features: ["Laser-Leveled Alignment", "Premium Grouting & Jointing", "Full Dynamic Sub-base Construction"],
    },
    {
      active: true,
      slug: "fencing-slatted-panels",
      name: "Bespoke Fencing & Joinery",
      tagline: "Contemporary boundary lines and timber work.",
      description: "Custom horizontal slatted cedar/larch screens, structural timber frameworks, and secure garden gates.",
      price: "£1,200", // PLACEHOLDER — verify
      priceLabel: "starting cost for panel runs",
      badge: "JOINERY",
      image: "/images/fencing.jpeg",
      features: ["Modern Slatted Screen Designs", "Heavy Duty Security Gates", "Treated Structural Timbers"],
    },
  ],

  // ─── GALLERY ─────────────────────────────────
  // These 9 images feed BOTH the Our Work page (full masonry grid)
  // AND the Portfolio section on the homepage (first 6 shown).
  // Download images from their Facebook/Instagram, place in public/images/,
  // and update the src paths below.
  // category: shown as a badge on the homepage portfolio cards
  // label:    shown as a title on the featured (first) card only
  gallery: [
    { src: "/images/gallery1.jpg", category: "Hardscape" },
    { src: "/images/gallery2.jpg", category: "Joinery" },
    { src: "/images/gallery3.jpg", category: "Design" },
    { src: "/images/gallery4.jpg", category: "Hardscape" },
    { src: "/images/gallery5.jpg", category: "Joinery" },
    { src: "/images/gallery6.jpg", category: "Garden" },
    { src: "/images/gallery7.jpg", category: "Hardscape" },
    { src: "/images/gallery8.jpg", category: "Design" },
    { src: "/images/gallery9.jpg", category: "Garden" },
  ],

  // ─── TESTIMONIALS ────────────────────────────
  // Pull 3 real Google reviews
  // Set active: false to hide any testimonial
  testimonials: [
    {
      active: true,
      name: "David T.",
      location: "Newcastle upon Tyne",
      rating: 5,
      text: "North shore landscaping came out and completed a total overhaul of our garden, removing existing lawn and flagstones and installing an amazing new porcelain tile patio with custom steps and composite deck area. Jack and the team are hard working, extremely tidy and their attention to detail is fantastic. The finish is absolutely exceptional.",
    },
    {
      active: true,
      name: "Rebecca L.",
      location: "Jesmond",
      rating: 5,
      text: "Highly recommend Jack and his team. They replaced our old rotted fencing with stunning modern slatted fencing and built a custom matching timber planter. They turned up exactly when planned, gave clear communication throughout, and left everything pristine every single day. A flawless job.",
    },
    {
      active: true,
      name: "Mark P.",
      location: "Tynemouth",
      rating: 5,
      text: "Brilliant company. Jack helped design a layout that made the best possible use of our awkward sloping garden. The sandstone walling and precise patio levels are beautiful. Fair price for top-tier craftsmanship.",
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
      answer: "No. We specialize exclusively in full garden renovations, luxury paving, architectural joinery, and landscape design rather than routine mowing contracts.",
    },
    {
      question: "What areas do you serve?",
      answer: "We serve Newcastle upon Tyne and the wider North East region, including Jesmond, Gosforth, Tynemouth, Ponteland, Gateshead, and surrounding areas.",
    },
    {
      question: "How far in advance should I book?",
      answer: "Due to high seasonal demand for major structural landscaping projects, we generally recommend booking your design consult 4–6 weeks ahead of your intended start window.",
    },
  ],

}