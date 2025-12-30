"use client";

import { useEffect, useRef, useState } from "react";
import {
  SiReact,
  SiExpress,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiJavascript,
  SiGithub,
} from "react-icons/si";

export default function AboutSection() {
  const skills = [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Express", icon: SiExpress, color: "#000000" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "GitHub", icon: SiGithub, color: "#181717" },
  ];

  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-31 px-6 lg:px-8 bg-[#f1f2ec]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-10">
            {/* Badge */}
            <span
              className={`inline-block px-4 py-1 text-sm rounded-full border border-gray-200 text-gray-600
              transition-all duration-700 ease-out
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              About Me
            </span>

            {/* Heading */}
            <h2
              className={`text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-gray-900 leading-tight
              transition-all duration-700 delay-100 ease-out
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              Driven – And <br /> Adaptable
            </h2>

            {/* Description */}
            <p
              className={`text-lg lg:text-2xl text-gray-600 max-w-xl leading-relaxed
              transition-all duration-700 delay-200 ease-out
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <span className="text-gray-900">
                Passionate about building modern digital experiences. With 5+
                years in full-stack development{" "}
              </span>{" "}
              <span className="text-gray-600">
                , I blend strong engineering with thoughtful design to create
                scalable, user-focused solutions.
              </span>
            </p>

            {/* Technologies */}
            <div
              className={`pt-10 transition-all duration-700 delay-500 ease-out
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-6">
                Technologies
              </h3>
              <Marquee skills={skills} />
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className={`relative transition-all duration-1000 ease-out`}>
            <div className="aspect-[4/5] w-full max-w-sm mx-auto lg:max-w-full">
              <div className="w-full h-full">
                <img
                  src="/about-img.png"
                  alt="Developer workspace"
                  className="w-full h-full object-contain "
                />
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee({
  skills,
}: {
  skills: Array<{ name: string; icon: any; color: string }>;
}) {
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let position = 0;
    const speed = 0.5;

    const animate = () => {
      position -= speed;
      track.style.transform = `translateX(${position}px)`;

      if (Math.abs(position) >= track.scrollWidth / 2) {
        position = 0;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div ref={trackRef} className="flex gap-4 w-max">
        {[...skills, ...skills].map((skill, index) => {
          const name = skill.name;
          return (
            <div
              key={index}
              className="flex items-center justify-center px-5 py-4 rounded-xl bg-gray-[#f1f2ec] transition-all duration-300"
              style={{ minWidth: "80px" }}
            >
             {name}
            </div>
          );
        })}
      </div>

      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#f1f2ec] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#f1f2ec] to-transparent" />
    </div>
  );
}
