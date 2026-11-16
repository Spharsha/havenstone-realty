import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SoftImage from "./components/SoftImage";
import HeroSearch from "./components/HeroSearch";
import PropertyCard from "./components/PropertyCard";
import { localities, photo, properties, services } from "./data";

const featured = [properties[1], properties[3], properties[0]];

const reasons = [
  {
    title: "Verified homes",
    text: "Every listing is checked for documents, approvals and a clear title before we show it.",
  },
  {
    title: "Honest advice",
    text: "We tell you what fits your budget and what does not, so you never overpay.",
  },
  {
    title: "End-to-end help",
    text: "Loans, legal checks and registration are handled with you, step by step.",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="relative">
          <div className="absolute inset-0">
            <SoftImage
              src="/images/realty/hero-optimized.webp"
              fallbackSrc={photo("photo-1600585154526-990dced4db0d", 1800)}
              alt="Luxury home exterior at dusk"
              width={1800}
              height={1000}
              priority
              className="h-full w-full"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-r from-navy/90 via-navy/65 to-navy/20"
          />

          <div className="relative mx-auto max-w-7xl px-5 py-20 text-white sm:px-8 md:py-28">
            <p className="text-[11px] font-bold tracking-[0.35em] text-gold-light">
              MUMBAI Â· APARTMENTS Â· VILLAS Â· PENTHOUSES
            </p>
            <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              Find a home that fits your life.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/80">
              Search verified homes across Mumbai, plan your EMI and get honest
              advice from people who care.
            </p>

            <div className="max-w-4xl">
              <HeroSearch />
            </div>
          </div>
        </section>

        {/* Why us */}
        <section className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 md:grid-cols-3 md:py-20">
          {reasons.map((reason, index) => (
            <div key={reason.title} className="border-t-2 border-gold pt-6">
              <p className="font-display text-3xl text-gold">0{index + 1}</p>
              <h2 className="mt-3 font-display text-2xl">{reason.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate">{reason.text}</p>
            </div>
          ))}
        </section>

        {/* Featured */}
        <section className="bg-white px-5 py-16 sm:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-[11px] font-bold tracking-[0.3em] text-gold">
                  FEATURED PROPERTIES
                </p>
                <h2 className="mt-3 font-display text-4xl sm:text-5xl">
                  Handpicked for you
                </h2>
              </div>
              <Link
                href="/properties"
                className="text-sm font-bold text-navy-soft underline underline-offset-4"
              >
                View all properties â†’
              </Link>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {featured.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
            <p className="mt-6 text-xs text-slate">
              Sample listings for this demo.
            </p>
          </div>
        </section>

        {/* Localities */}
        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20">
          <p className="text-[11px] font-bold tracking-[0.3em] text-gold">
            POPULAR LOCALITIES
          </p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">
            Explore by area
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {localities.map((locality) => (
              <Link
                key={locality}
                href={`/properties?locality=${encodeURIComponent(locality)}`}
                className="rounded-full border border-line bg-white px-6 py-3 text-sm font-semibold transition hover:border-gold hover:bg-gold/10"
              >
                {locality}
              </Link>
            ))}
          </div>
        </section>

        {/* EMI teaser */}
        <section className="px-5 sm:px-8">
          <div className="mx-auto grid max-w-7xl items-center gap-6 rounded-3xl bg-navy p-8 text-white sm:p-12 md:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="text-[11px] font-bold tracking-[0.3em] text-gold-light">
                PLAN YOUR FINANCES
              </p>
              <h2 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">
                Know your EMI before you fall in love with a home
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-7 text-white/70">
                Try different down payments, interest rates and loan periods to
                see what suits your budget.
              </p>
            </div>
            <div className="md:text-right">
              <Link
                href="/emi-calculator"
                className="inline-block rounded-full bg-gold px-8 py-4 text-sm font-bold text-navy transition hover:bg-gold-light"
              >
                Open EMI Calculator
              </Link>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24">
          <p className="text-[11px] font-bold tracking-[0.3em] text-gold">
            OUR SERVICES
          </p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">
            Everything around your property
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-line bg-white p-7"
              >
                <h3 className="font-display text-2xl">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
          <Link
            href="/services"
            className="mt-8 inline-block text-sm font-bold text-navy-soft underline underline-offset-4"
          >
            See all services â†’
          </Link>
        </section>

        {/* CTA */}
        <section className="bg-gold px-5 py-14 text-center text-navy sm:px-8">
          <h2 className="mx-auto max-w-2xl font-display text-4xl leading-tight sm:text-5xl">
            Ready to find your place in Mumbai?
          </h2>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-navy px-9 py-4 text-sm font-bold text-white transition hover:bg-navy-soft"
          >
            Talk to our team
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}

