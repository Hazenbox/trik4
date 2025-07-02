
import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Set up cursor movement
    const onMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.1,
          ease: "power2.out",
        });
      }
    };

    // Handle hover states
    const onMouseDown = () => setIsActive(true);
    const onMouseUp = () => setIsActive(false);
    
    // Add listeners
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    
    // Cleanup
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <div 
      ref={cursorRef}
      className={`custom-cursor ${isActive ? "custom-cursor-active" : ""}`}
    />
  );
};

export default CustomCursor;
