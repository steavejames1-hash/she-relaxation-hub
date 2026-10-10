import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import logoText from "@/assets/logo-text.png";
import { servicePolicy } from "@/lib/service-policy";

export const LEGAL_EMAIL = "hadimassage@gmail.com";

export function legalHead(title: string, description: string, path: string) {
  const t = `${title} | GentleGlow`;
  return {
    meta: [
      { title: t },
      { name: "description", content: description },
      { property: "og:title", content: t },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: path },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: path }],
  };
}

export function LegalLinks() {
  const c = "hover:text-foreground underline-offset-4 hover:underline";
  return (
    <nav className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
      <Link to="/privacy-policy" className={c}>Privacy Policy</Link>
      <Link to="/terms" className={c}>Terms & Conditions</Link>
      <Link to="/disclaimer" className={c}>Disclaimer</Link>
      <Link to="/cancellation-policy" className={c}>Cancellation Policy</Link>
      <a href={`mailto:${LEGAL_EMAIL}`} className={c}>{LEGAL_EMAIL}</a>
    </nav>
  );
}

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto max-w-3xl px-5 py-5">
          <Link to="/" className="inline-block" aria-label="GentleGlow — Home Service">
            <img src={logoText} alt="GentleGlow — Home Service, Islamabad & Rawalpindi" className="h-9 w-auto" width={1600} height={544} />
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-5 py-12">
        <h1 className="font-display text-4xl">{title}</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: October 10, 2026</p>
        <div className="mt-8 space-y-6 leading-relaxed text-muted-foreground [&_h2]:mt-8 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:text-foreground [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1">
          {children}
          <h2>Training and scope of service</h2>
          <p>Hadi, GentleGlow's male therapist, has completed the online Udemy course{" "}
            <a className="text-primary underline" href={servicePolicy.courseUrl} target="_blank" rel="noopener noreferrer">{servicePolicy.courseName}</a>.
            {" "}This is skills-based relaxation massage training, not a government licence, medical qualification or permission to practise physiotherapy. Course completion does not establish government approval of this business.
          </p>
          <p>GentleGlow provides professional, non-sexual, non-medical relaxation and wellness massage through home visits for women aged {servicePolicy.minimumAge} and over in Islamabad and Rawalpindi. We do not diagnose conditions, prescribe treatment, provide rehabilitation or promise a cure. Applicable local business and regulatory requirements remain separate from this course.</p>
          <h2>Contact</h2>
          <p>
            Questions about this page? Email{" "}
            <a className="text-primary underline" href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a>{" "}
            or message us on{" "}
            <a className="text-primary underline" href="https://wa.me/15514305027" target="_blank" rel="noopener noreferrer">WhatsApp</a>.
          </p>
        </div>
      </main>
      <footer className="border-t border-border bg-secondary">
        <div className="mx-auto max-w-3xl px-5 py-8 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} GentleGlow. All rights reserved.</p>
          <LegalLinks />
        </div>
      </footer>
    </div>
  );
}
