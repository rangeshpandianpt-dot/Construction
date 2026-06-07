const steps = [
  { n: "01", title: "Consultation", desc: "Understanding your vision, budget, and timeline." },
  { n: "02", title: "Planning", desc: "Site evaluation, approvals, and detailed scheduling." },
  { n: "03", title: "Design", desc: "Architectural concepts and interior design proposals." },
  { n: "04", title: "Construction", desc: "Skilled execution with quality checks at every stage." },
  { n: "05", title: "Quality Inspection", desc: "Thorough audits before sign-off and handover." },
  { n: "06", title: "Handover", desc: "Walkthrough, documentation, and post-handover support." },
];

export function ProcessTimeline() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {steps.map((s) => (
        <div
          key={s.n}
          className="relative overflow-hidden rounded-2xl border border-border bg-background p-7 transition-all hover:-translate-y-1 hover:shadow-elegant"
        >
          <div className="absolute -right-3 -top-4 font-display text-7xl font-bold text-primary/10">
            {s.n}
          </div>
          <div className="relative">
            <div className="font-display text-2xl font-semibold text-primary">{s.n}</div>
            <h3 className="mt-3 font-display text-lg font-semibold text-charcoal">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
