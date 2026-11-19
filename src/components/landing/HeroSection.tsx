
import React from "react";
import TaxSimulatorModal from "@/components/forms/TaxSimulatorModal";
import { useTaxSimulator } from "@/hooks/useTaxSimulator";

const HeroSection: React.FC = () => {
  const { isModalOpen, openModal, closeModal } = useTaxSimulator();

  return (
    <section className="w-full min-h-[600px] flex items-center justify-center px-6 relative">
      {/* Content - Centralizado */}
      <div className="w-full max-w-[1440px] mx-auto relative z-10">
        <div className="flex justify-center">
          {/* Conteúdo centralizado */}
          <div className="max-w-4xl text-center space-y-8" data-aos="fade-up">
            <h1 className="site-heading text-[54px] font-bold font-inter leading-[62px] tracking-[-1px] max-md:text-[42px] max-md:leading-[48px] max-sm:text-[36px] max-sm:leading-[42px]">
              Somos cientistas da riqueza e da prosperidade
            </h1>
            
            <p className="text-slate-800 text-xl font-normal font-inter leading-7 max-md:text-lg max-sm:text-base">
              Somos uma <span className="text-[#925003] font-bold">contabilidade especializada!</span> Atualmente atendemos <span className="text-[#925003] font-bold">+1.600 empresas</span>, entre os segmentos de farmácias, drogarias, farmácias de manipulação, distribuidoras e indústrias farmacêuticas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-8 justify-center">
              <button 
                onClick={openModal}
                className="btn-simulador"
              >
                <span className="glow"></span>
                <span className="glow"></span>
                <span className="glow"></span>
                <span className="glow"></span>
                <span className="label">Simulador Tributário</span>
              </button>
              
              <a 
                href="https://wa.me/5511994453204?text=Ol%C3%A1%2C%20vim%20do%20site.%20Pode%20me%20ajudar%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="h-14 px-8 py-5 bg-transparent border-2 border-[#925003] rounded-lg flex justify-center items-center transition-all duration-300 hover:bg-[#FFAA00]/10"
              >
                <div className="text-center text-[#925003] text-lg font-medium font-inter leading-8 max-md:text-base max-sm:text-sm">
                  Entrar em contato
                </div>
              </a>
            </div>
            
            <p className="text-slate-600 text-sm font-normal font-inter italic">
              Uma contabilidade que te entende!
            </p>
          </div>
        </div>
      </div>

      <TaxSimulatorModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default HeroSection;
