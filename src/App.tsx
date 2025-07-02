import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import AboutModal from "./components/AboutModal";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Determine the basename for the router based on environment
const getBasename = () => {
  // Use the base path from Vite config in production
  if (import.meta.env.PROD) {
    return '/Tk';
  }
  // No base path needed in development
  return '/';
};

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Initialize any global GSAP settings
    gsap.config({
      nullTargetWarn: false,
    });
    
    // Smooth scroll initialization
    const smoothScroll = () => {
      const html = document.documentElement;
      const body = document.body;
      
      const height = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );
      
      // Refresh ScrollTrigger on page change/navigation
      ScrollTrigger.refresh();
    };
    
    smoothScroll();
    
    return () => {
      // Clean up all ScrollTrigger instances on component unmount
      ScrollTrigger.getAll().forEach(trigger => trigger.kill(false));
      ScrollTrigger.clearMatchMedia();
    };
  }, []);

  // About page now just shows the modal and redirects to home
  const AboutRedirect = () => {
    useEffect(() => {
      const dialog = document.createElement('div');
      document.body.appendChild(dialog);
      
      // Create a trigger for the dialog and click it
      const dialogTrigger = document.createElement('button');
      dialogTrigger.setAttribute('id', 'about-modal-trigger');
      dialogTrigger.style.display = 'none';
      dialog.appendChild(dialogTrigger);
      
      setTimeout(() => {
        dialogTrigger.click();
        window.location.href = getBasename() + '/';
      }, 100);
      
      return () => {
        document.body.removeChild(dialog);
      };
    }, []);
    
    return (
      <Dialog>
        <DialogTrigger id="about-modal-trigger" />
        <AboutModal />
      </Dialog>
    );
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={getBasename()}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutRedirect />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
