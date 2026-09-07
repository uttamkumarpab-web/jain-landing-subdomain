import { Poppins } from "next/font/google";
import Script from "next/script";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Jain Online MBA 2026 - Fees, Eligibility & Specializations",
  description:
    "Explore Jain Online MBA 2026 including fees, eligibility, admission process, specializations, syllabus and career support. Check program details and apply online.",
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/#webpage`,
  url: SITE_URL,
  name: "Jain Online MBA 2026 – Fees, Admission, Eligibility & Specializations",
  description:
    "Explore Jain Online MBA 2026 including fees, eligibility, admission process, specializations, syllabus and career support.",
  inLanguage: "en-IN",
  isPartOf: {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Jain Online MBA",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-poppins text-gray-800 antialiased`}
      >
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        {children}
      </body>
    </html>
  );
}