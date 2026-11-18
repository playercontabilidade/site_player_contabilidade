
import React from "react";
import ContactButton from "./ContactButton";

const AdvantageItem: React.FC<{
  image: string;
  title: string;
  description: string;
  imageFirst?: boolean;
  delay?: number;
  imagePosition?: string;
}> = ({ image, title, description, imageFirst = true, delay = 0, imagePosition = "center" }) => {
  const content = (
    <>
      {imageFirst ? (
        <>
          <div className="relative" data-aos="fade-right" data-aos-delay={delay}>
            <img
              src={image}
              style={{ objectPosition: imagePosition }}
              className="w-[585px] h-96 rounded-[32px] border-[0.75px] border-white backdrop-blur-xl max-md:w-full max-md:h-64 object-cover"
              alt={title}
            />
          </div>
          <div className="w-[558px] max-md:w-full" data-aos="fade-left" data-aos-delay={delay + 200}>
            <h3 className="bg-gradient-to-r from-[#FFAA00] to-[#925003] bg-clip-text text-transparent text-[42px] font-bold font-inter leading-[50px] mb-5 max-md:text-[36px] max-md:leading-[42px] max-sm:text-[28px] max-sm:leading-[34px]">
              {title}
            </h3>
            <p className="text-orange-200/75 text-xl font-normal font-inter leading-8 text-justify max-md:text-lg max-sm:text-base">
              {description}
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="w-[558px] max-md:w-full" data-aos="fade-right" data-aos-delay={delay}>
            <h3 className="bg-gradient-to-r from-[#FFAA00] to-[#925003] bg-clip-text text-transparent text-[42px] font-bold font-inter leading-[50px] mb-5 max-md:text-[36px] max-md:leading-[42px] max-sm:text-[28px] max-sm:leading-[34px]">
              {title}
            </h3>
            <p className="text-orange-200/75 text-xl font-normal font-inter leading-8 text-justify max-md:text-lg max-sm:text-base">
              {description}
            </p>
          </div>
          <div className="relative" data-aos="fade-left" data-aos-delay={delay + 200}>
            <img
              src={image}
              style={{ objectPosition: imagePosition }}
              className="w-[585px] h-96 rounded-[32px] border-[0.75px] border-white backdrop-blur-xl max-md:w-full max-md:h-64 object-cover"
              alt={title}
            />
          </div>
        </>
      )}
    </>
  );

  return (
    <div className="w-full max-w-[1210px] flex gap-10 items-center mb-20 max-md:flex-col max-md:gap-8">
      {content}
    </div>
  );
};

const AdvantagesSection: React.FC = () => {
  return (
    <section className="w-full bg-black py-[84px]">
      <div className="w-full max-w-[1440px] mx-auto px-6">
        <div className="max-w-[1210px] mx-auto">
          <h2 className="bg-gradient-to-r from-[#FFAA00] to-[#925003] bg-clip-text text-transparent text-[54px] font-bold font-inter leading-[62px] tracking-[-1.2px] text-center mb-[78px] max-md:text-[42px] max-md:leading-[48px] max-sm:text-[36px] max-sm:leading-[42px]" data-aos="fade-up">
            Vantagens que oferecemos:
          </h2>
          
          <div className="flex flex-col items-center">
            <AdvantageItem 
              image="/img/sobre-nos/equipe-0999.jpg"
              title="Preços Customizados"
              description="Nossos contadores especialistas são focados em manter sua empresa sempre regular e pagando apenas os impostos estritamente necessários."
              imageFirst={true}
              delay={200}
            />
            
            <AdvantageItem 
              image="/img/sobre-nos/equipe-reuniao.jpg"
              imagePosition="50% 75%"
              title="Suporte Especializado"
              description="Estamos desde 2022 no mercado, +1.000 clientes e um time de contadores especialistas. Você pode confiar em uma empresa que economiza mais de R$ 7 milhões para seus clientes."
              imageFirst={false}
              delay={400}
            />
            
            <AdvantageItem 
              image="/img/vantagens/vantagem-3.png"
              title="Aplicativo Financeiro e Contábil"
              description="Você poderá contar com um aplicativo financeiro gratuito, integrado com nossa contabilidade. Veja sua previsão e detalhamento de impostos, emita e gerencie notas ficais, conte com um escritório virtual e receba notificações."
              imageFirst={true}
              delay={600}
            />
            
            <div className="mt-[78px]" data-aos="fade-up" data-aos-delay="800">
              <ContactButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
