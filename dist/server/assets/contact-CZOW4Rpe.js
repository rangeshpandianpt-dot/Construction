import { jsx, jsxs } from "react/jsx-runtime";
import { S as SectionHeading } from "./SectionHeading-BMwJ7ARR.js";
import * as React from "react";
import { useState } from "react";
import { z } from "zod";
import { c as cn, B as Button } from "./router-gXpH6aw3.js";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva } from "class-variance-authority";
import { toast } from "sonner";
import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDown, Check, ChevronUp, MapPin, Phone, Mail, Clock } from "lucide-react";
import "@tanstack/react-query";
import "@tanstack/react-router";
import "@radix-ui/react-slot";
import "clsx";
import "tailwind-merge";
const Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(LabelPrimitive.Root, { ref, className: cn(labelVariants(), className), ...props }));
Label.displayName = LabelPrimitive.Root.displayName;
const Textarea = React.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
const Select = SelectPrimitive.Root;
const SelectValue = SelectPrimitive.Value;
const SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SelectPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
const SelectScrollUpButton = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.ScrollUpButton,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsx(ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
const SelectScrollDownButton = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.ScrollDownButton,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
const SelectContent = React.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs(
  SelectPrimitive.Content,
  {
    ref,
    className: cn(
      "relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ jsx(SelectScrollUpButton, {}),
      /* @__PURE__ */ jsx(
        SelectPrimitive.Viewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ jsx(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = SelectPrimitive.Content.displayName;
const SelectLabel = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.Label,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
const SelectItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsx(SelectPrimitive.ItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
const SelectSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20).regex(/^[0-9+\-\s()]+$/, "Invalid phone"),
  email: z.string().trim().email("Enter a valid email").max(200),
  service: z.string().min(1, "Choose a service"),
  details: z.string().trim().min(10, "Tell us a bit more").max(1e3)
});
const SERVICES = [
  "Residential Construction",
  "Commercial Construction",
  "Interior Designing",
  "Home Renovation",
  "Tile Work & Flooring",
  "Architectural Planning",
  "Real Estate Development",
  "Other"
];
function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [service, setService] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      email: String(fd.get("email") ?? ""),
      service,
      details: String(fd.get("details") ?? "")
    };
    const parsed = schema.safeParse(payload);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Thanks! We'll get back to you within 24 hours.");
      e.target.reset();
      setService("");
    }, 700);
  };
  return /* @__PURE__ */ jsxs("form", { onSubmit, className: "space-y-5 rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid gap-5 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "name", children: "Name" }),
        /* @__PURE__ */ jsx(Input, { id: "name", name: "name", placeholder: "Your full name", required: true })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "phone", children: "Phone" }),
        /* @__PURE__ */ jsx(Input, { id: "phone", name: "phone", placeholder: "+91 96006 00909", required: true })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsx(Label, { htmlFor: "email", children: "Email" }),
      /* @__PURE__ */ jsx(Input, { id: "email", name: "email", type: "email", placeholder: "you@example.com", required: true })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsx(Label, { children: "Service Required" }),
      /* @__PURE__ */ jsxs(Select, { value: service, onValueChange: setService, children: [
        /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select a service" }) }),
        /* @__PURE__ */ jsx(SelectContent, { children: SERVICES.map((s) => /* @__PURE__ */ jsx(SelectItem, { value: s, children: s }, s)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsx(Label, { htmlFor: "details", children: "Project Details" }),
      /* @__PURE__ */ jsx(Textarea, { id: "details", name: "details", rows: 5, placeholder: "Tell us about your project, location, and timeline…", required: true })
    ] }),
    /* @__PURE__ */ jsx(Button, { type: "submit", disabled: loading, size: "lg", className: "w-full rounded-full bg-primary text-primary-foreground hover:opacity-90", children: loading ? "Sending…" : "Send Inquiry" })
  ] });
}
function ContactPage() {
  return /* @__PURE__ */ jsxs("section", { className: "container-px mx-auto max-w-7xl py-16 md:py-24", children: [
    /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Contact Us", title: "Let's discuss your project.", subtitle: "Share a few details and our team will get back within 24 hours with next steps." }),
    /* @__PURE__ */ jsxs("div", { className: "grid gap-10 lg:grid-cols-[1fr_1.2fr]", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-lg font-semibold text-charcoal", children: "Reach us" }),
          /* @__PURE__ */ jsxs("ul", { className: "mt-4 space-y-4 text-sm", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsx(MapPin, { size: 18, className: "mt-0.5 shrink-0 text-primary" }),
              /* @__PURE__ */ jsx("span", { className: "text-charcoal/80", children: "173A Ground Floor, Sri Krishna Towers, Edamal Street, Theni, Tamil Nadu 625531" })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx(Phone, { size: 18, className: "text-primary" }),
              /* @__PURE__ */ jsx("a", { href: "tel:+919600600909", className: "text-charcoal/80 hover:text-primary", children: "+91 96006 00909" })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx(Mail, { size: 18, className: "text-primary" }),
              /* @__PURE__ */ jsx("a", { href: "mailto:info@thamaraiconstructions.com", className: "text-charcoal/80 hover:text-primary", children: "info@thamaraiconstructions.com" })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx(Clock, { size: 18, className: "text-primary" }),
              /* @__PURE__ */ jsx("span", { className: "text-charcoal/80", children: "Mon – Sat · 9:00 am – 7:00 pm" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-2xl border border-border", children: /* @__PURE__ */ jsx("iframe", { title: "Thamarai Constructions location", src: "https://www.google.com/maps?q=Edamal+Street+Theni+Tamil+Nadu+625531&output=embed", width: "100%", height: "280", loading: "lazy", referrerPolicy: "no-referrer-when-downgrade", className: "block" }) })
      ] }),
      /* @__PURE__ */ jsx(ContactForm, {})
    ] })
  ] });
}
export {
  ContactPage as component
};
