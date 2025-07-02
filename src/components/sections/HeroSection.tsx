import React, { useEffect } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import ContactForm from "../ContactForm";
import { getImagePath } from "@/utils/imageUtils";

const HeroSection: React.FC = () => {
  const sectionId = "hero-section";

  useEffect(() => {
    // Wait for the DOM to be ready
    const ctx = gsap.context(() => {
      // Hero text animations
      gsap.from(".hero-title span", {
        opacity: 0,
        y: 100,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".hero-subtitle", {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
      });

      gsap.from(".hero-button", {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.8,
        ease: "power3.out",
      });

      // Marquee animation
      gsap.to(".marquee-wrapper", {
        xPercent: -50,
        ease: "none",
        duration: 30,
        repeat: -1,
      });
      
      // Section entry/exit animations
      gsap.to(`#${sectionId}`, {
        opacity: 1,
        duration: 1.2,
        delay: 0.2,
      });
    });

    return () => {
      // Clean up
      ctx.revert();
    };
  }, []);

  // Split text animation helper
  const SplitText = ({ text }: { text: string }) => {
    return (
      <>
        {text.split(" ").map((word, i) => (
          <span
            key={i}
            className="inline-block overflow-hidden relative"
          >
            <span className="inline-block hero-title-word">
              {word}&nbsp;
            </span>
          </span>
        ))}
      </>
    );
  };

  return (
    <section
      id={sectionId}
      className="min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[#5c0601] opacity-0 relative"
    >
      {/* Background image with 70% opacity (updated from 55%) */}
      <div className="absolute inset-0 z-0">
        <img 
          src={getImagePath("/lovable-uploads/c11a5cab-3262-4176-a476-f7843598ce3a.png")} 
          alt="VR Background" 
          className="w-full h-full object-cover absolute inset-0 opacity-70"
        />
        <div className="absolute inset-0 bg-[#5c0601] opacity-80"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-1/4 -left-24 w-96 h-96 bg-pebble-charcoal rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-float"></div>
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-pebble-taupe rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-float" style={{ animationDelay: "-2s" }}></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center py-20">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 hero-title text-pebble-lightBeige">
          <SplitText text="Immersive Innovation" />
        </h1>
        <p className="text-xl md:text-2xl text-pebble-lightBeige/80 max-w-3xl mx-auto mb-10 hero-subtitle">
          At Trikonantara, we merge imagination with cutting-edge technology, crafting immersive experiences that redefine industries and inspire new frontiers of exploration.
        </p>
        <div className="hero-button">
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
        </div>
      </div>

      <div className="absolute bottom-10 left-0 w-full">
        <div className="container mx-auto">
          <div className="marquee-container">
            <div className="marquee-wrapper flex">
              {Array(10).fill("AR/VR • Immersive Experiences • Innovation • Technology • ").map((text, i) => (
                <div key={i} className="marquee-element text-4xl font-bold text-pebble-lightBeige opacity-10">
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
