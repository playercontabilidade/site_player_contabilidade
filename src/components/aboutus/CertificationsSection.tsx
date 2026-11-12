
import React from "react";

const CertificationsSection: React.FC = () => {
  const certifications = [
    {
      image: "/img/selos/selo-1.png",
      title: "Great Place To Work",
      description: "Somos a 1ª Empresa contábil do norte do Brasil a adquirir o selo GPTW - Melhores empresas para se trabalhar."
    },
    {
      image: "/img/selos/selo-2.png",
      title: "Lei Geral de Proteção de Dados",
      description: "A LGPD, em vigor desde setembro de 2020, visa proteger dados pessoais com transparência, substituindo o Marco Civil da Internet de 2014, que tratava de regulamentações online mais amplas."
    },
    {
      image: "/img/selos/selo-3.png",
      title: "Livre de Violência Contra a Mulher",
      description: "Ambiente livre de violência contra a mulher, com a implementação de melhores práticas, baseadas em leis e princípios, para promover um espaço seguro e respeitoso."
    },
    {
      image: "/img/selos/selo-4.png",
      title: "Certificação Ambiental, Social e de Governança",
      description: "Assumimos o compromisso de atuar com responsabilidade social, ambiental e de governança, promovendo práticas sustentáveis e conscientes que impactam positivamente a sociedade, nossos clientes e colaboradores."
    },
    {
      image: "/img/selos/selo-5.png",
      title: "Cyber Segurança",
      description: "Adotamos políticas rigorosas de proteção digital para garantir a segurança das suas informações. Nosso compromisso é oferecer um ambiente seguro e confiável, blindado contra ameaças cibernéticas."
    },
    {
      image: "/img/selos/selo-6.png",
      title: "Certificado do Consumidor",
      description: "Reconhecido no mercado, a transparência e o bom relacionamento com nossos clientes. Esse certificado refere ao modelo excelência em servir você, consumidor, na relação de 5 stars na plataforma Google."
    },
    {
      image: "/img/selos/selo-7.png",
      title: "CLT – Conformidade Trabalhista",
      description: "Cumprimos e promovemos integralmente as leis trabalhistas brasileiras, garantindo um ambiente de trabalho justo, transparente e respeitoso para todos os nossos colaboradores."
    },
    {
      image: "/img/selos/selo-8.png",
      title: "GDPR – General Data Protection Regulation",
      description: "Também estamos alinhados às exigências internacionais de proteção de dados. Com a certificação GDPR, reforçamos nosso compromisso com a privacidade e o tratamento responsável das suas informações pessoais."
    },
    {
      image: "/img/selos/selo-9.png",
      title: "Safety – Saúde e Segurança Ocupacional",
      description: "Cuidar da saúde e da segurança da nossa equipe é uma prioridade. Por isso, seguimos práticas e normas que garantem um ambiente de trabalho saudável, seguro e livre de riscos."
    }
  ];

  return (
    <section className="w-full bg-gradient-to-b from-[#0A1F44] to-[#0B2737] py-16 relative">
      {/* Yellow line at top */}
      <div className="w-full h-[2px] bg-gradient-to-r from-[#FFAA00] to-[#F88805] absolute top-0 left-0"></div>
      
      <div className="w-full max-w-[1440px] mx-auto px-6">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-[54px] font-bold font-inter leading-[62px] tracking-[-1px] bg-gradient-to-r from-[#FFAA00] to-[#F88805] bg-clip-text text-transparent mb-6 max-md:text-[42px] max-md:leading-[48px] max-sm:text-[36px] max-sm:leading-[42px]">
            Somos uma<br/>Contabilidade Certificada
          </h2>
          <p className="text-white text-xl font-normal font-inter leading-8 max-w-[800px] mx-auto max-md:text-lg max-sm:text-base">
            Na nossa contabilidade, excelência não é só um objetivo – é um compromisso. Todas essas certificações que você vê aqui representam muito mais do que selos: elas são a prova de que seguimos os mais altos padrões de ética, segurança, inclusão e responsabilidade.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-[12px] border border-white/20 rounded-[20px] p-6 shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:bg-white/10 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-start gap-4">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-16 h-16 object-contain flex-shrink-0"
                />
                <div>
                  <h3 className="text-[#FFAA00] text-lg font-bold font-inter mb-3">
                    {cert.title}
                  </h3>
                  <p className="text-white text-sm font-normal font-inter leading-6">
                    {cert.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="600">
          <button className="bg-gradient-to-r from-[#FFAA00] to-[#F88805] text-black font-semibold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity">
            Entrar em contato
          </button>
        </div>
      </div>
      
      {/* Yellow line at bottom */}
      <div className="w-full h-[2px] bg-gradient-to-r from-[#FFAA00] to-[#F88805] absolute bottom-0 left-0"></div>
    </section>
  );
};

export default CertificationsSection;
