import villa from "@/assets/project-villa.jpg";
import residential from "@/assets/project-residential.jpg";
import commercial from "@/assets/project-commercial.jpg";
import interior from "@/assets/project-interior.jpg";

export const projects = [
  { name: "The Lotus Villa", location: "Theni", category: "Villas", year: 2024, image: villa },
  { name: "Krishna Residency", location: "Madurai", category: "Residential", year: 2024, image: residential },
  { name: "Sapphire Business Park", location: "Theni", category: "Commercial", year: 2023, image: commercial },
  { name: "Aurelia Interior Suite", location: "Theni", category: "Interior", year: 2024, image: interior },
  { name: "Emerald Heights", location: "Bodinayakanur", category: "Residential", year: 2023, image: residential },
  { name: "Pearl Boutique Villa", location: "Theni", category: "Villas", year: 2022, image: villa },
] as const;

export const categories = ["All", "Villas", "Residential", "Commercial", "Interior"] as const;
