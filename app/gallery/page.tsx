import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import GalleryPage from "@/components/gallery/GalleryPage";
import { clientConfig } from "@/lib/client.config";

export const metadata: Metadata = {
  title: `Our Work | ${clientConfig.business.fullName} ${clientConfig.business.city} TX`,
  description: `Browse our portfolio of landscaping, hardscaping, lawn care, and irrigation projects across Greater ${clientConfig.business.city}, TX.`,
};

export default function Page() {
  return (
    <div>
      <Navbar />
      <main>
        <GalleryPage />
      </main>
      <Footer />
    </div>
  );
}
