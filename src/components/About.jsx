import React, { useState } from "react";
import aboutimg from "../assets/myprofile2.png";

const About = () => {
  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
    <section id="about" className="scroll-mt-24 container mx-auto px-6 md:px-20 lg:px-32 py-12">
      <div className="flex flex-col md:flex-row items-center gap-10">

        <div className="flex-1">
          <div className="relative w-full h-64 md:h-80 bg-gray-100 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg flex items-center justify-center">
            
            {isImageLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-800 z-10">
                <div className="w-8 h-8 border-4 border-black dark:border-white border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}

            <img
              src={aboutimg}
              className={`w-full h-full object-cover opacity-80 transition-opacity duration-500 ${
                isImageLoading ? "opacity-0" : "opacity-80"
              }`}
              alt="Ramesh M Profile"
              loading="lazy"
              decoding="async"
              onLoad={() => setIsImageLoading(false)}
            />
          </div>
        </div>

        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            I'm <span className="font-semibold text-black dark:text-white">Ramesh M</span>, 
            a professional <span className="font-semibold text-black dark:text-white">Full Stack MERN Developer</span> with 
            hands-on experience building scalable, clean, and interactive web applications using React.js, Node.js, Express.js, and MongoDB.
          </p>

          <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">
            Currently working as a Full Stack Developer Intern, I focus on engineering complete architectures—ranging from implementing robust data hierarchy flows and securing REST APIs with JWT, to working with tools like Redux Toolkit and PostgreSQL. I love solving infrastructure bottlenecks, like setting up self-healing cron jobs and structuring automated CI/CD pipelines.
          </p>

          <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">
            With a baseline foundation in Physics transitionally powering my core logical approach, my primary target is to integrate into a production-first team, optimize product lifecycle delivery, and consistently contribute to complex full-stack features.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;