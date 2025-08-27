"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink, Github, X } from "lucide-react"
import Link from "next/link"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const handleContactFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert("Message sent successfully!")
        setFormData({ name: "", email: "", message: "" })
        setIsContactFormOpen(false)
      } else {
        alert("Failed to send message. Please try again.")
      }
    } catch (error) {
      alert("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

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
  ]

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="font-medium text-xl text-black hover:text-gray-600">
              utkarsh.
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              <button onClick={() => scrollToSection("about")} className="text-gray-600 hover:text-black">
                About
              </button>
              <button onClick={() => scrollToSection("works")} className="text-gray-600 hover:text-black">
                Works
              </button>
              <Link href="/projects" className="text-gray-600 hover:text-black">
                Projects
              </Link>
              <button onClick={() => scrollToSection("contact")} className="text-gray-600 hover:text-black">
                Contact
              </button>
              <Button
                variant="outline"
                className="rounded-full border-black text-black hover:bg-black hover:text-white bg-transparent"
                onClick={() => setIsContactFormOpen(true)}
              >
                Let's Talk
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>

            {/* Mobile Navigation Button */}
            <button className="md:hidden p-3 hover:bg-gray-100 rounded-full" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <div className="relative w-6 h-6">
                <span className={`absolute top-1 left-0 w-6 h-0.5 bg-black ${isMenuOpen ? "rotate-45 top-3" : ""}`} />
                <span className={`absolute top-3 left-0 w-6 h-0.5 bg-black ${isMenuOpen ? "opacity-0" : ""}`} />
                <span className={`absolute top-5 left-0 w-6 h-0.5 bg-black ${isMenuOpen ? "-rotate-45 top-3" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden bg-white/98 backdrop-blur-xl border-t border-gray-100 ${
            isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-6 py-6 space-y-6">
            {["about", "works", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block text-left text-gray-600 hover:text-black capitalize text-lg"
              >
                {section}
              </button>
            ))}
            <Link href="/projects" className="block text-left text-gray-600 hover:text-black text-lg">
              Projects
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-6 lg:px-12 pt-20 md:pt-0">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-8">
              <p className="text-xl text-gray-600 tracking-wide">Hello! I'm Utkarsh.</p>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-black leading-[0.9]">
                Developing digital
                <br />
                products with emphasis
                <br />
                on{" "}
                <span className="text-gray-400 relative">
                  clean code
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gray-200"></span>
                </span>
              </h1>

              <div className="pt-4">
                <Button
                  className="bg-black text-white hover:bg-gray-800 rounded-full px-10 py-4 text-lg"
                  onClick={() => setIsContactFormOpen(true)}
                >
                  Let's Talk
                  <ArrowRight size={20} className="ml-3" />
                </Button>
              </div>

              <p className="text-gray-600 max-w-lg leading-relaxed text-lg">
                A multidisciplinary developer focused on creating exceptional digital experiences through thoughtful
                design and robust engineering.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-96 bg-gray-100 rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/professional-developer-portrait.png"
                    alt="Utkarsh Singh - Developer Portrait"
                    className="w-full h-full object-cover grayscale"
                  />
                  <div className="absolute inset-0 bg-black/10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl font-bold text-black">About me</h2>
              <div className="space-y-8 text-gray-600 leading-relaxed text-lg">
                <p>
                  I'm a passionate full-stack developer with over 3 years of experience creating digital solutions that
                  bridge the gap between design and functionality. My journey began with a curiosity for how things
                  work, which evolved into a love for building them.
                </p>
                <p>
                  I specialize in modern web technologies including React, Next.js, Node.js, and TypeScript. My approach
                  combines technical expertise with design sensibility to create products that are not only functional
                  but also delightful to use.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
                  or sharing knowledge with the developer community.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                {["React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL", "AWS", "Docker"].map((skill) => (
                  <span
                    key={skill}
                    className="px-5 py-3 bg-white rounded-full text-sm text-gray-700 border border-gray-200 hover:border-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="relative">
                <div className="w-full h-96 bg-black rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/black-and-white-artistic-developer-workspace-with-.png"
                    alt="Developer workspace"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Works Section */}
      <section id="works" className="py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-20">
            <h2 className="text-5xl font-bold text-black">Selected works</h2>
            <Link href="/projects" className="text-gray-600 hover:text-black flex items-center text-lg">
              View all projects
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>

          <div className="space-y-2">
            {projects.map((project) => (
              <div key={project.title} className="group">
                <Link href={project.link}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between py-10 border-b border-gray-100 hover:border-gray-300 hover:bg-gray-50/50 px-6 -mx-6 rounded-2xl">
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center space-x-6">
                        <h3 className="text-2xl font-semibold text-black group-hover:text-gray-600">{project.title}</h3>
                        <span className="text-sm text-gray-400 bg-gray-100 px-3 py-1 rounded-full">{project.year}</span>
                      </div>
                      <p className="text-gray-600 max-w-md text-lg leading-relaxed">{project.description}</p>
                    </div>
                    <div className="flex items-center space-x-6 mt-6 md:mt-0">
                      <div className="flex items-center text-gray-600 group-hover:text-black">
                        <span className="mr-3">View Project</span>
                        <ExternalLink size={18} />
                      </div>
                      <div className="flex items-center text-gray-600 group-hover:text-black">
                        <Github size={18} />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-6xl font-bold text-black mb-8">Let's work together</h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed">
            I'm always interested in hearing about new opportunities and interesting projects. Let's create something
            amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <Button
              className="bg-black text-white hover:bg-gray-800 rounded-full px-10 py-5 text-lg"
              onClick={() => setIsContactFormOpen(true)}
            >
              Get in touch
              <ArrowRight size={20} className="ml-3" />
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-black text-black hover:bg-black hover:text-white px-10 py-5 text-lg bg-transparent"
              asChild
            >
              <a href="#" target="_blank" rel="noopener noreferrer">
                View Resume
              </a>
            </Button>
          </div>

          <div className="pt-20 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div className="space-y-3">
                <h3 className="font-semibold text-black text-lg">Email</h3>
                <a href="mailto:utkarsh2020051@gmail.com" className="text-gray-600 hover:text-black">
                  utkarsh2020051@gmail.com
                </a>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-black text-lg">Location</h3>
                <p className="text-gray-600">New Delhi, India</p>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-black text-lg">Availability</h3>
                <p className="text-gray-600">Open for opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 lg:px-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
          <p className="text-gray-600">© 2024 Utkarsh Singh. All rights reserved.</p>
          <div className="flex space-x-10">
            {["GitHub", "LinkedIn", "Twitter"].map((social) => (
              <a key={social} href="#" className="text-gray-600 hover:text-black">
                {social}
              </a>
            ))}
          </div>
        </div>
      </footer>

      {isContactFormOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-black">Let's Talk</h3>
              <button onClick={() => setIsContactFormOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleContactFormSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white hover:bg-gray-800 rounded-xl py-3 text-lg"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
