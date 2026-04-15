import Link from "next/link";

import { AddToCartButton } from "@/components/add-to-cart-button";
import { EverglowBuyBox } from "@/components/everglow-buy-box";
import { everglowProductDetail } from "@/lib/site-content";

function PromoBar() {
  return (
    <div className="border-b border-white/10 bg-slate-950 py-2.5 text-center">
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/90 sm:text-xs">
        {everglowProductDetail.promoBar}
      </p>
    </div>
  );
}

function GalleryColumn() {
  return (
    <div className="space-y-4 lg:sticky lg:top-28 lg:self-start">
      <div className="aspect-[4/5] overflow-hidden rounded-[2rem] border border-slate-200 bg-[linear-gradient(145deg,_#f1f5f9,_#e2e8f0)] shadow-sm">
        <div className="flex h-full flex-col justify-end p-8">
          <p className="text-sm font-medium text-slate-500">Everglow Infrared</p>
          <p className="mt-2 text-xs leading-relaxed text-slate-400">
            Therapeutic 65°C infrared heat, premium timber construction, and intelligent controls.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {everglowProductDetail.sizes.map((s) => (
          <div
            key={s.id}
            className="aspect-square rounded-2xl border border-slate-200 bg-slate-100 p-3 text-center text-[0.65rem] font-semibold uppercase tracking-wider text-slate-500"
          >
            {s.label}
          </div>
        ))}
      </div>
    </div>
  );
}

function TrustRow() {
  return (
    <div className="mt-12 grid gap-4 border-y border-slate-200 py-10 sm:grid-cols-3">
      {everglowProductDetail.trustBadges.map((b) => (
        <div key={b.title} className="text-center sm:text-left">
          <p className="text-sm font-semibold text-slate-950">{b.title}</p>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{b.description}</p>
        </div>
      ))}
    </div>
  );
}

function ProductTabs() {
  return (
    <div className="border-y border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-wrap gap-8 px-4 py-4 text-sm font-semibold text-slate-600 sm:px-6 lg:px-8">
        {everglowProductDetail.productTabs.map((tab, index) => (
          <span
            key={tab}
            className={index === 0 ? "text-slate-950" : "text-slate-500"}
          >
            {tab}
          </span>
        ))}
      </div>
    </div>
  );
}

function SelectedVariantCard() {
  return (
    <section className="border-t border-slate-200 bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="aspect-[4/3] rounded-[1.5rem] bg-[linear-gradient(135deg,_#e2e8f0,_#f8fafc)]" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
              {everglowProductDetail.title}
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-slate-950">
              {everglowProductDetail.selectedVariantLabel}
            </h3>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <p className="text-base text-slate-400 line-through">
                {everglowProductDetail.compareAtPrice}
              </p>
              <p className="text-2xl font-semibold text-slate-950">
                {everglowProductDetail.price}
              </p>
            </div>
            <div className="mt-6">
              <AddToCartButton
                sku={everglowProductDetail.sku}
                name={everglowProductDetail.title}
                price={everglowProductDetail.price}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function EverglowProductView() {
  return (
    <>
      <PromoBar />

      <div className="border-b border-black/5 bg-[linear-gradient(180deg,_#fafafa_0%,_#ffffff_45%)]">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
              <li>
                <Link href="/" className="font-medium text-slate-700 hover:text-slate-950">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <span className="text-slate-400">Saunas</span>
              </li>
              <li aria-hidden="true">/</li>
              <li className="font-medium text-slate-950">{everglowProductDetail.title}</li>
            </ol>
          </nav>

          <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start lg:gap-16">
            <GalleryColumn />
            <EverglowBuyBox />
          </div>

          <TrustRow />
        </div>
      </div>

      <ProductTabs />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <section aria-labelledby="features-heading" className="scroll-mt-24">
          <h2
            id="features-heading"
            className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl"
          >
            Features
          </h2>
          <ul className="mt-8 space-y-4 text-sm leading-7 text-slate-700 sm:columns-2 sm:gap-x-10">
            {everglowProductDetail.featuresDetailed.map((line) => (
              <li key={line} className="break-inside-avoid pb-2">
                <span className="mr-2 text-emerald-600">•</span>
                {line}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="dimensions-heading" className="mt-20 scroll-mt-24">
          <h2
            id="dimensions-heading"
            className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl"
          >
            Dimensions
          </h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {everglowProductDetail.sizes.map((s) => (
              <div
                key={s.id}
                className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6"
              >
                <h3 className="text-lg font-semibold text-slate-950">{s.label}</h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  <li>
                    <span className="font-medium text-slate-900">Width:</span> {s.dimensions.wCm}{" "}
                    cm
                  </li>
                  <li>
                    <span className="font-medium text-slate-900">Height:</span>{" "}
                    {s.dimensions.hCm} cm
                  </li>
                  <li>
                    <span className="font-medium text-slate-900">Depth:</span> {s.dimensions.dCm}{" "}
                    cm
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="weight-heading" className="mt-20 scroll-mt-24">
          <h2
            id="weight-heading"
            className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl"
          >
            Weight and electrical
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
            Weight and electrical requirements vary by size and timber selection.
            Confirm final installation needs for the configuration you choose.
          </p>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wider text-slate-500">
                <tr>
                  <th className="px-4 py-3">Size</th>
                  <th className="px-4 py-3">Finish</th>
                  <th className="px-4 py-3">Weight</th>
                  <th className="px-4 py-3">Power (W)</th>
                  <th className="px-4 py-3">Voltage</th>
                  <th className="px-4 py-3">AMP</th>
                  <th className="px-4 py-3">Fuse</th>
                  <th className="px-4 py-3">Phase</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-800">
                {everglowProductDetail.weightElectricalByVariant.map((row) => (
                  <tr key={`${row.size}-${row.finish}`} className="bg-white">
                    <td className="px-4 py-3 font-medium">{row.size}</td>
                    <td className="px-4 py-3">{row.finish}</td>
                    <td className="px-4 py-3">{row.weightKg} kg</td>
                    <td className="px-4 py-3">{row.powerW}</td>
                    <td className="px-4 py-3">{row.voltage}</td>
                    <td className="px-4 py-3">{row.amps}</td>
                    <td className="px-4 py-3">{row.fuseType}</td>
                    <td className="px-4 py-3 capitalize">{row.phase}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm italic text-slate-500">
            {everglowProductDetail.electricianNote}
          </p>
        </section>
      </div>

      <SelectedVariantCard />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
          {everglowProductDetail.athletes.title}
        </h2>
        <p className="mt-3 text-center text-sm font-medium uppercase tracking-widest text-slate-500">
          {everglowProductDetail.athletes.subtitle}
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {everglowProductDetail.athletes.people.map((person) => (
            <div
              key={person.name}
              className="rounded-[1.5rem] border border-slate-200 bg-slate-50 px-6 py-10 text-center"
            >
              <div className="mx-auto mb-6 h-24 w-24 rounded-full bg-gradient-to-br from-slate-200 to-slate-300" />
              <p className="font-semibold text-slate-950">{person.name}</p>
              <p className="mt-2 text-sm text-slate-600">{person.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="deep-heat-heading"
        className="border-y border-slate-200 bg-slate-950 py-20 text-white"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            id="deep-heat-heading"
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            {everglowProductDetail.deepHeat.title}
          </h2>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/75">
            {everglowProductDetail.deepHeat.intro}
          </p>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {everglowProductDetail.deepHeat.cards.map((card) => (
              <article
                key={card.title}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8"
              >
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/72">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
            Science-Backed Recovery
          </h2>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {everglowProductDetail.scienceBacked.items.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-8 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 rounded-[2.5rem] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:p-14">
          <div className="aspect-[4/5] max-h-80 overflow-hidden rounded-[2rem] bg-slate-200 lg:max-h-none" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
              Our Founder
            </p>
            <blockquote className="mt-6 text-xl font-medium leading-relaxed text-slate-950 sm:text-2xl">
              <span className="whitespace-pre-line">{everglowProductDetail.founder.quote}</span>
            </blockquote>
            <footer className="mt-8">
              <p className="text-lg font-semibold text-slate-950">
                {everglowProductDetail.founder.name}
              </p>
              <p className="text-sm font-medium uppercase tracking-wider text-slate-500">
                {everglowProductDetail.founder.role}
              </p>
            </footer>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-slate-950">
            Elite recovery leaves no questions unanswered
          </h2>
          <p className="mt-3 text-center text-sm text-slate-600">
            Your path to peak performance starts here.
          </p>
          <div className="mt-12 space-y-3">
            {everglowProductDetail.faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 open:bg-white open:shadow-sm"
              >
                <summary className="cursor-pointer list-none text-left text-base font-semibold text-slate-950">
                  <span className="inline-flex w-full items-center justify-between gap-4">
                    {item.q}
                    <span className="text-slate-400 transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-center text-white">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-3xl font-semibold tracking-tight">
            {everglowProductDetail.bottomTagline.title}
          </h2>
          <p className="mt-4 text-lg text-white/75">{everglowProductDetail.bottomTagline.subtitle}</p>
          <p className="mt-10 text-xs font-semibold uppercase tracking-[0.28em] text-white/50">
            Sign up for offers & wellness tips
          </p>
          <div className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
            <label htmlFor="everglow-email" className="sr-only">
              Email
            </label>
            <input
              id="everglow-email"
              type="email"
              placeholder="Email address"
              readOnly
              className="min-h-12 flex-1 cursor-not-allowed rounded-full border border-white/20 bg-white/10 px-5 text-sm text-white/80 outline-none placeholder:text-white/40"
            />
            <button
              type="button"
              disabled
              className="min-h-12 cursor-not-allowed rounded-full bg-white/80 px-8 text-sm font-semibold text-slate-600 opacity-80"
            >
              Subscribe
            </button>
          </div>
          <Link
            href="/#featured-products"
            className="mt-12 inline-flex rounded-full border border-white/25 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Shop now
          </Link>
        </div>
      </section>
    </>
  );
}
