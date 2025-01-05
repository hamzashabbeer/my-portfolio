"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { HiOutlineCode, HiOutlineLightBulb, HiOutlineSparkles } from "react-icons/hi";

const highlights = [
  {
    icon: HiOutlineCode,
    title: "Full Stack Development",
    description: "Crafting end-to-end solutions with modern technologies and best practices",
  },
  {
    icon: HiOutlineLightBulb,
    title: "Problem Solving",
    description: "Turning complex challenges into elegant and efficient solutions",
  },
  {
    icon: HiOutlineSparkles,
    title: "UI/UX Design",
    description: "Creating intuitive and visually appealing user experiences",
  },
];

export function About() {
  return (
    <section className="relative py-20 overflow-hidden" id="about">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              Me
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Passionate about creating innovative digital solutions and delivering exceptional user experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Decorative Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-2xl animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/[0.05] to-white/[0.01] backdrop-blur-xl rounded-3xl border border-white/[0.05] shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] overflow-hidden group">
                <Image
                  src="/images/profile.png"
                  alt="About Me"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>

              {/* Experience Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="absolute top-4 -right-4 bg-gradient-to-r from-white/[0.05] to-white/[0.01] backdrop-blur-xl px-4 py-2 rounded-full border border-white/[0.05] shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] hover:shadow-[0_8px_32px_0_rgba(147,51,234,0.2)] transition-all duration-300 hover:scale-105"
              >
                <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                  2+ Years Experience
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Text & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Bio */}
            <div className="bg-gradient-to-r from-white/[0.05] to-white/[0.01] backdrop-blur-xl p-6 rounded-2xl border border-white/[0.05] shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] hover:shadow-[0_8px_32px_0_rgba(147,51,234,0.2)] transition-all duration-300 space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Hi there! I'm Hamza Shabbeer, a passionate Full Stack Developer and UI/UX Designer based in Pakistan. I specialize in creating modern web applications that combine beautiful design with efficient functionality.
              </p>
              <p className="text-gray-400">
                With expertise in both frontend and backend development, I enjoy bringing ideas to life through clean code and intuitive user experiences.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-3 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-gradient-to-r from-white/[0.05] to-white/[0.01] backdrop-blur-xl p-4 rounded-xl border border-white/[0.05] shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] hover:shadow-[0_8px_32px_0_rgba(147,51,234,0.2)] transition-all duration-300 hover:scale-105"
                >
                  <div className="flex flex-col items-center text-center gap-2">
                    <span className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.05] group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6 text-purple-400 group-hover:text-purple-300" />
                    </span>
                    <h3 className="text-base font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 group-hover:from-purple-300 group-hover:to-blue-300">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-400 group-hover:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex justify-center sm:justify-start"
            >
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-white/[0.05] to-white/[0.01] backdrop-blur-xl px-6 py-3 rounded-full border border-white/[0.05] shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] hover:shadow-[0_8px_32px_0_rgba(147,51,234,0.2)] transition-all duration-300 hover:scale-105"
              >
                <span className="text-gray-300 group-hover:text-white">View Resume</span>
                <BsArrowRight className="text-gray-300 group-hover:text-white group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 