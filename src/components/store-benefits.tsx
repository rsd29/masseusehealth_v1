"use client";

import { useEffect, useRef, useState } from "react";

import { typography } from "@/lib/design-system";

const heroBenefits = [
  {
    title: "Free shipping",
    detail: "Nationwide",
    icon: "truck",
  },
  {
    title: "Rapid delivery",
    detail: "2 - 5 business days",
    icon: "bolt",
  },
  {
    title: "Easy returns",
    detail: "30 day return policy.",
    icon: "return",
  },
] as const;

function BenefitIcon({ icon }: { icon: (typeof heroBenefits)[number]["icon"] }) {
  const commonClassName = "h-8 w-8";

  if (icon === "truck") {
    return (
      <svg
        className={commonClassName}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3 7h11v9H3z" />
        <path d="M14 10h4l3 3v3h-7z" />
        <path d="M7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
        <path d="M18 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      </svg>
    );
  }

  if (icon === "bolt") {
    return (
      <svg
        className={commonClassName}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="m13 2-8 12h7l-1 8 8-12h-7z" />
      </svg>
    );
  }

  return (
    <svg
      className={commonClassName}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 14 5 10l4-4" />
      <path d="M5 10h10a5 5 0 1 1 0 10h-4" />
    </svg>
  );
}

export function StoreBenefits() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.25 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} aria-label="Store benefits" className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        {heroBenefits.map((benefit, index) => (
          <div
            key={benefit.title}
            className={`group flex items-center gap-5 rounded-[2rem] px-2 py-3 transition duration-500 ease-out hover:-translate-y-1 hover:bg-slate-50 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: `${index * 90}ms` }}
          >
            <span className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-slate-950 text-white transition duration-300 group-hover:scale-110 group-hover:shadow-[0_14px_30px_rgba(15,23,42,0.22)]">
              <BenefitIcon icon={benefit.icon} />
            </span>
            <div>
              <p
                className={`${typography.benefitTitle} text-slate-950 transition group-hover:text-slate-700`}
              >
                {benefit.title}
              </p>
              <p
                className={`mt-2 ${typography.benefitDetail} text-slate-500 transition group-hover:text-slate-700`}
              >
                {benefit.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
