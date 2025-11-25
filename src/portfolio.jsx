import React, { useEffect, useState } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiExpress } from "react-icons/si";


export default function App() {
  const [activeSection, setActiveSection] = useState("about");
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("prefers-dark");
      if (saved) return saved === "true";
      return (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
    }
    return false;
  });

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("prefers-dark", dark ? "true" : "false");
  }, [dark]);

  return (
    <div className="min-h-screen font-inter bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 container mx-auto px-6 py-2 flex items-center justify-between">
        <div className="text-2xl font-semibold">Ramesh M.</div>

        <nav className="hidden md:flex gap-8 items-center text-gray-700 dark:text-gray-300">
          <a href="#about" className={activeSection === "about" ? "font-bold underline" : "hover:underline"}>About</a>
          <a href="#skills" className={activeSection === "skills" ? "font-bold underline" : "hover:underline"}>Skills</a>
          <a href="#projects" className={activeSection === "projects" ? "font-bold underline" : "hover:underline"}>Projects</a>
          <a href="#contact" className={activeSection === "contact" ? "font-bold underline" : "hover:underline"}>Contact</a>
        </nav>

        <button
          onClick={() => setDark((d) => !d)}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
        >
          <span className="text-xl">{dark ? "🌞" : "🌙"}</span>
        </button>
      </header>

      {/* HERO */}
      <main className="container mx-auto px-6 md:px-20 lg:px-32 py-16 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 flex justify-center md:justify-start">
          <div className="relative w-60 h-60 md:w-72 md:h-72">
            <div className="absolute inset-0 z-0 flex items-center justify-center">
              <div className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-gray-300 dark:bg-gray-700 opacity-40 animate-pulse"></div>
            </div>

            <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-gray-100 dark:ring-gray-800">
              <img
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=900&q=80"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex-1 text-center md:text-left">
          <p className="text-sm text-gray-500 dark:text-gray-400">Hello, I'm</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">Ramesh Muthu</h1>
          <p className="mt-2 text-xl text-gray-600 dark:text-gray-300">Fullstack (MERN) Developer</p>

          <div className="mt-6 flex items-center gap-4 justify-center md:justify-start">
            <a href="/Ramesh_Muthu_CV.pdf" download className="px-5 py-2 border rounded-full text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition">Download CV</a>
            <a href="#contact" className="px-5 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black text-sm">Contact Info</a>
          </div>

          <div className="mt-6 flex items-center gap-4 justify-center md:justify-start">
            <a href="https://www.linkedin.com/in/rameshmuthu-dev/" className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full"><FaReact className="w-7 h-7 text-cyan-400" /></a>
            <a href="https://github.com/rameshmuthu-dev" className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full"><FaGitAlt className="w-7 h-7 text-red-500" /></a>
          </div>
        </div>
      </main>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-24 container mx-auto px-6 md:px-20 lg:px-32 py-12">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* LEFT SIDE IMAGE WITH BLACK BG */}
          <div className="flex-1">
            <div className="w-full h-64 md:h-80 bg-black rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=900&q=80"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm <span className="font-semibold text-black dark:text-white">Ramesh Muthu</span>, a passionate
              <span className="font-semibold"> MERN Stack Developer</span> and fresher with strong knowledge in
              building responsive websites, interactive UIs, and full‑stack applications.
            </p>

            <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">
              I love creating clean, modern user interfaces and writing maintainable, optimized code. I'm continuously
              learning new technologies and improving my skills to become a strong software engineer.
            </p>

            <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">
              My goal is to join a good company, contribute to real‑world projects, and grow as a developer. I’m excited
              to take on new challenges and opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="scroll-mt-24 container mx-auto px-6 md:px-20 lg:px-32 py-12">
        <div className="text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">My Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Skills</h2>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-4">Frontend Development</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-4"><FaHtml5 className="w-7 h-7 text-orange-600" /> HTML</li>
              <li className="flex items-center gap-4"><FaCss3Alt className="w-7 h-7 text-blue-600" /> CSS</li>
              <li className="flex items-center gap-4"><FaJs className="w-7 h-7 text-yellow-500" /> JavaScript</li>
              <li className="flex items-center gap-4"><FaReact className="w-7 h-7 text-cyan-400" /> React</li>
            </ul>
          </div>

          <div className="border rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-4">Backend & Tools</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-4"><FaNodeJs className="w-7 h-7 text-green-600" /> Node.js</li>
              <li className="flex items-center gap-4"><SiExpress className="w-7 h-7 text-gray-500" /> Express</li>
              <li className="flex items-center gap-4"><FaGitAlt className="w-7 h-7 text-red-500" /> Git</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="scroll-mt-24 container mx-auto px-6 md:px-20 lg:px-32 py-12">
        <div className="text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">Browse My Recent</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Projects</h2>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border rounded-2xl p-6 shadow-sm dark:border-gray-700 flex flex-col h-full">
            <div className="w-full h-40 bg-gray-200 dark:bg-gray-700 rounded-xl mb-4"></div>
            <h3 className="text-xl font-semibold">Mobile Mania Store</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 ">Full MERN E-commerce with JWT, OTP auth, Redux Toolkit, Stripe payments.</p>
            <div className="flex justify-between gap-3 mt-4">
              <a href="https://github.com/rameshmuthu-dev/mobilemania-mern-ecommerce" className="px-4 py-2 rounded-full border text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition">GitHub</a>
              <a href="https://mobile-mania-store.netlify.app/" className="px-4 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black text-sm">Live Demo</a>
            </div>
          </div>

          <div className="border rounded-2xl p-6 shadow-sm dark:border-gray-700 flex flex-col h-full">
            <div className="w-full h-40 bg-gray-200 dark:bg-gray-700 rounded-xl mb-4"></div>
            <h3 className="text-xl font-semibold">Task Management App</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">MERN CRUD app with JWT auth and responsive Tailwind UI.</p>
            <div className="flex justify-between gap-3 mt-4">
              <a href="https://github.com/rameshmuthu-dev" className="px-4 py-2 rounded-full border text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition">GitHub</a>
              <a href="https://taskmanager-rm.netlify.app/" className="px-4 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black text-sm">Live Demo</a>
            </div>
          </div>

          <div className="border rounded-2xl p-6 shadow-sm dark:border-gray-700 flex flex-col h-full">
            <div className="w-full h-40 bg-gray-200 dark:bg-gray-700 rounded-xl mb-4"></div>
            <h3 className="text-xl font-semibold">E-Library Management System</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">React + Tailwind system for browsing, searching and filtering books.</p>
            <div className="flex justify-between gap-3 mt-4">
              <a href="https://github.com/rameshmuthu-dev/e-library-management-system" className="px-4 py-2 rounded-full border text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition">GitHub</a>
              <a href="https://rameshmuthu-dev.github.io/e-library-management-system/" className="px-4 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black text-sm">Live Demo</a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-24 container mx-auto px-6 md:px-16 lg:px-24 py-10">
        <div className="text-center mb-8">
          <p className="text-sm text-gray-500 dark:text-gray-400">Let's Talk</p>
          <h2 className="text-4xl font-bold mt-2">Get in Touch</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            I'd love to hear about your project. Let's work together!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* CONTACT CARDS */}
          <div className="col-span-1 space-y-4 h-full flex flex-col">
            <div className="p-5 rounded-2xl bg-white dark:bg-gray-800 shadow text-center hover:shadow-md transition flex flex-col h-full">
              <div className="text-3xl mb-2">📧</div>
              <h3 className="font-semibold text-lg">Email</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">rameshmuthudev@gmail.com</p>
              <a href="mailto:rameshmuthudev@gmail.com" className="text-sm mt-1 inline-block text-blue-500 hover:underline">Write me →</a>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-gray-800 shadow text-center hover:shadow-md transition flex flex-col h-full">
              <div className="text-3xl mb-2">💬</div>
              <h3 className="font-semibold text-lg">WhatsApp</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">+91 00000 00000</p>
              <a href="#" className="text-sm mt-1 inline-block text-blue-500 hover:underline">Chat now →</a>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-gray-800 shadow text-center hover:shadow-md transition flex flex-col h-full">
              <div className="text-3xl mb-2">🔗</div>
              <h3 className="font-semibold text-lg">LinkedIn</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Ramesh Muthu</p>
              <a href="https://www.linkedin.com/in/rameshmuthu-dev/" className="text-sm mt-1 inline-block text-blue-500 hover:underline">Visit profile →</a>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="col-span-2 h-full flex flex-col justify-between">
            <form className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md space-y-4">
              <div>
                <label className="block mb-1 text-sm font-medium">Your Name</label>
                <input type="text" placeholder="Enter your name" className="w-full p-3 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium">Email Address</label>
                <input type="email" placeholder="Enter your email" className="w-full p-3 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium">Message</label>
                <textarea rows="4" placeholder="Write your message..." className="w-full p-3 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
              </div>

              <button type="submit" className="w-full py-3 bg-black text-white dark:bg-white dark:text-black font-medium rounded-lg hover:opacity-90 transition flex items-center justify-center gap-2">
                Send Message <span>📨</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-2 text-center text-gray-700 dark:text-gray-300 mt-16">
        <p className="text-sm">© 2025 Ramesh Muthu. All rights reserved.</p>
        <p className="text-xs mt-2">Designed & Built with ❤️ using React & Tailwind CSS</p>
      </footer>
    </div>
  );
}
