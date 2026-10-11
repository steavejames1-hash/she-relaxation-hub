export type SeoPage = {
  slug: string;
  name: string;
  city: "Islamabad" | "Rawalpindi" | "Islamabad & Rawalpindi";
  h1: string;
  /** Hand-written meta title (<= 60 chars) targeting the exact buyer phrase. */
  title?: string;
  /** Hand-written meta description (140-160 chars) with keyword + CTA. */
  description?: string;
  intro: string;
  points: string[];
  nearby?: string[];
  faqs: { q: string; a: string }[];
};

/** Per-area FAQs: questions carry the area name so every page asks something different. */
const areaFaqs = (name: string) => [
  {
    q: `Is home service massage available across ${name}?`,
    a: `Yes. Hadi travels to homes, flats, guest houses and hotels throughout ${name}. Send your exact address on WhatsApp and coverage is confirmed before you book.`,
  },
  {
    q: `How do I book a home massage in ${name}?`,
    a: `Bookings are made on WhatsApp only. Send your area, preferred time and session length and you will get the price plus a confirmed appointment — same-day slots are often available.`,
  },
  {
    q: `How far ahead should I book in ${name}?`,
    a: `Appointments run from morning until late evening, seven days a week. Messaging on WhatsApp a few hours ahead helps secure your preferred time, especially for evenings.`,
  },
];

const isbSectors = ["F-6", "F-7", "F-8", "F-10", "F-11", "E-7", "E-11", "G-6", "G-9", "G-10", "G-11", "G-13", "I-8", "I-10"];

/** Hand-written meta per sector — openings and hooks vary so no two pages share copy. */
const sectorMeta: Record<string, { title: string; description: string }> = {
  "f-6": { title: "Massage Home Service in F-6 Islamabad | GentleGlow", description: "Ladies-only massage home service in F-6, Islamabad. Trained male therapist brings table & fresh towels to your door. Same-day slots — book on WhatsApp." },
  "f-7": { title: "Home Service Massage F-7 Islamabad | GentleGlow", description: "Full body massage at home in F-7 Islamabad for women. Private, professional visits by a trained male therapist. Flexible timings. Book on WhatsApp." },
  "f-8": { title: "Massage Home Service F-8 Islamabad | GentleGlow", description: "Home massage for ladies in F-8 Islamabad. Relaxing full body sessions at your door — clean table, fresh linen, flexible timings. Book on WhatsApp." },
  "f-10": { title: "Massage Home Service F-10 Islamabad | GentleGlow", description: "Massage home service in F-10 Islamabad. Ladies-only full body & deep tissue sessions at home by a trained male therapist. Same-day slots. WhatsApp now." },
  "f-11": { title: "Home Service Massage F-11 Islamabad | GentleGlow", description: "Relaxing home service massage in F-11 Islamabad for women. Professional, private and respectful home visits with everything provided. Book on WhatsApp." },
  "e-7": { title: "Home Service Massage E-7 Islamabad | GentleGlow", description: "Home massage for women in E-7 Islamabad. Full body relaxation sessions at your door by a trained male therapist. Private & flexible. WhatsApp to book." },
  "e-11": { title: "Massage Home Service E-11 Islamabad | GentleGlow", description: "Ladies-only massage at home in E-11 Islamabad. Professional full body sessions with table, towels and oils provided. Flexible timings. Book on WhatsApp." },
  "g-6": { title: "Massage Home Service G-6 Islamabad | GentleGlow", description: "Massage home service in G-6 Islamabad for women. Full body relaxation at home — professional, private, same-day slots often available. WhatsApp now." },
  "g-9": { title: "Home Service Massage G-9 Islamabad | GentleGlow", description: "Full body massage at home in G-9 Islamabad. Ladies-only visits by a trained male therapist with clean equipment and fresh linen. Book on WhatsApp." },
  "g-10": { title: "Massage Home Service G-10 Islamabad | GentleGlow", description: "Home service massage in G-10 Islamabad. Relaxing sessions for women at your door — private, respectful, flexible timings. Book on WhatsApp today." },
  "g-11": { title: "Home Service Massage G-11 Islamabad | GentleGlow", description: "Massage at home in G-11 Islamabad for ladies. Full body & deep tissue home visits by a trained male therapist. Same-day slots. WhatsApp to book." },
  "g-13": { title: "Massage Home Service G-13 Islamabad | GentleGlow", description: "Ladies-only home service massage in G-13 Islamabad. Professional full body relaxation at your door with everything provided. Book on WhatsApp." },
  "i-8": { title: "Home Service Massage I-8 Islamabad | GentleGlow", description: "Home massage for women in I-8 Islamabad. Full body relaxation sessions at your home — trained male therapist, fresh towels, flexible times. WhatsApp." },
  "i-10": { title: "Massage Home Service I-10 Islamabad | GentleGlow", description: "Massage home service in I-10 Islamabad. Ladies-only full body sessions at home, private and professional. Same-day slots often available. Book now." },
};

const sectorPage = (s: string): SeoPage => ({
  slug: s.toLowerCase(),
  name: s,
  city: "Islamabad",
  h1: `Home service massage in ${s}, Islamabad`,
  ...sectorMeta[s.toLowerCase()],
  intro: `Professional full body relaxation massage for women at home in ${s}, Islamabad. Hadi, a trained male therapist, comes to your house, flat or guest house in ${s} with a massage table, fresh towels and oils — private, respectful and with flexible timings.`,
  points: [
    `Door-to-door mobile massage anywhere in ${s}`,
    "Full body, deep tissue, back & neck, head & foot sessions",
    "Same-day slots often available",
    "Prices shared instantly on WhatsApp",
  ],
  faqs: areaFaqs(s),
});

const others: SeoPage[] = [
  { slug: "dha-islamabad", name: "DHA Islamabad", city: "Islamabad", h1: "Home service massage in DHA Islamabad", title: "Home Service Massage DHA Islamabad | GentleGlow", description: "Ladies-only massage home service across all DHA Islamabad phases. Houses, flats & guest houses. Trained male therapist. Book on WhatsApp today.", intro: "Relaxation massage for women delivered to your home in all DHA Islamabad phases. Clean equipment, fresh linen and a calm, private session in your own space.", points: ["All DHA phases covered", "Houses, flats and guest houses", "Morning to late evening", "Book on WhatsApp"], faqs: areaFaqs("DHA Islamabad") },
  { slug: "bahria-town-islamabad", name: "Bahria Town Islamabad", city: "Islamabad", h1: "Home service massage in Bahria Town Islamabad", title: "Home Massage Bahria Town Islamabad | GentleGlow", description: "Full body massage at home in Bahria Town Islamabad for women. All phases covered — private, professional home visits. Flexible timings. WhatsApp now.", intro: "Full body massage at home for women in Bahria Town Islamabad — Hadi travels to your house or apartment with everything needed.", points: ["All phases of Bahria Town", "Flexible daily timings", "Ladies only, fully private", "Prices on WhatsApp"], faqs: areaFaqs("Bahria Town Islamabad") },
  { slug: "blue-area", name: "Blue Area", city: "Islamabad", h1: "Hotel & flat massage service in Blue Area, Islamabad", title: "Hotel Massage Service Blue Area Islamabad | GentleGlow", description: "In-room hotel massage in Blue Area, Islamabad for women. Hotels, guest houses & serviced apartments. Late evening slots. Book on WhatsApp.", intro: "Staying in a hotel or serviced apartment around Blue Area or the Diplomatic Enclave? Book a professional in-room relaxation massage for women.", points: ["Hotel room and serviced apartment visits", "Ideal for business travellers", "Late evening slots", "Book on WhatsApp"], faqs: areaFaqs("Blue Area") },
  { slug: "rawalpindi", name: "Rawalpindi", city: "Rawalpindi", h1: "Home service massage in Rawalpindi", title: "Home Service Massage Rawalpindi | Ladies Only | GentleGlow", description: "Massage home service across Rawalpindi for women — Saddar, Cantt, Bahria Town, Gulraiz & more. Ladies-only, professional. Book on WhatsApp.", intro: "Mobile massage for women at home across Rawalpindi — Saddar, Cantt, Bahria Town, Gulraiz, Chaklala Scheme 3 and nearby areas.", points: ["Saddar, Cantt, Bahria Town, Gulraiz", "Chaklala Scheme 3 and nearby", "Same-day appointments", "Prices on WhatsApp"], faqs: areaFaqs("Rawalpindi") },
  { slug: "saddar-rawalpindi", name: "Saddar & Cantt", city: "Rawalpindi", h1: "Home service massage in Saddar & Cantt, Rawalpindi", title: "Home Massage Saddar & Cantt Rawalpindi | GentleGlow", description: "Home service massage in Saddar & Cantt Rawalpindi for ladies. Relaxing full body sessions at your door. Flexible timings. Book on WhatsApp.", intro: "Relaxing full body massage for women at home in Saddar and Cantt, Rawalpindi.", points: ["Houses and flats", "Flexible timings", "Ladies only", "Book on WhatsApp"], faqs: areaFaqs("Saddar & Cantt") },
  { slug: "bahria-town-rawalpindi", name: "Bahria Town Rawalpindi", city: "Rawalpindi", h1: "Home service massage in Bahria Town Rawalpindi", title: "Home Massage Bahria Town Rawalpindi | GentleGlow", description: "Ladies-only massage at home in Bahria Town Rawalpindi & Gulraiz. Professional full body sessions with everything provided. WhatsApp to book.", intro: "Professional relaxation massage for women at home in Bahria Town and Gulraiz, Rawalpindi.", points: ["All Bahria phases & Gulraiz", "Clean equipment & linen", "Same-day slots", "Book on WhatsApp"], faqs: areaFaqs("Bahria Town Rawalpindi") },
];

export const areaPages: SeoPage[] = [...isbSectors.map(sectorPage), ...others];

export const servicePages: SeoPage[] = [
  {
    slug: "full-body-massage-islamabad", name: "Full body massage at home", city: "Islamabad & Rawalpindi", h1: "Full body massage home service in Islamabad & Rawalpindi", title: "Full Body Massage Home Service Islamabad | GentleGlow", description: "Full body massage home service in Islamabad & Rawalpindi. 60/90 min warm-oil sessions at your home. Ladies only, professional. Book on WhatsApp.", intro: "A calming 60 or 90 minute full body relaxation massage with warm oil, delivered to your home. Professional and therapeutic, for women only.", points: ["60 / 90 minute sessions", "Warm oil, fresh towels, massage table", "Pressure tailored to you", "Prices shared on WhatsApp"],
    faqs: [
      { q: "What happens during a full body massage at home?", a: "Hadi sets up a professional massage table in a quiet room, then works through your back, shoulders, arms, legs, neck and feet with warm oil. Pressure is adjusted to what feels right for you." },
      { q: "How long does a full body session take?", a: "You choose 60 or 90 minutes when you book. The price for each option is confirmed on WhatsApp before the appointment." },
      { q: "What does a full body home massage cost?", a: "Pricing depends on session length and your location. The full price list is shared on WhatsApp before you book — no obligation." },
    ],
  },
  {
    slug: "mobile-massage-islamabad", name: "Mobile massage service", city: "Islamabad & Rawalpindi", h1: "Mobile massage therapist in Islamabad & Rawalpindi", title: "Mobile Massage Therapist Islamabad & Rawalpindi | GentleGlow", description: "Mobile massage therapist for Islamabad & Rawalpindi — comes to you with table, towels & oils. Any sector or society, 7 days a week. Book on WhatsApp.", intro: "No spa visit needed — a mobile massage therapist who comes to you. Hadi brings the full spa setup to your door anywhere in the twin cities.", points: ["Comes to any sector or society", "Portable table & all supplies", "7 days a week", "Book by WhatsApp"],
    faqs: [
      { q: "Which areas does the mobile massage service cover?", a: "All of Islamabad and Rawalpindi — sectors F, E, G and I, DHA, Bahria Town, Blue Area, Saddar, Cantt and nearby societies. Message your address on WhatsApp to confirm." },
      { q: "Do I need a big space or special equipment?", a: "No. Hadi brings a portable massage table, fresh towels and oils. A small quiet room is all you need to provide." },
      { q: "How quickly can the therapist arrive?", a: "Same-day slots are often available, including evenings, seven days a week. Message on WhatsApp with your area and preferred time." },
    ],
  },
  {
    slug: "hotel-massage-islamabad", name: "Hotel massage service", city: "Islamabad & Rawalpindi", h1: "In-room hotel massage in Islamabad & Rawalpindi", title: "Hotel Massage Service Islamabad & Rawalpindi | GentleGlow", description: "In-room hotel massage in Islamabad & Rawalpindi for women. Hotels, guest houses & serviced apartments. Discreet and professional. Book on WhatsApp.", intro: "Staying at a hotel or guest house? Book a professional in-room relaxation massage for women — perfect after a long flight or business day.", points: ["Hotels & guest houses", "Late evening availability", "Discreet and professional", "Book by WhatsApp"],
    faqs: [
      { q: "Can you come to my hotel room?", a: "Yes. Hadi regularly visits hotels, guest houses and serviced apartments in Islamabad and Rawalpindi. Share the hotel name and room number when you book on WhatsApp." },
      { q: "I land late — can I still get an appointment?", a: "Late evening slots are available. Book on WhatsApp ahead of your trip so your time is confirmed before you arrive." },
      { q: "Is it discreet and professional?", a: "Yes. This is a strictly professional, therapeutic service for women. Hadi sets up quietly in your room and takes everything away afterwards." },
    ],
  },
  {
    slug: "flat-apartment-massage-islamabad", name: "Flat & apartment massage", city: "Islamabad & Rawalpindi", h1: "Massage service at your flat or apartment in Islamabad", title: "Flat & Apartment Massage Service Islamabad | GentleGlow", description: "Massage service at your flat or apartment in Islamabad. Small space? No problem — table, linen & oils provided. Ladies only. Book on WhatsApp.", intro: "Living in a flat or serviced apartment? You only need a small quiet room — Hadi brings everything for a full spa-style session.", points: ["Works in small spaces", "Serviced apartments welcome", "Fresh linen every visit", "Book by WhatsApp"],
    faqs: [
      { q: "My flat is small — is that a problem?", a: "No. The massage table fits in a small quiet room, and Hadi brings everything else. Serviced apartments are welcome too." },
      { q: "Do you cover apartment buildings and gated societies?", a: "Visits cover every sector and society in Islamabad and Rawalpindi, including gated buildings. Confirm your building on WhatsApp when booking." },
      { q: "Is the setup messy?", a: "Setup takes a few minutes and everything is removed afterwards — table, towels and oils. Fresh linen is used for every visit." },
    ],
  },
  {
    slug: "overseas-massage-booking-pakistan", name: "Overseas visitors", city: "Islamabad & Rawalpindi", h1: "Book a home massage in Islamabad from overseas", title: "Book a Home Massage in Islamabad from Overseas | GentleGlow", description: "Visiting Pakistan? Book a home or hotel massage in Islamabad & Rawalpindi on WhatsApp before you land. Clients from UK, USA, UAE, Canada & more.", intro: "Visiting Pakistan from the UK, USA, UAE, Canada, Saudi Arabia or Australia? Book your home or hotel massage on WhatsApp before you land, or gift one to family in Islamabad or Rawalpindi.", points: ["Book from any country on WhatsApp", "Hotel, guest house & family homes", "English and Urdu spoken", "Pay locally on the day"],
    faqs: [
      { q: "Can I book before I fly to Pakistan?", a: "Yes. WhatsApp works from any country, so you can arrange your home or hotel massage before you land — or gift a session to family in Islamabad or Rawalpindi." },
      { q: "Which countries do overseas clients book from?", a: "Clients commonly book from the UK, USA, UAE, Canada, Saudi Arabia and Australia. Wherever you are, you can reserve a slot for your trip on WhatsApp." },
      { q: "How do I pay?", a: "You pay locally in cash on the day of your session. Nothing is charged online." },
    ],
  },
  {
    slug: "deep-tissue-massage-islamabad", name: "Deep tissue massage", city: "Islamabad & Rawalpindi", h1: "Deep tissue massage at home in Islamabad & Rawalpindi", title: "Deep Tissue Massage at Home in Islamabad | GentleGlow", description: "Deep tissue massage at home in Islamabad & Rawalpindi. Firm pressure for knots, stiff shoulders & back pain. Ladies only. Prices on WhatsApp.", intro: "Firmer pressure for stubborn knots, stiff shoulders and desk-job back pain — delivered to your home.", points: ["60 / 90 minutes", "Targets knots and tension", "Ladies only", "Prices on WhatsApp"],
    faqs: [
      { q: "Is deep tissue massage painful?", a: "It uses firmer pressure, but it should never feel unbearable. Hadi checks pressure during the session and adjusts it whenever you ask." },
      { q: "I have desk-job back and shoulder pain — is this suitable?", a: "Deep tissue sessions target stubborn knots, stiff shoulders and back tension from long sitting hours. Share any injuries or conditions on WhatsApp before booking so the session is tailored safely." },
      { q: "How is it different from a relaxation massage?", a: "Relaxation massage uses calm, flowing pressure for overall unwinding; deep tissue works slower and firmer into specific tight areas. Mention your preferred pressure when booking." },
    ],
  },
];
