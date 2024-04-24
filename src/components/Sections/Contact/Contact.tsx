"use client";

import { useScopedI18n } from "@/locales/client";
import Text from "../../Text/Text";
import ContactForm from "./ContactForm";
import ContactButton from "./ContactButton";

export default function Contact() {
  const scopedT = useScopedI18n("contactPage");

  return (
    <>
      <Text className="text-xl sm:text-2xl">{scopedT("intro")}</Text>
      <ContactButton />
      <ContactForm />
      <Text className="text-xl sm:text-2xl mt-12">{scopedT("outro")}</Text>
    </>
  );
}
