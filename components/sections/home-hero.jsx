import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  Globe2,
  Layers3,
  Sparkles,
  Workflow,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { heroHighlights } from "@/lib/site";

const capabilities = [
  "Web platforms",
  "AI automation",
  "Ecommerce",
  "Search growth",
  "Paid media",
  "Product design",
];

const highlightIcons = [Layers3, Bot, Sparkles];

export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden pb-14 pt-12 sm:pb-16 sm:pt-16 lg:pb-20 lg:pt-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_12%_8%,rgba(56,198,255,0.18),transparent_28%),radial-gradient(ellipse_at_88%_20%,rgba(18,119,255,0.14),transparent_30%),linear-gradient(180deg,rgba(239,247,255,0.7),rgba(248,251,255,0)_75%)]" />

      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
          <div className="max-w-2xl">
            <div className="eyebrow animate-slide-up">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
              Digital delivery, built around outcomes
            </div>

            <h1 className="mt-6 text-balance font-display text-[2.65rem] font-semibold leading-[1.04] text-slate-950 sm:text-6xl lg:text-[4.35rem]">
              Build digital systems that move your business{" "}
              <span className="headline-gradient">forward.</span>
            </h1>
            <p className="muted-copy mt-6 max-w-xl text-base sm:text-lg">
              Strategy, engineering, AI, and growth expertise in one accountable
              team, helping ambitious businesses turn digital complexity into
              measurable progress.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="xl">
                <Link href="/contact">
                  Talk through your project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="xl" variant="outline">
                <Link href="/services">
                  Explore capabilities
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-medium text-slate-600">
              <span className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-600" />
                Clear ownership
              </span>
              <span className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-600" />
                Built to scale
              </span>
              <span className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-600" />
                One delivery partner
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[620px] lg:ml-auto">
            <div className="absolute -inset-8 -z-10 rounded-full bg-sky-300/25 blur-3xl" />
            <div className="relative overflow-hidden rounded-[28px] border border-slate-700/70 bg-[#0B1220] p-5 text-white shadow-[0_32px_90px_rgba(15,35,65,0.28)] sm:p-7">
              <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_86%_0%,rgba(18,119,255,0.28),transparent_38%),radial-gradient(circle_at_0%_100%,rgba(56,198,255,0.12),transparent_42%)]" />
              <div className="relative">
                <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                      Zepra delivery system
                    </div>
                    <h2 className="mt-2 font-display text-lg font-semibold sm:text-xl">
                      From first brief to lasting growth
                    </h2>
                  </div>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                    <Workflow className="h-5 w-5" />
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-2 rounded-2xl border border-white/10 bg-white/[0.04] p-2 text-center text-[11px] font-semibold text-slate-400 sm:gap-3 sm:p-3 sm:text-xs">
                  <span className="rounded-xl bg-blue-500/15 px-2 py-2.5 text-blue-200">Plan</span>
                  <span className="rounded-xl bg-white/[0.04] px-2 py-2.5">Build</span>
                  <span className="rounded-xl bg-white/[0.04] px-2 py-2.5">Improve</span>
                </div>

                <div className="mt-4 grid gap-3">
                  {heroHighlights.map((item, index) => {
                    const Icon = highlightIcons[index] || Globe2;

                    return (
                      <article
                        key={item.title}
                        className={`hero-highlight rounded-2xl border border-white/10 bg-white/[0.055] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-200/30 hover:bg-white/[0.09] sm:p-5 ${index === 1 ? "hero-highlight-delay" : index === 2 ? "hero-highlight-delay-long" : ""}`}
                      >
                        <div className="flex items-start gap-3.5">
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-200/10 bg-cyan-300/10 text-cyan-200">
                            <Icon className="h-5 w-5" />
                          </span>
                          <div>
                            <h3 className="text-sm font-semibold text-white sm:text-base">
                              {item.title}
                            </h3>
                            <p className="mt-1.5 text-xs leading-5 text-slate-300 sm:text-sm sm:leading-6">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>

                <div className="mt-4 flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3">
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40 motion-reduce:animate-none" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    </span>
                    <span className="text-xs font-medium text-slate-300 sm:text-sm">
                      A connected team, accountable delivery
                    </span>
                  </div>
                  <Sparkles className="h-4 w-4 shrink-0 text-cyan-200" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="capability-marquee mt-14 w-full border-y border-slate-200/70 bg-white/60 py-4 sm:mt-16">
        <div className="w-full overflow-hidden">
          <div className="capability-marquee-track flex w-max items-center">
            {[0, 1, 2].map((copy) => (
              <div
                key={copy}
                aria-hidden={copy > 0 ? "true" : undefined}
                className="flex shrink-0 items-center gap-3 pr-3"
              >
                {capabilities.map((capability) => (
                  <span
                    key={`${copy}-${capability}`}
                    className="inline-flex shrink-0 items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
                    {capability}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}