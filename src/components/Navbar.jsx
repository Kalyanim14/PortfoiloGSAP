import React, { useEffect, useState } from "react";
import gsap from "gsap";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Animate navbar links on mount
  useEffect(() => {
    gsap.fromTo(
      ".nav-link",
      { y: -30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      }
    );
  }, []);

  // Update active section on scroll
  useEffect(() => {
    const sections = [
      "home",
      "about",
      "projects",
      "skills",
      "experience",
      "certificates",
      "resume",
      "contact",
    ];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 120; // offset for navbar
      for (let section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "certificates", label: "Certificates" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50">
      <div className="flex justify-between items-center px-6 md:px-10 py-4">
        <a href="#home" className="text-xl md:text-2xl font-bold text-blue-700">
          Portfolio
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link font-semibold transition-colors duration-300 ${
                activeSection === item.id
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-800 hover:text-blue-600"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 text-blue-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span
            className={`bg-blue-700 block h-0.5 w-6 rounded-sm transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
          ></span>
          <span
            className={`bg-blue-700 block h-0.5 w-6 rounded-sm my-0.5 transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`bg-blue-700 block h-0.5 w-6 rounded-sm transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full"
        }`}
      >
        <div className="flex flex-col py-4">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`px-8 py-3 font-semibold transition-all duration-300 ${
                activeSection === item.id
                  ? "text-blue-600 bg-blue-50 border-l-4 border-blue-600"
                  : "text-gray-800 hover:text-blue-600 hover:bg-blue-50"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
