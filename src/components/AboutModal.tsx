import React, { useRef } from "react";
import { useGSAP, useRevealAnimation, useParallaxEffect, useImageParallax, useSplitTextAnimation } from "../hooks/useGSAP";
import { ArrowRight, X, Linkedin } from "lucide-react";
import { DialogContent } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useIsMobile } from "@/hooks/use-mobile";
import { getImagePath } from "@/utils/imageUtils";

const AboutModal = () => {
  const isMobile = useIsMobile();
  
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
    }
  ];

  return (
    <DialogContent ref={pageRef} className="max-w-6xl h-[80vh] overflow-hidden bg-white p-0">
      <ScrollArea className="h-full w-full">
        <main className="p-6 overflow-x-hidden">
          {/* Header Section */}
          <div className="container mx-auto px-4 mb-10">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-pebble-darkBlue font-funnel header-title split-text tracking-wide">
                Our Story
              </h1>
            </div>
          </div>
          
          {/* Main Content Section */}
          <div className="container mx-auto px-4 content-section">
            <div className="flex flex-col mb-16 max-w-3xl mx-auto text-center">
              {/* About Content */}
              <div className="about-content content-left">
                <div className="space-y-5">
                  <p className="text-lg text-pebble-secondaryText font-fustat about-paragraph">
                    Our journey began with a vision to bridge imagination and technology, creating immersive experiences that transform industries.
                  </p>
                  
                  <p className="text-lg text-pebble-secondaryText font-fustat about-paragraph">
                    With innovation at our core, we continue to push the boundaries of AR, VR, and 3D technology to redefine digital interaction.
                  </p>
                  
                  <p className="text-lg text-pebble-secondaryText font-fustat about-paragraph">
                    Trikonantara™ bridges imagination and technology, crafting immersive experiences that transform industries. We specialize in cutting-edge 3D, AR, and VR solutions, redefining how people explore and interact with the world.
                  </p>
                </div>
                
                {/* Associated Partners - responsive sizing */}
                <div className="mt-8 w-full">
                  <h3 className="text-lg font-medium mb-4 text-pebble-darkBlue font-fustat">Associated with</h3>
                  <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
                    <img 
                      src={getImagePath("/lovable-uploads/4eeead38-8221-4629-867d-ac3cf7391273.png")} 
                      alt="NITI Aayog & AIM Partner Logo" 
                      className={`${isMobile ? 'w-[150px]' : 'h-20'} partner-logo object-contain`} 
                    />
                    <img 
                      src={getImagePath("/lovable-uploads/ece65d10-2de9-4521-bebb-18990da2a976.png")} 
                      alt="ACIC-CBIT Partner Logo" 
                      className={`${isMobile ? 'w-[150px]' : 'h-20'} partner-logo object-contain`}
                    />
                    <img 
                      src={getImagePath("/lovable-uploads/startup-india-logo1-02-1024x265.webp")} 
                      alt="Startup India Logo" 
                      className="w-[180px] partner-logo object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mission & Vision Section */}
            <div className="max-w-3xl mx-auto mission-vision-section mb-16 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-pebble-darkBlue font-funnel reveal-element split-text tracking-wide">
                Mission & Vision
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="mission-vision-card bg-pebble-offWhite p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold mb-4 text-pebble-darkBlue font-funnel tracking-wide">
                    Mission
                  </h3>
                  <p className="text-pebble-secondaryText font-fustat">
                    To leverage AR/VR technologies to create immersive solutions that empower businesses and individuals, driving innovation across gaming, education, healthcare, and beyond.
                  </p>
                </div>
                
                <div className="mission-vision-card bg-pebble-offWhite p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
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
            <div id="team" className="max-w-3xl mx-auto team-section mb-10 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-10 text-pebble-darkBlue font-funnel reveal-element split-text tracking-wide">
                Our Team
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
                {teamMembers.map((member, index) => (
                  <div key={index} className="team-member flex flex-col items-center text-center">
                    <div className="mb-4 relative">
                      <div className="w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-pebble-lightBeige shadow-lg">
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
      </ScrollArea>
    </DialogContent>
  );
};

export default AboutModal;
