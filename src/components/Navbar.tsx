import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import AboutModal from "./AboutModal";
import { useIsMobile } from "@/hooks/use-mobile";
import { getImagePath } from "@/utils/imageUtils";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/90 backdrop-blur-md py-3 shadow-md mx-auto mt-2 md:w-[95%] max-w-7xl md:left-[50%] md:transform md:-translate-x-1/2 md:rounded-full" 
          : `py-${isMobile ? '4' : '6'}`
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center"
          >
            <img 
              src={getImagePath(scrolled ? "/lovable-uploads/TK_dark_logo.png" : "/lovable-uploads/6ae22019-d3b9-4d9e-a3c4-d8037ded2144.png")} 
              alt="Trikonantara Logo" 
              className="h-8 mr-2" 
            />
            <span className={`text-2xl font-funnel font-bold relative overflow-hidden group uppercase ${
              scrolled ? 'text-[#5c0601]' : 'text-white'
            }`}>
              TRIKONANTARA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Dialog>
              <DialogTrigger asChild>
                <button
                  className={`relative ${scrolled ? 'text-pebble-darkBlue hover:text-pebble-blue' : 'text-pebble-offWhite hover:text-white'} transition-colors duration-300 group font-fustat`}
                >
                  About
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 ${scrolled ? 'bg-pebble-blue' : 'bg-white'} transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100`}></span>
                </button>
              </DialogTrigger>
              <AboutModal />
            </Dialog>
            <NavLink 
              onClick={() => scrollToSection("services-section")} 
              scrolled={scrolled}
            >
              Services
            </NavLink>
            <NavLink 
              onClick={() => scrollToSection("products-section")} 
              scrolled={scrolled}
            >
              Product
            </NavLink>
          </nav>

          {/* Mobile Navigation Button */}
          <button
            className={`block md:hidden ${scrolled ? 'text-[#5c0601]' : 'text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 bg-white bg-opacity-95 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <button
            className="absolute right-4 top-4 text-[#5c0601]"
            onClick={() => setIsOpen(false)}
          >
            <X size={24} />
          </button>
          
          <Dialog>
            <DialogTrigger asChild>
              <button
                className="text-xl text-[#5c0601] hover:text-[#1EAEDB] transition-all duration-300 font-fustat"
                onClick={() => setIsOpen(false)}
              >
                About
              </button>
            </DialogTrigger>
            <AboutModal />
          </Dialog>
          <MobileNavLink onClick={() => scrollToSection("services-section")}>
            Services
          </MobileNavLink>
          <MobileNavLink onClick={() => scrollToSection("products-section")}>
            Product
          </MobileNavLink>
        </div>
      </div>
    </header>
  );
};

interface NavLinkProps {
  children: React.ReactNode;
  scrolled: boolean;
  onClick: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ children, scrolled, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`relative ${scrolled ? 'text-pebble-darkBlue hover:text-pebble-blue' : 'text-pebble-offWhite hover:text-white'} transition-colors duration-300 group font-fustat`}
    >
      {children}
      <span className={`absolute bottom-0 left-0 w-full h-0.5 ${scrolled ? 'bg-pebble-blue' : 'bg-white'} transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100`}></span>
    </button>
  );
};

interface MobileNavLinkProps {
  children: React.ReactNode;
  onClick: () => void;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({
  children,
  onClick,
}) => {
  return (
    <button
      className="text-xl text-[#5c0601] hover:text-[#1EAEDB] transition-all duration-300 font-fustat"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Navbar;
