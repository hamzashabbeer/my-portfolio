"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { BsLinkedin, BsQuote, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    content: "I had the pleasure of working with Hamza on several web development projects. His expertise in React and Next.js is outstanding, and he consistently delivers clean, efficient code. His ability to solve complex problems and attention to detail make him a valuable asset to any development team.",
    author: "Alex Thompson",
    position: "Senior Frontend Developer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    linkedin: "https://linkedin.com/in/alex-thompson",
  },
  {
    id: 2,
    content: "Hamza demonstrated exceptional skills in both frontend and backend development. His work on our e-commerce platform showcased his ability to create seamless user experiences while maintaining robust server-side functionality. A true full-stack developer who goes above and beyond.",
    author: "David Park",
    position: "Full Stack Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
    linkedin: "https://linkedin.com/in/david-park",
  },
  {
    id: 3,
    content: "Working with Hamza was a fantastic experience. His proficiency in modern web technologies and commitment to best practices resulted in a portfolio website that exceeded our expectations. His communication skills and dedication to project success are truly commendable.",
    author: "Jessica Chen",
    position: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
    linkedin: "https://linkedin.com/in/jessica-chen",
  },
];

export function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.8,
      filter: 'blur(8px)',
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.8,
      filter: 'blur(8px)',
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    }),
  };

  const paginate = (newDirection: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      result.push({ ...testimonials[index], position: i });
    }
    return result;
  };

  return (
    <section className="py-32 relative -mt-32 -mb-32 z-0" id="testimonials">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-background via-background to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background via-background to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),rgba(255,255,255,0))] animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={containerRef}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              Testimonials
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            What fellow developers and clients say about my work
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

        {/* Testimonials Carousel */}
        <div className="relative max-w-7xl mx-auto">
          <div className="relative h-[300px] overflow-hidden">
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 grid grid-cols-3 gap-6"
              >
                {getVisibleTestimonials().map((testimonial, index) => (
                  <motion.div
                    key={`${testimonial.id}-${index}`}
                    initial={false}
                    animate={{ 
                      x: 0,
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 0.5, delay: index * 0.1 }
                    }}
                    className="group relative bg-gradient-to-r from-white/[0.05] to-white/[0.01] backdrop-blur-xl p-6 rounded-2xl border border-white/[0.05] shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] hover:shadow-[0_8px_32px_0_rgba(147,51,234,0.2)] transition-all duration-500 overflow-hidden hover:scale-[1.02]"
                  >
                    {/* Background Effects */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))] animate-pulse-slow" />
                    
                    {/* Quote Icon */}
                    <div className="absolute top-6 right-6 text-primary/20">
                      <FaQuoteRight className="w-12 h-12" />
                    </div>

                    {/* Content */}
                    <div className="relative space-y-4 flex flex-col h-full">
                      <p className="text-gray-300 leading-relaxed text-sm flex-grow line-clamp-4 pt-4">
                        "{testimonial.content}"
                      </p>

                      {/* Author Info */}
                      <div className="flex items-center gap-3 mt-auto">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-purple-500/50 transition-colors">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.author}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="text-white font-medium text-sm">{testimonial.author}</h4>
                          <p className="text-gray-400 text-xs">{testimonial.position}</p>
                        </div>
                        <a
                          href={testimonial.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-auto group/link relative w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden bg-gradient-to-r from-white/[0.05] to-white/[0.01] backdrop-blur-xl border border-white/[0.05] hover:shadow-[0_8px_32px_0_rgba(147,51,234,0.2)] transition-all duration-300"
                        >
                          <div className="absolute inset-0 bg-[conic-gradient(from_var(--shimmer-angle),theme(colors.purple.600)_0%,theme(colors.blue.600)_10%,theme(colors.purple.600)_20%)] animate-[shimmer_2.5s_linear_infinite] opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" style={{ '--shimmer-angle': '0deg' } as React.CSSProperties} />
                          <div className="absolute inset-[1px] rounded-lg bg-black/50 backdrop-blur-sm group-hover/link:bg-black/30 transition-colors" />
                          <BsLinkedin className="w-3.5 h-3.5 text-white/80 group-hover/link:text-white relative z-10" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="absolute -left-4 top-1/2 -translate-y-1/2">
            <button
              onClick={() => paginate(-1)}
              className="group relative w-12 h-12 rounded-full flex items-center justify-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-[conic-gradient(from_var(--shimmer-angle),theme(colors.purple.600)_0%,theme(colors.blue.600)_10%,theme(colors.purple.600)_20%)] animate-[shimmer_2.5s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ '--shimmer-angle': '0deg' } as React.CSSProperties} />
              <div className="absolute inset-[1px] rounded-full bg-black/50 backdrop-blur-sm group-hover:bg-black/30 transition-colors" />
              <BsChevronLeft className="w-6 h-6 text-white/80 group-hover:text-white relative z-10" />
            </button>
          </div>
          <div className="absolute -right-4 top-1/2 -translate-y-1/2">
            <button
              onClick={() => paginate(1)}
              className="group relative w-12 h-12 rounded-full flex items-center justify-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-[conic-gradient(from_var(--shimmer-angle),theme(colors.purple.600)_0%,theme(colors.blue.600)_10%,theme(colors.purple.600)_20%)] animate-[shimmer_2.5s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ '--shimmer-angle': '0deg' } as React.CSSProperties} />
              <div className="absolute inset-[1px] rounded-full bg-black/50 backdrop-blur-sm group-hover:bg-black/30 transition-colors" />
              <BsChevronRight className="w-6 h-6 text-white/80 group-hover:text-white relative z-10" />
            </button>
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
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
    </section>
  );
} 