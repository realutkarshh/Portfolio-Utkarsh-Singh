"use client";

import { useEffect, useState, useRef } from "react";
import { Github, Linkedin, Twitter, Heart } from "lucide-react";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  const socialLinks = [
    { 
      name: "GitHub", 
      href: "https://github.com/realutkarshh", 
      icon: Github,
      username: "@realutkarshh"
    },
    { 
      name: "LinkedIn", 
      href: "https://linkedin.com/in/realutkarshh", 
      icon: Linkedin,
      username: "Utkarsh Singh"
    },
    { 
      name: "Twitter", 
      href: "https://x.com/Utkarsh52762698", 
      icon: Twitter,
      username: "@realutkarshh"
    },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Works", href: "#works" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer className="py-20 px-6 lg:px-8 bg-gray-50 border-t border-gray-200" ref={footerRef}>
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Brand Section */}
          <div
            className={`transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-light text-gray-900 tracking-tight">
                Utkarsh Singh
              </h3>
              <p className="text-gray-600 font-light leading-relaxed max-w-sm">
                Full-stack developer crafting digital experiences with passion 
                and precision. Always learning, always building.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div
            className={`transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <h4 className="text-sm font-medium text-gray-700 uppercase tracking-wider mb-6">
              Navigate
            </h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-600 hover:text-black transition-colors duration-300 font-light"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Connect Section */}
          <div
            className={`transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <h4 className="text-sm font-medium text-gray-700 uppercase tracking-wider mb-6">
              Connect
            </h4>
            <div className="space-y-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-3 text-gray-600 hover:text-black transition-colors duration-300"
                >
                  <social.icon size={18} className="text-gray-400 group-hover:text-gray-600 transition-colors duration-300" />
                  <div>
                    <div className="font-light">{social.name}</div>
                    <div className="text-sm text-gray-400">{social.username}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className={`border-t border-gray-200 pt-8 transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-500">
              <span className="font-light">© 2024 Utkarsh Singh.</span>
              <span className="font-light">All rights reserved.</span>
            </div>

          </div>
        </div>

       

        {/* Bottom accent */}
        <div
          className={`mt-12 text-center transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: '1200ms' }}
        >
          <div className="inline-flex items-center space-x-2 text-xs text-gray-400">
            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
            <span className="font-light">Thanks for visiting</span>
            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
