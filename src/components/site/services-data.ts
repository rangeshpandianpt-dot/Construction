import {
  Home, Building2, Sofa, Hammer, LayoutGrid, Wrench, Compass, Landmark,
} from "lucide-react";

export const services = [
  {
    icon: Home,
    title: "Residential Construction",
    desc: "Custom homes built to your lifestyle — from foundation to finishing touches.",
  },
  {
    icon: Building2,
    title: "Commercial Construction",
    desc: "Offices, retail, and mixed-use projects delivered to commercial-grade standards.",
  },
  {
    icon: Sofa,
    title: "Interior Designing",
    desc: "Bespoke interiors that balance elegance, function, and your personal taste.",
  },
  {
    icon: Hammer,
    title: "Home Renovation",
    desc: "Transform existing spaces with modern upgrades and thoughtful remodeling.",
  },
  {
    icon: LayoutGrid,
    title: "Tile Work & Flooring",
    desc: "Premium tile, marble, and flooring installation by skilled craftsmen.",
  },
  {
    icon: Wrench,
    title: "Refurbishment Services",
    desc: "Restore and refresh commercial and residential properties end-to-end.",
  },
  {
    icon: Compass,
    title: "Architectural Planning",
    desc: "Concept, design, and approvals handled by experienced architects.",
  },
  {
    icon: Landmark,
    title: "Real Estate Development",
    desc: "Land acquisition, planning, and development of landmark properties.",
  },
] as const;
