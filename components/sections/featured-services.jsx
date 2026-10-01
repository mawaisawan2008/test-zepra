import Link from "next/link";
import { ArrowUpRight, Bot, Code2, TrendingUp } from "lucide-react";

const serviceCards = [
  {
    number: "01",
    title: "Web & product engineering",
    category: "Web",
    description:
      "Fast, credible websites and digital products built to make complex offers easier to understand and act on.",
    points: ["Business websites", "Ecommerce experiences", "Custom platforms"],
    icon: Code2,
    href: "/website-development",
    tone: "text-sky-700 bg-sky-100 ring-sky-200",
  },
  {
    number: "02",
    title: "AI & workflow automation",
    category: "AI",
    description:
      "Practical assistants and connected workflows that reduce repetitive work and help teams respond sooner.",
    points: ["AI assistants", "Lead handling", "Operations workflows"],
    icon: Bot,
    href: "/services#ai-agents-bots",
    tone: "text-emerald-700 bg-emerald-100 ring-emerald-200",
  },
  {
    number: "03",
    title: "Growth systems",
    category: "Growth",
    description:
      "A stronger path from discovery to conversion, combining marketing, search visibility, and ongoing optimization.",
    points: ["Paid campaigns", "SEO / GEO / AEO", "Content and optimization"],
    icon: TrendingUp,
    href: "/social-media-marketing",
    tone: "text-blue-700 bg-blue-100 ring-blue-200",
  },
];

export function FeaturedServices() {
  return (
    <section id="featured-services" className="section-shell relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(ellipse_at_50%_0%,rgba(56,198,255,0.1),transparent_65%)]" />
      <div className="container">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="eyebrow">One connected delivery team</div>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
              The capabilities to move from idea to impact.
            </h2>
            <p className="muted-copy mt-4 max-w-xl">
              Bring the right mix of engineering, automation, and growth
              together around the work your business needs next.
            </p>
          </div>
          <Link
            href="/services"
            className="group inline-flex w-fit items-center gap-2 pb-1 text-sm font-semibold text-primary transition-colors hover:text-slate-950"
          >
            Explore all services
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3 lg:mt-12 lg:gap-5">
          {serviceCards.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.number}
                href={service.href}
                className="group rounded-[24px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4"
              >
                <article className="relative flex h-full min-h-[330px] flex-col overflow-hidden rounded-[24px] border border-slate-200/80 bg-white/75 p-6 shadow-[0_16px_50px_rgba(15,35,65,0.06)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-sky-200 hover:bg-white hover:shadow-[0_24px_60px_rgba(15,35,65,0.12)] sm:p-7">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold tabular-nums text-slate-400">
                      {service.number}
                    </span>
                    <span className={`flex h-11 w-11 items-center justify-center rounded-2xl ring-1 ${service.tone}`}>
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>
                  <div className="mt-8">
                    <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">
                      {service.category}
                    </span>
                    <h3 className="mt-2 font-display text-xl font-semibold leading-snug text-slate-950 sm:text-2xl">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {service.description}
                    </p>
                  </div>
                  <ul className="mt-auto flex flex-wrap gap-2 pt-6">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="pointer-events-none absolute bottom-6 right-6 text-slate-400 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}