import { jsxs, jsx } from "react/jsx-runtime";
function SectionHeading({ eyebrow, title, subtitle, align = "center" }) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `mb-12 ${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`,
      children: [
        eyebrow && /* @__PURE__ */ jsxs("div", { className: `mb-3 flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`, children: [
          /* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-primary" }),
          /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.25em] text-primary", children: eyebrow }),
          /* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-primary" })
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl font-semibold leading-tight text-charcoal md:text-4xl lg:text-5xl", children: title }),
        subtitle && /* @__PURE__ */ jsx("p", { className: "mt-4 text-base leading-relaxed text-muted-foreground", children: subtitle })
      ]
    }
  );
}
export {
  SectionHeading as S
};
