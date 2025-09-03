import React, { useEffect } from "react";
import gsap from "gsap";

export default function Projects() {
  useEffect(() => {
    gsap.fromTo(
      ".project-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.3,
        ease: "power3.out",
      }
    );
  }, []);

  const projects = [
    {
      id: 1,
      title: "Library Management System (Django, SQLite)",
      description: "Manage inventory, issuing, and tracking of books.",
    },
    {
      id: 2,
      title: "Simple Posting Website (ReactJS + Flask)",
      description: "Dynamic content posting system.",
    },
    {
      id: 3,
      title: "Data Hiding using Steganography",
      description: "Secure password-protected message embedding in images.",
    },
    {
      id: 4,
      title: "Inventory Management System (Python, Tkinter)",
      description: "GUI-based product inventory management.",
    },
    {
      id: 5,
      title: "ATM Banking Simulator (Python OOP, Tkinter, JSON)",
      description: "Secure ATM with PIN authentication and PDF statements.",
    },
  ];

  return (
    <section className="bg-sky-100 py-16 px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-10">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold text-gray-800">
              {project.title}
            </h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
