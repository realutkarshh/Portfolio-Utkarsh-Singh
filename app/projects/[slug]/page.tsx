"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Github, Calendar, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const projects = {
  helixsearch: {
  title: "Helix Search Engine",
  description: "An independent, full-stack search engine built from scratch",
  longDescription:
    "Helix is a custom-built search engine designed and developed from the ground up without relying on any external search APIs. It features a proprietary web crawler, a scalable indexing pipeline, and an efficient query processing system. The project demonstrates deep understanding of distributed systems, information retrieval concepts, and full-stack engineering by integrating backend services, data processing, and a modern frontend experience.",
  year: "2025",
  category: "Search Engine / Systems",
  technologies: [
    "Go",
    "Python",
    "Flask",
    "Next.js",
    "Tailwind CSS",
    "HTML Parsing",
    "Inverted Indexing",
    "REST APIs",
  ],
  images: [
    "/helix-1.png",
    "/helix-2.png",
    "/helix-3.png",
    "/helix-4.png",
    "/helix-5.png",
    "/helix-6.png",
    "/helix-7.png",
  ],
  liveUrl: "https://helix-search.vercel.app/",
  githubUrl: "https://github.com/realutkarshh/Basic-Search-Engine-.git",
  features: [
    "Custom-built web crawler developed in Go for high-performance crawling",
    "Independent indexing system implemented in Python for efficient document storage",
    "Inverted index-based search for fast and accurate query resolution",
    "Query processor with ranking and relevance scoring",
    "RESTful backend API built using Flask",
    "Modern and responsive frontend built with Next.js",
    "Real-time search results rendering with optimized UI performance",
    "Fully independent architecture with no third-party search APIs",
  ],
  challenges: [
    "Designing a scalable crawler capable of handling multiple URLs efficiently",
    "Building an optimized indexing pipeline for large volumes of web data",
    "Implementing fast and accurate search relevance without external libraries",
    "Coordinating data flow between crawler, indexer, and query processor",
    "Ensuring low-latency search responses while maintaining accuracy",
  ],
},

  ecommerce: {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with Next.js",
    longDescription:
      "This comprehensive e-commerce platform showcases modern web development practices with a focus on performance and user experience. Built with Next.js 14 and TypeScript, it features server-side rendering, optimistic UI updates, and seamless payment integration.",
    year: "2024",
    category: "Full-Stack",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS", "Prisma", "NextAuth.js", "Vercel"],
    images: ["/ecom-1.png", "/ecom-2.png", "/ecom-3.png","/ecom-4.png","/ecom-5.png"],
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
      "Implementing secure payment processing while maintaining user experience",
      "Optimizing database queries for large product catalogs",
      "Creating a seamless user experience across all devices",
      "Building a comprehensive admin interface for business management",
    ],
  },
  "task-management": {
    title: "NoteStack",
    description: "A complete notes taking application",
    longDescription:
      "A sophisticated project management tool that enables teams to collaborate effectively in real-time. Features include drag-and-drop task organization, team workspaces, progress tracking, and real-time notifications.",
    year: "2024",
    category: "Frontend",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "React DnD", "Express", "JWT", "Material-UI"],
    images: ["/NoteStack-img.png", "/NoteStack-img.png", "/NoteStack-img.png"],
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
      "Implementing real-time synchronization across multiple clients",
      "Optimizing drag-and-drop performance for large task lists",
      "Managing complex state across collaborative components",
      "Ensuring data consistency in real-time collaborative environment",
    ],
  },
  "weather-dashboard": {
    title: "S.K.M College Website",
    description: "S.K.M College Website to make the digital presence of the school.",
    longDescription:
      "An advanced weather analytics platform that transforms complex meteorological data into intuitive visualizations. The dashboard provides real-time weather updates, historical data analysis, and location-based forecasting.",
    year: "2023",
    category: "Data Visualization",
    technologies: ["React", "D3.js", "Python", "FastAPI", "Chart.js", "OpenWeather API", "Mapbox", "Redis"],
    images: ["/skm-img.png", "/skm-img.png", "/skm-img.png"],
    liveUrl: "https://skmcnp.org",
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
      "Processing and visualizing large meteorological datasets efficiently",
      "Creating smooth, interactive data visualizations with D3.js",
      "Integrating multiple weather APIs for comprehensive coverage",
      "Optimizing performance for real-time data updates and rendering",
    ],
  },
  "portfolio-website": {
    title: "S.K.M College Admin Panel",
    description: "S.K.M College Website to make the digital presence of the school.",
    longDescription:
      "An advanced weather analytics platform that transforms complex meteorological data into intuitive visualizations. The dashboard provides real-time weather updates, historical data analysis, and location-based forecasting.",
    year: "2023",
    category: "Data Visualization",
    technologies: ["React", "D3.js", "Python", "FastAPI", "Chart.js", "OpenWeather API", "Mapbox", "Redis"],
    images: ["/skm-admin.png", "/skm-admin.png", "/skm-admin.png"],
    liveUrl: "https://skmcnp.org",
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
      "Processing and visualizing large meteorological datasets efficiently",
      "Creating smooth, interactive data visualizations with D3.js",
      "Integrating multiple weather APIs for comprehensive coverage",
      "Optimizing performance for real-time data updates and rendering",
    ],
  },
}

// Image Carousel Component
function ImageCarousel({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const handleDotClick = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="relative w-full h-full group">
      {/* Main Image */}
      <div className="relative w-full h-full overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentIndex
                ? 'opacity-100 translate-x-0'
                : index < currentIndex
                ? 'opacity-0 -translate-x-full'
                : 'opacity-0 translate-x-full'
            }`}
          >
            <img
              src={image || "/placeholder.svg"}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 hover:bg-white hover:scale-110 shadow-lg"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 hover:bg-white hover:scale-110 shadow-lg"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" />
          </button>
        </>
      )}

      {/* Navigation Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-2 sm:space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-8 sm:w-10 h-2 sm:h-2.5 bg-white'
                  : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Image Counter */}
      {images.length > 1 && (
        <div className="absolute top-4 right-4 px-3 py-1.5 sm:px-4 sm:py-2 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs sm:text-sm font-light">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  )
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const [isVisible, setIsVisible] = useState(false)
  const [imageVisible, setImageVisible] = useState(false)
  const [detailsVisible, setDetailsVisible] = useState(false)
  const [challengesVisible, setChallengesVisible] = useState(false)
  const [ctaVisible, setCtaVisible] = useState(false)
  
  const imageRef = useRef(null)
  const detailsRef = useRef(null)
  const challengesRef = useRef(null)
  const ctaRef = useRef(null)

  const project = projects[params.slug as keyof typeof projects]

  useEffect(() => {
    // Header animation
    setTimeout(() => setIsVisible(true), 100)

    // Setup intersection observers
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '50px'
    }

    const imageObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setImageVisible(true)
    }, observerOptions)

    const detailsObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setDetailsVisible(true)
    }, observerOptions)

    const challengesObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setChallengesVisible(true)
    }, observerOptions)

    const ctaObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setCtaVisible(true)
    }, observerOptions)

    if (imageRef.current) imageObserver.observe(imageRef.current)
    if (detailsRef.current) detailsObserver.observe(detailsRef.current)
    if (challengesRef.current) challengesObserver.observe(challengesRef.current)
    if (ctaRef.current) ctaObserver.observe(ctaRef.current)

    return () => {
      if (imageRef.current) imageObserver.unobserve(imageRef.current)
      if (detailsRef.current) detailsObserver.unobserve(detailsRef.current)
      if (challengesRef.current) challengesObserver.unobserve(challengesRef.current)
      if (ctaRef.current) ctaObserver.unobserve(ctaRef.current)
    }
  }, [])

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-xl z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/projects" className="flex items-center text-gray-600 hover:text-black transition-colors duration-300 font-light">
              <ArrowLeft size={18} className="mr-3" />
              Back to projects
            </Link>
            <Link href="/" className="font-light text-xl text-gray-900 tracking-wide">
              Utkarsh Singh
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div
            className={`flex items-center space-x-4 mb-8 transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <span className="px-4 py-2 bg-gray-50 text-gray-600 text-sm rounded-full font-medium">
              {project.category}
            </span>
            <span className="text-sm text-gray-400 flex items-center font-light">
              <Calendar size={14} className="mr-2" />
              {project.year}
            </span>
          </div>

          <div
            className={`transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <h1 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6 tracking-tight leading-tight">
              {project.title}
            </h1>
            <div className="w-16 h-px bg-gray-300 mb-8"></div>
          </div>

          <div
            className={`transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <p className="text-xl font-light text-gray-600 mb-12 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          <div
            className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <Button
              className="group bg-black text-white hover:bg-gray-800 rounded-full px-8 py-4 text-base font-medium transition-all duration-300 hover:scale-105 active:scale-95"
              asChild
            >
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                View Live Project
                <ExternalLink size={18} className="ml-3 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              variant="outline"
              className="group rounded-full border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400 px-8 py-4 text-base font-medium bg-white transition-all duration-300 hover:scale-105 active:scale-95"
              asChild
            >
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github size={18} className="mr-3" />
                View Code
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Project Image Carousel */}
      <section className="pb-24 px-6 lg:px-8" ref={imageRef}>
        <div className="max-w-6xl mx-auto">
          <div
            className={`aspect-[16/10] bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl overflow-hidden shadow-xl transform transition-all duration-1000 ease-out ${
              imageVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
            }`}
          >
            <ImageCarousel images={project.images} />
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-24 px-6 lg:px-8" ref={detailsRef}>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Technologies */}
            <div
              className={`transform transition-all duration-1000 ease-out ${
                detailsVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              }`}
            >
              <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-tight">
                Technologies
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {project.technologies.map((tech, index) => (
                  <div
                    key={tech}
                    className="px-4 py-3 bg-gray-50 text-gray-700 rounded-xl text-sm font-medium hover:bg-gray-100 transition-colors duration-300 text-center"
                    style={{
                      transform: detailsVisible ? 'translateY(0)' : 'translateY(20px)',
                      opacity: detailsVisible ? 1 : 0,
                      transitionDelay: `${index * 50}ms`
                    }}
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div
              className={`transform transition-all duration-1000 ease-out ${
                detailsVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-tight">
                Key Features
              </h2>
              <div className="space-y-4">
                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start"
                    style={{
                      transform: detailsVisible ? 'translateY(0)' : 'translateY(20px)',
                      opacity: detailsVisible ? 1 : 0,
                      transitionDelay: `${200 + index * 50}ms`
                    }}
                  >
                    <div className="w-2 h-2 bg-black rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-600 font-light leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-24 px-6 lg:px-8 bg-gray-50" ref={challengesRef}>
        <div className="max-w-4xl mx-auto">
          <div
            className={`transform transition-all duration-1000 ease-out ${
              challengesVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-4 tracking-tight text-center">
              Challenges & Solutions
            </h2>
            <div className="w-16 h-px bg-gray-300 mx-auto mb-16"></div>
          </div>
          
          <div className="space-y-8">
            {project.challenges.map((challenge, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-sm transition-shadow duration-300 transform transition-all duration-1000 ease-out ${
                  challengesVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
              >
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-medium mr-6 mt-1 flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-gray-600 leading-relaxed font-light text-lg">{challenge}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-8" ref={ctaRef}>
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transform transition-all duration-1000 ease-out ${
              ctaVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight">
              More projects
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
              Explore my other projects or get in touch to discuss your next idea.
            </p>
          </div>
          
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-1000 ease-out ${
              ctaVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <Button
              className="group bg-black text-white hover:bg-gray-800 rounded-full px-8 py-4 text-base font-medium transition-all duration-300 hover:scale-105 active:scale-95"
              asChild
            >
              <Link href="/projects">
                View All Projects
                <ArrowRight size={18} className="ml-3 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400 px-8 py-4 text-base font-medium bg-white transition-all duration-300 hover:scale-105 active:scale-95"
              asChild
            >
              <a href="mailto:utkarsh2020051@gmail.com">Get in Touch</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
