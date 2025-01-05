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
              className="inline-flex bg-gradient-to-r from-emerald-600/90 to-teal-600/90 backdrop-blur-xl px-6 py-3 rounded-full border-2 border-white/20 shadow-[0_8px_32px_0_rgba(16,185,129,0.3)] hover:shadow-[0_8px_32px_0_rgba(16,185,129,0.5)] transition-all duration-300 hover:scale-105 group/badge"
            >
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_120%,rgba(16,185,129,0.3),rgba(255,255,255,0))]" />
              <div className="absolute inset-0 rounded-full animate-pulse-slow bg-[radial-gradient(circle_at_50%_120%,rgba(16,185,129,0.2),rgba(255,255,255,0))]" />
              <div className="relative flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                </span>
                <span className="relative text-sm font-medium text-white group-hover/badge:text-transparent group-hover/badge:bg-clip-text group-hover/badge:bg-gradient-to-r group-hover/badge:from-emerald-200 group-hover/badge:to-teal-200">
                  Available for new projects
              </span>
              </div>
              <div className="absolute -inset-[2px] rounded-full bg-gradient-to-r from-emerald-500/50 to-teal-500/50 blur-sm opacity-0 group-hover/badge:opacity-100 transition-opacity duration-300" />
            </motion.div>

            {/* Main Content */}
            <div className="space-y-6">
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

              {/* Cool Separator */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="relative h-1 w-24 mx-auto sm:mx-0"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 blur-sm" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500" />
                <div className="absolute -top-[2px] left-0 w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                <div className="absolute -bottom-[2px] right-0 w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/50 to-blue-500/50 blur-md animate-pulse" />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-gray-400 max-w-2xl"
              >
                I&apos;m a passionate{" "}
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
                className="group relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:scale-105 transition-transform duration-300"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-black/80 to-black/60 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-all duration-300 group-hover:bg-black/50">
                  Contact Me
                  <BsArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                href="#projects"
                className="group relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:scale-105 transition-transform duration-300"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF3D9A_0%,#FF9946_50%,#FF3D9A_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-black/80 to-black/60 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-all duration-300 group-hover:bg-black/50">
                View Projects
                  <BsArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
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
                  className="group bg-gradient-to-r from-white/[0.05] to-white/[0.01] backdrop-blur-xl p-4 rounded-2xl border border-white/[0.05] shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] hover:shadow-[0_8px_32px_0_rgba(147,51,234,0.2)] transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{stat.icon}</span>
                    <div>
                      <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 group-hover:from-purple-300 group-hover:to-blue-300">
                    {stat.value}
                      </div>
                      <p className="text-sm text-gray-400 group-hover:text-gray-300">{stat.label}</p>
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
                  className="bg-gradient-to-r from-white/[0.05] to-white/[0.01] backdrop-blur-xl p-3 rounded-xl border border-white/[0.05] shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] hover:shadow-[0_8px_32px_0_rgba(147,51,234,0.2)] transition-all duration-300 hover:scale-110 group"
                >
                  <link.icon className="w-5 h-5 group-hover:text-purple-400 transition-colors" />
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
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/[0.05] shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]">
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
                className="absolute top-10 right-0 bg-gradient-to-r from-purple-600/90 to-blue-600/90 backdrop-blur-xl px-6 py-3 rounded-full border-2 border-white/20 shadow-[0_8px_32px_0_rgba(147,51,234,0.3)] hover:shadow-[0_8px_32px_0_rgba(147,51,234,0.5)] transition-all duration-300 hover:scale-105 group/badge"
              >
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
                <div className="absolute inset-0 rounded-full animate-pulse-slow bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.2),rgba(255,255,255,0))]" />
                <span className="relative text-sm font-medium text-white group-hover/badge:text-transparent group-hover/badge:bg-clip-text group-hover/badge:bg-gradient-to-r group-hover/badge:from-purple-200 group-hover/badge:to-blue-200">
                  Full Stack Dev
                </span>
                <div className="absolute -inset-[2px] rounded-full bg-gradient-to-r from-purple-500/50 to-blue-500/50 blur-sm opacity-0 group-hover/badge:opacity-100 transition-opacity duration-300" />
              </motion.div>

                <motion.div
                initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-10 left-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90 backdrop-blur-xl px-6 py-3 rounded-full border-2 border-white/20 shadow-[0_8px_32px_0_rgba(147,51,234,0.3)] hover:shadow-[0_8px_32px_0_rgba(147,51,234,0.5)] transition-all duration-300 hover:scale-105 group/badge"
              >
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
                <div className="absolute inset-0 rounded-full animate-pulse-slow bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.2),rgba(255,255,255,0))]" />
                <span className="relative text-sm font-medium text-white group-hover/badge:text-transparent group-hover/badge:bg-clip-text group-hover/badge:bg-gradient-to-r group-hover/badge:from-blue-200 group-hover/badge:to-purple-200">
                  UI/UX Designer
                </span>
                <div className="absolute -inset-[2px] rounded-full bg-gradient-to-r from-blue-500/50 to-purple-500/50 blur-sm opacity-0 group-hover/badge:opacity-100 transition-opacity duration-300" />
                </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 