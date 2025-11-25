import React, { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import MobileMenu from "./components/MobileMenu";
import ScrollToTopButton from "./components/ScrollToTopButton";

const App = () => {
  const [activeSection, setActiveSection] = useState("about");

  // MOBILE MENU STATE
  const [mobileMenu, setMobileMenu] = useState(false);

 
  // const [dark, setDark] = useState(() => {
  //   if (typeof window !== "undefined") {
  //     const saved = localStorage.getItem("prefers-dark");
  //     if (saved) return saved === "true";
  //     return (
  //       window.matchMedia &&
  //       window.matchMedia("(prefers-color-scheme: dark)").matches
  //     );
  //   }
  //   return false;
  // });

  // ACTIVE SECTION OBSERVER
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);



  return (
    <div className="min-h-screen font-inter bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">

      {/* NAVBAR */}
      <Navbar
        activeSection={activeSection}


        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
      />

      {/* HERO */}
      <Hero />

      {/* ABOUT */}
      <About />

      {/* SKILLS */}
      <Skills />

      {/* PROJECTS */}
      <Projects />

      {/* CONTACT */}
      <Contact />

      {/* FOOTER */}
      <Footer />
      <MobileMenu />
      <ScrollToTopButton />




    </div>
  );
};

export default App;
