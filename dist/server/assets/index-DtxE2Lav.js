import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Play, ShieldCheck, Award, Clock, Wallet, Sparkles, ClipboardCheck, ChevronDown, CheckCircle2 } from "lucide-react";
import { B as Button, c as cn } from "./router-gXpH6aw3.js";
import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { S as SectionHeading } from "./SectionHeading-BMwJ7ARR.js";
import { S as ServiceGrid, P as ProcessTimeline } from "./ProcessTimeline-QGnx1WFY.js";
import { P as ProjectsGrid } from "./ProjectsGrid-CoviqAPn.js";
import { T as Testimonials } from "./Testimonials-DOLZJiQ8.js";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { C as CtaBand } from "./CtaBand-BrVHwEy-.js";
import { a as aboutImg } from "./about-B896scj-.js";
import "@tanstack/react-query";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "sonner";
import "./project-interior-in_zwwuq.js";
import "embla-carousel-react";
const heroImg = "/assets/hero-SyKHwP9l.jpg";
function Hero() {
  return /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-10", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: heroImg,
          alt: "Modern luxury construction by Thamarai Constructions",
          className: "h-full w-full object-cover",
          width: 1920,
          height: 1280
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/30" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "container-px mx-auto max-w-7xl py-20 md:py-28 lg:py-36", children: /* @__PURE__ */ jsxs("div", { className: "max-w-2xl animate-fade-in", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-primary backdrop-blur", children: [
        /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }),
        "Theni · Tamil Nadu"
      ] }),
      /* @__PURE__ */ jsxs("h1", { className: "font-display text-4xl font-semibold leading-[1.05] text-charcoal md:text-5xl lg:text-6xl", children: [
        "Transforming Ideas Into",
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient-gold", children: "Landmark Structures" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-xl text-base leading-relaxed text-charcoal/70 md:text-lg", children: "Professional construction, renovation, interior design, and real estate solutions tailored to your vision — delivered with quality, trust, and excellence." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
        /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", className: "rounded-full bg-primary text-primary-foreground shadow-gold hover:opacity-90", children: /* @__PURE__ */ jsxs(Link, { to: "/contact", children: [
          "Get Free Consultation",
          /* @__PURE__ */ jsx(ArrowRight, { size: 16, className: "ml-1" })
        ] }) }),
        /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "rounded-full border-charcoal/20 text-charcoal hover:bg-charcoal hover:text-white", children: /* @__PURE__ */ jsxs(Link, { to: "/projects", children: [
          /* @__PURE__ */ jsx(Play, { size: 14, className: "mr-1" }),
          " View Projects"
        ] }) })
      ] })
    ] }) })
  ] });
}
const stats = [
  { value: 100, suffix: "+", label: "Projects Completed" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Happy Clients" },
  { value: 24, suffix: "/7", label: "Support Available" }
];
function useInView() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setInView(true),
      { threshold: 0.3 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return { ref, inView };
}
function Counter({ to, suffix }) {
  const { ref, inView } = useInView();
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1400;
    let raf = 0;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / dur);
      setVal(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return /* @__PURE__ */ jsxs("div", { ref, className: "font-display text-4xl font-semibold text-charcoal md:text-5xl", children: [
    val,
    /* @__PURE__ */ jsx("span", { className: "text-primary", children: suffix })
  ] });
}
function StatsStrip() {
  return /* @__PURE__ */ jsx("section", { className: "container-px mx-auto -mt-10 max-w-7xl", children: /* @__PURE__ */ jsx("div", { className: "rounded-2xl border border-border bg-background p-6 shadow-elegant md:p-10", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-6 md:grid-cols-4", children: stats.map((s) => /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ jsx(Counter, { to: s.value, suffix: s.suffix }),
    /* @__PURE__ */ jsx("div", { className: "mt-2 text-sm text-muted-foreground", children: s.label })
  ] }, s.label)) }) }) });
}
const items = [
  { icon: ShieldCheck, title: "Certified Professionals", desc: "Licensed engineers, architects, and skilled craftsmen on every project." },
  { icon: Award, title: "Quality Materials", desc: "We source only premium, durable materials from trusted suppliers." },
  { icon: Clock, title: "On-Time Delivery", desc: "Disciplined schedules and milestones keep your project on track." },
  { icon: Wallet, title: "Affordable Pricing", desc: "Transparent quotes with no hidden costs — value at every stage." },
  { icon: Sparkles, title: "Modern Designs", desc: "Contemporary aesthetics blended with timeless quality and craft." },
  { icon: ClipboardCheck, title: "End-to-End Management", desc: "From planning to handover, one team owns the entire journey." }
];
function WhyChooseUs() {
  return /* @__PURE__ */ jsx("div", { className: "grid gap-5 md:grid-cols-2 lg:grid-cols-3", children: items.map(({ icon: Icon, title, desc }) => /* @__PURE__ */ jsxs(
    "div",
    {
      className: "group flex gap-4 rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:shadow-elegant",
      children: [
        /* @__PURE__ */ jsx("div", { className: "grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground", children: /* @__PURE__ */ jsx(Icon, { size: 22 }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-lg font-semibold text-charcoal", children: title }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm leading-relaxed text-muted-foreground", children: desc })
        ] })
      ]
    },
    title
  )) });
}
const Accordion = AccordionPrimitive.Root;
const AccordionItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Item, { ref, className: cn("border-b", className), ...props }));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs(
  AccordionPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(
  AccordionPrimitive.Content,
  {
    ref,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
const faqs = [
  {
    q: "Which areas do you serve?",
    a: "We primarily serve Theni, Madurai, and surrounding districts in Tamil Nadu. For larger projects, we travel further on request."
  },
  {
    q: "Do you provide free consultations?",
    a: "Yes — initial consultations and site visits are complimentary. We discuss your vision, budget, and timeline before proposing a plan."
  },
  {
    q: "How transparent is your pricing?",
    a: "We provide itemized quotes with material specifications, labor, and timelines. No hidden costs — any change is approved in writing."
  },
  {
    q: "How long does a typical home take?",
    a: "A standard 2BHK home takes 8–10 months; villas and larger projects vary. We share a detailed schedule before work begins."
  },
  {
    q: "Do you handle approvals and paperwork?",
    a: "Yes — our team handles drawings, approvals, and statutory paperwork end-to-end so you can focus on the design."
  }
];
function FaqSection() {
  return /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-3xl", children: /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: "w-full", children: faqs.map((f, i) => /* @__PURE__ */ jsxs(AccordionItem, { value: `item-${i}`, className: "border-border", children: [
    /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-left font-display text-base font-semibold text-charcoal hover:no-underline", children: f.q }),
    /* @__PURE__ */ jsx(AccordionContent, { className: "text-sm leading-relaxed text-muted-foreground", children: f.a })
  ] }, i)) }) });
}
function Index() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(StatsStrip, {}),
    /* @__PURE__ */ jsx("section", { className: "container-px mx-auto mt-24 max-w-7xl", children: /* @__PURE__ */ jsxs("div", { className: "grid items-center gap-12 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("img", { src: aboutImg, alt: "Our team reviewing plans on site", loading: "lazy", width: 1280, height: 960, className: "rounded-2xl object-cover shadow-elegant" }),
        /* @__PURE__ */ jsxs("div", { className: "absolute -bottom-6 -right-6 hidden rounded-2xl border border-border bg-background p-5 shadow-elegant md:block", children: [
          /* @__PURE__ */ jsx("div", { className: "font-display text-3xl font-semibold text-primary", children: "10+" }),
          /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: "Years of excellence" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(SectionHeading, { align: "left", eyebrow: "About Us", title: "Crafted with quality, delivered with trust.", subtitle: "We are a Theni-based construction and design firm building landmark residential, commercial, and interior projects across Tamil Nadu. Every project is delivered by an experienced team committed to craftsmanship, transparency, and on-time delivery." }),
        /* @__PURE__ */ jsx("ul", { className: "mt-2 grid gap-3 sm:grid-cols-2", children: ["Experienced team", "Quality workmanship", "Transparent pricing", "Timely delivery", "Customer satisfaction", "End-to-end service"].map((t) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-sm text-charcoal/80", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 16, className: "text-primary" }),
          " ",
          t
        ] }, t)) }),
        /* @__PURE__ */ jsx(Button, { asChild: true, className: "mt-8 rounded-full bg-primary text-primary-foreground hover:opacity-90", children: /* @__PURE__ */ jsxs(Link, { to: "/about", children: [
          "Learn more about us ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14, className: "ml-1" })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "container-px mx-auto mt-28 max-w-7xl", children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "What We Do", title: "Comprehensive construction & design services", subtitle: "From concept to handover, we deliver end-to-end services tailored to your project's scale and vision." }),
      /* @__PURE__ */ jsx(ServiceGrid, {})
    ] }),
    /* @__PURE__ */ jsx("section", { className: "mt-28 bg-secondary py-20", children: /* @__PURE__ */ jsxs("div", { className: "container-px mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Why Choose Us", title: "The difference is in the details.", subtitle: "Six promises that guide every Thamarai Constructions project." }),
      /* @__PURE__ */ jsx(WhyChooseUs, {})
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "container-px mx-auto mt-28 max-w-7xl", children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Featured Work", title: "Recent landmark projects", subtitle: "A glimpse into our growing portfolio of villas, residences, commercial spaces, and interior projects." }),
      /* @__PURE__ */ jsx(ProjectsGrid, { limit: 3 }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 text-center", children: /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", className: "rounded-full", children: /* @__PURE__ */ jsxs(Link, { to: "/projects", children: [
        "View all projects ",
        /* @__PURE__ */ jsx(ArrowRight, { size: 14, className: "ml-1" })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "mt-28 bg-secondary py-20", children: /* @__PURE__ */ jsxs("div", { className: "container-px mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Our Process", title: "A clear path from idea to handover", subtitle: "Six well-defined stages keep your project organized, on schedule, and on budget." }),
      /* @__PURE__ */ jsx(ProcessTimeline, {})
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "container-px mx-auto mt-28 max-w-7xl", children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Testimonials", title: "Loved by clients across Tamil Nadu", subtitle: "What homeowners and businesses say about working with us." }),
      /* @__PURE__ */ jsx(Testimonials, {})
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "container-px mx-auto mt-28 max-w-7xl", children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "FAQ", title: "Frequently asked questions" }),
      /* @__PURE__ */ jsx(FaqSection, {})
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-28", children: /* @__PURE__ */ jsx(CtaBand, {}) })
  ] });
}
export {
  Index as component
};
