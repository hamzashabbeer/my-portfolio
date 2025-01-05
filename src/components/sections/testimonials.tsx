"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { BsLinkedin, BsQuote } from "react-icons/bs";

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
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section className="py-20 relative" id="testimonials">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)] animate-[grid_20s_linear_infinite]" />
        
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse-slow" />
        
        {/* Additional Decorative Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))] animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-4 relative" ref={containerRef}>
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

        {/* Testimonials Grid */}
        <motion.div 
          style={{ y, opacity }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-gradient-to-r from-white/[0.05] to-white/[0.01] backdrop-blur-xl p-6 rounded-2xl border border-white/[0.05] shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] hover:shadow-[0_8px_32px_0_rgba(147,51,234,0.2)] transition-all duration-500 h-full overflow-hidden transform hover:scale-[1.02] hover:-rotate-1">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))] animate-pulse-slow" />
                
                {/* Quote Icon */}
                <div className="absolute -top-2 -left-2 text-purple-500/20 transform -scale-x-100">
                  <BsQuote className="w-16 h-16" />
                </div>

                {/* Content */}
                <div className="relative space-y-4">
                  <p className="text-gray-300 leading-relaxed mb-6 pt-4">
                    "{testimonial.content}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-purple-500/50 transition-colors">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">{testimonial.author}</h4>
                      <p className="text-sm text-gray-400">{testimonial.position}</p>
                    </div>
                    <a
                      href={testimonial.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto group/link relative w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden bg-gradient-to-r from-white/[0.05] to-white/[0.01] backdrop-blur-xl border border-white/[0.05] hover:shadow-[0_8px_32px_0_rgba(147,51,234,0.2)] transition-all duration-300"
                    >
                      <div className="absolute inset-0 bg-[conic-gradient(from_var(--shimmer-angle),theme(colors.purple.600)_0%,theme(colors.blue.600)_10%,theme(colors.purple.600)_20%)] animate-[shimmer_2.5s_linear_infinite] opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" style={{ '--shimmer-angle': '0deg' } as React.CSSProperties} />
                      <div className="absolute inset-[1px] rounded-xl bg-black/50 backdrop-blur-sm group-hover/link:bg-black/30 transition-colors" />
                      <BsLinkedin className="w-4 h-4 text-white/80 group-hover/link:text-white relative z-10" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 