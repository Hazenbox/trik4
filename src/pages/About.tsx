import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useGSAP, useRevealAnimation, useParallaxEffect, useImageParallax, useSplitTextAnimation } from "../hooks/useGSAP";
import CustomCursor from "../components/CustomCursor";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";
import { getImagePath } from "@/utils/imageUtils";

const About = () => {
  // Basic reveal animation for elements
  useRevealAnimation(".reveal-element");
  
  // Parallax effect for background elements
  useParallaxEffect(".parallax-bg", 0.2);
  
  // Apply split text animation for headings
  useSplitTextAnimation(".split-text");
  
  // Apply parallax effect to images
  useImageParallax(".parallax-image");
  
  // Advanced GSAP animations
  const pageRef = useGSAP((gsap, scrollTrigger) => {
    // Header text animation
    gsap.from(".header-title", {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
    
    // Content columns animation
    gsap.from(".content-left", {
      x: -50,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".content-section",
        start: "top 70%",
        end: "top 40%",
        scrub: 1,
      },
    });
    
    gsap.from(".content-right", {
      x: 50,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".content-section",
        start: "top 70%",
        end: "top 40%",
        scrub: 1,
      },
    });
    
    // Card staggered animations
    gsap.from(".mission-vision-card", {
      y: 80,
      opacity: 0,
      stagger: 0.3,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".mission-vision-section",
        start: "top 70%",
        end: "top 40%",
        scrub: 1,
      },
    });
    
    // Team member animations
    gsap.from(".team-member", {
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".team-section",
        start: "top 80%",
        end: "top 60%",
        scrub: 1,
      },
    });
    
    // Section divider line animation
    gsap.from(".section-divider", {
      scaleX: 0,
      transformOrigin: "left center",
      duration: 1.5,
      scrollTrigger: {
        trigger: ".section-divider",
        start: "top 80%",
        end: "top 60%",
        scrub: 1,
      },
    });
    
    // Text paragraphs reveal
    gsap.from(".about-paragraph", {
      y: 30,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".about-content",
        start: "top 70%",
        end: "top 40%",
        scrub: 1,
      },
    });
  }, []);

  const teamMembers = [
    {
      name: "Kiran Mudhili",
      position: "Founder & Chief AR/VR Tech Head",
      image: getImagePath("/lovable-uploads/8b90a88a-fd23-40f1-8cd2-14913e3b46a6.png"),
      linkedin: "https://www.linkedin.com/in/mudhilikiran/"
    },
    {
      name: "Sai Pradeep Goud",
      position: "Founder & Chief Business Head",
      image: getImagePath("/lovable-uploads/0b33174d-09b4-45f2-ae15-93c39ea68601.png"),
      linkedin: "https://www.linkedin.com/in/srimanthulla-saipradeepgoud/"
    },
    {
      name: "Nagaraju Pandi",
      position: "Founder & Chief 3D Tech Head",
      image: getImagePath("/lovable-uploads/fe111264-f53d-43d1-9b62-e41ef44ca5cf.png"),
      linkedin: "https://www.linkedin.com/in/nagaraju-pandi/"
    }
  ];

  return (
    <div ref={pageRef} className="bg-pebble-cream min-h-screen">
      <CustomCursor />
      <Navbar />
      
      <main className="pt-24 pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-40 -left-24 w-96 h-96 bg-pebble-taupe rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-float parallax-bg"></div>
        <div className="absolute top-[60%] right-0 w-80 h-80 bg-pebble-darkTaupe rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-float parallax-bg" style={{ animationDelay: "-3s" }}></div>
        
        {/* Header Section */}
        <div className="container mx-auto px-4 mb-20">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-pebble-darkBlue font-funnel header-title split-text tracking-wide">
              About Trikonantara
            </h1>
            <div className="h-1 w-20 bg-pebble-taupe mx-auto mb-12 section-divider"></div>
          </div>
        </div>
        
        {/* Main Content Section */}
        <div className="container mx-auto px-4 content-section">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start mb-20 max-w-5xl mx-auto">
            {/* Left Column - About Content */}
            <div className="about-content content-left md:col-span-5">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-pebble-darkBlue font-funnel reveal-element split-text tracking-wide">
                Our Story
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg text-pebble-secondaryText font-fustat about-paragraph">
                  Our journey began with a vision to bridge imagination and technology, creating immersive experiences that transform industries.
                </p>
                
                <p className="text-lg text-pebble-secondaryText font-fustat about-paragraph">
                  With innovation at our core, we continue to push the boundaries of AR, VR, and 3D technology to redefine digital interaction.
                </p>
                
                <p className="text-lg text-pebble-secondaryText font-fustat about-paragraph">
                  Trikonantara bridges imagination and technology, crafting immersive experiences that transform industries. We specialize in cutting-edge 3D, AR, and VR solutions, redefining how people explore and interact with the world.
                </p>
              </div>
              
              {/* Associated with section */}
              <div className="mt-8">
                <h3 className="text-xl font-medium mb-4 text-pebble-darkBlue font-funnel">Associated with</h3>
                <div className="flex flex-col space-y-4">
                  <img src={getImagePath("/lovable-uploads/4eeead38-8221-4629-867d-ac3cf7391273.png")} alt="NITI Aayog & AIM Partner Logo" className="h-20 partner-logo" />
                  <img src={getImagePath("/lovable-uploads/ece65d10-2de9-4521-bebb-18990da2a976.png")} alt="ACIC-CBIT Partner Logo" className="h-20 partner-logo" />
                  <img src={getImagePath("/lovable-uploads/startup-india-logo1-02-1024x265.webp")} alt="Startup India Logo" className="w-[180px] partner-logo" />
                </div>
              </div>
              
              <div className="mt-10">
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-[#5c0601] hover:bg-[#5c0601]/90 text-pebble-cream py-3 px-8 rounded-none transition-all duration-300 shadow-lg shadow-pebble-charcoal/20 reveal-element"
                >
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            
            {/* Right Column - Image */}
            <div className="content-right md:col-span-7">
              <div className="bg-pebble-offWhite rounded-xl overflow-hidden shadow-md">
                <div className="overflow-hidden">
                  <img 
                    src={getImagePath("/lovable-uploads/789b56f2-093e-4961-a436-b091c1f2a2ca.png")} 
                    alt="About Trikonantara" 
                    className="w-full h-auto object-cover parallax-image transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Mission & Vision Section */}
          <div className="max-w-5xl mx-auto mission-vision-section mb-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-pebble-darkBlue font-funnel text-center reveal-element split-text tracking-wide">
              Mission & Vision
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="mission-vision-card bg-pebble-offWhite p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-4 text-pebble-darkBlue font-funnel tracking-wide">
                  Mission
                </h3>
                <p className="text-pebble-secondaryText font-fustat">
                  To leverage AR/VR technologies to create immersive solutions that empower businesses and individuals, driving innovation across gaming, education, healthcare, and beyond.
                </p>
              </div>
              
              <div className="mission-vision-card bg-pebble-offWhite p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-4 text-pebble-darkBlue font-funnel tracking-wide">
                  Vision
                </h3>
                <p className="text-pebble-secondaryText font-fustat">
                  To lead global AR/VR innovation, shaping a future where immersive technologies dissolve boundaries between digital and physical realms, enabling endless creativity and transformative experiences.
                </p>
              </div>
            </div>
          </div>
          
          {/* Team Section */}
          <div id="team" className="max-w-5xl mx-auto team-section">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-pebble-darkBlue font-funnel text-center reveal-element split-text tracking-wide">
              Our Team
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {teamMembers.map((member, index) => (
                <div key={index} className="team-member flex flex-col items-center text-center">
                  <div className="mb-4 relative">
                    <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-pebble-lightBeige shadow-lg">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="absolute bottom-2 right-2 bg-pebble-darkBlue p-2 rounded-full text-white shadow-md hover:bg-[#0077B5] transition-colors duration-300"
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                  <h3 className="text-xl font-bold text-pebble-darkBlue font-funnel mb-1 tracking-wide">
                    {member.name}
                  </h3>
                  <p className="text-pebble-secondaryText font-fustat">
                    {member.position}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
