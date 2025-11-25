import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiExpress, SiMongodb, SiRedux, SiTailwindcss, SiBootstrap } from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-24 container mx-auto px-6 md:px-20 lg:px-32 py-12">
      
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mt-2">Skills</h2>
        <p className="text-sm text-gray-500">My Tech Stacks</p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* FRONTEND BOX */}
        <div className="
            bg-white rounded-2xl p-10 
            flex flex-col items-center text-center min-h-[420px]
            shadow-md hover:shadow-xl hover:-translate-y-1 
            transition-all duration-300
        ">
          <h3 className="text-xl font-semibold mb-6">Frontend Development</h3>

          <ul className="space-y-5 text-left">
            <li className="flex items-center gap-4">
              <span className="w-6 flex justify-center"><FaHtml5 className="text-orange-600 text-xl" /></span>
              HTML
            </li>

            <li className="flex items-center gap-4">
              <span className="w-6 flex justify-center"><FaCss3Alt className="text-blue-600 text-xl" /></span>
              CSS
            </li>

            <li className="flex items-center gap-4">
              <span className="w-6 flex justify-center"><FaJs className="text-yellow-500 text-xl" /></span>
              JavaScript
            </li>

            <li className="flex items-center gap-4">
              <span className="w-6 flex justify-center"><FaReact className="text-cyan-400 text-xl" /></span>
              React
            </li>

            <li className="flex items-center gap-4">
              <span className="w-6 flex justify-center"><SiRedux className="text-purple-600 text-xl" /></span>
              Redux
            </li>

            <li className="flex items-center gap-4">
              <span className="w-6 flex justify-center"><SiTailwindcss className="text-sky-500 text-xl" /></span>
              Tailwind CSS
            </li>

            <li className="flex items-center gap-4">
              <span className="w-6 flex justify-center"><SiBootstrap className="text-indigo-500 text-xl" /></span>
              Bootstrap
            </li>
          </ul>
        </div>

        {/* BACKEND BOX */}
        <div className="
            bg-white rounded-2xl p-10 
            flex flex-col items-center text-center min-h-[420px]
            shadow-md hover:shadow-xl hover:-translate-y-1 
            transition-all duration-300
        ">
          <h3 className="text-xl font-semibold mb-6">Backend Development</h3>

          <ul className="space-y-5 text-left">
            <li className="flex items-center gap-4">
              <span className="w-6 flex justify-center"><FaNodeJs className="text-green-600 text-xl" /></span>
              Node.js
            </li>

            <li className="flex items-center gap-4">
              <span className="w-6 flex justify-center"><SiExpress className="text-gray-600 text-xl" /></span>
              Express.js
            </li>

            <li className="flex items-center gap-4">
              <span className="w-6 flex justify-center"><SiMongodb className="text-green-700 text-xl" /></span>
              MongoDB
            </li>

            <li className="flex items-center gap-4">
              <span className="w-6 flex justify-center"><FaGithub className="text-red-500 text-xl" /></span>
              GitHub
            </li>

            <li className="flex items-center gap-4">
              <span className="w-6 flex justify-center">
                <span className="text-orange-500 text-xl">🌐</span>
              </span>
              RESTful API
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Skills;
