
import React, { useEffect } from "react";
import ServiceCard from "../ServiceCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const ServicesSection: React.FC = () => {
  const sectionId = "services-section";

  useEffect(() => {
    // Wait for the DOM to be ready
    const ctx = gsap.context(() => {
      // Split text animation for the title
      const headings = document.querySelectorAll(".services-title");
      headings.forEach((el) => {
        const text = el.textContent || "";
        const words = text.split(' ');
        el.innerHTML = '';
        
        words.forEach((word) => {
          const wordSpan = document.createElement('span');
          wordSpan.className = 'inline-block opacity-0 transform translate-y-[20px]';
          wordSpan.textContent = word + ' ';
          el.appendChild(wordSpan);
        });
        
        gsap.to(el.querySelectorAll('span'), {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        });
      });

      // Section title fade in
      gsap.from(".services-heading", {
        y: 30,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".services-container",
          start: "top 85%",
          end: "top 40%",
          scrub: 1,
        },
      });
      
      // Left column fade in
      gsap.from(".services-intro", {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".services-container",
          start: "top 85%",
          end: "top 40%",
          scrub: 1,
        },
      });
      
      // Cards staggered animation with better fade effect
      gsap.from(".service-card-wrapper", {
        y: 60,
        opacity: 0,
        stagger: 0.3,
        duration: 1,
        scrollTrigger: {
          trigger: ".services-cards",
          start: "top 80%",
          end: "top 30%",
          scrub: 1,
        },
      });

      // Section entry/exit animations
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
    });

    return () => {
      // Clean up
      ctx.revert();
    };
  }, []);

  return (
    <section 
      id={sectionId}
      className="min-h-screen py-20 relative bg-white flex items-center opacity-0"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pebble-taupe rounded-full mix-blend-multiply filter blur-[128px] opacity-5"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-pebble-olive rounded-full mix-blend-multiply filter blur-[128px] opacity-5"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 services-container">
        <div className="text-center mb-16 services-heading">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-black services-title tracking-wide">
            Our Services
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto services-intro">
            Making cutting-edge AR/VR technology accessible to all. We create immersive experiences that redefine digital interaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto services-cards">
          <div className="service-card-wrapper">
            <ServiceCard
              title="AR/VR Interactive"
              description="Immersive experiences blending digital and physical worlds for training, entertainment, and visualization."
              path="/services/arvr"
              type="arvr"
            />
          </div>
          
          <div className="service-card-wrapper">
            <ServiceCard
              title="Arch Viz"
              description="High-quality 3D renderings that bring architectural designs to life before construction begins."
              path="/services/archviz"
              type="archviz"
            />
          </div>
          
          <div className="service-card-wrapper">
            <ServiceCard
              title="3D for E-commerce"
              description="High-quality 3D content development and video production, creating immersive and engaging digital experiences."
              path="/services/ecommerce"
              type="ecommerce"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
