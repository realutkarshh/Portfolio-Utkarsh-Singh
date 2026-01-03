"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f8fafc]">
      {/* Background */}
      <div
        className={`pointer-events-none absolute inset-0 transition-opacity duration-1000
        ${loaded ? "opacity-100" : "opacity-0"}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(900px_600px_at_25%_25%,#fecaca_0%,transparent_55%),radial-gradient(900px_600px_at_70%_10%,#fed7aa_0%,transparent_60%),radial-gradient(900px_600px_at_80%_40%,#bae6fd_0%,transparent_55%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[45vh] bg-gradient-to-b from-transparent via-white/70 to-white" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 min-h-screen flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left – Big message */}
          <div>
            <h1 className="text-[4.5rem] sm:text-[5.5rem] lg:text-[7rem] font-light leading-none text-slate-900">
              <span
                className={`block transition-all duration-700
                ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                404
              </span>
              <span
                className={`block text-slate-500 transition-all duration-700 delay-150
                ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                Not Found
              </span>
            </h1>
          </div>

          {/* Right – Description + CTA */}
          <div
            className={`max-w-md space-y-8 transition-all duration-700 delay-300
            ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-light">
              The page you’re looking for doesn’t exist or has been moved.
              You might have followed an outdated link — or discovered a
              hidden edge of the internet.
            </p>

            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-light text-slate-900
                hover:translate-x-0.5 transition-all"
              >
                Go back home
                <ArrowRight size={16} />
              </Link>

              <span className="h-px w-10 bg-slate-400" />

              <Link
                href="/projects"
                className="text-sm font-light text-slate-600 hover:text-slate-900 transition"
              >
                View work
              </Link>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <div
          className={`mt-24 text-xs text-slate-400 transition-opacity duration-700 delay-500
          ${loaded ? "opacity-100" : "opacity-0"}`}
        >
          © {new Date().getFullYear()} — Designed & Built by Utkarsh Singh
        </div>
      </div>
    </section>
  );
}
