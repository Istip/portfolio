"use client";

import Text from "@/components/Text/Text";
import { useI18n } from "@/locales/client";

export default function Home() {
  const t = useI18n();

  return (
    <div>
      <Text as="h1" type="mona" className="text-dark text-7xl">
        {t("hello")} Istvan Pasztor
      </Text>
    </div>
  );
}
