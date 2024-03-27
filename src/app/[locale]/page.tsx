"use client";

import Text from "@/components/Text/Text";
import { useI18n } from "@/locales/client";

export default function Home() {
  const t = useI18n();

  return (
    <div>
      <h1>{t("hello")}</h1>
      <Text as="h1" type="mona" className="text-red-500 text-7xl">
        Istvan Pasztor
      </Text>
    </div>
  );
}
