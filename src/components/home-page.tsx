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

      <section id="newsletter" className="bg-slate-100">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="rounded-[2.5rem] bg-white p-8 shadow-sm lg:flex lg:items-center lg:justify-between lg:gap-10 lg:p-10">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
                Everyday recovery, reimagined.
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Science-backed wellness tools for modern living.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Sign up for offers and wellness tips from Masseuse Health Co.,
                designed around modern recovery routines and everyday wellbeing.
              </p>
            </div>

            <div className="mt-8 flex w-full max-w-xl flex-col gap-3 lg:mt-0 lg:flex-row">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email address"
                readOnly
                className="min-h-12 flex-1 cursor-not-allowed rounded-full border border-slate-300 px-5 text-sm text-slate-950 outline-none ring-0 placeholder:text-slate-400"
              />
              <button
                type="button"
                disabled
                className="min-h-12 cursor-not-allowed rounded-full bg-slate-950 px-6 text-sm font-medium text-white opacity-80"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
