import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer";
import { services, steps } from "../data";

export const metadata: Metadata = {
  title: "Services | Havenstone Realty (Demo)",
  description:
    "Buying, selling, renting, valuation, home loan help and legal support. Demo website with sample content.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main>
        <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 md:py-16">
          <p className="text-[11px] font-bold tracking-[0.3em] text-gold">
            OUR SERVICES
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-5xl leading-[1.05] sm:text-6xl">
            Support at every step of your property journey
          </h1>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="rounded-2xl border border-line bg-white p-7"
              >
                <p className="font-display text-3xl text-gold">0{index + 1}</p>
                <h2 className="mt-4 font-display text-2xl">{service.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate">
                  {service.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-navy px-5 py-16 text-white sm:px-8 md:py-20">
          <div className="mx-auto max-w-7xl">
            <p className="text-[11px] font-bold tracking-[0.3em] text-gold-light">
              HOW WE WORK
            </p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">
              A clear, simple process
            </h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="border-t border-white/25 pt-6"
                >
                  <p className="font-display text-4xl text-gold-light">
                    {step.number}
                  </p>
                  <h3 className="mt-4 font-display text-xl">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/65">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-16 text-center sm:px-8">
          <h2 className="font-display text-4xl sm:text-5xl">
            Let us help you get started
          </h2>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-navy px-9 py-4 text-sm font-bold text-white transition hover:bg-navy-soft"
          >
            Contact us
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}
