import Hero from "@/components/Hero/Hero";
import AboutSection from "@/components/Sections/About/AboutSection/AboutSection";
import AboutScrollerSection from "@/components/Sections/About/AboutScrollerSection/AboutScrollerSection";
import ServicesSection from "@/components/Sections/Services/ServicesSection";
import ContactSection from "@/components/Sections/Contact/ContactSection";
import Footer from "@/components/Footer/Footer";
import Showcase from "@/components/Showcase/Showcase";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <main className="pt-20">
        <Hero />
        <AboutSection />
        <AboutScrollerSection />
        <ServicesSection />
        <ContactSection />
        <Footer />
      </main>
      <Showcase />
    </div>
  );
}
