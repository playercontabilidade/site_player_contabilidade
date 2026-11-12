
import React from "react";
import { Phone, Mail, Instagram, Facebook, MapPin, Headphones, AlertTriangle } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer id="contato" className="w-full bg-slate-800">
      <div className="w-full max-w-[1440px] mx-auto pt-[77px] pb-0 px-[53px] max-sm:pt-10 max-sm:px-5">
        <div className="flex justify-between mb-[50px] max-md:flex-col max-md:items-center max-md:gap-10">
          {/* Primeira coluna - Logo e certificações */}
          <div className="w-72 max-md:w-full" data-aos="fade-up">
            <img
              src="/img/logo/logo-rodape.png"
              className="w-[276px] h-[90px] mb-[13px]"
              alt="Logo Footer"
            />
            <div className="text-orange-200/75 text-base font-normal font-inter leading-[22.72px] mb-[13px] max-md:text-sm max-sm:text-xs">
              <span>
                "Sem dados você é apenas uma pessoa qualquer com uma
                opinião."
              </span>
              <br />
              <strong>
                William Edwards Deming
              </strong>
            </div>
            <div className="grid grid-cols-3 gap-2.5 mb-4">
              {Array.from({ length: 9 }, (_, i) => (
                <img
                  key={i + 1}
                  src={`/img/selos/selo-${i + 1}.png`}
                  className="w-11 h-11"
                  alt={`Selo ${i + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Segunda coluna - Informações de contato */}
          <div className="w-80 h-52 max-md:w-full" data-aos="fade-up" data-aos-delay="200">
            <div className="flex items-center gap-2 mb-6">
              <Phone size={20} className="text-amber-500 flex-shrink-0" />
              <div className="text-orange-200/75 text-base font-normal font-inter max-md:text-sm max-sm:text-xs">
                0800 800 1385
              </div>
            </div>
            <div className="flex items-center gap-2 mb-6">
              <Phone size={20} className="text-amber-500 flex-shrink-0" />
              <div className="text-orange-200/75 text-base font-normal font-inter max-md:text-sm max-sm:text-xs">
                (61) 3995-0174
              </div>
            </div>
            <div className="flex items-center gap-2 mb-6">
              <Mail size={20} className="text-amber-500 flex-shrink-0" />
              <div className="text-orange-200/75 text-base font-normal font-inter max-md:text-sm max-sm:text-xs">
                bemvindo@playercontabilidade.com
              </div>
            </div>
            <div className="flex items-center gap-2 mb-6">
              <Instagram size={20} className="text-amber-500 flex-shrink-0" />
              <div className="text-orange-200/75 text-base font-normal font-inter max-md:text-sm max-sm:text-xs">
                @PlayerContabilidade
              </div>
            </div>
            <div className="flex items-center gap-2 mb-6">
              <Facebook size={20} className="text-amber-500 flex-shrink-0" />
              <div className="text-orange-200/75 text-base font-normal font-inter max-md:text-sm max-sm:text-xs">
                /PlayerContabilidade
              </div>
            </div>
            
            {/* Botões SAC e Denuncie */}
            <div className="flex gap-3 mt-4">
              <a 
                href="https://wa.me/08008001385"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 rounded-lg px-3 py-2 transition-all duration-300 hover:bg-amber-500/30"
              >
                <Headphones size={16} className="text-amber-500" />
                <span className="text-amber-500 text-sm font-medium">SAC</span>
              </a>
              
              <a 
                href="https://wa.me/08008001385"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-red-500/20 border border-red-500/30 rounded-lg px-3 py-2 transition-all duration-300 hover:bg-red-500/30"
              >
                <AlertTriangle size={16} className="text-red-400" />
                <span className="text-red-400 text-sm font-medium">Denuncie</span>
              </a>
            </div>
          </div>
          
          {/* Terceira coluna - Endereços */}
          <div className="w-80 h-60 max-md:w-full" data-aos="fade-up" data-aos-delay="400">
            <div className="flex gap-4 mb-[19px]">
              <MapPin size={20} className="text-amber-500 flex-shrink-0 mt-1" />
              <div className="w-72">
                <span className="text-orange-200/75 text-base font-bold font-inter max-md:text-sm max-sm:text-xs">
                  Centro de Processos:
                </span>
                <br />
                <span className="text-orange-200/75 text-base font-normal font-inter max-md:text-sm max-sm:text-xs">
                  Unidade Farma: Q. 103 Sul Av JK Nº 140 Edifício JK Bussines
                  Center, Sala 901
                </span>
              </div>
            </div>
            <div className="flex gap-4 mb-[19px]">
              <MapPin size={20} className="text-amber-500 flex-shrink-0 mt-1" />
              <div className="w-72">
                <span className="text-orange-200/75 text-base font-bold font-inter max-md:text-sm max-sm:text-xs">
                  Unidade Varejo:
                </span>
                <br />
                <span className="text-orange-200/75 text-base font-normal font-inter max-md:text-sm max-sm:text-xs">
                  Unidade Farma: Q. 103 Sul Av JK Nº 140 Edifício JK Bussines
                  Center, Sala 701
                </span>
              </div>
            </div>
            <div className="flex gap-4 mb-[19px]">
              <MapPin size={20} className="text-amber-500 flex-shrink-0 mt-1" />
              <div className="w-72">
                <span className="text-orange-200/75 text-base font-bold font-inter max-md:text-sm max-sm:text-xs">
                  Sede:
                </span>
                <br />
                <span className="text-orange-200/75 text-base font-normal font-inter max-md:text-sm max-sm:text-xs">
                  Arso 171 Lote 04 Av. Joaquim Teotônio Segurado
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright section */}
        <div className="w-full h-16 bg-slate-800">
          <div className="w-full max-w-[503px] mx-auto py-[15px] text-center text-orange-200/50 text-base font-normal font-inter max-md:text-sm max-sm:text-xs">
            <span>
              Copyright © 2025 - Player Contabilidade | CNPJ 47.799.371/0001-49
            </span>
            <br />
            <span>
              CRC - TO 006691/O-7 | CRC - TO 000781/O-6 | CRA - TO 20-03828
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
