"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface ContactSectionProps {
  onContactFormOpen: () => void;
}

export default function ContactSection({ onContactFormOpen }: ContactSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const RESUME_LINK =
    "https://drive.google.com/file/d/1v_ikcV57SiCm4m8UPMbheZNa32nHyZ4O/view?usp=sharing";

  const getDirectDownloadLink = (link: string) => {
    const match = link.match(/\/d\/([a-zA-Z0-9-_]+)/);
    return match ? `https://drive.google.com/uc?export=download&id=${match[1]}` : link;
  };

  const handleResumeDownload = () => {
    const a = document.createElement("a");
    a.href = getDirectDownloadLink(RESUME_LINK);
    a.download = "Utkarsh_Singh_Resume.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    sectionRef.current && observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen py-24 px-6 lg:px-8 bg-gray-50 flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Heading */}
        <div
          className={`mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-6xl lg:text-7xl font-light text-gray-900 tracking-tight text-center">
            Let’s create together
          </h2>
        </div>

        {/* Bento Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Email */}
          <div className="bg-white rounded-2xl p-8 border border-gray-500">
            <p className="text-2xl text-gray-500 mb-2">Email</p>
            <a
              href="mailto:realutkarshh@gmail.com"
              className="text-lg font-light text-gray-900 hover:underline"
            >
              realutkarshh@gmail.com
            </a>
          </div>

          {/* Primary CTA — Highlighted */}
          <div className="lg:col-span-2 bg-gray-950 rounded-2xl p-8 flex items-center justify-between">
            <div>
              <p className="text-2xl text-gray-400 mb-2">Have an idea?</p>
              <p className="text-xl font-light text-white">
                Let’s build something meaningful.
              </p>
            </div>
            <Button
              onClick={onContactFormOpen}
              className="group bg-white text-gray-900 rounded-full px-6 py-5 text-base font-medium hover:bg-gray-200 transition cursor-pointer"
            >
              Start
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Location */}
          <div className="bg-white rounded-2xl p-8 border border-gray-500">
            <p className="text-2xl text-gray-500 mb-2">Location</p>
            <p className="text-lg font-light text-gray-900">
              Greater Noida West, India
            </p>
          </div>

          {/* Availability */}
          <div className="bg-white rounded-2xl p-8 border border-gray-500">
            <p className="text-2xl text-gray-500 mb-2">Availability</p>
            <p className="text-lg font-light text-gray-900">
              Open for opportunities
            </p>
          </div>

          {/* Resume CTA */}
          <div className="bg-white rounded-2xl p-8 border border-gray-500 flex items-center justify-between">
            <div>
              <p className="text-2xl text-gray-500 mb-2">Resume</p>
              <p className="text-lg font-light text-gray-900">
                Download CV
              </p>
            </div>
            <Button
              variant="outline"
              onClick={handleResumeDownload}
              className="rounded-full px-5 py-4 border-gray-300 hover:bg-gray-950 cursor-pointer"
            >
              <Download size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
