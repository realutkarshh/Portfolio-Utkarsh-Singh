"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MapPin, Clock, Github, Linkedin, Twitter, Download } from "lucide-react";
import { useEffect, useState, useRef } from "react";

interface ContactSectionProps {
  onContactFormOpen: () => void;
}

export default function ContactSection({ onContactFormOpen }: ContactSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Add your Google Drive shareable link here
  const RESUME_GOOGLE_DRIVE_LINK = "https://drive.google.com/file/d/1v_ikcV57SiCm4m8UPMbheZNa32nHyZ4O/view?usp=sharing";

  // Function to convert Google Drive shareable link to direct download link
  const getDirectDownloadLink = (shareableLink: string) => {
    // Extract file ID from various Google Drive URL formats
    const fileIdMatch = shareableLink.match(/\/d\/([a-zA-Z0-9-_]+)/);
    if (fileIdMatch && fileIdMatch[1]) {
      const fileId = fileIdMatch[1];
      return `https://drive.google.com/uc?export=download&id=${fileId}`;
    }
    
    // Fallback: if it's already a direct link or different format
    return shareableLink;
  };

  const handleResumeDownload = () => {
    const directLink = getDirectDownloadLink(RESUME_GOOGLE_DRIVE_LINK);
    
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = directLink;
    link.download = 'Utkarsh_Singh_Resume.pdf'; // You can customize the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "utkarsh2020051@gmail.com",
      href: "mailto:utkarsh2020051@gmail.com",
      description: "Best way to reach me"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "New Delhi, India",
      href: null,
      description: "Available for remote work"
    },
    {
      icon: Clock,
      label: "Availability",
      value: "Open for opportunities",
      href: null,
      description: "Full-time & freelance projects"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/utkarsh",
      username: "@utkarsh"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/utkarsh",
      username: "Utkarsh Singh"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/utkarsh",
      username: "@utkarsh"
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 lg:px-8 bg-gray-50" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div
            className={`transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <h2 className="text-6xl lg:text-7xl font-light text-gray-900 tracking-tight mb-6">
              Let's create
            </h2>
            <h2 className="text-6xl lg:text-7xl font-medium text-black tracking-tight">
              together
            </h2>
            <div className="w-16 h-px bg-gray-300 mx-auto mt-8"></div>
          </div>
          
          <div
            className={`mt-12 transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <p className="text-xl font-light text-gray-600 max-w-2xl mx-auto leading-relaxed">
              I'm passionate about turning ideas into exceptional digital experiences. 
              Whether you have a project in mind or just want to connect, I'd love to hear from you.
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center mb-24 transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <Button
            className="group bg-gray-950 text-white hover:bg-gray-800 rounded-full px-4 py-4 text-base font-medium transition-all duration-300 hover:scale-105 active:scale-95"
            onClick={onContactFormOpen}
          >
            Start a conversation
            <ArrowRight size={18} className="ml-3 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
          <Button
            variant="outline"
            className="group rounded-full border-gray-300 text-gray-900 hover:bg-gray-100 hover:text-gray-900 hover:cursor-pointer hover:border-gray-400 px-8 py-4 text-base font-medium bg-white transition-all duration-300 hover:scale-105 active:scale-95"
            onClick={handleResumeDownload}
          >
            <Download size={16} className="mr-2 transition-transform duration-300 group-hover:translate-y-[-1px]" />
            Download Resume
          </Button>
        </div>

        {/* Rest of your component remains the same */}
        {/* Contact Information */}
        <div className="mb-20">
          <div
            className={`text-center mb-12 transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            <h3 className="text-2xl font-light text-gray-900 mb-2">Get in touch</h3>
            <p className="text-gray-500 font-light">Multiple ways to connect</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((item, index) => (
              <div
                key={item.label}
                className={`transform transition-all duration-1000 ease-out ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${1000 + index * 150}ms` }}
              >
                <div className="bg-white rounded-2xl p-8 text-center hover:shadow-sm transition-shadow duration-300 border border-gray-100">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-200 transition-colors duration-300">
                    <item.icon size={20} className="text-gray-600" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">{item.label}</h4>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-gray-600 hover:text-black transition-colors duration-200 font-light block mb-2"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-gray-600 font-light mb-2">{item.value}</p>
                  )}
                  <p className="text-sm text-gray-400 font-light">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom accent */}
        <div
          className={`mt-16 text-center transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: '2000ms' }}
        >
          <div className="inline-flex items-center space-x-2 text-sm text-gray-400">
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <span className="font-light">Ready to build something amazing</span>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
