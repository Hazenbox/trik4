
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface PixelCardProps {
  title: string;
  description: string;
  footerText?: string;
  imageSrc?: string;
  className?: string;
  link?: string;
}

const PixelCard = ({
  title,
  description,
  footerText,
  imageSrc,
  className,
  link = "#",
}: PixelCardProps) => {
  const [hovering, setHovering] = useState(false);

  return (
    <Card
      className={cn(
        "group relative overflow-hidden rounded-lg border transition-colors hover:border-pebble-darkBlue",
        className
      )}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(110deg,#00000000,#00000000_45%,#e5edf950,#00000000_55%,#00000000)]" 
          style={{
            animation: hovering ? "shine 2s infinite" : "none",
          }}
        />
        <div className="h-full w-full">
          {/* Pixel Grid Effect */}
          <div className="grid h-full w-full grid-cols-[repeat(16,1fr)] grid-rows-[repeat(16,1fr)]">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="absolute rounded-sm bg-pebble-offWhite opacity-0 transition-opacity group-hover:opacity-20"
                style={{
                  top: `${Math.floor(Math.random() * 90)}%`,
                  left: `${Math.floor(Math.random() * 90)}%`,
                  width: `${Math.floor(Math.random() * 3) + 1}px`,
                  height: `${Math.floor(Math.random() * 3) + 1}px`,
                  transitionDelay: `${i * 0.05}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <CardHeader>
          <CardTitle className="text-2xl font-extrabold tracking-tighter transition-colors group-hover:text-pebble-blue">
            {title}
          </CardTitle>
          <CardDescription className="font-medium text-pebble-secondaryText">
            {description}
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          {imageSrc && (
            <div className="rounded-md overflow-hidden mb-4">
              <img 
                src={imageSrc} 
                alt={title} 
                className="w-full h-40 object-cover transition-transform group-hover:scale-105" 
              />
            </div>
          )}
        </CardContent>
        
        <CardFooter className="flex justify-between items-center">
          <p className="text-sm text-pebble-secondaryText">{footerText}</p>
          <Link to={link}>
            <Button 
              variant="ghost" 
              className="group/btn px-2 py-1"
            >
              <span className="mr-1 text-pebble-darkBlue group-hover/btn:text-pebble-blue transition-colors">
                Learn More
              </span>
              <ChevronRight 
                className="h-4 w-4 text-pebble-darkBlue group-hover/btn:text-pebble-blue transition-transform group-hover/btn:translate-x-1" 
              />
            </Button>
          </Link>
        </CardFooter>
      </div>
    </Card>
  );
};

export default PixelCard;
