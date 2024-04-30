import PageContainer from "@/components/Container/Container";
import AboutScrollerSection from "@/components/Sections/About/AboutScrollerSection/AboutScrollerSection";
import AboutSection from "@/components/Sections/About/AboutSection/AboutSection";
import Footer from "@/components/Footer/Footer";
import AboutMore from "@/components/Sections/About/AboutScrollerSection/AboutMore";

export default function AboutPage() {
  return (
    <>
      <PageContainer>
        <AboutSection showTitle={false} />
        <AboutScrollerSection />
        <AboutMore />
      </PageContainer>
      <Footer />
    </>
  );
}
