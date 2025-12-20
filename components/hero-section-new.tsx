"use client";

import { FC } from "react";
import { ArrowRight, Linkedin, Twitter, Instagram, Github, MoveRight  } from "lucide-react";

const HeroSection: FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      {/* Background: grid + gradient */}
      <div className="pointer-events-none absolute inset-0">
        {/* subtle grid */}
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-10%,#c7d2fe_0%,transparent_60%),radial-gradient(1000px_500px_at_80%_0%,#bae6fd_0%,transparent_55%),radial-gradient(900px_500px_at_50%_10%,#fbcfe8_0%,transparent_50%)]" />

{/* natural fade into white */}
<div className="absolute inset-x-0 bottom-0 h-[45vh] bg-gradient-to-b from-transparent via-white/60 to-white" />

      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-10 pt-28 pb-12 lg:pt-32 lg:pb-16 min-h-screen flex flex-col">
        {/* Top: main heading occupying upper half */}
        <div className="flex-1 flex items-start lg:items-center">
          <h1 className="text-[5rem] leading-[1.03] sm:text-[3.6rem] md:text-[4.4rem] lg:text-[5rem] xl:text-[5.4rem] font-light tracking-tight text-slate-900">
            <span className="block lg:text-9xl font-normal lg:ml-40">Digital – Visual</span>
            <span className="block lg:text-9xl font-normal">Designer</span>
          </h1>
        </div>

        {/* Bottom: details row */}
        <div className="flex-none pb-6 lg:pb-10">
          <div className="border-t border-slate-200 pt-10 lg:pt-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">
            {/* Left column: specialization + rating */}
            <div className="max-w-lg space-y-6">
              <div className="flex items-center gap-4 text-sm text-slate-500">
                <span className="h-px w-16 bg-slate-400" />
                <span>Specialized in</span>
              </div>

              <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-light">
                Web Design, UX / UI, Webflow, and Front End Development.
              </p>
              <p className="font-normal">Scroll to know more </p>

            </div>

            {/* Right column: stats + socials + CTA */}
            <div className="flex flex-col items-start lg:items-end gap-6 lg:gap-7 text-right">
              <div className="text-xs sm:text-sm text-slate-500 max-w-[220px] text-left lg:text-right">
                Creative masterpieces delivered in the last 8 years
              </div>

              <div className="lg:text-8xl text-[2.8rem] sm:text-[3.4rem] md:text-[3.8rem] font-semibold text-slate-900 leading-none">
                50+
              </div>

              <div className="flex items-center gap-4 text-slate-800">
                <button
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-xs hover:bg-slate-900 hover:text-white transition-colors"
                >
                  <Linkedin/>
                </button>
                <button
                  aria-label="Twitter"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-xs hover:bg-slate-900 hover:text-white transition-colors"
                >
                  < Twitter />
                </button>
                <button
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-xs hover:bg-slate-900 hover:text-white transition-colors"
                >
                  < Instagram />
                </button>
                <button
                  aria-label="Github"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-xs hover:bg-slate-900 hover:text-white transition-colors"
                >
                  < Github />
                </button>
              </div>

              <button className="inline-flex items-center gap-2 text-sm font-light text-slate-900 hover:translate-x-0.5 transition-transform">
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
