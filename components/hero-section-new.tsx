"use client";

import { FC, useEffect, useState } from "react";
import {
  ArrowRight,
  Linkedin,
  Twitter,
  Instagram,
  Github,
} from "lucide-react";

const HeroSection: FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gray-950">
      {/* Background */}
      <div
        className={`pointer-events-none absolute inset-0 transition-opacity duration-1000
        ${loaded ? "opacity-100" : "opacity-0"}`}
      >
        {/* Dark radial gradients using gray-950 / 900 / 800 */}
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-10%,#111827_0%,transparent_60%),radial-gradient(1000px_500px_at_80%_0%,#0f172a_0%,transparent_55%),radial-gradient(900px_500px_at_50%_10%,#020617_0%,transparent_50%)]" />
        {/* Subtle top-to-bottom dark gradient overlay */}
        <div className="absolute inset-x-0 bottom-0 h-[45vh] bg-gradient-to-b from-transparent via-gray-950/70 to-gray-950" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-12 lg:pt-32 lg:pb-16 min-h-screen flex flex-col">
        {/* Heading */}
        <div className="flex-1 flex items-start lg:items-center">
          <h1 className="text-[5rem] leading-[1.03] sm:text-[3.6rem] md:text-[4.4rem] lg:text-[5rem] xl:text-[5.4rem] font-light tracking-tight text-gray-100">
            <span
              className={`block lg:text-[9rem] font-normal lg:ml-40 transition-all duration-700 ease-out
              ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              Digital – Visual
            </span>
            <span
              className={`block lg:text-[9rem] font-normal transition-all duration-700 delay-150 ease-out
              ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              Designer
            </span>
          </h1>
        </div>

        {/* Bottom section */}
        <div className="flex-none pb-6 lg:pb-10">
          <div className="pt-10 lg:pt-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">
            {/* Left */}
            <div
              className={`max-w-lg space-y-6 transition-all duration-700 delay-300
              ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span className="h-px w-16 bg-gray-600" />
                <span>Specialized in</span>
              </div>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-light">
                Web Design, UX / UI, Webflow, and Front End Development.
              </p>

            </div>

            {/* Right */}
            <div
              className={`flex flex-col items-start lg:items-end gap-6 lg:gap-7 text-right transition-all duration-700 delay-400
              ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div className="text-xs sm:text-sm text-gray-400 max-w-[220px] text-left lg:text-right">
                Creative masterpieces delivered in the last 8 years
              </div>

              <div
                className={`lg:text-8xl text-[2.8rem] sm:text-[3.4rem] md:text-[3.8rem]
                font-semibold text-gray-100 leading-none transition-all duration-700 delay-500
                ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
              >
                50+
              </div>

              {/* Socials */}
              <div className="flex items-center gap-4 text-gray-100">
                {[Linkedin, Twitter, Instagram, Github].map((Icon, i) => (
                  <button
                    key={i}
                    className={`flex h-10 w-10 items-center justify-center rounded-full border border-gray-700
                    bg-gray-900/40 text-gray-300
                    hover:bg-gray-100 hover:text-gray-900 transition-all duration-300
                    ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
                    style={{ transitionDelay: `${600 + i * 80}ms` }}
                  >
                    <Icon />
                  </button>
                ))}
              </div>

              {/* CTA */}
              <button
                className={`inline-flex items-center gap-2 text-sm font-light text-gray-100
                transition-all duration-500 delay-700
                ${loaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"}
                hover:translate-x-0.5`}
              >
                View selected work
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
