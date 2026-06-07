import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { c as cn, B as Button } from "./router-gXpH6aw3.js";
const CarouselContext = React.createContext(null);
function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
const Carousel = React.forwardRef(({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y"
    },
    plugins
  );
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);
  const onSelect = React.useCallback((api2) => {
    if (!api2) {
      return;
    }
    setCanScrollPrev(api2.canScrollPrev());
    setCanScrollNext(api2.canScrollNext());
  }, []);
  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);
  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);
  const handleKeyDown = React.useCallback(
    (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );
  React.useEffect(() => {
    if (!api || !setApi) {
      return;
    }
    setApi(api);
  }, [api, setApi]);
  React.useEffect(() => {
    if (!api) {
      return;
    }
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);
  return /* @__PURE__ */ jsx(
    CarouselContext.Provider,
    {
      value: {
        carouselRef,
        api,
        opts,
        orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext
      },
      children: /* @__PURE__ */ jsx(
        "div",
        {
          ref,
          onKeyDownCapture: handleKeyDown,
          className: cn("relative", className),
          role: "region",
          "aria-roledescription": "carousel",
          ...props,
          children
        }
      )
    }
  );
});
Carousel.displayName = "Carousel";
const CarouselContent = React.forwardRef(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();
    return /* @__PURE__ */ jsx("div", { ref: carouselRef, className: "overflow-hidden", children: /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        ),
        ...props
      }
    ) });
  }
);
CarouselContent.displayName = "CarouselContent";
const CarouselItem = React.forwardRef(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel();
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        role: "group",
        "aria-roledescription": "slide",
        className: cn(
          "min-w-0 shrink-0 grow-0 basis-full",
          orientation === "horizontal" ? "pl-4" : "pt-4",
          className
        ),
        ...props
      }
    );
  }
);
CarouselItem.displayName = "CarouselItem";
const CarouselPrevious = React.forwardRef(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();
    return /* @__PURE__ */ jsxs(
      Button,
      {
        ref,
        variant,
        size,
        className: cn(
          "absolute  h-8 w-8 rounded-full",
          orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        ),
        disabled: !canScrollPrev,
        onClick: scrollPrev,
        ...props,
        children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Previous slide" })
        ]
      }
    );
  }
);
CarouselPrevious.displayName = "CarouselPrevious";
const CarouselNext = React.forwardRef(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();
    return /* @__PURE__ */ jsxs(
      Button,
      {
        ref,
        variant,
        size,
        className: cn(
          "absolute h-8 w-8 rounded-full",
          orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        ),
        disabled: !canScrollNext,
        onClick: scrollNext,
        ...props,
        children: [
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Next slide" })
        ]
      }
    );
  }
);
CarouselNext.displayName = "CarouselNext";
const testimonials = [
  {
    name: "Ramesh Kumar",
    project: "Residential Villa, Theni",
    text: "Thamarai Constructions delivered our dream home on time and within budget. Their attention to detail and quality of finish exceeded our expectations."
  },
  {
    name: "Priya Subramanian",
    project: "Interior Designing, Madurai",
    text: "Stunning interiors with a perfect balance of elegance and comfort. The team was professional from concept to handover."
  },
  {
    name: "Arun Selvam",
    project: "Commercial Office, Theni",
    text: "Truly end-to-end project management. Communication was clear, work was clean, and we moved in two weeks ahead of schedule."
  },
  {
    name: "Lakshmi Iyer",
    project: "Home Renovation, Bodi",
    text: "They transformed our 30-year-old home into a modern dream. Workmanship and material quality are outstanding."
  }
];
function Testimonials() {
  return /* @__PURE__ */ jsxs(Carousel, { opts: { loop: true, align: "start" }, className: "mx-auto max-w-5xl", children: [
    /* @__PURE__ */ jsx(CarouselContent, { children: testimonials.map((t) => /* @__PURE__ */ jsx(CarouselItem, { className: "md:basis-1/2", children: /* @__PURE__ */ jsxs("div", { className: "h-full rounded-2xl border border-border bg-card p-7 shadow-sm", children: [
      /* @__PURE__ */ jsx(Quote, { className: "text-primary", size: 28 }),
      /* @__PURE__ */ jsxs("p", { className: "mt-4 text-base leading-relaxed text-charcoal/80", children: [
        '"',
        t.text,
        '"'
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-5 flex gap-0.5 text-primary", children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsx(Star, { size: 16, fill: "currentColor", stroke: "none" }, i)) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx("div", { className: "font-display text-base font-semibold text-charcoal", children: t.name }),
        /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: t.project })
      ] })
    ] }) }, t.name)) }),
    /* @__PURE__ */ jsx(CarouselPrevious, { className: "hidden md:flex" }),
    /* @__PURE__ */ jsx(CarouselNext, { className: "hidden md:flex" })
  ] });
}
export {
  Testimonials as T,
  testimonials as t
};
