import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Certificates() {
  const certificates = [
    "IBM SkillsBuild - Cyber Security Internship",
    "Full Stack Web Development Certification",
    "Python for Data Science",
    "SQL & Database Management",
    "Java Programming Essentials",
  ];

  const certRefs = useRef([]);

  useEffect(() => {
    certRefs.current.forEach((el, idx) => {
      if (el) {
        gsap.fromTo(
          el,
          {
            x: idx % 2 === 0 ? -200 : 200, // alternate left/right
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%", // animation starts when element enters viewport
              toggleActions: "play none none reverse", // play when in view, reverse on scroll up
            },
          }
        );
      }
    });
  }, []);

  return (
    <section className="bg-sky-50 py-16 px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-10">
        Certificates
      </h2>
      <ul className="max-w-2xl mx-auto text-lg text-gray-700 space-y-4">
        {certificates.map((cert, idx) => (
          <li
            key={idx}
            ref={(el) => (certRefs.current[idx] = el)}
            className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition"
          >
            {cert}
          </li>
        ))}
      </ul>
    </section>
  );
}
