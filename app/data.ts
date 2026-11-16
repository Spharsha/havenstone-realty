export const photo = (id: string, width: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=70`;

export type Property = {
  id: string;
  name: string;
  locality: string;
  type: "Apartment" | "Villa" | "Penthouse";
  bhk: number;
  priceLakh: number;
  area: number;
  status: string;
  image: string;
  fallback: string;
  summary: string;
  features: string[];
};

export const properties: Property[] = [
  {
    id: "azure-heights-powai",
    name: "The Azure Heights",
    locality: "Powai",
    type: "Apartment",
    bhk: 2,
    priceLakh: 195,
    area: 980,
    status: "Ready to move",
    image: "flat-1",
    fallback: "photo-1600607687939-ce8a6c25118c",
    summary:
      "A bright 2 BHK with lake views, a modular kitchen and a quiet, well-kept society.",
    features: [
      "Lake-facing balcony",
      "Modular kitchen",
      "Covered parking",
      "Gym and clubhouse",
    ],
  },
  {
    id: "grand-residence-juhu",
    name: "The Grand Residence",
    locality: "Juhu",
    type: "Villa",
    bhk: 4,
    priceLakh: 1250,
    area: 4200,
    status: "Ready to move",
    image: "villa-1",
    fallback: "photo-1600585154340-be6161a56a0c",
    summary:
      "A private villa with a garden, double-height living room and room for the whole family.",
    features: [
      "Private garden",
      "Home theatre room",
      "3 car parking",
      "24x7 security",
    ],
  },
  {
    id: "serene-valley-kharghar",
    name: "Serene Valley Estate",
    locality: "Kharghar",
    type: "Apartment",
    bhk: 3,
    priceLakh: 165,
    area: 1350,
    status: "Under construction",
    image: "flat-2",
    fallback: "photo-1600566753086-00f18fb6b3ea",
    summary:
      "A spacious 3 BHK in a green township, close to schools, parks and the metro.",
    features: [
      "Landscaped gardens",
      "Kids play area",
      "Power backup",
      "Near metro station",
    ],
  },
  {
    id: "skyline-bandra",
    name: "Havenstone Skyline",
    locality: "Bandra West",
    type: "Apartment",
    bhk: 3,
    priceLakh: 680,
    area: 1500,
    status: "Ready to move",
    image: "flat-3",
    fallback: "photo-1600566753190-17f0baa2a6c3",
    summary:
      "A well-planned 3 BHK in the heart of Bandra, steps away from cafes and the sea link.",
    features: [
      "Sea-facing windows",
      "Smart home wiring",
      "Concierge desk",
      "Rooftop lounge",
    ],
  },
  {
    id: "penthouse-worli",
    name: "Worli Crest Penthouse",
    locality: "Worli",
    type: "Penthouse",
    bhk: 4,
    priceLakh: 1180,
    area: 3600,
    status: "Ready to move",
    image: "penthouse",
    fallback: "photo-1600585154526-990dced4db0d",
    summary:
      "A top-floor penthouse with a wraparound terrace and sweeping city views.",
    features: [
      "Private terrace",
      "Sky lounge access",
      "Two reserved parking spots",
      "Infinity pool",
    ],
  },
  {
    id: "one-bhk-thane",
    name: "Lakeview Nest",
    locality: "Thane",
    type: "Apartment",
    bhk: 1,
    priceLakh: 78,
    area: 580,
    status: "Ready to move",
    image: "flat-1",
    fallback: "photo-1600607687939-ce8a6c25118c",
    summary:
      "A smart 1 BHK for first-time buyers, close to the station and local markets.",
    features: [
      "Close to railway station",
      "Vastu-friendly plan",
      "Lift and parking",
      "Good ventilation",
    ],
  },
  {
    id: "garden-court-andheri",
    name: "Garden Court",
    locality: "Andheri West",
    type: "Apartment",
    bhk: 2,
    priceLakh: 240,
    area: 1050,
    status: "Under construction",
    image: "flat-2",
    fallback: "photo-1600566753086-00f18fb6b3ea",
    summary:
      "A modern 2 BHK near Lokhandwala, with a podium garden and fast metro access.",
    features: [
      "Podium garden",
      "Co-working lounge",
      "Metro nearby",
      "EV charging",
    ],
  },
  {
    id: "palm-villas-navi-mumbai",
    name: "Palm Grove Villas",
    locality: "Kharghar",
    type: "Villa",
    bhk: 3,
    priceLakh: 420,
    area: 2400,
    status: "Under construction",
    image: "villa-1",
    fallback: "photo-1600585154340-be6161a56a0c",
    summary:
      "Row villas in a gated community with a clubhouse, jogging track and large terraces.",
    features: [
      "Gated community",
      "Private terrace",
      "Clubhouse",
      "Jogging track",
    ],
  },
  {
    id: "sunrise-chembur",
    name: "Sunrise Residency",
    locality: "Chembur",
    type: "Apartment",
    bhk: 2,
    priceLakh: 210,
    area: 900,
    status: "Ready to move",
    image: "flat-3",
    fallback: "photo-1600566753190-17f0baa2a6c3",
    summary:
      "A well-connected 2 BHK in an established neighbourhood with great schools nearby.",
    features: [
      "Top schools nearby",
      "Covered parking",
      "24x7 water supply",
      "Senior citizen park",
    ],
  },
];

export const localities = Array.from(
  new Set(properties.map((p) => p.locality)),
).sort();

export const budgets = [
  { value: "any", label: "Any budget", min: 0, max: Infinity },
  { value: "u1", label: "Under ₹1 Cr", min: 0, max: 100 },
  { value: "1-2", label: "₹1 – 2 Cr", min: 100, max: 200 },
  { value: "2-5", label: "₹2 – 5 Cr", min: 200, max: 500 },
  { value: "5+", label: "Above ₹5 Cr", min: 500, max: Infinity },
];

export function formatPrice(lakh: number) {
  if (lakh >= 100) {
    return `₹${(lakh / 100).toFixed(2).replace(/\.?0+$/, "")} Cr`;
  }
  return `₹${lakh} L`;
}

export function inr(value: number) {
  return new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(
    value,
  );
}

export function monthlyEmi(loan: number, annualRate: number, years: number) {
  const n = years * 12;
  const r = annualRate / 12 / 100;
  if (r === 0) return loan / n;
  const factor = Math.pow(1 + r, n);
  return (loan * r * factor) / (factor - 1);
}

export function classify(value: string): "email" | "phone" | null {
  const v = value.trim();
  if (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) return "email";
  const digits = v.replace(/[\s\-()+]/g, "");
  if (/^(91)?[6-9]\d{9}$/.test(digits)) return "phone";
  return null;
}

export const services = [
  {
    title: "Buy a Home",
    text: "Shortlist verified homes that match your budget, area and lifestyle, and visit them with us.",
  },
  {
    title: "Sell Your Property",
    text: "Fair pricing advice, good photography and genuine buyers, with paperwork handled for you.",
  },
  {
    title: "Rent and Lease",
    text: "Find tenants or homes quickly, with clear rental agreements and background checks.",
  },
  {
    title: "Property Valuation",
    text: "A realistic market value for your flat, villa or plot, based on recent local deals.",
  },
  {
    title: "Home Loan Help",
    text: "Compare offers from banks, plan your EMI and get your loan approved faster.",
  },
  {
    title: "Legal and Registration",
    text: "Document checks, agreement drafting and registration support, step by step.",
  },
];

export const steps = [
  {
    number: "01",
    title: "Tell us your needs",
    text: "Budget, area, size and timeline. We listen first.",
  },
  {
    number: "02",
    title: "See curated homes",
    text: "We shortlist homes that really fit, and arrange visits.",
  },
  {
    number: "03",
    title: "Plan the finances",
    text: "Compare loans, EMIs and costs before you decide.",
  },
  {
    number: "04",
    title: "Close with confidence",
    text: "We help with paperwork, registration and handover.",
  },
];
