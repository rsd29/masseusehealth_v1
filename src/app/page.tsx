import type { Metadata } from "next";
import Script from "next/script";

import { HomePage } from "@/components/home-page";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { everglowInfraredSaunaPath, featuredProducts, siteConfig } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Daily rituals. Proven results.",
  description:
    "Backed by research, trusted by pros — unlock deeper recovery, sharper focus, and lasting wellbeing with every session.",
};

export default function Page() {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.baseUrl,
    description: siteConfig.description,
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.baseUrl,
    logo: `${siteConfig.baseUrl}/assets/masseuse-health-logo.svg`,
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Featured products",
    itemListElement: featuredProducts.map((product, index) => ({
      "@type": "Product",
      position: index + 1,
      name: product.name,
      sku: product.sku,
      category: product.category,
      offers: {
        "@type": "Offer",
        priceCurrency: "AUD",
        price: product.price.replace(/[^0-9.]/g, ""),
        availability: "https://schema.org/InStock",
        url:
          product.href === everglowInfraredSaunaPath
            ? `${siteConfig.baseUrl}${everglowInfraredSaunaPath}`
            : `${siteConfig.baseUrl}/#featured-products`,
      },
    })),
  };

  return (
    <>
      <Script
        id="website-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <Script
        id="organization-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <Script
        id="itemlist-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <SiteHeader />
      <HomePage />
      <SiteFooter />
    </>
  );
}
