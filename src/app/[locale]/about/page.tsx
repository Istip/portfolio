import PageContainer from "@/components/Container/Container";
import Footer from "@/components/Footer/Footer";
import AboutScrollerSection from "@/components/Sections/About/AboutScrollerSection/AboutScrollerSection";
import AboutSection from "@/components/Sections/About/AboutSection/AboutSection";

export default function AboutPage() {
  return (
    <>
      <PageContainer>
        <AboutSection />
        <AboutScrollerSection />
      </PageContainer>
      <Footer />
    </>
  );
}
