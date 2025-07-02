
import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin, Twitter, Youtube, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-[#D2B48C] py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col items-center">
          <div className="mb-10">
            <h3 className="text-3xl font-bold mb-6 text-pebble-darkBlue">
              Trikonantara
            </h3>
            <p className="text-pebble-secondaryText mb-4 font-fustat">
              Bridging imagination and technology through immersive experiences
            </p>
          </div>

          <div className="mb-10">
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <AnimatedFooterLink to="/about">About</AnimatedFooterLink>
              <AnimatedFooterLink to="/contact">Contact</AnimatedFooterLink>
              <AnimatedFooterLink to="/blog">Blog</AnimatedFooterLink>
            </div>
          </div>

          <div className="mb-10">
            <h4 className="text-base font-semibold mb-6 text-pebble-darkBlue">
              Social
            </h4>
            <div className="flex justify-center space-x-4 mb-6">
              <a href="https://x.com/trikonantara" target="_blank" rel="noopener noreferrer" className="text-pebble-taupe hover:text-pebble-darkBlue transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="https://www.linkedin.com/company/trikonantara-innovation-technology-private-limited/" target="_blank" rel="noopener noreferrer" className="text-pebble-taupe hover:text-pebble-darkBlue transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="https://www.youtube.com/@Trikonantara" target="_blank" rel="noopener noreferrer" className="text-pebble-taupe hover:text-pebble-darkBlue transition-colors duration-300">
                <Youtube size={20} />
              </a>
              <a href="https://www.instagram.com/trikonantara/" target="_blank" rel="noopener noreferrer" className="text-pebble-taupe hover:text-pebble-darkBlue transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61573968217226" target="_blank" rel="noopener noreferrer" className="text-pebble-taupe hover:text-pebble-darkBlue transition-colors duration-300">
                <Facebook size={20} />
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <FooterLink to="https://x.com/trikonantara" external>X (Twitter)</FooterLink>
              <FooterLink to="https://www.linkedin.com/company/trikonantara-innovation-technology-private-limited/" external>LinkedIn</FooterLink>
              <FooterLink to="https://www.youtube.com/@Trikonantara" external>YouTube</FooterLink>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center mt-16 pt-8 border-t border-pebble-taupe border-opacity-20">
          <div className="mb-6 md:mb-0 text-center">
            <p className="text-sm text-pebble-secondaryText font-fustat">© 2025 Trikonantara Innovation Technology Private Limited. All rights reserved</p>
          </div>

          <div className="flex space-x-6 text-sm text-pebble-secondaryText font-fustat md:ml-8">
            <Link to="/privacy" className="hover:text-pebble-darkBlue transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-pebble-darkBlue transition-colors duration-300">
              Terms of Use
            </Link>
          </div>
        </div>
        
        <div className="mt-8 text-sm text-pebble-secondaryText font-fustat">
          <p>Phone: +91 9493803629</p>
          <p>Email: contactus@trikonantara.com</p>
          <p>Address: 18-4-174, Near Munurkapu, Sangam, Aliabad, Hyderabad, Charminar, Telangana, India, 500053</p>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
  external?: boolean;
}

const FooterLink: React.FC<FooterLinkProps> = ({ to, children, external }) => {
  if (external) {
    return (
      <a
        href={to}
        className="text-pebble-secondaryText hover:text-pebble-darkBlue transition-colors duration-300 font-fustat"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }
  
  return (
    <Link
      to={to}
      className="text-pebble-secondaryText hover:text-pebble-darkBlue transition-colors duration-300 font-fustat"
    >
      {children}
    </Link>
  );
};

const AnimatedFooterLink: React.FC<FooterLinkProps> = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="text-pebble-darkBlue relative font-fustat group"
    >
      {children}
      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-pebble-darkBlue scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
    </Link>
  );
};

export default Footer;
