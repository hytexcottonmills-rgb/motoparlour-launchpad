import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HSRPSection from "@/components/HSRPSection";
import LabSection from "@/components/LabSection";
import RestorationSection from "@/components/RestorationSection";
import WholesaleSection from "@/components/WholesaleSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <HSRPSection />
      <LabSection />
      <RestorationSection />
      <WholesaleSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
