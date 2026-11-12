
import React, { useState, useEffect } from "react";
import { X, Cookie } from "lucide-react";

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verifica se o usuário já aceitou os cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-t border-amber-500/30 p-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Cookie className="text-amber-500 flex-shrink-0" size={24} />
          <div className="text-white text-sm">
            <p className="font-medium mb-1">Política de Privacidade e Cookies</p>
            <p className="text-gray-300">
              Utilizamos cookies para melhorar sua experiência em nosso site. Ao continuar navegando, 
              você concorda com nossa política de privacidade e o uso de cookies.
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={rejectCookies}
            className="px-4 py-2 text-gray-300 border border-gray-500 rounded-lg hover:bg-gray-700 transition-colors text-sm"
          >
            Rejeitar
          </button>
          <button
            onClick={acceptCookies}
            className="px-4 py-2 bg-amber-500 text-black rounded-lg hover:bg-amber-600 transition-colors font-medium text-sm"
          >
            Aceitar
          </button>
          <button
            onClick={rejectCookies}
            className="p-2 text-gray-400 hover:text-white transition-colors"
            aria-label="Fechar"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
