
import React, { useRef, useEffect } from "react";
import { Box, Building2, ShoppingBag } from "lucide-react";
import gsap from "gsap";

interface ServiceCardProps {
  title: string;
  description: string;
  path: string;
  type?: "arvr" | "archviz" | "ecommerce";
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, path, type = "arvr" }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const xPercent = x / rect.width - 0.5;
      const yPercent = y / rect.height - 0.5;

      gsap.to(card, {
        rotationY: xPercent * 10,
        rotationX: yPercent * -10,
        transformPerspective: 500,
        duration: 0.5,
        ease: "power1.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotationY: 0,
        rotationX: 0,
        duration: 0.5,
        ease: "power1.out"
      });
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const renderIcon = () => {
    switch (type) {
      case "arvr":
        return <Box className="text-pebble-darkBlue" size={24} />;
      case "archviz":
        return <Building2 className="text-pebble-darkBlue" size={24} />;
      case "ecommerce":
        return <ShoppingBag className="text-pebble-darkBlue" size={24} />;
      default:
        return <Box className="text-pebble-darkBlue" size={24} />;
    }
  };

  return (
    <div 
      ref={cardRef}
      className="bg-white border border-pebble-lightBeige rounded-xl p-6 hover:border-pebble-taupe transition-colors duration-300 transform-gpu shadow-md hover:shadow-lg"
    >
      <div className="mb-4 rounded-full w-12 h-12 flex items-center justify-center bg-pebble-lightBeige">
        {renderIcon()}
      </div>
      
      <h3 className="text-xl font-bold mb-3 text-pebble-darkBlue">{title}</h3>
      
      <p className="text-pebble-secondaryText font-fustat">{description}</p>
    </div>
  );
};

export default ServiceCard;
