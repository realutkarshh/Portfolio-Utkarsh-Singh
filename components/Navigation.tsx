"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface NavigationProps {
  onContactFormOpen: () => void;
  scrollToSection: (sectionId: string) => void;
}

export default function Navigation({ onContactFormOpen, scrollToSection }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animation on mount
    setIsVisible(true);

    // Scroll detection for enhanced backdrop
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: "ABOUT", action: () => handleScrollToSection("about") },
    { name: "WORKS", action: () => handleScrollToSection("works") },
    { name: "PROJECTS", href: "/projects" },
    { name: "CONTACT", action: () => handleScrollToSection("contact") },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-200/60' 
          : 'bg-white/90 backdrop-blur-md border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div
            className={`transform transition-all duration-700 ease-out ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
            }`}
          >
            <Link
              href="/"
              className="font-light text-xl text-gray-900 hover:text-black transition-colors duration-300 tracking-wide"
            >
              UTKARSH SINGH
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div 
            className={`hidden md:flex items-center space-x-8 transform transition-all duration-700 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            {navItems.map((item, index) => (
              <div
                key={item.name}
                className={`transform transition-all duration-500 ease-out ${
                  isVisible ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                {item.href ? (
                  <Link 
                    href={item.href} 
                    className="text-gray-600 hover:text-black transition-colors duration-300 font-light relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ) : (
                  <button
                    onClick={item.action}
                    className="text-gray-600 hover:text-black transition-colors duration-300 font-light relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full"></span>
                  </button>
                )}
              </div>
            ))}
            
            <div
              className={`transform transition-all duration-700 ease-out ${
                isVisible ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-4 opacity-0 scale-95'
              }`}
              style={{ transitionDelay: '700ms' }}
            >
              <Button
                className="group bg-black text-white hover:bg-black cursor-pointer rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95"
                onClick={onContactFormOpen}
              >
                Let's Talk
                <ArrowRight size={14} className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div
            className={`md:hidden transform transition-all duration-700 ease-out ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <button
              className="p-3 hover:bg-gray-100 rounded-full transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute top-1 left-0 w-6 h-0.5 bg-black transition-all duration-300 ease-out ${
                    isMenuOpen ? "rotate-45 top-3" : ""
                  }`}
                />
                <span
                  className={`absolute top-3 left-0 w-6 h-0.5 bg-black transition-all duration-300 ease-out ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute top-5 left-0 w-6 h-0.5 bg-black transition-all duration-300 ease-out ${
                    isMenuOpen ? "-rotate-45 top-3" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden bg-white/98 backdrop-blur-xl border-t border-gray-100 transition-all duration-400 ease-out ${
          isMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-6 py-8 space-y-6">
          {navItems.map((item, index) => (
            <div
              key={item.name}
              className={`transform transition-all duration-500 ease-out ${
                isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {item.href ? (
                <Link
                  href={item.href}
                  className="block text-left text-gray-600 hover:text-black text-lg font-light transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  onClick={item.action}
                  className="block text-left text-gray-600 hover:text-black text-lg font-light transition-colors duration-300"
                >
                  {item.name}
                </button>
              )}
            </div>
          ))}
          
          <div
            className={`pt-4 transform transition-all duration-500 ease-out ${
              isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <Button
              className="w-full bg-black text-white hover:bg-gray-800 rounded-full py-3 text-base font-medium transition-colors duration-300"
              onClick={() => {
                onContactFormOpen();
                setIsMenuOpen(false);
              }}
            >
              Let's Talk
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
