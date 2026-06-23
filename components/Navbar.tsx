"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 h-[72px] z-50 flex items-center justify-between px-6 md:px-12 transition-all duration-300 ${
        scrolled
          ? "bg-[#050505]/80 backdrop-blur-md border-b border-revy-border/80 shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      {/* Logo (Top Left) */}
      <div 
        className="flex items-center cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <motion.div
          whileHover={{ scale: 1.05, filter: "drop-shadow(0 0 8px rgba(102, 224, 255, 0.5))" }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="relative h-[36px] w-[150px]"
        >
          <Image
            src="/revy-logo.png"
            alt="Revy AI Logo"
            fill
            sizes="150px"
            className="object-contain"
            priority
          />
        </motion.div>
      </div>

      {/* Navigation links (optional, simple, clean for modern feeling) */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-revy-text-secondary">
        <button 
          suppressHydrationWarning
          onClick={() => scrollToSection("features")} 
          className="hover:text-revy-green transition-colors cursor-pointer"
        >
          المميزات
        </button>
        <button 
          suppressHydrationWarning
          onClick={() => scrollToSection("calculator")} 
          className="hover:text-revy-green transition-colors cursor-pointer"
        >
          حاسبة الأرباح
        </button>
        <button 
          suppressHydrationWarning
          onClick={() => scrollToSection("enterprise")} 
          className="hover:text-revy-green transition-colors cursor-pointer"
        >
          الشركات
        </button>
      </div>

      {/* CTA Button (جرّب مجاناً) */}
      <div>
        <motion.button
          suppressHydrationWarning
          onClick={() => scrollToSection("free-trial")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 rounded-full bg-gradient-to-r from-revy-green to-revy-cyan text-revy-bg-primary font-semibold text-sm cursor-pointer shadow-[0_0_15px_rgba(34,229,154,0.3)] hover:shadow-[0_0_25px_rgba(34,229,154,0.6)] transition-all duration-300"
        >
          جرّب مجاناً
        </motion.button>
      </div>
    </motion.nav>
  );
}
