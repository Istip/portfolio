import { getScopedI18n } from "@/locales/server";
import PageContainer from "@/components/Container/Container";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Text from "@/components/Text/Text";
import Footer from "@/components/Footer/Footer";
import Services from "@/components/Sections/Services/Services";
import headerImage from "/public/images/services.webp";

export default async function ServicesPage() {
  const t = await getScopedI18n("servicesMarquee");

  const texts = [t("1"), t("2")];
  const technologies = [
    t("3"),
    t("4"),
    t("5"),
    t("6"),
    t("7"),
    t("8"),
    t("9"),
    t("10"),
  ];

  return (
    <PageContainer>
      <div className="relative top-0 bottom-0 left-0 right-0">
        <Image
          src={headerImage}
          alt="Services"
          placeholder="blur"
          className="w-screen h-[60vh] object-cover"
        />
        <div className="absolute top-0 w-full h-full bg-dark/50" />
      </div>
      <Marquee
        loop={0}
        autoFill
        className="bg-primaryDark py-5 transform skew-y-3"
      >
        {texts.map((text, index) => (
          <Text key={index} className="text-white text-2xl font-bold mr-10">
            {text}
          </Text>
        ))}
      </Marquee>
      <Marquee
        loop={0}
        autoFill
        className="bg-dark py-5 transform skew-x-3"
        direction="right"
      >
        {technologies.map((technology, index) => (
          <Text key={index} className="text-white text-2xl font-bold mr-10">
            {technology}
          </Text>
        ))}
      </Marquee>
      <div className="bg-dark">
        <Services />
      </div>
      <Footer />
    </PageContainer>
  );
}
