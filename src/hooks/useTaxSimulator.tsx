
import { createContext, useContext, useState, ReactNode } from "react";

interface TaxSimulatorContextType {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const TaxSimulatorContext = createContext<TaxSimulatorContextType | undefined>(undefined);

export const TaxSimulatorProvider = ({ children }: { children: ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <TaxSimulatorContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </TaxSimulatorContext.Provider>
  );
};

export const useTaxSimulator = () => {
  const context = useContext(TaxSimulatorContext);
  if (!context) {
    throw new Error("useTaxSimulator must be used within a TaxSimulatorProvider");
  }
  return context;
};
