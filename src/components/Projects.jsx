import React from "react";
import p1 from "../assets/pic2speak.png"; // First: Pic2Speak
import p2 from "../assets/quizmastery.png"; // Second: Quiz Mastery
import p3 from "../assets/ecommerce.png"; // Third: Mobile Mania Store

const Projects = () => {
  const projectData = [
    {
      title: "Pic2Speak (English Learning App)",
      desc: "MERN application featuring a structured data hierarchy learning flow, an integrated AI helpcenter bot, and automated CI/CD pipelines.",
      github: "https://github.com/rameshmuthu-dev/pic2speak-userend",
      live: "https://pic2speak.vercel.app/",
      img: p1,
    },
    {
      title: "Quiz Mastery (LMS)",
      desc: "Collaborative learning platform with role-based dashboard control (Admin/Learner/Mentor) and secure client-side authentication.",
      github: "https://github.com/Arun-DevCode/Entri-App-Client",
      live: "https://quizmastery-flame.vercel.app/",
      img: p2,
    },
    {
      title: "Mobile Mania Store",
      desc: "Full MERN E-commerce platform with JWT auth, complex Stripe integration, and an analytics admin dashboard.",
      github: "https://github.com/rameshmuthu-dev/mobilemania-mern-ecommerce",
      live: "https://mobile-mania-store.netlify.app/",
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
            className="bg-white rounded-2xl p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer flex flex-col justify-between"
          >
            {/* Content Wrapper (Image + Text) */}
            <div>
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
            </div>

            {/* Actions Wrapper (Buttons - Always aligned at the bottom) */}
            <div className="flex justify-between items-center gap-3 mt-5">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full border text-sm hover:bg-gray-100 transition"
              >
                GitHub
              </a>

              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
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