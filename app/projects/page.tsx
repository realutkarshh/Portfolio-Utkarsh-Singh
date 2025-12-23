"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all");
  const [isVisible, setIsVisible] = useState(false);
  const [filterVisible, setFilterVisible] = useState(false);
  const [projectsVisible, setProjectsVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  const [scrollX, setScrollX] = useState(0);
  const [scrollEnd, setScrollEnd] = useState(false);

  const filterRef = useRef(null);
  const projectsRef = useRef(null);
  const ctaRef = useRef(null);
  const sliderRef = useRef<any>(null);

  const projects = [
    {
      id: "helixsearch",
      title: "Helix Search Engine",
      description:
        "A full stack search engine created from scratch. It is an independent search engine with its own web crawler, indexer and query processor.",
      year: "2024",
      tags: ["Full-Stack", "E-Commerce"],
      image: "/helix-search-logo.png",
      featured: true,
    },
    {
      id: "ecommerce",
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard.",
      year: "2024",
      tags: ["Full-Stack", "E-Commerce"],
      image: "/desert.png",
      featured: true,
    },
    {
      id: "note-stack",
      title: "NoteStack",
      description:
        "Real-time collaborative task management with drag-and-drop functionality and team workspaces.",
      year: "2024",
      tags: ["Frontend", "Real-time"],
      image: "/mountain.png",
      featured: true,
    },
    {
      id: "skm-college",
      title: "S.K.M College Website",
      description:
        "This was a full stack project as I have created an admin panel to manage this website as well.",
      year: "2023",
      tags: ["Full-Stack", "Education"],
      image: "/scenic.png",
      featured: false,
    },
    {
      id: "ecommerce-admin",
      title: "Ecommerce Admin Panel",
      description:
        "An admin panel designed for a Food Ecommerce brand to manage orders efficiently.",
      year: "2024",
      tags: ["Frontend", "Dashboard"],
      image: "/scott.png",
      featured: false,
    },
    {
      id: "issue-tracker",
      title: "Issue Tracking Application",
      description:
        "An Issue Tracking application in which you can manage issues, assignee and priority.",
      year: "2025",
      tags: ["Frontend", "Dashboard"],
      image: "/lake.png",
      featured: false,
    },
  ];

  const categories = ["all", "Full-Stack", "Frontend", "Data Visualization"];
  const filteredProjects =
    filter === "all" ? projects : projects.filter((project) => project.category === filter);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "50px",
    };

    const filterObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setFilterVisible(true);
    }, observerOptions);

    const projectsObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setProjectsVisible(true);
    }, observerOptions);

    const ctaObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setCtaVisible(true);
    }, observerOptions);

    if (filterRef.current) filterObserver.observe(filterRef.current);
    if (projectsRef.current) projectsObserver.observe(projectsRef.current);
    if (ctaRef.current) ctaObserver.observe(ctaRef.current);

    return () => {
      if (filterRef.current) filterObserver.unobserve(filterRef.current);
      if (projectsRef.current) projectsObserver.unobserve(projectsRef.current);
      if (ctaRef.current) ctaObserver.unobserve(ctaRef.current);
    };
  }, []);

  const slide = (shift: any) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: shift,
        behavior: "smooth",
      });
    }
  };

  const scrollCheck = () => {
    if (sliderRef.current) {
      setScrollX(sliderRef.current.scrollLeft);
      if (
        Math.floor(
          sliderRef.current.scrollWidth - sliderRef.current.scrollLeft
        ) <= sliderRef.current.offsetWidth
      ) {
        setScrollEnd(true);
      } else {
        setScrollEnd(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-xl z-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link
              href="/"
              className="flex items-center text-gray-300 hover:text-gray-100 transition-colors duration-300 font-light"
            >
              <ArrowLeft size={18} className="mr-3" />
              Back to HOME
            </Link>
            <Link
              href="/"
              className="font-light text-xl text-gray-100 tracking-wide"
            >
              UTKARSH SINGH
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div
            className={`transform transition-all duration-1000 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            <h1 className="text-6xl lg:text-8xl font-light text-gray-100 mb-6 tracking-tight">
              My Works
            </h1>
          </div>
          <div
            className={`transform transition-all duration-1000 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <p className="text-xl font-light text-gray-400 max-w-2xl leading-relaxed">
              A curated collection of my work spanning full-stack development,
              frontend applications, and data visualization projects.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Slider */}
      <section className="pb-32 px-6 lg:px-8" ref={projectsRef}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative transform transition-all duration-1000 ease-out ${
              projectsVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            {/* Left Arrow */}
            {scrollX > 0 && (
              <button
                onClick={() => slide(-600)}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-gray-900 shadow-xl border border-gray-800 flex items-center justify-center transition-all duration-300 hover:bg-gray-100 hover:text-gray-900 hover:scale-110 hover:shadow-2xl"
                aria-label="Previous projects"
              >
                <ChevronLeft className="w-6 h-6 lg:w-7 lg:h-7 text-gray-100" />
              </button>
            )}

            {/* Slider Container */}
            <div
              ref={sliderRef}
              onScroll={scrollCheck}
              className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[45vw] lg:w-[30vw] group"
                  style={{
                    transform: projectsVisible ? "translateY(0)" : "translateY(20px)",
                    opacity: projectsVisible ? 1 : 0,
                    transitionDelay: `${index * 200}ms`,
                  }}
                >
                  <Link href={`/projects/${project.id}`}>
                    <div className="relative bg-gray-900 rounded-3xl overflow-hidden h-[480px] sm:h-[520px] transition-all duration-500 hover:shadow-2xl border border-gray-800">
                      {/* Background Image */}
                      <div className="absolute inset-0 w-full h-full">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />
                      </div>

                      {/* Content */}
                      <div className="relative h-full flex flex-col justify-between p-6 sm:p-8">
                        {/* Top section - Year */}
                        <div className="flex justify-end">
                          <span className="text-gray-200 text-sm font-light">
                            {project.year}
                          </span>
                        </div>

                        {/* Bottom section - Title, Description, Tags */}
                        <div className="space-y-4">
                          {/* Title */}
                          <h3 className="text-2xl sm:text-3xl font-light text-white leading-tight">
                            {project.title}
                          </h3>

                          {/* Description */}
                          <p className="text-white/90 text-sm sm:text-base font-light leading-relaxed line-clamp-2">
                            {project.description}
                          </p>

                          {/* Tags and Arrow */}
                          <div className="flex items-center justify-between pt-2">
                            <div className="flex flex-wrap gap-2">
                              {project.tags?.slice(0, 2).map((tag) => (
                                <span
                                  key={tag}
                                  className="px-3 py-1.5 bg-white/10 backdrop-blur-sm text-white text-xs rounded-full font-medium border border-white/20"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>

                            {/* Arrow Icon */}
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:border-white group-hover:-rotate-45">
                              <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-white transition-colors duration-300 group-hover:text-black" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            {!scrollEnd && filteredProjects.length > 1 && (
              <button
                onClick={() => slide(600)}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-gray-900 shadow-xl border border-gray-800 flex items-center justify-center transition-all duration-300 hover:bg-gray-100 hover:text-gray-900 hover:scale-110 hover:shadow-2xl"
                aria-label="Next projects"
              >
                <ChevronRight className="w-6 h-6 lg:w-7 lg:h-7 text-gray-100" />
              </button>
            )}
          </div>
        </div>
      </section>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
