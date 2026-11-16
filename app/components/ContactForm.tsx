"use client";

import { useState, type FormEvent } from "react";
import { classify } from "../data";

const interests = [
  "Buy a property",
  "Sell a property",
  "Rent a property",
  "Home loan help",
  "Other",
];

export default function ContactForm({
  propertyName,
}: {
  propertyName?: string;
}) {
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("");
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const contact = String(formData.get("contact") || "");
    const kind = classify(contact);

    if (!kind) {
      setError(
        "Please enter a valid email address or a 10-digit mobile number.",
      );
      return;
    }

    setLoading(true);

    const payload: Record<string, unknown> = {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
      subject: propertyName
        ? `New Property Enquiry - ${propertyName} (Havenstone Demo)`
        : "New Enquiry - Havenstone Realty (Demo)",
      name: formData.get("name"),
      contact,
      interest: propertyName
        ? `Property: ${propertyName}`
        : formData.get("interest"),
      message: formData.get("message"),
    };
    if (kind === "email") payload.email = contact.trim();
    if (kind === "phone") payload.phone = contact.trim();

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (result.success) {
        setStatus(
          "Thank you! Your enquiry has been sent. Our team will contact you soon.",
        );
        form.reset();
      } else {
        setError(
          result.message || "Unable to send your enquiry. Please try again.",
        );
      }
    } catch {
      setError("Unable to send your enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const fieldClass =
    "w-full rounded-xl border border-line bg-white px-4 py-3.5 text-base text-ink outline-none transition placeholder:text-ink/40 focus:border-gold focus:ring-2 focus:ring-gold/25";
  const labelClass = "mb-2 block text-sm font-semibold";

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="e-name" className={labelClass}>
          Your Name
        </label>
        <input
          id="e-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Enter your name"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="e-contact" className={labelClass}>
          Email or Phone Number
        </label>
        <input
          id="e-contact"
          name="contact"
          type="text"
          required
          autoComplete="email"
          placeholder="Email address or 10-digit mobile number"
          className={fieldClass}
        />
      </div>

      {!propertyName && (
        <div>
          <label htmlFor="e-interest" className={labelClass}>
            I am interested in
          </label>
          <select
            id="e-interest"
            name="interest"
            required
            defaultValue=""
            className={fieldClass}
          >
            <option value="" disabled>
              Select an option
            </option>
            {interests.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      )}

      <div>
        <label htmlFor="e-message" className={labelClass}>
          Your Message
        </label>
        <textarea
          id="e-message"
          name="message"
          required
          rows={4}
          defaultValue={
            propertyName
              ? `I would like to know more about ${propertyName}.`
              : ""
          }
          placeholder="Tell us what you are looking for"
          className={`${fieldClass} resize-y`}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-navy px-8 py-4 text-sm font-bold text-white transition hover:bg-navy-soft disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send Enquiry"}
      </button>

      {error && (
        <p role="alert" className="text-sm font-semibold text-red-700">
          {error}
        </p>
      )}
      {status && (
        <p role="status" className="text-sm font-semibold text-navy-soft">
          {status}
        </p>
      )}
    </form>
  );
}
