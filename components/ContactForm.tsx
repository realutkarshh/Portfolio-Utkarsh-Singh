"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Immediate trigger for smoother animation
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  const handleContactFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        onClose();
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ease-out ${
        isVisible ? 'bg-black/40 backdrop-blur-sm' : 'bg-black/0'
      }`}
      onClick={handleBackdropClick}
    >
      <div 
        className={`bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-hidden shadow-2xl transform transition-all duration-400 ease-out ${
          isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-4 opacity-0 scale-98'
        }`}
      >
        {/* Header */}
        <div className="px-8 py-6 border-b border-gray-100">
          <div 
            className={`flex justify-between items-center transform transition-all duration-300 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <div>
              <h3 className="text-3xl font-light text-gray-900 tracking-tight">
                Let's collaborate
              </h3>
              <p className="text-sm text-gray-500 font-light mt-1">
                Tell me about your project
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <X size={18} className="text-gray-400" />
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="px-8 py-8">
          <form onSubmit={handleContactFormSubmit} className="space-y-6">
            {/* Name Field */}
            <div 
              className={`transform transition-all duration-300 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
              }`}
              style={{ transitionDelay: '150ms' }}
            >
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-3"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:bg-white focus:border-gray-300 focus:ring-0 transition-all duration-200 font-light"
                placeholder="Your name"
              />
            </div>

            {/* Email Field */}
            <div 
              className={`transform transition-all duration-300 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-3"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:bg-white focus:border-gray-300 focus:ring-0 transition-all duration-200 font-light"
                placeholder="your@email.com"
              />
            </div>

            {/* Message Field */}
            <div 
              className={`transform transition-all duration-300 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
              }`}
              style={{ transitionDelay: '250ms' }}
            >
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-3"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:bg-white focus:border-gray-300 focus:ring-0 resize-none transition-all duration-200 font-light"
                placeholder="Tell me about your project..."
              />
            </div>

            {/* Submit Button */}
            <div 
              className={`pt-2 transform transition-all duration-300 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white hover:bg-gray-800 disabled:bg-gray-400 rounded-2xl py-4 text-base font-medium transition-colors duration-200"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div 
          className={`px-8 py-4 bg-gray-50 transform transition-all duration-300 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
          }`}
          style={{ transitionDelay: '350ms' }}
        >
          <p className="text-xs text-gray-500 text-center font-light">
            I'll get back to you within 24 hours
          </p>
        </div>
      </div>
    </div>
  );
}
