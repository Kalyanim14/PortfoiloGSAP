import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Skills() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".skill-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skills-section", // start animation when this section enters viewport
          start: "top 80%",          // when top of section is 80% from top of viewport
          toggleActions: "play none none reverse", 
          // play on enter, reverse on leave (optional)
        },
      }
    );
  }, []);

  const skills = [
    { id: 1, category: "Frontend", items: ["ReactJS", "HTML", "CSS", "Tailwind"] },
    { id: 2, category: "Backend", items: ["Django", "Flask", "Node.js"] },
    { id: 3, category: "Programming", items: ["Python", "Java", "C"] },
    { id: 4, category: "Databases", items: ["MySQL", "PostgreSQL", "SQLite"] },
    { id: 5, category: "Tools", items: ["GitHub", "Docker", "Postman"] },
  ];

  return (
    <section className="skills-section min-h-screen bg-sky-50 py-16 px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-10">
        My Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="skill-card bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold text-gray-800">
              {skill.category}
            </h3>
            <ul className="text-gray-600 mt-2 space-y-1">
              {skill.items.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
