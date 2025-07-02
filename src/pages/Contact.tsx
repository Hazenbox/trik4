
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRevealAnimation } from "../hooks/useGSAP";
import CustomCursor from "../components/CustomCursor";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  useRevealAnimation(".reveal-element");
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent",
      description: "We've received your message and will get back to you soon!",
      duration: 5000
    });
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="bg-dark min-h-screen">
      <CustomCursor />
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center reveal-element">
              Get in <span className="text-glow">Touch</span>
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
              <div className="reveal-element space-y-8">
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-neon-blue bg-opacity-10 flex items-center justify-center flex-shrink-0">
                      <Mail className="text-neon-blue" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Email</h3>
                      <p className="text-gray-400">info@trikonantara.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-neon-blue bg-opacity-10 flex items-center justify-center flex-shrink-0">
                      <Phone className="text-neon-blue" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Phone</h3>
                      <p className="text-gray-400">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-neon-blue bg-opacity-10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-neon-blue" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Address</h3>
                      <p className="text-gray-400">123 Innovation Street, Tech City, CA 90210</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="reveal-element">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-black bg-opacity-30 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-neon-blue transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-black bg-opacity-30 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-neon-blue transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-black bg-opacity-30 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-neon-blue transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-black bg-opacity-30 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-neon-blue transition-colors"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="inline-flex items-center bg-neon-blue hover:bg-blue-600 text-white py-2 px-6 rounded-lg transition-colors duration-300 shadow-lg shadow-neon-blue/20"
                  >
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
