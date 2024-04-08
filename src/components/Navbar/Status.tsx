import { useI18n, useScopedI18n } from "@/locales/client";
import Text from "../Text/Text";
import Tooltip from "../Tooltip/Tooltip";
import Link from "next/link";

const statuses = [
  { name: "available", color: "bg-primary" },
  { name: "partiallyAvailable", color: "bg-yellow-500" },
  { name: "veryBusy", color: "bg-red-500" },
];

export default function Status() {
  const scoped = useScopedI18n("status");
  const t = useI18n();

  let { name, color } = statuses[0];

  let key: "available" | "partiallyAvailable" | "veryBusy" = name as
    | "available"
    | "partiallyAvailable"
    | "veryBusy";

  return (
    <Tooltip content={t("backToHome")} variant="dark">
      <Link
        href="/"
        className="center gap-2 text-dark bg-light px-2 py-1 rounded-full"
      >
        <div className="relative">
          <div
            className={`${color} w-4 aspect-square rounded-full animate-ping`}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`${color} w-3 aspect-square rounded-full`} />
          </div>
        </div>
        <Text type="expanded">{scoped(key)}</Text>
      </Link>
    </Tooltip>
  );
}
