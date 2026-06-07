import { jsx, jsxs } from "react/jsx-runtime";
import { Home, Building2, Sofa, Hammer, LayoutGrid, Wrench, Compass, Landmark, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
const services = [
  {
    icon: Home,
    title: "Residential Construction",
    desc: "Custom homes built to your lifestyle — from foundation to finishing touches."
  },
  {
    icon: Building2,
    title: "Commercial Construction",
    desc: "Offices, retail, and mixed-use projects delivered to commercial-grade standards."
  },
  {
    icon: Sofa,
    title: "Interior Designing",
    desc: "Bespoke interiors that balance elegance, function, and your personal taste."
  },
  {
    icon: Hammer,
    title: "Home Renovation",
    desc: "Transform existing spaces with modern upgrades and thoughtful remodeling."
  },
  {
    icon: LayoutGrid,
    title: "Tile Work & Flooring",
    desc: "Premium tile, marble, and flooring installation by skilled craftsmen."
  },
  {
    icon: Wrench,
    title: "Refurbishment Services",
    desc: "Restore and refresh commercial and residential properties end-to-end."
  },
  {
    icon: Compass,
    title: "Architectural Planning",
    desc: "Concept, design, and approvals handled by experienced architects."
  },
  {
    icon: Landmark,
    title: "Real Estate Development",
    desc: "Land acquisition, planning, and development of landmark properties."
  }
];
function ServiceGrid() {
  return /* @__PURE__ */ jsx("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: services.map(({ icon: Icon, title, desc }) => /* @__PURE__ */ jsxs(
    "div",
    {
      className: "group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant",
      children: [
        /* @__PURE__ */ jsx("div", { className: "mb-5 grid h-12 w-12 place-items-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground", children: /* @__PURE__ */ jsx(Icon, { size: 22 }) }),
        /* @__PURE__ */ jsx("h3", { className: "font-display text-lg font-semibold text-charcoal", children: title }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: desc }),
        /* @__PURE__ */ jsxs(
          Link,
          {
            to: "/services",
            className: "mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary",
            children: [
              "Learn more ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
            ]
          }
        )
      ]
    },
    title
  )) });
}
const steps = [
  { n: "01", title: "Consultation", desc: "Understanding your vision, budget, and timeline." },
  { n: "02", title: "Planning", desc: "Site evaluation, approvals, and detailed scheduling." },
  { n: "03", title: "Design", desc: "Architectural concepts and interior design proposals." },
  { n: "04", title: "Construction", desc: "Skilled execution with quality checks at every stage." },
  { n: "05", title: "Quality Inspection", desc: "Thorough audits before sign-off and handover." },
  { n: "06", title: "Handover", desc: "Walkthrough, documentation, and post-handover support." }
];
function ProcessTimeline() {
  return /* @__PURE__ */ jsx("div", { className: "grid gap-5 md:grid-cols-2 lg:grid-cols-3", children: steps.map((s) => /* @__PURE__ */ jsxs(
    "div",
    {
      className: "relative overflow-hidden rounded-2xl border border-border bg-background p-7 transition-all hover:-translate-y-1 hover:shadow-elegant",
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -right-3 -top-4 font-display text-7xl font-bold text-primary/10", children: s.n }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx("div", { className: "font-display text-2xl font-semibold text-primary", children: s.n }),
          /* @__PURE__ */ jsx("h3", { className: "mt-3 font-display text-lg font-semibold text-charcoal", children: s.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: s.desc })
        ] })
      ]
    },
    s.n
  )) });
}
export {
  ProcessTimeline as P,
  ServiceGrid as S
};
