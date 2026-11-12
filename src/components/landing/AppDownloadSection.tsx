
import React from "react";
import { FaApple, FaAndroid } from "react-icons/fa";
import { Monitor } from "lucide-react";

const AppDownloadSection: React.FC = () => {
  return (
    <div className="text-center space-y-6" data-aos="fade-up">
      <h3 className="text-amber-500 text-xl font-semibold font-inter">
        Baixe nosso aplicativo
      </h3>
      
      <div className="flex justify-center gap-4">
        <a 
          href="https://apps.apple.com/br/app/player-contabilidade/id1585413374"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 transition-all duration-300 hover:bg-white/20 hover:scale-105"
          title="Download para iPhone"
        >
          <FaApple size={24} className="text-amber-500" />
        </a>
        
        <a 
          href="https://surl.li/bpkhqz"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 transition-all duration-300 hover:bg-white/20 hover:scale-105"
          title="Download para Android"
        >
          <FaAndroid size={24} className="text-amber-500" />
        </a>
        
        <a 
          href="https://vip.acessorias.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 transition-all duration-300 hover:bg-white/20 hover:scale-105"
          title="Acesso Web"
        >
          <Monitor size={24} className="text-amber-500" />
        </a>
      </div>
    </div>
  );
};

export default AppDownloadSection;
