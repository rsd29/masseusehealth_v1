import { Questrial } from "next/font/google";

import { CustomerStoriesSection } from "@/components/customer-stories-section";
import { HeroSection } from "@/components/hero-section";
import { PressCarousel } from "@/components/press-carousel";
import { ProductBentoSection } from "@/components/product-bento-section";
import { RecoveryVideoPanel } from "@/components/recovery-video-panel";
import { StoreBenefits } from "@/components/store-benefits";
import { everglowInfraredSaunaPath } from "@/lib/site-content";

const questrial = Questrial({
  subsets: ["latin"],
  weight: "400",
});

export function HomePage() {
  return (
    <main id="main-content">
      <HeroSection
        headingClassName={questrial.className}
        productHref={everglowInfraredSaunaPath}
      />

      <StoreBenefits />

      <PressCarousel headingClassName={questrial.className} />

      <ProductBentoSection />

      <CustomerStoriesSection />

      <section
        aria-label="Recovery product preview"
        className="bg-white px-4 pb-20 sm:px-6 lg:px-8"
      >
        <RecoveryVideoPanel />
      </section>

    </main>
  );
}
