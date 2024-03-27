"use client";

import { useChangeLocale, useCurrentLocale } from "@/locales/client";

const LanguageSelector = () => {
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();

  const toggleLocale = () => changeLocale(locale === "en" ? "hu" : "en");
  const otherLocale = locale === "en" ? "hu" : "en";

  return (
    <div>
      <button onClick={toggleLocale} className="uppercase">
        {otherLocale}
      </button>
    </div>
  );
};

export default LanguageSelector;
