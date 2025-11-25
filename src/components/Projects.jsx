import React from "react";
import p1 from "../assets/ecommerce.png";
 import p2 from "../assets/Task.png";
 import p3 from "../assets/elibrary.png"

const Projects = () => {
  const projectData = [
    {
      title: "Mobile Mania Store",
      desc: "Full MERN E-commerce with JWT, OTP auth, Redux Toolkit, Stripe payments.",
      github: "https://github.com/rameshmuthu-dev/mobilemania-mern-ecommerce",
      live: "https://mobile-mania-store.netlify.app/",
       img: p1,
    },
    {
      title: "Task Management App",
      desc: "MERN CRUD app with JWT auth and responsive Tailwind UI.",
      github: "https://github.com/rameshmuthu-dev",
      live: "https://taskmanager-rm.netlify.app/",
      img: p2,
    },
    {
      title: "E-Library Management System",
      desc: "React + Tailwind system for browsing, searching and filtering books.",
      github:
        "https://github.com/rameshmuthu-dev/e-library-management-system",
      live: "https://rameshmuthu-dev.github.io/e-library-management-system/",
       img: p3,
    },
  ];

  return (
    <section
      id="projects"
      className="scroll-mt-24 container mx-auto px-6 md:px-20 lg:px-32 py-16"
    >
      <div className="text-center">
        <p className="text-sm text-gray-500">Browse My Recent</p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">Projects</h2>
      </div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {projectData.map((project, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
          >
            {/* Project Image */}
            <div className="w-full h-44 rounded-xl mb-4 overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{project.desc}</p>

            <div className="flex justify-between items-center gap-3 mt-5">
              <a
                href={project.github}
                className="px-4 py-2 rounded-full border text-sm hover:bg-gray-100 transition"
              >
                GitHub
              </a>

              <a
                href={project.live}
                className="px-4 py-2 rounded-full bg-black text-white text-sm hover:opacity-80 transition"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
