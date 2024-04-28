import PageContainer from "@/components/Container/Container";
import AboutScrollerSection from "@/components/Sections/About/AboutScrollerSection/AboutScrollerSection";
import AboutSection from "@/components/Sections/About/AboutSection/AboutSection";
import Footer from "@/components/Footer/Footer";

export default function AboutPage() {
  return (
    <>
      <PageContainer>
        <AboutSection showTitle={false} />
        <AboutScrollerSection />
      </PageContainer>
      <Footer />
    </>
  );
}
