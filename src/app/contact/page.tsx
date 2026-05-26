"use client";

import type { Metadata } from "next";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

const contactInfo = [
  { icon: Mail, label: "Email", value: "info@sacredciphermission.org" },
  { icon: Phone, label: "Phone", value: "+1 (555) 000-0000" },
  { icon: MapPin, label: "Reach", value: "15 Countries & Growing" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <>
      <section className="bg-[#0a0a0a] pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>Reach Out</SectionLabel>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-none">
            CONTACT
            <br />
            <span className="text-[#C9A84C]">US.</span>
          </h1>
        </div>
      </section>

      <section className="bg-[#F5F0E8] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <h2 className="text-3xl font-bold text-[#0a0a0a] mb-6">Let&apos;s Talk</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-10">
              Whether you want to donate, volunteer, partner, or simply learn more about our work —
              we&apos;d love to hear from you. Every conversation is a step toward impact.
            </p>
            <div className="space-y-6">
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-[#C9A84C]/40 flex items-center justify-center">
                    <Icon size={16} className="text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 tracking-widest uppercase">{label}</p>
                    <p className="text-[#0a0a0a] font-semibold text-sm">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 border border-[#C9A84C]/30">
                <div className="text-[#C9A84C] text-5xl mb-4">✓</div>
                <h3 className="text-2xl font-bold text-[#0a0a0a] mb-2">Message Sent!</h3>
                <p className="text-gray-500 text-sm">We&apos;ll get back to you within 24–48 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-500 tracking-widest uppercase mb-2">First Name</label>
                    <input required className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] text-[#0a0a0a]" />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 tracking-widest uppercase mb-2">Last Name</label>
                    <input required className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] text-[#0a0a0a]" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-gray-500 tracking-widest uppercase mb-2">Email</label>
                  <input required type="email" className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] text-[#0a0a0a]" />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 tracking-widest uppercase mb-2">Subject</label>
                  <select className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] text-[#0a0a0a]">
                    <option>General Inquiry</option>
                    <option value="volunteer">Volunteer</option>
                    <option value="partner">Partnership</option>
                    <option value="corporate">Corporate Giving</option>
                    <option>Media / Press</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-gray-500 tracking-widest uppercase mb-2">Message</label>
                  <textarea required rows={5} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] text-[#0a0a0a] resize-none" />
                </div>
                <Button type="submit" variant="gold" size="lg" disabled={loading} className="w-full justify-center">
                  <Send size={14} />
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
