import ContactForm from "./components/ContactForm";
const properties = [
  {
    name: "The Grand Residence",
    location: "Jubilee Hills, Hyderabad",
    price: "₹4.85 Cr",
    type: "LUXURY VILLA",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "The Azure Heights",
    location: "Financial District, Hyderabad",
    price: "₹2.25 Cr",
    type: "PREMIUM RESIDENCE",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Serene Valley Estate",
    location: "Kokapet, Hyderabad",
    price: "₹3.60 Cr",
    type: "CONTEMPORARY VILLA",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
  },
];

const stats = [
  ["120+", "PROPERTIES EXPLORED"],
  ["35+", "PREMIUM COMMUNITIES"],
  ["12+", "YEARS OF EXPERIENCE"],
  ["98%", "CLIENT SATISFACTION"],
];

const services = [
  {
    number: "01",
    title: "Thoughtful Locations",
    description:
      "Discover homes in desirable neighbourhoods with beautiful surroundings and convenient connectivity.",
  },
  {
    number: "02",
    title: "Distinctive Architecture",
    description:
      "Explore thoughtfully designed spaces where natural light, open areas and architecture come together.",
  },
  {
    number: "03",
    title: "Personal Guidance",
    description:
      "Enjoy a considered property journey with guidance at every step of your search.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f7f0] text-[#203d32]">
      {/* Header */}
      <header className="relative z-30 border-b border-[#203d32]/10 bg-[#f7f7f0]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a
            href="#home"
            className="text-2xl font-serif font-semibold tracking-wide"
          >
            HAVENSTONE<span className="text-[#84977b]">.</span>
            <span className="block text-[9px] tracking-[0.4em] text-[#71816c]">
              REALTY & ESTATES
            </span>
          </a>

          <nav className="hidden items-center gap-9 text-xs tracking-widest md:flex">
            <a href="#home" className="transition hover:text-[#84977b]">
              HOME
            </a>
            <a href="#about" className="transition hover:text-[#84977b]">
              ABOUT
            </a>
            <a href="#properties" className="transition hover:text-[#84977b]">
              PROPERTIES
            </a>
            <a href="#services" className="transition hover:text-[#84977b]">
              SERVICES
            </a>
            <a href="#contact" className="transition hover:text-[#84977b]">
              CONTACT
            </a>
          </nav>

          <a
            href="#contact"
            className="hidden bg-[#244536] px-6 py-3 text-xs tracking-widest text-white transition hover:bg-[#496b54] md:block"
          >
            ENQUIRE NOW
          </a>

          <details className="relative md:hidden">
            <summary className="cursor-pointer list-none text-2xl">☰</summary>
            <nav className="absolute right-0 top-12 flex w-56 flex-col gap-5 border border-[#203d32]/10 bg-white p-6 text-sm shadow-xl">
              <a href="#home">HOME</a>
              <a href="#about">ABOUT</a>
              <a href="#properties">PROPERTIES</a>
              <a href="#services">SERVICES</a>
              <a href="#contact">CONTACT</a>
              <a
                href="#contact"
                className="border-t border-[#203d32]/10 pt-4 text-[#496b54]"
              >
                ENQUIRE NOW →
              </a>
            </nav>
          </details>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative flex min-h-[680px] items-center bg-cover bg-center md:min-h-[740px]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(12,36,26,0.78), rgba(12,36,26,0.28)), url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=90')",
        }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 py-28 text-white">
          <p className="mb-6 text-xs tracking-[0.4em] text-[#d5dfc8]">
            A NEW WAY OF LIVING
          </p>

          <h1 className="max-w-3xl font-serif text-5xl leading-tight md:text-7xl">
            Find Your Place
            <br />
            Among Nature.
          </h1>

          <p className="mt-7 max-w-lg text-sm leading-7 text-white/85 md:text-base">
            Discover exceptional homes surrounded by beautiful landscapes,
            thoughtful architecture and the calm of nature.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#properties"
              className="bg-[#d8e0cb] px-8 py-4 text-xs tracking-widest text-[#203d32] transition hover:bg-white"
            >
              EXPLORE PROPERTIES
            </a>

            <a
              href="#about"
              className="border border-white/70 px-8 py-4 text-xs tracking-widest transition hover:bg-white hover:text-[#203d32]"
            >
              DISCOVER HAVENSTONE
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 hidden text-[10px] tracking-[0.3em] text-white/80 md:block">
          LIVE BEAUTIFULLY · LIVE NATURALLY
        </div>
      </section>

      {/* Statistics */}
      <section className="border-b border-[#203d32]/10 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-10 text-center md:grid-cols-4">
          {stats.map(([number, label]) => (
            <div key={label}>
              <p className="font-serif text-3xl text-[#496b54]">{number}</p>
              <p className="mt-2 text-[9px] tracking-[0.2em] text-[#71816c]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:grid-cols-2 md:items-center"
      >
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85"
            alt="Modern luxury home with natural surroundings"
            className="h-[460px] w-full object-cover md:h-[520px]"
          />

          <div className="absolute -bottom-5 -right-3 bg-[#244536] px-7 py-6 text-white md:-right-5">
            <p className="font-serif text-3xl">Live</p>
            <p className="text-xs tracking-widest text-[#d5dfc8]">
              BEAUTIFULLY
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs tracking-[0.3em] text-[#84977b]">
            OUR PHILOSOPHY
          </p>

          <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">
            More Than A Home.
            <br />A Way Of Life.
          </h2>

          <p className="mt-7 text-sm leading-8 text-[#657267]">
            At Havenstone Realty, we believe the right home is about more than
            its walls. It is about natural surroundings, meaningful spaces and
            the feeling of belonging.
          </p>

          <p className="mt-4 text-sm leading-8 text-[#657267]">
            From peaceful garden residences to contemporary urban homes,
            discover spaces that make everyday living special.
          </p>

          <a
            href="#properties"
            className="mt-9 inline-block border-b border-[#84977b] pb-2 text-xs tracking-widest"
          >
            DISCOVER OUR COLLECTION →
          </a>
        </div>
      </section>

      {/* Nature Banner */}
      <section
        className="relative flex min-h-[420px] items-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,43,29,0.55), rgba(15,43,29,0.55)), url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=85')",
        }}
      >
        <div className="mx-auto max-w-4xl px-6 py-20 text-center text-white">
          <p className="text-xs tracking-[0.35em] text-[#d5dfc8]">
            THE ART OF NATURAL LIVING
          </p>
          <h2 className="mt-6 font-serif text-4xl leading-tight md:text-6xl">
            Where Architecture
            <br />
            Meets Nature.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/80">
            A beautiful home is not just what you see inside. It is also the
            world that surrounds you.
          </p>
        </div>
      </section>

      {/* Properties */}
      <section id="properties" className="bg-[#edf0e7] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-xs tracking-[0.3em] text-[#84977b]">
                CURATED FOR YOU
              </p>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl">
                Exceptional Properties
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-[#657267]">
              Explore distinctive residences in some of Hyderabad's most
              desirable neighbourhoods.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {properties.map((property) => (
              <article
                key={property.name}
                className="group overflow-hidden bg-white"
              >
                <div className="overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <p className="text-[10px] tracking-[0.2em] text-[#84977b]">
                    {property.type}
                  </p>

                  <h3 className="mt-3 font-serif text-2xl">{property.name}</h3>

                  <p className="mt-2 text-sm text-[#7a857b]">
                    {property.location}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-[#203d32]/10 pt-5">
                    <p className="text-lg font-semibold">{property.price}</p>
                    <a
                      href="#contact"
                      className="text-xs tracking-widest text-[#496b54] transition hover:text-[#84977b]"
                    >
                      ENQUIRE →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-[#71816c]">
            *Property names, prices and details are illustrative demo content.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-[#244536] px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.3em] text-[#c8d5bb]">
              THE HAVENSTONE DIFFERENCE
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">
              A Better Home Begins
              <br />
              With A Better Choice.
            </h2>
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.number}
                className="border-t border-white/25 pt-6"
              >
                <p className="text-sm text-[#c8d5bb]">{service.number}</p>

                <h3 className="mt-5 font-serif text-2xl">{service.title}</h3>

                <p className="mt-4 text-sm leading-7 text-white/65">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact */}
      <section id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-3xl bg-[#e8ecdf] px-7 py-16 md:px-16">
          <div className="text-center">
            <p className="text-xs tracking-[0.3em] text-[#84977b]">
              YOUR NEXT CHAPTER STARTS HERE
            </p>

            <h2 className="mt-5 font-serif text-4xl md:text-5xl">
              Let's Find Your Place.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#657267]">
              Tell us what you are looking for. Our team will help you explore a
              place that feels like home.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-[#172d23] px-6 py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <p className="font-serif text-2xl tracking-wide">HAVENSTONE.</p>
            <p className="mt-2 text-[9px] tracking-[0.3em] text-[#c8d5bb]">
              REALTY & ESTATES
            </p>
          </div>

          <p className="text-xs text-white/55">
            © 2026 Havenstone Realty. Demo Website.
          </p>
        </div>
      </footer>
    </main>
  );
}
