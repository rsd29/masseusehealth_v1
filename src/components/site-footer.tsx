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
  const footerPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const footer = footerRef.current;
    const footerPanel = footerPanelRef.current;

    if (!footer || !footerPanel) {
      return;
    }

    const context = gsap.context(() => {
      const titleElements = gsap.utils.toArray<HTMLElement>("[data-footer-title]");

      gsap.set(titleElements, {
        opacity: 0,
        y: 26,
        willChange: "opacity, transform",
      });
      gsap.set(footerPanel, {
        borderRadius: 48,
        clipPath: "inset(4vw 4vw 0vw 4vw round 48px)",
        willChange: "clip-path, border-radius",
      });

      gsap.to(footerPanel, {
        borderRadius: 0,
        clipPath: "inset(0vw 0vw 0vw 0vw round 0px)",
        ease: "none",
        scrollTrigger: {
          trigger: footer,
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      const titleTimeline = gsap.timeline({ paused: true });

      titleTimeline.to(titleElements, {
        opacity: 1,
        y: 0,
        duration: 0.95,
        ease: "power3.out",
        stagger: 0.1,
      });

      ScrollTrigger.create({
        trigger: footer,
        start: "top 78%",
        onEnter: () => titleTimeline.play(),
        onLeaveBack: () => titleTimeline.reverse(),
      });
    }, footer);

    return () => {
      context.revert();
    };
  }, []);

  return (
    <footer ref={footerRef} className="overflow-hidden bg-white text-white">
      <div
        ref={footerPanelRef}
        className="overflow-hidden bg-[#1b1511]"
      >
        <div className="px-4 pb-6 pt-10 sm:px-6 sm:pt-12 lg:px-8 lg:pt-16">
          <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#251f1a]">
            <div className="grid border-b border-white/10 lg:grid-cols-[0.95fr_1.35fr]">
              <div className="border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
                <Image
                  src="/assets/masseuse-health-logo-mark.png"
                  alt="Masseuse Health Co."
                  width={112}
                  height={112}
                  className="h-20 w-20 object-contain brightness-0 invert sm:h-24 sm:w-24"
                />
                <p data-footer-title className="mt-10 text-sm font-semibold uppercase tracking-[0.28em] text-white/56">
                  Everyday recovery, reimagined.
                </p>
                <h2 data-footer-title className="mt-4 max-w-2xl text-4xl font-semibold leading-[0.92] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
                  Science-backed wellness tools for modern living.
                </h2>

              <div className="mt-10 max-w-xl rounded-[1.25rem] border border-white/10 bg-[#1b1511]/70 p-4">
                <p className="text-base font-semibold uppercase tracking-[0.18em] text-white/78">
                  Sign up for offers & wellness tips
                </p>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    placeholder="name@email.com"
                    readOnly
                    className="min-h-12 flex-1 rounded-full border border-white/15 bg-black/20 px-4 text-base font-medium text-white outline-none placeholder:text-white/38"
                  />
                  <button
                    type="button"
                    disabled
                    className="min-h-12 cursor-not-allowed rounded-full bg-white px-5 text-base font-semibold uppercase tracking-[0.14em] text-black opacity-90"
                  >
                    Subscribe
                  </button>
                </div>
              </div>

              <a
                href="tel:1300888669"
                className="mt-6 inline-flex items-center rounded-full bg-white px-5 py-3 text-lg font-semibold text-black transition hover:-translate-y-0.5 hover:bg-white/90"
              >
                Call 1300 888 669
              </a>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-[#1b1511]/70 px-4 py-2 text-base font-semibold text-white/82">
                  <FacebookIcon />
                  Facebook
                </span>
                <Link
                  href="https://www.instagram.com/masseusehealthco/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-[#1b1511]/70 px-4 py-2 text-base font-semibold text-white/82 transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-black/20 hover:text-white"
                >
                  <InstagramIcon />
                  Instagram
                </Link>
              </div>
            </div>

              <div className="grid sm:grid-cols-2 xl:grid-cols-4">
                {footerColumns.map((column) => (
                  <div
                    key={column.title}
                    className="border-b border-white/10 p-6 last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0 sm:[&:nth-child(odd)]:border-r xl:border-b-0 xl:border-r xl:last:border-r-0"
                  >
                    <h3 data-footer-title className="text-xl font-semibold tracking-[-0.04em]">
                      {column.title}
                    </h3>
                    <div className="mt-6 space-y-3">
                      {column.links.map((link) => (
                        <span
                          key={link}
                          className="block cursor-not-allowed select-none text-base font-medium text-white/56 transition hover:text-white/78"
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

          <div className="grid gap-4 p-6 text-sm font-semibold uppercase tracking-[0.12em] text-white/52 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <p>
              &copy; 2026 Masseuse Health Co. | ABN 63146395404 | Site by RSD
            </p>
            <label className="inline-flex w-fit items-center gap-3 rounded-full border border-white/12 bg-[#1b1511]/70 px-3 py-2 text-white/72">
              <span>Language</span>
              <select
                defaultValue="en-au"
                className="bg-black text-sm font-semibold uppercase outline-none"
                aria-label="Select language"
              >
                <option value="en-au">English</option>
                <option value="zh">Chinese</option>
                <option value="ja">Japanese</option>
                <option value="ko">Korean</option>
              </select>
            </label>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
}
