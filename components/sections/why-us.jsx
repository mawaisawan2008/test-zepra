import Link from "next/link";
import {
  ArrowRight,
  Award,
  Building2,
  Globe2,
  Landmark,
  Layers3,
  LockKeyhole,
  MessagesSquare,
  ShoppingBag,
  TrendingUp,
} from "lucide-react";

const accreditations = [
  { label: "ISO Certified (Quality Standards)", icon: Award },
  { label: "FBR Approved (Pakistan)", icon: Landmark },
  { label: "Registered LLC (United States)", icon: Building2 },
];

const metrics = [
  { value: "50+", label: "Projects Delivered", icon: Layers3 },
  { value: "30+", label: "Websites Launched", icon: Globe2 },
  { value: "20+", label: "E-Commerce Stores Scaled", icon: ShoppingBag },
  { value: "PK + Global", label: "Built for Pakistan & International Clients", icon: Globe2 },
];

const pillars = [
  {
    title: "Unified Delivery Stack",
    description:
      "Websites, Shopify e-commerce, AI automation, and graphic design under one roof.",
    icon: Layers3,
  },
  {
    title: "Secure & Scalable Infrastructure",
    description:
      "ISO-compliant security, robust performance, and zero downtime, built to support your business as it grows.",
    icon: LockKeyhole,
  },
  {
    title: "Growth-Focused Execution",
    description:
      "Digital marketing, conversion rate optimization, and revenue-driven performance focused on measurable progress.",
    icon: TrendingUp,
  },
  {
    title: "Dedicated Client Partnership",
    description:
      "Direct developer communication, fast sprint cycles, and 24/7 support keep your team moving with confidence.",
    icon: MessagesSquare,
  },
];

export function WhyUs() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#070c18] via-[#0b132b] to-[#0e1f38] py-20 text-white sm:py-24">
      <div className="pointer-events-none absolute -left-32 top-0 -z-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-36 -z-10 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="container relative">
        <header className="flex flex-col gap-7 border-b border-white/10 pb-9 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/[0.08] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
              WHY CHOOSE US
            </div>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              Built for trust, speed, and real business outcomes.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              Proven engineering and digital execution designed to scale your
              revenue worldwide.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {accreditations.map((accreditation) => {
                const Icon = accreditation.icon;

                return (
                  <span
                    key={accreditation.label}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1.5 text-xs font-medium text-slate-300 backdrop-blur-md"
                  >
                    <Icon className="h-3.5 w-3.5 text-cyan-300" />
                    {accreditation.label}
                  </span>
                );
              })}
            </div>
          </div>

          <Link
            href="/#contact"
            className="group inline-flex w-fit shrink-0 items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_0_0_rgba(34,211,238,0)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-cyan-300/[0.09] hover:shadow-[0_0_30px_rgba(34,211,238,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 motion-reduce:transition-none"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Let&apos;s chat
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transition-none" />
          </Link>
        </header>

        <div className="grid grid-cols-2 gap-x-5 gap-y-6 border-b border-white/10 py-8 md:grid-cols-4 md:gap-0 md:py-9">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;

            return (
              <div
                key={metric.label}
                className={`flex items-start gap-3 md:px-5 ${index > 0 ? "md:border-l md:border-white/10" : "md:pl-0"}`}
              >
                <Icon className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />
                <div>
                  <div className="font-display text-2xl font-semibold leading-none text-white sm:text-3xl">
                    {metric.value}
                  </div>
                  <p className="mt-2 max-w-[14rem] text-xs leading-5 text-slate-400 sm:text-sm">
                    {metric.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid gap-4 pt-8 sm:grid-cols-2 xl:grid-cols-4">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <article
                key={pillar.title}
                className="group min-h-[230px] rounded-3xl bg-white/90 backdrop-blur-md border border-slate-200/80 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:bg-white/90 hover:shadow-[0_20px_50px_rgba(6,182,212,0.1)] motion-reduce:transition-none"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.09] text-cyan-300 transition-colors duration-300 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/[0.14]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-semibold tabular-nums text-slate-600">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-7 font-display text-lg font-semibold leading-snug text-white">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {pillar.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
