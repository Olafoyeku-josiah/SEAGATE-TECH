"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, ShieldCheck, Check, Sparkles } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle Dot Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_35%,#000_70%,transparent_100%)] opacity-60 pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto text-center space-y-7">
        {/* Pill Tag */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] text-xs text-zinc-300 font-mono tracking-tight"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>SeaGate Tech • Collingdale, PA & Tri-State</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-[1.1]"
        >
          Security, electrical & smart automation.
          <span className="block text-zinc-400 font-medium">Built with precision.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed font-normal"
        >
          High-performance residential and commercial surveillance, biometric door access, certified master electrician repairs, fire alarm compliance, and high-impact digital LED billboards.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2"
        >
          <a
            href="#quote"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
          >
            <span>Request Free Estimate</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="tel:2672105793"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-zinc-900/90 border border-white/[0.08] hover:border-white/20 text-zinc-200 hover:text-white font-medium text-sm transition-colors flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>Call (267) 210-5793</span>
          </a>
        </motion.div>

        {/* Minimalist Showcase Frame */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-10 max-w-5xl mx-auto"
        >
          <div className="rounded-2xl border border-white/[0.08] bg-[#0c0c0e] p-2.5 sm:p-4 shadow-2xl">
            {/* Header bar of the preview card */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-white/[0.06] mb-3 text-xs text-zinc-400">
              <div className="flex items-center gap-2 font-mono">
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                <span className="ml-2 text-zinc-400">seagate-tech // operational-portfolio</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Live Deployments</span>
              </div>
            </div>

            {/* Media Canvas */}
            <div className="relative aspect-[16/8] w-full rounded-xl overflow-hidden bg-black border border-white/[0.06]">
              <Image
                src="/images/flyers/flyer-banner-cctv.jpg"
                alt="SeaGate Tech Operations Banner"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                <span className="font-mono text-zinc-300 bg-black/60 backdrop-blur-md px-3 py-1 rounded-md border border-white/10">
                  CCTV • Access Control • Fire Alarms • LED Billboards
                </span>
                <span className="hidden sm:inline-block font-mono text-zinc-400 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                  1014 Spruce St Av, Collingdale PA
                </span>
              </div>
            </div>

            {/* Quick Metrics under preview */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3 text-left">
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                <div className="text-xs text-zinc-400 font-mono">SERVICES</div>
                <div className="text-sm font-semibold text-white mt-0.5">7 Integrated Fields</div>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                <div className="text-xs text-zinc-400 font-mono">COVERAGE</div>
                <div className="text-sm font-semibold text-white mt-0.5">PA & Tri-State</div>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                <div className="text-xs text-zinc-400 font-mono">SUPPORT</div>
                <div className="text-sm font-semibold text-white mt-0.5">24/7 Dispatch</div>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                <div className="text-xs text-zinc-400 font-mono">COMPLIANCE</div>
                <div className="text-sm font-semibold text-white mt-0.5">Certified & Licensed</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
