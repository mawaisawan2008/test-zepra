import { Quote, Star, UserRound } from "lucide-react";

export function TestimonialCard({ testimonial, index }) {
  return (
    <article
      style={{ animationDelay: `${index * 90}ms` }}
      className="testimonial-reveal group relative flex min-h-[310px] flex-col overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 shadow-[0_16px_45px_rgba(0,0,0,0.2)] backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/15 motion-reduce:transition-none"
    >
      <Quote
        aria-hidden="true"
        className="pointer-events-none absolute right-5 top-5 h-16 w-16 rotate-12 text-cyan-100/[0.06] transition-transform duration-500 group-hover:rotate-0 group-hover:scale-110"
      />

      <div className="relative flex items-center justify-between gap-3">
        <span className="inline-flex max-w-[calc(100%_-_4rem)] items-center truncate rounded-full border border-cyan-400/20 bg-cyan-400/[0.08] px-3 py-1.5 text-[11px] font-semibold text-cyan-200 transition-colors duration-300 group-hover:border-cyan-300/40 group-hover:bg-cyan-300/[0.12]">
          {testimonial.service}
        </span>
        <div role="img" className="flex shrink-0 items-center gap-0.5 text-amber-300" aria-label="5 out of 5 stars">
          {Array.from({ length: 5 }, (_, starIndex) => (
            <Star
              key={starIndex}
              aria-hidden="true"
              className="h-3.5 w-3.5 fill-current transition-transform duration-300 group-hover:scale-110"
              style={{ transitionDelay: `${starIndex * 25}ms` }}
            />
          ))}
        </div>
      </div>

      <p className="relative mt-7 text-sm leading-6 text-slate-300">
        “{testimonial.quote}”
      </p>

      <div className="relative mt-auto flex items-center gap-3 border-t border-slate-800 pt-5">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-700 bg-slate-800 text-slate-300">
          <UserRound className="h-4 w-4" />
        </span>
        <div className="min-w-0">
          <div className="truncate text-sm font-semibold text-white">{testimonial.name}</div>
          <div className="mt-0.5 truncate text-xs text-slate-400">{testimonial.role}</div>
        </div>
      </div>
    </article>
  );
}
