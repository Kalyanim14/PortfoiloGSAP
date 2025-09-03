import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import img from "../assets/kalyani.jpeg";
import bgImg from "../assets/n72Fq9.JPG";

export default function Hero() {
  const hero = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      hero.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );

    gsap.to(".profile-img", {
      borderColor: "#FFC107",
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "linear",
    });
  }, []);

  return (
    <div
      ref={hero}
      className="hero min-h-screen flex flex-col items-center justify-center text-center p-6"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <img
        src={img}
        alt="kalyani"
        className="profile-img rounded-full w-40 h-40 md:w-56 md:h-56 border-8 border-blue-500 shadow-lg"
      />
      <h1 className="mt-6 text-3xl md:text-5xl font-bold text-gray-900">
        Hi, I’m <span className="text-blue-700">Kalyani</span>
      </h1>
      <p className="mt-3 text-lg md:text-xl text-gray-700 max-w-lg">
        A passionate Computer Science Engineer aspiring to become a{" "}
        <span className="text-yellow-500 font-semibold">Software Engineer</span>.
      </p>
    </div>
  );
}
