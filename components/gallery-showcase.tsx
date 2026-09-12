"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X, ArrowUpRight } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  image: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    title: "Commercial PTZ & Multi-Feed Surveillance",
    subtitle: "High-resolution camera array & 24/7 security station",
    tag: "Surveillance CCTV",
    image: "/images/flyers/flyer-banner-cctv.jpg",
    description:
      "Enterprise Hikvision and multi-angle surveillance camera network with 24/7 real-time multi-screen monitoring console and mobile remote cloud view.",
  },
  {
    id: "g2",
    title: "SeaGate Tech Core Service Portfolio",
    subtitle: "Official Collingdale, PA certified installations",
    tag: "Certified Services",
    image: "/images/flyers/flyer-main-services.jpg",
    description:
      "From residential rewiring to commercial door access control, fire alarm systems, and high-impact digital LED billboards.",
  },
  {
    id: "g3",
    title: "Smart Access, Interior Living & Electrical Hub",
    subtitle: "Smart door locks, custom media walls & panel engineering",
    tag: "Smart Living & Electrical",
    image: "/images/flyers/flyer-collage-1.jpg",
    description:
      "Comprehensive installations including biometric fingerprint deadbolts, luxury living room entertainment walls, and smart kitchen automation.",
  },
  {
    id: "g4",
    title: "Industrial Panels & Outdoor LED Billboards",
    subtitle: "High-voltage cabinet diagnostics & billboard advertising",
    tag: "Commercial & Billboard",
    image: "/images/flyers/flyer-collage-2.jpg",
    description:
      "Large-scale commercial installations featuring industrial wiring, multi-camera pole mounts, and ultra-bright digital signage.",
  },
  {
    id: "g5",
    title: "On-Site Field Installation & Cable Diagnostics",
    subtitle: "Precision termination and verified connection testing",
    tag: "Field Work",
    image: "/images/gallery/work-1.jpeg",
    description:
      "Direct on-site field testing and certified electrical wiring carried out by SeaGate Tech master technicians.",
  },
  {
    id: "g6",
    title: "Custom Hardware & Component Assembly",
    subtitle: "High-grade components and precision mounting",
    tag: "Hardware Testing",
    image: "/images/gallery/work-2.jpeg",
    description:
      "Bench testing and verification of all smart home devices, access controllers, and surveillance transmitters prior to deployment.",
  },
];

export function GalleryShowcase() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-xl mb-10 space-y-2">
          <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
            PORTFOLIO & SHOWCASE
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Recent Deployments & Projects
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Authentic installation photography and field setups executed by the SeaGate Tech team throughout Pennsylvania.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="cursor-pointer rounded-2xl border border-white/[0.08] bg-[#0c0c0e] hover:border-white/20 overflow-hidden transition-all group"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-mono text-zinc-300 bg-black/70 backdrop-blur-md border border-white/10 px-2 py-0.5 rounded">
                    {item.tag}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-md bg-black/70 text-zinc-300">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="p-4 space-y-1">
                <h3 className="text-sm font-semibold text-white group-hover:text-zinc-200 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-400 line-clamp-1">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedItem && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="relative max-w-3xl w-full rounded-2xl bg-[#0c0c0e] border border-white/10 p-5 sm:p-6 shadow-2xl overflow-hidden"
              >
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 p-2 rounded-lg bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white transition-all z-10"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-black mb-4 border border-white/[0.06]">
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
                  <div>
                    <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                      {selectedItem.tag}
                    </span>
                    <h3 className="text-lg font-semibold text-white mt-0.5">
                      {selectedItem.title}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1 max-w-xl">
                      {selectedItem.description}
                    </p>
                  </div>

                  <a
                    href={`https://wa.me/12672105793?text=Hi%20SeaGate%20Tech%2C%20I%20saw%20your%20project%20${encodeURIComponent(
                      selectedItem.title
                    )}%20and%20want%20to%20get%20a%20quote.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-black text-xs font-semibold hover:bg-zinc-200 transition-colors"
                  >
                    <span>Inquire Setup</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
