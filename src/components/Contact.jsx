import React, { useEffect } from "react";
import gsap from "gsap";

export default function Contact() {
  useEffect(() => {
    gsap.fromTo(
      ".contact-form",
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.2, ease: "back.out(1.7)" }
    );
  }, []);

  return (
    <section className="bg-sky-200 py-16 px-8 flex flex-col items-center justify-center text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-8">
        Contact Me
      </h2>
      <form className="contact-form bg-white shadow-lg rounded-xl p-6 w-full max-w-md flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="border p-2 rounded-md"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border p-2 rounded-md"
        />
        <textarea
          placeholder="Your Message"
          className="border p-2 rounded-md"
          rows={4}
        />
        <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-white py-2 rounded-lg shadow-md hover:opacity-90 transition">
          Send
        </button>
      </form>
    </section>
  );
}
