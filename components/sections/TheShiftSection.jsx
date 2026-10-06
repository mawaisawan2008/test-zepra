"use client";

import React, { useState } from 'react';
import { LayoutGrid, Bot, TrendingUp, Network } from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";

export function TheShiftSection() {
  const { t } = useLanguage();
  const content = t("home.deliverySystem");
  const [activeTab, setActiveTab] = useState("plan");

  const itemsList = Array.isArray(content?.items)
    ? content.items
    : [
        {
          icon: LayoutGrid,
          title: "Web platforms that convert",
          description: "Premium websites, ecommerce stores, and business systems designed to look credible and perform under real client pressure.",
        },
        {
          icon: Bot,
          title: "AI workflows with business value",
          description: "From bots to process automation, we build practical AI systems that improve response time, operations, and lead handling.",
        },
        {
          icon: TrendingUp,
          title: "Growth support beyond launch",
          description: "Marketing, SEO, content, support, and optimization keep your digital presence working after the build phase ends.",
        },
      ];

  return (
    <section className="py-6 sm:py-8 bg-[#070b12] text-white">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Main Card Container - Compact Padding */}
        <div className="rounded-2xl border border-slate-800/80 bg-[#0c121e]/90 p-4 sm:p-5 shadow-xl backdrop-blur-md">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800/60">
            <div>
              <span className="text-[10px] font-semibold tracking-widest uppercase text-slate-400">
                {content?.eyebrow || "ZEPRA DELIVERY SYSTEM"}
              </span>
              <h2 className="text-base sm:text-lg font-bold text-white mt-0.5">
                {content?.title || "From first brief to lasting growth"}
              </h2>
            </div>
            <div className="flex h-7 w-7 items-center justify-center rounded-md border border-slate-700/50 bg-slate-800/40 text-slate-300">
              <Network className="h-3.5 w-3.5" />
            </div>
          </div>

          {/* Tab Switcher - Compact Height */}
          <div className="grid grid-cols-3 gap-1 rounded-lg bg-[#070b14] p-1 mb-4 border border-slate-800/80">
            {["plan", "build", "improve"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-1 text-xs font-medium rounded-md transition-all capitalize ${
                  activeTab === tab
                    ? "bg-slate-800 text-white shadow-sm border border-slate-700/60"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Cards List - Reduced spacing & icons */}
          <div className="space-y-2.5">
            {itemsList.map((item, idx) => {
              const IconComponent = item.icon || LayoutGrid;
              return (
                <div 
                  key={idx}
                  className="group flex items-start gap-3 rounded-lg border border-slate-800/70 bg-[#090e18]/80 p-3 transition-all hover:border-slate-700 hover:bg-slate-800/20"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-slate-800/70 text-cyan-400 border border-slate-700/50 mt-0.5">
                    <IconComponent className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-semibold text-white leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

export default TheShiftSection;