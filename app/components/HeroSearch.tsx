"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { budgets, localities } from "../data";

const fieldClass =
  "w-full rounded-xl border border-line bg-white px-4 py-3.5 text-sm text-ink outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/25";

export default function HeroSearch() {
  const router = useRouter();
  const [locality, setLocality] = useState("");
  const [bhk, setBhk] = useState("Any");
  const [budget, setBudget] = useState("any");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const params = new URLSearchParams();
    if (locality) params.set("locality", locality);
    if (bhk !== "Any") params.set("bhk", bhk);
    if (budget !== "any") params.set("budget", budget);
    const query = params.toString();
    router.push(query ? `/properties?${query}` : "/properties");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 grid gap-3 rounded-2xl bg-white p-4 shadow-2xl sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto] lg:p-5"
    >
      <div>
        <label htmlFor="h-locality" className="sr-only">
          Locality
        </label>
        <select
          id="h-locality"
          value={locality}
          onChange={(e) => setLocality(e.target.value)}
          className={fieldClass}
        >
          <option value="">Any locality</option>
          {localities.map((l) => (
            <option key={l} value={l}>
              {l}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="h-bhk" className="sr-only">
          BHK
        </label>
        <select
          id="h-bhk"
          value={bhk}
          onChange={(e) => setBhk(e.target.value)}
          className={fieldClass}
        >
          <option value="Any">Any BHK</option>
          <option value="1">1 BHK</option>
          <option value="2">2 BHK</option>
          <option value="3">3 BHK</option>
          <option value="4+">4+ BHK</option>
        </select>
      </div>

      <div>
        <label htmlFor="h-budget" className="sr-only">
          Budget
        </label>
        <select
          id="h-budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className={fieldClass}
        >
          {budgets.map((b) => (
            <option key={b.value} value={b.value}>
              {b.label}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="rounded-xl bg-navy px-8 py-3.5 text-sm font-bold text-white transition hover:bg-navy-soft"
      >
        Search
      </button>
    </form>
  );
}
