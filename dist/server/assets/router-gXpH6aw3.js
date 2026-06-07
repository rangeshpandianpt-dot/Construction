import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Link, createRootRouteWithContext, useRouter, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { useState, useEffect } from "react";
import { X, Menu, Facebook, Instagram, Linkedin, MapPin, Phone, Mail, ArrowUp, MessageCircle } from "lucide-react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Toaster as Toaster$1 } from "sonner";
const appCss = "/assets/styles-CGyBpSrT.css";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/gallery", label: "Gallery" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" }
];
function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: `sticky top-0 z-50 transition-shadow ${scrolled ? "glass-nav shadow-sm" : "bg-background"}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "container-px mx-auto flex max-w-7xl items-center justify-between py-4", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("div", { className: "grid h-10 w-10 place-items-center rounded-md bg-primary text-primary-foreground font-display text-lg font-bold", children: "T" }),
            /* @__PURE__ */ jsxs("div", { className: "leading-tight", children: [
              /* @__PURE__ */ jsx("div", { className: "font-display text-lg font-semibold text-charcoal", children: "Thamarai" }),
              /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-[0.2em] text-muted-foreground", children: "Constructions" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("nav", { className: "hidden items-center gap-7 lg:flex", children: links.map((l) => /* @__PURE__ */ jsx(
            Link,
            {
              to: l.to,
              className: "text-sm font-medium text-charcoal/80 transition-colors hover:text-primary",
              activeProps: { className: "text-primary" },
              activeOptions: { exact: l.to === "/" },
              children: l.label
            },
            l.to
          )) }),
          /* @__PURE__ */ jsx("div", { className: "hidden lg:block", children: /* @__PURE__ */ jsx(Button, { asChild: true, className: "rounded-full bg-primary text-primary-foreground hover:opacity-90", children: /* @__PURE__ */ jsx(Link, { to: "/contact", children: "Request Quote" }) }) }),
          /* @__PURE__ */ jsx(
            "button",
            {
              "aria-label": "Toggle menu",
              onClick: () => setOpen((v) => !v),
              className: "grid h-10 w-10 place-items-center rounded-md border border-border lg:hidden",
              children: open ? /* @__PURE__ */ jsx(X, { size: 18 }) : /* @__PURE__ */ jsx(Menu, { size: 18 })
            }
          )
        ] }),
        open && /* @__PURE__ */ jsx("div", { className: "border-t border-border bg-background lg:hidden", children: /* @__PURE__ */ jsxs("nav", { className: "container-px mx-auto flex max-w-7xl flex-col gap-1 py-4", children: [
          links.map((l) => /* @__PURE__ */ jsx(
            Link,
            {
              to: l.to,
              onClick: () => setOpen(false),
              className: "rounded-md px-3 py-2 text-sm font-medium text-charcoal/80 hover:bg-muted",
              activeProps: { className: "text-primary" },
              activeOptions: { exact: l.to === "/" },
              children: l.label
            },
            l.to
          )),
          /* @__PURE__ */ jsx(Button, { asChild: true, className: "mt-2 rounded-full", children: /* @__PURE__ */ jsx(Link, { to: "/contact", onClick: () => setOpen(false), children: "Request Quote" }) })
        ] }) })
      ]
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "mt-24 border-t border-border bg-secondary", children: /* @__PURE__ */ jsxs("div", { className: "container-px mx-auto max-w-7xl py-14", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid gap-10 md:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: "grid h-10 w-10 place-items-center rounded-md bg-primary text-primary-foreground font-display text-lg font-bold", children: "T" }),
          /* @__PURE__ */ jsxs("div", { className: "leading-tight", children: [
            /* @__PURE__ */ jsx("div", { className: "font-display text-lg font-semibold", children: "Thamarai" }),
            /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-[0.2em] text-muted-foreground", children: "Constructions" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm text-muted-foreground", children: "Building dreams with quality, trust & excellence. Construction, interiors, renovation, and real estate in Theni, Tamil Nadu." }),
        /* @__PURE__ */ jsx("div", { className: "mt-5 flex gap-3", children: [Facebook, Instagram, Linkedin].map((Icon, i) => /* @__PURE__ */ jsx(
          "a",
          {
            href: "#",
            className: "grid h-9 w-9 place-items-center rounded-full border border-border bg-background text-charcoal/70 transition-colors hover:bg-primary hover:text-primary-foreground",
            "aria-label": "Social link",
            children: /* @__PURE__ */ jsx(Icon, { size: 16 })
          },
          i
        )) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-display text-base font-semibold", children: "Quick Links" }),
        /* @__PURE__ */ jsx("ul", { className: "mt-4 space-y-2 text-sm text-muted-foreground", children: [
          { to: "/about", label: "About Us" },
          { to: "/projects", label: "Projects" },
          { to: "/gallery", label: "Gallery" },
          { to: "/testimonials", label: "Testimonials" },
          { to: "/contact", label: "Contact" }
        ].map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: l.to, className: "transition-colors hover:text-primary", children: l.label }) }, l.to)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-display text-base font-semibold", children: "Services" }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-4 space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsx("li", { children: "Residential Construction" }),
          /* @__PURE__ */ jsx("li", { children: "Commercial Construction" }),
          /* @__PURE__ */ jsx("li", { children: "Interior Designing" }),
          /* @__PURE__ */ jsx("li", { children: "Home Renovation" }),
          /* @__PURE__ */ jsx("li", { children: "Real Estate Development" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-display text-base font-semibold", children: "Get in Touch" }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-4 space-y-3 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsx(MapPin, { size: 16, className: "mt-0.5 shrink-0 text-primary" }),
            /* @__PURE__ */ jsx("span", { children: "173A Ground Floor, Sri Krishna Towers, Edamal Street, Theni, Tamil Nadu 625531" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(Phone, { size: 16, className: "text-primary" }),
            /* @__PURE__ */ jsx("a", { href: "tel:+919600600909", className: "hover:text-primary", children: "+91 96006 00909" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(Mail, { size: 16, className: "text-primary" }),
            /* @__PURE__ */ jsx("a", { href: "mailto:info@thamaraiconstructions.com", className: "hover:text-primary", children: "info@thamaraiconstructions.com" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row", children: [
      /* @__PURE__ */ jsx("p", { children: "© 2026 Thamarai Constructions. All Rights Reserved." }),
      /* @__PURE__ */ jsx("p", { children: "Crafted with care in Theni, Tamil Nadu." })
    ] })
  ] }) });
}
function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "pointer-events-none fixed inset-0 z-40", children: /* @__PURE__ */ jsxs("div", { className: "pointer-events-auto fixed bottom-5 right-5 flex flex-col gap-3", children: [
    show && /* @__PURE__ */ jsx(
      "button",
      {
        "aria-label": "Scroll to top",
        onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
        className: "grid h-12 w-12 place-items-center rounded-full bg-charcoal text-white shadow-elegant transition-transform hover:scale-105",
        children: /* @__PURE__ */ jsx(ArrowUp, { size: 18 })
      }
    ),
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "tel:+919600600909",
        "aria-label": "Call now",
        className: "grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-gold transition-transform hover:scale-105",
        children: /* @__PURE__ */ jsx(Phone, { size: 18 })
      }
    ),
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "https://wa.me/919600600909",
        target: "_blank",
        rel: "noreferrer",
        "aria-label": "WhatsApp chat",
        className: "grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-elegant transition-transform hover:scale-105",
        children: /* @__PURE__ */ jsx(MessageCircle, { size: 18 })
      }
    )
  ] }) });
}
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-[60vh] items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "font-display text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  useEffect(() => {
  }, [error]);
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-[60vh] items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-full border border-input bg-background px-5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$7 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Thamarai Constructions — Building Dreams with Quality, Trust & Excellence" },
      {
        name: "description",
        content: "Premium construction, interior design, renovation, and real estate solutions in Theni, Tamil Nadu. Trusted by 500+ clients."
      },
      { name: "author", content: "Thamarai Constructions" },
      { property: "og:site_name", content: "Thamarai Constructions" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap"
      }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GeneralContractor",
          name: "Thamarai Constructions",
          description: "Construction, interior design, renovation, and real estate development in Theni, Tamil Nadu.",
          telephone: "+91-96006-00909",
          address: {
            "@type": "PostalAddress",
            streetAddress: "173A Ground Floor, Sri Krishna Towers, Edamal Street",
            addressLocality: "Theni",
            addressRegion: "Tamil Nadu",
            postalCode: "625531",
            addressCountry: "IN"
          }
        })
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$7.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxs("div", { className: "flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsx(Outlet, {}) }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(FloatingActions, {}),
    /* @__PURE__ */ jsx(Toaster, {})
  ] }) });
}
const $$splitComponentImporter$6 = () => import("./testimonials-D3ob2w61.js");
const Route$6 = createFileRoute("/testimonials")({
  head: () => ({
    meta: [{
      title: "Testimonials — Thamarai Constructions"
    }, {
      name: "description",
      content: "Read what our clients across Tamil Nadu say about working with Thamarai Constructions."
    }, {
      property: "og:title",
      content: "Testimonials — Thamarai Constructions"
    }, {
      property: "og:description",
      content: "Client stories and reviews."
    }, {
      property: "og:url",
      content: "/testimonials"
    }],
    links: [{
      rel: "canonical",
      href: "/testimonials"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./services-DGZUOBpN.js");
const Route$5 = createFileRoute("/services")({
  head: () => ({
    meta: [{
      title: "Services — Thamarai Constructions"
    }, {
      name: "description",
      content: "Residential & commercial construction, interiors, renovation, tile work, architecture, and real estate development."
    }, {
      property: "og:title",
      content: "Services — Thamarai Constructions"
    }, {
      property: "og:description",
      content: "Comprehensive construction & design services."
    }, {
      property: "og:url",
      content: "/services"
    }],
    links: [{
      rel: "canonical",
      href: "/services"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./projects-sPqXV8tT.js");
const Route$4 = createFileRoute("/projects")({
  head: () => ({
    meta: [{
      title: "Projects — Thamarai Constructions"
    }, {
      name: "description",
      content: "Villas, residential homes, commercial buildings, and interior projects delivered across Tamil Nadu."
    }, {
      property: "og:title",
      content: "Projects — Thamarai Constructions"
    }, {
      property: "og:description",
      content: "Browse our portfolio of landmark projects."
    }, {
      property: "og:url",
      content: "/projects"
    }],
    links: [{
      rel: "canonical",
      href: "/projects"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./gallery-ItC2GZwf.js");
const Route$3 = createFileRoute("/gallery")({
  head: () => ({
    meta: [{
      title: "Gallery — Thamarai Constructions"
    }, {
      name: "description",
      content: "Photos of construction projects, interior designs, renovations, and completed homes."
    }, {
      property: "og:title",
      content: "Gallery — Thamarai Constructions"
    }, {
      property: "og:description",
      content: "Visual showcase of our work."
    }, {
      property: "og:url",
      content: "/gallery"
    }],
    links: [{
      rel: "canonical",
      href: "/gallery"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./contact-CZOW4Rpe.js");
const Route$2 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — Thamarai Constructions"
    }, {
      name: "description",
      content: "Get a free consultation. Call +91 96006 00909 or send us a project inquiry."
    }, {
      property: "og:title",
      content: "Contact — Thamarai Constructions"
    }, {
      property: "og:description",
      content: "Reach our team for quotes and consultations."
    }, {
      property: "og:url",
      content: "/contact"
    }],
    links: [{
      rel: "canonical",
      href: "/contact"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-DkhoiDN6.js");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About Us — Thamarai Constructions"
    }, {
      name: "description",
      content: "Learn about Thamarai Constructions — a Theni-based team building landmark homes, interiors, and commercial spaces with quality and trust."
    }, {
      property: "og:title",
      content: "About — Thamarai Constructions"
    }, {
      property: "og:description",
      content: "Our story, mission, and values."
    }, {
      property: "og:url",
      content: "/about"
    }],
    links: [{
      rel: "canonical",
      href: "/about"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-DtxE2Lav.js");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Thamarai Constructions — Building Dreams in Theni, Tamil Nadu"
    }, {
      name: "description",
      content: "Premium construction, renovation, interior design and real estate solutions in Theni. 100+ projects, 10+ years, 500+ happy clients."
    }, {
      property: "og:title",
      content: "Thamarai Constructions"
    }, {
      property: "og:description",
      content: "Building dreams with quality, trust & excellence."
    }, {
      property: "og:url",
      content: "/"
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const TestimonialsRoute = Route$6.update({
  id: "/testimonials",
  path: "/testimonials",
  getParentRoute: () => Route$7
});
const ServicesRoute = Route$5.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$7
});
const ProjectsRoute = Route$4.update({
  id: "/projects",
  path: "/projects",
  getParentRoute: () => Route$7
});
const GalleryRoute = Route$3.update({
  id: "/gallery",
  path: "/gallery",
  getParentRoute: () => Route$7
});
const ContactRoute = Route$2.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$7
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$7
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$7
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  GalleryRoute,
  ProjectsRoute,
  ServicesRoute,
  TestimonialsRoute
};
const routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Button as B,
  cn as c,
  router as r
};
