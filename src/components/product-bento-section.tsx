import Image from "next/image";
import Link from "next/link";

import { typography } from "@/lib/design-system";

const bentoProducts = [
  {
    name: "Everglow Infrared",
    category: "Sauna",
    href: "/products/everglow-infrared",
    summary: "Full-spectrum infrared heat for deep recovery rituals at home.",
    imageSrc: "/images/MHCSauna-40.jpg",
    className: "lg:col-span-5 lg:row-span-4",
  },
  {
    name: "ThermaPod",
    category: "Portable sauna",
    href: "/products/thermapod",
    summary: "Compact heat therapy designed for flexible everyday use.",
    imageSrc: "/images/productimages/thermal_pod.webp",
    className: "lg:col-span-4 lg:row-span-3",
  },
  {
    name: "Niseko",
    category: "Ice bath",
    href: "/products/niseko",
    summary: "Cold immersion for serious recovery and performance routines.",
    imageSrc: "/images/productimages/niseko.png",
    className: "lg:col-span-3 lg:row-span-3",
  },
  {
    name: "Plunge",
    category: "Compact ice bath",
    href: "/products/plunge",
    summary: "A smaller-footprint plunge built for quick daily resets.",
    imageSrc: "/images/productimages/plunge.webp",
    className: "lg:col-span-3 lg:row-span-3",
  },
  {
    name: "Aspen",
    category: "Premium ice bath",
    href: "/products/aspen",
    summary: "A refined cold therapy setup with a luxury home presence.",
    imageSrc: "/images/productimages/aspen.jpg",
    className: "lg:col-span-4 lg:row-span-3",
  },
  {
    name: "Recovery Bundle",
    category: "Bundle",
    href: "/products/recovery-bundle",
    summary: "Pair heat and cold therapy for a complete recovery routine.",
    imageSrc: "/images/productimages/thermal_pod.webp",
    className: "lg:col-span-5 lg:row-span-2",
  },
] as const;

export function ProductBentoSection() {
  return (
    <section aria-labelledby="product-bento-heading" className="bg-white">
      <h2 id="product-bento-heading" className="sr-only">
        Product collections
      </h2>
      <div className="grid gap-4 px-4 pb-16 sm:px-6 lg:h-[calc(100svh-76px)] lg:min-h-[760px] lg:grid-cols-12 lg:grid-rows-6 lg:px-8">
        {bentoProducts.map((product) => (
          <Link
            key={product.name}
            href={product.href}
            className={`group relative min-h-80 overflow-hidden rounded-[1.25rem] bg-slate-950 shadow-sm outline-none transition duration-500 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(15,23,42,0.22)] focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-4 sm:min-h-96 lg:min-h-0 ${product.className}`}
          >
            <Image
              src={product.imageSrc}
              alt={`${product.name} product image`}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/5 transition duration-500 group-hover:from-black/82 group-hover:via-black/35" />
            <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6 lg:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
                {product.category}
              </p>
              <h3 className={`mt-3 ${typography.heroHeading}`}>{product.name}</h3>
              <div className="grid grid-rows-[0fr] transition-all duration-500 group-hover:grid-rows-[1fr] group-focus-visible:grid-rows-[1fr]">
                <div className="overflow-hidden">
                  <p className="mt-4 max-w-md text-sm leading-6 text-white/78">
                    {product.summary}
                  </p>
                  <span className="mt-5 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950">
                    View product
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
