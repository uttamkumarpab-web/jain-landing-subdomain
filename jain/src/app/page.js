import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import RankingsSection from "@/components/RankingsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import CertificateSection from "@/components/CertificateSection";
import ProgrammeFeeSection from "@/components/ProgrammeFeeSection";
import AdmissionProcessSection from "@/components/AdmissionProcessSection";
import LearnersSection from "@/components/LearnersSection";
import CtaSection from "@/components/CtaSection";
import FooterSection from "@/components/FooterSection";
import PopupForm from "@/components/PopupForm";
import { SITE_URL } from "@/lib/site";
import FaqSection from "@/components/Faqsection";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <main>
        <HeroSection />
        <RankingsSection />
        <WhyChooseSection />
        <CertificateSection />
        <ProgrammeFeeSection />
        <AdmissionProcessSection />
        <LearnersSection />
        <FaqSection />
        <CtaSection />
      </main>
      <FooterSection />
      <PopupForm />
    </>
  );
}
