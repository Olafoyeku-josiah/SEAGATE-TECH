"use client";

import { Clock, Award, ShieldCheck, Zap, ArrowUpRight } from "lucide-react";

export function FeaturesGrid() {
  const bentoItems = [
    {
      title: "24/7 Rapid Emergency Dispatch",
      description:
        "Located in Collingdale, PA, our licensed emergency field team dispatches across Delaware County and Philadelphia for sudden electrical outages, alarm failures, and security breaches.",
      badge: "Local Hub",
      colSpan: "lg:col-span-8",
      stats: "< 45 MIN",
      statLabel: "Average Local Emergency Response",
    },
    {
      title: "100% Licensed & Insured",
      description:
        "All electrical panels, industrial wiring, and fire alarm installations comply strictly with NEC standards and local code authorities.",
      badge: "Compliance",
      colSpan: "lg:col-span-4",
      stats: "NEC & OSHA",
      statLabel: "Code Compliant Standards",
    },
    {
      title: "Commercial-Grade Hardware",
      description:
        "We install Hikvision PTZ cameras, tamper-proof biometric deadbolts, industrial circuit cabinets, and IP65+ weatherproof digital LED billboard displays.",
      badge: "Tier-1 Hardware",
      colSpan: "lg:col-span-4",
      stats: "IP65+ / 4K",
      statLabel: "Enterprise Specification",
    },
    {
      title: "Unified End-to-End Solutions",
      description:
        "One trusted contractor for security surveillance, access control, master electrical repairs, fire safety, smart home luxury, and digital advertising billboard systems.",
      badge: "Full Stack",
      colSpan: "lg:col-span-8",
      stats: "7 IN 1",
      statLabel: "Unified Engineering Capabilities",
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-xl mb-10 space-y-2">
          <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
            ADVANTAGES
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Why SeaGate Tech
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Engineered reliability, fast local dispatch, and rigorous quality standards for your properties.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {bentoItems.map((item, idx) => (
            <div
              key={idx}
              className={`${item.colSpan} rounded-2xl border border-white/[0.08] bg-[#0c0c0e] hover:border-white/20 p-6 sm:p-7 transition-all flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-[11px] font-mono text-zinc-400 px-2 py-0.5 rounded bg-zinc-900 border border-white/[0.06]">
                    {item.badge}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                </div>

                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-end justify-between">
                <div>
                  <div className="text-xl font-bold font-mono text-white">
                    {item.stats}
                  </div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">
                    {item.statLabel}
                  </div>
                </div>

                <a
                  href="#contact"
                  className="text-xs text-zinc-400 hover:text-white flex items-center gap-1 font-medium transition-colors"
                >
                  <span>Learn more</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
