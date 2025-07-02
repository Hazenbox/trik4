
import React, { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import emailjs from 'emailjs-com';

// Initialize EmailJS with your user ID
emailjs.init("NziQbJ5QIbFeBKVW5"); // This is a free public ID for demonstration

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      // Send email using EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'contactus@trikonantara.com'
      };
      
      console.log('Sending email to contactus@trikonantara.com:', templateParams);
      
      const response = await emailjs.send(
        'service_trikonantara', // Service ID from EmailJS
        'template_contact_form', // Template ID from EmailJS
        templateParams
      );
      
      console.log('Email sent successfully:', response);
      
      // Reset form after successful submission
      setFormData({ name: '', email: '', message: '' });
      
      // Show success toast
      toast({
        title: "Message sent!",
        description: "Your message has been sent to contactus@trikonantara.com",
      });
    } catch (error) {
      console.error('Error sending email:', error);
      
      // Show error toast
      toast({
        title: "Error sending message",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
          disabled={submitting}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
          disabled={submitting}
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
          disabled={submitting}
        />
      </div>
      <div className="flex justify-end">
        <Button 
          type="submit" 
          className="bg-[#1EAEDB] hover:bg-[#0FA0CE] text-white inline-flex items-center"
          disabled={submitting}
        >
          {submitting ? 'Sending...' : 'Send Message'}
          <Send className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
