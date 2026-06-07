import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { S as SectionHeading } from "./SectionHeading-BMwJ7ARR.js";
import { a as aboutImg } from "./about-B896scj-.js";
import { CheckCircle2, Target, Eye, Heart } from "lucide-react";
import { B as Button } from "./router-gXpH6aw3.js";
import { C as CtaBand } from "./CtaBand-BrVHwEy-.js";
import "@tanstack/react-query";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "sonner";
function AboutPage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { className: "container-px mx-auto max-w-7xl py-16 md:py-24", children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "About Us", title: "A decade of building landmark structures.", subtitle: "Thamarai Constructions was founded with a simple promise — to build homes and spaces that stand the test of time, delivered with honesty and craft." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-12 grid items-center gap-12 lg:grid-cols-2", children: [
        /* @__PURE__ */ jsx("img", { src: aboutImg, alt: "Thamarai Constructions team", loading: "lazy", className: "rounded-2xl object-cover shadow-elegant" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-semibold text-charcoal", children: "Our story" }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-charcoal/75 leading-relaxed", children: "From a small office in Theni, we've grown into a trusted construction and design partner across Tamil Nadu. Our work spans premium villas, residential homes, commercial spaces, interiors, and real estate development — each delivered with the same standard of care." }),
          /* @__PURE__ */ jsx("ul", { className: "mt-6 grid gap-3 sm:grid-cols-2", children: ["Experienced engineers & architects", "Quality, certified materials", "Transparent pricing", "On-time, every time", "Modern, durable designs", "End-to-end management"].map((t) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-sm text-charcoal/80", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { size: 16, className: "text-primary" }),
            " ",
            t
          ] }, t)) }),
          /* @__PURE__ */ jsx(Button, { asChild: true, className: "mt-8 rounded-full bg-primary text-primary-foreground hover:opacity-90", children: /* @__PURE__ */ jsx(Link, { to: "/contact", children: "Start your project" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "bg-secondary py-20", children: /* @__PURE__ */ jsx("div", { className: "container-px mx-auto max-w-7xl", children: /* @__PURE__ */ jsx("div", { className: "grid gap-6 md:grid-cols-3", children: [{
      icon: Target,
      t: "Our Mission",
      d: "Build exceptional spaces with quality, transparency, and unwavering attention to detail."
    }, {
      icon: Eye,
      t: "Our Vision",
      d: "To be Tamil Nadu's most trusted name in construction, interiors, and real estate."
    }, {
      icon: Heart,
      t: "Our Values",
      d: "Integrity, craft, and customer satisfaction guide every decision we make."
    }].map(({
      icon: Icon,
      t,
      d
    }) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-background p-7 shadow-sm", children: [
      /* @__PURE__ */ jsx("div", { className: "grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary", children: /* @__PURE__ */ jsx(Icon, { size: 22 }) }),
      /* @__PURE__ */ jsx("h3", { className: "mt-4 font-display text-lg font-semibold text-charcoal", children: t }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: d })
    ] }, t)) }) }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-20", children: /* @__PURE__ */ jsx(CtaBand, {}) })
  ] });
}
export {
  AboutPage as component
};
