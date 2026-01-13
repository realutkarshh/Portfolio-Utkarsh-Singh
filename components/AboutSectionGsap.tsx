"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import "../app/globals.css"

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current || !textRef.current) return;

    const ctx = gsap.context(() => {
      // Split text
      const split = new SplitText(textRef.current!, {
        type: "chars,words",
      });

      // Horizontal scroll animation (MASTER)
      const scrollTween = gsap.to(textRef.current!, {
        xPercent: -100,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current!,
          pin: true,
          scrub: true,
          end: "+=3000", // scroll length
        },
      });

      // Animate each character INSIDE the horizontal scroll
      split.chars.forEach((char) => {
        gsap.from(char, {
          yPercent: gsap.utils.random(-200, 200),
          rotation: gsap.utils.random(-20, 20),
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: char,
            containerAnimation: scrollTween,
            start: "left 100%",
            end: "left 30%",
            scrub: true,
          },
        });
      });
    }, sectionRef);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="horizontal">
      <div className="container">
        <h3 ref={textRef} className="horizontal-text heading-xl">
          I build scalable full-stack systems, secure data pipelines, and
          performance-driven web experiences.
        </h3>
      </div>
    </section>
  );
}
