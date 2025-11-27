import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import ImportExport from "@/components/ImportExport";
import Stats from "@/components/Stats";
import ManagementTeam from "@/components/ManagementTeam";
import Certificates from "@/components/Certificates";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Partners />
      <AboutUs />
      <Services />
      <ImportExport />
      <Stats />
      <ManagementTeam />
      <Certificates />
      <CTA />
      <Footer />
    </div>
  );
}
