export const clientConfig = {

  // ─── BUSINESS INFO ───────────────────────────
  business: {
    name: "Keetons",
    fullName: "Keetons Landscaping and Fencing Ltd",
    tagline: "Newcastle's Premier Landscaping and Fencing Specialists.",
    heroLine1: "Newcastle's Most Trusted",
    heroLine2: "Landscaping & Fencing Company.",
    heroSubtitle: "Transforming outdoor spaces across Newcastle with premium hardscaping, dedicated lawn care, and expert fence installations built to last.",
    city: "Newcastle upon Tyne",
    state: "TYNE", // Region / County abbreviation
    serviceArea: "Serving Newcastle upon Tyne and surrounding areas",
    address: "Deepdale Gardens, Newcastle upon Tyne, NE12 6QS",
    phone: "+44 7922 250031", // PLACEHOLDER — verify
    phoneHref: "tel:+447922250031", // PLACEHOLDER — verify
    email: "keetonsgardens@gmail.com", // PLACEHOLDER — verify
    contactFormEmail: "npermanent67@gmail.com", // PLACEHOLDER — verify
    hours: "Mon–Sat: 8AM – 6PM", // PLACEHOLDER — verify
    established: "2024", // PLACEHOLDER — verify
    ctaLabel: "Get a Free Quote",
    trustBadges: [
      "Licensed & Insured",
      "Free Estimates",
      "5-Star Rated Service",
      "Locally Owned & Operated",
      "Satisfaction Guaranteed",
    ],
    stats: {
      projectsCompleted: "100+", // PLACEHOLDER — verify
      rating: "5.0★", // PLACEHOLDER — verify
      yearsExperience: "2+", // PLACEHOLDER — verify
    },
    // Google Maps embed URL for the CTA section.
    // Generate at: https://www.google.com/maps/embed → Share → Embed a map → copy src URL
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d146685.2513958933!2d-1.7431221124632497!3d54.978252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487e704b2b2d13dd%3A0x5db42efb1d5c2e1f!2sNewcastle%20upon%20Tyne!5e0!3m2!1sen!2suk!4v1717320000000!5m2!1sen!2suk", // PLACEHOLDER — verify
  },

  // ─── WHY CHOOSE US ───────────────────────────
  // Headline for the "Why Choose Us" section.
  // The four cards below it are generic and do not need editing.
  whyChooseUs: {
    headline: "Newcastle's Go-To Landscaping & Fencing Pros",
    subtext: "From bespoke garden designs to secure timber fencing, we combine local expertise with quality craftsmanship to make your dream yard a reality.",
  },

  // ─── BRAND ───────────────────────────────────
  // Logo goes in public/images/logo.png
  // If no logo available use null
  logo: "/images/logo.png",

  // Brand colors extracted directly from the business logo assets.
  // primary + primaryText pair: dark background color and what reads on top of it.
  // accent + accentDark + accentLight: highlight color family (lines, icons, buttons).
  // accentText: text that sits on top of accent-colored buttons.
  // bg + bgText pair: light section background and body text on it.
  // secondary: supporting tone for section labels and subtle italic accents.
  // textMuted: secondary / helper text throughout.
  colors: {
    primary:     "#121212",  // Clean dark tone matching the brand's primary text framework
    primaryText: "#F9F9F9",  // High-contrast clean off-white
    secondary:   "#00C853",  // Vivid green precisely matched from the logo branding
    accent:      "#00E676",  // Vibrant bright green accents for key callouts and icons
    accentDark:  "#00C853",  // Clean complementary blue to maximize CTA contrast against green elements // PLACEHOLDER — verify
    accentLight: "#69F0AE",  // Smooth brand hover state tint
    accentText:  "#121212",  // Legible dark text overlaying bright accent areas
    bg:          "#FAFAFA",  // Crisp modern background structure
    bgText:      "#121212",  // Slate primary text color
    textMuted:   "#757575",  // Mid-tone grayscale for secondary text parameters
  },

  // ─── SOCIAL ──────────────────────────────────
  social: {
    instagram: "#",
    facebook: "https://www.facebook.com/people/Keetons-landscaping-and-fencing-ltd/61584013768014/",
    twitter: "#",
  },

  // ─── ABOUT ───────────────────────────────────
  about: {
    headline: "A premier landscaping and fencing firm rooted in Newcastle upon Tyne.",
    story: [
      "Keetons Landscaping and Fencing Ltd was established to deliver top-tier, reliable garden transformations across Newcastle. Built on the core values of exceptional structural work, stunning plant choices, and unparalleled customer satisfaction, we treat every outdoor space with individual precision.",
      "Today, we proudly serve homeowners across Newcastle upon Tyne and surrounding communities, offering a dynamic roster of services ranging from custom timber boundary installations to comprehensive lawn transformations and seasonal site care.",
      "We operate proudly as an independent, locally owned company. Our personal touch means we work transparently alongside you from initial concept to the final cleanup, ensuring your grounds look pristine and function flawlessly.",
    ],
    founderName: "Thornley Hall Keeton",
    founderTitle: "Founder & Lead Director",
    founderImage: null, // PLACEHOLDER — add owner photo to public/images/owner.png
    founderBio: [
      "With a lifelong passion for structural hardscaping and practical garden engineering, the founder established Keetons to provide local families and properties with durable fencing and beautiful landscaping that withstands the British elements.",
      "Deeply connected to the Tyne and Wear community, the company's objective is to construct functional, eye-catching environments for neighbors throughout Newcastle.",
    ],
    founderCredentials: [
      "Fully Certified Timber & Fencing Specialists", // PLACEHOLDER — verify
      "Public Liability Insurance Covered",
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
  services: [
    {
      active: true,
      slug: "lawn-care-maintenance",
      name: "Lawn Care & Maintenance",
      tagline: "A lawn worth coming home to.",
      description: "Weekly mowing, edging, fertilization and weed control that keeps your lawn immaculate year-round.",
      price: "£45", // PLACEHOLDER — verify
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
      price: "£250", // PLACEHOLDER — verify
      priceLabel: "for initial design consultation",
      badge: "DESIGN",
      image: "/images/Landscape%20Design1.png",
      features: ["Initial Consultation", "Digital Landscape Plans", "Residential & Commercial"],
    },
    {
      active: false, // Set to false to better align with typical UK fencing/landscaping profiles over standard irrigation
      slug: "irrigation-systems",
      name: "Irrigation Systems",
      tagline: "Smart water. Healthy lawn.",
      description: "Smart sprinkler installation, precision repairs and seasonal optimization that saves water and money.",
      price: "£199", // PLACEHOLDER — verify
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
      price: "£1,200", // PLACEHOLDER — verify
      priceLabel: "for standard patio installation",
      badge: "HARDSCAPE",
      image: "/images/Hardscaping%20%26%20Patios1.png",
      features: ["Patios & Walkways", "Retaining Walls", "Outdoor Transformations"],
    },
    {
      active: true,
      slug: "seasonal-cleanup",
      name: "Seasonal Cleanup",
      tagline: "Spring-ready. Fall-perfect. Always.",
      description: "Spring prep, fall leaf removal and winter readiness so your yard looks great in every season.",
      price: "£150", // PLACEHOLDER — verify
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
      price: "£95", // PLACEHOLDER — verify
      priceLabel: "for standard trim & shape",
      badge: "TREE CARE",
      image: "/images/Tree%20%26%20Shrub%20Care1.png",
      features: ["Crown Trimming & Shaping", "Hedge Cutting", "Safe Overgrowth Removal"],
    },
    {
      active: false,
      slug: "mulching-soil-health",
      name: "Mulching & Soil Health",
      tagline: "Feed your soil. Grow everything.",
      description: "Premium mulch installation and soil amendment that retains moisture and feeds your plants naturally.",
      price: "£80", // PLACEHOLDER — verify
      priceLabel: "for standard mulch installation",
      badge: "MULCHING",
      image: "/images/Mulching%20%26%20Soil%20Health1.png",
      features: ["Premium Bark & Mulch Install", "Soil Amendment", "Weed Suppression"],
    },
    {
      active: true,
      slug: "garden-bed-design",
      name: "Garden Bed Design",
      tagline: "Color, texture, and life — year round.",
      description: "Custom seasonal and perennial garden beds designed for the local climate — colorful and low-maintenance.",
      price: "£180", // PLACEHOLDER — verify
      priceLabel: "for initial garden bed design",
      badge: "GARDEN",
      image: "/images/Garden%20Bed%20Design1.png",
      features: ["Seasonal Planting", "Perennial Beds", "Native Plant Selection"],
    },
    {
      active: true,
      slug: "fence-installation-repairs",
      name: "Fence Installation & Repairs",
      tagline: "Secure, durable borders for your home.",
      description: "Expert delivery and build of durable timber panel, closeboard, and decorative boundary fencing.",
      price: "£450", // PLACEHOLDER — verify
      priceLabel: "starting price per project",
      badge: "FENCING",
      image: "/images/gallery6.jpg",
      features: ["Closeboard & Panel Fencing", "Timber & Concrete Posts", "Gate Installs & Repair Work"],
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
    { src: "/images/gallery1.jpg", category: "Fencing", label: "Custom Fencing · Deepdale" },
    { src: "/images/gallery2.jpg", category: "Hardscape" },
    { src: "/images/gallery3.jpg", category: "Maintenance" },
    { src: "/images/gallery4.jpg", category: "Design" },
    { src: "/images/gallery5.jpg", category: "Fencing" },
    { src: "/images/gallery6.jpg", category: "Hardscape" },
    { src: "/images/gallery7.jpg", category: "Garden" },
    { src: "/images/gallery8.jpg", category: "Maintenance" },
    { src: "/images/gallery9.jpg", category: "Design" },
  ],

  // ─── TESTIMONIALS ────────────────────────────
  // Pull 3 real Google reviews
  // Set active: false to hide any testimonial
  testimonials: [
    {
      active: true,
      name: "Andrew P.", // PLACEHOLDER — verify
      location: "Newcastle upon Tyne",
      rating: 5,
      text: "Keetons did an absolutely brilliant job completely stripping out our old broken fence panels and fitting strong, perfectly level closeboard options. Cleaned up everything behind them too.",
    },
    {
      active: true,
      name: "Emma L.", // PLACEHOLDER — verify
      location: "Gosforth",
      rating: 5,
      text: "Exceptional service from the quote to the completed patio transformation. Their landscaping knowledge is fantastic and our garden is now summer-ready.",
    },
    {
      active: true,
      name: "Robert T.", // PLACEHOLDER — verify
      location: "Deepdale",
      rating: 5,
      text: "Reliable, well-priced, and prompt landscaping services. The new turf layout and matching pathway borders look brilliant.",
    },
  ],

  // ─── FAQ ─────────────────────────────────────
  faq: [
    {
      question: "Do you offer free estimates?",
      answer: "Yes, all our estimates across Newcastle are entirely free, written, and come with zero obligation. We can organize a rapid site visit to measure up your fencing or garden space.",
    },
    {
      question: "Are you licensed and insured?",
      answer: "Yes, Keetons Landscaping and Fencing Ltd is fully registered and carries comprehensive public liability insurance covering all residential and light commercial developments.",
    },
    {
      question: "Do you offer recurring maintenance plans?",
      answer: "Absolutely. We arrange periodic lawn care, hedge reduction, and grounds tidying visits tailored directly to your home's calendar requirements.",
    },
    {
      question: "What areas do you serve?",
      answer: "We primarily cover Newcastle upon Tyne, including Deepdale Gardens, Gosforth, Jesmond, Longbenton, and nearby Tyne and Wear developments.",
    },
    {
      question: "How far in advance should I book?",
      answer: "Basic fence repairs and general upkeep can typically be accommodated within 1 week. More technical patio installations or comprehensive landscape projects benefit from booking 2–3 weeks in advance.",
    },
  ],

}