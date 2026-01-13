"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Flip from "gsap/Flip";
import "../app/globals.css"

gsap.registerPlugin(ScrollTrigger, Flip);

const images = [
  "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
  "https://images.unsplash.com/photo-1495567720989-cebdbdd97913",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1520975922284-8b456906c813",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
  "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb",
  "https://images.unsplash.com/photo-1517816428104-7979c7fbc6d1",
  "https://images.unsplash.com/photo-1500534623283-312aade485b7",
];

export default function VisualExplorationsSection() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const galleryRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!wrapRef.current || !galleryRef.current) return;

    let ctx: gsap.Context;

    const createAnimation = () => {
      ctx && ctx.revert();

      ctx = gsap.context(() => {
        const gallery = galleryRef.current!;
        const items = gallery.querySelectorAll(".gallery-item");

        gallery.classList.add("gallery--final");
        const state = Flip.getState(items);
        gallery.classList.remove("gallery--final");

        const flip = Flip.to(state, {
          simple: true,
          ease: "expoScale(1, 5)",
        });

        gsap.timeline({
          scrollTrigger: {
            trigger: gallery,
            start: "center center",
            end: "+=100%",
            scrub: true,
            pin: wrapRef.current,
          },
        }).add(flip);
      }, wrapRef);
    };

    createAnimation();
    window.addEventListener("resize", createAnimation);

    return () => {
      window.removeEventListener("resize", createAnimation);
      ctx && ctx.revert();
    };
  }, []);

  return (
    <>
      <section ref={wrapRef} className="gallery-wrap">
        <div
          ref={galleryRef}
          className="gallery gallery--bento"
        >
          {images.map((src, i) => (
            <div key={i} className="gallery-item">
              <img src={`${src}?auto=format&fit=crop&w=1200&q=80`} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
