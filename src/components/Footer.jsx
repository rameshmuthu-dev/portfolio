import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 text-center py-10 px-6 mt-20">

      {/* Name */}
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
        Ramesh Muthu
      </h2>

      {/* Footer Navigation */}
      <div className="flex justify-center gap-8 mt-3 text-gray-600 dark:text-gray-300 text-sm">
        <a href="#about" className="hover:text-black dark:hover:text-white transition">About</a>
        <a href="#projects" className="hover:text-black dark:hover:text-white transition">Projects</a>
        <a href="#skills" className="hover:text-black dark:hover:text-white transition">Skills</a>
        <a href="#contact" className="hover:text-black dark:hover:text-white transition">Contact</a>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 mt-6 text-xl">

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/rameshmuthu-dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-xl bg-white dark:bg-gray-800 shadow hover:shadow-lg transition"
        >
          <FaLinkedin className="text-blue-600 text-2xl" />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/rameshmuthu-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-xl bg-white dark:bg-gray-800 shadow hover:shadow-lg transition"
        >
          <FaGithub className="text-gray-800 dark:text-white text-2xl" />
        </a>

        {/* Email */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=rameshmuthu01996@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-xl bg-white dark:bg-gray-800 shadow hover:shadow-lg transition"
        >
          <MdEmail className="text-red-500 text-2xl" />
        </a>

      </div>

      {/* CopyRight */}
      <p className="text-gray-600 dark:text-gray-400 text-sm mt-6">
        © 2025 Ramesh Muthu | All rights reserved.
      </p>

    </footer>
  );
};

export default Footer;
