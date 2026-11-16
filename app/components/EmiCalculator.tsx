"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { inr, monthlyEmi } from "../data";

export default function EmiCalculator() {
  const [price, setPrice] = useState(150);
  const [down, setDown] = useState(20);
  const [rate, setRate] = useState(8.5);
  const [years, setYears] = useState(20);

  useEffect(() => {
    const wanted = Number(
      new URLSearchParams(window.location.search).get("price"),
    );
    if (wanted >= 10 && wanted <= 5000) setPrice(wanted);
  }, []);

  const safePrice = Number.isFinite(price) && price > 0 ? price : 0;
  const loan = safePrice * 100000 * (1 - down / 100);
  const emi = loan > 0 ? monthlyEmi(loan, rate, years) : 0;
  const total = emi * years * 12;
  const interest = Math.max(total - loan, 0);
  const principalShare = total > 0 ? Math.round((loan / total) * 100) : 100;

  const label = "mb-2 flex items-center justify-between text-sm font-semibold";
  const value = "font-display text-lg text-navy-soft";
  const range = "h-2 w-full cursor-pointer accent-gold";

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-8 rounded-2xl border border-line bg-white p-6 sm:p-8">
        <div>
          <label htmlFor="emi-price" className={label}>
            Property price (₹ lakh)
          </label>
          <input
            id="emi-price"
            type="number"
            min={10}
            max={5000}
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full rounded-xl border border-line px-4 py-3 text-base outline-none focus:border-gold focus:ring-2 focus:ring-gold/25"
          />
          <p className="mt-2 text-xs text-slate">100 lakh = 1 crore</p>
        </div>

        <div>
          <label htmlFor="emi-down" className={label}>
            Down payment <span className={value}>{down}%</span>
          </label>
          <input
            id="emi-down"
            type="range"
            min={5}
            max={80}
            step={5}
            value={down}
            onChange={(e) => setDown(Number(e.target.value))}
            className={range}
          />
        </div>

        <div>
          <label htmlFor="emi-rate" className={label}>
            Interest rate{" "}
            <span className={value}>{rate.toFixed(1)}% per year</span>
          </label>
          <input
            id="emi-rate"
            type="range"
            min={6}
            max={12}
            step={0.1}
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className={range}
          />
        </div>

        <div>
          <label htmlFor="emi-years" className={label}>
            Loan period <span className={value}>{years} years</span>
          </label>
          <input
            id="emi-years"
            type="range"
            min={5}
            max={30}
            step={1}
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className={range}
          />
        </div>
      </div>

      <div className="flex flex-col justify-between rounded-2xl bg-navy p-6 text-white sm:p-8">
        <div>
          <p className="text-xs font-bold tracking-[0.25em] text-gold-light">
            YOUR MONTHLY EMI
          </p>
          <p
            className="mt-3 font-display text-5xl sm:text-6xl"
            aria-live="polite"
          >
            ₹{inr(emi)}
          </p>

          <div className="mt-8 h-3 w-full overflow-hidden rounded-full bg-white/15">
            <div
              className="h-full bg-gold"
              style={{ width: `${principalShare}%` }}
              aria-hidden="true"
            />
          </div>
          <div className="mt-3 flex justify-between text-xs text-white/70">
            <span>Principal {principalShare}%</span>
            <span>Interest {100 - principalShare}%</span>
          </div>

          <dl className="mt-8 space-y-4 text-sm">
            <div className="flex justify-between border-b border-white/15 pb-3">
              <dt className="text-white/70">Loan amount</dt>
              <dd className="font-semibold">₹{inr(loan)}</dd>
            </div>
            <div className="flex justify-between border-b border-white/15 pb-3">
              <dt className="text-white/70">Total interest</dt>
              <dd className="font-semibold">₹{inr(interest)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-white/70">Total payment</dt>
              <dd className="font-semibold">₹{inr(total)}</dd>
            </div>
          </dl>
        </div>

        <div className="mt-8">
          <Link
            href="/contact"
            className="block rounded-full bg-gold px-6 py-3.5 text-center text-sm font-bold text-navy transition hover:bg-gold-light"
          >
            Talk to a loan expert
          </Link>
          <p className="mt-3 text-xs leading-5 text-white/50">
            This is a sample estimate. Actual EMI depends on your bank and
            profile.
          </p>
        </div>
      </div>
    </div>
  );
}
