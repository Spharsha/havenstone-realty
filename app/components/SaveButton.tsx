"use client";

import { useSaved } from "./useSaved";

export default function SaveButton({ id }: { id: string }) {
  const { ids, toggle } = useSaved();
  const saved = ids.includes(id);

  return (
    <button
      type="button"
      aria-pressed={saved}
      onClick={() => toggle(id)}
      className={`flex items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold transition ${
        saved
          ? "border-gold bg-gold text-navy"
          : "border-navy text-navy hover:bg-navy hover:text-white"
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill={saved ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21.2l7.8-7.7 1-1.1a5.5 5.5 0 0 0 0-7.8z" />
      </svg>
      {saved ? "Saved" : "Save property"}
    </button>
  );
}
