import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
const TestimonialsSection: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const handlePrevious = () => {
    setActiveSlide(prev => prev > 0 ? prev - 1 : 0);
  };
  const handleNext = () => {
    setActiveSlide(prev => prev < 1 ? prev + 1 : 1);
  };
  return <section className="w-full bg-black py-[21px] pb-[49px]">
      <div className="w-full max-w-[1440px] mx-auto px-[53px] max-md:px-5">
        <h2 className="bg-gradient-to-r from-[#FFAA00] to-[#925003] bg-clip-text text-transparent text-[54px] font-bold font-inter leading-[62px] tracking-[-1.2px] text-center mb-[78px] max-md:text-[42px] max-md:leading-[48px] max-sm:text-[36px] max-sm:leading-[42px]">
          O que nossos clientes dizem:
        </h2>
        
        <div className="flex gap-[30px] justify-center mb-[30px] max-md:flex-col max-md:items-center max-md:gap-6">
          <div className="w-96 h-[736px] shadow-[0_24px_48px_rgba(0,0,0,0.05)] rounded-lg overflow-hidden max-md:w-80 max-md:h-96 max-sm:w-72 max-sm:h-80">
            <video src="/videos/depoimento-1.mp4" controls className="w-full h-full object-cover rounded-lg" poster="/img/capas/capa-depoimento-1.png">
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </div>
          
          <div className="w-96 h-[736px] shadow-[0_24px_48px_rgba(0,0,0,0.05)] rounded-lg overflow-hidden max-md:w-80 max-md:h-96 max-sm:w-72 max-sm:h-80">
            <video src="/videos/depoimento-2.mp4" controls className="w-full h-full object-cover rounded-lg" poster="/img/capas/capa-depoimento-2.png">
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </div>
          
          <div className="w-96 h-[745px] shadow-[0_24px_48px_rgba(0,0,0,0.05)] rounded-lg overflow-hidden max-md:w-80 max-md:h-96 max-sm:w-72 max-sm:h-80">
            <video src="/videos/depoimento-3.mp4" controls className="w-full h-full object-cover rounded-lg" poster="/img/capas/capa-depoimento-3.png">
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </div>
        </div>
        
        {/* Botões de navegação circulares */}
        
        
        {/* Divisória com estrela */}
        <div className="relative flex items-center justify-center">
          
          
        </div>
      </div>
    </section>;
};
export default TestimonialsSection;