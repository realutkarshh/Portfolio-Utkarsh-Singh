"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Github, Calendar, ArrowRight, ArrowUpRight } from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all")
  const [isVisible, setIsVisible] = useState(false)
  const [filterVisible, setFilterVisible] = useState(false)
  const [projectsVisible, setProjectsVisible] = useState(false)
  const [ctaVisible, setCtaVisible] = useState(false)
  
  const filterRef = useRef(null)
  const projectsRef = useRef(null)
  const ctaRef = useRef(null)

  const projects = [
    {
      id: "helix-search",
      title: "Helix Search Engine",
      description:
        "A search engine made entirely from scratch. ",
      longDescription:
        "This comprehensive e-commerce platform showcases modern web development practices with a focus on performance and user experience.",
      year: "2025",
      category: "Full-Stack",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS", "Prisma"],
      tags: ["Full-Stack", "E-Commerce"],
      image: "/ecom-img.png",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: "ecommerce",
      title: "E-Commerce",
      description:
        "A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard.",
      longDescription:
        "This comprehensive e-commerce platform showcases modern web development practices with a focus on performance and user experience.",
      year: "2024",
      category: "Full-Stack",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS", "Prisma"],
      tags: ["Full-Stack", "E-Commerce"],
      image: "/ecom-img.png",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: "task-management",
      title: "NoteStack",
      description:
        "Real-time collaborative task management with drag-and-drop functionality and team workspaces.",
      longDescription:
        "A sophisticated project management tool that enables teams to collaborate effectively with real-time updates.",
      year: "2024",
      category: "Frontend",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "React DnD"],
      tags: ["Frontend", "Real-time"],
      image: "/NoteStack-img.png",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: "weather-dashboard",
      title: "S.K.M College Website",
      description:
        "This was a full stack project as I have created an admin panel to manage this website as well.",
      longDescription:
        "An advanced weather analytics platform that transforms complex meteorological data into intuitive visualizations.",
      year: "2023",
      category: "Data Visualization",
      technologies: ["NextJS", "D3.js", "NodeJS", "Express", "ReCharts"],
      tags: ["Full-Stack", "Education"],
      image: "/skm-img.png",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: "portfolio-website",
      title: "S.K.M College Admin Panel",
      description:
        "An admin panel designed for the S.K.M College so that they can manage their admissions efficiently",
      longDescription:
        "This portfolio demonstrates modern web design principles with a focus on typography and user experience.",
      year: "2024",
      category: "Frontend",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
      tags: ["Frontend", "Dashboard"],
      image: "/skm-admin.png",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ]

  const categories = ["all", "Full-Stack", "Frontend", "Data Visualization"]
  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  useEffect(() => {
    // Header animation
    setTimeout(() => setIsVisible(true), 100)

    // Setup intersection observers
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '50px'
    }

    const filterObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setFilterVisible(true)
    }, observerOptions)

    const projectsObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setProjectsVisible(true)
    }, observerOptions)

    const ctaObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setCtaVisible(true)
    }, observerOptions)

    if (filterRef.current) filterObserver.observe(filterRef.current)
    if (projectsRef.current) projectsObserver.observe(projectsRef.current)
    if (ctaRef.current) ctaObserver.observe(ctaRef.current)

    return () => {
      if (filterRef.current) filterObserver.unobserve(filterRef.current)
      if (projectsRef.current) projectsObserver.unobserve(projectsRef.current)
      if (ctaRef.current) ctaObserver.unobserve(ctaRef.current)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-xl z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center text-gray-600 hover:text-black transition-colors duration-300 font-light">
              <ArrowLeft size={18} className="mr-3" />
              Back to home
            </Link>
            <Link href="/" className="font-light text-xl text-gray-900 tracking-wide">
              Utkarsh Singh
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div
            className={`transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            <h1 className="text-6xl lg:text-7xl font-light text-gray-900 mb-6 tracking-tight">
              My Works
            </h1>
          </div>
          <div
            className={`transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <p className="text-xl font-light text-gray-600 max-w-2xl leading-relaxed">
              A curated collection of my work spanning full-stack development, 
              frontend applications, and data visualization projects.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="pb-20 px-6 lg:px-8" ref={filterRef}>
        <div className="max-w-6xl mx-auto">
          <div
            className={`transform transition-all duration-1000 ease-out ${
              filterVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category, index) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    filter === category 
                      ? "bg-black text-white shadow-sm" 
                      : "bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                  style={{
                    transform: filterVisible ? 'translateY(0)' : 'translateY(20px)',
                    opacity: filterVisible ? 1 : 0,
                    transitionDelay: `${index * 100}ms`
                  }}
                >
                  {category === "all" ? "All Projects" : category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-32 px-6 lg:px-8" ref={projectsRef}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group transform transition-all duration-1000 ease-out ${
                  projectsVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <Link href={`/projects/${project.id}`}>
                  <div className="relative bg-white rounded-3xl overflow-hidden h-[480px] sm:h-[520px] transition-all duration-500 hover:shadow-2xl">
                    {/* Background Image */}
                    <div className="absolute inset-0 w-full h-full">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80"></div>
                    </div>

                    {/* Content */}
                    <div className="relative h-full flex flex-col justify-between p-6 sm:p-8">
                      {/* Top section - Year */}
                      <div className="flex justify-end">
                        <span className="text-white/80 text-sm font-light">
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
                                className="px-3 py-1.5 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full font-medium border border-white/30"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          {/* Arrow Icon */}
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:border-white group-hover:-rotate-45">
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-8 bg-gray-50" ref={ctaRef}>
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transform transition-all duration-1000 ease-out ${
              ctaVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <h2 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6 tracking-tight">
              Let's collaborate
            </h2>
            <div className="w-12 h-px bg-gray-300 mx-auto mb-8"></div>
          </div>
          <div
            className={`transform transition-all duration-1000 ease-out ${
              ctaVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <p className="text-xl font-light text-gray-600 mb-12 leading-relaxed">
              I'm always open to discussing new opportunities and interesting projects.
              Let's create something exceptional together.
            </p>
          </div>
          <div
            className={`transform transition-all duration-1000 ease-out ${
              ctaVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <Button
              className="group bg-black text-white hover:bg-gray-800 rounded-full px-8 py-4 text-base font-medium transition-all duration-300 hover:scale-105 active:scale-95"
              asChild
            >
              <a href="mailto:utkarsh2020051@gmail.com">
                Get in touch
                <ArrowRight size={18} className="ml-3 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
