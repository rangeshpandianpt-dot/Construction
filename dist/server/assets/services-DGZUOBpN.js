import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { S as SectionHeading } from "./SectionHeading-BMwJ7ARR.js";
import { S as ServiceGrid, P as ProcessTimeline } from "./ProcessTimeline-QGnx1WFY.js";
import { C as CtaBand } from "./CtaBand-BrVHwEy-.js";
import "lucide-react";
import "@tanstack/react-router";
import "./router-gXpH6aw3.js";
import "@tanstack/react-query";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "sonner";
function ServicesPage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { className: "container-px mx-auto max-w-7xl py-16 md:py-24", children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Our Services", title: "Everything you need, under one roof.", subtitle: "From foundation to final finish — our team manages each stage so your project is delivered to standard, on time." }),
      /* @__PURE__ */ jsx(ServiceGrid, {})
    ] }),
    /* @__PURE__ */ jsx("section", { className: "bg-secondary py-20", children: /* @__PURE__ */ jsxs("div", { className: "container-px mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "How We Work", title: "A proven, six-step process" }),
      /* @__PURE__ */ jsx(ProcessTimeline, {})
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-20", children: /* @__PURE__ */ jsx(CtaBand, {}) })
  ] });
}
export {
  ServicesPage as component
};
