import React from "react";

export function TestimonialCard({ testimonial, index }: { testimonial: any; index: number }) {
  return (
    <div
      className="group relative flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-[#0B0F17] p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10"
    >
      <div>
        {/* Header: Service Tag & Star Rating */}
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex items-center rounded-full border border-slate-700/60 bg-slate-800/80 px-3 py-1 text-xs font-medium text-cyan-400">
            {testimonial.service}
          </span>
          <div className="flex text-amber-400 text-sm">
            ★★★★★
          </div>
        </div>

        {/* Feedback Quote */}
        <p className="mt-4 text-sm leading-relaxed text-slate-300">
          "{testimonial.quote || testimonial.content}"
        </p>
      </div>

      {/* Footer: Client Info */}
      <div className="mt-6 flex items-center gap-3 border-t border-slate-800/60 pt-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-xs font-bold text-cyan-400 border border-slate-700">
          {testimonial.name ? testimonial.name.charAt(0) : "C"}
        </div>
        <div>
          <h4 className="text-xs font-semibold text-white">
            {testimonial.name || "Confidential client"}
          </h4>
          <p className="text-[11px] text-slate-400">
            {testimonial.role || testimonial.project}
          </p>
        </div>
      </div>
    </div>
  );
}