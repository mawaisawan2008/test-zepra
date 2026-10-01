export function LegalPage({ title, intro, sections = [] }) {
  return (
    <section className="section-shell pt-16">
      <div className="container">
        <div className="surface-panel mx-auto max-w-4xl px-6 py-12 sm:px-10 lg:py-16">
          <h1 className="font-display text-4xl font-semibold text-slate-950 sm:text-5xl">
            {title}
          </h1>
          <p className="muted-copy mt-4">Last updated: [add date]</p>
          <p className="muted-copy mt-6 max-w-3xl">{intro}</p>

          <div className="mt-10 space-y-8">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-display text-xl font-semibold text-slate-950">
                  {section.heading}
                </h2>
                <p className="muted-copy mt-2 max-w-3xl">{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
