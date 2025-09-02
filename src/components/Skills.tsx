import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    name: "🤖 Agentic AI",
    desc: "Currently mastering OpenAI Agents SDK with real-world projects in automation, AI workflows, and intelligent assistants.",
  },
  {
    name: "⚡ Next.js",
    desc: "Skilled in server-side rendering (SSR), static site generation (SSG), and building SEO-friendly full-stack apps.",
  },
  {
    name: "⚛️ React.js",
    desc: "3+ years of hands-on experience building dynamic and scalable web apps. Expert in hooks, state management, and performance optimization.",
  },
  {
    name: "💻 JavaScript (ES6+)",
    desc: "Strong command over modern JavaScript concepts, async programming, APIs, and DOM manipulation.",
  },
  {
    name: "🌐 HTML5 & CSS3",
    desc: "Solid foundation in semantic HTML and modern CSS, enabling clean, accessible, and well-structured designs.",
  },
  {
    name: "🎨 Tailwind CSS",
    desc: "Pro at crafting modern, responsive, and pixel-perfect UIs with Tailwind and utility-first styling.",
  },
];

const Skills = () => {
  return (
    <div id="skills" className="container px-4 sm:px-6 md:px-8 pt-24">
      <h2
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 text-center mb-12"
        data-aos="fade-left"
      >
        ⚡ Skills
      </h2>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"
        data-aos="fade-left"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="p-4 sm:p-6 rounded-2xl bg-gradient-to-tr from-gray-800 to-gray-900 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden w-full"
          >
            {/* Glow effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition duration-500"></div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
              {skill.name}
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {skill.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
