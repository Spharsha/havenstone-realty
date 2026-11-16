"use client";

import Link from "next/link";
import SoftImage from "./SoftImage";
import { useSaved } from "./useSaved";
import { formatPrice, photo, type Property } from "../data";

export default function PropertyCard({ property }: { property: Property }) {
  const { ids, toggle } = useSaved();
  const saved = ids.includes(property.id);

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-line bg-white transition hover:-translate-y-1 hover:shadow-xl">
      <Link href={`/properties/${property.id}`} scroll={true} className="block">
        <SoftImage
          src={`/images/realty/${property.image}-optimized.webp`}
          fallbackSrc={photo(property.fallback, 800)}
          alt={`${property.name}, ${property.locality}`}
          width={800}
          height={600}
          className="aspect-[4/3] w-full"
        />

        <div className="p-6">
          <p className="text-[11px] font-bold tracking-[0.2em] text-gold">
            {property.type.toUpperCase()} Â· {property.status.toUpperCase()}
          </p>
          <h3 className="mt-2 font-display text-2xl">{property.name}</h3>
          <p className="mt-1 text-sm text-slate">{property.locality}, Mumbai</p>

          <div className="mt-4 flex gap-4 text-sm text-slate">
            <span>{property.bhk} BHK</span>
            <span>{property.area} sq ft</span>
          </div>

          <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
            <p className="font-display text-2xl">
              {formatPrice(property.priceLakh)}
            </p>
            <span className="text-sm font-bold text-navy-soft">
              View details â†’
            </span>
          </div>
        </div>
      </Link>

      <button
        type="button"
        aria-label={saved ? "Remove from saved" : "Save property"}
        aria-pressed={saved}
        onClick={() => toggle(property.id)}
        className={`absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full shadow transition ${
          saved ? "bg-gold text-navy" : "bg-white/90 text-navy hover:bg-white"
        }`}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill={saved ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21.2l7.8-7.7 1-1.1a5.5 5.5 0 0 0 0-7.8z" />
        </svg>
      </button>
    </article>
  );
}

