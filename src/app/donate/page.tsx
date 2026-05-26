"use client";

import { useState } from "react";
import { Heart, Shield, RefreshCw } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

const presets = [25, 50, 100, 250, 500];

const allocations = [
  { amount: 25, impact: "Provides school supplies for one child for a full year" },
  { amount: 50, impact: "Funds clean water testing for an entire village" },
  { amount: 100, impact: "Sponsors one month of teacher training" },
  { amount: 250, impact: "Covers vocational training for one woman" },
  { amount: 500, impact: "Contributes significantly toward drilling a clean water well" },
];

export default function DonatePage() {
  const [amount, setAmount] = useState(100);
  const [custom, setCustom] = useState("");
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");

  const selectedAmount = custom ? Number(custom) : amount;
  const impact = allocations.findLast((a) => a.amount <= selectedAmount);

  return (
    <>
      <section className="bg-[#0a0a0a] pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>Give Today</SectionLabel>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-none mb-4">
            UNLOCK
            <br />
            <span className="text-[#C9A84C]">POTENTIAL.</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-xl">
            Your donation directly funds education, clean water, and community empowerment.
          </p>
        </div>
      </section>

      <section className="bg-[#F5F0E8] py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="border border-[#C9A84C]/30 bg-white p-8 md:p-12">
            {/* Frequency toggle */}
            <div className="flex gap-0 mb-8 border border-[#C9A84C]/30 overflow-hidden">
              {(["once", "monthly"] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFrequency(f)}
                  className={`flex-1 py-3 text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 transition-colors ${
                    frequency === f
                      ? "bg-[#C9A84C] text-[#0a0a0a]"
                      : "bg-white text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  {f === "monthly" && <RefreshCw size={12} />}
                  {f === "once" ? "Give Once" : "Give Monthly"}
                </button>
              ))}
            </div>

            {/* Amount presets */}
            <div className="mb-6">
              <label className="block text-xs text-gray-500 tracking-widest uppercase mb-3">Select Amount (USD)</label>
              <div className="grid grid-cols-5 gap-2 mb-3">
                {presets.map((p) => (
                  <button
                    key={p}
                    onClick={() => { setAmount(p); setCustom(""); }}
                    className={`py-3 text-sm font-bold border transition-colors ${
                      !custom && amount === p
                        ? "border-[#C9A84C] bg-[#C9A84C] text-[#0a0a0a]"
                        : "border-gray-200 text-gray-600 hover:border-[#C9A84C]"
                    }`}
                  >
                    ${p}
                  </button>
                ))}
              </div>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                <input
                  type="number"
                  value={custom}
                  onChange={(e) => setCustom(e.target.value)}
                  placeholder="Custom amount"
                  className="w-full border border-gray-200 pl-8 pr-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] text-[#0a0a0a]"
                />
              </div>
            </div>

            {/* Impact callout */}
            {impact && (
              <div className="bg-[#F5F0E8] border-l-2 border-[#C9A84C] px-5 py-4 mb-8">
                <p className="text-xs text-gray-500 tracking-widest uppercase mb-1">Your Impact</p>
                <p className="text-[#0a0a0a] text-sm font-medium">{impact.impact}</p>
              </div>
            )}

            {/* Donor info */}
            <div className="space-y-4 mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-500 tracking-widest uppercase mb-2">First Name</label>
                  <input className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] text-[#0a0a0a]" />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 tracking-widest uppercase mb-2">Last Name</label>
                  <input className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] text-[#0a0a0a]" />
                </div>
              </div>
              <div>
                <label className="block text-xs text-gray-500 tracking-widest uppercase mb-2">Email</label>
                <input type="email" className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] text-[#0a0a0a]" />
              </div>
            </div>

            <Button
              href={`/api/donate?amount=${selectedAmount * 100}&frequency=${frequency}`}
              variant="gold"
              size="lg"
              className="w-full justify-center"
              withArrow
            >
              <Heart size={14} fill="currentColor" />
              Donate ${selectedAmount} {frequency === "monthly" ? "/ month" : ""}
            </Button>

            {/* Trust badges */}
            <div className="mt-6 flex items-center justify-center gap-6 text-xs text-gray-400">
              <div className="flex items-center gap-1.5">
                <Shield size={12} className="text-[#C9A84C]" />
                Secure Payment
              </div>
              <div className="flex items-center gap-1.5">
                <Heart size={12} className="text-[#C9A84C]" />
                Tax Deductible
              </div>
              <div className="flex items-center gap-1.5">
                <RefreshCw size={12} className="text-[#C9A84C]" />
                Cancel Anytime
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
