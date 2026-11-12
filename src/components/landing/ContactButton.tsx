
import React from "react";

const ContactButton: React.FC = () => {
  return (
    <a 
      href="https://wa.me/5511994453204?text=Ol%C3%A1%2C%20vim%20do%20site.%20Pode%20me%20ajudar%3F"
      target="_blank"
      rel="noopener noreferrer"
      className="h-14 px-8 py-5 bg-gradient-to-br from-[#FFAA00] to-[#F88805] rounded-lg shadow-[0px_0px_6.150000095367432px_0px_rgba(240,199,119,1.00)] outline outline-[1.54px] outline-offset-[-1.54px] outline-[#F0C777] flex justify-center items-center transition-transform duration-300 ease-in-out hover:scale-105"
    >
      <div className="text-center text-black text-lg font-medium font-inter leading-8 max-md:text-base max-sm:text-sm">
        Entrar em contato
      </div>
    </a>
  );
};

export default ContactButton;
