import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
const StructureSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isMobile = useIsMobile();
  const images = [
    { src: "/img/sobre-nos/equipe-5221.jpg", position: "50% 75%" },
    { src: "/img/sobre-nos/equipe-6724.jpg", position: "50% 70%" },
    { src: "/img/sobre-nos/equipe-0999.jpg", position: "center" },
    { src: "/img/sobre-nos/equipe-3419.jpg", position: "center" },
    { src: "/img/sobre-nos/estrutura-5.jpg", position: "center" },
    { src: "/img/sobre-nos/estrutura-sala-reunioes.jpg", position: "center" },
    { src: "/img/sobre-nos/estrutura-fachada-equipe.jpg", position: "50% 80%" },
    { src: "/img/sobre-nos/estrutura-reuniao-equipe.jpg", position: "50% 75%" },
  ];
  const slideCount = isMobile ? images.length : Math.ceil(images.length / 3);
  const activeSlide = Math.min(currentSlide, slideCount - 1);
  const nextSlide = () => {
    setCurrentSlide((activeSlide + 1) % slideCount);
  };
  const prevSlide = () => {
    setCurrentSlide((activeSlide - 1 + slideCount) % slideCount);
  };
  return <section className="w-full bg-black py-16">
      <div className="w-full max-w-[1440px] mx-auto px-6">
        <h2 className="text-[54px] font-bold font-inter leading-[62px] tracking-[-1px] bg-gradient-to-r from-[#FFAA00] to-[#925003] bg-clip-text text-transparent text-center mb-12 max-md:text-[42px] max-md:leading-[48px] max-sm:text-[36px] max-sm:leading-[42px]" data-aos="fade-up">
          Conheça nossa estrutura:
        </h2>
        
        <div className="relative max-w-[1200px] mx-auto" data-aos="fade-up" data-aos-delay="200">
          {/* Desktop version - 3 images */}
          <div className="hidden md:block overflow-hidden rounded-[20px]">
            <div className="flex transition-transform duration-500 ease-in-out" style={{
            transform: `translateX(-${activeSlide * 100}%)`
          }}>
              {Array.from({
              length: Math.ceil(images.length / 3)
            }).map((_, slideIndex) => <div key={slideIndex} className="w-full flex-shrink-0 flex gap-4">
                  {images.slice(slideIndex * 3, (slideIndex + 1) * 3).map((image, index) => <div key={index} className="flex-1">
                      <img src={image.src} style={{ objectPosition: image.position }} alt={`Estrutura ${slideIndex * 3 + index + 1}`} className="w-full h-[300px] object-cover rounded-[12px]" />
                    </div>)}
                </div>)}
            </div>
          </div>

          {/* Mobile version - 1 image */}
          <div className="md:hidden overflow-hidden rounded-[20px]">
            <div className="flex transition-transform duration-500 ease-in-out" style={{
            transform: `translateX(-${activeSlide * 100}%)`
          }}>
              {images.map((image, index) => <div key={index} className="w-full flex-shrink-0">
                  <img src={image.src} style={{ objectPosition: image.position }} alt={`Estrutura ${index + 1}`} className="w-full h-[300px] object-cover" />
                </div>)}
            </div>
          </div>
          
          {/* Navigation arrows - smaller size */}
          <button onClick={prevSlide} className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white/20 backdrop-blur-[12px] border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300">
            <ArrowLeft size={16} />
          </button>
          
          <button onClick={nextSlide} className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white/20 backdrop-blur-[12px] border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300">
            <ArrowRight size={16} />
          </button>
          
          {/* Dots indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({
            length: slideCount
          }).map((_, index) => <button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeSlide ? "bg-[#FFAA00]" : "bg-white/30"}`} />)}
          </div>
        </div>
        
        <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="400">
          <button className="bg-gradient-to-r from-[#FFAA00] to-[#F88805] text-black font-semibold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity">
            Entrar em contato
          </button>
        </div>
        
        {/* Yellow divider */}
        
      </div>
    </section>;
};
export default StructureSection;
