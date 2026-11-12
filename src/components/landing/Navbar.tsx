import React, { useState } from "react";
import { User, Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";
import { useTaxSimulator } from "@/hooks/useTaxSimulator";
import LoginModal from "@/components/common/LoginModal";

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { openModal } = useTaxSimulator();
  
  const getActiveItem = () => {
    switch (location.pathname) {
      case "/":
        return "Início";
      case "/sobre-nos":
        return "Sobre Nós";
      case "/solucoes":
        return "Soluções";
      default:
        return "";
    }
  };

  const scrollToSection = (sectionId: string) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  const activeItem = getActiveItem();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-[12px] border-b border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
        <div className="w-full max-w-[1440px] mx-auto px-[59px] py-4 h-[80px] flex justify-between items-center max-md:px-5 max-sm:px-2.5">
          <Link to="/">
            <img
              src="/img/logo/logo-principal.png"
              className="w-48 h-16"
              alt="Logo Player Contabilidade"
            />
          </Link>
          
          {/* Desktop Menu */}
          <div className="flex items-center gap-[36px] max-md:hidden">
            <Link
              to="/"
              className={`cursor-pointer font-inter ${activeItem === "Início" ? "text-amber-500 text-lg font-bold" : "text-orange-200/75 text-lg font-medium"} leading-loose`}
            >
              Início
            </Link>
            <Link
              to="/sobre-nos"
              className={`cursor-pointer font-inter ${activeItem === "Sobre Nós" ? "text-amber-500 text-lg font-bold" : "text-orange-200/75 text-lg font-medium"} leading-loose`}
            >
              Sobre Nós
            </Link>
            <Link
              to="/solucoes"
              className={`cursor-pointer font-inter ${activeItem === "Soluções" ? "text-amber-500 text-lg font-bold" : "text-orange-200/75 text-lg font-medium"} leading-loose`}
            >
              Soluções
            </Link>
            <div 
              className="cursor-pointer font-inter text-orange-200/75 text-lg font-medium leading-loose"
              onClick={() => scrollToSection("especialidades")}
            >
              Especialidades
            </div>
            <div 
              className="cursor-pointer font-inter text-orange-200/75 text-lg font-medium leading-loose"
              onClick={() => scrollToSection("contato")}
            >
              Contato
            </div>
            
            <button className="btn-simulador" onClick={openModal}>
              <span className="glow"></span>
              <span className="glow"></span>
              <span className="glow"></span>
              <span className="glow"></span>
              <span className="label">Simulador Tributário</span>
            </button>
            
            <button 
              onClick={() => setIsLoginModalOpen(true)}
              className="w-12 h-12 bg-gradient-to-br from-[#FFAA00] to-[#F88805] rounded-full relative flex items-center justify-center outline outline-[1.54px] outline-offset-[-1.54px] outline-[#F0C777] transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <User size={24} className="text-black" />
            </button>
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center gap-4 md:hidden">
            <button 
              onClick={() => setIsLoginModalOpen(true)}
              className="w-12 h-12 bg-gradient-to-br from-[#FFAA00] to-[#F88805] rounded-full relative flex items-center justify-center outline outline-[1.54px] outline-offset-[-1.54px] outline-[#F0C777] transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <User size={20} className="text-black" />
            </button>
            
            <Drawer open={isOpen} onOpenChange={setIsOpen}>
              <DrawerTrigger asChild>
                <button className="text-white p-2">
                  <Menu size={24} />
                </button>
              </DrawerTrigger>
              <DrawerContent className="bg-black/90 backdrop-blur-[12px] border-white/20">
                <div className="p-6 space-y-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold text-white">Menu</h2>
                    <DrawerClose asChild>
                      <button className="text-white p-2">
                        <X size={24} />
                      </button>
                    </DrawerClose>
                  </div>
                  
                  <div className="space-y-4">
                    <Link
                      to="/"
                      className={`block py-3 font-inter text-lg ${activeItem === "Início" ? "text-amber-500 font-bold" : "text-orange-200/75 font-medium"}`}
                      onClick={() => setIsOpen(false)}
                    >
                      Início
                    </Link>
                    <Link
                      to="/sobre-nos"
                      className={`block py-3 font-inter text-lg ${activeItem === "Sobre Nós" ? "text-amber-500 font-bold" : "text-orange-200/75 font-medium"}`}
                      onClick={() => setIsOpen(false)}
                    >
                      Sobre Nós
                    </Link>
                    <Link
                      to="/solucoes"
                      className={`block py-3 font-inter text-lg ${activeItem === "Soluções" ? "text-amber-500 font-bold" : "text-orange-200/75 font-medium"}`}
                      onClick={() => setIsOpen(false)}
                    >
                      Soluções
                    </Link>
                    <div 
                      className="block py-3 font-inter text-lg text-orange-200/75 font-medium cursor-pointer"
                      onClick={() => scrollToSection("especialidades")}
                    >
                      Especialidades
                    </div>
                    <div 
                      className="block py-3 font-inter text-lg text-orange-200/75 font-medium cursor-pointer"
                      onClick={() => scrollToSection("contato")}
                    >
                      Contato
                    </div>
                    
                    <button 
                      className="btn-simulador w-full mt-4"
                      onClick={() => {
                        openModal();
                        setIsOpen(false);
                      }}
                    >
                      <span className="glow"></span>
                      <span className="glow"></span>
                      <span className="glow"></span>
                      <span className="glow"></span>
                      <span className="label">Simulador Tributário</span>
                    </button>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </nav>
      
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </>
  );
};

export default Navbar;
