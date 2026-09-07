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
import FaqSection from "@/components/Faqsection";
import EligibilitySection from "@/components/Eligibility";
import JainSpecializations from "@/components/Specializations";
import JainOverview from "@/components/Overview";


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <JainOverview />
        <RankingsSection />
        <WhyChooseSection />
        <EligibilitySection />
        <JainSpecializations />
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
