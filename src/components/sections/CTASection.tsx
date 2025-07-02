import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Instagram, Facebook, Linkedin, Twitter, Youtube } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import ContactForm from "../ContactForm";
import { getImagePath } from "@/utils/imageUtils";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const CTASection: React.FC = () => {
  const sectionId = "cta-section";
  
  useEffect(() => {
    // Wait for the DOM to be ready
    const ctx = gsap.context(() => {
      // Section entry/exit animations with a delayed start to ensure the element exists
      gsap.to(`#${sectionId}`, {
        opacity: 1,
        duration: 1.2,
        scrollTrigger: {
          trigger: `#${sectionId}`,
          start: "top bottom",
          end: "bottom top",
          toggleActions: "play none none reverse",
        },
      });
      
      // Content animations
      gsap.from(".cta-content", {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".cta-content",
          start: "top 80%",
          end: "top 60%",
          scrub: 1,
        },
      });
      
      // Footer animations
      gsap.from(".footer-content", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".footer-content",
          start: "top 85%",
          end: "top 65%",
          scrub: 1,
        },
      });
    });
    
    return () => {
      // Clean up
      ctx.revert();
    };
  }, []);

  // Contact dialog component to reuse
  const ContactDialog = () => (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className="inline-flex items-center bg-transparent border border-pebble-lightBeige text-pebble-lightBeige py-3 px-8 rounded-none transition-all duration-300 shadow-lg shadow-pebble-charcoal/20 transform hover:bg-pebble-lightBeige hover:text-pebble-olive"
        >
          Get in Touch
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Contact Us</DialogTitle>
        </DialogHeader>
        <ContactForm />
      </DialogContent>
    </Dialog>
  );

  return (
    <section 
      id={sectionId}
      className="relative overflow-hidden py-32 flex flex-col bg-gradient-to-b from-white to-[#D2B48C] opacity-0"
    >
      <div className="container mx-auto px-4 relative mb-16">
        <div className="max-w-4xl mx-auto bg-[#5c0601] rounded-xl shadow-lg shadow-[#5c0601]/20 p-16 relative overflow-hidden cta-content">
          {/* Centered content instead of flex-row */}
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-6 text-pebble-offWhite max-w-2xl">
              Join Hands with Us
            </h2>
            
            <p className="text-pebble-offWhite/80 mb-8 font-fustat max-w-2xl">
              We welcome collaborations with businesses, investors, research institutions, and technology partners. Let's create the future together.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <ContactDialog />
            </div>
          </div>
          
          <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
            <div className="absolute top-1/4 right-1/4 w-40 h-40 rounded-full bg-pebble-offWhite opacity-5"></div>
            <div className="absolute bottom-1/4 right-1/3 w-60 h-60 rounded-full bg-pebble-offWhite opacity-5"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-pebble-offWhite opacity-5"></div>
          </div>
        </div>
      </div>
      
      {/* Footer Content */}
      <div className="container mx-auto px-4 footer-content mt-12 text-center">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-6 text-center">
            <div className="flex justify-center mb-1">
              <img 
                src={getImagePath("/lovable-uploads/TK_dark_logo.png")} 
                alt="Trikonantara Logo" 
                className="h-20 mb-0" 
              />
            </div>
            <h3 className="text-2xl font-funnel font-bold mb-4 text-pebble-charcoal">
              TRIKONANTARA
            </h3>
            <div className="flex justify-center space-x-4 mb-4">
              <a href="https://x.com/trikonantara" target="_blank" rel="noopener noreferrer" className="text-pebble-charcoal hover:text-[#1DA1F2] transition-colors duration-300">
                <Twitter size={20} className="transition-transform duration-300 hover:scale-110" />
              </a>
              <a href="https://www.linkedin.com/company/trikonantara-innovation-technology-private-limited/" target="_blank" rel="noopener noreferrer" className="text-pebble-charcoal hover:text-[#0A66C2] transition-colors duration-300">
                <Linkedin size={20} className="transition-transform duration-300 hover:scale-110" />
              </a>
              <a href="https://www.youtube.com/@Trikonantara" target="_blank" rel="noopener noreferrer" className="text-pebble-charcoal hover:text-[#FF0000] transition-colors duration-300">
                <Youtube size={20} className="transition-transform duration-300 hover:scale-110" />
              </a>
              <a href="https://www.instagram.com/trikonantara/" target="_blank" rel="noopener noreferrer" className="text-pebble-charcoal hover:text-[#E1306C] transition-colors duration-300">
                <Instagram size={20} className="transition-transform duration-300 hover:scale-110" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61573968217226" target="_blank" rel="noopener noreferrer" className="text-pebble-charcoal hover:text-[#1877F2] transition-colors duration-300">
                <Facebook size={20} className="transition-transform duration-300 hover:scale-110" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-8 pt-6 border-t border-pebble-charcoal/10 max-w-lg mx-auto">
          <div className="mb-4 text-center">
            <p className="text-xs text-pebble-charcoal font-fustat">© 2025 Trikonantara Innovation Technology Private Limited. All rights reserved</p>
          </div>
          
          <div className="mt-4 text-xs text-pebble-charcoal font-fustat space-y-2">
            <p>+91 9493803629</p>
            <p>contactus@trikonantara.com</p>
            <p>18-4-174, Near Munurkapu, Sangam, Aliabad, Hyderabad, Charminar, Telangana, India, 500053</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Regular FooterLink component (keep it for existing references)
interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
  external?: boolean;
}

// ... keep existing code (FooterLink component)

// Updated animated link component with darker text
const AnimatedFooterLink: React.FC<FooterLinkProps> = ({ to, children }) => {
  if (to === "#") {
    return (
      <li>
        <span
          className="text-pebble-charcoal relative font-fustat group cursor-pointer"
        >
          {children}
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-pebble-charcoal scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </span>
      </li>
    );
  }
  
  return (
    <li>
      <Link
        to={to}
        className="text-pebble-charcoal relative font-fustat group"
      >
        {children}
        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-pebble-charcoal scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
      </Link>
    </li>
  );
};

export default CTASection;
