import Text from "@/components/Text/Text";
import TiltCard from "./TiltCard";
import Icon, { IconName } from "@/components/Icon/Icon";
import { getI18n } from "@/locales/server";
import { Fragment } from "react";

export default async function AboutCards({
  className,
}: {
  className?: string;
}) {
  const t = await getI18n();

  const cards = [
    {
      title: t("iDevelop"),
      items: [
        { icon: "website" as IconName, text: t("websites") },
        { icon: "webapp" as IconName, text: t("webapps") },
      ],
    },
    {
      title: t("iDesign"),
      items: [
        { icon: "ui" as IconName, text: t("ui") },
        { icon: "ux" as IconName, text: t("ux") },
      ],
    },
  ];

  return (
    <div className={className}>
      {cards.map(({ title, items }) => (
        <Fragment key={title}>
          <Text type="expandedBold" className="text-3xl my-5">
            {title}
          </Text>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {items.map(({ icon, text }) => (
              <TiltCard key={icon}>
                <div className="w-full aspect-square transition-all bg-primaryDark hover:bg-dark hover:text-light duration-500 rounded-2xl center gap-4 flex-col">
                  <Icon name={icon} size={64} />
                  <Text
                    className="text-md tracking-wide text-center"
                    type="expandedBold"
                  >
                    {text}
                  </Text>
                </div>
              </TiltCard>
            ))}
          </div>
        </Fragment>
      ))}
    </div>
  );
}
