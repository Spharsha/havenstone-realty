"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "",
    );
    formData.append("subject", "New Property Enquiry - Havenstone Realty");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("Thank you! Your enquiry has been submitted successfully.");
        form.reset();
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("Unable to submit your enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-5 text-left">
      <input
        type="text"
        name="name"
        placeholder="Your Full Name"
        required
        className="w-full border border-[#203d32]/20 bg-white px-5 py-4 text-sm outline-none focus:border-[#496b54]"
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email Address"
        required
        className="w-full border border-[#203d32]/20 bg-white px-5 py-4 text-sm outline-none focus:border-[#496b54]"
      />

      <input
        type="tel"
        name="phone"
        placeholder="Your Phone Number"
        className="w-full border border-[#203d32]/20 bg-white px-5 py-4 text-sm outline-none focus:border-[#496b54]"
      />

      <select
        name="property_interest"
        defaultValue=""
        required
        className="w-full border border-[#203d32]/20 bg-white px-5 py-4 text-sm text-[#657267] outline-none focus:border-[#496b54]"
      >
        <option value="" disabled>
          Select Property Type
        </option>
        <option value="Luxury Villa">Luxury Villa</option>
        <option value="Premium Apartment">Premium Apartment</option>
        <option value="Residential Plot">Residential Plot</option>
        <option value="Other">Other</option>
      </select>

      <textarea
        name="message"
        placeholder="Tell us what you are looking for..."
        required
        rows={5}
        className="w-full resize-none border border-[#203d32]/20 bg-white px-5 py-4 text-sm outline-none focus:border-[#496b54]"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#244536] px-8 py-4 text-xs tracking-widest text-white transition hover:bg-[#496b54] disabled:opacity-60"
      >
        {loading ? "SENDING..." : "SUBMIT ENQUIRY"}
      </button>

      {status && (
        <p role="status" className="text-center text-sm text-[#496b54]">
          {status}
        </p>
      )}
    </form>
  );
}
