import Navbar       from "@/components/sections/Navbar";
import Hero         from "@/components/sections/Hero";
import Services     from "@/components/sections/Services";
import HowItWorks   from "@/components/sections/HowItWorks";
import AboutPreview from "@/components/sections/AboutPreview";
import WhyChooseUs  from "@/components/sections/WhyChooseUs";
import Portfolio    from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import FAQ          from "@/components/sections/FAQ";
import CTA          from "@/components/sections/CTA";
import Footer       from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <AboutPreview />
      <WhyChooseUs />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
