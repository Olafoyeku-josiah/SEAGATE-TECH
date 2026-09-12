import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ServicesSection } from "@/components/services-section";
import { FeaturesGrid } from "@/components/features-grid";
import { GalleryShowcase } from "@/components/gallery-showcase";
import { QuoteCalculator } from "@/components/quote-calculator";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { Phone, MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-[#ededed] overflow-x-hidden selection:bg-white/20 selection:text-white">
      {/* Background Dot Grid */}
      <div className="fixed inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none -z-10 opacity-40" />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        <Hero />
        <ServicesSection />
        <FeaturesGrid />
        <GalleryShowcase />
        <QuoteCalculator />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Minimalist Contact Pill */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
        <a
          href="https://wa.me/12672105793?text=Hi%20SeaGate%20Tech%2C%20I'd%20like%20to%20request%20information."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white text-black text-xs font-semibold hover:bg-zinc-200 transition-all shadow-lg"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        <a
          href="tel:2672105793"
          aria-label="Call SeaGate Tech"
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-zinc-900 border border-white/[0.08] hover:border-white/20 text-white text-xs font-medium transition-all shadow-lg"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>267-210-5793</span>
        </a>
      </div>
    </div>
  );
}
