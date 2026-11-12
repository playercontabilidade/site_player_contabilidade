import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Trophy, Eye, Gem } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import StatsSection from "@/components/aboutus/StatsSection";
import StructureSection from "@/components/aboutus/StructureSection";
import CertificationsSection from "@/components/aboutus/CertificationsSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import CTASection from "@/components/landing/CTASection";
import WhatsAppFloatingButton from "@/components/common/WhatsAppFloatingButton";
import { TaxSimulatorProvider } from "@/hooks/useTaxSimulator";
import TaxSimulatorModal from "@/components/forms/TaxSimulatorModal";
import { useTaxSimulator } from "@/hooks/useTaxSimulator";

const AboutUsContent: React.FC = () => {
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
      <header className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/img/sobre-nos/sobre-nos-bg.png')" }}>
        <Navbar />
        
        {/* Quem somos section */}
        <div className="w-full max-w-[1440px] mx-auto px-6 pt-32 pb-20">
          <div className="max-w-[900px] mx-auto">
            <h1 className="text-[54px] font-bold font-inter leading-[62px] tracking-[-1px] bg-gradient-to-r from-[#FFAA00] to-[#925003] bg-clip-text text-transparent mb-8 text-center max-md:text-[42px] max-md:leading-[48px] max-sm:text-[36px] max-sm:leading-[42px]" data-aos="fade-up">
              Quem somos?
            </h1>
            <p className="text-orange-200/90 text-xl font-normal font-inter leading-8 mb-16 max-md:text-lg max-sm:text-base" data-aos="fade-up" data-aos-delay="200">
              Somos uma contabilidade especializada no varejo FARMA! Atualmente, atendemos +1.000 empresários entre os segmentos de farmácias, drogarias, farmácias de manipulação, distribuidoras e industrias farmacêuticas. Contamos com estrutura em Palmas (TO) e uma unidade de apoio em São Paulo, totalmente voltadas ao atendimento e processamento do mundo contábil FARMA! Dispomos de um time de 100 especialistas, completamente aptos para atender os setores mais complexos do seu segmento com o melhor da Elisão fiscal, planejamento societário, departamento pessoal e planejamento contábil. Estamos presentes em 24 estados brasileiros.
            </p>

            {/* Missão, Visão, Valores */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Missão */}
              <div className="bg-white/5 backdrop-blur-[12px] border border-white/20 rounded-[20px] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)]" data-aos="fade-up" data-aos-delay="300">
                <div className="flex items-center mb-4">
                  <Trophy size={32} className="text-amber-500 mr-3" />
                  <h3 className="text-amber-500 text-xl font-bold font-inter">MISSÃO</h3>
                </div>
                <p className="text-white text-base font-normal font-inter leading-6">
                  Potencializar resultados empresariais com excelência contábil e consultoria estratégica.
                </p>
              </div>

              {/* Visão */}
              <div className="bg-white/5 backdrop-blur-[12px] border border-white/20 rounded-[20px] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)]" data-aos="fade-up" data-aos-delay="400">
                <div className="flex items-center mb-4">
                  <Eye size={32} className="text-amber-500 mr-3" />
                  <h3 className="text-amber-500 text-xl font-bold font-inter">VISÃO</h3>
                </div>
                <p className="text-white text-base font-normal font-inter leading-6">
                  Ser o maior hub de negócios contábeis no estado do Tocantins até 2027.
                </p>
              </div>

              {/* Valores */}
              <div className="bg-white/5 backdrop-blur-[12px] border border-white/20 rounded-[20px] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)]" data-aos="fade-up" data-aos-delay="500">
                <div className="flex items-center mb-4">
                  <Gem size={32} className="text-amber-500 mr-3" />
                  <h3 className="text-amber-500 text-xl font-bold font-inter">VALORES</h3>
                </div>
                <ul className="text-white text-base font-normal font-inter leading-6 space-y-2">
                  <li>• Foco no cliente</li>
                  <li>• Excelência</li>
                  <li>• Comprometimento</li>
                  <li>• Ética</li>
                  <li>• Inovação</li>
                </ul>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="600">
              <button className="h-14 px-8 py-5 bg-transparent border-2 border-[#FFAA00] rounded-lg flex justify-center items-center mx-auto transition-all duration-300 hover:bg-[#FFAA00]/10">
                <div className="text-center text-[#FFAA00] text-lg font-medium font-inter leading-8 max-md:text-base max-sm:text-sm">
                  Entrar em contato
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Stats Section */}
      <StatsSection />
      
      {/* Structure Section */}
      <StructureSection />
      
      {/* Certifications Section */}
      <CertificationsSection />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* CTA Section */}
      <CTASection />
      
      <Footer />
      <WhatsAppFloatingButton />
      <TaxSimulatorModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

const AboutUs: React.FC = () => {
  return (
    <TaxSimulatorProvider>
      <AboutUsContent />
    </TaxSimulatorProvider>
  );
};

export default AboutUs;
