import { getScopedI18n } from "@/locales/server";
import PageContainer from "@/components/Container/Container";
import ContactButton from "@/components/Sections/Contact/ContactButton";
import ContactForm from "@/components/Sections/Contact/ContactForm";
import Text from "@/components/Text/Text";
import Scene from "./Scene";

export default async function ContactPage() {
  const t = await getScopedI18n("contactPage");
  const tSections = await getScopedI18n("sections");

  return (
    <>
      <div className="fixed w-screen h-screen top-0 left-0 right-0 bottom-0 -z-[1]">
        <Scene />
      </div>
      <PageContainer>
        <Text type="expandedBlack" className="text-5xl mb-10 text-center pt-9">
          {tSections("contact")}
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center md:p-[50px] p-5 gap-5 md:gap-10">
          <div>
            <Text className="text-lg sm:text-xl lg:text-2xl">{t("intro")}</Text>
            <ContactButton />
            <Text className="text-lg sm:text-xl hidden md:flex lg:text-2xl mt-12">
              {t("outro")}
            </Text>
          </div>
          <div className="w-full">
            <ContactForm />
          </div>
          <Text className="text-lg sm:text-xl md:hidden flex lg:text-2xl lg:mt-12 my-5">
            {t("outro")}
          </Text>
        </div>
      </PageContainer>
    </>
  );
}
