"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AboutPrinciples() {
  const { t } = useLanguage();
  const content = t("about.principles");

  return (
    <section className="section-shell bg-white/50">
      <div className="container">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
          align="center"
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {content.items.map((item, index) => (
            <Card
              key={item.title}
              className={`card-shine border-slate-200/80 bg-white/90 ${index === 1 ? "lg:-translate-y-4" : ""}`}
            >
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-7 text-brand-slate">
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
    <section className="section-shell">
      <div className="container">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
          align="center"
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {content.lanes.map((lane, index) => (
            <Card
              key={lane.title}
              className={`card-shine border-slate-200/80 bg-white/90 ${index === 1 ? "xl:-translate-y-4" : ""}`}
            >
              <CardHeader>
                <CardTitle className="text-2xl">{lane.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-7 text-brand-slate">
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
    <section className="section-shell bg-white/50">
      <div className="container">
        <SectionHeading
          eyebrow={content.stepsEyebrow}
          title={content.stepsTitle}
          description={content.stepsDescription}
          align="center"
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {content.steps.map((step, index) => (
            <Card
              key={step.title}
              className={`card-shine border-slate-200/80 bg-white/90 ${index === 1 ? "lg:-translate-y-4" : ""}`}
            >
              <CardHeader>
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-7 text-brand-slate">
                {step.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}