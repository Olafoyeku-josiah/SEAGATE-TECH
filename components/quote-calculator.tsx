"use client";

import { useState } from "react";
import { Check, ArrowRight, Phone } from "lucide-react";

export function QuoteCalculator() {
  const [selectedService, setSelectedService] = useState("Surveillance Camera Residential & Commercial");
  const [propertyType, setPropertyType] = useState("Residential");
  const [urgency, setUrgency] = useState("Standard (Within 1-2 weeks)");
  const [details, setDetails] = useState("");

  const serviceOptions = [
    "Surveillance Camera Residential & Commercial",
    "Door Access Control System",
    "Firealarm System",
    "Electricians Repair Service",
    "Interior Design Decoration For Home",
    "Smart Home Appliances",
    "LED Signs Board For Advertisements",
  ];

  const propertyTypes = ["Residential", "Commercial"];

  const urgencyOptions = [
    "Emergency / Urgent",
    "Standard (1-2 weeks)",
    "Planning Stage",
  ];

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello SeaGate Tech! I would like to request an estimate:
- Service: ${selectedService}
- Property: ${propertyType}
- Urgency: ${urgency}
${details ? `- Details: ${details}` : ""}
- Address/Area: Collingdale, PA & Tri-State`;

    window.open(`https://wa.me/12672105793?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="quote" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center space-y-2 mb-10">
          <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
            ESTIMATOR
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Instant Project Inquiry
          </h2>
          <p className="text-sm text-zinc-400 max-w-lg mx-auto">
            Configure your property requirements to generate an instant estimate via WhatsApp or phone.
          </p>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-white/[0.08] bg-[#0c0c0e] p-6 sm:p-8">
          <form onSubmit={handleWhatsAppSend} className="space-y-6">
            {/* 1. Service Selection */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2.5">
                1. Select Service
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {serviceOptions.map((srv) => (
                  <button
                    type="button"
                    key={srv}
                    onClick={() => setSelectedService(srv)}
                    className={`p-3 text-left rounded-xl text-xs font-medium border transition-all flex items-center justify-between ${
                      selectedService === srv
                        ? "bg-zinc-800 border-white/20 text-white"
                        : "bg-zinc-900/60 border-white/[0.06] text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900"
                    }`}
                  >
                    <span>{srv}</span>
                    {selectedService === srv && (
                      <Check className="w-3.5 h-3.5 text-white shrink-0 ml-2" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Property & 3. Urgency */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2.5">
                  2. Property Type
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {propertyTypes.map((pt) => (
                    <button
                      type="button"
                      key={pt}
                      onClick={() => setPropertyType(pt)}
                      className={`p-2.5 text-center rounded-xl text-xs font-medium border transition-all ${
                        propertyType === pt
                          ? "bg-zinc-800 border-white/20 text-white"
                          : "bg-zinc-900/60 border-white/[0.06] text-zinc-400 hover:text-zinc-200"
                      }`}
                    >
                      {pt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2.5">
                  3. Timeline
                </label>
                <div className="grid grid-cols-3 gap-1.5">
                  {urgencyOptions.map((urg) => (
                    <button
                      type="button"
                      key={urg}
                      onClick={() => setUrgency(urg)}
                      className={`p-2.5 text-center rounded-xl text-[11px] font-medium border transition-all ${
                        urgency === urg
                          ? "bg-zinc-800 border-white/20 text-white"
                          : "bg-zinc-900/60 border-white/[0.06] text-zinc-400 hover:text-zinc-200"
                      }`}
                    >
                      {urg.split(" ")[0]}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 4. Notes */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                4. Scope or Location Details (Optional)
              </label>
              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                rows={3}
                placeholder="E.g., 6 outdoor cameras, 2 door access terminals, Collingdale PA..."
                className="w-full rounded-xl bg-zinc-900/60 border border-white/[0.08] p-3 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/20 transition-colors"
              />
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="submit"
                className="w-full sm:flex-1 py-3 px-5 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
              >
                <span>Dispatch via WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href="tel:2672105793"
                className="w-full sm:w-auto py-3 px-5 rounded-xl bg-zinc-900 border border-white/[0.08] hover:border-white/20 text-zinc-300 hover:text-white text-xs font-medium transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>Call (267) 210-5793</span>
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
