import { Questrial } from "next/font/google";

import { CustomerStoriesSection } from "@/components/customer-stories-section";
import { HeroSection } from "@/components/hero-section";
import { PressCarousel } from "@/components/press-carousel";
import { ProductBentoSection } from "@/components/product-bento-section";
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

      <section aria-label="Recovery product preview" className="bg-white px-4 pb-20 sm:px-6 lg:px-8">
        <div
          className="flex h-72 w-full items-center justify-center overflow-hidden rounded-[1.5rem] bg-[radial-gradient(circle_at_50%_35%,_#f8fafc,_#e2e8f0_48%,_#cbd5e1)] shadow-sm sm:h-96 lg:h-[32rem]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 35%, #f8fafc, #e2e8f0 48%, #cbd5e1)",
          }}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
            GIF preview placeholder
          </span>
        </div>
      </section>

    </main>
  );
}
