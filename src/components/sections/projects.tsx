"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Ecommerce Store",
    description: "A modern e-commerce platform built with Next.js 13, featuring a responsive design, product catalog, shopping cart, and secure checkout process.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1000&auto=format&fit=crop",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "MySQL"],
    githubUrl: "https://github.com/hamzashabbeer/ecommerce-store",
    liveUrl: "https://ecommerce-store-demo.vercel.app",
  },
  {
    title: "Admin Dashboard",
    description: "A comprehensive admin dashboard for managing e-commerce operations, including product management, order tracking, and analytics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    technologies: ["Next.js", "Shadcn UI", "Clerk Auth", "Prisma", "MySQL"],
    githubUrl: "https://github.com/hamzashabbeer/admin-dashboard",
    liveUrl: "https://admin-dashboard-demo.vercel.app",
  },
  {
    title: "Portfolio Website",
    description: "A modern portfolio website showcasing my work and skills, built with Next.js and featuring smooth animations and dark mode support.",
    image: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=1000&auto=format&fit=crop",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    githubUrl: "https://github.com/hamzashabbeer/portfolio",
    liveUrl: "https://hamzashabbeer.vercel.app",
  },
  {
    title: "Discord Clone",
    description: "A real-time chat application inspired by Discord, featuring instant messaging, voice channels, and server management.",
    image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=1000&auto=format&fit=crop",
    technologies: ["Next.js", "Socket.io", "Prisma", "MySQL", "Tailwind"],
    githubUrl: "https://github.com/hamzashabbeer/discord-clone",
    liveUrl: "https://discord-clone-demo.vercel.app",
  },
  {
    title: "AI Companion",
    description: "An AI-powered chat companion built with OpenAI's GPT-3.5, featuring natural language processing and personalized responses.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
    technologies: ["Next.js", "OpenAI API", "Prisma", "Tailwind CSS"],
    githubUrl: "https://github.com/hamzashabbeer/ai-companion",
    liveUrl: "https://ai-companion-demo.vercel.app",
  },
  {
    title: "Netflix Clone",
    description: "A Netflix-inspired streaming platform with user authentication, profile management, and video playback capabilities.",
    image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=1000&auto=format&fit=crop",
    technologies: ["Next.js", "MongoDB", "Prisma", "Tailwind CSS"],
    githubUrl: "https://github.com/hamzashabbeer/netflix-clone",
    liveUrl: "https://netflix-clone-demo.vercel.app",
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">Featured Projects</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              A showcase of my recent full-stack development projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-card rounded-xl overflow-hidden border border-border/50 hover:border-primary/50 transition-colors"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-primary transition-colors"
                      aria-label={`View ${project.title} source code`}
                    >
                      <FaGithub className="w-6 h-6" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-primary transition-colors"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <FaExternalLinkAlt className="w-6 h-6" />
                    </a>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 