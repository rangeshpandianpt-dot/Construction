import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { MapPin } from "lucide-react";
import { v as villa, r as residential, c as commercial, i as interior } from "./project-interior-in_zwwuq.js";
const projects = [
  { name: "The Lotus Villa", location: "Theni", category: "Villas", year: 2024, image: villa },
  { name: "Krishna Residency", location: "Madurai", category: "Residential", year: 2024, image: residential },
  { name: "Sapphire Business Park", location: "Theni", category: "Commercial", year: 2023, image: commercial },
  { name: "Aurelia Interior Suite", location: "Theni", category: "Interior", year: 2024, image: interior },
  { name: "Emerald Heights", location: "Bodinayakanur", category: "Residential", year: 2023, image: residential },
  { name: "Pearl Boutique Villa", location: "Theni", category: "Villas", year: 2022, image: villa }
];
const categories = ["All", "Villas", "Residential", "Commercial", "Interior"];
function ProjectsGrid({ limit, showFilter = false }) {
  const [active, setActive] = useState("All");
  const filtered = projects.filter((p) => active === "All" || p.category === active);
  const list = limit ? filtered.slice(0, limit) : filtered;
  return /* @__PURE__ */ jsxs("div", { children: [
    showFilter && /* @__PURE__ */ jsx("div", { className: "mb-8 flex flex-wrap justify-center gap-2", children: categories.map((c) => /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => setActive(c),
        className: `rounded-full border px-4 py-2 text-sm font-medium transition-colors ${active === c ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background text-charcoal/70 hover:border-primary/40 hover:text-primary"}`,
        children: c
      },
      c
    )) }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: list.map((p) => /* @__PURE__ */ jsxs(
      "article",
      {
        className: "group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-elegant",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "relative aspect-[4/3] overflow-hidden", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: p.image,
                alt: p.name,
                loading: "lazy",
                className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium uppercase tracking-wider text-charcoal backdrop-blur", children: p.category })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-5", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-3", children: [
              /* @__PURE__ */ jsx("h3", { className: "font-display text-lg font-semibold text-charcoal", children: p.name }),
              /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", children: p.year })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-2 flex items-center gap-1.5 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsx(MapPin, { size: 14, className: "text-primary" }),
              " ",
              p.location
            ] })
          ] })
        ]
      },
      p.name
    )) })
  ] });
}
export {
  ProjectsGrid as P
};
