
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../components/Navbar";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import ServicesSection from "../components/sections/ServicesSection";
import ProductsSection from "../components/sections/ProductsSection";
import CTASection from "../components/sections/CTASection";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Index: React.FC = () => {
  useEffect(() => {
    // Refresh ScrollTrigger on component mount to ensure all elements are detected
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      // Clean up all ScrollTrigger instances on component unmount
      ScrollTrigger.getAll().forEach(trigger => trigger.kill(false));
    };
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProductsSection />
        <CTASection />
      </main>
    </div>
  );
};

export default Index;
