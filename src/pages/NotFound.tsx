
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import gsap from "gsap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Log the 404 error
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );

    // Animation for the 404 text
    gsap.from(".error-title", {
      opacity: 0,
      y: -50,
      duration: 0.8,
      ease: "power3.out"
    });

    // Animation for the message
    gsap.from(".error-message", {
      opacity: 0,
      y: 50,
      duration: 0.8,
      delay: 0.3,
      ease: "power3.out"
    });

    // Animation for the return button
    gsap.from(".return-button", {
      opacity: 0,
      y: 50,
      duration: 0.8,
      delay: 0.6,
      ease: "power3.out"
    });
  }, [location.pathname]);

  return (
    <div className="bg-dark min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center py-20">
        <div className="text-center px-4">
          <h1 className="error-title text-9xl font-bold mb-4 glitch" data-text="404">
            404
          </h1>
          <p className="error-message text-2xl text-gray-400 mb-8">
            Oops! The virtual reality you're looking for doesn't exist.
          </p>
          <Link 
            to="/"
            className="return-button inline-flex items-center bg-neon-blue hover:bg-blue-600 text-white py-3 px-6 rounded-full transition-colors duration-300 shadow-lg shadow-neon-blue/20"
          >
            Return to Reality
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
