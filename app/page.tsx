"use client";

import { useState } from "react";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import WorksSection from "../components/WorksSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import FAQSection from "@/components/FAQSection";
import QuestionMarquee from "@/components/marqueeHeading";

export default function Portfolio() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactFormOpen = () => {
    setIsContactFormOpen(true);
  };

  const handleContactFormClose = () => {
    setIsContactFormOpen(false);
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation
        onContactFormOpen={handleContactFormOpen}
        scrollToSection={scrollToSection}
      />
      
      <HeroSection onContactFormOpen={handleContactFormOpen} />
      
      <AboutSection />
      
      <WorksSection />
      
      <ContactSection onContactFormOpen={handleContactFormOpen} />

      <QuestionMarquee />

      <FAQSection />
            
      <Footer />
      
      <ContactForm
        isOpen={isContactFormOpen}
        onClose={handleContactFormClose}
      />
    </div>
  );
}