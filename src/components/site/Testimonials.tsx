import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const testimonials = [
  {
    name: "Ramesh Kumar",
    project: "Residential Villa, Theni",
    text: "Thamarai Constructions delivered our dream home on time and within budget. Their attention to detail and quality of finish exceeded our expectations.",
  },
  {
    name: "Priya Subramanian",
    project: "Interior Designing, Madurai",
    text: "Stunning interiors with a perfect balance of elegance and comfort. The team was professional from concept to handover.",
  },
  {
    name: "Arun Selvam",
    project: "Commercial Office, Theni",
    text: "Truly end-to-end project management. Communication was clear, work was clean, and we moved in two weeks ahead of schedule.",
  },
  {
    name: "Lakshmi Iyer",
    project: "Home Renovation, Bodi",
    text: "They transformed our 30-year-old home into a modern dream. Workmanship and material quality are outstanding.",
  },
];

export function Testimonials() {
  return (
    <Carousel opts={{ loop: true, align: "start" }} className="mx-auto max-w-5xl">
      <CarouselContent>
        {testimonials.map((t) => (
          <CarouselItem key={t.name} className="md:basis-1/2">
            <div className="h-full rounded-2xl border border-border bg-card p-7 shadow-sm">
              <Quote className="text-primary" size={28} />
              <p className="mt-4 text-base leading-relaxed text-charcoal/80">"{t.text}"</p>
              <div className="mt-5 flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" stroke="none" />
                ))}
              </div>
              <div className="mt-4">
                <div className="font-display text-base font-semibold text-charcoal">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.project}</div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
}
