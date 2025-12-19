"use client";

import { Plus, Minus } from "lucide-react";
import { useEffect, useState, useRef } from "react";

export default function FAQSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const sectionRef = useRef(null);

  const faqs = [
    {
      question: "What technologies do you specialize in?",
      answer:
        "I specialize in modern web technologies including React, Next.js, TypeScript, Tailwind CSS, and Node.js. I focus on building performant, scalable applications with exceptional user experiences.",
    },
    {
      question: "What is your development process?",
      answer:
        "My development process starts with understanding your requirements, followed by design and prototyping, iterative development with regular feedback, rigorous testing, and seamless deployment with ongoing support.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on complexity and scope. A simple landing page might take 1-2 weeks, while a full-scale web application could take 8-12 weeks. I provide detailed timelines after understanding your specific requirements.",
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

  const toggleFAQ = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Side - Heading */}
          <div className="lg:col-span-3">
            <div
              className={`transform transition-all duration-1000 ease-out lg:sticky lg:top-24 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <h2 className="text-5xl sm:text-6xl ml-5 lg:text-8xl font-light text-gray-900 tracking-tight">
                FAQ
              </h2>
            </div>
          </div>

          {/* Right Side - FAQ Items */}
          <div className="lg:col-span-9">
            <div className="space-y-4 sm:space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`transform transition-all duration-1000 ease-out ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-12 opacity-0"
                  }`}
                  style={{ transitionDelay: `${400 + index * 150}ms` }}
                >
                  <div className="border border-gray-100 rounded-2xl bg-white overflow-hidden transition-all duration-300 hover:shadow-lg">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full text-left p-6 sm:p-8 flex items-center justify-between gap-4 group"
                    >
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 group-hover:text-black transition-colors duration-300 pr-4">
                        {faq.question}
                      </h3>
                      <div className="shrink-0">
                        <div
                          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-300 group-hover:bg-gray-200 ${
                            openIndex === index ? "rotate-180" : ""
                          }`}
                        >
                          {openIndex === index ? (
                            <Minus className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" />
                          ) : (
                            <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" />
                          )}
                        </div>
                      </div>
                    </button>

                    {/* Answer */}
                    <div
                      className={`transition-all duration-500 ease-in-out overflow-hidden ${
                        openIndex === index
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                        <p className="text-base sm:text-lg text-gray-600 font-light leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div
              className={`mt-8 sm:mt-12 transform transition-all duration-1000 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "1200ms" }}
            >
              <div className="bg-gray-50 rounded-2xl p-8 sm:p-10 md:p-12">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4">
                  Still have questions?
                </h3>
                <p className="text-base sm:text-lg text-gray-600 font-light mb-6">
                  Can't find the answer you're looking for? Feel free to reach
                  out to me directly.
                </p>
                <a
                  href="mailto:your.email@example.com"
                  className="inline-flex items-center text-gray-900 hover:text-black transition-colors duration-300 text-base sm:text-lg font-normal border-b-2 border-gray-900"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
