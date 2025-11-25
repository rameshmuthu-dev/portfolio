import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import resumePDF from "../assets/Resume_Ramesh.pdf";
import profileimg from "../assets/Ramesh.jpg"


const Hero = () => {
    return (
        <section id="home" className="container mx-auto px-6 md:px-20 lg:px-32 py-24 flex flex-col md:flex-row-reverse items-center gap-12">
            {/* LEFT IMAGE */}
            <div className="flex-1 flex justify-center md:justify-center">
                <div className="relative w-60 h-60 md:w-72 md:h-72 ">
                    <div className="absolute inset-0 z-0 flex items-center justify-center">
                        <div className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-gray-300 dark:bg-gray-700 opacity-40 animate-pulse"></div>
                    </div>

                    <div className=" relative w-full h-full rounded-full overflow-hidden ring-4 ring-gray-100 dark:ring-gray-800 flex items-center justify-center ">
                        <img
                            src={profileimg}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="flex-1 text-center md:text-left">
                <p className="text-sm text-gray-500 dark:text-gray-400">Hello, I'm</p>
                <h1 className="text-4xl md:text-5xl font-bold mt-2">Ramesh Muthu</h1>
                <p className="mt-2 text-xl text-gray-700 font-semibold dark:text-gray-300">Fullstack (MERN) Developer</p>
                 <p className="mt-2 text-xl text-gray-500  dark:text-gray-300">I'm a MERN Stack Developer from India, creating clean, fast, and user-friendly web applications.</p>
                



                <div className="mt-6 flex items-center gap-4 justify-center md:justify-start">
                    <a
                        href={resumePDF}
                        download="Resume_Ramesh.pdf"
                        className="px-5 py-2 border rounded-full text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                    >
                        Download CV
                    </a>
                    <a
                        href="#contact"
                        className="px-5 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black text-sm"
                    >
                        Contact Info
                    </a>
                </div>

                <div className="mt-6 flex items-center gap-4 justify-center md:justify-start">
                    <a href="https://www.linkedin.com/in/rameshmuthu-dev/" className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full">
                        <FaLinkedin className="w-7 h-7 text-blue-950-400" />
                    </a>
                    <a href="https://github.com/rameshmuthu-dev" className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full">
                        <FaGithub className="w-7 h-7 text-black-500" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
