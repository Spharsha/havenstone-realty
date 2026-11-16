import type { Metadata } from "next";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer";
import EmiCalculator from "../components/EmiCalculator";

export const metadata: Metadata = {
  title: "EMI Calculator | Havenstone Realty (Demo)",
  description:
    "Estimate your monthly home loan EMI. Change the down payment, interest rate and loan period.",
};

export default function EmiPage() {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-7xl px-5 py-12 sm:px-8 md:py-16">
        <p className="text-[11px] font-bold tracking-[0.3em] text-gold">
          HOME LOAN TOOL
        </p>
        <h1 className="mt-3 font-display text-5xl leading-[1.05] sm:text-6xl">
          EMI Calculator
        </h1>
        <p className="mt-4 max-w-xl text-base leading-8 text-slate">
          Slide the options to see how your monthly payment changes.
        </p>

        <div className="mt-10">
          <EmiCalculator />
        </div>
      </main>

      <Footer />
    </>
  );
}
