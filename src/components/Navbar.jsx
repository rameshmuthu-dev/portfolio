import React from "react";


const Navbar = ({ activeSection }) => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 w-full px-6 py-2 flex items-center justify-around">

      {/* Logo / Name → go to top */}
      <a
        href="#home"
        className="text-2xl font-semibold cursor-pointer hover:opacity-80"
      >
        Ramesh M
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-8 items-center text-gray-700 dark:text-gray-300">

          <a
          href="#home"
          className={activeSection === "home" ? "font-bold underline" : "hover:underline"}
        >
          Home
        </a>

        <a
          href="#about"
          className={activeSection === "about" ? "font-bold underline" : "hover:underline"}
        >
          About
        </a>

        <a
          href="#skills"
          className={activeSection === "skills" ? "font-bold underline" : "hover:underline"}
        >
          Skills
        </a>

        <a
          href="#projects"
          className={activeSection === "projects" ? "font-bold underline" : "hover:underline"}
        >
          Projects
        </a>

        <a
          href="#contact"
          className={activeSection === "contact" ? "font-bold underline" : "hover:underline"}
        >
          Contact
        </a>
      </nav>

    </header>
  );
};

export default Navbar;
