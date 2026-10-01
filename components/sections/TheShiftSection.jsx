import React from 'react';

export function TheShiftSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#E6F2FF] py-20 text-slate-900 sm:py-24">
      {/* Background Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-96 w-[min(90vw,1000px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.15),transparent_70%)] blur-[120px] animate-pulse motion-reduce:animate-none"
      />

      <div className="container relative mx-auto px-4">
        {/* Section Header */}
        <header className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-700/20 bg-white/80 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-800 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            The AI Revolution In Operations
          </div>
          <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Transforming Business Operations with AI + Data Science.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-700 sm:text-base">
            The shift to AI-native operations means moving away from slow, manual processes. We build custom AI automation, intelligent data pipelines, and bank-grade data security into your business—making it work faster, smarter, and scale effortlessly.
          </p>
        </header>

        {/* Legacy vs AI-Native Comparison Grid */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          
          {/* Card 1: Legacy Model */}
          <div className="relative flex flex-col justify-between rounded-2xl bg-gradient-to-b from-[#0e1f38] via-[#0b132b] to-[#060a17] border border-cyan-500/20 p-6 shadow-md backdrop-blur-sm sm:p-8">
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold tracking-wider text-slate-600 uppercase border border-slate-200">
                  Legacy Model
                </span>
                <span className="text-xs font-semibold text-rose-500">Slow &amp; Expensive</span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-slate-900">
                Traditional Manual Business Operations
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Standard operational setups relying on traditional human hours and fragmented tools.
              </p>

              <ul className="mt-6 space-y-4 text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600 text-xs font-bold">✕</span>
                  <span><strong>Manual &amp; Repetitive Tasks:</strong> Hours wasted every day on manual data entry, reporting, and routine tasks.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600 text-xs font-bold">✕</span>
                  <span><strong>Slow Response Times:</strong> Customer queries and lead follow-ups take hours or days to process.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600 text-xs font-bold">✕</span>
                  <span><strong>Human Errors &amp; Security Risks:</strong> Scattered client data without automated encryption or strict compliance.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600 text-xs font-bold">✕</span>
                  <span><strong>High Overhead Costs:</strong> Scaling operations requires constantly hiring more workforce and expanding payroll.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2: AI-Native Model (Signature Website Dark Gradient) */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-b from-[#0e1f38] via-[#0b132b] to-[#060a17] border border-cyan-500/20 p-6 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-cyan-400/60 hover:shadow-cyan-500/20 sm:p-8">
            {/* Ambient Lighting Corner Glow */}
            <div 
              aria-hidden="true" 
              className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-cyan-500/15 blur-3xl transition-all duration-300 group-hover:bg-cyan-400/25" 
            />

            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-xs font-bold tracking-wider text-cyan-300 uppercase shadow-inner">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  AI-Native Revolution
                </span>
                <span className="text-xs font-semibold text-cyan-400">Fast, Scalable &amp; Secure</span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-white">
                Intelligent AI + Data Science Operations
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Modern automated architecture designed to handle complex workflows with 24/7 reliability.
              </p>

              <ul className="mt-6 space-y-4 text-sm text-slate-200">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">✓</span>
                  <span><strong>24/7 AI Automation:</strong> Custom AI workflows execute repetitive tasks, document handling, and lead processing instantly.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">✓</span>
                  <span><strong>Data Science Intelligence:</strong> Live real-time dashboards analyze trends and provide predictive insights for growth.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">✓</span>
                  <span><strong>Enterprise Data Security:</strong> Bank-grade encryption and location-based compliance keeping client data 100% safe.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">✓</span>
                  <span><strong>10x Operational Leverage:</strong> Multiply business output and scale revenue without increasing overhead expenses.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* 3 Core AI Value Pillars Below */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          
          <div className="group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-b from-[#0e1f38] via-[#0b132b] to-[#060a17] p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/50 hover:shadow-cyan-500/15">
            <span className="inline-block rounded-lg bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300 border border-cyan-500/20">
              Automation
            </span>
            <h4 className="mt-4 text-base font-bold text-white">AI Workflow Transformation</h4>
            <p className="mt-2 text-xs leading-relaxed text-slate-300">
              We replace time-consuming manual work with smart AI pipelines that work continuously without human intervention or delay.
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-b from-[#0e1f38] via-[#0b132b] to-[#060a17] p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/50 hover:shadow-cyan-500/15">
            <span className="inline-block rounded-lg bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300 border border-cyan-500/20">
              Data Science
            </span>
            <h4 className="mt-4 text-base font-bold text-white">Predictive Growth Insights</h4>
            <p className="mt-2 text-xs leading-relaxed text-slate-300">
              We structure your raw business data into clear, real-time analytics that guide executive decisions and eliminate guesswork.
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-b from-[#0e1f38] via-[#0b132b] to-[#060a17] p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/50 hover:shadow-cyan-500/15 sm:col-span-2 lg:col-span-1">
            <span className="inline-block rounded-lg bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300 border border-cyan-500/20">
              Data Security
            </span>
            <h4 className="mt-4 text-base font-bold text-white">Bank-Grade Compliance</h4>
            <p className="mt-2 text-xs leading-relaxed text-slate-300">
              Your proprietary business data remains completely isolated and protected with encrypted AI pipelines and regulatory standards.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

// Default export included to prevent default import mismatch errors
export default TheShiftSection;