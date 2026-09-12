"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lock,
  Camera,
  Flame,
  Tv,
  Wrench,
  Cpu,
  Radio,
  Check,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";

type ServiceCategory = "all" | "security" | "electrical" | "smart";

interface ServiceItem {
  id: string;
  category: "security" | "electrical" | "smart";
  title: string;
  badge: string;
  icon: React.ElementType;
  tagline: string;
  description: string;
  features: string[];
  recommendedFor: string;
}

const services: ServiceItem[] = [
  {
    id: "access-control",
    category: "security",
    title: "Door Access Control System",
    badge: "Smart Access",
    icon: Lock,
    tagline: "Biometric & Keyless Security",
    description:
      "Enterprise biometric fingerprint scanners, facial recognition terminals, smart card/PIN access, and app-controlled motorized door locks for commercial facilities and luxury residences.",
    features: [
      "Biometric fingerprint & facial recognition",
      "RFID smart card & touch keypad entry",
      "Smartphone remote unlocking & guest pass logs",
      "Tamper-resistant commercial mortise hardware",
    ],
    recommendedFor: "Offices, Retail, Residential Homes, Gated Facilities",
  },
  {
    id: "surveillance",
    category: "security",
    title: "Surveillance Camera Systems",
    badge: "Residential & Commercial",
    icon: Camera,
    tagline: "24/7 AI High-Definition CCTV",
    description:
      "Commercial-grade PTZ 360° cameras, multi-angle dome cameras, multi-screen monitoring station setups, night vision, and encrypted mobile remote monitoring anywhere you go.",
    features: [
      "4K Ultra HD cameras with Night Vision",
      "Hikvision & enterprise PTZ dome hardware",
      "Multi-channel NVR & multi-screen monitoring arrays",
      "Real-time mobile alerts & cloud playback",
    ],
    recommendedFor: "Warehouses, Retail Stores, Parking Lots, Private Estates",
  },
  {
    id: "fire-alarm",
    category: "electrical",
    title: "Firealarm System & Safety",
    badge: "Code Compliant",
    icon: Flame,
    tagline: "Early Detection & Alerting",
    description:
      "Full-spectrum fire safety engineering including commercial fire alarm panels, emergency strobes, horn sounders, smoke/heat detector grids, and fire suppression equipment management.",
    features: [
      "Central fire alarm control panel integration",
      "Ceiling-grid smoke, heat & gas detectors",
      "High-decibel horns & strobe evacuation lights",
      "Fire hose reel & extinguisher deployment",
    ],
    recommendedFor: "Commercial Buildings, Industrial Plants, Multi-Family Housing",
  },
  {
    id: "electrical-repairs",
    category: "electrical",
    title: "Electricians Repair Service",
    badge: "24/7 Emergency",
    icon: Wrench,
    tagline: "Certified Power Engineering",
    description:
      "Master electrical diagnostics, high-voltage industrial panel upgrades, circuit breaker replacements, commercial wiring, lighting installations, and 24/7 emergency electrical repair.",
    features: [
      "Complete electrical panel upgrades & repairs",
      "Commercial & residential rewiring & conduits",
      "Industrial control cabinet troubleshooting",
      "Code violation corrections & safety inspections",
    ],
    recommendedFor: "Business Facilities, Residential Remodels, Property Managers",
  },
  {
    id: "interior-design",
    category: "smart",
    title: "Interior Design & Decoration",
    badge: "Modern Living",
    icon: Tv,
    tagline: "Architectural Lighting & Media Walls",
    description:
      "Transforming living spaces with custom entertainment feature walls, integrated ambient LED cove lighting, floating modern cabinetry, acoustic ceiling tiles, and luxury living room aesthetics.",
    features: [
      "Custom backlit LED TV entertainment walls",
      "Modern floating consoles & concealed wire channels",
      "Recessed acoustic ceiling paneling & mood lighting",
      "Minimalist high-end residential interior accents",
    ],
    recommendedFor: "Modern Homes, Executive Suites, Hospitality Lounges",
  },
  {
    id: "smart-appliances",
    category: "smart",
    title: "Smart Home Appliances",
    badge: "IoT Automation",
    icon: Cpu,
    tagline: "Intelligent Connected Living",
    description:
      "Next-generation connected home setups including smart multi-door refrigeration, digital kitchen appliances, automated laundry ecosystems, and unified smart home voice control.",
    features: [
      "Smart multi-door refrigerators & kitchen appliances",
      "Unified smart automation integration",
      "Energy-efficient smart appliances setup",
      "Seamless integration with smart security",
    ],
    recommendedFor: "Smart Homes, Modern Kitchens, Energy-Conscious Owners",
  },
  {
    id: "led-billboards",
    category: "smart",
    title: "LED Signs Board For Ads",
    badge: "Commercial Outdoor",
    icon: Radio,
    tagline: "Dynamic Digital Billboards",
    description:
      "Ultra-bright, weatherproof commercial LED signage and outdoor digital billboards (e.g. Navy Yard / roadside displays) engineered for vivid 24/7 advertising visibility and content management.",
    features: [
      "High-luminance outdoor daylight readable displays",
      "Roadside & building-mounted commercial signage",
      "Dynamic remote cloud content scheduling",
      "Weather-sealed IP65+ heavy-duty chassis",
    ],
    recommendedFor: "Highways, Commercial Plazas, Shopping Centers, Arenas",
  },
];

export function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>("all");

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((s) => s.category === activeCategory);

  const categories: { label: string; value: ServiceCategory }[] = [
    { label: "All Services (7)", value: "all" },
    { label: "Security & Access", value: "security" },
    { label: "Electrical & Fire", value: "electrical" },
    { label: "Smart Living & LED", value: "smart" },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-10 border-b border-white/[0.08]">
          <div className="space-y-2 max-w-xl">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
              CORE VERTICALS
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Complete Engineering Catalog
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Commercial security, certified master electrical repair, fire alarm compliance, and automated living.
            </p>
          </div>

          {/* Watermelon UI Segmented Tab Bar */}
          <div className="inline-flex p-1 rounded-xl bg-zinc-900 border border-white/[0.08] self-start sm:self-auto overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                  activeCategory === cat.value
                    ? "bg-zinc-800 text-white shadow-sm"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence>
            {filteredServices.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-2xl border border-white/[0.08] bg-[#0c0c0e] hover:border-white/20 p-5 transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Row */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/[0.08] text-white flex items-center justify-center">
                        <Icon className="w-4 h-4 text-zinc-300" />
                      </div>
                      <span className="text-[11px] font-mono text-zinc-400 px-2 py-0.5 rounded bg-zinc-900 border border-white/[0.06]">
                        {service.badge}
                      </span>
                    </div>

                    <h3 className="text-base font-semibold text-white group-hover:text-zinc-200 transition-colors">
                      {service.title}
                    </h3>
                    <div className="text-xs text-zinc-400 font-medium mt-0.5">
                      {service.tagline}
                    </div>

                    <p className="text-xs text-zinc-400 mt-2.5 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="mt-4 pt-4 border-t border-white/[0.06] space-y-1.5">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                          <Check className="w-3.5 h-3.5 text-zinc-400 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Bottom */}
                  <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
                    <span className="text-[11px] text-zinc-400 truncate max-w-[170px]">
                      {service.recommendedFor}
                    </span>

                    <a
                      href={`https://wa.me/12672105793?text=Hi%20SeaGate%20Tech%2C%20I%20need%20a%20quote%20for%20${encodeURIComponent(
                        service.title
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-zinc-300 hover:text-white font-medium transition-colors"
                    >
                      <span>Inquire</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
