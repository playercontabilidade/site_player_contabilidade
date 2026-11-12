
import React, { useState, useEffect } from "react";
import { MessageCircleMore } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const WhatsAppFloatingButton: React.FC = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [pingNotification, setPingNotification] = useState(false);

  useEffect(() => {
    // Show message after 10 seconds
    const messageTimer = setTimeout(() => {
      setShowMessage(true);
    }, 10000);

    // Ping notification every 5 seconds
    const pingInterval = setInterval(() => {
      setPingNotification(true);
      setTimeout(() => setPingNotification(false), 500);
    }, 5000);

    return () => {
      clearTimeout(messageTimer);
      clearInterval(pingInterval);
    };
  }, []);

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/558008001385?text=Ol%C3%A1%2C%20vim%20do%20site.%20Pode%20me%20ajudar%3F",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Message Balloon */}
      {showMessage && (
        <div className="absolute bottom-16 right-0 mb-2 animate-fade-in">
          <div className="bg-white rounded-xl shadow-md px-6 py-3 flex items-center justify-center min-w-[200px]">
            <span className="text-black text-sm font-medium">
              Oi, posso te ajudar?
            </span>
          </div>
          {/* Arrow pointing to button */}
          <div className="absolute bottom-[-6px] right-6 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-white"></div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="w-14 h-14 bg-amber-500 rounded-full flex items-center justify-center hover:scale-105 transition-transform duration-300 shadow-lg relative"
        aria-label="Contato via WhatsApp"
      >
        {/* Notification Badge */}
        <div
          className={`absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white ${
            pingNotification ? "animate-ping-fast" : ""
          }`}
        ></div>

        {/* WhatsApp Icon */}
        <SiWhatsapp size={24} className="text-white" />
      </button>
    </div>
  );
};

export default WhatsAppFloatingButton;
