import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const el = aboutRef.current;

    gsap.fromTo(
      el,
      { y: 0 },
      {
        y: -10, // wiggle up
        repeat: -1, // infinite wiggle
        yoyo: true, // come back down
        ease: "power1.inOut",
        duration: 0.6,
        paused: true,
        scrollTrigger: {
          trigger: el,
          start: "top 80%", // when the heading enters viewport
          toggleActions: "play none none reverse",
          onEnter: () => gsap.to(el, { y: -10, repeat: -1, yoyo: true, duration: 0.6, ease: "power1.inOut" }),
          onLeaveBack: () => gsap.to(el, { y: 0, repeat: 0 }) // reset when scrolling back
        }
      }
    );
  }, []);

  return (
    <section className="w-full bg-sky-50 py-16 px-8 text-center">
      <h2
        ref={aboutRef}
        className="text-3xl md:text-4xl font-bold text-blue-700 mb-8"
      >
        About Me
      </h2>
      <p className="max-w-2xl mx-auto text-lg text-gray-700 leading-relaxed">
        Hi, I’m <span className="font-semibold text-blue-600">Kalyani Mantramurthi</span>, 
        a final-year Computer Science and Engineering student passionate about software 
        development and problem-solving. I have hands-on experience with 
        <span className="font-semibold"> Python, Java, Django, ReactJS, and SQL</span>.  
        I enjoy building projects that solve real-world problems and exploring 
        fields like web development, data security, and full-stack applications.
      </p>
    </section>
  );
}
