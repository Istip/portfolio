import { getI18n } from "@/locales/server";
import Text from "../Text/Text";

export default async function Menu() {
  const t = await getI18n();

  return (
    <li>
      <button className="center gap-2 group uppercase">
        <Text>{t("menu")}</Text>
        <div className="transition-all">
          <div className="h-[1px] w-8 transition-all duration-200 group-hover:w-16 bg-light rounded-full mb-1" />
          <div className="h-[1px] w-8 transition-all duration-200 group-hover:w-16 bg-light rounded-full mb-1" />
          <div className="h-[1px] w-8 transition-all duration-200 group-hover:w-16 bg-light rounded-full" />
        </div>
      </button>
    </li>
  );
}
