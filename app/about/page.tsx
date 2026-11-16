import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer";
import SoftImage from "../components/SoftImage";
import { photo } from "../data";

export const metadata: Metadata = {
  title: "About | Havenstone Realty (Demo)",
  description:
    "About Havenstone Realty, a Mumbai real estate advisory. Demo website with sample content.",
};

const values = [
  {
    title: "Transparency",
    text: "Clear prices, clear paperwork and no hidden charges.",
  },
  {
    title: "Local knowledge",
    text: "We know Mumbai neighbourhoods, builders and the market.",
  },
  {
    title: "Long-term care",
    text: "Our help does not end at the sale. We stay in touch.",
  },
];

const team = [
  {
    initials: "RM",
    name: "Rohan Mehta",
    role: "Founder and Principal Advisor",
  },
  { initials: "PN", name: "Priya Nair", role: "Head of Residential Sales" },
  { initials: "KS", name: "Kabir Shah", role: "Legal and Loans Lead" },
];

export default function AboutPage() {
  return (
    <>
      <Header />

      <main>
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-12 sm:px-8 md:grid-cols-2 md:py-16">
          <div>
            <p className="text-[11px] font-bold tracking-[0.3em] text-gold">
              ABOUT HAVENSTONE
            </p>
            <h1 className="mt-3 font-display text-5xl leading-[1.05] sm:text-6xl">
              Real estate advice you can trust
            </h1>
            <p className="mt-6 text-base leading-8 text-slate">
              Havenstone Realty helps families and investors buy, sell and rent
              homes across Mumbai. We believe a property decision should be
              calm, informed and fair to everyone involved.
            </p>
            <p className="mt-4 text-base leading-8 text-slate">
              From the first site visit to registration and handover, one team
              stays with you.
            </p>
          </div>

          <div className="group">
            <SoftImage
              src="/images/realty/flat-1-optimized.webp"
              fallbackSrc={photo("photo-1600607687939-ce8a6c25118c", 1000)}
              alt="Bright modern apartment living room"
              width={1000}
              height={800}
              className="aspect-[5/4] w-full rounded-3xl"
            />
          </div>
        </section>

        <section className="bg-white px-5 py-16 sm:px-8 md:py-20">
          <div className="mx-auto max-w-7xl">
            <p className="text-[11px] font-bold tracking-[0.3em] text-gold">
              WHAT WE STAND FOR
            </p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">
              Our values
            </h2>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {values.map((value, index) => (
                <div key={value.title} className="border-t-2 border-gold pt-6">
                  <p className="font-display text-3xl text-gold">
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 font-display text-2xl">{value.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate">
                    {value.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20">
          <p className="text-[11px] font-bold tracking-[0.3em] text-gold">
            THE TEAM
          </p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">
            People behind Havenstone
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {team.map((person) => (
              <div
                key={person.name}
                className="rounded-2xl border border-line bg-white p-7"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-navy font-display text-xl text-gold-light">
                  {person.initials}
                </span>
                <h3 className="mt-5 font-display text-2xl">{person.name}</h3>
                <p className="mt-1 text-sm font-semibold text-gold">
                  {person.role}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-slate">
            Sample team profiles for portfolio presentation only.
          </p>
        </section>

        <section className="bg-navy px-5 py-14 text-center text-white sm:px-8">
          <h2 className="mx-auto max-w-2xl font-display text-4xl leading-tight sm:text-5xl">
            Let us talk about your next home
          </h2>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-gold px-9 py-4 text-sm font-bold text-navy transition hover:bg-gold-light"
          >
            Contact us
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}

