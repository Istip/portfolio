"use client";

import { useState } from "react";
import { useI18n, useScopedI18n } from "@/locales/client";
import { motion } from "framer-motion";
import Icon from "../../Icon/Icon";
import Text from "../../Text/Text";
import Tooltip from "../../Tooltip/Tooltip";
import ContactForm from "./ContactForm";

export default function Contact() {
  const t = useI18n();
  const tscoped = useScopedI18n("contactPage");
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div>
      <Text className="text-2xl">{tscoped("intro")}</Text>

      <div className="flex items-center justify-between py-8 gap-2">
        <Text className="text-2xl w-full">{t("reachMe")}</Text>

        <div className=" center">
          <a
            href="mailto:isticsek@gmail.com"
            className="text-2xl center rounded-2xl px-4 py-2 bg-primaryDark mr-0.5 text-light hover:text-dark transition-colors"
          >
            <Text>isticsek@gmail.com</Text>
          </a>

          <Tooltip content={copied ? t("copied") : t("copy")}>
            <button
              disabled={copied}
              type="button"
              onClick={() => copyToClipboard("isticsek@gmail.com")}
            >
              <motion.div className="center rounded-2xl px-4 py-3 bg-primaryDark text-light">
                <Icon name={copied ? "circleCheck" : "clipboard"} />
              </motion.div>
            </button>
          </Tooltip>
        </div>
      </div>

      <ContactForm />

      <div className="mt-12">
        <Text className="text-2xl">{tscoped("outro")}</Text>
      </div>
    </div>
  );
}
