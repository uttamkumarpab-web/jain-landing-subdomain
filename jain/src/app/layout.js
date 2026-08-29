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
  title: "Jain University Online MBA | Fees & Admission 2026",
  description:
    "Get an MBA degree from JAIN Online University. UGC-entitled, globally ranked, with 100% placement assistance. Admissions are closing soon.",
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-poppins text-gray-800 antialiased`}
      >
        {children}

        {/* Google Ads conversion tags */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17511675640"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-17511675640');`}
        </Script>
      </body>
    </html>
  );
}
