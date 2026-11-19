
import React, { useState, useEffect } from "react";
import { SiWhatsapp } from "react-icons/si";

const WhatsAppFloatingButton: React.FC = () => {
  const [pingNotification, setPingNotification] = useState(false);

  useEffect(() => {
    // Ping notification every 5 seconds
    const pingInterval = setInterval(() => {
      setPingNotification(true);
      setTimeout(() => setPingNotification(false), 500);
    }, 5000);

    return () => {
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
