import { Building2, Layers3, MapPin, Workflow } from "lucide-react";

import { companyStats } from "@/lib/site";

const metricIcons = [Layers3, Building2, Workflow, MapPin];

export function MetricsStrip() {
  return (
    <section
      aria-label="Zepra Tech at a glance"
      className="relative overflow-hidden bg-[#0B1220] py-8 text-white sm:py-10"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_12%_50%,rgba(18,119,255,0.18),transparent_38%),radial-gradient(ellipse_at_88%_50%,rgba(56,198,255,0.08),transparent_34%)]" />
      <div className="container relative">
        <div className="grid grid-cols-2 gap-x-5 gap-y-7 lg:grid-cols-4 lg:gap-8">
          {companyStats.map((stat, index) => {
            const Icon = metricIcons[index] || Layers3;

            return (
              <div
                key={stat.label}
                className="flex items-start gap-3 border-white/10 first:border-0 sm:gap-4 lg:border-l lg:pl-6 lg:first:border-l-0 lg:first:pl-0"
              >
                <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-200/15 bg-cyan-200/10 text-cyan-200">
                  <Icon className="h-4 w-4" />
                </span>
                <div>
                  <div className="font-display text-xl font-semibold leading-tight text-white sm:text-2xl">
                    {stat.value}
                  </div>
                  <p className="mt-1.5 max-w-[15rem] text-xs leading-5 text-slate-300 sm:text-sm sm:leading-6">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}