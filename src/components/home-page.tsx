import Image from "next/image";
import { Questrial } from "next/font/google";
import Link from "next/link";

import {
  bundleHighlights,
  everglowInfraredSaunaPath,
  featuredProducts,
  proofLogos,
  testimonials,
} from "@/lib/site-content";

const questrial = Questrial({
  subsets: ["latin"],
  weight: "400",
});

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
      <section className="overflow-hidden">
        <div className="relative min-h-screen w-full">
          <Image
            src="/images/hero-sauna.png"
            alt="Everglow infrared sauna in a bright interior"
            fill
            priority
            quality={100}
            sizes="100vw"
            unoptimized
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
          <div className="pointer-events-none absolute bottom-4 right-4 z-10 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8">
            <Image
              src="/assets/masseuse-health-logo-mark.png"
              alt=""
              width={180}
              height={180}
              priority
              aria-hidden="true"
              className="hero-mark-enter h-20 w-20 object-contain brightness-0 opacity-35 sm:h-28 sm:w-28 lg:h-40 lg:w-40"
            />
          </div>
          <div className="absolute bottom-6 left-4 z-10 sm:bottom-8 sm:left-6 lg:bottom-10 lg:left-8">
            <div className="flex flex-col items-start gap-3">
              <p
                className={`${questrial.className} max-w-xs text-2xl font-normal leading-none tracking-[-0.035em] text-black sm:max-w-md sm:text-3xl lg:max-w-xl lg:text-5xl`}
              >
                Everglow Infrared
              </p>
              <Link
                href={everglowInfraredSaunaPath}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-[0_10px_24px_rgba(15,23,42,0.18)]"
              >
                Experience Real Recovery
                <span className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true">
                  &rarr;
                </span>
              </Link>
            </div>
          </div>
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
            eyebrow="Shop now"
            title="Shop now"
            description="Premium recovery essentials designed for modern homes, everyday rituals, and long-term wellbeing."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredProducts.map((product) => (
              <article
                key={product.name}
                className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="rounded-[1.5rem] bg-[linear-gradient(135deg,_#e2e8f0,_#f8fafc)] p-6">
                  <div className="flex min-h-56 items-end rounded-[1.25rem] border border-slate-200 bg-white/55 p-5">
                    <p className="text-sm text-slate-500">Daily rituals. Proven results.</p>
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
                  {product.href && !product.learnMoreDisabled ? (
                    <Link
                      href={product.href}
                      className="inline-flex rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
                    >
                      Shop now
                    </Link>
                  ) : (
                    <span
                      className="inline-flex cursor-not-allowed select-none rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-400 opacity-80"
                      aria-disabled="true"
                    >
                      Shop now
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about-us"
        aria-labelledby="about-us-heading"
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
              Trusted by Australians for over 17 years.
            </p>
            <h2
              id="about-us-heading"
              className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl"
            >
              Trusted by Australians for over 17 years.
            </h2>
            <p className="mt-6 text-base leading-7 text-slate-600">
              Masseuse Health Co. is redefining recovery with science-backed tools
              designed for modern living. From ice baths to infrared saunas, we
              create products that look as good as they feel, helping you recover
              faster, think clearer, and live stronger.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600">
              With over 17 years of experience through our parent brand, Masseuse
              Massage Chairs, we&apos;re trusted by thousands of Australians for
              quality, innovation, and care. Now, we&apos;re bringing that legacy
              into the next era of wellness: practical, premium, and built to last.
            </p>
            <span
              className="mt-8 inline-flex cursor-not-allowed select-none rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white opacity-85"
              aria-disabled="true"
            >
              About us
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {proofLogos.map((logo) => (
              <div
                key={logo}
                className="rounded-[1.75rem] border border-slate-200 bg-slate-50 px-5 py-10 text-center text-sm font-semibold uppercase tracking-[0.22em] text-slate-400"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="editorial-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="rounded-[2.5rem] bg-[linear-gradient(135deg,_#dbeafe,_#e2e8f0,_#f8fafc)] p-8 shadow-sm">
              <div className="min-h-96 rounded-[2rem] border border-white/50 bg-white/40" />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
                Editorial
              </p>
              <h2
                id="editorial-heading"
                className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl"
              >
                Blake Acres: Recovery on His Own Terms
              </h2>
              <p className="mt-6 text-base leading-7 text-slate-600">
                In the high-intensity world of professional AFL, recovery isn&apos;t
                optional, it&apos;s a competitive advantage. For Carlton Blues
                midfielder Blake Acres, maintaining peak performance means creating
                a recovery environment that works as hard as he does.
              </p>
              <p className="mt-4 text-base leading-7 text-slate-600">
                The demands of training, travel, and game-day intensity are
                relentless, but Blake has found a way to stay one step ahead by
                bringing professional-grade recovery into his own home.
              </p>
              <span
                className="mt-8 inline-flex cursor-not-allowed select-none rounded-full border border-slate-300 px-5 py-3 text-sm font-medium text-slate-500"
                aria-disabled="true"
              >
                Read more
              </span>
            </div>
          </div>
        </div>
      </section>

      <section
        id="why-masseuse"
        aria-labelledby="why-masseuse-heading"
        className="bg-slate-50"
      >
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            id="why-masseuse-heading"
            eyebrow="Why Masseuse Health Co.?"
            title="Why Masseuse Health Co.?"
            description="Australian-owned. Trusted for over 18 years."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {bundleHighlights.map((bundle) => (
              <article
                key={bundle.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-slate-950">{bundle.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
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
            title="Trusted by 30,000+ Happy Customers"
            description="Real reviews from customers using Masseuse Health Co. as part of their recovery routine."
            invert
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((testimonial) => (
              <blockquote
                key={testimonial.author}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-6"
              >
                <p className="text-base leading-7 text-white/88">
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
