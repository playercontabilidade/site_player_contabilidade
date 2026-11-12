import React, { useState } from 'react';
import { Dialog, DialogContent, DialogOverlay } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import confetti from 'canvas-confetti';
import { cleanPhoneNumber } from '@/utils/phoneFormatter';
import { validateFormData } from '@/utils/formValidation';
import { sendToRDStation } from '@/services/rdStation';
import { useToast } from '@/hooks/use-toast';
import { FormData, TaxSimulatorModalProps } from '@/types/taxSimulator';
import FormSteps from './FormSteps';

const TaxSimulatorModal: React.FC<TaxSimulatorModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    company: '',
    storeCount: '',
    position: '',
    city: '',
    state: '',
    email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: keyof FormData, value: string) => {
    if (field === 'phone') {
      const cleaned = cleanPhoneNumber(value);
      if (cleaned.length <= 11) {
        setFormData((prev) => ({ ...prev, [field]: cleaned }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [field]: value }));
    }
  };

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handleSubmit = async () => {
    // Validar dados antes de enviar
    const validation = validateFormData({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
    });

    if (!validation.isValid) {
      const errorMessages = Object.values(validation.errors).filter(Boolean);
      toast({
        title: 'Dados inválidos',
        description: errorMessages.join('. '),
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const rdStationData = {
        name: formData.name,
        phone: cleanPhoneNumber(formData.phone),
        company: formData.company || undefined,
        storeCount: formData.storeCount,
        position: formData.position,
        city: formData.city,
        state: formData.state,
        email: formData.email,
      };

      console.log('Dados que serão enviados para RD Station:', rdStationData);

      await sendToRDStation(rdStationData);

      toast({
        title: 'Dados enviados com sucesso!',
        description:
          'Recebemos seus dados! Em breve um especialista entrará em contato via WhatsApp.',
      });

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FFD700', '#FFA500', '#FF8C00'],
      });

      setCurrentStep(9);
    } catch (error) {
      console.error('Erro ao enviar para RD Station:', error);

      toast({
        title: 'Erro no envio',
        description:
          'Houve um erro ao enviar seus dados. Por favor, tente novamente.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setCurrentStep(0);
    setFormData({
      name: '',
      phone: '',
      company: '',
      storeCount: '',
      position: '',
      city: '',
      state: '',
      email: '',
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogOverlay className="bg-black/50 backdrop-blur-sm" />
      <DialogContent className="max-w-md w-full mx-auto bg-black/20 backdrop-blur-[30px] border border-amber-500/30 rounded-[20px] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
        <FormSteps
          currentStep={currentStep}
          formData={formData}
          onInputChange={handleInputChange}
          onNext={handleNext}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />
        {currentStep === 9 && (
          <Button
            onClick={handleClose}
            className="w-full bg-gradient-to-r from-[#FFAA00] to-[#F88805] text-black font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity mt-6"
          >
            Fechar
          </Button>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default TaxSimulatorModal;
