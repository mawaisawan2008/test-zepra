"use client";

import Link from "next/link";
import { ArrowRight, Building2, Compass, Lightbulb, ShieldCheck } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { aboutPillars } from "@/lib/site";
import { useLanguage } from "@/components/providers/language-provider";

export function AboutPreview({ showCta = true }) {
  const { t } = useLanguage();
  const pillars = t("about.pillars");
  const displayedPillars = aboutPillars.map(
    (pillar, index) => pillars?.[index] ?? pillar,
  );

  return (
    <section className="section-shell">
      <div className="container">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow={t("about.eyebrow")}
              title={t("about.title")}
              description={t("about.description")}
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="surface-panel p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Compass className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-slate-950">
                  {t("about.brandStory")}
                </h3>
                <p className="mt-3 text-sm leading-7 text-brand-slate">
                  {t("about.brandStoryText")}
                </p>
              </div>

              <div className="surface-panel p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-slate-950">
                  {t("about.missionDriven")}
                </h3>
                <p className="mt-3 text-sm leading-7 text-brand-slate">
                  {t("about.missionText")}
                </p>
              </div>
            </div>

            {showCta ? (
              <div className="mt-8">
                <Button asChild variant="outline" size="lg">
                  <Link href="/about">
                    {t("about.learnMore")}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ) : null}
          </div>

          <div className="grid gap-5">
            {displayedPillars.map((pillar, index) => (
              <Card
                key={pillar.title}
                className={`card-shine border-slate-200/80 bg-white/90 ${index === 1 ? "lg:translate-x-6" : ""}`}
              >
                <CardHeader className="flex-row items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-glow">
                    {index === 0 ? (
                      <Building2 className="h-5 w-5" />
                    ) : index === 1 ? (
                      <Lightbulb className="h-5 w-5" />
                    ) : (
                      <ShieldCheck className="h-5 w-5" />
                    )}
                  </div>
                  <div>
                    <CardTitle>{pillar.title}</CardTitle>
                    <CardContent className="px-0 pb-0 pt-3">
                      <p className="text-[15px] leading-7 text-brand-slate">
                        {pillar.description}
                      </p>
                    </CardContent>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
