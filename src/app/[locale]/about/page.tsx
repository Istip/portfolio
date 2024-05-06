import { getScopedI18n } from "@/locales/server";
import PageContainer from "@/components/Container/Container";
import AboutScrollerSection from "@/components/Sections/About/AboutScrollerSection/AboutScrollerSection";
import Footer from "@/components/Footer/Footer";
import AboutMore from "@/components/Sections/About/AboutScrollerSection/AboutMore";
import AboutIntro from "@/components/Sections/About/AboutSection/AboutIntro";
import AboutCards from "@/components/Sections/About/AboutSection/AboutCards";
import Text from "@/components/Text/Text";

export default async function AboutPage() {
  const t = await getScopedI18n("sections");

  return (
    <>
      <PageContainer>
        <div className="md:px-[50px] px-5 py-9">
          <Text
            type="expandedBlack"
            className="text-5xl mb-10 text-center text-primaryDark"
          >
            {t("about")}
          </Text>
          <AboutIntro />
          <div className="mx-0 xl:mx-56">
            <AboutCards />
          </div>
        </div>
        <AboutMore />
        <AboutScrollerSection />
      </PageContainer>
      <Footer />
    </>
  );
}
