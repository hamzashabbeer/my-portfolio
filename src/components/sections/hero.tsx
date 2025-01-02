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
const particles = Array.from({ length: 20 }, (_, i) => {
  const seed = i / 20; // Use index to generate deterministic values
  return {
    x: Math.round(seed * 100), // Round to avoid decimal mismatches
    y: Math.round((seed * 7919) % 100), // Use prime number for better distribution
    duration: 2 + (seed * 2), // Duration between 2-4 seconds
    delay: seed * 2, // Delay between 0-2 seconds
    moveX: Math.round(200 - (seed * 400)), // Movement range -200 to 200
    moveY: Math.round(200 - ((seed * 7919) % 400)) // Different movement range for Y
  };
});

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
      className="min-h-screen relative overflow-hidden flex items-center"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 gradient-bg opacity-20" />
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
        <div 
          className="spotlight" 
          style={{ 
            '--x': `${mousePosition.x}%`, 
            '--y': `${mousePosition.y}%` 
          } as React.CSSProperties}
        />
        
        {/* Animated Particles */}
        {particles.map((particle, i) => (
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
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div 
        className="container px-4 sm:px-6 lg:px-8 py-20 relative"
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
              className="inline-flex items-center gap-2 glass-effect px-4 py-2 rounded-full hover-lift"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span className="text-sm font-medium text-gradient">Available for new projects</span>
            </motion.div>

            {/* Main Content */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight"
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
                className="text-xl sm:text-2xl text-muted-foreground max-w-2xl leading-relaxed"
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
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg overflow-hidden animated-border glow-effect hover-lift"
              >
                <span className="relative z-10 text-white font-medium">Contact Me</span>
                <BsArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 glass-effect px-8 py-4 rounded-lg hover:bg-secondary/20 transition-all hover-lift"
              >
                View Projects
                <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              {[
                { label: "Experience", value: "2+ Years" },
                { label: "Projects", value: "10+" },
                { label: "Technologies", value: "15+" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="glass-effect rounded-xl p-4 text-center card-3d hover-lift"
                >
                  <motion.p
                    className="text-3xl font-bold text-gradient"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
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
              {socialLinks.map((social, index) => (
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
              <div className="absolute inset-0 animate-morph bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl animate-pulse" />
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-full opacity-30 blur animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-r from-background to-background/50 animate-morph" />
              
              {/* Main Image */}
              <div className="relative w-full h-full overflow-hidden animate-morph">
                <div className="w-full h-full relative animate-float">
                  <Image
                    src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop"
                    alt="Hamza Shabbeer"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Floating Badges */}
              {[
                { text: "Full Stack Dev", position: "-right-4 top-1/4" },
                { text: "UI/UX Designer", position: "-left-4 bottom-1/4" },
              ].map((badge, index) => (
                <motion.div
                  key={badge.text}
                  initial={{ opacity: 0, x: index === 0 ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.5 + index * 0.2 }}
                  className={`absolute ${badge.position} glass-effect px-4 py-2 rounded-lg hover-lift card-3d`}
                >
                  <p className="text-sm font-medium text-gradient">{badge.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
} 