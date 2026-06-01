import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import AboutPage from "@/components/about/AboutPage";
import { clientConfig } from "@/lib/client.config";

export const metadata: Metadata = {
  title: `About Us | ${clientConfig.business.fullName} ${clientConfig.business.city} TX`,
  description: `Meet the ${clientConfig.business.city}-native team behind ${clientConfig.business.name}. Founded in ${clientConfig.business.established}, we've served ${clientConfig.business.stats.projectsCompleted} homeowners with integrity, craftsmanship, and a deep love for this city.`,
};

export default function About() {
  return (
    <div>
      <Navbar />
      <AboutPage />
      <Footer />
    </div>
  );
}
