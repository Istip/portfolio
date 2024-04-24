"use client";

import Icon from "@/components/Icon/Icon";
import Text from "@/components/Text/Text";
import Tooltip from "@/components/Tooltip/Tooltip";
import { useI18n } from "@/locales/client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactButton() {
  const [copied, setCopied] = useState(false);
  const t = useI18n();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="flex items-center mt-10 px-5 rounded-3xl justify-center py-8 gap-2 flex-col xl:flex-row xl:justify-between bg-primary/50">
      <Text className="text-2xl">{t("reachMe")}</Text>

      <div className="center">
        <a
          href="mailto:isticsek@gmail.com"
          className="text-2xl center rounded-2xl px-4 py-2 bg-primaryDark mr-[1px] text-light hover:text-dark transition-colors"
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
  );
}
