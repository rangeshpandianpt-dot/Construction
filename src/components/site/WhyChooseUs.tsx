import { ShieldCheck, Award, Clock, Wallet, Sparkles, ClipboardCheck } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Certified Professionals", desc: "Licensed engineers, architects, and skilled craftsmen on every project." },
  { icon: Award, title: "Quality Materials", desc: "We source only premium, durable materials from trusted suppliers." },
  { icon: Clock, title: "On-Time Delivery", desc: "Disciplined schedules and milestones keep your project on track." },
  { icon: Wallet, title: "Affordable Pricing", desc: "Transparent quotes with no hidden costs — value at every stage." },
  { icon: Sparkles, title: "Modern Designs", desc: "Contemporary aesthetics blended with timeless quality and craft." },
  { icon: ClipboardCheck, title: "End-to-End Management", desc: "From planning to handover, one team owns the entire journey." },
];

export function WhyChooseUs() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {items.map(({ icon: Icon, title, desc }) => (
        <div
          key={title}
          className="group flex gap-4 rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:shadow-elegant"
        >
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            <Icon size={22} />
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-charcoal">{title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
