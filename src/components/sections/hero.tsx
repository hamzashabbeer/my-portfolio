"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const socialLinks = [
  {
    name: "GitHub",
    icon: BsGithub,
    href: "https://github.com/hamzashabbeer",
  },
  {
    name: "LinkedIn",
    icon: BsLinkedin,
    href: "https://linkedin.com/in/hamza-shabbeer",
  },
  {
    name: "Email",
    icon: HiOutlineMail,
    href: "mailto:hamzashabbeer@gmail.com",
  },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[#0A0118]">
        {/* Base Pattern */}
        <div className="absolute inset-0 pattern-grid opacity-30" />
        <div className="absolute inset-0 pattern-dots opacity-20" />
        <div className="absolute inset-0 pattern-circuit opacity-25" />
        <div className="absolute inset-0 pattern-noise mix-blend-overlay" />
        
        {/* Gradient Circles */}
        <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-purple-500/30 rounded-full filter blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/30 rounded-full filter blur-[120px] animate-pulse delay-300" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-500/20 rounded-full filter blur-[120px] animate-pulse delay-700" />
        
        {/* Animated Lines */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"
              style={{
                top: `${20 + i * 15}%`,
                left: 0,
                right: 0,
              }}
              animate={{
                x: [-1000, 1000],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Available Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-[#1A1443]/50 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-500/20"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
              </span>
              <span className="text-sm font-medium text-emerald-400">
                Available for new projects
              </span>
            </motion.div>

            {/* Main Content */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold"
              >
                Hi, I'm{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                  Hamza Shabbeer
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-gray-400 max-w-2xl"
              >
                A passionate{" "}
                <span className="text-purple-400">Full Stack Developer</span> &{" "}
                <span className="text-blue-400">UI/UX Designer</span> crafting
                innovative digital solutions
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="#contact"
                className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  Contact Me
                  <BsArrowRight className="ml-2" />
                </span>
              </Link>

              <Link
                href="#projects"
                className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF3D9A_0%,#FF9946_50%,#FF3D9A_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  View Projects
                  <BsArrowRight className="ml-2" />
                </span>
              </Link>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "2+", label: "Years Experience", icon: "💼" },
                { value: "10+", label: "Projects Complete", icon: "🚀" },
                { value: "15+", label: "Tech Stack", icon: "⚡" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="bg-[#1A1443]/50 backdrop-blur-sm p-4 rounded-xl border border-purple-500/20"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{stat.icon}</span>
                    <div>
                      <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                        {stat.value}
                      </div>
                      <p className="text-sm text-gray-400">{stat.label}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4"
            >
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1A1443]/50 p-3 rounded-lg hover:bg-purple-500/20 transition-all duration-300"
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-3xl animate-pulse" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-purple-500/20">
                <Image
                  src="/images/profile.png"
                  alt="Hamza Shabbeer"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating Tags */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute top-10 right-0 bg-[#1A1443]/80 backdrop-blur-md px-4 py-2 rounded-full border border-purple-500/20"
              >
                <span className="text-sm font-medium text-purple-400">Full Stack Dev</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-10 left-0 bg-[#1A1443]/80 backdrop-blur-md px-4 py-2 rounded-full border border-purple-500/20"
              >
                <span className="text-sm font-medium text-blue-400">UI/UX Designer</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 