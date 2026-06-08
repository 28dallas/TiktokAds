import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyAffiliateCTA from "@/components/layout/StickyAffiliateCTA";
import HeroSection from "@/components/sections/HeroSection";
import TickerSection from "@/components/sections/TickerSection";
import WhyTikTokSection from "@/components/sections/WhyTikTokSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import ResultsSection from "@/components/sections/ResultsSection";
import WhoIsItForSection from "@/components/sections/WhoIsItForSection";
import PricingSection from "@/components/sections/PricingSection";
import FAQSection from "@/components/sections/FAQSection";
import AboutSection from "@/components/sections/AboutSection";
import LeadMagnetSection from "@/components/sections/LeadMagnetSection";
import FinalCTASection from "@/components/sections/FinalCTASection";

export default function HomePage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <HeroSection />
        <TickerSection />
        <WhyTikTokSection />
        <HowItWorksSection />
        <ResultsSection />
        <WhoIsItForSection />
        <PricingSection />
        <FAQSection />
        <AboutSection />
        <LeadMagnetSection />
        <FinalCTASection />
      </main>
      <Footer />
      <StickyAffiliateCTA />
    </>
  );
}
