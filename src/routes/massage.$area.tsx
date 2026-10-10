import { createFileRoute, notFound } from "@tanstack/react-router";
import { SeoLanding, seoHead } from "@/components/SeoLanding";
import { areaPages } from "@/lib/seo-pages";

export const Route = createFileRoute("/massage/$area")({
  loader: ({ params }) => {
    const page = areaPages.find((p) => p.slug === params.area);
    if (!page) throw notFound();
    return page;
  },
  head: ({ loaderData }) => (loaderData ? seoHead(loaderData, "massage") : {}),
  component: () => <SeoLanding page={Route.useLoaderData()} />,
  notFoundComponent: () => <p className="p-10">Area not found.</p>,
});
