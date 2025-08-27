"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Vortex } from "../components/ui/vortex";
import { useEffect, useState } from "react";

interface HeroSectionProps {
  onContactFormOpen: () => void;
}

export default function HeroSection({ onContactFormOpen }: HeroSectionProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center px-6 lg:px-12 pt-20 md:pt-0">
      <Vortex
        backgroundColor="#ffffff"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-8">
              {/* Greeting */}
              <div 
                className={`transform transition-all duration-1000 ease-out ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                <p className="text-xl text-gray-600 tracking-wide">
                  Hello! I'm Utkarsh.
                </p>
              </div>

              {/* Main Heading */}
              <div
                className={`transform transition-all duration-1000 ease-out ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-black leading-[0.9]">
                  Developing digital
                  <br />
                  products with emphasis
                  <br />
                  on{" "}
                  <span className="text-gray-400 relative">
                    clean code
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-gray-200"></span>
                  </span>
                </h1>
              </div>

              {/* CTA Button */}
              <div
                className={`pt-4 transform transition-all duration-1000 ease-out ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                <Button
                  className="bg-black text-white hover:bg-gray-800 rounded-full px-10 py-4 text-lg"
                  onClick={onContactFormOpen}
                >
                  Let's Talk
                  <ArrowRight size={20} className="ml-3" />
                </Button>
              </div>

              {/* Description */}
              <div
                className={`transform transition-all duration-1000 ease-out ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: '800ms' }}
              >
                <p className="text-gray-600 max-w-lg leading-relaxed text-lg">
                  A multidisciplinary developer focused on creating exceptional
                  digital experiences through thoughtful design and robust
                  engineering.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div
                className={`relative transform transition-all duration-1200 ease-out ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                <div className="w-95 h-120 overflow-hidden">
                  <img
                    src="/profileImage3.jpg"
                    alt="Utkarsh Singh - Developer Portrait"
                    className="w-full h-full object-cover bg-transparent"
                  />
                  <div className="absolute inset-0"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Vortex>
    </section>
  );
}
