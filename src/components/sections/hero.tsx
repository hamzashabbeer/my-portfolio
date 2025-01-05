"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
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

// Pre-generate fixed particle positions to avoid hydration mismatch
const FIXED_PARTICLES = [
  { x: 10, y: 20, duration: 2.5, delay: 0.2, moveX: 100, moveY: 50 },
  { x: 70, y: 30, duration: 3.0, delay: 0.5, moveX: -150, moveY: 100 },
  { x: 40, y: 60, duration: 2.8, delay: 0.8, moveX: 120, moveY: -80 },
  { x: 90, y: 40, duration: 3.2, delay: 0.3, moveX: -100, moveY: 120 },
  { x: 20, y: 80, duration: 2.6, delay: 0.6, moveX: 140, moveY: -60 },
  { x: 60, y: 10, duration: 2.9, delay: 0.9, moveX: -130, moveY: 90 },
  { x: 30, y: 70, duration: 2.7, delay: 0.4, moveX: 110, moveY: -100 },
  { x: 80, y: 50, duration: 3.1, delay: 0.7, moveX: -120, moveY: 70 },
  { x: 50, y: 90, duration: 2.4, delay: 1.0, moveX: 130, moveY: -90 },
  { x: 15, y: 35, duration: 2.8, delay: 0.3, moveX: -110, moveY: 80 },
  { x: 75, y: 65, duration: 2.6, delay: 0.8, moveX: 120, moveY: -70 },
  { x: 45, y: 25, duration: 3.0, delay: 0.5, moveX: -140, moveY: 110 },
  { x: 85, y: 75, duration: 2.7, delay: 0.2, moveX: 150, moveY: -120 },
  { x: 25, y: 45, duration: 2.9, delay: 0.7, moveX: -100, moveY: 60 },
  { x: 65, y: 15, duration: 2.5, delay: 1.0, moveX: 130, moveY: -80 }
];

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  
  const parallaxY = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="min-h-screen relative overflow-hidden flex items-center pt-7 sm:pt-12"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 -z-10">
        {/* Primary gradient orbs */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100px,#3b82f6,transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_80%_300px,#6366f1,transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_20%_300px,#8b5cf6,transparent)]" />
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
        
        {/* Noise texture */}
        <div className="absolute inset-0 bg-noise opacity-10" />
        
        {/* Animated glow effects */}
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-500/30 rounded-full filter blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-500/30 rounded-full filter blur-[128px] animate-pulse delay-300" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/30 rounded-full filter blur-[128px] animate-pulse delay-700" />

        {/* Spotlight effect */}
        <div 
          className="spotlight opacity-20" 
          style={{ 
            '--x': `${mousePosition.x}%`, 
            '--y': `${mousePosition.y}%` 
          } as React.CSSProperties}
        />
        
        {/* Animated Particles */}
        {FIXED_PARTICLES.map((particle, i) => (
          <motion.div
            key={i}
            className="particle absolute w-1 h-1 bg-primary/50 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              x: [0, particle.moveX],
              y: [0, particle.moveY],
              opacity: [0, 1, 0],
              scale: [0, 2, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Animated lines */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
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
      </div>

      <motion.div 
        className="container px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative"
        style={{ y: parallaxY, opacity }}
      >
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 border border-primary/20 rounded-full animate-spin-slow" />
        <div className="absolute bottom-10 right-10 w-40 h-40 border-2 border-secondary/20 rounded-full animate-spin-slow" 
             style={{ animationDirection: 'reverse' }} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 space-y-8 order-2 lg:order-1"
          >
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", duration: 0.8 }}
              className="inline-flex items-center gap-2 glass-effect px-4 py-2 rounded-full hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20 group border border-emerald-500/20"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 animate-pulse"></span>
              </span>
              <span className="text-sm font-medium bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent group-hover:text-emerald-400 transition-all duration-300 font-outfit tracking-wide">
                Available for new projects
              </span>
            </motion.div>

            {/* Main Content */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight font-grotesk tracking-tight"
              >
                <motion.span
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-reveal block"
                >
                  Hi, I&apos;m{" "}
                </motion.span>
                <motion.span
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="text-gradient relative inline-block animate-shimmer"
                >
                  Hamza Shabbeer
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-secondary/50 transform origin-left" />
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="text-xl sm:text-2xl text-muted-foreground max-w-2xl leading-relaxed font-outfit"
              >
                A passionate{" "}
                <span className="text-gradient font-semibold">Full Stack Developer</span> &{" "}
                <span className="text-gradient font-semibold">UI/UX Designer</span> crafting innovative digital solutions
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex flex-col sm:flex-row gap-6 font-outfit"
            >
              {/* Contact Button */}
              <Link
                href="#contact"
                className="relative inline-flex h-14 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 hover:scale-105 transition-all duration-300 group"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21A1EC_50%,#51E4B8_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background/80 px-8 py-1 text-sm font-medium backdrop-blur-3xl transition-all duration-300 group-hover:bg-background/40">
                  <span className="relative z-10 flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 font-semibold text-lg group-hover:text-white transition-colors duration-300">
                    Contact Me
                    <BsArrowRight className="group-hover:translate-x-1 transition-transform text-teal-400 group-hover:text-white" />
                  </span>
                </span>
              </Link>

              {/* Projects Button */}
              <Link
                href="#projects"
                className="relative inline-flex h-14 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 hover:scale-105 transition-all duration-300 group"
              >
                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF3D9A_0%,#FF9946_50%,#FF3D9A_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background/80 px-8 py-1 text-sm font-medium backdrop-blur-3xl transition-all duration-300 group-hover:bg-background/40">
                  <span className="relative z-10 flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400 font-semibold text-lg group-hover:text-white transition-colors duration-300">
                    View Projects
                    <BsArrowRight className="group-hover:translate-x-1 transition-transform text-pink-500 group-hover:text-white" />
                  </span>
                </span>
              </Link>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {[
                { 
                  label: "Experience", 
                  value: "2+", 
                  unit: "Years",
                  icon: "💼",
                  gradient: "from-blue-600 to-cyan-600" 
                },
                { 
                  label: "Projects", 
                  value: "10+", 
                  unit: "Complete",
                  icon: "🚀",
                  gradient: "from-purple-600 to-pink-600" 
                },
                { 
                  label: "Tech Stack", 
                  value: "15+", 
                  unit: "Skills",
                  icon: "⚡",
                  gradient: "from-amber-600 to-orange-600" 
                },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  whileHover={{ y: -3, scale: 1.01 }}
                  className="glass-effect relative overflow-hidden rounded-xl p-3 group hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 border border-white/[0.08]"
                >
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br opacity-[0.08] group-hover:opacity-[0.12] transition-opacity duration-300" 
                       style={{
                         backgroundImage: `linear-gradient(to bottom right, var(--primary), var(--secondary))`
                       }}
                  />
                  
                  {/* Content Container */}
                  <div className="relative flex items-center gap-3">
                    {/* Icon with gradient background */}
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 border border-white/[0.08]">
                      <span className="text-base transform group-hover:scale-110 transition-transform duration-300">
                        {stat.icon}
                      </span>
                    </div>
                    
                    {/* Text Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-1">
                        <motion.span
                          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {stat.value}
                        </motion.span>
                        <span className="text-xs text-muted-foreground/80 font-medium">
                          {stat.unit}
                        </span>
                      </div>
                      <p className="text-xs font-medium text-muted-foreground truncate">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="flex items-center gap-4"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-effect p-3 rounded-lg hover:bg-secondary/20 transition-all glow-effect"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative w-72 h-72 sm:w-[500px] sm:h-[500px] mx-auto">
              {/* Glowing background effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-2xl" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-xl" />
              
              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-b from-primary/10 to-secondary/10 p-2">
                <div className="w-full h-full relative rounded-full overflow-hidden border-2 border-primary/20">
                  <Image
                    src="/images/profile.png"
                    alt="Hamza Shabbeer"
                    fill
                    className="object-cover hover:scale-110 transition-all duration-500"
                    priority
                    sizes="(max-width: 768px) 288px, 500px"
                    quality={100}
                  />
                </div>
              </div>

              {/* Floating Badges */}
              {[
                { 
                  text: "Full Stack Dev", 
                  position: "right-0 top-10 translate-x-1/4",
                  gradient: "from-blue-500 to-purple-500",
                  icon: "💻"
                },
                { 
                  text: "UI/UX Designer", 
                  position: "left-0 bottom-10 -translate-x-1/4",
                  gradient: "from-pink-500 to-orange-500",
                  icon: "🎨"
                },
              ].map((badge, index) => (
                <motion.div
                  key={badge.text}
                  initial={{ opacity: 0, x: index === 0 ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.5 + index * 0.2 }}
                  className={`absolute ${badge.position} z-10`}
                >
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-full blur-lg group-hover:blur-xl transition-all duration-300 group-hover:opacity-100 opacity-75"></div>
                    <div className="glass-effect px-4 py-2 rounded-full border border-white/[0.2] shadow-lg backdrop-blur-xl hover:scale-105 transition-transform duration-300 relative">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{badge.icon}</span>
                        <p className={`text-sm font-medium bg-gradient-to-r ${badge.gradient} bg-clip-text text-transparent whitespace-nowrap font-outfit tracking-wide`}>
                          {badge.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
} 