"use client";

import { useChangeLocale, useCurrentLocale } from "@/locales/client";
import Text from "../Text/Text";

const LanguageSelector = () => {
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();

  const toggleLocale = () => changeLocale(locale === "en" ? "hu" : "en");
  const swapLocale = locale === "en" ? "hu" : "en";

  return (
    <li>
      <button onClick={toggleLocale} className="uppercase bg-white center">
        <Text
          as="div"
          className="text-xs bg-white p-2 rounded-full border border-dark transition-all hover:bg-primaryLight"
        >
          {swapLocale}
        </Text>
      </button>
    </li>
  );
};

export default LanguageSelector;
