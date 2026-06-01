import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import ServicesPage from "@/components/services/ServicesPage";
import { clientConfig } from "@/lib/client.config";

export const metadata: Metadata = {
  title: `Services | ${clientConfig.business.fullName} ${clientConfig.business.city} TX`,
  description: `Full-service landscaping in ${clientConfig.business.city} — lawn care, landscape design, irrigation, hardscaping, seasonal cleanup, tree care and more. Get a free quote today.`,
};

export default function Services() {
  return (
    <div>
      <Navbar />
      <ServicesPage />
      <Footer />
    </div>
  );
}
