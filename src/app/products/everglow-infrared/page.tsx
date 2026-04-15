import type { Metadata } from "next";
import Script from "next/script";

import { EverglowProductView } from "@/components/everglow-product-view";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { everglowInfraredSaunaPath, everglowProductDetail, siteConfig } from "@/lib/site-content";

export const metadata: Metadata = {
  title: everglowProductDetail.metaTitle,
  description: everglowProductDetail.shortDescription,
  alternates: {
    canonical: everglowInfraredSaunaPath,
  },
  openGraph: {
    type: "website",
    url: `${siteConfig.baseUrl}${everglowInfraredSaunaPath}`,
    title: `${everglowProductDetail.metaTitle} | ${siteConfig.name}`,
    description: everglowProductDetail.shortDescription,
  },
};

export default function EverglowInfraredProductPage() {
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${everglowProductDetail.title} — ${everglowProductDetail.category}`,
    sku: everglowProductDetail.sku,
    category: everglowProductDetail.category,
    description: everglowProductDetail.shortDescription,
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "AUD",
      price: everglowProductDetail.price.replace(/[^0-9.]/g, ""),
      availability: "https://schema.org/InStock",
      url: `${siteConfig.baseUrl}${everglowInfraredSaunaPath}`,
    },
  };

  return (
    <>
      <Script
        id="product-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <SiteHeader />
      <main id="main-content">
        <EverglowProductView />
      </main>
      <SiteFooter />
    </>
  );
}
