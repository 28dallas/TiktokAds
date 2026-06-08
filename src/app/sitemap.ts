import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://apexbluesky.co.ke";
  const routes = [
    "",
    "/why-tiktok-ads",
    "/results",
    "/pricing",
    "/free-kit",
    "/blog",
    "/contact",
  ];
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
