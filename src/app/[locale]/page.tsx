"use client";

import { useI18n } from "@/locales/client";

export default function Home() {
  const t = useI18n();

  return (
    <div>
      <h1>{t("hello")}</h1>
      <h1>Istvan Pasztor</h1>
    </div>
  );
}
