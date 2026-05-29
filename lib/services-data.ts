export interface Service {
  slug: string
  name: string
  tagline: string
  description: string
  heroImage: string
  category: string
  includes: string[]
  benefits: { title: string; description: string }[]
  process: { step: string; title: string; description: string }[]
  faqs: { question: string; answer: string }[]
  startingPrice: string
  priceNote: string
}

export const services: Service[] = [
  {
    slug: 'lawn-care-maintenance',
    name: 'Lawn Care & Maintenance',
    tagline: 'A lush, healthy lawn. Every single week.',
    description: 'From weekly mowing and edging to fertilization and weed control — we keep your lawn looking immaculate year-round so you never have to think about it.',
    heroImage: '/images/lawn-care.png',
    category: 'MAINTENANCE',
    includes: [
      'Weekly Mowing & Edging',
      'Fertilization Programs',
      'Weed & Pest Control',
      'Seasonal Overseeding',
      'Aeration Services',
      'Debris Cleanup',
    ],
    benefits: [
      { title: 'Never Miss a Week', description: "Scheduled visits on the same day every week. Rain or shine, your lawn stays perfect." },
      { title: 'Custom Fertilization', description: "We test your soil and create a fertilization plan specific to Austin's climate and your grass type." },
      { title: 'One Less Thing to Worry About', description: 'Set it and forget it. We handle everything so you can enjoy your yard, not maintain it.' },
    ],
    process: [
      { step: '01', title: 'Free Assessment', description: "We visit your property and assess your lawn's current condition, soil type, and what it needs." },
      { step: '02', title: 'Custom Plan', description: 'We build a maintenance schedule and fertilization plan tailored specifically to your lawn.' },
      { step: '03', title: 'Regular Service', description: 'Your dedicated crew shows up on the same day every week — consistent, reliable, professional.' },
      { step: '04', title: 'Ongoing Support', description: 'Spot an issue? Just call. We address problems between scheduled visits at no extra charge.' },
    ],
    faqs: [
      { question: 'How often will you visit?', answer: 'Most residential lawns are serviced weekly during the growing season (March–October) and bi-weekly in winter.' },
      { question: "Do I need to be home?", answer: "Not at all. We just need access to your yard. Most clients are at work when we visit." },
      { question: "What if it rains on my scheduled day?", answer: "We'll reschedule to the next available day and notify you by text the same morning." },
      { question: 'Do you bring your own equipment?', answer: "Yes — we bring all professional-grade equipment. You don't need to provide anything." },
    ],
    startingPrice: '$120',
    priceNote: 'per month for standard residential lots',
  },
  {
    slug: 'landscape-design',
    name: 'Landscape Design',
    tagline: 'Your vision. Expertly brought to life.',
    description: "Custom landscape designs crafted to complement your home's architecture and your personal vision for outdoor living — from concept to completion.",
    heroImage: '/images/landscapedesign.png',
    category: 'DESIGN',
    includes: [
      'Initial Consultation',
      'Digital Landscape Plans',
      'Plant Selection & Sourcing',
      'Residential & Commercial',
      '3D Visualization',
      'Phased Implementation Plans',
    ],
    benefits: [
      { title: "Designed for Austin's Climate", description: "We only specify plants and materials that thrive in Central Texas heat, drought, and soil conditions." },
      { title: 'Increases Property Value', description: 'Professional landscape design adds an average of 10–15% to home resale value.' },
      { title: 'Full-Service or Plans Only', description: 'We can design and install, or just provide the plans for you to implement yourself or with another contractor.' },
    ],
    process: [
      { step: '01', title: 'Discovery Call', description: 'We learn your style preferences, budget, how you use your outdoor space, and what you want to achieve.' },
      { step: '02', title: 'Site Assessment', description: 'We visit your property to measure, assess drainage, soil, sun exposure, and existing plants.' },
      { step: '03', title: 'Design Presentation', description: 'We present your custom digital landscape plan with plant selections, materials, and layout.' },
      { step: '04', title: 'Installation', description: 'Our crew installs your new landscape with precision, care, and minimal disruption to your daily life.' },
    ],
    faqs: [
      { question: 'How long does the design process take?', answer: 'Typically 2–3 weeks from initial consultation to final design presentation.' },
      { question: 'What does a landscape design cost?', answer: 'Design fees start at $500 for smaller projects. Full design + installation projects typically range from $5,000 to $50,000+.' },
      { question: 'Can you work with my existing plants?', answer: 'Absolutely. We assess all existing plants and incorporate the healthy ones into the new design wherever possible.' },
      { question: 'Do you handle permits?', answer: 'Yes — we handle all necessary permits for hardscaping, irrigation, and structural elements.' },
    ],
    startingPrice: '$500',
    priceNote: 'design fee · installation quoted separately',
  },
  {
    slug: 'irrigation-systems',
    name: 'Irrigation Systems',
    tagline: 'Smart watering. Lower bills. Healthier plants.',
    description: 'Smart sprinkler installation, precision repairs and seasonal optimization that saves water and money — keeping your landscape healthy without overwatering.',
    heroImage: '/images/irrigation.png',
    category: 'IRRIGATION',
    includes: [
      'Smart System Install',
      'Leak Detection & Repair',
      'Seasonal Calibration',
      'Controller Programming',
      'Zone Optimization',
      'Water Audit Reports',
    ],
    benefits: [
      { title: 'Save Up to 50% on Water Bills', description: 'Smart irrigation systems water only when needed, eliminating waste and dramatically cutting your water bill.' },
      { title: 'Healthier Plants', description: 'Consistent, precise watering produces stronger root systems and healthier plants than hand watering ever could.' },
      { title: 'Fully Automated', description: 'Set it once and forget it. Your system adjusts automatically based on weather, season, and plant needs.' },
    ],
    process: [
      { step: '01', title: 'Water Audit', description: 'We assess your current water usage, pressure, and landscape needs to design the optimal system.' },
      { step: '02', title: 'System Design', description: 'We design a zone-by-zone irrigation plan that delivers the right amount of water to every area.' },
      { step: '03', title: 'Professional Install', description: 'Our certified technicians install your system with minimal disruption to your lawn and landscaping.' },
      { step: '04', title: 'Programming & Training', description: 'We program your controller and walk you through how to use and adjust it.' },
    ],
    faqs: [
      { question: 'How long does installation take?', answer: 'Most residential installations are completed in 1–2 days depending on yard size and system complexity.' },
      { question: 'Do you service existing systems?', answer: 'Yes — we repair and optimize all makes and models of irrigation systems, not just ones we install.' },
      { question: 'What is a smart irrigation system?', answer: 'A smart system connects to local weather data and adjusts watering schedules automatically, saving significant water and money.' },
      { question: 'Do you offer seasonal startup and shutdown?', answer: 'Yes — we offer spring activation and winterization services to protect your investment year-round.' },
    ],
    startingPrice: '$1,800',
    priceNote: 'for standard residential installation',
  },
  {
    slug: 'hardscaping-patios',
    name: 'Hardscaping & Patios',
    tagline: 'Outdoor spaces built to impress.',
    description: 'Patios, walkways, retaining walls and outdoor kitchens built to last and designed to impress — turning your outdoor space into a true extension of your home.',
    heroImage: '/images/hardscaping.png',
    category: 'HARDSCAPE',
    includes: [
      'Patios & Walkways',
      'Retaining Walls',
      'Outdoor Kitchens',
      'Fire Pit Areas',
      'Pergolas & Shade Structures',
      'Decorative Concrete',
    ],
    benefits: [
      { title: 'Built to Last Decades', description: 'We use commercial-grade materials and proper base preparation — no shortcuts that lead to cracking or settling.' },
      { title: 'Adds Significant Value', description: 'A well-designed patio returns up to 80% of its cost in home value and dramatically improves quality of life.' },
      { title: 'Fully Permitted & Insured', description: 'All structural hardscaping is permitted and built to code. Your investment is protected.' },
    ],
    process: [
      { step: '01', title: 'Design Consultation', description: 'We discuss your vision, lifestyle, and budget to design the perfect outdoor living space.' },
      { step: '02', title: 'Material Selection', description: 'We help you choose from pavers, natural stone, concrete, and wood options that fit your style and budget.' },
      { step: '03', title: 'Site Preparation', description: 'Proper excavation, grading, and base preparation — the most important step that most contractors skip.' },
      { step: '04', title: 'Expert Installation', description: 'Our experienced crew installs your hardscape with precision and cleans up completely when finished.' },
    ],
    faqs: [
      { question: 'How long does a patio installation take?', answer: 'A standard patio takes 3–7 days. Larger projects with kitchens or multiple features can take 2–4 weeks.' },
      { question: 'What materials do you work with?', answer: 'Concrete pavers, natural stone (flagstone, travertine, limestone), poured concrete, brick, and composite decking.' },
      { question: 'Do you handle drainage?', answer: 'Yes — proper drainage is always incorporated into our designs to prevent water pooling and foundation issues.' },
      { question: 'What is your warranty?', answer: 'We offer a 2-year workmanship warranty on all hardscaping installations.' },
    ],
    startingPrice: '$3,500',
    priceNote: 'for standard patio installation',
  },
  {
    slug: 'seasonal-cleanup',
    name: 'Seasonal Cleanup',
    tagline: 'Spring-ready. Fall-perfect. Always.',
    description: 'Spring prep, fall leaf removal and winter readiness so your yard looks great in every season — without you lifting a finger.',
    heroImage: '/images/seasonal-cleanup.jpg',
    category: 'SEASONAL',
    includes: [
      'Spring & Fall Cleanup',
      'Leaf Removal',
      'Winter Prep',
      'Bed Edging & Mulching',
      'Debris Hauling',
      'Pruning & Trimming',
    ],
    benefits: [
      { title: 'One-Time or Recurring', description: "Book a single seasonal cleanup or set up recurring service — whatever works best for your schedule." },
      { title: 'Complete Property Coverage', description: 'We cover every inch — lawn, beds, hardscape areas, gutters, and hauling all debris away.' },
      { title: 'Same-Week Availability', description: "We keep slots open for seasonal work so you don't have to wait weeks to get on the schedule." },
    ],
    process: [
      { step: '01', title: 'Book Your Date', description: 'Schedule your cleanup online or by phone. We confirm within 24 hours and send a reminder the day before.' },
      { step: '02', title: 'Full Property Walk', description: 'Our crew walks the entire property before starting to identify everything that needs to be addressed.' },
      { step: '03', title: 'Complete Cleanup', description: 'We systematically clean every area — beds, lawn, hardscape, and gutters — leaving nothing behind.' },
      { step: '04', title: 'Debris Removal', description: 'All leaves, clippings, and debris are hauled away completely. No piles left at the curb.' },
    ],
    faqs: [
      { question: 'When should I schedule my spring cleanup?', answer: 'Ideally March–April before new growth starts. We get very busy in spring so book early.' },
      { question: 'What is included in a fall cleanup?', answer: 'Leaf removal, bed cleanup, final mowing, pruning of dead growth, and mulch application to protect roots through winter.' },
      { question: 'Do you haul everything away?', answer: 'Yes — all debris is loaded and hauled away. No bags left at the curb, no mess left behind.' },
      { question: 'Can I add mulching to my cleanup?', answer: 'Absolutely. Fresh mulch application is one of our most popular add-ons and gives beds a clean, finished look.' },
    ],
    startingPrice: '$250',
    priceNote: 'for standard residential cleanup',
  },
  {
    slug: 'tree-shrub-care',
    name: 'Tree & Shrub Care',
    tagline: 'Healthy trees. Beautiful shape. Safe removal.',
    description: 'Expert trimming, shaping, health treatments and safe removal by certified arborists — protecting your trees and the people around them.',
    heroImage: '/images/tree-shrub-care.png',
    category: 'TREE CARE',
    includes: [
      'Crown Trimming & Shaping',
      'Health Treatments',
      'Safe Removal',
      'Stump Grinding',
      'Deep Root Fertilization',
      'Emergency Storm Response',
    ],
    benefits: [
      { title: 'Certified Arborists', description: 'Our tree care team includes ISA-certified arborists who understand tree biology, not just chainsaws.' },
      { title: 'Fully Insured', description: "Tree work carries real risk. We carry $2M in liability coverage so you're fully protected." },
      { title: 'Improves Property Safety', description: 'Dead limbs and diseased trees are serious hazards. We identify and address risks before they become problems.' },
    ],
    process: [
      { step: '01', title: 'Tree Assessment', description: "A certified arborist inspects every tree on your property and identifies health issues, risks, and opportunities." },
      { step: '02', title: 'Recommended Plan', description: 'We provide a written report with our recommendations, prioritized by urgency and budget.' },
      { step: '03', title: 'Expert Service', description: 'Our crew performs all approved work safely and efficiently, protecting your property throughout.' },
      { step: '04', title: 'Cleanup & Report', description: 'We clean up completely and provide a post-service report documenting everything done and future recommendations.' },
    ],
    faqs: [
      { question: 'How often should trees be trimmed?', answer: 'Most trees benefit from trimming every 2–3 years. Fast-growing species or trees near structures may need annual attention.' },
      { question: 'Do you handle emergency tree removal?', answer: 'Yes — we offer 24-hour emergency response for storm damage and dangerous situations.' },
      { question: 'Can a sick tree be saved?', answer: 'Often yes. Our arborists can diagnose tree diseases and recommend treatments that can restore tree health.' },
      { question: 'Do you grind stumps?', answer: 'Yes — stump grinding is available as a standalone service or add-on to any removal.' },
    ],
    startingPrice: '$150',
    priceNote: 'for trimming · removal quoted on site',
  },
  {
    slug: 'mulching-soil-health',
    name: 'Mulching & Soil Health',
    tagline: 'Healthy soil. Thriving plants. Less water.',
    description: 'Premium mulch installation and soil amendment that retains moisture, feeds your plants naturally, and dramatically reduces your watering needs.',
    heroImage: '/images/portfolio4.png',
    category: 'MULCHING',
    includes: [
      'Premium Mulch Install',
      'Soil Amendment',
      'Weed Suppression',
      'Compost Application',
      'Bed Preparation',
      'Organic Options Available',
    ],
    benefits: [
      { title: 'Reduces Watering by 25%', description: 'Proper mulch depth retains soil moisture dramatically, reducing how often you need to water.' },
      { title: 'Suppresses Weeds Naturally', description: 'A 3-inch mulch layer blocks weed germination, reducing the need for herbicides.' },
      { title: 'Feeds Your Soil', description: 'Organic mulches break down over time, adding nutrients to your soil and improving its structure.' },
    ],
    process: [
      { step: '01', title: 'Soil Assessment', description: "We test your soil's pH, composition, and nutrient levels to understand exactly what it needs." },
      { step: '02', title: 'Bed Preparation', description: 'We edge all beds, remove weeds, and apply any needed soil amendments before mulching.' },
      { step: '03', title: 'Mulch Selection', description: 'We help you choose the right mulch type — hardwood, cedar, pine straw, or decomposed granite — for your plants and style.' },
      { step: '04', title: 'Professional Application', description: 'Applied at the correct 3-inch depth with proper spacing around plant bases to prevent rot.' },
    ],
    faqs: [
      { question: 'How often should I remulch?', answer: 'Organic mulches break down and should be refreshed annually. Decomposed granite and rock mulches last much longer.' },
      { question: 'How deep should mulch be?', answer: '3 inches is the ideal depth — enough to suppress weeds and retain moisture without suffocating plant roots.' },
      { question: 'What mulch is best for Austin?', answer: 'Hardwood mulch is most popular. Cedar repels insects. Decomposed granite is great for drought-tolerant landscapes.' },
      { question: 'Can you mulch around my existing plants?', answer: 'Yes — we carefully mulch around all existing plants, keeping mulch away from stems and trunks to prevent rot.' },
    ],
    startingPrice: '$200',
    priceNote: 'per yard installed · typical property $400–$1,200',
  },
  {
    slug: 'garden-bed-design',
    name: 'Garden Bed Design',
    tagline: 'Color, texture, and life. Year-round.',
    description: "Custom seasonal and perennial garden beds designed for Austin's climate — colorful, low-maintenance, and beautiful through every season of the year.",
    heroImage: '/images/portfolio4.png',
    category: 'GARDEN',
    includes: [
      'Seasonal Planting',
      'Perennial Beds',
      'Native Plant Selection',
      'Soil Preparation',
      'Drip Irrigation Setup',
      'Ongoing Seasonal Rotations',
    ],
    benefits: [
      { title: "Designed for Austin's Climate", description: "Every plant we specify is chosen for Central Texas heat, drought tolerance, and seasonal performance." },
      { title: 'Low Maintenance Options', description: 'We specialize in native and adaptive plants that look beautiful with minimal watering and care once established.' },
      { title: 'Color Year-Round', description: 'We design for seasonal succession — something is always blooming, giving you color and interest in every season.' },
    ],
    process: [
      { step: '01', title: 'Style Consultation', description: 'We learn your color preferences, maintenance tolerance, and vision for how the beds should look and feel.' },
      { step: '02', title: 'Plant Plan', description: 'We create a detailed planting plan with specific plant selections, quantities, and seasonal rotation schedule.' },
      { step: '03', title: 'Bed Preparation', description: 'Proper soil amendment, edging, and weed barrier installation before any plants go in the ground.' },
      { step: '04', title: 'Installation & Care', description: 'We install all plants, mulch beds, and set up drip irrigation. Optional seasonal rotation service available.' },
    ],
    faqs: [
      { question: 'What plants work best in Austin?', answer: "Native Texas plants like Salvia, Black-eyed Susan, Lantana, and Texas Sage thrive with minimal water. We'll guide you through the best options." },
      { question: 'How often will the beds need maintenance?', answer: 'Native and adaptive beds need minimal care — typically a seasonal cleanup and occasional pruning. We offer maintenance plans.' },
      { question: 'Can you replace my existing beds?', answer: 'Yes — we can remove existing plants, amend the soil, and completely replant with a new design.' },
      { question: 'Do you do seasonal color rotations?', answer: 'Yes — we offer seasonal rotation service where we swap out annuals 2–4 times per year to keep beds looking fresh.' },
    ],
    startingPrice: '$800',
    priceNote: 'for standard garden bed installation',
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(s => s.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return services.map(s => s.slug)
}
