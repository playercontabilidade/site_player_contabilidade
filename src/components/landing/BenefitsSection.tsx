
import React from "react";
import ContactButton from "./ContactButton";

interface BenefitItemProps {
  icon: string;
  title: string;
  description: string;
  delay?: number;
}

const BenefitItem: React.FC<BenefitItemProps> = ({
  icon,
  title,
  description,
  delay = 0
}) => {
  return (
    <div className="w-full max-w-[1027px] px-8 py-8 bg-white rounded-md border border-slate-200 flex gap-[37px] mb-16 max-md:flex-col max-md:items-center" data-aos="fade-up" data-aos-delay={delay}>
      <div className="w-72 h-72 relative overflow-hidden flex-shrink-0">
        <img src={icon} className="w-full h-full object-contain" alt={title} />
      </div>
      <div className="flex-1 max-md:w-full">
        <h3 className="bg-gradient-to-r from-[#FFAA00] to-[#925003] bg-clip-text text-transparent text-[42px] font-bold font-inter leading-[50px] mb-[18px] max-md:text-[36px] max-md:leading-[42px] max-sm:text-[28px] max-sm:leading-[34px]">
          {title}
        </h3>
        <p className="text-neutral-900 text-xl font-normal font-inter leading-8 text-justify max-md:text-lg max-sm:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

const BenefitsSection: React.FC = () => {
  return (
    <section className="w-full bg-zinc-100 py-24 relative">
      {/* Linha divisória amarela no topo */}
      <div className="w-full h-4 absolute top-0 left-0 bg-gradient-to-b from-orange-400 via-amber-500 to-orange-300" />
      
      <div className="w-full max-w-[1440px] mx-auto px-6 pt-16">
        <div className="max-w-[1090px] mx-auto">
          <h2 className="bg-gradient-to-r from-[#FFAA00] to-[#925003] bg-clip-text text-transparent text-[54px] font-bold font-inter text-center mb-16 max-md:text-[42px] max-md:leading-[48px] max-sm:text-[36px] max-sm:leading-[42px]" data-aos="fade-up">
            Ainda mais benefícios:
          </h2>
          
          <div className="flex flex-col items-center">
            <BenefitItem icon="/img/funcionalidades/funcionalidade-1.png" title="Agenda de entregas controladas pelo robô da Player" description="Nosso robô, com leitura de arquivos e envio automático, monitora todos os processos, minimizando assim qualquer risco de eventuais multas por perda de prazos." delay={200} />
            
            <BenefitItem icon="/img/funcionalidades/funcionalidade-2.png" title="Precificação descomplicada para lucrar mais!" description="Estratégias para oferecer preços melhores que a concorrência sem risco de prejuízos. Não adianta vender barato se você estiver perdendo dinheiro ou desrespeitando o PMC." delay={400} />
            
            <BenefitItem icon="/img/funcionalidades/funcionalidade-3.png" title="Contato e atendimento personalizado, pelo canal que você preferir." description="Nosso time de atendimento ao cliente está disponível de segunda a sexta-feira para auxiliar nas suas dúvidas, independente do seu plano de serviços." delay={600} />
            
            <div className="mt-[78px]" data-aos="fade-up" data-aos-delay="800">
              <ContactButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
