export type NavColumn = {
  title: string;
  href: string;
  description: string;
  imageSrc?: string;
  /** When true, renders as non-interactive UI (no navigation). */
  disabled?: boolean;
};

export type NavGroup = {
  label: string;
  href: string;
  description?: string;
  featuredLabel?: string;
  /** Featured panel button href when different from `href`. */
  featuredHref?: string;
  columns?: NavColumn[];
  /** When true, the group label is non-interactive (dropdown still opens on hover). */
  disabled?: boolean;
};

export type CollectionCard = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  /** When true, "Explore" is visual-only. */
  exploreDisabled?: boolean;
};

export type ProductHighlight = {
  sku: string;
  name: string;
  category: string;
  price: string;
  summary: string;
  bullets: string[];
  /** Product detail route, or omit / leave empty when Learn more is disabled. */
  href?: string;
  /** When true, Learn more is non-interactive. Overrides href. */
  learnMoreDisabled?: boolean;
};

export type Testimonial = {
  quote: string;
  author: string;
};

/** Product detail route (mirrors live site path pattern). */
export const everglowInfraredSaunaPath = "/products/everglow-infrared";

export const siteConfig = {
  name: "Masseuse Health Co.",
  baseUrl: "https://masseusehealth.co",
  description:
    "Science-backed ice baths and saunas for deeper recovery, sharper focus, and lasting wellbeing.",
};

export const navGroups: NavGroup[] = [
  {
    label: "Saunas",
    href: "#featured-products",
    disabled: true,
    featuredHref: everglowInfraredSaunaPath,
    description: "Discover infrared and portable sauna formats designed for modern recovery spaces.",
    featuredLabel: "Explore saunas",
    columns: [
      {
        title: "Everglow Infrared Sauna",
        href: everglowInfraredSaunaPath,
        description: "Full-spectrum infrared heat, premium timber construction, and intelligent controls.",
        imageSrc: "/images/productpage_everglow/MHCSauna-47.jpg",
      },
      {
        title: "ThermaPod",
        href: "#featured-products",
        description: "Portable heat therapy for flexible routines and everyday use.",
        imageSrc: "/images/productimages/thermapod.webp",
        disabled: true,
      },
      {
        title: "Everglow Traditional",
        href: "#featured-products",
        description: "Traditional sauna experience for dedicated home wellness zones.",
        imageSrc: "/images/productimages/everglow_traditional.jpeg",
        disabled: true,
      },
    ],
  },
  {
    label: "Plunges",
    href: "#collections",
    disabled: true,
    description: "Explore premium cold plunges built for daily recovery, performance, and home wellness.",
    featuredLabel: "Explore plunges",
    columns: [
      {
        title: "Niseko",
        href: "#collections",
        description: "Premium cold immersion for serious daily recovery at home.",
        disabled: true,
      },
      {
        title: "Plunge",
        href: "#collections",
        description: "Compact cold therapy designed for smaller footprints and fast setups.",
        disabled: true,
      },
      {
        title: "Aspen",
        href: "#collections",
        description: "Luxury cold therapy with a refined finish and standout presence.",
        disabled: true,
      },
    ],
  },
  {
    label: "Bundles",
    href: "#bundles",
    disabled: true,
    description: "Recovery-first offers, launch campaigns, and higher-value home wellness setups.",
    featuredLabel: "Explore value sets",
    columns: [
      {
        title: "Recovery essentials",
        href: "#bundles",
        description: "Flexible entry points for everyday recovery routines.",
        disabled: true,
      },
      {
        title: "Home wellness upgrades",
        href: "#bundles",
        description: "Premium offers for customers building out a dedicated recovery space.",
        disabled: true,
      },
    ],
  },
  {
    label: "Info",
    href: "#resources",
    disabled: true,
    description: "Learn more about the brand, the science, and the routines behind better recovery.",
    featuredLabel: "Explore resources",
    columns: [
      {
        title: "About Us",
        href: "#resources",
        description: "Our brand story, values, and long-standing wellness background.",
        disabled: true,
      },
      {
        title: "Science",
        href: "#resources",
        description: "Research-backed benefits behind cold therapy, sauna, and daily rituals.",
        disabled: true,
      },
      {
        title: "FAQs",
        href: "#resources",
        description: "Common questions about delivery, setup, support, and warranty.",
        disabled: true,
      },
      {
        title: "Editorial",
        href: "#resources",
        description: "Stories, routines, and practical guidance from the world of recovery.",
        disabled: true,
      },
    ],
  },
];

export const collectionCards: CollectionCard[] = [
  {
    eyebrow: "Plunges",
    title: "Cold immersion for daily rituals",
    description:
      "Explore premium cold plunges designed to help you recover faster, reset mentally, and build a ritual that lasts.",
    href: "#featured-products",
    exploreDisabled: true,
  },
  {
    eyebrow: "Saunas",
    title: "Infrared heat for modern recovery",
    description:
      "Portable and cabin-style sauna formats built for deeper relaxation, circulation support, and everyday wellbeing.",
    href: everglowInfraredSaunaPath,
    exploreDisabled: true,
  },
  {
    eyebrow: "About us",
    title: "Trusted by Australians for over 17 years",
    description:
      "Backed by nearly two decades of wellness experience, we bring premium recovery products into homes across Australia.",
    href: "#bundles",
    exploreDisabled: true,
  },
  {
    eyebrow: "Wellness",
    title: "Everyday recovery, reimagined",
    description:
      "Science-backed tools for modern living, designed to feel as good in your routine as they look in your space.",
    href: "#for-business",
    exploreDisabled: true,
  },
];

export const featuredProducts: ProductHighlight[] = [
  {
    sku: "MHC-ICE-NISEKO",
    category: "Plunge",
    name: "Niseko",
    price: "$7,177.00",
    summary:
      "Our premium ice bath range for customers who want serious cold therapy with elevated design.",
    bullets: [
      "45% off",
      "Built for daily recovery routines",
      "Trusted by Australians for over 17 years",
    ],
    learnMoreDisabled: true,
  },
  {
    sku: "MHC-ICE-PLUNGE",
    category: "Plunge",
    name: "Plunge",
    price: "$347.00",
    summary:
      "Compact cold therapy designed for smaller footprints, fast setups, and daily resets.",
    bullets: [
      "50% off",
      "Smaller-footprint cold immersion",
      "Designed for daily recovery routines",
    ],
    learnMoreDisabled: true,
  },
  {
    sku: "MHC-ICE-ASPEN",
    category: "Plunge",
    name: "Aspen",
    price: "$6,777.00",
    summary:
      "Luxury cold therapy with a refined finish and standout presence for home wellness spaces.",
    bullets: [
      "66% off",
      "Premium cold immersion experience",
      "Built for elevated recovery spaces",
    ],
    learnMoreDisabled: true,
  },
  {
    sku: "MHC-SAUNA-THERMAPOD",
    category: "Sauna",
    name: "ThermaPod",
    price: "From $287",
    summary:
      "Portable sauna comfort for flexible heat therapy, everyday routines, and accessible recovery at home.",
    bullets: [
      "52% off",
      "Portable and space-conscious",
      "Simple heat therapy for daily wellbeing",
    ],
    learnMoreDisabled: true,
  },
  {
    sku: "MHC-SAUNA-EVERGLOW",
    category: "Sauna",
    name: "Everglow Infrared Sauna",
    price: "$6,995.00",
    summary:
      "Premium certified Canadian red cedar, therapeutic 65°C infrared heat, and intelligent controls—designed in Australia for home recovery spaces.",
    bullets: [
      "Premium certified Canadian red cedar construction",
      "Therapeutic 65°C infrared heat penetration",
      "Built-in chromotherapy, ventilation, Bluetooth & tablet control",
    ],
    href: everglowInfraredSaunaPath,
  },
  {
    sku: "MHC-SAUNA-EVERGLOW-TRADITIONAL",
    category: "Sauna",
    name: "Everglow Traditional Sauna",
    price: "$7,995.00",
    summary:
      "Traditional sauna heat for customers who want a classic home wellness ritual.",
    bullets: [
      "33% off",
      "Traditional sauna experience",
      "Designed for dedicated home wellness zones",
    ],
    learnMoreDisabled: true,
  },
];

export type EverglowSizeId = "zen" | "lux" | "grande";

export type EverglowFinishId = "red-cedar-black" | "red-cedar-natural" | "hemlock-black" | "hemlock-natural";

export const everglowProductDetail = {
  sku: "MHC-SAUNA-EVERGLOW",
  /** Short H1-style title used on the live PDP. */
  title: "Everglow Infrared Sauna",
  metaTitle: "Everglow Infrared Sauna for Recovery",
  category: "Infrared Sauna",
  compareAtPrice: "$11,995.00",
  price: "$6,995.00",
  savingsAmount: "$5,000.00",
  savingsBanner: "SAVE $5,000.00",
  socialProof: "30,000+ Happy Customers",
  shortDescription:
    "Premium certified Canadian red cedar, full-spectrum infrared heat, chromotherapy, active ventilation, Bluetooth audio and tablet control, designed in Australia for serious recovery spaces.",
  promoBar:
    "Shop now & save up to 66% on our premium ice baths & saunas",
  heroBullets: [
    "Premium certified Canadian red cedar construction",
    "Therapeutic 65°C infrared heat penetration",
    "Built-in chromotherapy lighting for enhanced wellness",
    "Active ventilation system for optimal heat circulation",
    "Integrated Bluetooth speakers for immersive sessions",
    "Intuitive tablet control for precise temperature management",
    "Perfect for home gyms and dedicated recovery spaces",
    "Designed in Australia to meet performance and quality standards",
  ],
  saunaTypes: [
    { id: "traditional" as const, label: "Traditional steam", disabled: true },
    { id: "infrared" as const, label: "Infrared", disabled: false },
  ],
  sizes: [
    {
      id: "zen" as const,
      label: "Zen",
      compareAtPrice: "$11,995",
      price: "$6,995",
      compareAtAud: 11995,
      saleAud: 6995,
      savings: "$5,000",
      dimensions: { wCm: 120, hCm: 200, dCm: 140 },
      dimensionsLabel: "W 120 cm × H 200 cm × D 140 cm",
      capacity:
        "Perfect for individuals and compact spaces.",
      positioning: "The minimalist one-person recovery room.",
      warranty: "2 years",
    },
    {
      id: "lux" as const,
      label: "Lux",
      compareAtPrice: "$16,995",
      price: "$9,877",
      compareAtAud: 16995,
      saleAud: 9877,
      savings: "$7,118",
      dimensions: { wCm: 180, hCm: 220, dCm: 150 },
      dimensionsLabel: "W 180 cm × H 220 cm × D 150 cm",
      capacity: "For larger home gyms or personal recovery spaces.",
      positioning: "More room to stretch, share, and settle in.",
      warranty: "2 years",
    },
    {
      id: "grande" as const,
      label: "Grande",
      compareAtPrice: "$21,995",
      price: "$12,877",
      compareAtAud: 21995,
      saleAud: 12877,
      savings: "$9,118",
      dimensions: { wCm: 210, hCm: 221, dCm: 180 },
      dimensionsLabel: "W 210 cm × H 221 cm × D 180 cm",
      capacity: "For elite recovery spaces or larger home gyms.",
      positioning: "The flagship format for premium home wellness spaces.",
      warranty: "2 years",
    },
  ],
  finishes: [
    { id: "red-cedar-black" as const, label: "Red Cedar Black" },
    { id: "red-cedar-natural" as const, label: "Red Cedar Natural" },
    { id: "hemlock-black" as const, label: "Hemlock Black" },
    { id: "hemlock-natural" as const, label: "Hemlock Natural" },
  ],
  redLightAddOn: {
    title: "Red Light Therapy Panel",
    price: "$1,995",
    priceAud: 1995,
    description:
      "Optional recovery upgrade available across Zen, Lux and Grande configurations.",
  },
  trustBadges: [
    { title: "Fast Delivery", description: "Australia-wide delivery coordinated by our team." },
    { title: "2-Year Warranty", description: "Every Everglow model includes 2 years of coverage." },
    { title: "Lifetime Concierge Service", description: "Ongoing support for setup, care and use." },
  ],
  featuresDetailed: [
    "Certified Canadian red cedar construction, sustainably sourced for long-term durability",
    "Full-spectrum infrared panel technology designed for deep tissue heat penetration",
    "Therapeutic 65°C operating range for comfortable, repeatable recovery sessions",
    "Integrated chromotherapy lighting to create a calmer, more immersive wellness ritual",
    "Double-tier bench seating for flexible positioning, stretching and shared use",
    "Active ventilation keeps the cabin dry, breathable and consistent through longer sessions",
    "Built-in Bluetooth speakers for guided breathwork, music or recovery audio",
    "Digital tablet control for temperature, session timing, lighting and everyday operation",
    "Purpose-built for indoor installation in gyms, homes and dedicated wellness spaces",
    "Designed in Melbourne, Australia, with components selected for reliability and quality",
  ],
  designProtectionNote:
    "Designs protected under Australian Design Nos. 202611053, 202611054 and 202611055.",
  weightElectricalByVariant: [
    {
      size: "Zen",
      finish: "Red Cedar",
      weightKg: 226,
      powerW: 2600,
      voltage: 240,
      amps: 10.8,
      fuseType: "15 AMP",
      phase: "Single phase",
    },
    {
      size: "Zen",
      finish: "Hemlock",
      weightKg: 244,
      powerW: 2600,
      voltage: 240,
      amps: 10.8,
      fuseType: "15 AMP",
      phase: "Single phase",
    },
    {
      size: "Lux",
      finish: "Red Cedar",
      weightKg: 316,
      powerW: 4100,
      voltage: 240,
      amps: 17.1,
      fuseType: "20 AMP",
      phase: "Single phase",
    },
    {
      size: "Lux",
      finish: "Hemlock",
      weightKg: 339,
      powerW: 4100,
      voltage: 240,
      amps: 17.1,
      fuseType: "20 AMP",
      phase: "Single phase",
    },
    {
      size: "Grande",
      finish: "Red Cedar",
      weightKg: 356,
      powerW: 5200,
      voltage: 240,
      amps: 21.7,
      fuseType: "25 AMP",
      phase: "Single phase",
    },
    {
      size: "Grande",
      finish: "Hemlock",
      weightKg: 389,
      powerW: 5200,
      voltage: 240,
      amps: 21.7,
      fuseType: "25 AMP",
      phase: "Single phase",
    },
  ],
  electricianNote: "All saunas require installation by a licensed electrician.",
  deepHeat: {
    title: "Deep Heat, Zero Compromise",
    intro:
      "Unlike traditional steam saunas that heat the air, controlled infrared warmth heats the body directly, penetrating deeper to support circulation and muscle recovery, while helping ease stress, release built-up tension, and promote deeper relaxation for a more restful night’s sleep.",
    cards: [
      {
        title: "Heat you can train around",
        body:
          "Infrared heat warms your body directly, allowing Everglow to operate at lower temperatures while still delivering an effective recovery stimulus. Settle into steady 60–65°C heat and feel your muscles release, without overheating.",
      },
      {
        title: "Built for repeat performance",
        body:
          "The Everglow is constructed from premium certified Canadian red cedar, chosen for its durability, heat stability, and long-term performance. Solid panel construction and dependable internal components ensure consistent heat and reliable operation, session after session.",
      },
      {
        title: "Breathe easy through longer sessions",
        body:
          "With no steam or humidity, Everglow Infrared Sauna creates a dry, breathable environment that’s easier to sustain. That means longer sessions, better focus, and a more repeatable recovery routine that’s perfect for regular workouts and high-volume training days.",
      },
      {
        title: "Simple setup, precise control",
        body:
          "Powered by standard household power, your Everglow Infrared Sauna is easy to run and simple to control. Simple controls let you set temperature and timing precisely, so every session runs smoothly and you can focus on the work that matters.",
      },
    ],
  },
  scienceBacked: {
    title: "Science-backed recovery",
    items: [
      {
        title: "Support cardiovascular performance",
        body:
          "Regular sauna use places the heart and circulatory system under controlled stress, helping improve cardiovascular efficiency over time. A 2018 clinical review published in Mayo Clinic Proceedings linked frequent sauna bathing with improved circulation and reduced cardiovascular risk across large population studies.",
      },
      {
        title: "Reduce muscle soreness and stiffness",
        body:
          "Heat exposure helps muscles relax and recover after hard training. A 2023 controlled study on post-exercise sauna use found improvements in muscle soreness and neuromuscular recovery following intense resistance training.",
      },
      {
        title: "Improve sleep quality",
        body:
          "Most sauna users report better sleep after regular heat exposure. In a 2019 global sauna survey of regular bathers, 83.5% said sauna use improved their sleep quality lasting up to one to two nights after sessions, supporting recovery and readiness for the next day.",
      },
      {
        title: "Reduce stress and elevate mood",
        body:
          "A 2023 controlled study observed relaxation-related brain activity changes following sauna sessions, alongside self-reported improvements in wellbeing. Participants reported lower stress and improved mental clarity following regular use.",
      },
      {
        title: "Support immune resilience",
        body:
          "Regular sauna use has been linked with positive changes in immune function, enhancing the body’s capacity to respond to physical stress and training loads. Clinical studies have found increases in key immune markers following consistent heat exposure.",
      },
      {
        title: "Stay loose and move freely",
        body:
          "Clinical research has shown that heat therapy can reduce pain and stiffness in musculoskeletal conditions, helping improve joint comfort and range of motion so you can train and move with less restriction.",
      },
    ],
  },
  founder: {
    quote:
      "When Covid hit in 2020, I experienced the massive, performance enhancing impact of contrast therapy first hand. I have never felt so clear, energised and grounded in my life.\n\nI knew I HAD to bring this to more Aussies, and now I’m proud to bring you Masseuse Health Co.’s premium line of ice baths and saunas. So you can unlock your peak mental and physical performance every day.",
    name: "Michael Clark",
    role: "Founder",
  },
  faqs: [
    {
      q: "What’s included in my purchase?",
      answer:
        "Your purchase includes the Everglow Infrared Sauna engineered for steady full-body infrared heat, a user manual, coordinated delivery and a comprehensive 2-year warranty. The Red Light Therapy Panel is available as an optional $1,995 add-on.",
    },
    {
      q: "Why should I buy a Masseuse Health Co. sauna over other brands?",
      answer:
        "Masseuse Health Co. has spent over 17 years helping Australians build better recovery routines. Everglow combines premium timber, infrared heat, digital controls and local support, backed by a 2-year warranty and flexible payment options.",
    },
    {
      q: "How long will it take for my sauna to arrive?",
      answer:
        "If your Everglow Infrared Sauna is in stock, we process and ship it the next business day. Most customers receive delivery within a few days, depending on location and booking availability.",
    },
    {
      q: "Can I get my Everglow Infrared Sauna delivered anywhere in Australia?",
      answer:
        "Yes. We deliver Australia-wide using trusted couriers. After you place your order, our team will contact you to arrange a convenient delivery date and time. Delivery times may vary depending on your location.",
    },
    {
      q: "Are there any safety concerns when using the Everglow Infrared Sauna?",
      answer:
        "Infrared saunas are generally well tolerated, but they should be used responsibly. Review the user manual, start with shorter lower-temperature sessions if you are new to infrared heat, and consult a qualified professional if you have medical conditions or specific health concerns.",
    },
  ],
};

export const proofLogos = [
  "Re-Creation",
  "NSW Logo",
  "Home Show",
  "Queensland",
  "Crown",
  "Editorial",
  "Editorial Image",
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "I use the Plunge as part of my weekly recovery routine. The build quality is amazing, it holds the cold well, and it looks sleek in my space.",
    author: "Danique B.",
  },
  {
    quote:
      "The Plunge has been epic for recovery. Easy to set up, stays cold for ages, and looks great too — a total game changer after training.",
    author: "Run Escapes A.",
  },
  {
    quote:
      "The ThermaPod has been perfect for heat sessions at home. First class experience from order to delivery — informative, consultative, and professional.",
    author: "Dan Williams",
  },
  {
    quote:
      "Could not be more happier with ice bath, great quality and unbelievable service.",
    author: "Franky",
  },
  {
    quote:
      "Staff very helpful and informative. The whole process of buying, delivering and then running ice bath went perfectly well. Love my ice bath and highly recommend.",
    author: "Peter C.",
  },
];

export const bundleHighlights = [
  {
    title: "Australian-owned. Trusted for over 18 years.",
    description:
      "We’re a 100% Australian, family-owned brand with nearly two decades of experience and thousands of happy customers.",
  },
  {
    title: "Built to last — backed by a 2-year warranty",
    description:
      "Every product is backed by a complimentary two-year warranty for extra confidence in everyday use.",
  },
  {
    title: "Lifetime support, whenever you need it",
    description:
      "From setup to troubleshooting, our concierge-style support helps customers get the most from every routine.",
  },
  {
    title: "Wellness now, pay later",
    description:
      "Flexible Buy Now, Pay Later options and interest-free plans make premium recovery more accessible.",
  },
];

export const resourceLinks = [
  "About Us",
  "Editorial",
  "Careers",
  "FAQs",
  "Ice Bath Maintenance",
  "Sauna Maintenance",
  "Ice Bath Blueprint",
  "Sauna Blueprint",
];

export const footerShopLinks = [
  "Niseko",
  "Plunge",
  "Aspen",
  "ThermaPod",
  "Everglow Infrared Sauna",
  "Everglow Traditional Sauna",
];

export const footerSupportLinks = [
  "Contact Us",
  "Warranty",
  "Shipping & Returns",
  "Service and Repairs",
  "Buy Now, Pay Later",
  "Terms of Use",
  "Privacy Policy",
];

export const headerInfoLinks = [
  "About Us",
  "Science",
  "FAQs",
  "Editorial",
];
