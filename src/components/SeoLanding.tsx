import { Link } from "@tanstack/react-router";
import logoText from "@/assets/logo-text-trim.png";
import { LegalLinks } from "@/components/LegalPage";
import { areaPages, servicePages, type SeoPage } from "@/lib/seo-pages";

const WA = "https://wa.me/15514305027";

export function seoHead(p: SeoPage, base: string) {
  const title = `${p.h1} | Hadi Massage`;
  const description = `${p.intro.slice(0, 150)}… Book on WhatsApp.`;
  const path = `/${base}/${p.slug}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: path },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: path }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HealthAndBeautyBusiness",
          name: `Hadi Massage — ${p.name}`,
          description: p.intro,
          areaServed: p.name,
          address: { "@type": "PostalAddress", addressLocality: p.city.split(" ")[0], addressCountry: "PK" },
          url: WA,
        }),
      },
    ],
  };
}

export function SeoLanding({ page }: { page: SeoPage }) {
  const msg = encodeURIComponent(`Hi Hadi, I'd like to book a home service massage in ${page.name}. Please share prices and times.`);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <Link to="/" aria-label="Hadi Massage home">
            <img src={logoText} alt="Hadi Massage" className="h-10 w-auto" width={976} height={221} />
          </Link>
          <a href={`${WA}?text=${msg}`} target="_blank" rel="noopener" className="rounded-full bg-whatsapp px-5 py-2.5 text-sm font-semibold text-whatsapp-foreground">
            Book on WhatsApp
          </a>
        </div>
      </header>
      <main>
        <section style={{ background: "var(--gradient-calm)" }}>
          <div className="mx-auto max-w-5xl px-5 py-16">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Home service only · Ladies only · Since 2022</p>
            <h1 className="mt-4 text-4xl leading-tight md:text-5xl">{page.h1}</h1>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{page.intro}</p>
            <ul className="mt-6 grid gap-2 text-muted-foreground sm:grid-cols-2">
              {page.points.map((x) => (
                <li key={x} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{x}</li>
              ))}
            </ul>
            <a href={`${WA}?text=${msg}`} target="_blank" rel="noopener" className="mt-8 inline-flex rounded-full bg-whatsapp px-8 py-4 font-semibold text-whatsapp-foreground" style={{ boxShadow: "var(--shadow-soft)" }}>
              Message Hadi on WhatsApp
            </a>
          </div>
        </section>
        <section className="mx-auto max-w-5xl px-5 py-14">
          <h2 className="text-3xl">Areas we cover</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {areaPages.map((a) => (
              <Link key={a.slug} to="/massage/$area" params={{ area: a.slug }} className="rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground hover:text-primary">
                Massage {a.name}
              </Link>
            ))}
          </div>
          <h2 className="mt-12 text-3xl">Services</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {servicePages.map((s) => (
              <Link key={s.slug} to="/services/$service" params={{ service: s.slug }} className="rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground hover:text-primary">
                {s.name}
              </Link>
            ))}
          </div>
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
