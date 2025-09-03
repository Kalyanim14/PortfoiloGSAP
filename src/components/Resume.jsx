import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Resume() {
  const sectionRef = useRef(null);
  const buttonWrapRef = useRef(null);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    const btnWrap = buttonWrapRef.current;
    if (!sectionEl || !btnWrap) return;

    const heading = sectionEl.querySelector("h2");
    const para = sectionEl.querySelector("p");
    const stars = btnWrap.querySelectorAll(".star");

    // Heading
    gsap.fromTo(
      heading,
      { y: -50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionEl, start: "top 90%", once: true },
      }
    );

    // Paragraph
    gsap.fromTo(
      para,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionEl, start: "top 90%", once: true },
      }
    );

    // Button pop-in
    const tl = gsap.timeline({
      scrollTrigger: { trigger: btnWrap, start: "top 95%", once: true },
    });

    tl.fromTo(
      btnWrap.querySelector("a"),
      { scale: 0.85, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" }
    );

    // Stars slide in from sides, then fade out
    tl.fromTo(
      stars,
      {
        opacity: 0,
        scale: 0.6,
        x: (i) => (i % 2 === 0 ? -40 : 40), // even: left, odd: right
      },
      {
        opacity: 1,
        scale: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
      },
      "-=0.2"
    ).to(stars, {
      opacity: 0,
      scale: 0.6,
      duration: 0.5,
      delay: 0.25,
      stagger: 0.1,
      ease: "power2.in",
    });

    // Optional: replay stars on hover
    const replayStars = () => {
      gsap.fromTo(
        stars,
        {
          opacity: 0,
          scale: 0.6,
          x: (i) => (i % 2 === 0 ? -40 : 40),
        },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          onComplete: () =>
            gsap.to(stars, {
              opacity: 0,
              scale: 0.6,
              duration: 0.4,
              delay: 0.2,
              stagger: 0.08,
            }),
        }
      );
    };

    const btn = btnWrap.querySelector("a");
    btn.addEventListener("mouseenter", replayStars);
    return () => btn.removeEventListener("mouseenter", replayStars);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="resume"
      className="bg-sky-100 py-24 px-8 text-center relative"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
        Resume
      </h2>
      <p className="text-lg text-gray-700 mb-8">
        Download my latest resume to know more about my skills, projects, and
        experience.
      </p>

      <div
        ref={buttonWrapRef}
        className="relative inline-block overflow-visible"
      >
        <a
          href="/Kalyani_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-7 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition relative focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Download Resume"
        >
          Download Resume
        </a>

        {/* ✨ Stars (left & right) */}
        <span className="star absolute left-[-28px] top-1/2 -translate-y-1/2 text-yellow-400 text-2xl select-none pointer-events-none drop-shadow">
          ✨
        </span>
        <span className="star absolute right-[-28px] top-1/2 -translate-y-1/2 text-yellow-400 text-2xl select-none pointer-events-none drop-shadow">
          ✨
        </span>
      </div>
    </section>
  );
}
