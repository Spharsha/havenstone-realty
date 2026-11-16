import type { Metadata } from "next";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Havenstone Realty (Demo)",
  description:
    "Contact Havenstone Realty to buy, sell or rent a property in Mumbai. Demo website with sample content.",
};

const details = [
  {
    label: "OFFICE",
    lines: ["Sample Office, Bandra Kurla Complex", "Mumbai, Maharashtra"],
  },
  { label: "HOURS", lines: ["Monday – Saturday", "10:00 AM – 7:00 PM"] },
  { label: "REPLY TIME", lines: ["Within one working day"] },
];

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-7xl px-5 py-12 sm:px-8 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-[11px] font-bold tracking-[0.3em] text-gold">
              GET IN TOUCH
            </p>
            <h1 className="mt-3 font-display text-5xl leading-[1.05] sm:text-6xl">
              Let us find your place
            </h1>
            <p className="mt-6 max-w-md text-base leading-8 text-slate">
              Tell us what you are looking for and our team will get back to
              you.
            </p>

            <div className="mt-10 space-y-8">
              {details.map((item) => (
                <div key={item.label}>
                  <p className="text-xs font-bold tracking-[0.2em] text-gold">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm leading-7">
                    {item.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-xs text-slate">
              Address and timings on this demo are placeholders.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 ring-1 ring-line sm:p-10">
            <h2 className="font-display text-3xl">Send an enquiry</h2>
            <p className="mb-8 mt-2 text-sm text-slate">
              Share your email or phone number, and a short message.
            </p>
            <ContactForm />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
