"use client";

import { useScopedI18n } from "@/locales/client";
import Text from "../../Text/Text";
import ContactForm from "./ContactForm";
import ContactButton from "./ContactButton";

export default function Contact() {
  const tscoped = useScopedI18n("contactPage");

  return (
    <>
      <Text className="text-2xl">{tscoped("intro")}</Text>
      <ContactButton />
      <ContactForm />
      <Text className="text-2xl mt-12">{tscoped("outro")}</Text>
    </>
  );
}
