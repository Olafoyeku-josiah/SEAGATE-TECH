"use client";

import { useState } from "react";
import { Phone, MapPin, Clock, ArrowUpRight, Check } from "lucide-react";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Door Access Control System",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMsg = `Hello SeaGate Tech!
- Name: ${formData.name}
- Phone: ${formData.phone}
- Service: ${formData.service}
- Message: ${formData.message}`;

    window.open(
      `https://wa.me/12672105793?text=${encodeURIComponent(whatsappMsg)}`,
      "_blank"
    );
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                HEADQUARTERS & DISPATCH
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Contact SeaGate Tech
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Connect with our certified field team for commercial security, electrical repairs, fire alarms, and LED signage.
              </p>
            </div>

            <div className="space-y-2.5 pt-2">
              <a
                href="tel:2672105793"
                className="flex items-center justify-between p-4 rounded-xl bg-[#0c0c0e] border border-white/[0.08] hover:border-white/20 transition-all"
              >
                <div>
                  <div className="text-[11px] font-mono text-zinc-400">PHONE & WHATSAPP</div>
                  <div className="text-sm font-semibold text-white mt-0.5">(267) 210-5793</div>
                </div>
                <span className="text-xs text-emerald-400 font-mono">24/7 Active</span>
              </a>

              <div className="p-4 rounded-xl bg-[#0c0c0e] border border-white/[0.08]">
                <div className="text-[11px] font-mono text-zinc-400">OFFICE ADDRESS</div>
                <div className="text-sm font-semibold text-white mt-0.5">1014 Spruce Street Av.</div>
                <div className="text-xs text-zinc-400">Collingdale, PA 19023</div>
              </div>

              <div className="p-4 rounded-xl bg-[#0c0c0e] border border-white/[0.08]">
                <div className="text-[11px] font-mono text-zinc-400">BUSINESS HOURS</div>
                <div className="text-sm font-semibold text-white mt-0.5">Mon – Sat: 8:00 AM – 8:00 PM</div>
                <div className="text-xs text-zinc-400">24/7 Emergency Dispatch Available</div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/[0.08] bg-[#0c0c0e] p-6 sm:p-8">
              <h3 className="text-base font-semibold text-white mb-1">
                Direct Message
              </h3>
              <p className="text-xs text-zinc-400 mb-5">
                Send an immediate inquiry to our local dispatch team.
              </p>

              {submitted ? (
                <div className="p-5 rounded-xl bg-zinc-900 border border-white/10 text-center space-y-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-4 h-4" />
                  </div>
                  <div className="text-sm font-semibold text-white">Message Transmitted</div>
                  <p className="text-xs text-zinc-400">
                    Your inquiry has been forwarded directly to our dispatch WhatsApp. We will reply shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-xs text-zinc-300 underline underline-offset-4"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono text-zinc-400 mb-1">
                        NAME
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full rounded-xl bg-zinc-900/70 border border-white/[0.08] px-3.5 py-2.5 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/20"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-zinc-400 mb-1">
                        PHONE
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(267) 000-0000"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full rounded-xl bg-zinc-900/70 border border-white/[0.08] px-3.5 py-2.5 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-zinc-400 mb-1">
                      SERVICE
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full rounded-xl bg-zinc-900/70 border border-white/[0.08] px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-white/20"
                    >
                      <option value="Door Access Control System">Door Access Control System</option>
                      <option value="Surveillance Camera Residential & Commercial">Surveillance Camera Residential & Commercial</option>
                      <option value="Firealarm System">Firealarm System</option>
                      <option value="Electricians Repair Service">Electricians Repair Service</option>
                      <option value="Interior Design Decoration For Home">Interior Design Decoration For Home</option>
                      <option value="Smart Home Appliances">Smart Home Appliances</option>
                      <option value="LED Signs Board For Advertisements">LED Signs Board For Advertisements</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-zinc-400 mb-1">
                      PROJECT DETAILS
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Describe your property or required services..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full rounded-xl bg-zinc-900/70 border border-white/[0.08] p-3 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/20"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Submit to SeaGate Tech</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
