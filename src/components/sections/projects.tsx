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
      x: direction > 0 ? '100%' : '-100%',
      y: 0,
      rotate: direction > 0 ? 15 : -15,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      y: 0,
      rotate: 0,
      opacity: 1,
      scale: 1,
      zIndex: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      y: 0,
      rotate: direction < 0 ? 15 : -15,
      opacity: 0,
      scale: 0.9,
      zIndex: 0,
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
    <section className="relative py-20 overflow-hidden bg-[#040d21]" id="projects">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Title */}
        <div className="relative mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.1, y: 0 }}
            viewport={{ once: true }}
            className="absolute -top-20 left-0 text-8xl font-bold text-white/5"
          >
            Projects
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Taking digital{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                experiences
              </span>
            </h2>
            <h2 className="text-5xl md:text-6xl font-bold text-white/90">
              to new heights
            </h2>
            <p className="text-gray-400 mt-6 max-w-2xl">
              Our expertise and experience mean we can deliver first-class websites for virtually any sector.
            </p>
          </motion.div>
        </div>

        {/* Projects Carousel */}
        <div className="relative h-[600px] w-full max-w-6xl mx-auto perspective-2000">
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
                rotate: { type: "spring", stiffness: 300, damping: 30 },
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
              className="absolute w-full transform-gpu will-change-transform"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="relative h-[500px] w-full bg-gradient-to-r from-[#1a1f35] to-[#212842] rounded-3xl shadow-2xl overflow-hidden group transform-gpu hover:scale-[1.02] transition-transform duration-500">
                <div className="absolute inset-0 bg-[linear-gradient(40deg,transparent_40%,rgba(255,255,255,0.1)_45%,rgba(255,255,255,0.1)_55%,transparent_60%)] pointer-events-none"></div>
                
                {/* Project Image */}
                <div className="relative h-[300px] transform-gpu rotate-[-5deg] scale-110 -translate-y-4">
                  <Image
                    src={projects[currentIndex].image}
                    alt={projects[currentIndex].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f35]/90 via-[#1a1f35]/50 to-transparent" />
                </div>

                {/* Project Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[#1a1f35] to-transparent">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {projects[currentIndex].title}
                  </h3>
                  
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {projects[currentIndex].description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {projects[currentIndex].tags.map((tag) => (
                      <span
                        key={tag}
                        className="group/tag relative px-4 py-2 rounded-full text-sm font-medium text-white"
                        style={{
                          background: 'linear-gradient(90deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                          backdropFilter: 'blur(10px)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    <Link
                      href={projects[currentIndex].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                    >
                      <BsGithub className="w-5 h-5" />
                      <span>View Code</span>
                    </Link>
                    <Link
                      href={projects[currentIndex].demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                    >
                      <HiOutlineExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 flex items-center gap-4">
            <button
              onClick={() => paginate(-1)}
              className="w-12 h-12 rounded-full flex items-center justify-center text-white/50 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
            >
              <BsChevronLeft className="w-6 h-6" />
            </button>
          </div>
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 flex items-center gap-4">
            <button
              onClick={() => paginate(1)}
              className="w-12 h-12 rounded-full flex items-center justify-center text-white/50 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
            >
              <BsChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-gradient-to-r from-purple-500 to-blue-500"
                    : "w-4 bg-white/20 hover:bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .perspective-2000 {
          perspective: 2000px;
        }
      `}</style>
    </section>
  );
} 