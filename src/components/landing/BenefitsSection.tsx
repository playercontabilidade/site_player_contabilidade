
import React, { useId } from "react";
import ContactButton from "./ContactButton";

interface BenefitItemProps {
  panel: "entregas" | "financeiro" | "atendimento";
  title: string;
  description: string;
  delay?: number;
}

const notebookPanels = {
  entregas: {
    frame: "funcionalidade-1.png",
    screen: "26.5,112 231,35 223,178 31,255",
    transform: "matrix3d(0.5674234973,-0.2019863388,0,0.0000956284,0.0175054645,0.4266202186,0,0.0001775956,0,0,1,0,26.5,112,0,1)",
  },
  financeiro: {
    frame: "funcionalidade-2.png",
    screen: "63,95 310,95 310,255 63,255",
    transform: "matrix3d(0.6586666667,0,0,0,0,0.4266666667,0,0,0,0,1,0,63,95,0,1)",
  },
  atendimento: {
    frame: "funcionalidade-3.png",
    screen: "49,64 282,77 254,228 29,228",
    transform: "matrix3d(0.6860750552,0.0523443709,0,0.0002295806,-0.0497551729,0.4654650773,0,0.0001233848,0,0,1,0,49,64,0,1)",
  },
};

const BenefitItem: React.FC<BenefitItemProps> = ({
  panel,
  title,
  description,
  delay = 0
}) => {
  const notebook = notebookPanels[panel];
  const screenId = useId().replace(/:/g, "");

  return (
    <div className="w-full max-w-[1027px] px-8 py-8 site-card rounded-md border border-slate-200 flex gap-[37px] mb-16 max-md:flex-col max-md:items-center" data-aos="fade-up" data-aos-delay={delay}>
      <div className="w-72 max-w-full h-72 flex items-center flex-shrink-0">
        <svg viewBox="0 0 375 375" width="375" height="375" className="w-full h-auto" role="img" aria-label={`Tela do Impostograma: ${title}`}>
          <defs>
            <clipPath id={screenId} clipPathUnits="userSpaceOnUse">
              <polygon points={notebook.screen} />
            </clipPath>
          </defs>
          <image href={`/img/funcionalidades/${notebook.frame}`} width="375" height="375" />
          <g clipPath={`url(#${screenId})`}>
            <polygon points={notebook.screen} fill="#160b35" />
            <foreignObject width="375" height="375">
              <div style={{ width: 375, height: 375, overflow: "hidden", position: "relative", transformOrigin: "0 0", transform: notebook.transform }}>
                <img
                  src={`/img/funcionalidades/impostograma-${panel}.png`}
                  alt=""
                  style={{
                    display: "block",
                    position: "absolute",
                    maxWidth: "none",
                    width: panel === "atendimento" ? "110.1274%" : "100%",
                    height: panel === "atendimento" ? "112.8689%" : "100%",
                    left: panel === "atendimento" ? "-5.2083%" : 0,
                    top: panel === "atendimento" ? "-6.4935%" : 0,
                  }}
                />
              </div>
            </foreignObject>
          </g>
        </svg>
      </div>
      <div className="flex-1 max-md:w-full">
        <h3 className="site-heading bg-gradient-to-r from-[#FFAA00] to-[#925003] bg-clip-text text-transparent text-[42px] font-bold font-inter leading-[50px] mb-[18px] max-md:text-[36px] max-md:leading-[42px] max-sm:text-[28px] max-sm:leading-[34px]">
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
    <section className="w-full site-light py-24 relative">
      {/* Linha divisória amarela no topo */}
      <div className="w-full h-4 absolute top-0 left-0 bg-gradient-to-b from-orange-400 via-amber-500 to-orange-300" />
      
      <div className="w-full max-w-[1440px] mx-auto px-6 pt-16">
        <div className="max-w-[1090px] mx-auto">
          <h2 className="site-heading bg-gradient-to-r from-[#FFAA00] to-[#925003] bg-clip-text text-transparent text-[54px] font-bold font-inter text-center mb-16 max-md:text-[42px] max-md:leading-[48px] max-sm:text-[36px] max-sm:leading-[42px]" data-aos="fade-up">
            Ainda mais benefícios:
          </h2>
          
          <div className="flex flex-col items-center">
            <BenefitItem panel="entregas" title="Agenda de entregas controladas pelo robô da Player" description="Nosso robô, com leitura de arquivos e envio automático, monitora todos os processos, minimizando assim qualquer risco de eventuais multas por perda de prazos." delay={200} />
            
            <BenefitItem panel="financeiro" title="Precificação descomplicada para lucrar mais!" description="Estratégias para oferecer preços melhores que a concorrência sem risco de prejuízos. Não adianta vender barato se você estiver perdendo dinheiro ou desrespeitando o PMC." delay={400} />
            
            <BenefitItem panel="atendimento" title="Contato e atendimento personalizado, pelo canal que você preferir." description="Nosso time de atendimento ao cliente está disponível de segunda a sexta-feira para auxiliar nas suas dúvidas, independente do seu plano de serviços." delay={600} />
            
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
