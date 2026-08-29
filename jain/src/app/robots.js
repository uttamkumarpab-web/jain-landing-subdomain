import { SITE_URL } from "@/lib/site";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/thank-you", "/api"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
