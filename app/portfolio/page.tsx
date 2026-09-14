import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PortfolioClient } from "./portfolio-client";

export const metadata: Metadata = {
  title: "Portfolio & Video Showcase | SeaGate Tech",
  description:
    "Explore real-world commercial and residential security installations, live field demonstration videos, biometric access control systems, CCTV networks, and electrical panel engineering in Collingdale, PA.",
  openGraph: {
    title: "Portfolio & Video Showcase | SeaGate Tech",
    description:
      "Live field demonstration videos and verified commercial & residential installations in Collingdale, PA & Tri-State area.",
    images: ["/logo.png"],
  },
};

export default function PortfolioPage() {
  return (
    <div className="relative min-h-screen bg-black text-[#ededed] overflow-x-hidden selection:bg-white/20 selection:text-white">
      {/* Background Dot Grid */}
      <div className="fixed inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none -z-10 opacity-40" />

      {/* Navigation */}
      <Navbar />

      {/* Portfolio Content */}
      <main className="relative z-10 pt-28 pb-20">
        <PortfolioClient />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
