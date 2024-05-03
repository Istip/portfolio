import { getI18n } from "@/locales/server";
import Text from "../../../Text/Text";
import AboutCards from "./AboutCards";

export default async function About() {
  const t = await getI18n();

  return (
    <>
      <Text className="text-xl sm:text-3xl mb-16">{t("aboutIntro")}</Text>
      <AboutCards />
    </>
  );
}
