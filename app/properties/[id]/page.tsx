import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SoftImage from "../../components/SoftImage";
import SaveButton from "../../components/SaveButton";
import ContactForm from "../../components/ContactForm";
import PropertyCard from "../../components/PropertyCard";
import { formatPrice, inr, monthlyEmi, photo, properties } from "../../data";
import ScrollToTopOnMount from "../../components/ScrollToTopOnMount"; // à°šà°¿à°¨à±à°¨ à°•à±à°²à°¯à°¿à°‚à°Ÿà± à°•à°¾à°‚à°ªà±‹à°¨à±†à°‚à°Ÿà±

export const dynamicParams = false;

export function generateStaticParams() {
  return properties.map((property) => ({ id: property.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const property = properties.find((p) => p.id === id);
  if (!property) return { title: "Property | Havenstone Realty (Demo)" };
  return {
    title: `${property.name}, ${property.locality} | Havenstone Realty (Demo)`,
    description: property.summary,
  };
}

export default async function PropertyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const property = properties.find((p) => p.id === id);
  if (!property) notFound();

  const emi = monthlyEmi(property.priceLakh * 100000 * 0.8, 8.5, 20);
  const related = properties.filter((p) => p.id !== property.id).slice(0, 3);

  const specs = [
    { label: "Type", value: property.type },
    { label: "Bedrooms", value: `${property.bhk} BHK` },
    { label: "Area", value: `${inr(property.area)} sq ft` },
    { label: "Status", value: property.status },
  ];

  return (
    <>
      <ScrollToTopOnMount />
      <Header />

      <main className="mx-auto max-w-7xl px-5 py-10 sm:px-8 md:py-14">
        <nav aria-label="Breadcrumb" className="text-sm text-slate">
          <Link href="/" className="hover:text-navy">
            Home
          </Link>{" "}
          /{" "}
          <Link href="/properties" className="hover:text-navy">
            Properties
          </Link>{" "}
          / <span className="text-ink">{property.name}</span>
        </nav>

        <div className="mt-6 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="group">
              <SoftImage
                src={`/images/realty/${property.image}-optimized.webp`}
                fallbackSrc={photo(property.fallback, 1400)}
                alt={`${property.name}, ${property.locality}`}
                width={1400}
                height={1000}
                priority
                className="aspect-[4/3] w-full rounded-3xl"
              />
            </div>

            <p className="mt-8 text-[11px] font-bold tracking-[0.25em] text-gold">
              {property.type.toUpperCase()} Â· {property.locality.toUpperCase()},
              MUMBAI
            </p>
            <h1 className="mt-2 font-display text-4xl leading-tight sm:text-5xl">
              {property.name}
            </h1>
            <p className="mt-4 text-base leading-8 text-slate">
              {property.summary}
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {specs.map((spec) => (
                <div
                  key={spec.label}
                  className="rounded-2xl border border-line bg-white p-4"
                >
                  <dt className="text-xs font-bold tracking-[0.15em] text-slate">
                    {spec.label.toUpperCase()}
                  </dt>
                  <dd className="mt-1 font-semibold">{spec.value}</dd>
                </div>
              ))}
            </dl>

            <h2 className="mt-10 font-display text-2xl">Highlights</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {property.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-sm">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold text-[10px] font-bold text-navy">
                    âœ“
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-40 lg:self-start">
            <div className="rounded-3xl border border-line bg-white p-6 sm:p-8">
              <p className="text-xs font-bold tracking-[0.2em] text-slate">
                PRICE
              </p>
              <p className="mt-1 font-display text-5xl">
                {formatPrice(property.priceLakh)}
              </p>
              <p className="mt-3 text-sm text-slate">
                Sample EMI from about{" "}
                <span className="font-bold text-navy">â‚¹{inr(emi)}</span> per
                month (20% down, 8.5%, 20 years).
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <SaveButton id={property.id} />
                <Link
                  href={`/emi-calculator?price=${property.priceLakh}`}
                  className="rounded-full border border-navy px-6 py-3 text-center text-sm font-semibold transition hover:bg-navy hover:text-white"
                >
                  Calculate my EMI
                </Link>
              </div>
            </div>

            <div className="rounded-3xl bg-ivory p-6 ring-1 ring-line sm:p-8">
              <h2 className="font-display text-2xl">Enquire about this home</h2>
              <p className="mb-6 mt-2 text-sm text-slate">
                Share your email or phone number and we will get back to you.
              </p>
              <ContactForm propertyName={property.name} />
            </div>
          </aside>
        </div>

        <section className="mt-16">
          <h2 className="font-display text-3xl sm:text-4xl">
            You may also like
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((item) => (
              <PropertyCard key={item.id} property={item} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

