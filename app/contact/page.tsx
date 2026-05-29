import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import ContactPage from "@/components/contact/ContactPage";
import { clientConfig } from "@/lib/client.config";

export const metadata: Metadata = {
  title: `Contact Us | ${clientConfig.business.fullName}`,
  description: `Get in touch with ${clientConfig.business.fullName}. We respond within 2 hours. First consultation is always free. ${clientConfig.business.serviceArea}.`,
};

export default function Contact() {
  return (
    <>
      <Navbar />
      <ContactPage />
      <Footer />
    </>
  );
}
