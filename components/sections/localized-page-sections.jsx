"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AboutPrinciples() {
  const { t } = useLanguage();
  const content = t("about.principles");

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#E6F2FF] via-[#0b132b] to-[#040711] pt-8 pb-20 text-white">
      {/* Background Soft Glow Orb */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-96 w-[min(90vw,1000px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.15),transparent_70%)] blur-[130px] animate-pulse"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Top Heading on Light background */}
        <div className="pb-8">
          <SectionHeading
            eyebrow={content?.eyebrow}
            title={content?.title}
            description={content?.description}
            align="center"
            className="[&_h2]:text-slate-900 [&_p]:text-slate-700"
          />
        </div>

        {/* Cards Grid inside Dark transition area */}
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {content?.items?.map((item, index) => (
            <Card
              key={item.title || index}
              className={`group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-b from-[#0e1f38]/90 via-[#0b132b]/95 to-[#060a17]/90 p-2 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/60 hover:shadow-2xl hover:shadow-cyan-500/15 ${
                index === 1 ? "lg:-translate-y-3" : ""
              }`}
            >
              <div 
                aria-hidden="true" 
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/10 blur-2xl transition-all duration-300 group-hover:bg-cyan-400/20" 
              />
              <CardHeader className="p-5 pb-2">
                <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10 text-xs font-bold text-cyan-400 border border-cyan-500/20">
                  0{index + 1}
                </div>
                <CardTitle className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-5 pt-0 text-sm leading-relaxed text-slate-300">
                {item.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceLanes() {
  const { t } = useLanguage();
  const content = t("servicePage");

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#040711] via-[#0b132b] to-[#0e1f38] py-16 lg:py-24 text-white">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <SectionHeading
          eyebrow={content?.eyebrow}
          title={content?.title}
          description={content?.description}
          align="center"
          className="[&_h2]:text-white [&_p]:text-slate-300"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {content?.lanes?.map((lane, index) => (
            <Card
              key={lane.title || index}
              className={`group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-b from-[#0e1f38]/90 via-[#0b132b]/95 to-[#060a17]/90 p-2 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/60 hover:shadow-2xl hover:shadow-cyan-500/15 ${
                index === 1 ? "xl:-translate-y-3" : ""
              }`}
            >
              <CardHeader className="p-5 pb-2">
                <CardTitle className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
                  {lane.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-5 pt-0 text-sm leading-relaxed text-slate-300">
                {lane.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactNextSteps() {
  const { t } = useLanguage();
  const content = t("contactPage");

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0e1f38] via-[#0b132b] to-[#060a17] py-16 lg:py-24 text-white">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <SectionHeading
          eyebrow={content?.stepsEyebrow}
          title={content?.stepsTitle}
          description={content?.stepsDescription}
          align="center"
          className="[&_h2]:text-white [&_p]:text-slate-300"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {content?.steps?.map((step, index) => (
            <Card
              key={step.title || index}
              className={`group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-b from-[#0e1f38]/90 via-[#0b132b]/95 to-[#060a17]/90 p-2 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/60 hover:shadow-2xl hover:shadow-cyan-500/15 ${
                index === 1 ? "lg:-translate-y-3" : ""
              }`}
            >
              <CardHeader className="p-5 pb-2">
                <CardTitle className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-5 pt-0 text-sm leading-relaxed text-slate-300">
                {step.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}