import Link from "next/link";

import { resourceLinks } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/5 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-white/45">
            Masseuse Health Co.
          </p>
          <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
            A premium wellness storefront foundation built for Shopify content later.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70">
            This first pass focuses on page structure, merchandising rhythm and a
            premium header experience so the brand can evolve into a headless
            commerce stack cleanly.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold text-white">Explore</h3>
            <div className="mt-4 space-y-3">
              {resourceLinks.map((resource) => (
                <Link
                  key={resource}
                  href="#resources"
                  className="block text-sm text-white/68 transition hover:text-white"
                >
                  {resource}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Contact</h3>
            <div className="mt-4 space-y-3 text-sm text-white/68">
              <p>hello@masseusehealth.co</p>
              <p>Mon - Fri / 9am - 5pm</p>
              <p>Australia-wide launch delivery mockup</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
