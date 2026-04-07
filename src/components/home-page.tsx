import Link from "next/link";

import { AddToCartButton } from "@/components/add-to-cart-button";
import {
  bundleHighlights,
  collectionCards,
  featuredProducts,
  proofLogos,
  resourceLinks,
  testimonials,
} from "@/lib/site-content";

function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  invert = false,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  invert?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <p
        className={`text-xs font-semibold uppercase tracking-[0.28em] ${
          invert ? "text-white/45" : "text-slate-500"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        id={id}
        className={`mt-4 text-3xl font-semibold tracking-tight sm:text-4xl ${
          invert ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-4 text-base leading-7 ${
          invert ? "text-white/70" : "text-slate-600"
        }`}
      >
        {description}
      </p>
    </div>
  );
}

export function HomePage() {
  return (
    <main id="main-content">
      <section className="overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.95),_rgba(226,232,240,0.85),_rgba(203,213,225,0.92))]">
        <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-24">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-500">
              Masseuse Health Co.
            </p>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
              Build your at-home recovery ritual around premium ice baths and saunas.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              This mock homepage mirrors the structure of a premium recovery
              e-commerce brand, with section-first merchandising and a header
              ready for a broader Shopify catalogue of cold and heat therapy products.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#featured-products"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                Shop featured products
              </Link>
              <Link
                href="#collections"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3.5 text-sm font-medium text-slate-700 transition hover:border-slate-900 hover:text-slate-950"
              >
                Browse collections
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-500">
              <span>Premium layout direction</span>
              <span>Headless-ready content model</span>
              <span>No final product imagery required yet</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-x-[10%] bottom-0 top-12 rounded-[2.75rem] bg-white/55 blur-3xl" />
            <div className="relative rounded-[2.75rem] border border-white/60 bg-white/60 p-5 shadow-[0_35px_100px_rgba(15,23,42,0.16)] backdrop-blur">
              <div className="grid gap-5 md:grid-cols-[1.25fr_0.75fr]">
                <div className="rounded-[2rem] bg-[linear-gradient(135deg,_#0f172a,_#1e293b,_#475569)] p-8 text-white">
                  <div className="flex h-full min-h-80 flex-col justify-between rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-white/55">
                        Hero product block
                      </p>
                      <h2 className="mt-4 max-w-sm text-3xl font-semibold">
                        Recovery Plunge Pro
                      </h2>
                      <p className="mt-4 max-w-sm text-sm leading-7 text-white/75">
                        Stand-in visual panel for final photography, motion or 3D
                        product renders across your hero recovery products.
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm text-white/70">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        Chiller-ready setup
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        Premium insulated build
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-5">
                  <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                      Merchandising
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold text-slate-950">
                      Campaign-ready card layout
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      Flexible enough for promo banners, quick offers and launch
                      messaging without redesigning the hero.
                    </p>
                  </div>
                  <div className="rounded-[2rem] border border-slate-200 bg-white p-6">
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                      Shopify preparation
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      Product cards, navigation groups and homepage blocks are
                      all driven from structured data so they can be replaced by
                      headless CMS queries later.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Featured press" className="border-y border-black/5 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-6 px-4 py-8 sm:px-6 lg:px-8">
          {proofLogos.map((logo) => (
            <p
              key={logo}
              className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400"
            >
              {logo}
            </p>
          ))}
        </div>
      </section>

      <section
        id="collections"
        aria-labelledby="collections-heading"
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <SectionHeading
          id="collections-heading"
          eyebrow="Collections"
          title="A homepage structure built around clear shopping entry points"
          description="The competitor site uses category-led merchandising early on. This version translates that approach into ice bath and sauna collections that suit Masseuse Health Co."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {collectionCards.map((card) => (
            <article
              key={card.title}
              className="group rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                {card.eyebrow}
              </p>
              <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">
                {card.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {card.description}
              </p>
              <Link
                href={card.href}
                className="mt-8 inline-flex text-sm font-medium text-slate-950"
              >
                Explore section
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section
        id="featured-products"
        aria-labelledby="featured-products-heading"
        className="bg-slate-50"
      >
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            id="featured-products-heading"
            eyebrow="Featured products"
            title="Merchandise hero products in a premium card grid"
            description="This area mirrors the competitor's featured product block, but uses simpler placeholders and cleaner copy so you can swap in real Shopify products later."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
            {featuredProducts.map((product) => (
              <article
                key={product.name}
                className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="rounded-[1.5rem] bg-[linear-gradient(135deg,_#e2e8f0,_#f8fafc)] p-6">
                  <div className="flex min-h-56 items-end rounded-[1.25rem] border border-dashed border-slate-300 bg-white/55 p-5">
                    <p className="text-sm text-slate-500">Product image placeholder</p>
                  </div>
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                      {product.category}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-slate-950">
                      {product.name}
                    </h3>
                  </div>
                  <p className="text-sm font-semibold text-slate-950">{product.price}</p>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {product.summary}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {product.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
                <div className="mt-6 flex gap-3">
                  <AddToCartButton
                    sku={product.sku}
                    name={product.name}
                    price={product.price}
                  />
                  <Link
                    href={product.href}
                    className="inline-flex rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    Learn more
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="bundles"
        aria-labelledby="bundles-heading"
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <SectionHeading
            id="bundles-heading"
            eyebrow="Bundles"
            title="Reserve space for high-value bundle storytelling"
            description="The competitor leans heavily on bundled wellness outcomes. This block gives you the same conversion pattern for chair-and-device offers."
          />

          <div className="grid gap-4">
            {bundleHighlights.map((bundle) => (
              <article
                key={bundle.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-slate-950">{bundle.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {bundle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="social-proof-heading"
        className="bg-slate-950 text-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            id="social-proof-heading"
            eyebrow="Social proof"
            title="Customer trust and review content can sit lower on the page"
            description="This keeps the same rhythm as the reference site: top merchandising first, validation second."
            invert
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <blockquote
                key={testimonial.author}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-6"
              >
                <p className="text-lg leading-8 text-white/88">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <footer className="mt-6 text-sm uppercase tracking-[0.24em] text-white/45">
                  {testimonial.author}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="for-business" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 rounded-[2.5rem] border border-slate-200 bg-slate-50 p-8 lg:grid-cols-[1fr_0.9fr] lg:p-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
              For clinics and studios
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Keep a dedicated B2B path in the global navigation
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              This mirrors the competitor&apos;s commercial entry point and gives you
              room for wholesale, fit-out and lead generation content.
            </p>
            <Link
              href="#newsletter"
              className="mt-8 inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white"
            >
              Request a commercial pack
            </Link>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] bg-slate-100 p-5">
                <p className="text-sm font-semibold text-slate-950">Spas & clinics</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Multi-unit enquiries, setup guidance and commercial warranties.
                </p>
              </div>
              <div className="rounded-[1.5rem] bg-slate-100 p-5">
                <p className="text-sm font-semibold text-slate-950">Hotels & gyms</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Premium wellness zones and member experience upgrades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="resources"
        aria-labelledby="resources-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            id="resources-heading"
            eyebrow="Resources"
            title="Leave room for editorial and support content in the information architecture"
            description="The reference site balances commerce with education. This section gives your future CMS-driven articles and FAQs a clear homepage destination."
          />

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {resourceLinks.map((item) => (
              <Link
                key={item}
                href="#"
                className="rounded-[1.5rem] border border-slate-200 bg-slate-50 px-5 py-5 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-white"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="newsletter" className="bg-slate-100">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="rounded-[2.5rem] bg-white p-8 shadow-sm lg:flex lg:items-center lg:justify-between lg:gap-10 lg:p-10">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
                Email capture
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Finish the homepage with a simple acquisition block
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                This is the right place for launch updates, educational content
                opt-ins or early access signup before real Shopify flows are
                connected.
              </p>
            </div>

            <form className="mt-8 flex w-full max-w-xl flex-col gap-3 lg:mt-0 lg:flex-row">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="min-h-12 flex-1 rounded-full border border-slate-300 px-5 text-sm text-slate-950 outline-none ring-0 transition placeholder:text-slate-400 focus:border-slate-950"
              />
              <button
                type="submit"
                className="min-h-12 rounded-full bg-slate-950 px-6 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                Join now
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
