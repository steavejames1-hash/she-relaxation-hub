import { createFileRoute, Link } from "@tanstack/react-router";
import logoText from "@/assets/logo-text.png";
import { LegalLinks } from "@/components/LegalPage";
import { WHATSAPP_URL, absoluteUrl } from "@/lib/site";

const waLink = (msg: string) => `${WHATSAPP_URL}?text=${encodeURIComponent(msg)}`;

export const Route = createFileRoute("/booking-sent")({
  head: () => ({
    meta: [
      { title: "Request received | GentleGlow" },
      { name: "robots", content: "noindex, nofollow" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/booking-sent") }],
  }),
  component: BookingSent,
});

function BookingSent() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto max-w-3xl px-5 py-5">
          <Link to="/" aria-label="GentleGlow home">
            <img src={logoText} alt="GentleGlow — Women's Home Massage Therapy" className="h-9 w-auto" width={915} height={261} />
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-xl px-5 py-20 text-center">
        <p className="text-5xl">🌸</p>
        <h1 className="mt-6 font-display text-4xl">Request received</h1>
        <p className="mt-4 text-muted-foreground">
          Thank you — your booking request has been sent to Hadi. You'll get a message on
          WhatsApp shortly with the exact price and available times.
        </p>
        <p className="mt-2 text-muted-foreground">
          Want it faster? Message directly:
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href={waLink("Hi Hadi, I just sent a booking request on your website.")}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center rounded-full bg-whatsapp px-8 py-4 font-semibold text-whatsapp-foreground"
            style={{ boxShadow: "var(--shadow-soft)" }}
          >
            Chat on WhatsApp now
          </a>
        </div>
        <p className="mt-10">
          <Link to="/" className="text-sm font-semibold text-primary underline-offset-4 hover:underline">
            Back to home
          </Link>
        </p>
      </main>
      <footer className="border-t border-border bg-secondary">
        <div className="mx-auto max-w-3xl px-5 py-8 text-sm text-muted-foreground">
          <LegalLinks />
        </div>
      </footer>
    </div>
  );
}
