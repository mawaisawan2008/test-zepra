"use client";

import { useLanguage } from "@/components/providers/language-provider";

export function LegalPage({ title, intro, sections = [] }) {
  const { t } = useLanguage();
  const content = t("legal.pages." + title.replaceAll(" ", ""));
  const pageTitle = content?.title ?? title;
  const pageIntro = content?.intro ?? intro;
  const pageSections = content?.sections ?? sections;

  return (
    <section className="section-shell pt-16 w-full overflow-x-hidden">
      <div className="container">
        <div className="surface-panel mx-auto max-w-4xl 2xl:max-w-5xl 3xl:max-w-6xl px-6 py-12 sm:px-10 lg:py-16">
          <h1 className="font-display text-4xl font-semibold text-slate-950 sm:text-5xl">
            {pageTitle}
          </h1>
          <p className="muted-copy mt-4">{t("legal.lastUpdated")}</p>
          <p className="muted-copy mt-6 max-w-3xl 2xl:max-w-4xl">{pageIntro}</p>

          <div className="mt-10 space-y-8">
            {pageSections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-display text-xl font-semibold text-slate-950">
                  {section.heading}
                </h2>
                <p className="muted-copy mt-2 max-w-3xl 2xl:max-w-4xl">{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
