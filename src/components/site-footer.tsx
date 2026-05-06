"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const footerColumns = [
  {
    title: "Shop",
    links: [
      "Niseko",
      "Plunge",
      "Aspen",
      "ThermaPod",
      "Everglow Infrared Sauna",
      "Everglow Traditional Sauna",
    ],
  },
  {
    title: "Company",
    links: [
      "About",
      "Privacy Policy",
      "Terms of Use",
      "Shipping & Returns",
      "Warranty",
    ],
  },
  {
    title: "Learn",
    links: [
      "Science",
      "Editorial",
      "FAQs",
      "Ice Bath Maintenance",
      "Sauna Maintenance",
      "Ice Bath Blueprint",
      "Sauna Blueprint",
    ],
  },
  {
    title: "Support",
    links: ["Contact Us", "Buy Now, Pay Later"],
  },
] as const;

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4"
      fill="currentColor"
    >
      <path d="M14.2 8.4V6.9c0-.7.5-.9.9-.9h2.1V2.4L14.3 2c-3.2 0-4.9 1.9-4.9 5.2v1.2H6.2v4h3.2V22h4.1v-9.6h3.2l.5-4h-3Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.7" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function SiteFooter() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const footer = footerRef.current;

    if (!footer) {
      return;
    }

    const context = gsap.context(() => {
      const footerElements = gsap.utils.toArray<HTMLElement>(
        "[data-footer-title], [data-footer-reveal]",
      );

      gsap.set(footerElements, {
        opacity: 0,
        y: 18,
        willChange: "opacity, transform",
      });

      gsap.to(footerElements, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.035,
        scrollTrigger: {
          trigger: footer,
          start: "top 72%",
        },
      });
    }, footer);

    return () => {
      context.revert();
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-white text-slate-100"
    >
      <div
        className="w-screen overflow-hidden rounded-none bg-[#050607]"
      >
        <div className="px-4 pb-4 pt-6 sm:px-6 sm:pt-8 lg:px-8 lg:pt-10">
          <div className="overflow-hidden rounded-[1.5rem] border border-[#27C8E6]/18 bg-[#101214]">
            <div className="grid border-b border-[#27C8E6]/18 lg:grid-cols-[0.95fr_1.35fr]">
              <div className="border-b border-[#27C8E6]/18 p-5 sm:p-6 lg:border-b-0 lg:border-r lg:p-7">
                <Image
                  data-footer-reveal
                  src="/assets/masseuse-health-logo-mark.png"
                  alt="Masseuse Health Co."
                  width={112}
                  height={112}
                  className="h-16 w-16 object-contain brightness-0 invert sm:h-20 sm:w-20"
                />
                <p data-footer-title className="mt-6 text-xs font-semibold uppercase tracking-[0.24em] text-[#27C8E6]/76">
                  Everyday recovery, reimagined.
                </p>
                <h2 data-footer-title className="mt-3 max-w-2xl text-3xl font-semibold leading-[0.94] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                  Science-backed wellness tools for modern living.
                </h2>

              <div data-footer-reveal className="mt-6 max-w-xl rounded-md border border-[#27C8E6]/20 bg-[#050607]/70 p-3">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-100/82">
                  Sign up for offers & wellness tips
                </p>
                <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    placeholder="name@email.com"
                    readOnly
                    className="min-h-11 flex-1 rounded-md border border-[#27C8E6]/24 bg-black/45 px-4 text-sm font-medium text-slate-100 outline-none placeholder:text-slate-100/38"
                  />
                  <button
                    type="button"
                    disabled
                    className="min-h-11 cursor-not-allowed rounded-md bg-[#27C8E6] px-5 text-sm font-semibold uppercase tracking-[0.14em] text-[#050607] opacity-90"
                  >
                    Subscribe
                  </button>
                </div>
              </div>

              <div data-footer-reveal className="mt-5 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#27C8E6]/24 bg-[#050607]/70 px-3 py-2 text-sm font-semibold text-slate-100/82">
                  <FacebookIcon />
                  Facebook
                </span>
                <Link
                  href="https://www.instagram.com/masseusehealthco/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#27C8E6]/24 bg-[#050607]/70 px-3 py-2 text-sm font-semibold text-slate-100/82 transition hover:-translate-y-0.5 hover:border-[#27C8E6]/60 hover:bg-black/45 hover:text-white"
                >
                  <InstagramIcon />
                  Instagram
                </Link>
              </div>
            </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-4">
                {footerColumns.map((column) => (
                  <div
                    key={column.title}
                    className="border-b border-[#27C8E6]/18 p-4 last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0 sm:[&:nth-child(odd)]:border-r md:border-b-0 md:border-r md:last:border-r-0"
                  >
                    <h3 data-footer-title className="text-lg font-semibold tracking-[-0.04em]">
                      {column.title}
                    </h3>
                    <div data-footer-reveal className="mt-3 space-y-1.5">
                      {column.links.map((link) => (
                        <span
                          key={link}
                          className="block cursor-not-allowed select-none text-sm font-medium text-slate-100/56 transition hover:text-slate-100/78"
                          aria-disabled="true"
                        >
                          {link}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
          </div>

          <div data-footer-reveal className="grid gap-4 p-4 text-xs font-semibold uppercase tracking-[0.12em] text-slate-100/52 sm:p-5 lg:grid-cols-[1fr_auto] lg:items-center">
            <p>
              &copy; 2026 Masseuse Health Co. | ABN 63146395404 | Crafted with Intention // RSD
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <label className="inline-flex w-fit items-center gap-2 text-slate-100/72">
                <span>Language</span>
                <select
                  defaultValue="en-au"
                  className="bg-transparent text-sm font-semibold uppercase outline-none"
                  aria-label="Select language"
                >
                  <option value="en-au">🇦🇺 English</option>
                  <option value="zh">🇨🇳 Chinese</option>
                  <option value="ja">🇯🇵 Japanese</option>
                  <option value="ko">🇰🇷 Korean</option>
                </select>
              </label>
              <a
                href="tel:1300888669"
                className="inline-flex items-center rounded-full bg-[#27C8E6] px-4 py-2 text-sm font-semibold normal-case tracking-normal text-[#050607] transition hover:-translate-y-0.5 hover:bg-[#65ddf2]"
              >
                Call 1300 888 669
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
}
