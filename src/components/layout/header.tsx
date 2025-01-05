"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("#home");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
          >
            Hamza Shabbeer
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center bg-white/5 backdrop-blur-lg rounded-full p-1.5 border border-white/10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setActiveItem(item.href)}
                className={`relative px-4 py-1.5 text-sm font-medium transition-all duration-300 rounded-full
                  ${activeItem === item.href 
                    ? 'text-white bg-gradient-to-r from-primary/90 to-secondary/90 shadow-lg shadow-primary/25'
                    : 'text-muted-foreground hover:text-white hover:bg-white/10'
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-full hover:bg-white/10 transition-colors relative"
          >
            <span className="sr-only">Toggle menu</span>
            <div className="w-5 h-5 flex flex-col justify-center gap-1.5">
              <span className={`block h-0.5 w-5 bg-foreground transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`} />
              <span className={`block h-0.5 w-5 bg-foreground transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-5 bg-foreground transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
            </div>
          </button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-full right-4 left-4 mt-2 p-2 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10 shadow-xl md:hidden"
              >
                <nav className="flex flex-col gap-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => {
                        setActiveItem(item.href);
                        setIsMenuOpen(false);
                      }}
                      className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300
                        ${activeItem === item.href 
                          ? 'text-white bg-gradient-to-r from-primary/90 to-secondary/90 shadow-lg shadow-primary/25'
                          : 'text-muted-foreground hover:text-white hover:bg-white/10'
                        }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
} 