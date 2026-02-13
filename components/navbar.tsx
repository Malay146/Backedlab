"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#hero" },
    { name: "Features", href: "#features" },
    { name: "Services", href: "#services" },
    { name: "FAQ", href: "#faq" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Desktop & Mobile Navbar */}
      <div className="w-full flex items-center justify-center fixed top-4 md:top-8 z-50 px-4">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-6xl pl-4 pr-3 py-2 bg-white/30 border border-[#E5E5E5] rounded-lg flex items-center justify-between backdrop-blur-sm"
        >
          <Link href="/" className="cursor-pointer flex items-center">
            <div className="size-10 md:size-14 relative">
              <Image src="/logo.png" alt="Xocket Logo" fill />
            </div>
            <h1 className="font-bricolage-grotesque font-medium text-xl md:text-2xl">Xocket</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-inter text-black leading-none px-2 py-1 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="group font-inter font-medium px-4 py-2 bg-zinc-900 rounded-md transition cursor-pointer">
              <span className="chroma-text-out chroma-text-out-animate text-white">
                Book a Call
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleMenu}
            className="lg:hidden p-2 hover:bg-white/20 rounded-md transition"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-black" />
            ) : (
              <Menu className="w-6 h-6 text-black" />
            )}
          </motion.button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-25 md:top-30 left-4 right-4 z-40 lg:hidden"
          >
            <div className="bg-white/95 backdrop-blur-md border border-[#E5E5E5] rounded-3xl shadow-xl overflow-hidden">
              <nav className="flex flex-col p-6">
                {links.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={toggleMenu}
                      className="font-sans text-black font-medium text-lg py-3 px-4 rounded-lg transition block"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: links.length * 0.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleMenu}
                  className="font-sans mt-4 px-6 py-3 bg-blue-600 text-white rounded-md transition font-medium"
                >
                  Book a Call
                </motion.button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
