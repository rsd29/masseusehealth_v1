export type NavColumn = {
  title: string;
  href: string;
  description: string;
};

export type NavGroup = {
  label: string;
  href: string;
  featuredLabel?: string;
  columns?: NavColumn[];
};

export type CollectionCard = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
};

export type ProductHighlight = {
  sku: string;
  name: string;
  category: string;
  price: string;
  summary: string;
  bullets: string[];
  href: string;
};

export type Testimonial = {
  quote: string;
  author: string;
};

export const siteConfig = {
  name: "Masseuse Health Co.",
  baseUrl: "https://masseusehealth.co",
  description:
    "Premium ice baths, saunas and home recovery products with a Shopify-ready headless storefront foundation.",
};

export const navGroups: NavGroup[] = [
  {
    label: "Ice Baths",
    href: "#collections",
    featuredLabel: "Shop all ice baths",
    columns: [
      {
        title: "Portable Ice Baths",
        href: "#collections",
        description: "Flexible plunge setups designed for home recovery routines.",
      },
      {
        title: "Premium Tubs",
        href: "#collections",
        description: "Larger-format cold therapy products with a premium feel.",
      },
      {
        title: "Chillers & Accessories",
        href: "#collections",
        description: "Cooling hardware and essential add-ons for your setup.",
      },
    ],
  },
  {
    label: "Saunas",
    href: "#featured-products",
    featuredLabel: "Shop all saunas",
    columns: [
      {
        title: "Infrared Saunas",
        href: "#featured-products",
        description: "Premium infrared heat experiences for home wellness spaces.",
      },
      {
        title: "Portable Saunas",
        href: "#featured-products",
        description: "Compact sauna formats for flexible placement and storage.",
      },
      {
        title: "Sauna Accessories",
        href: "#featured-products",
        description: "Supportive essentials that expand the sauna product range.",
      },
    ],
  },
  {
    label: "Bundles",
    href: "#bundles",
    featuredLabel: "View bundle offers",
    columns: [
      {
        title: "Recovery Starter Sets",
        href: "#bundles",
        description: "Entry bundles for first-time wellness shoppers.",
      },
      {
        title: "Premium Home Spa",
        href: "#bundles",
        description: "Higher-ticket chair and therapy combinations.",
      },
    ],
  },
  {
    label: "For Clinics",
    href: "#for-business",
  },
  {
    label: "Resources",
    href: "#resources",
    featuredLabel: "Explore resources",
    columns: [
      {
        title: "About Us",
        href: "#resources",
        description: "Brand story, values and product philosophy.",
      },
      {
        title: "Recovery Guides",
        href: "#resources",
        description: "Editorial content that can later be powered by Shopify CMS.",
      },
      {
        title: "FAQs",
        href: "#resources",
        description: "Shipping, setup, warranties and product support.",
      },
    ],
  },
];

export const collectionCards: CollectionCard[] = [
  {
    eyebrow: "Ice Baths",
    title: "Cold therapy for daily recovery",
    description:
      "Category-led entry point for portable plunges, premium tubs and future cold therapy collections.",
    href: "#featured-products",
  },
  {
    eyebrow: "Saunas",
    title: "Infrared and portable heat therapy",
    description:
      "A clean merchandising path for compact sauna formats, infrared cabins and related accessories.",
    href: "#featured-products",
  },
  {
    eyebrow: "Bundles",
    title: "Build your home recovery setup",
    description:
      "Bundle-focused merchandising zone for higher average order value and seasonal campaign landing pages.",
    href: "#bundles",
  },
  {
    eyebrow: "For Clinics",
    title: "Commercial and practitioner packages",
    description:
      "A conversion path for spas, physios and clinics looking to furnish wellness spaces at scale.",
    href: "#for-business",
  },
];

export const featuredProducts: ProductHighlight[] = [
  {
    sku: "MHC-ICE-RECOVERY-ONE",
    category: "Ice Bath",
    name: "Recovery Plunge Pro",
    price: "$4,295",
    summary: "Flagship cold therapy concept for premium recovery routines at home.",
    bullets: [
      "Large-format insulated plunge design",
      "Chiller-ready setup for daily use",
      "Structured premium product card layout",
    ],
    href: "#featured-products",
  },
  {
    sku: "MHC-SAUNA-STUDIO-SEAT",
    category: "Infrared Sauna",
    name: "Sauna Pod One",
    price: "$2,195",
    summary: "Compact home sauna concept for apartments, studios and wellness corners.",
    bullets: [
      "Space-conscious footprint",
      "Portable infrared heat format",
      "Easy comparison-friendly spec layout",
    ],
    href: "#featured-products",
  },
  {
    sku: "MHC-ACC-PULSE-PRO",
    category: "Chiller Accessory",
    name: "Chiller Core X",
    price: "$295",
    summary: "Accessory product concept to support ice bath setups and add-on merchandising.",
    bullets: [
      "Fast accessory add-on potential",
      "Designed for bundles and upsells",
      "Ideal for Shopify collection merchandising",
    ],
    href: "#featured-products",
  },
  {
    sku: "MHC-ACC-FLOW-BOOTS",
    category: "Sauna Accessory",
    name: "Heat Ritual Kit",
    price: "$595",
    summary: "Accessory-led merch card for sauna sessions, care products and upgrades.",
    bullets: [
      "Great fit for accessory collections later",
      "Supports campaign-based landing pages",
      "Expands the homepage merch mix",
    ],
    href: "#featured-products",
  },
];

export const proofLogos = [
  "Men's Health",
  "Wellness Weekly",
  "Body+Balance",
  "Recovery Journal",
  "Studio Life",
  "Health Edit",
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "The homepage structure feels premium and product-led without needing final photography yet.",
    author: "Early concept feedback",
  },
  {
    quote:
      "The navigation already feels ready for a large catalog and future editorial content.",
    author: "Internal stakeholder review",
  },
  {
    quote:
      "This gives us a clear Shopify migration path instead of repainting the UI later.",
    author: "Implementation note",
  },
];

export const bundleHighlights = [
  {
    title: "Starter Recovery Set",
    description:
      "Primary chair plus a portable wellness device and care accessories.",
  },
  {
    title: "Premium Home Spa",
    description:
      "Top-tier massage chair paired with complementary therapy products.",
  },
  {
    title: "Clinic Fit-Out",
    description:
      "A B2B-friendly offer block for future lead forms and quote requests.",
  },
];

export const resourceLinks = [
  "About Masseuse Health Co.",
  "Massage chair benefits",
  "How to choose the right setup",
  "Shipping and warranty FAQs",
  "Wellness journal",
  "Commercial enquiries",
];
