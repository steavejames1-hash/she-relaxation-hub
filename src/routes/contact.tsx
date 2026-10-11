import { createFileRoute, Link } from "@tanstack/react-router";
import logoText from "@/assets/logo-text.png";
import { LegalLinks } from "@/components/LegalPage";
import { WHATSAPP_URL, absoluteUrl } from "@/lib/site";

const TITLE = "Book a Home Massage in Islamabad & Rawalpindi | GentleGlow";
const DESCRIPTION =
  "Request a ladies-only home massage in Islamabad or Rawalpindi. Tell us your area and massage type — Hadi confirms price and time on WhatsApp.";

const waLink = (msg: string) => `${WHATSAPP_URL}?text=${encodeURIComponent(msg)}`;

const massageTypes = [
  "Full body relaxation massage",
  "Deep tissue massage",
  "Back, neck & shoulder",
  "Head & foot massage",
  "Not sure yet — please advise",
];

const inputCls =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/contact") },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/contact") }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <Link to="/" aria-label="GentleGlow home">
            <img src={logoText} alt="GentleGlow — Women's Home Massage Therapy" className="h-10 w-auto" width={915} height={261} />
          </Link>
          <a href={waLink("Hi Hadi, I'd like to book a home service massage.")} target="_blank" rel="noopener" className="rounded-full bg-whatsapp px-5 py-2.5 text-sm font-semibold text-whatsapp-foreground">
            Book on WhatsApp
          </a>
        </div>
      </header>
      <main>
        <section style={{ background: "var(--gradient-calm)" }}>
          <div className="mx-auto max-w-2xl px-5 py-16">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Home service only · Ladies only · Since 2022</p>
            <h1 className="mt-4 text-4xl leading-tight md:text-5xl">Book your home massage</h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Fill in the form and Hadi will message you on WhatsApp with the price and
              available times. Prefer to talk right away?{" "}
              <a href={waLink("Hi Hadi, I'd like to book a home service massage.")} target="_blank" rel="noopener" className="font-semibold text-primary underline underline-offset-4">
                Message directly on WhatsApp
              </a>
              .
            </p>
          </div>
        </section>
        <section className="mx-auto max-w-2xl px-5 py-14">
          <form
            name="booking"
            method="POST"
            action="/booking-sent"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="rounded-3xl border border-border bg-card p-7 md:p-9"
            style={{ boxShadow: "var(--shadow-soft)" }}
          >
            <input type="hidden" name="form-name" value="booking" />
            <p className="hidden" style={{ display: "none" }}>
              <label>
                Don't fill this out if you're human: <input name="bot-field" />
              </label>
            </p>
            <div className="grid gap-5">
              <label className="grid gap-2 text-sm font-semibold">
                Your name
                <input type="text" name="name" required autoComplete="name" placeholder="e.g. Ayesha" className={inputCls} />
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                WhatsApp number (including country code)
                <input type="tel" name="whatsapp" required autoComplete="tel" placeholder="e.g. +92 300 1234567" className={inputCls} />
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                Massage type
                <select name="massage-type" required defaultValue="" className={inputCls}>
                  <option value="" disabled>
                    Choose a session…
                  </option>
                  {massageTypes.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                Your location
                <input type="text" name="location" required placeholder="e.g. F-10/4 Islamabad, Bahria Town Rawalpindi, or hotel name" className={inputCls} />
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                Custom note <span className="font-normal text-muted-foreground">(optional — preferred day, time, pressure or anything else)</span>
                <textarea name="note" rows={4} placeholder="e.g. Saturday morning, medium pressure, 90 minutes" className={inputCls} />
              </label>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-whatsapp px-8 py-4 font-semibold text-whatsapp-foreground transition-transform hover:scale-[1.02]"
                style={{ boxShadow: "var(--shadow-soft)" }}
              >
                Send booking request
              </button>
            </div>
            <p className="mt-5 text-sm text-muted-foreground">
              This sends your request to Hadi by email — no payment happens online. You'll get a
              confirmation on WhatsApp with the exact price and time before anything is arranged.
            </p>
          </form>
        </section>
      </main>
      <footer className="border-t border-border bg-secondary">
        <div className="mx-auto max-w-5xl px-5 py-8 text-sm text-muted-foreground">
          <p>Strictly a professional, therapeutic, non-sexual service for women. Prices shared on WhatsApp.</p>
          <LegalLinks />
        </div>
      </footer>
    </div>
  );
}
