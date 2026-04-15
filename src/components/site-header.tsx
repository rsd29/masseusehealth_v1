import Image from "next/image";
import Link from "next/link";

import {
  HeaderCartButton,
  HeaderCartDrawer,
} from "@/components/header-cart";
import { navGroups, type NavColumn, type NavGroup } from "@/lib/site-content";

const disabledLinkClass =
  "cursor-not-allowed text-slate-400 opacity-60 pointer-events-none select-none";

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

function ColumnLink({ column }: { column: NavColumn }) {
  if (column.disabled) {
    return (
      <span
        className={`rounded-2xl border border-slate-200/80 bg-slate-50 p-5 ${disabledLinkClass}`}
        aria-disabled="true"
      >
        <p className="text-base font-bold text-slate-600">{column.title}</p>
        <p className="mt-2 text-base leading-7 text-slate-500">{column.description}</p>
      </span>
    );
  }

  return (
    <Link
      href={column.href}
      className="rounded-2xl border border-slate-200/80 bg-slate-50 p-5 transition hover:border-slate-300 hover:bg-white"
    >
      <p className="text-base font-bold text-slate-900">{column.title}</p>
      <p className="mt-2 text-base leading-7 text-slate-600">{column.description}</p>
    </Link>
  );
}

function GroupLabel({ group }: { group: NavGroup }) {
  const className =
    "inline-flex items-center gap-2 py-5 text-base font-semibold transition focus:text-slate-950";

  if (group.disabled) {
    return (
      <span className={`${className} cursor-default text-slate-500`}>
        {group.label}
        {group.columns ? (
          <span className="text-sm text-slate-400">+</span>
        ) : null}
      </span>
    );
  }

  return (
    <Link
      href={group.href}
      className={`${className} text-slate-700 hover:text-slate-950`}
    >
      {group.label}
      {group.columns ? <span className="text-sm text-slate-400">+</span> : null}
    </Link>
  );
}

function FeaturedCta({ group }: { group: NavGroup }) {
  const href = group.featuredHref ?? group.href;
  const isDisabled = group.disabled && !group.featuredHref;

  if (isDisabled) {
    return (
      <span
        className={`mt-6 inline-flex rounded-full bg-white/50 px-4 py-2 text-sm font-medium text-slate-500 ${disabledLinkClass}`}
        aria-disabled="true"
      >
        {group.featuredLabel ?? "Explore"}
      </span>
    );
  }

  return (
    <Link
      href={href}
      className="mt-6 inline-flex rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-950"
    >
      {group.featuredLabel ?? "Explore"}
    </Link>
  );
}

function MegaMenu({ group }: { group: NavGroup }) {
  return (
    <div className="absolute left-0 top-full z-40 w-[44rem] pt-4 opacity-0 invisible translate-y-2 transition-all duration-200 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
      <div
        className="absolute left-6 top-[-0.9rem] h-5 w-32 bg-transparent [clip-path:polygon(50%_0,0_100%,100%_100%)]"
        aria-hidden="true"
      />
      <div className="absolute left-0 top-[-1.1rem] h-6 w-72 bg-transparent" aria-hidden="true" />
      <div className="pointer-events-auto rounded-3xl border border-black/5 bg-white p-6 shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
        <div className="grid gap-4 md:grid-cols-[1.3fr_1fr]">
          <div className="grid gap-3 sm:grid-cols-2">
            {group.columns?.map((column) => <ColumnLink key={column.title} column={column} />)}
          </div>

          <div className="rounded-2xl bg-slate-950 p-6 text-white">
            <p className="text-xs uppercase tracking-[0.28em] text-white/50">Featured</p>
            <h3 className="mt-3 text-xl font-semibold">{group.label}</h3>
            <p className="mt-2 text-sm leading-6 text-white/72">
              {group.description ??
                "Explore science-backed recovery tools designed for modern home wellness."}
            </p>
            <FeaturedCta group={group} />
          </div>
        </div>
      </div>
    </div>
  );
}

function MegaMenuBridge() {
  return (
    <>
      <div className="absolute left-0 top-full z-30 h-5 w-72 bg-transparent" aria-hidden="true" />
      <div
        className="absolute left-6 top-[calc(100%+0.05rem)] z-30 h-6 w-36 bg-transparent [clip-path:polygon(50%_0,0_100%,100%_100%)]"
        aria-hidden="true"
      />
    </>
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
                  <li key={group.label} className="group relative pb-5 -mb-5">
                    <GroupLabel group={group} />

                    {group.columns ? (
                      <>
                        <MegaMenuBridge />
                        <MegaMenu group={group} />
                      </>
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
                        {group.disabled ? (
                          <span
                            className={`block text-base font-semibold text-slate-500 ${disabledLinkClass}`}
                            aria-disabled="true"
                          >
                            {group.label}
                          </span>
                        ) : (
                          <Link
                            href={group.href}
                            className="block text-base font-semibold text-slate-900"
                          >
                            {group.label}
                          </Link>
                        )}
                        {group.columns ? (
                          <div className="mt-3 space-y-2 border-t border-slate-200 pt-3">
                            {group.columns.map((column) =>
                              column.disabled ? (
                                <span
                                  key={column.title}
                                  className={`block text-base font-medium text-slate-400 ${disabledLinkClass}`}
                                  aria-disabled="true"
                                >
                                  {column.title}
                                </span>
                              ) : (
                                <Link
                                  key={column.title}
                                  href={column.href}
                                  className="block text-base font-medium text-slate-700"
                                >
                                  {column.title}
                                </Link>
                              ),
                            )}
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
