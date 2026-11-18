
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ExternalLink, User } from "lucide-react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const handlePlatformClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold text-black flex items-center justify-center gap-2">
            <User size={24} className="text-amber-500" />
            Escolha sua Plataforma
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 pt-4">
          <button
            onClick={() => handlePlatformClick("https://onvio.com.br/#/")}
            className="w-full h-14 px-6 py-4 bg-gradient-to-br from-[#FFAA00] to-[#F88805] rounded-lg flex items-center justify-between transition-all duration-300 hover:scale-105 shadow-md"
          >
            <span className="text-black text-lg font-semibold font-inter">
              Plataforma Onvio
            </span>
            <ExternalLink size={20} className="text-black" />
          </button>
          
          <button
            onClick={() => handlePlatformClick("https://app.impostograma.com/")}
            className="w-full h-14 px-6 py-4 bg-transparent border-2 border-[#FFAA00] rounded-lg flex items-center justify-between transition-all duration-300 hover:bg-[#FFAA00]/10"
          >
            <span className="text-[#FFAA00] text-lg font-semibold font-inter">
              Plataforma Impostograma
            </span>
            <ExternalLink size={20} className="text-[#FFAA00]" />
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
