"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { BsLinkedin, BsQuote } from "react-icons/bs";

const testimonials = [
  {
    id: 1,
    content: "Hamza is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are remarkable. Working with him was a great experience!",
    author: "Sarah Johnson",
    position: "Senior Product Manager at Microsoft",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
    linkedin: "https://linkedin.com/in/sarah-johnson",
  },
  {
    id: 2,
    content: "One of the most talented developers I've worked with. Hamza's ability to understand complex requirements and translate them into elegant solutions is impressive. His work on our project exceeded expectations!",
    author: "Michael Chen",
    position: "Tech Lead at Google",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
    linkedin: "https://linkedin.com/in/michael-chen",
  },
  {
    id: 3,
    content: "Hamza brings a perfect blend of technical expertise and creative thinking to every project. His commitment to delivering exceptional results and ability to meet deadlines make him a valuable asset to any team.",
    author: "Emily Rodriguez",
    position: "Engineering Manager at Amazon",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop",
    linkedin: "https://linkedin.com/in/emily-rodriguez",
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
    <section className="py-20 relative overflow-hidden" id="testimonials">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))] animate-pulse-slow" />
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)] animate-[grid_20s_linear_infinite]" />
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
            What people say about my work and collaboration
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
              <div className="relative bg-gradient-to-r from-white/[0.05] to-white/[0.01] backdrop-blur-xl p-6 rounded-2xl border border-white/[0.05] shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] hover:shadow-[0_8px_32px_0_rgba(147,51,234,0.2)] transition-all duration-500 h-full overflow-hidden transform hover:scale-[1.02]">
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
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/10">
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