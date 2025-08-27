"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Github, Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const projects = {
  ecommerce: {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with Next.js",
    longDescription:
      "This comprehensive e-commerce platform showcases modern web development practices with a focus on performance and user experience. Built with Next.js 14 and TypeScript, it features server-side rendering, optimistic UI updates, and seamless payment integration with Stripe. The platform includes user authentication, product management, inventory tracking, order processing, and an admin dashboard for comprehensive business management.",
    year: "2024",
    category: "Full-Stack",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS", "Prisma", "NextAuth.js", "Vercel"],
    image: "/modern-ecommerce-interface.png",
    liveUrl: "#",
    githubUrl: "#",
    features: [
      "User authentication and authorization",
      "Product catalog with search and filtering",
      "Shopping cart and checkout process",
      "Payment processing with Stripe",
      "Order management and tracking",
      "Admin dashboard for inventory management",
      "Responsive design for all devices",
      "SEO optimization and performance monitoring",
    ],
    challenges: [
      "Implementing secure payment processing",
      "Optimizing database queries for large product catalogs",
      "Creating a seamless user experience across devices",
      "Building a comprehensive admin interface",
    ],
  },
  "task-management": {
    title: "Task Management App",
    description: "Real-time collaborative task management application",
    longDescription:
      "A sophisticated project management tool that enables teams to collaborate effectively in real-time. Features include drag-and-drop task organization, team workspaces, progress tracking, and real-time notifications. Built with modern React patterns and WebSocket technology for instant updates across all connected clients.",
    year: "2024",
    category: "Frontend",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "React DnD", "Express", "JWT", "Material-UI"],
    image: "/task-management-dashboard.png",
    liveUrl: "#",
    githubUrl: "#",
    features: [
      "Real-time collaboration with WebSocket",
      "Drag-and-drop task organization",
      "Team workspaces and project management",
      "Progress tracking and analytics",
      "File attachments and comments",
      "Notification system",
      "Mobile-responsive interface",
      "Dark mode support",
    ],
    challenges: [
      "Implementing real-time synchronization",
      "Optimizing drag-and-drop performance",
      "Managing complex state across components",
      "Ensuring data consistency in collaborative environment",
    ],
  },
  "weather-dashboard": {
    title: "Weather Analytics Dashboard",
    description: "Interactive weather data visualization dashboard",
    longDescription:
      "An advanced weather analytics platform that transforms complex meteorological data into intuitive visualizations. The dashboard provides real-time weather updates, historical data analysis, and location-based forecasting using multiple weather APIs and advanced charting libraries.",
    year: "2023",
    category: "Data Visualization",
    technologies: ["React", "D3.js", "Python", "FastAPI", "Chart.js", "OpenWeather API", "Mapbox", "Redis"],
    image: "/weather-analytics-dashboard-charts.png",
    liveUrl: "#",
    githubUrl: "#",
    features: [
      "Real-time weather data visualization",
      "Historical weather analysis",
      "Interactive maps with weather overlays",
      "Custom chart components with D3.js",
      "Location-based forecasting",
      "Weather alerts and notifications",
      "Data export functionality",
      "Responsive dashboard layout",
    ],
    challenges: [
      "Processing large datasets efficiently",
      "Creating smooth data visualizations",
      "Integrating multiple weather APIs",
      "Optimizing performance for real-time updates",
    ],
  },
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/projects" className="flex items-center text-gray-600 hover:text-black transition-colors">
              <ArrowLeft size={20} className="mr-2" />
              Back to projects
            </Link>
            <Link href="/" className="font-medium text-lg text-black">
              utkarsh.
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-4 mb-6 animate-in slide-in-from-bottom duration-700">
            <span className="px-4 py-2 bg-gray-100 text-gray-600 text-sm rounded-full">{project.category}</span>
            <span className="text-sm text-gray-400 flex items-center">
              <Calendar size={14} className="mr-1" />
              {project.year}
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold text-black mb-6 animate-in slide-in-from-bottom duration-700 delay-150">
            {project.title}
          </h1>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed animate-in slide-in-from-bottom duration-700 delay-300">
            {project.longDescription}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-in slide-in-from-bottom duration-700 delay-500">
            <Button
              className="bg-black text-white hover:bg-gray-800 rounded-full px-8 py-3 transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                View Live Project
                <ExternalLink size={20} className="ml-2" />
              </a>
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-black text-black hover:bg-black hover:text-white px-8 py-3 bg-transparent transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github size={20} className="mr-2" />
                View Code
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="pb-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-2xl animate-in slide-in-from-bottom duration-700 delay-700">
            <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Technologies */}
            <div className="animate-in slide-in-from-left duration-700">
              <h2 className="text-2xl font-bold text-black mb-6">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="animate-in slide-in-from-right duration-700 delay-300">
              <h2 className="text-2xl font-bold text-black mb-6">Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-8 animate-in slide-in-from-bottom duration-700">
            Challenges & Solutions
          </h2>
          <div className="space-y-6">
            {project.challenges.map((challenge, index) => (
              <div
                key={index}
                className="animate-in slide-in-from-bottom duration-700"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-gray-600 leading-relaxed">{challenge}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-black mb-6">Want to see more work?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Check out my other projects or get in touch to discuss your next idea.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-black text-white hover:bg-gray-800 rounded-full px-8 py-3 transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link href="/projects">
                View All Projects
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-black text-black hover:bg-black hover:text-white px-8 py-3 bg-transparent transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="mailto:utkarsh.singh@email.com">Get in Touch</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
