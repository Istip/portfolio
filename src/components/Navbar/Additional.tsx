import { useScopedI18n } from "@/locales/client";
import Text from "../Text/Text";
import Link from "next/link";
import { icons } from "./icons";

export default function Additional() {
  const scoped = useScopedI18n("additional");

  const currentHour = new Date().toLocaleTimeString("ro-RO", {
    hour: "2-digit",
  });

  const currentMinute = new Date()
    .toLocaleTimeString("ro-RO", {
      minute: "2-digit",
    })
    .padStart(2, "0");

  return (
    <div className="text-dark space-y-4">
      <div className="text-left lg:text-right">
        <Text type="expanded">{scoped("name")}</Text>
        <Text type="expanded">{scoped("location")}</Text>
        <Link href="mailto:isticsek@gmail.com">
          <Text type="expandedBold">isticsek@gmail.com</Text>
        </Link>
      </div>
      <div className="text-left lg:text-right">
        <Text as="span" type="expanded">
          {scoped("currentTime")}:{" "}
          <Text as="span" type="expandedBold">
            {currentHour}
            <span className="animate-ping duration-1000">:</span>
            {currentMinute}
          </Text>
        </Text>
      </div>

      <div className="flex justify-between gap-2 items-center">
        {icons.map((icon) => (
          <Link
            key={icon.link}
            href={icon.link}
            className="text-light hover:text-dark transition-colors"
            title={icon.title}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">{icon.title}</span>
            {icon.render}
          </Link>
        ))}
      </div>
    </div>
  );
}
