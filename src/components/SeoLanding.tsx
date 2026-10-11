import { Link } from "@tanstack/react-router";
import logoText from "@/assets/logo-text.png";
import { LegalLinks } from "@/components/LegalPage";
import { areaPages, servicePages, type SeoPage } from "@/lib/seo-pages";
import {
  absoluteUrl,
  OG_IMAGE,
  SITE_URL,
  trimDescription,
  WHATSAPP_URL as WA,
} from "@/lib/site";

export function seoHead(p: SeoPage, base: string) {
  const title = p.title ?? `${p.h1} | GentleGlow`;
  const description = p.description ?? `${trimDescription(p.intro)} Book on WhatsApp.`;
  const path = `/${base}/${p.slug}`;
  const url = absoluteUrl(path);
  const isService = base === "services";
  const locality = p.city.split(" ")[0]; // Islamabad | Rawalpindi
  const placeName = p.name === locality ? locality : `${p.name} (${locality})`;

  const mainEntity = isService
    ? {
        "@context": "https://schema.org",
        "@type": "Service",
        name: p.name,
        description: p.intro,
        url,
        serviceType: p.h1,
        provider: {
          "@type": "HealthAndBeautyBusiness",
          name: "GentleGlow — Home Service",
          url: SITE_URL,
          image: OG_IMAGE,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Islamabad",
            addressCountry: "PK",
          },
        },
        areaServed: [
          { "@type": "City", name: "Islamabad" },
          { "@type": "City", name: "Rawalpindi" },
        ],
      }
    : {
        "@context": "https://schema.org",
        "@type": "HealthAndBeautyBusiness",
        name: `GentleGlow — ${p.name}`,
        description: p.intro,
        url,
        image: OG_IMAGE,
        address: {
          "@type": "PostalAddress",
          addressLocality: locality,
          addressCountry: "PK",
        },
        areaServed: [
          { "@type": "Place", name: placeName },
          { "@type": "City", name: locality },
        ].filter((v, i, arr) => arr.findIndex((x) => x.name === v.name) === i),
      };

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: isService ? "service" : "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(mainEntity) },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: p.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
            { "@type": "ListItem", position: 2, name: p.name, item: url },
          ],
        }),
      },
    ],
  };
}

const waLink = (msg: string) => `${WA}?text=${encodeURIComponent(msg)}`;

/** Rotating selection of same-city areas so every page links a different nearby set. */
function nearbyAreas(page: SeoPage): SeoPage[] {
  const pool = areaPages.filter((a) => a.city === page.city && a.slug !== page.slug);
  if (pool.length === 0) return [];
  const idx = Math.max(0, areaPages.findIndex((a) => a.slug === page.slug));
  const picked: SeoPage[] = [];
  for (let i = 0; i < Math.min(5, pool.length); i++) {
    const p = pool[(idx + i) % pool.length];
    if (p) picked.push(p);
  }
  return picked;
}

export function SeoLanding({ page }: { page: SeoPage }) {
  const isService = servicePages.some((s) => s.slug === page.slug);
  const msg = encodeURIComponent(`Hi Hadi, I'd like to book a home service massage in ${page.name}. Please share prices and times.`);
  const nearby = isService ? [] : nearbyAreas(page);
  const expect = [
    {
      t: "You message on WhatsApp",
      d: isService
        ? "Tell Hadi what you need and your address in Islamabad or Rawalpindi."
        : `Tell Hadi your address in ${page.name} and the time that suits you.`,
    },
    {
      t: "Price and slot confirmed",
      d: "You get the exact price and a confirmed appointment before anything else happens.",
    },
    {
      t: "Setup at your door",
      d: "Hadi arrives with a clean massage table, fresh linen and oils. Nothing for you to arrange.",
    },
    {
      t: "Your session, your pressure",
      d: "A professional massage tailored to the pressure you are comfortable with, then everything is packed away.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <Link to="/" aria-label="GentleGlow home">
            <img src={logoText} alt="GentleGlow — Women's Home Massage Therapy" className="h-10 w-auto" width={915} height={261} />
          </Link>
          <a href={waLink(`Hi Hadi, I'd like to book a home service massage in ${page.name}. Please share prices and times.`)} target="_blank" rel="noopener" className="rounded-full bg-whatsapp px-5 py-2.5 text-sm font-semibold text-whatsapp-foreground">
            Book on WhatsApp
          </a>
        </div>
      </header>
      <main>
        <section style={{ background: "var(--gradient-calm)" }}>
          <div className="mx-auto max-w-5xl px-5 py-16">
            <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
              <Link to="/" className="underline-offset-4 hover:text-primary hover:underline">Home</Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <span>{page.name}</span>
            </nav>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary">Home service only · Ladies only · Since 2022</p>
            <h1 className="mt-4 text-4xl leading-tight md:text-5xl">{page.h1}</h1>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{page.intro}</p>
            <ul className="mt-6 grid gap-2 text-muted-foreground sm:grid-cols-2">
              {page.points.map((x) => (
                <li key={x} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{x}</li>
              ))}
            </ul>
            <a href={waLink(`Hi Hadi, I'd like to book a home service massage in ${page.name}. Please share prices and times.`)} target="_blank" rel="noopener" className="mt-8 inline-flex rounded-full bg-whatsapp px-8 py-4 font-semibold text-whatsapp-foreground" style={{ boxShadow: "var(--shadow-soft)" }}>
              Message Hadi on WhatsApp
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-5 py-14">
          <h2 className="text-3xl">What to expect</h2>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2">
            {expect.map((s, i) => (
              <li key={s.t} className="rounded-2xl border border-border bg-card p-6">
                <p className="font-display text-xl text-primary">{String(i + 1).padStart(2, "0")}</p>
                <p className="mt-2 font-semibold">{s.t}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="border-y border-border bg-card">
          <div className="mx-auto max-w-3xl px-5 py-14">
            <h2 className="text-3xl">Frequently asked questions</h2>
            <div className="mt-6 divide-y divide-border">
              {page.faqs.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="cursor-pointer list-none text-lg font-semibold marker:hidden">
                    <span className="flex items-start justify-between gap-4">
                      {f.q}
                      <span className="mt-1 text-primary transition-transform group-open:rotate-45">+</span>
                    </span>
                  </summary>
                  <p className="mt-3 text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
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
          {nearby.length > 0 && (
            <>
              <h2 className="mt-12 text-3xl">Nearby {page.city === "Rawalpindi" ? "Rawalpindi" : "Islamabad"} areas</h2>
              <div className="mt-6 flex flex-wrap gap-2">
                {nearby.map((a) => (
                  <Link key={a.slug} to="/massage/$area" params={{ area: a.slug }} className="rounded-full border border-primary/30 bg-secondary px-4 py-2 text-sm text-foreground hover:text-primary">
                    Massage {a.name}
                  </Link>
                ))}
              </div>
            </>
          )}
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
