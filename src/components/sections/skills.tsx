"use client";

import { motion } from "framer-motion";

const skillsData = {
  frontend: [
    "React.js",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "HTML/CSS",
    "JavaScript",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "REST APIs",
    "GraphQL",
  ],
};

export function Skills() {
  return (
    <section className="relative py-20 overflow-hidden" id="skills">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              Tech Stack
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Frontend Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group bg-gradient-to-r from-white/[0.05] to-white/[0.01] backdrop-blur-xl p-6 rounded-2xl border border-white/[0.05] shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] hover:shadow-[0_8px_32px_0_rgba(147,51,234,0.2)] transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                💻
              </span>
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 group-hover:from-purple-300 group-hover:to-blue-300">
                Frontend Development
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {skillsData.frontend.map((skill, index) => (
                <div
                  key={skill}
                  className="bg-white/[0.02] backdrop-blur-lg px-3 py-2 rounded-lg border border-white/[0.05] text-gray-300 text-sm group-hover:text-white transition-colors"
                >
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Backend Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group bg-gradient-to-r from-white/[0.05] to-white/[0.01] backdrop-blur-xl p-6 rounded-2xl border border-white/[0.05] shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] hover:shadow-[0_8px_32px_0_rgba(147,51,234,0.2)] transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                ⚡
              </span>
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 group-hover:from-purple-300 group-hover:to-blue-300">
                Backend Development
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {skillsData.backend.map((skill, index) => (
                <div
                  key={skill}
                  className="bg-white/[0.02] backdrop-blur-lg px-3 py-2 rounded-lg border border-white/[0.05] text-gray-300 text-sm group-hover:text-white transition-colors"
                >
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 