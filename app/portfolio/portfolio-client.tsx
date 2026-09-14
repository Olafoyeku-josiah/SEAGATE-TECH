"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Maximize2,
  X,
  ArrowUpRight,
  Video,
  Camera,
  Lock,
  Zap,
  Radio,
  Check,
  Phone,
  MessageCircle,
} from "lucide-react";

type ItemType = "video" | "image";
type CategoryType = "all" | "video" | "access" | "surveillance" | "electrical" | "smart";

interface PortfolioItem {
  id: string;
  type: ItemType;
  category: "access" | "surveillance" | "electrical" | "smart";
  title: string;
  subtitle: string;
  tag: string;
  mediaSrc: string;
  posterSrc?: string;
  description: string;
  date?: string;
}

const portfolioItems: PortfolioItem[] = [
  // 5 Real Videos from field work
  {
    id: "v1",
    type: "video",
    category: "access",
    title: "Access Control Relay & Electronic Strike Test",
    subtitle: "Real-time trigger validation for commercial door strike hardware",
    tag: "Live Video Demo",
    mediaSrc: "/videos/video-2.mp4",
    description:
      "Live field demonstration testing the access control relay board, power supply cutoff, and instant electromagnetic lock release response.",
  },
  {
    id: "v2",
    type: "video",
    category: "access",
    title: "Door Access Keypad & Wireless Remote Triggering",
    subtitle: "Testing wireless transmitters and digital PIN code entry",
    tag: "Live Video Demo",
    mediaSrc: "/videos/video-3.mp4",
    description:
      "Operational verification showing door unlocking sequences via multi-channel wireless remote fobs and weatherproof touch keypads.",
  },
  {
    id: "v3",
    type: "video",
    category: "electrical",
    title: "Power Supply Cabinet & Battery Backup Calibration",
    subtitle: "Validating uninterrupted backup battery during outage simulation",
    tag: "Live Video Demo",
    mediaSrc: "/videos/video-4.mp4",
    description:
      "Testing the UltraTech 12V rechargeable battery backup system to ensure zero downtime for security locks during municipal power failures.",
  },
  {
    id: "v4",
    type: "video",
    category: "surveillance",
    title: "Surveillance Feed & Transmitter Diagnostics",
    subtitle: "Signal continuity and high-definition video transmission",
    tag: "Live Video Demo",
    mediaSrc: "/videos/video-5.mp4",
    description:
      "Bench testing and field validation of CCTV camera cables, balun connectors, and low-latency digital video feeds.",
  },
  {
    id: "v5",
    type: "video",
    category: "electrical",
    title: "On-Site Hardware Assembly & Wiring Walkthrough",
    subtitle: "Precision wire conduit routing and circuit termination",
    tag: "Live Video Demo",
    mediaSrc: "/videos/video-1.mp4",
    description:
      "Field technician performing clean cable management, terminal block fastening, and safety verification according to electrical standards.",
  },

  // Real Project Photography
  {
    id: "p1",
    type: "image",
    category: "access",
    title: "Access Control Central Enclosure & PCB Board",
    subtitle: "12V regulated power supply with rechargeable lead-acid battery",
    tag: "Access Control",
    mediaSrc: "/images/gallery/access-control-panel-1.jpg",
    description:
      "Interior wiring of an access control metal enclosure, featuring dedicated terminal blocks for fail-safe door locks, exit buttons, and fire alarm integration.",
  },
  {
    id: "p2",
    type: "image",
    category: "access",
    title: "Complete Lock Power Station with Conduit Feeds",
    subtitle: "Wall-mounted commercial access control infrastructure",
    tag: "Access Control",
    mediaSrc: "/images/gallery/access-control-panel-2.jpg",
    description:
      "Full cabinet view demonstrating high-voltage to 12V step-down transformer integration, battery backup, and dedicated lock wire channels.",
  },
  {
    id: "p3",
    type: "image",
    category: "access",
    title: "Weatherproof Commercial PIN & RFID Reader",
    subtitle: "Heavy-duty outdoor entry station mounted on door frame",
    tag: "Smart Locks",
    mediaSrc: "/images/gallery/door-keypad-reader.jpg",
    description:
      "Vandal-resistant metallic numeric keypad supporting both multi-digit security PINs and proximity RFID keycards for secure perimeter ingress.",
  },
  {
    id: "p4",
    type: "image",
    category: "access",
    title: "RFID Key Fobs & Wireless Access Transmitters",
    subtitle: "Programmed tags and multi-button remote access fobs",
    tag: "Hardware",
    mediaSrc: "/images/gallery/rfid-keyfobs-remotes.jpg",
    description:
      "Custom programmed proximity fobs and long-range wireless keychain remotes for tenant, employee, and executive building access.",
  },
  {
    id: "p5",
    type: "image",
    category: "surveillance",
    title: "Commercial CCTV Array & Multi-Screen Console",
    subtitle: "Hikvision PTZ 360° cameras and 24/7 security station",
    tag: "Surveillance",
    mediaSrc: "/images/flyers/flyer-banner-cctv.jpg",
    description:
      "Enterprise multi-angle surveillance camera network with 24/7 multi-screen monitoring station, cloud remote streaming, and PTZ optical zoom.",
  },
  {
    id: "p6",
    type: "image",
    category: "electrical",
    title: "Industrial Control Cabinets & Breaker Panels",
    subtitle: "High-voltage diagnostics and industrial panel installations",
    tag: "Electrical",
    mediaSrc: "/images/flyers/flyer-collage-2.jpg",
    description:
      "Master electrician commercial panel wiring, industrial control troubleshooting, and certified power distribution engineering.",
  },
  {
    id: "p7",
    type: "image",
    category: "smart",
    title: "Luxury Interior Media Wall & LED Architectural Design",
    subtitle: "Concealed wiring, custom floating consoles & ambient lighting",
    tag: "Interior Design",
    mediaSrc: "/images/flyers/flyer-collage-1.jpg",
    description:
      "High-end residential living room transformation with custom backlit LED entertainment walls, acoustic ceiling paneling, and smart automation.",
  },
  {
    id: "p8",
    type: "image",
    category: "smart",
    title: "Outdoor Commercial LED Advertising Billboards",
    subtitle: "High-luminance digital displays (e.g. Philadelphia Navy Yard)",
    tag: "LED Billboards",
    mediaSrc: "/images/flyers/flyer-main-services.jpg",
    description:
      "Heavy-duty outdoor weather-sealed digital signage and large-format commercial LED billboards for high-visibility roadside marketing.",
  },
];

export function PortfolioClient() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("all");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  useEffect(() => {
    if (!selectedItem) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedItem(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedItem]);

  const categories: { label: string; value: CategoryType }[] = [
    { label: "All Items (13)", value: "all" },
    { label: "Video Demos (5)", value: "video" },
    { label: "Access Control", value: "access" },
    { label: "Surveillance CCTV", value: "surveillance" },
    { label: "Electrical & Panels", value: "electrical" },
    { label: "Smart Living & LED", value: "smart" },
  ];

  const filteredItems = portfolioItems.filter((item) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "video") return item.type === "video";
    return item.category === activeCategory;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] text-xs font-mono text-zinc-300">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>FIELD WORK & VIDEO DEMONSTRATIONS</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
          Portfolio & Video Showcase
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
          Explore our real-world commercial security deployments, master electrical installations, and live field demonstration videos showing access control, power panels, and CCTV systems in action.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="mt-8 pb-6 border-b border-white/[0.08] flex items-center justify-between gap-4 flex-wrap">
        <div className="inline-flex p-1 rounded-xl bg-zinc-900 border border-white/[0.08] overflow-x-auto max-w-full">
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

        <div className="text-xs font-mono text-zinc-400">
          Showing {filteredItems.length} verified setups
        </div>
      </div>

      {/* Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <AnimatePresence>
          {filteredItems.map((item) => {
            const isVideo = item.type === "video";
            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedItem(item)}
                className="group cursor-pointer rounded-2xl border border-white/[0.08] bg-[#0c0c0e] hover:border-white/20 overflow-hidden transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Media Canvas */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-black border-b border-white/[0.06]">
                    {isVideo ? (
                      <div className="relative w-full h-full">
                        <video
                          src={item.mediaSrc}
                          preload="metadata"
                          muted
                          playsInline
                          className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                        />
                        {/* Video Play Badge Overlay */}
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                          <div className="w-12 h-12 rounded-full bg-white/90 text-black flex items-center justify-center pl-0.5 shadow-xl group-hover:scale-110 transition-transform">
                            <Play className="w-5 h-5 fill-current" />
                          </div>
                        </div>

                        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2 py-0.5 rounded bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-zinc-300">
                          <Video className="w-3 h-3 text-emerald-400" />
                          <span>Video Clip</span>
                        </div>
                      </div>
                    ) : (
                      <div className="relative w-full h-full">
                        <Image
                          src={item.mediaSrc}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-102 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2 py-0.5 rounded bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-zinc-300">
                          <Camera className="w-3 h-3 text-zinc-400" />
                          <span>Photo</span>
                        </div>
                      </div>
                    )}

                    {/* Tag badge top-right */}
                    <div className="absolute top-3 right-3">
                      <span className="text-[10px] font-mono text-zinc-300 bg-black/70 backdrop-blur-md border border-white/10 px-2 py-0.5 rounded">
                        {item.tag}
                      </span>
                    </div>
                  </div>

                  {/* Body Details */}
                  <div className="p-4 space-y-1.5">
                    <h3 className="text-sm font-semibold text-white group-hover:text-zinc-200 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-4 py-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-400">
                  <span className="font-mono text-[11px] capitalize">
                    {item.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-zinc-300 group-hover:text-white font-medium transition-colors">
                    <span>{isVideo ? "Watch Video" : "View Photo"}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Media Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedItem(null);
            }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-start sm:justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-2xl overflow-y-auto pt-16 sm:pt-6 pb-12"
          >
            {/* Global Floating Screen Close Button (Guaranteed always accessible) */}
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[10000] flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900/95 hover:bg-zinc-800 border border-white/25 text-white text-xs font-semibold shadow-2xl backdrop-blur-md cursor-pointer transition-all active:scale-95 hover:border-white/40"
              aria-label="Close modal"
            >
              <span>Close Demo</span>
              <X className="w-4 h-4 text-zinc-200" />
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.15 }}
              className="relative max-w-3xl w-full rounded-2xl bg-[#0c0c0e] border border-white/15 p-4 sm:p-6 shadow-2xl my-auto shrink-0"
            >
              {/* Modal Top Header Bar - Positioned cleanly above media */}
              <div className="flex items-center justify-between gap-3 pb-3 border-b border-white/[0.08] mb-3 sm:mb-4">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="text-[10px] sm:text-xs font-mono text-zinc-300 bg-white/[0.06] border border-white/10 px-2.5 py-1 rounded uppercase tracking-wider truncate">
                    {selectedItem.tag}
                  </span>
                  <span className="text-zinc-600 hidden sm:inline">•</span>
                  <span className="text-[11px] font-mono text-emerald-400 capitalize hidden sm:inline">
                    {selectedItem.category}
                  </span>
                </div>

                {/* Primary Card Close Button */}
                <button
                  type="button"
                  onClick={() => setSelectedItem(null)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-white/20 text-zinc-200 hover:text-white text-xs font-semibold cursor-pointer transition-all shadow-sm shrink-0 active:scale-95"
                  aria-label="Close modal"
                >
                  <span>Close</span>
                  <X className="w-3.5 h-3.5 text-zinc-300" />
                </button>
              </div>

              {/* Player or Image with Responsive Screen-Height Cap */}
              <div className="relative w-full h-[38vh] sm:h-[48vh] max-h-[480px] rounded-xl overflow-hidden bg-black mb-4 border border-white/[0.06] flex items-center justify-center">
                {selectedItem.type === "video" ? (
                  <video
                    src={selectedItem.mediaSrc}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <Image
                    src={selectedItem.mediaSrc}
                    alt={selectedItem.title}
                    fill
                    className="object-contain"
                  />
                )}
              </div>

              {/* Info & Action Buttons */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
                <div>
                  <h2 className="text-base sm:text-lg font-semibold text-white">
                    {selectedItem.title}
                  </h2>
                  <p className="text-xs text-zinc-400 mt-1 max-w-xl leading-relaxed">
                    {selectedItem.description}
                  </p>
                </div>

                <div className="flex items-center gap-2.5 w-full sm:w-auto shrink-0 justify-end">
                  <button
                    type="button"
                    onClick={() => setSelectedItem(null)}
                    className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-white/15 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white text-xs font-semibold transition-colors cursor-pointer text-center active:scale-95"
                  >
                    Close
                  </button>

                  <a
                    href={`https://wa.me/12672105793?text=Hi%20SeaGate%20Tech%2C%20I%20saw%20your%20showcase%20item%20"${encodeURIComponent(
                      selectedItem.title
                    )}"%20and%20want%20to%20inquire%20about%20a%20similar%20installation.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white text-black text-xs font-semibold hover:bg-zinc-200 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Inquire on WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Bottom Dispatch Card */}
      <div className="mt-16 rounded-2xl border border-white/[0.08] bg-[#0c0c0e] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-lg font-semibold text-white">
            Need a custom security or electrical setup?
          </h3>
          <p className="text-xs text-zinc-400">
            Our Collingdale, PA dispatch team provides free estimates and on-site consultations.
          </p>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <a
            href="tel:2672105793"
            className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-zinc-900 border border-white/[0.08] hover:border-white/20 text-xs font-medium text-white flex items-center justify-center gap-2 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            <span>(267) 210-5793</span>
          </a>

          <a
            href="https://wa.me/12672105793?text=Hi%20SeaGate%20Tech%2C%20I'd%20like%20to%20discuss%20a%20new%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-white text-black text-xs font-semibold hover:bg-zinc-200 flex items-center justify-center gap-1.5 transition-colors"
          >
            <span>Request Quote</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
