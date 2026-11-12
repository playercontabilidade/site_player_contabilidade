
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle } from "lucide-react";
import { StepProps } from "@/types/taxSimulator";
import { formatPhoneNumber } from "@/utils/phoneFormatter";
import BenefitsList from "./BenefitsList";
import ProgressDots from "./ProgressDots";

const FormSteps: React.FC<StepProps> = ({
  currentStep,
  formData,
  onInputChange,
  onNext,
  onSubmit,
  isSubmitting
}) => {
  const storeOptions = [
    "0 a 3 lojas",
    "4 a 10 lojas",
    "+10 lojas"
  ];

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-bold text-white mb-6">
              Você sabia que seu negócio pode estar pagando impostos demais?
            </h2>
            <p className="text-white text-base mb-6">
              Responda as perguntas abaixo e tenha acesso ao diagnóstico completo do seu negócio, totalmente grátis.
            </p>
            <h3 className="text-lg font-bold text-white mb-4">
              Quais os benefícios do nosso Diagnóstico completo para o seu negócio:
            </h3>
            <BenefitsList />
            <Button 
              onClick={onNext}
              className="w-full bg-gradient-to-r from-[#FFAA00] to-[#F88805] text-black font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity mt-8"
            >
              Começar
            </Button>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <ProgressDots currentStep={currentStep} totalSteps={9} />
            <h2 className="text-xl font-bold text-white text-center">
              Qual seu nome completo?
            </h2>
            <Input
              value={formData.name}
              onChange={(e) => onInputChange("name", e.target.value)}
              placeholder="Digite seu nome completo"
              className="w-full bg-amber-500/20 border-amber-500/50 text-white placeholder:text-white/60 rounded-lg"
            />
            <Button 
              onClick={onNext}
              disabled={!formData.name.trim()}
              className="w-full bg-gradient-to-r from-[#FFAA00] to-[#F88805] text-black font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              Continuar
            </Button>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <ProgressDots currentStep={currentStep} totalSteps={9} />
            <h2 className="text-xl font-bold text-white text-center">
              {formData.name}, qual seu telefone?
            </h2>
            <Input
              value={formatPhoneNumber(formData.phone)}
              onChange={(e) => onInputChange("phone", e.target.value)}
              placeholder="Digite seu telefone"
              className="w-full bg-amber-500/20 border-amber-500/50 text-white placeholder:text-white/60 rounded-lg"
            />
            <Button 
              onClick={onNext}
              disabled={!formData.phone.trim()}
              className="w-full bg-gradient-to-r from-[#FFAA00] to-[#F88805] text-black font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              Continuar
            </Button>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <ProgressDots currentStep={currentStep} totalSteps={9} />
            <h2 className="text-xl font-bold text-white text-center">
              {formData.name}, que empresa você trabalha?
            </h2>
            <Input
              value={formData.company}
              onChange={(e) => onInputChange("company", e.target.value)}
              placeholder="Digite o nome da empresa"
              className="w-full bg-amber-500/20 border-amber-500/50 text-white placeholder:text-white/60 rounded-lg"
            />
            <Button 
              onClick={onNext}
              disabled={!formData.company.trim()}
              className="w-full bg-gradient-to-r from-[#FFAA00] to-[#F88805] text-black font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              Continuar
            </Button>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <ProgressDots currentStep={currentStep} totalSteps={9} />
            <h2 className="text-xl font-bold text-white text-center">
              {formData.name}, quantas lojas a {formData.company} possui?
            </h2>
            <div className="space-y-3">
              {storeOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    onInputChange("storeCount", option);
                    setTimeout(onNext, 300);
                  }}
                  className="w-full bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/50 text-white p-3 rounded-lg transition-all duration-200"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <ProgressDots currentStep={currentStep} totalSteps={9} />
            <h2 className="text-xl font-bold text-white text-center">
              Qual seu cargo na empresa?
            </h2>
            <Input
              value={formData.position}
              onChange={(e) => onInputChange("position", e.target.value)}
              placeholder="Digite seu cargo"
              className="w-full bg-amber-500/20 border-amber-500/50 text-white placeholder:text-white/60 rounded-lg"
            />
            <Button 
              onClick={onNext}
              disabled={!formData.position.trim()}
              className="w-full bg-gradient-to-r from-[#FFAA00] to-[#F88805] text-black font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              Continuar
            </Button>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <ProgressDots currentStep={currentStep} totalSteps={9} />
            <h2 className="text-xl font-bold text-white text-center">
              {formData.name}, qual cidade principal da {formData.company}?
            </h2>
            <Input
              value={formData.city}
              onChange={(e) => onInputChange("city", e.target.value)}
              placeholder="Digite a cidade"
              className="w-full bg-amber-500/20 border-amber-500/50 text-white placeholder:text-white/60 rounded-lg"
            />
            <Button 
              onClick={onNext}
              disabled={!formData.city.trim()}
              className="w-full bg-gradient-to-r from-[#FFAA00] to-[#F88805] text-black font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              Continuar
            </Button>
          </div>
        );

      case 7:
        return (
          <div className="space-y-6">
            <ProgressDots currentStep={currentStep} totalSteps={9} />
            <h2 className="text-xl font-bold text-white text-center">
              Qual estado?
            </h2>
            <Input
              value={formData.state}
              onChange={(e) => onInputChange("state", e.target.value)}
              placeholder="Digite o estado"
              className="w-full bg-amber-500/20 border-amber-500/50 text-white placeholder:text-white/60 rounded-lg"
            />
            <Button 
              onClick={onNext}
              disabled={!formData.state.trim()}
              className="w-full bg-gradient-to-r from-[#FFAA00] to-[#F88805] text-black font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              Continuar
            </Button>
          </div>
        );

      case 8:
        return (
          <div className="space-y-6">
            <ProgressDots currentStep={currentStep} totalSteps={9} />
            <h2 className="text-xl font-bold text-white text-center">
              {formData.name}, para qual email enviamos o diagnóstico?
            </h2>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => onInputChange("email", e.target.value)}
              placeholder="Digite seu email"
              className="w-full bg-amber-500/20 border-amber-500/50 text-white placeholder:text-white/60 rounded-lg"
            />
            <Button 
              onClick={onSubmit}
              disabled={!formData.email.trim() || isSubmitting}
              className="w-full bg-gradient-to-r from-[#FFAA00] to-[#F88805] text-black font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {isSubmitting ? "Enviando..." : "Finalizar"}
            </Button>
          </div>
        );

      case 9:
        return (
          <div className="text-center space-y-6">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
            <h2 className="text-2xl font-bold text-white">
              Estamos preparando o seu Diagnóstico, vamos enviar por email.
            </h2>
          </div>
        );

      default:
        return null;
    }
  };

  return renderStep();
};

export default FormSteps;
