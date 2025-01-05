"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { RxMoon, RxSun } from "react-icons/rx";
import { RiMenu4Line, RiCloseLine } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Testimonials", href: "#testimonials" },
];

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/70 backdrop-blur-2xl border-b border-border/50 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#home"
            className="text-2xl font-bold relative group"
          >
            <span className="bg-gradient px-4 py-2 rounded-lg text-white">HS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <nav className="flex items-center gap-1 bg-white/[0.05] backdrop-blur-xl rounded-full p-1.5 border border-white/[0.05] shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative px-6 py-2 text-sm font-medium transition-all duration-300 rounded-full hover:bg-gradient-to-r from-primary/90 via-primary/80 to-secondary/90 hover:shadow-[0_2px_12px_rgba(147,51,234,0.3)] text-gray-300 hover:text-white hover:scale-105 transform"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Get Started CTA */}
            <Link
              href="#contact"
              className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-lg overflow-hidden bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 transition-all duration-300 shadow-[0_2px_12px_rgba(147,51,234,0.3)] hover:shadow-[0_4px_16px_rgba(147,51,234,0.4)]"
            >
              <span className="relative text-white font-medium flex items-center">
                Get Started
                <BsArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg bg-secondary/40 hover:bg-secondary/60 transition-colors md:hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <RiCloseLine className="w-5 h-5" />
              ) : (
                <RiMenu4Line className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-4"
            >
              <div className="bg-white/[0.05] backdrop-blur-xl rounded-2xl p-2 border border-white/[0.05] shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center w-full px-6 py-2.5 text-sm font-medium transition-all duration-300 rounded-xl hover:bg-gradient-to-r from-primary/90 via-primary/80 to-secondary/90 hover:shadow-[0_2px_12px_rgba(147,51,234,0.3)] text-gray-300 hover:text-white hover:scale-[1.02] transform"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center w-full px-6 py-2.5 text-sm font-medium rounded-xl bg-gradient-to-r from-primary to-secondary text-white hover:scale-[1.02] transform transition-all duration-300 shadow-[0_2px_12px_rgba(147,51,234,0.3)] hover:shadow-[0_4px_16px_rgba(147,51,234,0.4)]"
                >
                  Get Started
                  <BsArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
} 