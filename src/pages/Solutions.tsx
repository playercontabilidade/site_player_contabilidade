
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import CTASection from "@/components/landing/CTASection";
import ContactButton from "@/components/landing/ContactButton";
import BenefitsSection from "@/components/landing/BenefitsSection";
import CookieConsent from "@/components/common/CookieConsent";
import { TaxSimulatorProvider } from "@/hooks/useTaxSimulator";

const SolutionsContent: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
      offset: 100,
    });
  }, []);

  const solutions = [
    {
      title: "BPO Financeiro",
      subtitle: "Confira como podemos te atender:",
      features: [
        "Gestão de contas a pagar e receber;",
        "Processamento de folha de pagamento;",
        "Serviços de tesouraria;",
        "Implementação de sistemas financeiros."
      ]
    },
    {
      title: "Assessoria Contábil Completa",
      subtitle: "Confira como podemos te atender:",
      features: [
        "Relatórios gerenciais e análise financeira;",
        "Gestão de ativos e passivos;",
        "Assuntos regulatórios."
      ]
    },
    {
      title: "Legalização",
      subtitle: "Confira como podemos te atender:",
      features: [
        "Certificado digital;",
        "Marcas e patentes;",
        "Revisão fiscal de cadastro de produtos;",
        "Abertura e encerramento de empresas."
      ]
    },
    {
      title: "Treinamentos",
      subtitle: "Confira como podemos te atender:",
      features: [
        "Treinamento corporativo;",
        "Treinamento financeiro;",
        "Treinamento em compliance e ética;",
        "Treinamento para inovação e reciclagem."
      ]
    },
    {
      title: "Planejamento Tributário",
      subtitle: "Confira como podemos te atender:",
      features: [
        "Escolha do melhor regime tributário;",
        "Recuperação de impostos pagos;",
        "Consultoria fiscal e tributária;",
        "Auditoria fiscal e tributária;",
        "Obtenção de regimes especiais;",
        "Planejamento financeiro e orçamentário."
      ]
    }
  ];

  return (
    <div className="w-full bg-black">
      <header className="relative bg-black">
        <Navbar />
      </header>
      
      <main>
        {/* Hero Section with Background */}
        <section className="relative w-full min-h-screen bg-black">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
            style={{ backgroundImage: "url('/img/solucoes/solucoes-bg.jpg')" }}
          />
          
          {/* Content */}
          <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 py-20">
            <h1 className="text-[54px] font-bold font-inter leading-[62px] tracking-[-1px] bg-gradient-to-r from-[#FFAA00] to-[#925003] bg-clip-text text-transparent text-center mb-16 max-md:text-[42px] max-md:leading-[48px] max-sm:text-[36px] max-sm:leading-[42px]" data-aos="fade-up">
              Soluções para suas demandas
            </h1>

            {/* Solutions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
              {solutions.slice(0, 4).map((solution, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-[12px] rounded-[20px] border border-white/20 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)]" data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
                  <h3 className="text-amber-500 text-2xl font-bold font-inter mb-4">{solution.title}</h3>
                  <p className="text-white text-base font-normal font-inter mb-6">
                    {solution.subtitle}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-white text-sm font-normal font-inter flex items-start">
                        <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="https://wa.me/5511994453204?text=Ol%C3%A1%2C%20vim%20do%20site.%20Pode%20me%20ajudar%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-[#FFAA00] to-[#F88805] text-black font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity block text-center"
                  >
                    Saber mais
                  </a>
                </div>
              ))}
            </div>

            {/* Planejamento Tributário - Center Card */}
            <div className="flex justify-center mt-8">
              <div className="bg-white/5 backdrop-blur-[12px] rounded-[20px] border border-white/20 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)] max-w-[480px]" data-aos="fade-up" data-aos-delay="500">
                <h3 className="text-amber-500 text-2xl font-bold font-inter mb-4">{solutions[4].title}</h3>
                <p className="text-white text-base font-normal font-inter mb-6">
                  {solutions[4].subtitle}
                </p>
                <ul className="space-y-3 mb-8">
                  {solutions[4].features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-white text-sm font-normal font-inter flex items-start">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href="https://wa.me/5511994453204?text=Ol%C3%A1%2C%20vim%20do%20site.%20Pode%20me%20ajudar%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-[#FFAA00] to-[#F88805] text-black font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity block text-center"
                >
                  Saber mais
                </a>
              </div>
            </div>

            {/* Contact Button */}
            <div className="flex justify-center mt-16" data-aos="fade-up" data-aos-delay="600">
              <ContactButton />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <BenefitsSection />

        {/* CTA Section */}
        <CTASection />
      </main>
      
      <Footer />
      <CookieConsent />
    </div>
  );
};

const Solutions: React.FC = () => {
  return (
    <TaxSimulatorProvider>
      <SolutionsContent />
    </TaxSimulatorProvider>
  );
};

export default Solutions;
