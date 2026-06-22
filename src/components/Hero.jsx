import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import resumePDF from "../assets/Ramesh_Resume.pdf";
import profileimg from "../assets/myprofile.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="container mx-auto px-6 md:px-20 lg:px-32 py-24 flex flex-col md:flex-row-reverse items-center gap-12"
    >
      <div className="flex-1 flex justify-center">
        <div className="relative w-60 h-60 md:w-72 md:h-72">
          <div className="absolute inset-0 z-0 flex items-center justify-center">
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-gray-300 dark:bg-gray-700 opacity-40 animate-pulse"></div>
          </div>

          <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-gray-100 dark:ring-gray-800 flex items-center justify-center">
            <img
              src={profileimg}
              alt="Ramesh M"
              className="w-full h-full object-cover"
              loading="eager"
              fetchpriority="high"
            />
          </div>
        </div>
      </div>

      <div className="flex-1 text-center md:text-left">
        <p className="text-sm text-gray-500 dark:text-gray-400">Hello, I'm</p>
        <h1 className="text-4xl md:text-5xl font-bold mt-2">Ramesh M</h1>
        <p className="mt-2 text-xl text-gray-700 font-semibold dark:text-gray-300">
          Full Stack MERN Developer
        </p>
        <p className="mt-3 text-base text-gray-600 dark:text-gray-400 max-w-md mx-auto md:mx-0">
          Full Stack Developer with hands-on experience building scalable web
          applications using the MERN stack. Skilled in developing REST APIs,
          managing global state, and deploying web solutions.
        </p>

        <div className="mt-6 flex items-center gap-4 justify-center md:justify-start">
          <a
            href={resumePDF}
            download="Resume_Ramesh.pdf"
            className="px-5 py-2 border border-black text-black bg-transparent hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black transition duration-300 rounded-full text-sm shadow-sm"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="px-5 py-2 rounded-full bg-black text-white hover:opacity-80 dark:bg-white dark:text-black text-sm transition duration-300 shadow-sm"
          >
            Contact Info
          </a>
        </div>

        <div className="mt-6 flex items-center gap-4 justify-center md:justify-start">
          <a
            href="https://linkedin.com/in/rameshmuthu-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-full transition-transform transform hover:scale-110"
          >
            <FaLinkedin className="w-6 h-6 text-[#0077b5]" />
          </a>
          <a
            href="https://github.com/rameshmuthu-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-full transition-transform transform hover:scale-110"
          >
            <FaGithub className="w-6 h-6 text-black dark:text-white" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;