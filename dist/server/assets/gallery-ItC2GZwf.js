import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { S as SectionHeading } from "./SectionHeading-BMwJ7ARR.js";
import { C as CtaBand } from "./CtaBand-BrVHwEy-.js";
import { X } from "lucide-react";
import { v as villa, i as interior, r as residential, c as commercial } from "./project-interior-in_zwwuq.js";
import "@tanstack/react-router";
import "./router-gXpH6aw3.js";
import "@tanstack/react-query";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "sonner";
const g1 = "/assets/gallery-1-BMWNlkbj.jpg";
const g2 = "/assets/gallery-2-Ibjr0N81.jpg";
const g3 = "/assets/gallery-3-Bxc75vT5.jpg";
const g4 = "/assets/gallery-4-D7-Qx_A4.jpg";
const images = [{
  src: g1,
  alt: "Modern kitchen interior"
}, {
  src: villa,
  alt: "Luxury villa"
}, {
  src: g2,
  alt: "Master bedroom interior"
}, {
  src: interior,
  alt: "Living room interior"
}, {
  src: g3,
  alt: "Marble flooring"
}, {
  src: residential,
  alt: "Residential home"
}, {
  src: commercial,
  alt: "Commercial building"
}, {
  src: g4,
  alt: "Construction in progress"
}];
function GalleryPage() {
  const [open, setOpen] = useState(null);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { className: "container-px mx-auto max-w-7xl py-16 md:py-24", children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Gallery", title: "Moments from our craft", subtitle: "Construction sites, interiors, and completed homes — captured along the way." }),
      /* @__PURE__ */ jsx("div", { className: "columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4", children: images.map((img, i) => /* @__PURE__ */ jsx("button", { onClick: () => setOpen(img.src), className: "block w-full overflow-hidden rounded-2xl border border-border", children: /* @__PURE__ */ jsx("img", { src: img.src, alt: img.alt, loading: "lazy", className: "w-full transition-transform duration-500 hover:scale-105" }) }, i)) })
    ] }),
    open && /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-[60] grid place-items-center bg-charcoal/80 p-4 backdrop-blur", onClick: () => setOpen(null), children: [
      /* @__PURE__ */ jsx("button", { className: "absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-white text-charcoal", onClick: () => setOpen(null), "aria-label": "Close", children: /* @__PURE__ */ jsx(X, { size: 18 }) }),
      /* @__PURE__ */ jsx("img", { src: open, alt: "", className: "max-h-[85vh] max-w-full rounded-xl" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-12", children: /* @__PURE__ */ jsx(CtaBand, {}) })
  ] });
}
export {
  GalleryPage as component
};
