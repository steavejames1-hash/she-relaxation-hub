import { createFileRoute, Link } from "@tanstack/react-router";
import { areaPages, servicePages } from "@/lib/seo-pages";
import heroImage from "@/assets/hero-massage.jpg";
import logoText from "@/assets/logo-text.png";
import brandBanner from "@/assets/brand-banner.png";
import { LegalLinks } from "@/components/LegalPage";
import { absoluteUrl, OG_IMAGE, SITE_URL, WHATSAPP_URL as WHATSAPP } from "@/lib/site";

const waLink = (msg: string) => `${WHATSAPP}?text=${encodeURIComponent(msg)}`;

const TITLE = "Home Service Massage in Islamabad & Rawalpindi | GentleGlow";
const DESCRIPTION =
  "Professional full body relaxation massage for women at home in Islamabad and Rawalpindi. Male therapist, since 2022. Flexible timings, private and respectful. Book on WhatsApp.";

const faqs = [
  {
    q: "Do you offer massage home service in Islamabad and Rawalpindi?",
    a: "Yes — home service only. Hadi travels to your home, apartment, guest house or hotel anywhere in Islamabad and Rawalpindi. There is no walk-in centre.",
  },
  {
    q: "What is the price of a home service massage?",
    a: "Price depends on the session length and your location. Send a quick WhatsApp message and you will get the current price list before you commit to anything.",
  },
  {
    q: "I am overseas — can I book for my stay in Pakistan?",
    a: "Yes. Many clients living in the UK, USA, UAE, Canada and Australia book ahead for their trip home, or arrange a session for family staying in Islamabad or Rawalpindi. WhatsApp works from any country.",
  },
  {
    q: "Is this service only for women?",
    a: "Yes. Hadi is a male therapist and works with female clients only, in a professional, respectful and fully private setting.",
  },
  {
    q: "What do I need to arrange at home?",
    a: "Only a quiet room. Hadi brings the massage table, fresh towels and oils, and everything is cleaned between clients.",
  },
  {
    q: "What are the timings?",
    a: "Appointments are flexible, generally from morning until late evening, seven days a week. Same-day slots are often available.",
  },
];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/") },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "keywords",
        content:
          "home service massage Islamabad, full body massage home service Islamabad, massage home service Rawalpindi, home massage for ladies Islamabad, mobile massage therapist Islamabad, relaxation massage at home Islamabad",
      },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HealthAndBeautyBusiness",
          name: "GentleGlow — Home Service",
          description: DESCRIPTION,
          foundingDate: "2022",
          image: OG_IMAGE,
          areaServed: [
            { "@type": "City", name: "Islamabad" },
            { "@type": "City", name: "Rawalpindi" },
          ],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Islamabad",
            addressCountry: "PK",
          },
          availableLanguage: ["English", "Urdu"],
          url: SITE_URL,
          contactPoint: [
            {
              "@type": "ContactPoint",
              contactType: "reservations",
              url: WHATSAPP,
              availableLanguage: ["English", "Urdu"],
            },
          ],
          openingHours: "Mo-Su 09:00-23:00",
          makesOffer: [
            "Full body relaxation massage at home",
            "Deep tissue massage at home",
            "Back, neck and shoulder massage at home",
            "Head and foot massage at home",
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
});

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 016.99 2.898 9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.887 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function WhatsAppButton({
  message,
  children,
  size = "md",
}: {
  message: string;
  children: React.ReactNode;
  size?: "md" | "lg";
}) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp font-semibold text-whatsapp-foreground transition-transform hover:scale-[1.03] ${
        size === "lg" ? "px-8 py-4 text-base" : "px-5 py-2.5 text-sm"
      }`}
      style={{ boxShadow: "var(--shadow-soft)" }}
    >
      <WhatsAppIcon className={size === "lg" ? "h-5 w-5" : "h-4 w-4"} />
      {children}
    </a>
  );
}

const services = [
  {
    name: "Full body relaxation massage",
    desc: "A calming full body session with warm oil to release tension from head to toe.",
    time: "60 / 90 minutes",
  },
  {
    name: "Deep tissue massage",
    desc: "Firmer pressure for stubborn knots, stiff shoulders and long desk hours.",
    time: "60 / 90 minutes",
  },
  {
    name: "Back, neck & shoulder",
    desc: "A focused session for the areas that carry the most daily stress.",
    time: "30 / 45 minutes",
  },
  {
    name: "Head & foot massage",
    desc: "Gentle pressure work to help you sleep better and switch off.",
    time: "30 minutes",
  },
];

const areas = [
  "F-6, F-7, F-8, F-10, F-11",
  "E-7, E-11",
  "G-6, G-9, G-10, G-11, G-13",
  "I-8, I-10",
  "DHA Islamabad & Bahria Town",
  "Blue Area & Diplomatic Enclave",
  "Saddar & Cantt, Rawalpindi",
  "Bahria Town & Gulraiz, Rawalpindi",
  "Chaklala Scheme 3, Rawalpindi",
];

const steps = [
  { n: "01", t: "Message on WhatsApp", d: "Tell Hadi your area, preferred time and session length." },
  { n: "02", t: "Confirm price & slot", d: "You get the exact price and a confirmed appointment time." },
  { n: "03", t: "Relax at home", d: "Hadi arrives with a clean table, fresh linen and oils. Nothing for you to arrange." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="shrink-0" aria-label="GentleGlow — Home Service">
            <img src={logoText} alt="GentleGlow — Women's Home Massage Therapy, Islamabad & Rawalpindi" className="h-11 w-auto" width={915} height={261} />
          </a>
          <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            <a href="#services" className="transition-colors hover:text-primary">Services</a>
            <a href="#areas" className="transition-colors hover:text-primary">Areas</a>
            <a href="#how" className="transition-colors hover:text-primary">How it works</a>
            <a href="#faq" className="transition-colors hover:text-primary">FAQ</a>
            <Link to="/contact" className="transition-colors hover:text-primary">Contact</Link>
          </nav>
          <WhatsAppButton message="Hi Hadi, I'd like to book a home service massage.">
            Book on WhatsApp
          </WhatsAppButton>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden" style={{ background: "var(--gradient-calm)" }}>
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-primary/25 bg-background/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Home service only · Since 2022
              </p>
              <h1 className="text-4xl leading-[1.08] md:text-6xl">
                Full body massage home service in Islamabad &amp; Rawalpindi
              </h1>
              <p className="mt-5 max-w-xl text-lg text-muted-foreground">
                A professional, relaxing massage for women — delivered to your door. Hadi is a
                trained male therapist bringing a calm spa experience into your own space, with
                flexible timings and complete privacy. No travel, no waiting rooms.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <WhatsAppButton
                  size="lg"
                  message="Hi Hadi, I'd like to book a home service massage in Islamabad/Rawalpindi. Please share prices and available times."
                >
                  Message Hadi on WhatsApp
                </WhatsAppButton>
                <a
                  href="#services"
                  className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
                >
                  See services &amp; timings
                </a>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Ladies only · Same-day slots often available · Prices shared on WhatsApp
              </p>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="Massage table with fresh towels, warm oil and an orchid set up for a home service massage in Islamabad"
                width={1600}
                height={1104}
                className="w-full rounded-3xl object-cover"
                style={{ boxShadow: "var(--shadow-soft)" }}
              />
            </div>
          </div>
        </section>

        {/* Trust strip */}
        <section className="border-y border-border bg-card">
          <div className="mx-auto grid max-w-6xl gap-6 px-5 py-8 text-center sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Since 2022", "Trusted by repeat clients"],
              ["Women only", "Respectful, private service"],
              ["Door to door", "Islamabad & Rawalpindi"],
              ["Flexible hours", "Morning to late evening"],
            ].map(([a, b]) => (
              <div key={a}>
                <p className="font-display text-xl text-primary">{a}</p>
                <p className="text-sm text-muted-foreground">{b}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="text-3xl md:text-4xl">Massage services at your home</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Every session is a professional therapeutic massage, carried out fully clothed in
            towels and tailored to the pressure you are comfortable with.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {services.map((s) => (
              <article
                key={s.name}
                className="rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-lg"
              >
                <h3 className="text-2xl">{s.name}</h3>
                <p className="mt-2 text-muted-foreground">{s.desc}</p>
                <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-accent-foreground">
                  {s.time}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-primary/20 bg-secondary p-7 text-center">
            <h3 className="text-2xl">Home service massage prices</h3>
            <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
              Prices depend on the session length and your area in Islamabad or Rawalpindi. Send a
              message and you will get the full price list straight away — no obligation.
            </p>
            <div className="mt-5 flex justify-center">
              <WhatsAppButton
                size="lg"
                message="Hi Hadi, please share your home service massage price list."
              >
                Get the price list
              </WhatsAppButton>
            </div>
          </div>
        </section>

        {/* Areas */}
        <section id="areas" className="border-y border-border bg-card">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <h2 className="text-3xl md:text-4xl">Areas covered</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Home service massage across the twin cities — homes, apartments, guest houses and
              hotels.
            </p>
            <ul className="mt-8 flex flex-wrap gap-3">
              {areas.map((a) => (
                <li
                  key={a}
                  className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground"
                >
                  {a}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">
              Your sector not listed? Message on WhatsApp — nearby areas can usually be covered.
            </p>
          </div>
        </section>

        {/* Overseas */}
        <section className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl md:text-4xl">Booking from overseas?</h2>
              <p className="mt-4 text-muted-foreground">
                If you are visiting Pakistan from the UK, USA, UAE, Canada, Saudi Arabia or
                Australia, you can arrange a home massage before you even land. Many overseas
                clients book a session for the jet-lagged first days of their trip, or gift one to
                a mother or sister living in Islamabad or Rawalpindi.
              </p>
              <ul className="mt-6 space-y-3 text-muted-foreground">
                {[
                  "Book ahead by WhatsApp from any country",
                  "Hotel, guest house and family-home visits",
                  "English and Urdu spoken",
                  "Pay locally in cash on the day",
                ].map((i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {i}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <WhatsAppButton
                  size="lg"
                  message="Hi Hadi, I'm travelling to Pakistan and would like to book a home massage during my stay."
                >
                  Plan my session
                </WhatsAppButton>
              </div>
            </div>
            <div id="how" className="rounded-3xl border border-border bg-card p-8">
              <h3 className="text-2xl">How it works</h3>
              <ol className="mt-6 space-y-6">
                {steps.map((s) => (
                  <li key={s.n} className="flex gap-4">
                    <span className="font-display text-2xl text-primary-glow">{s.n}</span>
                    <span>
                      <span className="block font-semibold">{s.t}</span>
                      <span className="text-sm text-muted-foreground">{s.d}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-t border-border bg-card">
          <div className="mx-auto max-w-3xl px-5 py-20">
            <h2 className="text-3xl md:text-4xl">Frequently asked questions</h2>
            <div className="mt-8 divide-y divide-border">
              {faqs.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="cursor-pointer list-none text-lg font-semibold marker:hidden">
                    <span className="flex items-start justify-between gap-4">
                      {f.q}
                      <span className="mt-1 text-primary transition-transform group-open:rotate-45">
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="mt-3 text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mx-auto max-w-4xl px-5 py-20 text-center">
          <img
            src={brandBanner}
            alt="GentleGlow — Full Body Massage, Islamabad Home Services"
            width={695}
            height={464}
            className="mx-auto mb-10 w-full max-w-md rounded-3xl object-cover"
            style={{ boxShadow: "var(--shadow-soft)" }}
          />
          <h2 className="text-3xl md:text-5xl">Ready to unwind at home?</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            One message is all it takes. Tell Hadi your area and preferred time, and your session
            in Islamabad or Rawalpindi is confirmed.
          </p>
          <div className="mt-8 flex justify-center">
            <WhatsAppButton
              size="lg"
              message="Hi Hadi, I'd like to book a full body home service massage. My area is:"
            >
              Book now on WhatsApp
            </WhatsAppButton>
          </div>
        </section>
      </main>

      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <h2 className="text-2xl md:text-3xl">Massage by area</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {areaPages.map((a) => (
              <Link key={a.slug} to="/massage/$area" params={{ area: a.slug }} className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:text-primary">
                Massage {a.name}
              </Link>
            ))}
          </div>
          <h2 className="mt-10 text-2xl md:text-3xl">Home, hotel, flat & mobile massage</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {servicePages.map((s) => (
              <Link key={s.slug} to="/services/$service" params={{ service: s.slug }} className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:text-primary">
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-5 py-10 text-sm text-muted-foreground">
          <p className="font-display text-lg text-foreground">GentleGlow — Home Service Only</p>
          <p className="mt-2 max-w-2xl">
            Professional relaxation massage for women in Islamabad and Rawalpindi since 2022.
            Strictly a therapeutic, non-sexual service. Bookings by WhatsApp only.
          </p>
          <LegalLinks />
          <p className="mt-4">© {new Date().getFullYear()} GentleGlow. All rights reserved.</p>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={waLink("Hi Hadi, I'd like to book a home service massage.")}
        target="_blank"
        rel="noopener"
        aria-label="Chat with Hadi on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground transition-transform hover:scale-110"
        style={{ boxShadow: "var(--shadow-soft)" }}
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </div>
  );
}
