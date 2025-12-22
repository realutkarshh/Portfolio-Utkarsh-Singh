"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface NavigationProps {
  onContactFormOpen: () => void;
  scrollToSection: (sectionId: string) => void;
}

export default function Navigation({
  onContactFormOpen,
  scrollToSection,
}: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", sectionId: "about" },
    { name: "WORKS", sectionId: "works" },
    { name: "PROJECTS", href: "/projects" },
    { name: "CONTACT", sectionId: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP animation setup
  useGSAP(
    () => {
      // Set initial state: invisible and below
      gsap.set(".menu-link-item-holder", { y: 100, opacity: 0 });

      timelineRef.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay-nav", {
          duration: 1.25,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(
          ".menu-link-item-holder",
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.1,
            ease: "power4.inOut",
            delay: -0.75,
          }
        );
    },
    { scope: containerRef }
  );

  useEffect(() => {
    if (!timelineRef.current) return;
    if (isMenuOpen) {
      timelineRef.current.play();
    } else {
      timelineRef.current.reverse();
    }
  }, [isMenuOpen]);

  const handleNavClick = (item: (typeof navItems)[number]) => {
    if (item.sectionId) {
      scrollToSection(item.sectionId);
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <div ref={containerRef}>
     
      <nav className="fixed top-0 w-full z-40 transition-all duration-500 ease-out">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="flex justify-between items-center h-20">
      {/* Logo */}
      <Link
        href="/"
        className="font-light text-xl text-gray-900 hover:text-black transition-colors duration-300 tracking-wide"
      >
        UTKARSH SINGH
      </Link>

      {/* Menu Button - Rounded */}
      <button
        onClick={toggleMenu}
        className="relative z-50 flex items-center gap-3 px-5 py-2.5 text-sm font-light text-gray-900 hover:text-black transition-all duration-300 group rounded-full border border-gray-200 hover:border-gray-900 bg-white/80 backdrop-blur-sm hover:bg-white"
      >
        <span className="tracking-wide">Menu</span>
        <div className="relative w-6 h-6">
          <span
            className={`absolute top-2 left-0 w-6 h-0.5 bg-gray-900 transition-all duration-300 ease-out`}
          />
          <span
            className={`absolute top-[14px] left-0 w-6 h-0.5 bg-gray-900 transition-all duration-300 ease-out`}
          />
          <span
            className={`absolute top-[20px] left-0 w-6 h-0.5 bg-gray-900 transition-all duration-300 ease-out`}
          />
        </div>
      </button>
    </div>
  </div>
</nav>


      {/* Full-Screen Overlay Menu */}
      <div
        className="menu-overlay-nav fixed inset-0 w-screen h-screen bg-gray-950 z-50 flex items-center justify-center"
        style={{
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          pointerEvents: isMenuOpen ? "auto" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-10 w-full">
          {/* Close Button */}
          <button
            onClick={toggleMenu}
            className="fixed top-8 right-6 lg:right-10 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300"
          >
            <X className="w-8 h-8 text-white" />
          </button>

          {/* Navigation Links */}
          <div className="space-y-4 sm:space-y-6">
            {navItems.map((item) => (
              <div key={item.name} className="menu-link-item w-max overflow-hidden h-[3rem] sm:h-[5rem] md:h-[6.5rem] lg:h-[5.4rem]">
                <div className= "cursor-pointer menu-link-item-holder relative">
                  {item.href ? (
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="cursor-pointer block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white hover:text-gray-300 tracking-tight transition-colors duration-300 leading-none"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleNavClick(item)}
                      className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white hover:text-gray-300 tracking-tight transition-colors duration-300 leading-none"
                    >
                      {item.name}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="fixed bottom-8 left-6 right-6 lg:left-10 lg:right-10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-8">
            {/* CTA Button */}
            <div className="menu-link-item-holder">
              <Button
                onClick={() => {
                  onContactFormOpen();
                  setIsMenuOpen(false);
                }}
                className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-4 text-base font-medium transition-all duration-300"
              >
                Let's Talk
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>

            {/* Contact Info */}
            <div className="text-sm text-gray-400 space-y-1 menu-link-item-holder">
              <p>realutkarshhl@gmail.com</p>
              <p>Available for new projects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
