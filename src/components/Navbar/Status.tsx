import { getScopedI18n } from "@/locales/server";
import Text from "../Text/Text";

const statuses = [
  { name: "available", color: "bg-primary" },
  { name: "partiallyAvailable", color: "bg-yellow-500" },
  { name: "veryBusy", color: "bg-red-500" },
];

export default async function Status() {
  const t = await getScopedI18n("status");

  let { name, color } = statuses[0];

  let key: "available" | "partiallyAvailable" | "veryBusy" = name as
    | "available"
    | "partiallyAvailable"
    | "veryBusy";

  return (
    <li className="center gap-2 text-dark bg-light px-2 py-1 rounded-full">
      <div className="relative">
        <div
          className={`${color} w-4 aspect-square rounded-full animate-ping`}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`${color} w-3 aspect-square rounded-full`} />
        </div>
      </div>
      <Text type="expanded">{t(key)}</Text>
    </li>
  );
}
