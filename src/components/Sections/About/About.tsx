import { getI18n } from "@/locales/server";
import Text from "../../Text/Text";

export default async function About() {
  const t = await getI18n();

  return (
    <div>
      <Text className="text-2xl">{t("aboutIntro")}</Text>

      <Text type="expanded" className="text-5xl my-5">
        i develop
      </Text>

      <div className="grid grid-cols-2 gap-10">
        <div className="w-full h-64 bg-primaryDark rounded-2xl" />
        <div className="w-full h-64 bg-primaryDark rounded-2xl" />
      </div>

      <Text type="expanded" className="text-5xl my-5">
        i design
      </Text>

      <div className="grid grid-cols-2 gap-10">
        <div className="w-full h-64 bg-primaryDark rounded-2xl" />
        <div className="w-full h-64 bg-primaryDark rounded-2xl" />
      </div>
    </div>
  );
}
