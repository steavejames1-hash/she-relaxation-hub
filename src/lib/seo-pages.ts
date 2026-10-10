export type SeoPage = {
  slug: string;
  name: string;
  city: "Islamabad" | "Rawalpindi" | "Islamabad & Rawalpindi";
  h1: string;
  intro: string;
  points: string[];
  nearby?: string[];
};

const isbSectors = ["F-6", "F-7", "F-8", "F-10", "F-11", "E-7", "E-11", "G-6", "G-9", "G-10", "G-11", "G-13", "I-8", "I-10"];

const sectorPage = (s: string): SeoPage => ({
  slug: s.toLowerCase(),
  name: s,
  city: "Islamabad",
  h1: `Home service massage in ${s}, Islamabad`,
  intro: `Professional full body relaxation massage for women at home in ${s}, Islamabad. Hadi, a trained male therapist, comes to your house, flat or guest house in ${s} with a massage table, fresh towels and oils — private, respectful and with flexible timings.`,
  points: [
    `Door-to-door mobile massage anywhere in ${s}`,
    "Full body, deep tissue, back & neck, head & foot sessions",
    "Same-day slots often available",
    "Prices shared instantly on WhatsApp",
  ],
});

const others: SeoPage[] = [
  { slug: "dha-islamabad", name: "DHA Islamabad", city: "Islamabad", h1: "Home service massage in DHA Islamabad", intro: "Relaxation massage for women delivered to your home in all DHA Islamabad phases. Clean equipment, fresh linen and a calm, private session in your own space.", points: ["All DHA phases covered", "Houses, flats and guest houses", "Morning to late evening", "Book on WhatsApp"] },
  { slug: "bahria-town-islamabad", name: "Bahria Town Islamabad", city: "Islamabad", h1: "Home service massage in Bahria Town Islamabad", intro: "Full body massage at home for women in Bahria Town Islamabad — Hadi travels to your house or apartment with everything needed.", points: ["All phases of Bahria Town", "Flexible daily timings", "Ladies only, fully private", "Prices on WhatsApp"] },
  { slug: "blue-area", name: "Blue Area", city: "Islamabad", h1: "Hotel & flat massage service in Blue Area, Islamabad", intro: "Staying in a hotel or serviced apartment around Blue Area or the Diplomatic Enclave? Book a professional in-room relaxation massage for women.", points: ["Hotel room and serviced apartment visits", "Ideal for business travellers", "Late evening slots", "Book on WhatsApp"] },
  { slug: "rawalpindi", name: "Rawalpindi", city: "Rawalpindi", h1: "Home service massage in Rawalpindi", intro: "Mobile massage for women at home across Rawalpindi — Saddar, Cantt, Bahria Town, Gulraiz, Chaklala Scheme 3 and nearby areas.", points: ["Saddar, Cantt, Bahria Town, Gulraiz", "Chaklala Scheme 3 and nearby", "Same-day appointments", "Prices on WhatsApp"] },
  { slug: "saddar-rawalpindi", name: "Saddar & Cantt", city: "Rawalpindi", h1: "Home service massage in Saddar & Cantt, Rawalpindi", intro: "Relaxing full body massage for women at home in Saddar and Cantt, Rawalpindi.", points: ["Houses and flats", "Flexible timings", "Ladies only", "Book on WhatsApp"] },
  { slug: "bahria-town-rawalpindi", name: "Bahria Town Rawalpindi", city: "Rawalpindi", h1: "Home service massage in Bahria Town Rawalpindi", intro: "Professional relaxation massage for women at home in Bahria Town and Gulraiz, Rawalpindi.", points: ["All Bahria phases & Gulraiz", "Clean equipment & linen", "Same-day slots", "Book on WhatsApp"] },
];

export const areaPages: SeoPage[] = [...isbSectors.map(sectorPage), ...others];

export const servicePages: SeoPage[] = [
  { slug: "full-body-massage-islamabad", name: "Full body massage at home", city: "Islamabad & Rawalpindi", h1: "Full body massage home service in Islamabad & Rawalpindi", intro: "A calming 60 or 90 minute full body relaxation massage with warm oil, delivered to your home. Professional and therapeutic, for women only.", points: ["60 / 90 minute sessions", "Warm oil, fresh towels, massage table", "Pressure tailored to you", "Prices shared on WhatsApp"] },
  { slug: "mobile-massage-islamabad", name: "Mobile massage service", city: "Islamabad & Rawalpindi", h1: "Mobile massage therapist in Islamabad & Rawalpindi", intro: "No spa visit needed — a mobile massage therapist who comes to you. Hadi brings the full spa setup to your door anywhere in the twin cities.", points: ["Comes to any sector or society", "Portable table & all supplies", "7 days a week", "Book by WhatsApp"] },
  { slug: "hotel-massage-islamabad", name: "Hotel massage service", city: "Islamabad & Rawalpindi", h1: "In-room hotel massage in Islamabad & Rawalpindi", intro: "Staying at a hotel or guest house? Book a professional in-room relaxation massage for women — perfect after a long flight or business day.", points: ["Hotels & guest houses", "Late evening availability", "Discreet and professional", "Book by WhatsApp"] },
  { slug: "flat-apartment-massage-islamabad", name: "Flat & apartment massage", city: "Islamabad & Rawalpindi", h1: "Massage service at your flat or apartment in Islamabad", intro: "Living in a flat or serviced apartment? You only need a small quiet room — Hadi brings everything for a full spa-style session.", points: ["Works in small spaces", "Serviced apartments welcome", "Fresh linen every visit", "Book by WhatsApp"] },
  { slug: "overseas-massage-booking-pakistan", name: "Overseas visitors", city: "Islamabad & Rawalpindi", h1: "Book a home massage in Islamabad from overseas", intro: "Visiting Pakistan from the UK, USA, UAE, Canada, Saudi Arabia or Australia? Book your home or hotel massage on WhatsApp before you land, or gift one to family in Islamabad or Rawalpindi.", points: ["Book from any country on WhatsApp", "Hotel, guest house & family homes", "English and Urdu spoken", "Pay locally on the day"] },
  { slug: "deep-tissue-massage-islamabad", name: "Deep tissue massage", city: "Islamabad & Rawalpindi", h1: "Deep tissue massage at home in Islamabad & Rawalpindi", intro: "Firmer pressure for stubborn knots, stiff shoulders and desk-job back pain — delivered to your home.", points: ["60 / 90 minutes", "Targets knots and tension", "Ladies only", "Prices on WhatsApp"] },
];
