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
    <header className="fixed top-0 left-0 right-0 z-50 py-6">
      <div className="container mx-auto px-4">
        {/* Main Header Container with Glass Effect */}
        <div className="relative flex items-center justify-between bg-gradient-to-r from-white/[0.05] to-white/[0.01] backdrop-blur-xl rounded-full p-2 border border-white/[0.05] shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary/90 to-secondary/90 px-6"
          >
            Hamza Shabbeer
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <nav className="flex items-center bg-gradient-to-r from-black/20 to-black/10 backdrop-blur-xl rounded-full p-1.5 border border-white/[0.08] shadow-[inset_0_0_8px_rgba(0,0,0,0.2)]">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setActiveItem(item.href)}
                  className={`relative px-6 py-2 text-sm font-medium transition-all duration-300 rounded-full
                    ${activeItem === item.href 
                      ? 'text-white bg-gradient-to-r from-primary/90 via-primary/80 to-secondary/90 shadow-[0_2px_12px_rgba(147,51,234,0.3)]'
                      : 'text-gray-300 hover:text-white hover:bg-white/[0.08]'
                    }
                    hover:scale-105 transform transition-transform duration-200
                    hover:shadow-[0_0_16px_rgba(255,255,255,0.1)]
                  `}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-full hover:bg-white/[0.08] transition-colors relative mr-4"
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
                className="absolute top-full right-0 left-0 mt-4 mx-2 p-3 bg-gradient-to-b from-black/30 to-black/20 backdrop-blur-2xl rounded-2xl border border-white/[0.05] shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]"
              >
                <nav className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => {
                        setActiveItem(item.href);
                        setIsMenuOpen(false);
                      }}
                      className={`px-5 py-3 text-sm font-medium rounded-xl transition-all duration-300
                        ${activeItem === item.href 
                          ? 'text-white bg-gradient-to-r from-primary/90 via-primary/80 to-secondary/90 shadow-[0_2px_12px_rgba(147,51,234,0.3)]'
                          : 'text-gray-300 hover:text-white hover:bg-white/[0.08]'
                        }
                        hover:scale-[1.02] transform transition-transform duration-200
                        hover:shadow-[0_0_16px_rgba(255,255,255,0.1)]
                      `}
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