"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowRight, BsChevronLeft, BsChevronRight } from "react-icons/bs";
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + projects.length) % projects.length);
  };

  return (
    <section className="relative py-20 overflow-hidden" id="projects">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl animate-pulse" />
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

        {/* Projects Carousel */}
        <div className="relative h-[600px] w-full max-w-4xl mx-auto">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full"
            >
              <div className="relative h-[600px] w-full bg-gradient-to-r from-white/[0.05] to-white/[0.01] backdrop-blur-xl rounded-3xl border border-white/[0.05] shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] overflow-hidden group">
                {/* Project Image */}
                <div className="relative h-[300px]">
                  <Image
                    src={projects[currentIndex].image}
                    alt={projects[currentIndex].title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                  
                  {/* Project Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 group-hover:from-purple-300 group-hover:to-blue-300">
                      {projects[currentIndex].title}
                    </h3>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8 space-y-6">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {projects[currentIndex].description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-3">
                    {projects[currentIndex].tags.map((tag) => (
                      <span
                        key={tag}
                        className="group/tag relative bg-gradient-to-r from-purple-600/80 to-blue-600/80 backdrop-blur-xl px-4 py-2 rounded-full border border-white/20 text-white text-sm font-medium shadow-[0_4px_12px_0_rgba(147,51,234,0.3)] hover:shadow-[0_4px_12px_0_rgba(147,51,234,0.5)] transition-all duration-300 hover:scale-105"
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
                      href={projects[currentIndex].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-white/[0.05] to-white/[0.01] backdrop-blur-xl p-3 rounded-xl border border-white/[0.05] shadow-[0_4px_16px_0_rgba(0,0,0,0.1)] hover:shadow-[0_4px_16px_0_rgba(147,51,234,0.2)] transition-all duration-300 hover:scale-110 group/link"
                    >
                      <BsGithub className="w-6 h-6 group-hover/link:text-purple-400" />
                    </Link>
                    <Link
                      href={projects[currentIndex].demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-white/[0.05] to-white/[0.01] backdrop-blur-xl p-3 rounded-xl border border-white/[0.05] shadow-[0_4px_16px_0_rgba(0,0,0,0.1)] hover:shadow-[0_4px_16px_0_rgba(147,51,234,0.2)] transition-all duration-300 hover:scale-110 group/link"
                    >
                      <HiOutlineExternalLink className="w-6 h-6 group-hover/link:text-purple-400" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute -left-12 top-1/2 -translate-y-1/2">
            <button
              onClick={() => paginate(-1)}
              className="group relative p-3 rounded-full bg-gradient-to-r from-white/[0.05] to-white/[0.01] backdrop-blur-xl border border-white/[0.05] shadow-[0_4px_16px_0_rgba(0,0,0,0.1)] hover:shadow-[0_4px_16px_0_rgba(147,51,234,0.2)] transition-all duration-300 hover:scale-110"
            >
              <BsChevronLeft className="w-6 h-6 text-gray-400 group-hover:text-purple-400" />
            </button>
          </div>
          <div className="absolute -right-12 top-1/2 -translate-y-1/2">
            <button
              onClick={() => paginate(1)}
              className="group relative p-3 rounded-full bg-gradient-to-r from-white/[0.05] to-white/[0.01] backdrop-blur-xl border border-white/[0.05] shadow-[0_4px_16px_0_rgba(0,0,0,0.1)] hover:shadow-[0_4px_16px_0_rgba(147,51,234,0.2)] transition-all duration-300 hover:scale-110"
            >
              <BsChevronRight className="w-6 h-6 text-gray-400 group-hover:text-purple-400" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-gradient-to-r from-purple-500 to-blue-500"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 