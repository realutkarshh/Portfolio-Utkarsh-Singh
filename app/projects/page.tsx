"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Github, Calendar, ArrowRight } from "lucide-react"
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
      id: "ecommerce",
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard.",
      longDescription:
        "This comprehensive e-commerce platform showcases modern web development practices with a focus on performance and user experience.",
      year: "2024",
      category: "Full-Stack",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS", "Prisma"],
      image: "/modern-ecommerce-interface.png",
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
      image: "/NoteStack-img.png",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: "weather-dashboard",
      title: "Weather Analytics Dashboard",
      description:
        "Interactive weather data visualization with real-time updates and historical analysis.",
      longDescription:
        "An advanced weather analytics platform that transforms complex meteorological data into intuitive visualizations.",
      year: "2023",
      category: "Data Visualization",
      technologies: ["React", "D3.js", "Python", "FastAPI", "Chart.js"],
      image: "/weather-analytics-dashboard-charts.png",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: "portfolio-website",
      title: "Portfolio Website",
      description:
        "A minimalist portfolio showcasing clean design principles and smooth animations.",
      longDescription:
        "This portfolio demonstrates modern web design principles with a focus on typography and user experience.",
      year: "2024",
      category: "Frontend",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
      image: "/minimalist-portfolio-website.png",
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
              Projects
            </h1>
            <div className="w-16 h-px bg-gray-300 mb-8"></div>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group transform transition-all duration-1000 ease-out ${
                  projectsVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <Link href={`/projects/${project.id}`}>
                  <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-500 group-hover:scale-[1.02]">
                    <div className="aspect-[16/10] bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <span className="px-4 py-2 bg-gray-50 text-gray-600 text-sm rounded-full font-medium">
                          {project.category}
                        </span>
                        <span className="text-sm text-gray-400 flex items-center font-light">
                          <Calendar size={14} className="mr-2" />
                          {project.year}
                        </span>
                      </div>
                      <h3 className="text-2xl font-light text-gray-900 mb-4 group-hover:text-black transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-8 leading-relaxed font-light line-clamp-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-gray-50 text-gray-600 text-xs rounded-full font-medium">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-3 py-1 bg-gray-50 text-gray-600 text-xs rounded-full font-medium">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-600 group-hover:text-black transition-colors duration-300 font-light">
                          View Project
                          <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                        <a
                          href={project.githubUrl}
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-300 rounded-full hover:bg-gray-50"
                        >
                          <Github size={18} />
                        </a>
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
