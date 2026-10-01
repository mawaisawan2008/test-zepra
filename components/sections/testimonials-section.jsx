import React from 'react';
import { testimonials } from "@/lib/site";

export function TestimonialCard({ testimonial, index }) {
  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-b from-[#0e1f38] via-[#0b132b] to-[#060a17] p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/15">
      {/* Top Left Subtle Ambient Glow Effect (Matches Hero Card Lighting) */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/10 blur-2xl transition-all duration-300 group-hover:bg-cyan-400/20" 
      />

      <div className="relative z-10">
        {/* Header: Service Tag & Star Rating */}
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300 shadow-inner">
            {testimonial?.service || testimonial?.tag || "Service"}
          </span>
          <div className="flex text-amber-400 text-sm tracking-widest">
            ★★★★★
          </div>
        </div>

        {/* Feedback Quote */}
        <p className="mt-4 text-sm leading-relaxed text-slate-200 font-normal">
          "{testimonial?.quote || testimonial?.content || testimonial?.text}"
        </p>
      </div>

      {/* Footer: Client Info */}
      <div className="relative z-10 mt-6 flex items-center gap-3 border-t border-slate-800/80 pt-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500/10 text-xs font-bold text-cyan-300 border border-cyan-500/30">
          {testimonial?.name ? testimonial.name.charAt(0) : "C"}
        </div>
        <div>
          <h4 className="text-xs font-semibold text-white">
            {testimonial?.name || "Confidential client"}
          </h4>
          <p className="text-[11px] text-slate-400">
            {testimonial?.role || testimonial?.project || testimonial?.service}
          </p>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#E6F2FF] py-8 text-slate-900 sm:py-12">
      {/* Background Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-16 -z-10 h-80 w-[min(80vw,900px)] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.18),transparent_68%)] blur-[120px] animate-pulse motion-reduce:animate-none"
      />
      <div className="container relative mx-auto px-4">
        <header className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-700/20 bg-white/75 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-800 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Client trust &amp; reviews
          </div>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            What our global clients say about us.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-700 sm:text-base">
            Real testimonials from enterprises, startups, and brands across web,
            AI, e-commerce, and growth marketing.
          </p>
        </header>

        {/* 9 Testimonial Cards Grid */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {testimonials && testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.service || index}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}