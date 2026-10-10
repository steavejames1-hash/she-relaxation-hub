import { createFileRoute, notFound } from "@tanstack/react-router";
import { SeoLanding, seoHead } from "@/components/SeoLanding";
import { servicePages } from "@/lib/seo-pages";

export const Route = createFileRoute("/services/$service")({
  loader: ({ params }) => {
    const page = servicePages.find((p) => p.slug === params.service);
    if (!page) throw notFound();
    return page;
  },
  head: ({ loaderData }) => (loaderData ? seoHead(loaderData, "services") : {}),
  component: () => <SeoLanding page={Route.useLoaderData()} />,
  notFoundComponent: () => <p className="p-10">Service not found.</p>,
});
