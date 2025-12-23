"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

export default function WorksSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const projects = [
    {
      title: "Helix Search Engine",
      link: "/projects/helixsearch",
    },
    {
      title: "Ecommerce Application",
      link: "/projects/ecommerce",
    },
    {
      title: "Issue Tracking Application",
      link: "/projects/issue-tracker",
    },
    {
      title: "Ecommerce Admin Panel",
      link: "/projects/ecommerce-admin",
    },
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="works" className="py-31 px-6 lg:px-8" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div
            className={`transform transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <h2 className="text-6xl lg:text-8xl font-normal text-gray-900 tracking-tight">
              Selected Work
            </h2>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`transform transition-all duration-1000 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${600 + index * 200}ms` }}
            >
              <Link href={project.link}>
                <div className="group rounded-2xl p-8 transition-all duration-300 bg-white">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex items-center justify-between lg:justify-start lg:space-x-4">
                      <h3 className="relative text-3xl lg:text-5xl font-light text-gray-900 group-hover:text-black transition-colors duration-300">
                        {project.title}
                      </h3>
                      <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
                    </div>

                    <div className="flex items-center space-x-6 mt-6 lg:mt-0 lg:ml-8">
                      <div className="flex items-center text-gray-400 group-hover:text-gray-900 transition-colors duration-500">
                        {/* <span className="text-sm font-light mr-3">View</span> */}
                        <ArrowRight className="transition-transform duration-300 ease-out group-hover:-rotate-45" size={50} />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>


        {/* <div
          className={`mt-16 text-center transform transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "1400ms" }}
        >
          <div className="inline-flex items-center space-x-2 text-sm text-gray-400">
            <Link
              href="/projects"
              className="inline-flex items-center text-gray-600 hover:text-black transition-colors duration-300 text-base font-normal"
            >
              View all projects
              <ArrowRight
                size={16}
                className="ml-2 transition-transform duration-300 hover:translate-x-1"
              />
            </Link>
          </div>
        </div> */}
      </div>
    </section>
  );
}
