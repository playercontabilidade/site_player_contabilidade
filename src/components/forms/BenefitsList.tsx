
import React from "react";
import { Shield, TrendingUp, RefreshCw, Award } from "lucide-react";
import { Benefit } from "@/types/taxSimulator";

const BenefitsList: React.FC = () => {
  const benefits: Benefit[] = [
    {
      icon: <Shield className="w-6 h-6 text-amber-500" />,
      text: "Identifique os riscos fiscais e evite multas e fiscalizações"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-amber-500" />,
      text: "Encontre o melhor regime tributário para sua farmácia."
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-amber-500" />,
      text: "Recupere tributos pagos a mais nos últimos 5 anos dentro da legalidade."
    },
    {
      icon: <Award className="w-6 h-6 text-amber-500" />,
      text: "Aproveite todos os benefícios fiscais disponíveis para seu negócio."
    }
  ];

  return (
    <div className="space-y-4">
      {benefits.map((benefit, index) => (
        <div key={index} className="flex items-center space-x-3 text-left">
          {benefit.icon}
          <span className="text-white text-sm">{benefit.text}</span>
        </div>
      ))}
    </div>
  );
};

export default BenefitsList;
