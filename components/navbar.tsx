"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Features", href: "#features" },
    { label: "Portfolio", href: "#gallery" },
    { label: "Estimator", href: "#quote" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-200">
      <div
        className={`w-full border-b transition-all duration-200 ${
          scrolled
            ? "bg-black/80 backdrop-blur-xl border-white/[0.08] py-3.5"
            : "bg-black/40 backdrop-blur-md border-transparent py-4"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center p-0.5 group-hover:scale-105 transition-transform">
              <Image
                src="/logo.png"
                alt="SeaGate Tech Logo"
                width={32}
                height={32}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-base font-semibold tracking-tight text-white">
                SeaGate Tech
              </span>
              <span className="hidden sm:inline-block text-[10px] uppercase font-mono tracking-wider px-1.5 py-0.5 rounded bg-zinc-900 border border-white/10 text-zinc-400">
                Collingdale PA
              </span>
            </div>
          </Link>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 text-xs text-zinc-400 hover:text-white rounded-md hover:bg-white/[0.05] transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="tel:2672105793"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 border border-white/[0.08] transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>(267) 210-5793</span>
            </a>

            <a
              href="https://wa.me/12672105793?text=Hi%20SeaGate%20Tech%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium bg-white text-black hover:bg-zinc-200 transition-colors"
            >
              <span>WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-zinc-900 border border-white/[0.08] text-zinc-400 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="md:hidden border-b border-white/[0.08] bg-black/95 backdrop-blur-2xl p-5"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm text-zinc-300 hover:text-white rounded-md hover:bg-white/[0.05]"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-white/[0.08] flex flex-col gap-2">
                <a
                  href="tel:2672105793"
                  className="w-full py-2.5 px-4 rounded-lg bg-zinc-900 border border-white/[0.08] text-center text-xs font-medium text-white flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Call 267-210-5793</span>
                </a>
                <a
                  href="https://wa.me/12672105793?text=Hi%20SeaGate%20Tech%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-lg bg-white text-black font-medium text-xs text-center flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
