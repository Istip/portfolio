import Text from "@/components/Text/Text";
import { useI18n } from "@/locales/client";

export default function FreeTime() {
  const t = useI18n();

  return (
    <Text type="expandedBold" className="text-3xl md:p-[50px] p-5">
      {t("freeTime")}
    </Text>
  );
}
