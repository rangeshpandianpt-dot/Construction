import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { StatsStrip } from "@/components/site/StatsStrip";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ServiceGrid } from "@/components/site/ServiceGrid";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { ProjectsGrid } from "@/components/site/ProjectsGrid";
import { ProcessTimeline } from "@/components/site/ProcessTimeline";
import { Testimonials } from "@/components/site/Testimonials";
import { FaqSection } from "@/components/site/FaqSection";
import { CtaBand } from "@/components/site/CtaBand";
import aboutImg from "@/assets/about.jpg";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Thamarai Constructions — Building Dreams in Theni, Tamil Nadu" },
      {
        name: "description",
        content:
          "Premium construction, renovation, interior design and real estate solutions in Theni. 100+ projects, 10+ years, 500+ happy clients.",
      },
      { property: "og:title", content: "Thamarai Constructions" },
      { property: "og:description", content: "Building dreams with quality, trust & excellence." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <StatsStrip />

      {/* About teaser */}
      <section className="container-px mx-auto mt-24 max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <img
              src={aboutImg}
              alt="Our team reviewing plans on site"
              loading="lazy"
              width={1280}
              height={960}
              className="rounded-2xl object-cover shadow-elegant"
            />
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-border bg-background p-5 shadow-elegant md:block">
              <div className="font-display text-3xl font-semibold text-primary">10+</div>
              <div className="text-xs text-muted-foreground">Years of excellence</div>
            </div>
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="About Us"
              title="Crafted with quality, delivered with trust."
              subtitle="We are a Theni-based construction and design firm building landmark residential, commercial, and interior projects across Tamil Nadu. Every project is delivered by an experienced team committed to craftsmanship, transparency, and on-time delivery."
            />
            <ul className="mt-2 grid gap-3 sm:grid-cols-2">
              {[
                "Experienced team",
                "Quality workmanship",
                "Transparent pricing",
                "Timely delivery",
                "Customer satisfaction",
                "End-to-end service",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm text-charcoal/80">
                  <CheckCircle2 size={16} className="text-primary" /> {t}
                </li>
              ))}
            </ul>
            <Button asChild className="mt-8 rounded-full bg-primary text-primary-foreground hover:opacity-90">
              <Link to="/about">
                Learn more about us <ArrowRight size={14} className="ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container-px mx-auto mt-28 max-w-7xl">
        <SectionHeading
          eyebrow="What We Do"
          title="Comprehensive construction & design services"
          subtitle="From concept to handover, we deliver end-to-end services tailored to your project's scale and vision."
        />
        <ServiceGrid />
      </section>

      {/* Why */}
      <section className="mt-28 bg-secondary py-20">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="The difference is in the details."
            subtitle="Six promises that guide every Thamarai Constructions project."
          />
          <WhyChooseUs />
        </div>
      </section>

      {/* Projects */}
      <section className="container-px mx-auto mt-28 max-w-7xl">
        <SectionHeading
          eyebrow="Featured Work"
          title="Recent landmark projects"
          subtitle="A glimpse into our growing portfolio of villas, residences, commercial spaces, and interior projects."
        />
        <ProjectsGrid limit={3} />
        <div className="mt-10 text-center">
          <Button asChild variant="outline" className="rounded-full">
            <Link to="/projects">View all projects <ArrowRight size={14} className="ml-1" /></Link>
          </Button>
        </div>
      </section>

      {/* Process */}
      <section className="mt-28 bg-secondary py-20">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Process"
            title="A clear path from idea to handover"
            subtitle="Six well-defined stages keep your project organized, on schedule, and on budget."
          />
          <ProcessTimeline />
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-px mx-auto mt-28 max-w-7xl">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by clients across Tamil Nadu"
          subtitle="What homeowners and businesses say about working with us."
        />
        <Testimonials />
      </section>

      {/* FAQ */}
      <section className="container-px mx-auto mt-28 max-w-7xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
        />
        <FaqSection />
      </section>

      <div className="mt-28">
        <CtaBand />
      </div>
    </>
  );
}
