export type NavColumn = {
  title: string;
  href: string;
  description: string;
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
    label: "Ice Baths",
    href: "#collections",
    disabled: true,
    description: "Explore premium ice baths built for daily recovery, performance, and home wellness.",
    featuredLabel: "Explore ice baths",
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
    label: "Saunas",
    href: "#featured-products",
    disabled: true,
    featuredHref: everglowInfraredSaunaPath,
    description: "Discover infrared and portable sauna formats designed for modern recovery spaces.",
    featuredLabel: "Explore saunas",
    columns: [
      {
        title: "Everglow Infrared",
        href: everglowInfraredSaunaPath,
        description: "Full-spectrum infrared heat, premium timber construction, and intelligent controls.",
      },
      {
        title: "ThermaPod",
        href: "#featured-products",
        description: "Portable heat therapy for flexible routines and everyday use.",
        disabled: true,
      },
      {
        title: "Everglow Traditional",
        href: "#featured-products",
        description: "Traditional sauna experience for dedicated home wellness zones.",
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
    label: "For Clinics",
    href: "#for-business",
    disabled: true,
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
    eyebrow: "Ice Baths",
    title: "Cold immersion for daily rituals",
    description:
      "Explore premium ice baths designed to help you recover faster, reset mentally, and build a ritual that lasts.",
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
    category: "Ice Bath",
    name: "Niseko Ice Bath",
    price: "From $4,995",
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
    category: "Infrared Sauna",
    name: "Everglow Infrared",
    price: "$4,477.00",
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
    sku: "MHC-ICE-PLUNGE",
    category: "Ice Bath",
    name: "Plunge Ice Bath",
    price: "From $347",
    summary:
      "A simple, accessible cold therapy entry point for customers starting their recovery ritual.",
    bullets: [
      "50% off",
      "Quick setup and easy daily use",
      "Designed for modern spaces",
    ],
    learnMoreDisabled: true,
  },
  {
    sku: "MHC-ICE-ASPEN",
    category: "Ice Bath",
    name: "Aspen",
    price: "From $6,777",
    summary:
      "Luxury cold immersion with premium detailing for customers building a standout home setup.",
    bullets: [
      "66% off",
      "Premium finish and elevated presence",
      "Built to last and backed by warranty",
    ],
    learnMoreDisabled: true,
  },
];

export type EverglowSizeId = "zen" | "lux" | "grande";

export type EverglowFinishId = "red-cedar-black" | "red-cedar-natural" | "hemlock-black" | "hemlock-natural";

export const everglowProductDetail = {
  sku: "MHC-SAUNA-EVERGLOW",
  /** Short H1-style title used on the live PDP. */
  title: "Everglow Infrared",
  metaTitle: "Everglow Infrared Sauna for Recovery",
  category: "Infrared Sauna",
  compareAtPrice: "$9,995.00",
  price: "$4,477.00",
  savingsAmount: "$5,518.00",
  savingsBanner: "SAVE $5,518.00",
  socialProof: "30,000+ Happy Customers",
  shortDescription:
    "Premium certified Canadian red cedar construction with full-spectrum infrared heat, chromotherapy, active ventilation, Bluetooth audio and tablet control—designed in Australia for serious recovery spaces.",
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
      dimensions: { wCm: 120, hCm: 200, dCm: 140 },
      dimensionsLabel: "W 120 cm × H 200 cm × D 140 cm",
      capacity:
        "Perfect for individuals and compact spaces.",
      warranty: "2 years",
    },
    {
      id: "lux" as const,
      label: "Lux",
      dimensions: { wCm: 180, hCm: 220, dCm: 150 },
      dimensionsLabel: "W 180 cm × H 220 cm × D 150 cm",
      capacity: "For larger home gyms or personal recovery spaces.",
      warranty: "2 years",
    },
    {
      id: "grande" as const,
      label: "Grande",
      dimensions: { wCm: 210, hCm: 221, dCm: 180 },
      dimensionsLabel: "W 210 cm × H 221 cm × D 180 cm",
      capacity: "For elite recovery spaces or larger home gyms.",
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
    description: "Optional add-on for expanded recovery setups.",
  },
  trustBadges: [
    { title: "Fast delivery", description: "Coordinated Australia-wide shipping." },
    { title: "2-year warranty", description: "Comprehensive coverage for everyday use." },
    { title: "Lifetime concierge", description: "Ongoing support from our team." },
  ],
  featuresDetailed: [
    "Certified Canadian red cedar construction, sustainably sourced for durability",
    "Full-spectrum infrared panel technology for deep tissue heat penetration",
    "Therapeutic 65°C operating range for comfortable, effective recovery",
    "Chromotherapy lighting system included for enhanced mental wellbeing",
    "Double-tier bench seating for flexible positioning and comfort preference",
    "Active ventilation maintains dry, breathable heat throughout your session",
    "Built-in Bluetooth speaker system for personalised audio during sessions",
    "Digital tablet interface for easy temperature, time, and lighting control",
    "Purpose-built for indoor installation in gyms, home recovery spaces, and wellness areas",
    "Designed in Melbourne, Australia, with features selected for reliability, durability, and quality standards",
  ],
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
  athletes: {
    title: "Trusted By Elite Australian Athletes",
    subtitle: "As seen on State of Origin",
    people: [
      { name: "Jack Crisp", role: "AFL legend" },
      { name: "Robert Shield", role: "Ultra endurance athlete" },
      { name: "Tom Stewart", role: "5× AFL All-Australian" },
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
        "Your Everglow Infrared Sauna is delivered ready for simple setup and consistent use: the Everglow Infrared Sauna engineered for steady, full-body infrared heat; an optional red light therapy panel add-on; user manual; hassle-free delivery; and a comprehensive 2-year warranty for confidence in everyday use.",
    },
    {
      q: "Why should I buy a Masseuse Health Co. sauna over other brands?",
      answer:
        "For over 17 years, Masseuse Health Co. has been dedicated to helping Australians unlock peak performance and live at their best. As a trusted, family-owned company, we combine expert support with uncompromising quality, backed by a comprehensive two-year warranty. Our team helps you support your health and wellbeing, with flexible payment options to make elite performance and recovery accessible.",
    },
    {
      q: "How long will it take for my sauna to arrive?",
      answer:
        "If your Everglow Infrared Sauna is in stock, we’ll process and ship it the next business day. Most customers receive their delivery within just a few days, so you can start your recovery routine as soon as possible.",
    },
    {
      q: "Can I get my Everglow Infrared Sauna delivered anywhere in Australia?",
      answer:
        "Yes. We deliver Australia-wide using trusted couriers. After you place your order, our team will contact you to arrange a convenient delivery date and time. Delivery times may vary depending on your location.",
    },
    {
      q: "Are there any safety concerns when using the Everglow Infrared Sauna?",
      answer:
        "Infrared saunas are generally well tolerated, but they should still be used responsibly. Review the safety information in your user manual. If you’re new to infrared heat, begin with shorter, lower-temperature sessions and increase gradually. If you have medical conditions or specific health concerns, consult a qualified professional before use.",
    },
  ],
  bottomTagline: {
    title: "Everyday recovery, reimagined.",
    subtitle: "Science-backed wellness tools for modern living.",
  },
  productTabs: ["Product", "Features", "Reviews"],
  selectedVariantLabel: "Zen / Red Cedar Black",
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
      "The Niseko Ice Bath has exceeded all my expectations. The build quality is amazing, it holds the cold well, and it looks sleek in my space.",
    author: "Danique B.",
  },
  {
    quote:
      "Tried the Niseko Ice Tub and it was epic. Easy to set up, stays cold for ages, and looks great too. It has been a game changer for recovery.",
    author: "Run Escapes A.",
  },
  {
    quote:
      "First class experience from order to delivery. Informative, consultative, and professional.",
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
  "Niseko Ice Bath",
  "Plunge Ice Bath",
  "Aspen Ice Bath",
  "Everglow Sauna",
  "ThermaPod Sauna",
  "Massage Chairs",
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
