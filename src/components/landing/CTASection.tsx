
import React from "react";
import { useTaxSimulator } from "@/hooks/useTaxSimulator";

const CTASection: React.FC = () => {
  const { openModal } = useTaxSimulator();

  return (
    <section className="w-full bg-black py-16 relative overflow-hidden">
      <img 
        className="w-[1465.60px] h-[916px] absolute left-[-27px] top-[-159px] opacity-25" 
        src="/img/hero/hero-bg.png"
        alt="Background" 
      />
      
      <div className="w-full max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="max-w-[1035px] px-24 py-7 mx-auto rounded-[40px] bg-gradient-to-br from-orange-400/60 via-amber-500/60 to-orange-300/60 outline outline-2 outline-offset-[-2px] outline-orange-400 backdrop-blur-[30px] max-md:px-8 max-sm:px-4" data-aos="fade-up">
          <h2 className="text-white text-[42px] font-bold font-inter leading-[50px] text-center mb-6 max-md:text-[36px] max-md:leading-[42px] max-sm:text-[28px] max-sm:leading-[34px]">
            Quer saber quanto dinheiro você pode está perdendo ao pagar impostos
            a mais indevidamente?
          </h2>
          <div className="flex justify-center">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
