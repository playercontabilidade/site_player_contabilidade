
export interface FormData {
  name: string;
  phone: string;
  company: string;
  storeCount: string;
  position: string;
  city: string;
  state: string;
  email: string;
}

export interface TaxSimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface StepProps {
  currentStep: number;
  formData: FormData;
  onInputChange: (field: keyof FormData, value: string) => void;
  onNext: () => void;
  onSubmit: () => void;
  isSubmitting: boolean;
}

export interface Benefit {
  icon: React.ReactNode;
  text: string;
}
