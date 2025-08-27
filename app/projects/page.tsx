"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Github, Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      id: "ecommerce",
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with Next.js, featuring user authentication, payment processing with Stripe, inventory management, and admin dashboard.",
      longDescription:
        "This comprehensive e-commerce platform showcases modern web development practices with a focus on performance and user experience. Built with Next.js 14 and TypeScript, it features server-side rendering, optimistic UI updates, and seamless payment integration.",
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
      title: "Task Management App",
      description:
        "Real-time collaborative task management application with drag-and-drop functionality, team workspaces, and progress tracking.",
      longDescription:
        "A sophisticated project management tool that enables teams to collaborate effectively. Features real-time updates, customizable workflows, and intuitive drag-and-drop interfaces powered by modern React patterns.",
      year: "2024",
      category: "Frontend",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "React DnD"],
      image: "/task-management-dashboard.png",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: "weather-dashboard",
      title: "Weather Analytics Dashboard",
      description:
        "Interactive weather data visualization dashboard with real-time updates, historical data analysis, and location-based forecasting.",
      longDescription:
        "An advanced weather analytics platform that transforms complex meteorological data into intuitive visualizations. Built with modern charting libraries and real-time APIs for accurate forecasting.",
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
        "A minimalist portfolio website showcasing clean design principles and smooth animations, built with Next.js and Tailwind CSS.",
      longDescription:
        "This portfolio demonstrates modern web design principles with a focus on typography, spacing, and user experience. Features smooth animations and responsive design.",
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

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center text-gray-600 hover:text-black transition-colors">
              <ArrowLeft size={20} className="mr-2" />
              Back to home
            </Link>
            <Link href="/" className="font-medium text-lg text-black">
              utkarsh.
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold text-black mb-6 animate-in slide-in-from-bottom duration-700">
            All Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl animate-in slide-in-from-bottom duration-700 delay-150">
            A collection of my work spanning full-stack development, frontend applications, and data visualization
            projects.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="pb-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 animate-in slide-in-from-bottom duration-700 delay-300">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full text-sm transition-all duration-300 ${
                  filter === category ? "bg-black text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category === "all" ? "All Projects" : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group animate-in slide-in-from-bottom duration-700"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Link href={`/projects/${project.id}`}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                    <div className="aspect-video bg-gray-100 overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                          {project.category}
                        </span>
                        <span className="text-sm text-gray-400 flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {project.year}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-gray-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-gray-50 text-gray-600 text-xs rounded-full">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-3 py-1 bg-gray-50 text-gray-600 text-xs rounded-full">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center text-sm text-gray-600 group-hover:text-black transition-colors">
                          View Project
                          <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                        <a
                          href={project.githubUrl}
                          className="flex items-center text-sm text-gray-600 hover:text-black transition-colors"
                        >
                          <Github size={16} />
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
      <section className="py-24 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-black mb-6">Interested in working together?</h2>
          <p className="text-xl text-gray-600 mb-8">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
          <Button
            className="bg-black text-white hover:bg-gray-800 rounded-full px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
            asChild
          >
            <a href="mailto:utkarsh.singh@email.com">
              Get in touch
              <ArrowRight size={20} className="ml-2" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}
