import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const servicesList = [
    "Door Access Control System",
    "Surveillance Camera Residential & Commercial",
    "Firealarm System",
    "Interior Design Decoration For Home",
    "Electricians Repair Service",
    "Smart Home Appliances",
    "LED Signs Board For Advertisements",
  ];

  return (
    <footer className="border-t border-white/[0.08] bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-white/[0.08]">
          {/* Brand */}
          <div className="lg:col-span-4 space-y-3">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative w-7 h-7 rounded-md overflow-hidden flex items-center justify-center p-0.5 group-hover:scale-105 transition-transform">
                <Image
                  src="/logo.png"
                  alt="SeaGate Tech Logo"
                  width={28}
                  height={28}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-sm font-semibold tracking-tight text-white">
                SeaGate Tech
              </span>
            </Link>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Comprehensive residential & commercial security systems, electrical engineering, fire safety, and digital LED billboards.
            </p>
            <div className="pt-1 text-xs text-zinc-400 font-mono space-y-1">
              <div>1014 Spruce Street Av., Collingdale, PA 19023</div>
              <div>Direct: (267) 210-5793</div>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-5 space-y-2.5">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
              SERVICES
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-zinc-400">
              {servicesList.map((service, index) => (
                <a
                  key={index}
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  {service}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Direct */}
          <div className="lg:col-span-3 space-y-2.5">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
              DISPATCH
            </div>
            <div className="space-y-2">
              <a
                href="tel:2672105793"
                className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-900 border border-white/[0.08] hover:border-white/20 text-xs text-zinc-200 transition-colors"
              >
                <span>Call 267-210-5793</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://wa.me/12672105793?text=Hi%20SeaGate%20Tech"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-900 border border-white/[0.08] hover:border-white/20 text-xs text-zinc-200 transition-colors"
              >
                <span>WhatsApp Desk</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div>
            © {currentYear} SeaGate Tech. Collingdale, PA.
          </div>
          <div className="flex items-center gap-4 text-zinc-400">
            <a href="#services" className="hover:text-white transition-colors">
              Services
            </a>
            <a href="#features" className="hover:text-white transition-colors">
              Features
            </a>
            <a href="#gallery" className="hover:text-white transition-colors">
              Portfolio
            </a>
            <a href="#quote" className="hover:text-white transition-colors">
              Estimator
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
