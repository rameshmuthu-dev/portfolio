import React from "react";
import aboutimg from "../assets/Ramesh2.jpeg"

const About = () => {
  return (
    <section id="about" className="scroll-mt-24  container mx-auto px-6 md:px-20 lg:px-32 py-12">
      <div className="flex flex-col md:flex-row items-center gap-10">

        {/* LEFT SIDE IMAGE WITH BLACK BG */}
        <div className="flex-1">
          <div className="w-full h-64 md:h-80 bg-black rounded-2xl overflow-hidden shadow-lg">
            <img
              src={aboutimg}
              className="w-full h-full object-cover opacity-80"
              alt="Profile"
            />
          </div>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            I'm <span className="font-semibold text-black dark:text-white">Ramesh Muthu</span>,
            a passionate <span className="font-semibold">MERN Stack Developer</span> and fresher
            with strong knowledge in building responsive websites, interactive UIs,
            and full-stack applications.
          </p>

          <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">
            I love creating clean, modern user interfaces and writing maintainable,
            optimized code. I'm continuously learning new technologies and improving
            my skills to become a strong software engineer.
          </p>

          <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">
            My goal is to join a good company, contribute to real-world projects,
            and grow as a developer. I’m excited to take on new challenges and
            opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
