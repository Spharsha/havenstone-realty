import type { Metadata } from "next";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer";
import PropertyExplorer from "../components/PropertyExplorer";

export const metadata: Metadata = {
  title: "Properties | Havenstone Realty (Demo)",
  description:
    "Search apartments, villas and penthouses in Mumbai by locality, budget and BHK. Sample listings.",
};

export default function PropertiesPage() {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-7xl px-5 py-12 sm:px-8 md:py-16">
        <p className="text-[11px] font-bold tracking-[0.3em] text-gold">
          PROPERTIES
        </p>
        <h1 className="mt-3 font-display text-5xl leading-[1.05] sm:text-6xl">
          Find your home
        </h1>
        <p className="mt-4 max-w-xl text-base leading-8 text-slate">
          Filter by locality, budget and size. Tap the heart to save homes you
          like. These are sample listings for this demo.
        </p>

        <div className="mt-10">
          <PropertyExplorer />
        </div>
      </main>

      <Footer />
    </>
  );
}
