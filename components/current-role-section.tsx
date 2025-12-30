"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CurrentWorkSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      id="current-work"
      ref={sectionRef}
      className="min-h-screen flex items-center py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#f8fafc]"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Side - Heading */}
          <div className="lg:col-span-4">
            <div
              className={`transform transition-all duration-1000 ease-out ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-12 opacity-0"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              <div className="space-y-4">
                {/* Small label */}
                <div
                  className={`transform transition-all duration-700 ease-out ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: "200ms" }}
                >
                  <div className="inline-flex items-center text-xs sm:text-sm text-slate-500 tracking-[0.2em] uppercase">
                    <span className="mr-3 h-px w-12 bg-slate-300" />
                    Working
                  </div>
                </div>

                {/* Main heading */}
                <h2
                  className={`text-6xl sm:text-7xl lg:text-7xl xl:text-8xl font-light text-slate-900 tracking-tight transform transition-all duration-1000 ease-out ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: "300ms" }}
                >
                  Currently
                </h2>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:col-span-8">
            <div className="space-y-8 sm:space-y-10">
              {/* Company & Role */}
              <div
                className={`space-y-4 transform transition-all duration-1000 ease-out ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: "500ms" }}
              >
                <p className="text-sm sm:text-base text-slate-500 font-light tracking-wide">
                  2025 – Present
                </p>
                <h3 className="font-thin text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-slate-900 tracking-tight">
                  SecuriGeek
                </h3>
                <p className="text-xl sm:text-2xl lg:text-3xl text-slate-700 font-light">
                  Full Stack Developer Intern
                </p>
              </div>

              {/* Description */}
              <p
                className={`text-base sm:text-lg lg:text-xl text-slate-700 font-light leading-relaxed max-w-2xl transform transition-all duration-1000 ease-out ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                Building Cydenti with modern technologies.
                Working across the full stack – from Angular on the
                frontend to Node.js and Python on the backend.
              </p>

              {/* Tech Stack */}
              <div
                className={`flex flex-wrap gap-3 sm:gap-4 transform transition-all duration-1000 ease-out ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "700ms" }}
              >
                {["Angular", "TypeScript", "JavaScript", "Python"].map(
                  (tech, index) => (
                    <span
                      key={tech}
                      className={`px-4 py-2 rounded-full bg-white/80 border border-slate-200 text-sm sm:text-base text-slate-700 font-light hover:bg-slate-900 hover:text-white transition-all duration-300 transform ${
                        isVisible
                          ? "translate-y-0 opacity-100"
                          : "translate-y-4 opacity-0"
                      }`}
                      style={{ transitionDelay: `${750 + index * 80}ms` }}
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>

              {/* CTA */}
              <div
                className={`pt-4 transform transition-all duration-1000 ease-out ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-4 opacity-0"
                }`}
                style={{ transitionDelay: "900ms" }}
              >
                <Link
                  href="/projects"
                  className="inline-flex items-center text-base sm:text-lg font-light text-slate-900 hover:text-slate-700 transition-all duration-300 group"
                >
                  View related work
                  <ArrowRight
                    size={18}
                    className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
