"use client";

import { useEffect, useRef } from "react";

export default function AboutSection() {
  const skills = [
    "React",
    "Express",
    "TypeScript",
    "Node.js",
    "Python",
    "PostgreSQL",
    "JavaScript",
    "Github",
  ];

  return (
    <section id="about" className="py-24 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-6xl lg:text-7xl font-normal text-gray-900 tracking-tight">
            Who am I ?
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20 items-start">
          {/* Text Content */}
          <div className="lg:col-span-3 space-y-12">
            <div className="space-y-8">
              <p className="text-xl lg:text-2xl font-light text-gray-900 leading-relaxed">
                I'm a passionate full-stack developer with over 3 years of
                experience creating digital solutions that bridge the gap
                between design and functionality.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                My journey began with a curiosity for how things work, which
                evolved into a love for building them. I specialize in modern
                web technologies and combine technical expertise with design
                sensibility.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
            </div>

            {/* Technologies */}
            <div className="pt-8">
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-6">
                Technologies
              </h3>

              {/* Animated marquee */}
              <div className="relative overflow-hidden">
                <Marquee skills={skills} />
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="lg:col-span-2">
            <div className="relative">
              <div className="aspect-[4/5] w-full max-w-sm mx-auto lg:max-w-full">
                <div
                  className="w-full h-full bg-gradient-to-b from-gray-100 to-gray-200
                             rounded-2xl overflow-hidden shadow-xl
                             hover:shadow-2xl transition-shadow duration-500"
                >
                  <img
                    src="/black-and-white-artistic-developer-workspace-with-.png"
                    alt="Developer workspace"
                    className="w-full h-full object-cover hover:scale-105
                               transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Subtle accent element */}
              <div
                className="absolute -bottom-4 -right-4 w-20 h-20
                           bg-blue-500 rounded-full opacity-10 blur-xl"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                               Marquee Component                             */
/* -------------------------------------------------------------------------- */

function Marquee({ skills }: { skills: string[] }) {
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let position = 0;
    const speed = 0.6; // smaller = slower

    const animate = () => {
      position -= speed;
      track.style.transform = `translateX(${position}px)`;

      // Reset when half the track is gone
      if (Math.abs(position) >= track.scrollWidth / 2) {
        position = 0;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="relative">
      <div ref={trackRef} className="flex gap-3 w-max">
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={index}
            className="py-4 px-4 rounded-xl text-center"
            style={{ minWidth: "120px" }}
          >
            <span className="text-sm font-medium text-gray-700">
              {skill}
            </span>
          </div>
        ))}
      </div>

      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />
    </div>
  );
}
