import { useI18n, useScopedI18n } from "@/locales/client";
import Text from "../Text/Text";
import Tooltip from "../Tooltip/Tooltip";
import Link from "next/link";
import Icon from "../Icon/Icon";
import Logo from "../Logo/Logo";

const statuses = [
  { name: "available", color: "bg-green-500" },
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
    <div className="center gap-2">
      <Tooltip content={t("backToHome")} variant="dark">
        <Link href="/" className="">
          <Logo className="text-stone-800" />
        </Link>
      </Tooltip>
      <Link
        href="/contact"
        className="group center gap-2 text-dark bg-light group hover:px-4 transition-all px-2 py-1 rounded-full"
      >
        <Text type="expanded">{scoped(key)}</Text>

        <div className="relative">
          <div
            className={`${color} w-4 aspect-square rounded-full animate-ping`}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`${color} w-3 aspect-square rounded-full`} />
          </div>
        </div>
        <div className="w-0 hidden group-hover:block group-hover:w-full">
          <Icon name="chevronRight" />
        </div>
      </Link>
    </div>
  );
}
