"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const works = [
  {
    id: 1,
    title: "Helix Search Engine",
    description:
      "A fully custom-built search engine with its own crawler, indexing pipeline, and ranking system.",
    bg: "#ffffff",
  },
  {
    id: 2,
    title: "Cydenti Dashboard",
    description:
      "Enterprise dashboards designed to visualize security posture and compliance frameworks.",
    bg: "#f8fafc",
  },
  {
    id: 3,
    title: "SaaS Restro Platform",
    description:
      "A multi-tenant SaaS platform enabling restaurant operations, analytics, and growth.",
    bg: "#fdf6f0",
  },
  {
    id: 4,
    title: "AI-Driven Systems",
    description:
      "Data-driven and AI-powered systems focused on automation and intelligent decision-making.",
    bg: "#f5f7fb",
  },
];

export default function WorksSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const panels = gsap.utils.toArray<HTMLElement>(".work-panel");

    const ctx = gsap.context(() => {
      panels.forEach((panel, index) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          pin: true,
          pinSpacing: index === panels.length - 1, // release scroll after last panel
        });
      });
    }, containerRef);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef}>
      {works.map((work) => (
        <section
          key={work.id}
          className="work-panel relative h-screen border-t border-slate-200"
          style={{ backgroundColor: work.bg }}
        >
          {/* FULL WIDTH PIN LAYER (DO NOT TOUCH) */}
          <div className="absolute inset-0" />

          {/* CONSTRAINED CONTENT */}
          <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-10">
            {/* TOP LEFT TITLE */}
            <h3
              className="
                absolute
                top-20 sm:top-16 lg:top-28
                left-0
                font-normal
                text-slate-900
                leading-[1.05]
                max-w-[75%]
                text-[3.2rem]
                sm:text-[4.2rem]
                lg:text-[7rem]
                xl:text-[8rem]
              "
            >
              {work.title}
            </h3>

            {/* BOTTOM RIGHT DESCRIPTION */}
            <div
              className="
                absolute
                bottom-20 sm:bottom-16 lg:bottom-28
                right-0
                max-w-md
                text-right
                space-y-6
              "
            >
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-light">
                {work.description}
              </p>

              <div className="inline-flex items-center justify-end gap-3 text-slate-900">
                <span className="text-lg sm:text-xl lg:text-2xl font-light">
                  View project
                </span>
                <ArrowUpRight className="w-6 h-6 lg:w-10 lg:h-10" />
              </div>
            </div>
          </div>
        </section>
      ))}
    </section>
  );
}
