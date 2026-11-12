
import React from "react";

const SpecialtiesSection: React.FC = () => {
  return (
    <section className="w-full bg-[#1A2B5C] py-20 px-6">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="text-center space-y-8" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="text-[#FFAA00]">Somos uma</span><br />
            <span className="text-[#FFAA00]">Contabilidade Especializada</span>
          </h2>
          
          <p className="text-white text-lg max-w-4xl mx-auto mb-12">
            Mais de 1.000 empresas atendidas nos setores que mais exigem precisão e responsabilidade fiscal. Conheça nossas áreas de especialidade:
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center max-w-4xl mx-auto">
            <a 
              href="https://wa.me/5511994453204?text=Ol%C3%A1%2C%20vim%20do%20site.%20Gostaria%20de%20saber%20mais%20sobre%20Contabilidade%20Especializada%20em%20Farm%C3%A1cias%20e%20Drogarias."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto bg-gradient-to-r from-[#FFAA00] to-[#F88805] rounded-2xl p-8 text-center transition-transform duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="text-black text-sm font-medium mb-2">Contabilidade Especializada em</div>
              <div className="text-black text-2xl font-bold">Farmácias e Drogarias</div>
            </a>
            
            <a 
              href="https://wa.me/5511994453204?text=Ol%C3%A1%2C%20vim%20do%20site.%20Gostaria%20de%20saber%20mais%20sobre%20Contabilidade%20Especializada%20em%20Materiais%20de%20Constru%C3%A7%C3%A3o"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto bg-gradient-to-r from-[#FFAA00] to-[#F88805] rounded-2xl p-8 text-center transition-transform duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="text-black text-sm font-medium mb-2">Contabilidade Especializada em</div>
              <div className="text-black text-2xl font-bold">Materiais de Construção</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
