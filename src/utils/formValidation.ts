
export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export const validateName = (name: string): ValidationResult => {
  if (!name || name.trim().length < 2) {
    return {
      isValid: false,
      error: "Nome deve ter pelo menos 2 caracteres"
    };
  }
  return { isValid: true };
};

export const validateEmail = (email: string): ValidationResult => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!email || !emailRegex.test(email)) {
    return {
      isValid: false,
      error: "Email deve ter um formato válido"
    };
  }
  return { isValid: true };
};

export const validatePhone = (phone: string): ValidationResult => {
  // Remove todos os caracteres não numéricos
  const cleanPhone = phone.replace(/\D/g, '');
  
  if (!cleanPhone || cleanPhone.length < 10) {
    return {
      isValid: false,
      error: "Telefone deve ter pelo menos 10 dígitos (com DDD)"
    };
  }
  return { isValid: true };
};

export const validateFormData = (formData: { name: string; email: string; phone: string }) => {
  const nameValidation = validateName(formData.name);
  const emailValidation = validateEmail(formData.email);
  const phoneValidation = validatePhone(formData.phone);

  return {
    isValid: nameValidation.isValid && emailValidation.isValid && phoneValidation.isValid,
    errors: {
      name: nameValidation.error,
      email: emailValidation.error,
      phone: phoneValidation.error
    }
  };
};
