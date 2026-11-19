
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
  const logoFilterId = React.useId();
  const handlePlatformClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white max-w-md">
        <svg width="0" height="0" className="absolute pointer-events-none" aria-hidden="true">
          <defs>
            <filter id={logoFilterId} colorInterpolationFilters="sRGB">
              {/* Neutral gray becomes transparent while the purple mark stays visible. */}
              <feColorMatrix
                type="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 -2 2 0 0"
              />
            </filter>
          </defs>
        </svg>
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
            className="platform-impostograma w-full h-14 px-6 py-4 border-2 border-transparent rounded-lg flex items-center justify-between transition-all duration-300"
          >
            <span className="platform-impostograma__label text-lg font-semibold font-inter">
              Plataforma Impostograma
            </span>
            <img
              src="/img/logo/impostograma-icone.png"
              alt="Logo Impostograma"
              className="h-9 w-5 shrink-0 object-contain"
              style={{ filter: `url(#${logoFilterId})` }}
            />
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
