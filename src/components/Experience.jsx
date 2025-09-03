import React from "react";

export default function Experience() {
  const experiences = [
    {
      role: "AICTE Intern - IBM Cybersecurity Program",
      company: "Edunet Foundation",
      period: "Jan 2025 - Feb 2025",
      details: "Worked on projects related to cybersecurity fundamentals, encryption, and secure application design."
    },
    {
      role: "Full Stack Development Trainee",
      company: "Self Projects",
      period: "2024 - Present",
      details: "Developed multiple web and desktop applications using ReactJS, Django, Flask, and Tkinter."
    }
  ];

  return (
    <section className="min-h-48 bg-sky-100 py-16 px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-10">
        Experience
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold text-gray-800">{exp.role}</h3>
            <p className="text-blue-600 font-medium">{exp.company}</p>
            <p className="text-gray-500 text-sm">{exp.period}</p>
            <p className="text-gray-700 mt-2">{exp.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
