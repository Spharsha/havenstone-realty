import Link from "next/link";

const socialClass =
  "flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-sm font-bold text-white/75 transition hover:border-gold-light hover:text-gold-light";

export default function Footer() {
  return (
    <footer className="bg-navy px-5 py-14 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/15 pb-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-display text-3xl tracking-wide">
              HAVENSTONE<span className="text-gold">.</span>
            </p>
            <p className="mt-1 text-[10px] font-bold tracking-[0.3em] text-gold-light">
              REALTY · MUMBAI
            </p>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/65">
              Homes, villas and penthouses across Mumbai, with honest advice
              from first visit to registration.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold tracking-[0.2em] text-gold-light">
              EXPLORE
            </h3>
            <div className="flex flex-col gap-3 text-sm text-white/70">
              <Link href="/properties" className="transition hover:text-white">
                Properties
              </Link>
              <Link
                href="/emi-calculator"
                className="transition hover:text-white"
              >
                EMI Calculator
              </Link>
              <Link href="/services" className="transition hover:text-white">
                Services
              </Link>
              <Link href="/about" className="transition hover:text-white">
                About
              </Link>
              <Link href="/contact" className="transition hover:text-white">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold tracking-[0.2em] text-gold-light">
              FOLLOW
            </h3>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className={socialClass}>
                f
              </a>
              <a href="#" aria-label="Instagram" className={socialClass}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className={socialClass}>
                in
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-3 pt-8 text-xs text-white/50 md:flex-row">
          <p>© 2026 Havenstone Realty. All rights reserved.</p>
          <p className="text-gold-light">Demo website · Sample content</p>
        </div>
        <p className="mt-4 max-w-3xl text-[11px] leading-5 text-white/35">
          Property names, prices and details on this website are illustrative
          demo content and not real listings.
        </p>
      </div>
    </footer>
  );
}
