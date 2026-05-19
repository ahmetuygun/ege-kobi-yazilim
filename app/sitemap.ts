import type { MetadataRoute } from "next";

import { SITE_ORIGIN } from "@/lib/site-assets";

const ROUTES: MetadataRoute.Sitemap = [
  { url: SITE_ORIGIN, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
  {
    url: `${SITE_ORIGIN}/dijital-donusum`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    url: `${SITE_ORIGIN}/uretim`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    url: `${SITE_ORIGIN}/tekstil`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    url: `${SITE_ORIGIN}/yapi`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    url: `${SITE_ORIGIN}/iletisim`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.7,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES;
}
