"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { useLenis } from "lenis/react";

import {
  HeaderCartButton,
  HeaderCartDrawer,
} from "@/components/header-cart";
import { navGroups, type NavColumn, type NavGroup } from "@/lib/site-content";

const disabledLinkClass =
  "cursor-not-allowed text-slate-400 opacity-60 pointer-events-none select-none";
const COMPACT_SCROLL_START = 72;
const COMPACT_SCROLL_END = 28;

function LogoMark({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      className="relative inline-flex h-11 w-[124px] items-center sm:w-[136px]"
      aria-label="Masseuse Health Co. home"
    >
      <Image
        src="/assets/masseuse-health-logo.svg"
        alt="Masseuse Health Co."
        width={245}
        height={81}
        priority
        className={`absolute left-0 top-1/2 h-10 w-auto -translate-y-1/2 transform-gpu brightness-0 invert transition-opacity duration-200 ease-out will-change-opacity sm:h-11 ${
          compact ? "opacity-0" : "opacity-100"
        }`}
      />
      <Image
        src="/assets/masseuse-health-logo-mark.png"
        alt="Masseuse Health Co. mark"
        width={94}
        height={94}
        priority
        className={`absolute left-0 top-1/2 -translate-y-1/2 object-contain brightness-0 invert transform-gpu transition-opacity duration-200 ease-out will-change-opacity ${
          compact ? "h-11 w-11 opacity-100 sm:h-12 sm:w-12" : "h-9 w-9 opacity-0 sm:h-10 sm:w-10"
        }`}
      />
    </Link>
  );
}

function ColumnLink({ column }: { column: NavColumn }) {
  const content = (
    <>
      {column.imageSrc ? (
        <Image
          src={column.imageSrc}
          alt=""
          fill
          sizes="(min-width: 1024px) 19vw, 50vw"
          className="object-cover transition duration-700 group-hover/card:scale-105"
        />
      ) : (
        <div className="absolute inset-0 bg-slate-100" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/18 to-black/5 transition duration-500 group-hover/card:from-black/88 group-hover/card:via-black/38" />
      <div className="absolute inset-x-0 bottom-0 p-5 text-white">
        <p className="text-lg font-semibold leading-tight tracking-[-0.035em]">
          {column.title}
        </p>
        <div className="grid grid-rows-[0fr] transition-all duration-500 group-hover/card:grid-rows-[1fr] group-focus-visible/card:grid-rows-[1fr]">
          <div className="overflow-hidden">
            <p className="mt-3 text-sm leading-6 text-white/78">
              {column.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );

  if (column.disabled) {
    return (
      <span
        className={`group/card relative aspect-[4/5] overflow-hidden bg-slate-950 ${disabledLinkClass}`}
        aria-disabled="true"
      >
        {content}
      </span>
    );
  }

  return (
    <Link
      href={column.href}
      className="group/card relative aspect-[4/5] overflow-hidden bg-slate-950 outline-none transition focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2"
    >
      {content}
    </Link>
  );
}

function GroupLabel({
  group,
  compact = false,
}: {
  group: NavGroup;
  compact?: boolean;
}) {
  const className = `inline-flex items-center gap-2 text-base font-semibold transition focus:text-white ${
    compact ? "py-2.5" : "py-4"
  }`;
  const showDropdownIndicator = group.columns && group.label !== "Saunass";

  if (group.disabled) {
    return (
      <span className={`${className} cursor-default text-white/70`}>
        {group.label}
        {showDropdownIndicator ? (
          <span className="text-sm text-white/60">+</span>
        ) : null}
      </span>
    );
  }

  return (
    <Link
      href={group.href}
      className={`${className} text-white hover:text-white/80 focus:text-white`}
    >
      {group.label}
      {showDropdownIndicator ? <span className="text-sm text-white/60">+</span> : null}
    </Link>
  );
}

function MegaMenu({ group }: { group: NavGroup }) {
  const isSaunaMenu = group.label === "Saunas";
  const columnCount = group.columns?.length ?? 1;

  if (!isSaunaMenu) {
    return (
      <div className="absolute left-1/2 top-full z-40 w-56 -translate-x-1/2 pt-2 opacity-0 invisible translate-y-1 transition-all duration-200 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
        <div className="absolute left-0 top-[-0.75rem] h-4 w-full bg-transparent" aria-hidden="true" />
        <div className="pointer-events-auto border border-black/5 bg-white px-5 py-4 text-center shadow-[0_20px_50px_rgba(15,23,42,0.12)]">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
            {group.label}
          </p>
          <p className="mt-2 text-base font-semibold text-slate-950">Coming soon</p>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute left-1/2 top-full z-40 w-[58rem] -translate-x-1/2 pt-2 opacity-0 invisible translate-y-1 transition-all duration-200 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
      <div
        className="absolute left-6 top-[-0.55rem] h-4 w-32 bg-transparent [clip-path:polygon(50%_0,0_100%,100%_100%)]"
        aria-hidden="true"
      />
      <div className="absolute left-0 top-[-0.75rem] h-4 w-72 bg-transparent" aria-hidden="true" />
      <div className="pointer-events-auto bg-white p-0 shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
        <div
          className="grid"
          style={{ gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))` }}
        >
          {group.columns?.map((column) => <ColumnLink key={column.title} column={column} />)}
        </div>
      </div>
    </div>
  );
}

function MegaMenuBridge() {
  return (
    <>
      <div className="absolute left-0 top-full z-30 h-3 w-72 bg-transparent" aria-hidden="true" />
      <div
        className="absolute left-6 top-[calc(100%+0.02rem)] z-30 h-4 w-36 bg-transparent [clip-path:polygon(50%_0,0_100%,100%_100%)]"
        aria-hidden="true"
      />
    </>
  );
}

type SiteHeaderProps = {
  overlay?: boolean;
};

export function SiteHeader({ overlay = false }: SiteHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const isScrolledRef = useRef(false);

  const updateScrolledState = useCallback((nextScrollY: number) => {
    const shouldCompact = isScrolledRef.current
      ? nextScrollY > COMPACT_SCROLL_END
      : nextScrollY > COMPACT_SCROLL_START;

    if (shouldCompact !== isScrolledRef.current) {
      isScrolledRef.current = shouldCompact;
      setIsScrolled(shouldCompact);
    }
  }, []);

  useLenis((lenis) => {
    updateScrolledState(lenis.scroll);
  });

  useEffect(() => {
    const handleScroll = () => {
      updateScrolledState(window.scrollY);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [updateScrolledState]);

  return (
    <>
      <header
        className={`${overlay ? "fixed inset-x-0" : "sticky"} top-0 z-50 border-b transition-all duration-300 ${
          isScrolled
            ? "border-white/10 bg-black/70 shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-xl"
            : "border-white/10 bg-black/95 backdrop-blur-xl"
        }`}
      >
        <div
          className={`mx-auto flex w-full items-center justify-between gap-6 px-4 transition-all duration-300 sm:px-6 lg:grid lg:max-w-none lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:px-8 2xl:max-w-[1600px] ${
            isScrolled ? "py-2.5" : "py-4"
          }`}
        >
          <div className="flex min-w-0 items-center lg:justify-self-start">
            <LogoMark compact={isScrolled} />
          </div>

          <nav className="hidden justify-self-center lg:block" aria-label="Primary navigation">
            <ul className="flex items-center gap-8">
              {navGroups.map((group) => (
                <li
                  key={group.label}
                  className={`group relative transition-all duration-300 ${
                    isScrolled ? "pb-2.5 -mb-2.5" : "pb-4 -mb-4"
                  }`}
                >
                  <GroupLabel group={group} compact={isScrolled} />

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

          <div className="hidden shrink-0 items-center gap-3 justify-self-end lg:flex">
            <HeaderCartButton />
          </div>

          <div className="flex shrink-0 items-center gap-3 lg:hidden">
            <HeaderCartButton mobile />

            <details className="group w-full max-w-48">
              <summary className="flex cursor-pointer list-none items-center justify-between rounded-full border border-white/30 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15">
                Menu
                <span className="text-white/70 transition group-open:rotate-45">+</span>
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
