import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const aboutRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (!aboutRef.current) return;

    const words = aboutRef.current.querySelectorAll<HTMLSpanElement>(".word");

    gsap.fromTo(
      words,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 75%", // Triggers when section enters viewport
          toggleActions: "play none none reset",
        },
      }
    );
  }, []);

  const text =
    "I am Utkarsh Singh, a passionate Frontend & AI/ML Developer with a keen eye for design and performance. I love crafting smooth and engaging web experiences while integrating machine learning capabilities to push innovation forward.";

  return (
    <section
      id="about"
      className="min-h-screen bg-stone-100 flex items-center justify-center px-6"
    >
      <p
        ref={aboutRef}
        className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-600 leading-relaxed text-center max-w-3xl"
      >
        {text.split(" ").map((word, index) => (
          <span key={index} className="word opacity-0 inline-block mr-2">
            {word}
          </span>
        ))}
      </p>
    </section>
  );
};

export default About;
