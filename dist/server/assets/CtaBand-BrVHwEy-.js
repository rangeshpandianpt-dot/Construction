import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { B as Button } from "./router-gXpH6aw3.js";
import { ArrowRight, Phone } from "lucide-react";
function CtaBand() {
  return /* @__PURE__ */ jsx("section", { className: "container-px mx-auto max-w-7xl", children: /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-3xl bg-charcoal p-10 text-white md:p-14", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/30 blur-3xl" }),
    /* @__PURE__ */ jsxs("div", { className: "relative grid items-center gap-8 md:grid-cols-[1.5fr_1fr]", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl font-semibold leading-tight md:text-4xl", children: "Let's build something exceptional together." }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-xl text-white/70", children: "Share your vision and our team will craft a tailored plan, timeline, and quote — typically within 24 hours." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3 md:justify-end", children: [
        /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", className: "rounded-full bg-primary text-primary-foreground hover:opacity-90", children: /* @__PURE__ */ jsxs(Link, { to: "/contact", children: [
          "Get Free Quote ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 16, className: "ml-1" })
        ] }) }),
        /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "rounded-full border-white/30 bg-transparent text-white hover:bg-white hover:text-charcoal", children: /* @__PURE__ */ jsxs("a", { href: "tel:+919600600909", children: [
          /* @__PURE__ */ jsx(Phone, { size: 14, className: "mr-1" }),
          " Call Us"
        ] }) })
      ] })
    ] })
  ] }) });
}
export {
  CtaBand as C
};
