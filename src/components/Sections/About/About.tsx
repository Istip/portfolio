import { getI18n } from "@/locales/server";
import Text from "../../Text/Text";
import Icon from "@/components/Icon/Icon";

export default async function About() {
  const t = await getI18n();

  return (
    <div>
      <Text className="text-3xl mb-16">{t("aboutIntro")}</Text>

      <Text type="expanded" className="text-5xl my-5">
        {t("iDevelop")}
      </Text>

      <div className="grid grid-cols-2 gap-10">
        <div className="w-full aspect-square bg-primaryDark hover:bg-dark hover:text-light transition-colors duration-500 rounded-2xl center gap-4 flex-col">
          <Icon name="website" size={64} />
          <Text className="text-md tracking-wide" type="expandedBold">
            {t("websites")}
          </Text>
        </div>
        <div className="w-full aspect-square bg-primaryDark hover:bg-dark hover:text-light transition-colors duration-500 rounded-2xl center gap-4 flex-col">
          <Icon name="webapp" size={64} />
          <Text className="text-md tracking-wide" type="expandedBold">
            {t("webapps")}
          </Text>
        </div>
      </div>

      <Text type="expanded" className="text-5xl mb-5 mt-16">
        {t("iDesign")}
      </Text>

      <div className="grid grid-cols-2 gap-10">
        <div className="w-full aspect-square bg-primaryDark hover:bg-dark hover:text-light transition-colors duration-500 rounded-2xl center gap-4 flex-col">
          <Icon name="ui" size={64} />
          <Text className="text-md tracking-wide" type="expandedBold">
            {t("ui")}
          </Text>
        </div>
        <div className="w-full aspect-square bg-primaryDark hover:bg-dark hover:text-light transition-colors duration-500 rounded-2xl center gap-4 flex-col">
          <Icon name="ux" size={64} />
          <Text className="text-md tracking-wide" type="expandedBold">
            {t("ux")}
          </Text>
        </div>
      </div>
    </div>
  );
}
