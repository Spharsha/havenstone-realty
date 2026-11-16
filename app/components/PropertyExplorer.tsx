"use client";

import { useEffect, useMemo, useState } from "react";
import PropertyCard from "./PropertyCard";
import { useSaved } from "./useSaved";
import { budgets, localities, properties } from "../data";

const fieldClass =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/25";

const bhkOptions = ["Any", "1", "2", "3", "4+"];

export default function PropertyExplorer() {
  const { ids } = useSaved();
  const [q, setQ] = useState("");
  const [locality, setLocality] = useState("All");
  const [type, setType] = useState("All");
  const [bhk, setBhk] = useState("Any");
  const [budget, setBudget] = useState("any");
  const [sort, setSort] = useState("featured");
  const [savedOnly, setSavedOnly] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const pq = params.get("q");
    const pl = params.get("locality");
    const pb = params.get("bhk");
    const pbud = params.get("budget");
    if (pq) setQ(pq);
    if (pl && localities.includes(pl)) setLocality(pl);
    if (pb && bhkOptions.includes(pb)) setBhk(pb);
    if (pbud && budgets.some((b) => b.value === pbud)) setBudget(pbud);
    if (params.get("saved") === "1") setSavedOnly(true);
  }, []);

  const results = useMemo(() => {
    const range = budgets.find((b) => b.value === budget) ?? budgets[0];
    const term = q.trim().toLowerCase();

    const filtered = properties.filter((p) => {
      if (
        term &&
        !`${p.name} ${p.locality} ${p.type}`.toLowerCase().includes(term)
      )
        return false;
      if (locality !== "All" && p.locality !== locality) return false;
      if (type !== "All" && p.type !== type) return false;
      if (bhk !== "Any") {
        if (bhk === "4+" ? p.bhk < 4 : p.bhk !== Number(bhk)) return false;
      }
      if (p.priceLakh < range.min || p.priceLakh >= range.max) return false;
      if (savedOnly && !ids.includes(p.id)) return false;
      return true;
    });

    if (sort === "low")
      return [...filtered].sort((a, b) => a.priceLakh - b.priceLakh);
    if (sort === "high")
      return [...filtered].sort((a, b) => b.priceLakh - a.priceLakh);
    return filtered;
  }, [q, locality, type, bhk, budget, sort, savedOnly, ids]);

  function reset() {
    setQ("");
    setLocality("All");
    setType("All");
    setBhk("Any");
    setBudget("any");
    setSort("featured");
    setSavedOnly(false);
  }

  return (
    <>
      <div className="rounded-2xl border border-line bg-white p-5 shadow-sm sm:p-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-4">
            <label
              htmlFor="q"
              className="mb-2 block text-xs font-bold tracking-[0.15em] text-slate"
            >
              SEARCH
            </label>
            <input
              id="q"
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search by project or area, for example Powai"
              className={fieldClass}
            />
          </div>

          <div>
            <label
              htmlFor="locality"
              className="mb-2 block text-xs font-bold tracking-[0.15em] text-slate"
            >
              LOCALITY
            </label>
            <select
              id="locality"
              value={locality}
              onChange={(e) => setLocality(e.target.value)}
              className={fieldClass}
            >
              <option value="All">All localities</option>
              {localities.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="type"
              className="mb-2 block text-xs font-bold tracking-[0.15em] text-slate"
            >
              PROPERTY TYPE
            </label>
            <select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className={fieldClass}
            >
              <option value="All">All types</option>
              <option value="Apartment">Apartment</option>
              <option value="Villa">Villa</option>
              <option value="Penthouse">Penthouse</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="budget"
              className="mb-2 block text-xs font-bold tracking-[0.15em] text-slate"
            >
              BUDGET
            </label>
            <select
              id="budget"
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

          <div>
            <label
              htmlFor="sort"
              className="mb-2 block text-xs font-bold tracking-[0.15em] text-slate"
            >
              SORT BY
            </label>
            <select
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className={fieldClass}
            >
              <option value="featured">Featured</option>
              <option value="low">Price: low to high</option>
              <option value="high">Price: high to low</option>
            </select>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <span className="text-xs font-bold tracking-[0.15em] text-slate">
            BHK
          </span>
          {bhkOptions.map((option) => (
            <button
              key={option}
              type="button"
              aria-pressed={bhk === option}
              onClick={() => setBhk(option)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                bhk === option
                  ? "border-navy bg-navy text-white"
                  : "border-line hover:border-navy"
              }`}
            >
              {option}
            </button>
          ))}

          <label className="ml-auto flex cursor-pointer items-center gap-2 text-sm font-semibold">
            <input
              type="checkbox"
              checked={savedOnly}
              onChange={(e) => setSavedOnly(e.target.checked)}
              className="h-4 w-4 accent-gold"
            />
            Saved only ({ids.length})
          </label>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <p className="text-sm text-slate" aria-live="polite">
          {results.length} {results.length === 1 ? "property" : "properties"}{" "}
          found
        </p>
        <button
          type="button"
          onClick={reset}
          className="text-sm font-bold text-navy-soft underline underline-offset-4"
        >
          Reset filters
        </button>
      </div>

      {results.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-dashed border-line bg-white p-12 text-center">
          <p className="font-display text-2xl">
            No properties match your filters
          </p>
          <p className="mt-2 text-sm text-slate">
            Try a different budget, locality or BHK.
          </p>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      )}
    </>
  );
}
