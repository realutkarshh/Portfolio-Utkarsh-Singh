"use client";

import { ArrowRight, ArrowUpRight  } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

export default function WorksSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack solution with Next.js and Stripe integration",
      year: "2024",
      link: "/projects/ecommerce",
    },
    {
      title: "Task Management App",
      description: "Real-time collaboration with drag-and-drop functionality",
      year: "2024",
      link: "/projects/task-management",
    },
    {
      title: "Weather Analytics Dashboard",
      description: "Data visualization with interactive charts and APIs",
      year: "2023",
      link: "/projects/weather-dashboard",
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
    <section id="works" className="py-24 px-6 lg:px-8" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div
            className={`transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <h2 className="text-6xl lg:text-7xl font-light text-gray-900 tracking-tight">
              Works
            </h2>
            <div className="w-12 h-px bg-gray-300 mx-auto mt-8"></div>
          </div>
          
          
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`transform transition-all duration-1000 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${600 + index * 200}ms` }}
            >
              <Link href={project.link}>
                <div className="group border border-gray-100 rounded-2xl p-8 hover:border-gray-200 hover:shadow-sm transition-all duration-300 bg-white">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex-1 space-y-4">
                      <div className="flex items-center justify-between lg:justify-start lg:space-x-4">
                        <h3 className="text-2xl font-light text-gray-900 group-hover:text-black transition-colors duration-300">
                          {project.title}
                        </h3>
                        <span className="text-xs font-medium text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
                          {project.year}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed max-w-lg font-light">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="flex items-center space-x-6 mt-6 lg:mt-0 lg:ml-8">
                      <div className="flex items-center text-gray-400 group-hover:text-gray-600 transition-colors duration-300">
                        {/* <span className="text-sm font-light mr-3">View</span> */}
                        <ArrowUpRight size={50} />
                      </div>
                
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom accent */}
        <div
          className={`mt-16 text-center transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: '1400ms' }}
        >
          <div className="inline-flex items-center space-x-2 text-sm text-gray-400">
            <Link
              href="/projects"
              className="inline-flex items-center text-gray-600 hover:text-black transition-colors duration-300 text-base font-normal"
            >
              View all projects
              <ArrowRight size={16} className="ml-2 transition-transform duration-300 hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
