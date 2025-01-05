"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowRight } from "react-icons/bs";
import { HiOutlineExternalLink } from "react-icons/hi";

const projects = [
  {
    title: "Modern Portfolio",
    description: "A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS featuring glass morphism and smooth animations.",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=1470&auto=format&fit=crop",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/hamzashabbeer/my-portfolio",
    demo: "https://hamzashabbeer.vercel.app",
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce platform with user authentication, product management, and payment integration.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1470&auto=format&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/hamzashabbeer/ecommerce",
    demo: "https://ecommerce-demo.vercel.app",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1472&auto=format&fit=crop",
    tags: ["React", "Firebase", "Material UI", "Redux"],
    github: "https://github.com/hamzashabbeer/taskapp",
    demo: "https://taskapp-demo.vercel.app",
  },
];

export function Projects() {
  return (
    <section className="relative py-20 overflow-hidden" id="projects">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Some of my recent works that showcase my skills and experience
          </p>
          {/* Cool Separator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative h-1 w-24 mx-auto mt-6"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 blur-sm" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500" />
            <div className="absolute -top-[2px] left-0 w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <div className="absolute -bottom-[2px] right-0 w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/50 to-blue-500/50 blur-md animate-pulse" />
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group bg-gradient-to-r from-white/[0.05] to-white/[0.01] backdrop-blur-xl rounded-2xl border border-white/[0.05] shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] hover:shadow-[0_8px_32px_0_rgba(147,51,234,0.2)] transition-all duration-300 hover:scale-[1.02] overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 group-hover:from-purple-300 group-hover:to-blue-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="group/tag relative bg-gradient-to-r from-purple-600/80 to-blue-600/80 backdrop-blur-xl px-4 py-1.5 rounded-full border border-white/20 text-white text-xs font-medium shadow-[0_4px_12px_0_rgba(147,51,234,0.3)] hover:shadow-[0_4px_12px_0_rgba(147,51,234,0.5)] transition-all duration-300 hover:scale-105"
                    >
                      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.2),rgba(255,255,255,0))]" />
                      <div className="absolute inset-0 rounded-full animate-pulse-slow bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
                      <span className="relative group-hover/tag:text-transparent group-hover/tag:bg-clip-text group-hover/tag:bg-gradient-to-r group-hover/tag:from-purple-200 group-hover/tag:to-blue-200">
                        {tag}
                      </span>
                      <div className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-sm opacity-0 group-hover/tag:opacity-100 transition-opacity duration-300" />
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-4">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-white/[0.05] to-white/[0.01] backdrop-blur-xl p-2 rounded-xl border border-white/[0.05] shadow-[0_4px_16px_0_rgba(0,0,0,0.1)] hover:shadow-[0_4px_16px_0_rgba(147,51,234,0.2)] transition-all duration-300 hover:scale-110 group/link"
                  >
                    <BsGithub className="w-5 h-5 group-hover/link:text-purple-400" />
                  </Link>
                  <Link
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-white/[0.05] to-white/[0.01] backdrop-blur-xl p-2 rounded-xl border border-white/[0.05] shadow-[0_4px_16px_0_rgba(0,0,0,0.1)] hover:shadow-[0_4px_16px_0_rgba(147,51,234,0.2)] transition-all duration-300 hover:scale-110 group/link"
                  >
                    <HiOutlineExternalLink className="w-5 h-5 group-hover/link:text-purple-400" />
                  </Link>
                  <Link
                    href={`#project-${index}`}
                    className="ml-auto flex items-center gap-1 text-sm text-gray-400 group-hover:text-white transition-colors"
                  >
                    View Details
                    <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 