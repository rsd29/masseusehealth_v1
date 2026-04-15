import {
  footerShopLinks,
  footerSupportLinks,
  resourceLinks,
} from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/5 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-white/45">
            Masseuse Health Co.
          </p>
          <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Everyday recovery, reimagined.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70">
            Science-backed wellness tools for modern living, created to help
            Australians recover deeper, think clearer, and feel stronger.
          </p>
          <div className="mt-10 flex gap-4 text-sm font-medium text-white/60">
            <span className="cursor-not-allowed select-none" aria-disabled="true">
              Facebook
            </span>
            <span className="cursor-not-allowed select-none" aria-disabled="true">
              Instagram
            </span>
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold text-white">Shop</h3>
            <div className="mt-4 space-y-3">
              {footerShopLinks.map((resource) => (
                <span
                  key={resource}
                  className="block cursor-not-allowed text-sm text-white/40 select-none"
                  aria-disabled="true"
                >
                  {resource}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Resources</h3>
            <div className="mt-4 space-y-3">
              {resourceLinks.map((resource) => (
                <span
                  key={resource}
                  className="block cursor-not-allowed text-sm text-white/40 select-none"
                  aria-disabled="true"
                >
                  {resource}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Support</h3>
            <div className="mt-4 space-y-3">
              {footerSupportLinks.map((resource) => (
                <span
                  key={resource}
                  className="block cursor-not-allowed text-sm text-white/40 select-none"
                  aria-disabled="true"
                >
                  {resource}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-white/50 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="space-y-1">
            <p>1300 888 669</p>
            <p>&copy; 2026 Masseuse Health Co. | ABN 63146395404 | Site by Unmarket</p>
          </div>
          <div className="space-y-1 text-xs text-white/35">
            <p>Choosing a selection results in a full page refresh.</p>
            <p>Opens in a new window.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
