import { getI18n } from "@/locales/server";
import React from "react";
import Text from "../Text/Text";
import ScrollToTop from "./ScrollToTop";

export default async function Footer() {
  const t = await getI18n();

  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Text
        as="div"
        type="expanded"
        className="bg-primary text-dark py-9 px-[50px] text-xs gap-10 select-none flex justify-between items-center w-full"
      >
        {t("copyright")} {t("firstName")} {t("lastName")} | {currentYear}
        <ScrollToTop />
      </Text>
    </footer>
  );
}
