import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { S as SectionHeading } from "./SectionHeading-BMwJ7ARR.js";
import { T as Testimonials, t as testimonials } from "./Testimonials-DOLZJiQ8.js";
import { Quote, Star } from "lucide-react";
import { C as CtaBand } from "./CtaBand-BrVHwEy-.js";
import "react";
import "embla-carousel-react";
import "./router-gXpH6aw3.js";
import "@tanstack/react-query";
import "@tanstack/react-router";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "sonner";
function TestimonialsPage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { className: "container-px mx-auto max-w-7xl py-16 md:py-24", children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Testimonials", title: "Loved by clients across Tamil Nadu", subtitle: "Real stories from real homeowners and businesses we've worked with." }),
      /* @__PURE__ */ jsx(Testimonials, {}),
      /* @__PURE__ */ jsx("div", { className: "mt-16 grid gap-6 md:grid-cols-2", children: testimonials.map((t) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card p-6", children: [
        /* @__PURE__ */ jsx(Quote, { className: "text-primary", size: 24 }),
        /* @__PURE__ */ jsxs("p", { className: "mt-3 text-charcoal/80", children: [
          '"',
          t.text,
          '"'
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-4 flex gap-0.5 text-primary", children: Array.from({
          length: 5
        }).map((_, i) => /* @__PURE__ */ jsx(Star, { size: 14, fill: "currentColor", stroke: "none" }, i)) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-3", children: [
          /* @__PURE__ */ jsx("div", { className: "font-display font-semibold text-charcoal", children: t.name }),
          /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: t.project })
        ] })
      ] }, t.name)) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-12", children: /* @__PURE__ */ jsx(CtaBand, {}) })
  ] });
}
export {
  TestimonialsPage as component
};
