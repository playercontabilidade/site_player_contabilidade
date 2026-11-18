
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import SpecialtiesSection from "@/components/landing/SpecialtiesSection";
import AdvantagesSection from "@/components/landing/AdvantagesSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";
import CookieConsent from "@/components/common/CookieConsent";
import WhatsAppFloatingButton from "@/components/common/WhatsAppFloatingButton";
import { TaxSimulatorProvider } from "@/hooks/useTaxSimulator";
import TaxSimulatorModal from "@/components/forms/TaxSimulatorModal";
import { useTaxSimulator } from "@/hooks/useTaxSimulator";
import { Toaster } from "@/components/ui/toaster";

const IndexContent: React.FC = () => {
  const { isModalOpen, closeModal } = useTaxSimulator();
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="w-full bg-black">
      <header 
        className="relative min-h-[100vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/img/hero/hero-bg.png')" }}
      >
        <Navbar />
        <HeroSection />
      </header>
      
      <main>
        <SpecialtiesSection />
        <AdvantagesSection />
        <TestimonialsSection />
        <BenefitsSection />
        
        <CTASection />
      </main>
      
      <Footer />
      <CookieConsent />
      <WhatsAppFloatingButton />
      <TaxSimulatorModal isOpen={isModalOpen} onClose={closeModal} />
      <Toaster />
    </div>
  );
};

const Index: React.FC = () => {
  return (
    <TaxSimulatorProvider>
      <IndexContent />
    </TaxSimulatorProvider>
  );
};

export default Index;
