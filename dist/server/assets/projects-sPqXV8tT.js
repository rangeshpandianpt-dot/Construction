import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { S as SectionHeading } from "./SectionHeading-BMwJ7ARR.js";
import { P as ProjectsGrid } from "./ProjectsGrid-CoviqAPn.js";
import { C as CtaBand } from "./CtaBand-BrVHwEy-.js";
import "react";
import "lucide-react";
import "./project-interior-in_zwwuq.js";
import "@tanstack/react-router";
import "./router-gXpH6aw3.js";
import "@tanstack/react-query";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "sonner";
function ProjectsPage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { className: "container-px mx-auto max-w-7xl py-16 md:py-24", children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Portfolio", title: "Landmark projects, crafted with care", subtitle: "A selection of our recent work across villas, residences, commercial spaces, and interiors." }),
      /* @__PURE__ */ jsx(ProjectsGrid, { showFilter: true })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-12", children: /* @__PURE__ */ jsx(CtaBand, {}) })
  ] });
}
export {
  ProjectsPage as component
};
