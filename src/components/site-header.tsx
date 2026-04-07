import Image from "next/image";
import Link from "next/link";

import {
  HeaderCartButton,
  HeaderCartDrawer,
} from "@/components/header-cart";
import { navGroups } from "@/lib/site-content";

function LogoMark() {
  return (
    <Link
      href="/"
      className="inline-flex items-center"
      aria-label="Masseuse Health Co. home"
    >
      <Image
        src="/assets/masseuse-health-logo.svg"
        alt="Masseuse Health Co."
        width={245}
        height={81}
        priority
        className="h-10 w-auto sm:h-11"
      />
    </Link>
  );
}

export function SiteHeader() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex items-center gap-14">
            <LogoMark />

            <nav className="hidden lg:block" aria-label="Primary navigation">
              <ul className="flex items-center gap-8">
                {navGroups.map((group) => (
                  <li key={group.label} className="group relative">
                    <Link
                      href={group.href}
                      className="inline-flex items-center gap-2 py-5 text-base font-semibold text-slate-700 transition hover:text-slate-950 focus:text-slate-950"
                    >
                      {group.label}
                      {group.columns ? (
                        <span className="text-sm text-slate-400">+</span>
                      ) : null}
                    </Link>

                    {group.columns ? (
                      <div className="pointer-events-none absolute left-0 top-full hidden w-[44rem] pt-3 group-hover:block group-focus-within:block">
                        <div className="pointer-events-auto rounded-3xl border border-black/5 bg-white p-6 shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
                          <div className="grid gap-4 md:grid-cols-[1.3fr_1fr]">
                            <div className="grid gap-3 sm:grid-cols-2">
                              {group.columns.map((column) => (
                                <Link
                                  key={column.title}
                                  href={column.href}
                                  className="rounded-2xl border border-slate-200/80 bg-slate-50 p-5 transition hover:border-slate-300 hover:bg-white"
                                >
                                  <p className="text-base font-bold text-slate-900">
                                    {column.title}
                                  </p>
                                  <p className="mt-2 text-base leading-7 text-slate-600">
                                    {column.description}
                                  </p>
                                </Link>
                              ))}
                            </div>

                            <div className="rounded-2xl bg-slate-950 p-6 text-white">
                              <p className="text-xs uppercase tracking-[0.28em] text-white/50">
                                Featured
                              </p>
                              <h3 className="mt-3 text-xl font-semibold">
                                {group.label}
                              </h3>
                              <p className="mt-2 text-sm leading-6 text-white/72">
                                This mega-menu layout is ready for collection data,
                                editorial links and campaign callouts from Shopify.
                              </p>
                              <Link
                                href={group.href}
                                className="mt-6 inline-flex rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-950"
                              >
                                {group.featuredLabel ?? "Explore"}
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <HeaderCartButton />
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <HeaderCartButton mobile />

            <details className="group w-full max-w-48">
              <summary className="flex cursor-pointer list-none items-center justify-between rounded-full border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-800">
                Menu
                <span className="text-slate-400 transition group-open:rotate-45">+</span>
              </summary>
              <div className="mt-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-lg">
                <nav aria-label="Mobile navigation">
                  <ul className="space-y-3">
                    {navGroups.map((group) => (
                      <li
                        key={group.label}
                        className="rounded-2xl border border-slate-200 p-3"
                      >
                        <Link
                          href={group.href}
                          className="block text-base font-semibold text-slate-900"
                        >
                          {group.label}
                        </Link>
                        {group.columns ? (
                          <div className="mt-3 space-y-2 border-t border-slate-200 pt-3">
                            {group.columns.map((column) => (
                              <Link
                                key={column.title}
                                href={column.href}
                                className="block text-base font-medium text-slate-700"
                              >
                                {column.title}
                              </Link>
                            ))}
                          </div>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </details>
          </div>
        </div>
      </header>
      <HeaderCartDrawer />
    </>
  );
}
