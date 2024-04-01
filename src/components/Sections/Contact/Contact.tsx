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

      <div className="flex items-center justify-between py-8">
        <a
          href="mailto:isticsek@gmail.com"
          className="text-2xl underline underline-offset-[6px] text-stone-400 hover:text-primary transition-colors duration-300"
        >
          <Text>isticsek@gmail.com</Text>
        </a>

        <Tooltip content="isticsek@gmail.com">
          <button
            disabled={copied}
            type="button"
            onClick={() => copyToClipboard("isticsek@gmail.com")}
          >
            <Text as="div" className="center uppercase gap-2">
              <Text type="mona" className="font-bold">
                <motion.span
                  animate={{ color: !copied ? "#A2A3A4" : "#3EEA8D" }}
                >
                  {copied ? t("copied") : t("copy")}
                </motion.span>
              </Text>
              <motion.span animate={{ color: !copied ? "#A2A3A4" : "#3EEA8D" }}>
                <Icon name={copied ? "circleCheck" : "clipboard"} />
              </motion.span>
            </Text>
          </button>
        </Tooltip>
      </div>

      <ContactForm />

      <div className="mt-12">
        <Text className="text-2xl">{tscoped("outro")}</Text>
      </div>
    </div>
  );
}
