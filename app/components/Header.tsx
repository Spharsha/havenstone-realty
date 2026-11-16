"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { useSaved } from "./useSaved";

const links = [
  { label: "Home", href: "/" },
  { label: "Properties", href: "/properties" },
  { label: "EMI Calculator", href: "/emi-calculator" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function SearchBox({ className = "" }: { className?: string }) {
  const router = useRouter();
  const [q, setQ] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const term = q.trim();
    router.push(
      term ? `/properties?q=${encodeURIComponent(term)}` : "/properties",
    );
  }

  return (
    <form onSubmit={handleSubmit} role="search" className={`flex ${className}`}>
      <label htmlFor="site-search" className="sr-only">
        Search properties
      </label>
      <input
        id="site-search"
        type="search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search by project or area"
        className="min-w-0 flex-1 rounded-l-xl border border-r-0 border-line bg-white px-4 py-3 text-sm outline-none focus:border-gold"
      />
      <button
        type="submit"
        aria-label="Search"
        className="rounded-r-xl bg-navy px-5 text-white transition hover:bg-navy-soft"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="M20 20l-3.5-3.5" />
        </svg>
      </button>
    </form>
  );
}

export default function Header() {
  const pathname = usePathname();
  const { ids } = useSaved();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-ivory/95 backdrop-blur">
      <div className="border-b border-line">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-5 py-3.5 sm:px-8">
          <Link
            href="/"
            className="shrink-0 leading-tight"
            onClick={() => setOpen(false)}
          >
            <span className="font-display text-2xl tracking-wide">
              HAVENSTONE<span className="text-gold">.</span>
            </span>
            <span className="block text-[9px] font-bold tracking-[0.3em] text-slate">
              REALTY · MUMBAI
            </span>
          </Link>

          <SearchBox className="ml-4 hidden max-w-md flex-1 md:flex" />

          <div className="ml-auto flex items-center gap-3">
            <Link
              href="/properties?saved=1"
              aria-label={`Saved properties, ${ids.length}`}
              className="flex items-center gap-2 rounded-full border border-line px-4 py-2.5 text-sm font-semibold transition hover:border-gold"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-gold"
                aria-hidden="true"
              >
                <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21.2l7.8-7.7 1-1.1a5.5 5.5 0 0 0 0-7.8z" />
              </svg>
              <span>{ids.length}</span>
            </Link>

            <Link
              href="/contact"
              className="hidden rounded-full bg-gold px-6 py-2.5 text-sm font-bold text-navy transition hover:bg-gold-light lg:block"
            >
              Enquire Now
            </Link>

            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-line lg:hidden"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="h-5 w-5"
                aria-hidden="true"
              >
                {open ? (
                  <path d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div className="px-5 pb-3 md:hidden">
          <SearchBox />
        </div>
      </div>

      {/* Desktop nav bar */}
      <nav aria-label="Main" className="hidden bg-navy lg:block">
        <div className="mx-auto flex max-w-7xl gap-8 px-8">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`border-b-2 py-3.5 text-sm font-semibold transition ${
                  active
                    ? "border-gold text-gold-light"
                    : "border-transparent text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <nav
          aria-label="Mobile"
          className="border-b border-line bg-navy px-5 py-3 lg:hidden"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block border-b border-white/10 py-3.5 text-base last:border-0 ${
                pathname === link.href ? "text-gold-light" : "text-white/85"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
