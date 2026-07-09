import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { TrustedBy } from "@/components/site/TrustedBy";
import { WhyUs } from "@/components/site/WhyUs";
import { Products } from "@/components/site/Products";
import { Industries } from "@/components/site/Industries";
import { Process } from "@/components/site/Process";
import { GiftKits } from "@/components/site/GiftKits";
import { DtfCompare } from "@/components/site/DtfCompare";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress } from "@/components/site/ScrollProgress";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <WhyUs />
        <Products />
        <Industries />
        <Process />
        <GiftKits />
        <DtfCompare />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
