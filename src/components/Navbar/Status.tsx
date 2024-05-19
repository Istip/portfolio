import { useScopedI18n } from "@/locales/client";
import { usePathname } from "next/navigation";
import Text from "../Text/Text";
import Link from "next/link";
import Logo from "../Logo/Logo";
import useWindowSize from "@/hooks/useWindowSize";
import Icon from "../Icon/Icon";
import * as Tooltip from "@radix-ui/react-tooltip";

const statuses = [
  { name: "available", color: "bg-green-500" },
  { name: "partiallyAvailable", color: "bg-yellow-500" },
  { name: "veryBusy", color: "bg-red-500" },
];

export default function Status() {
  const pathname = usePathname();

  const disabledPath = pathname === "/contact";

  const scoped = useScopedI18n("status");

  const { width } = useWindowSize();
  const largeScreen = width && width > 1024;

  let { name, color } = statuses[0];

  let key: "available" | "partiallyAvailable" | "veryBusy" = name as
    | "available"
    | "partiallyAvailable"
    | "veryBusy";

  return (
    <div className="center gap-2">
      <Tooltip.Provider>
        <Tooltip.Root delayDuration={0}>
          <Tooltip.Trigger aria-description="LOGO">
            <Link href="/">
              <Logo className="text-stone-800" />
              <div className="sr-only">LOGO</div>
            </Link>
            <div className="sr-only">LOGO</div>
          </Tooltip.Trigger>
          {largeScreen && !disabledPath && (
            <Tooltip.Portal>
              <Tooltip.Content
                side="bottom"
                sideOffset={10}
                className="mx-5 p-3 bg-stone-900 shadow-xl rounded-full rounded-tl-none text-light"
              >
                <Link
                  href="/contact"
                  className="center gap-2 text-light px-2 py-1 rounded-2xl relative transition group"
                >
                  <div className="relative mr-2">
                    <div
                      className={`${color} w-4 aspect-square rounded-full animate-ping`}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className={`${color} w-3 aspect-square rounded-full`}
                      />
                    </div>
                  </div>
                  <Text className="text-xs" type="expanded">
                    {scoped(key)}
                  </Text>
                  <div className="text-white pl-0 w-0 transition-all group-hover:w-auto group-hover:pl-2">
                    <Icon name="chevronRight" />
                  </div>
                </Link>
              </Tooltip.Content>
            </Tooltip.Portal>
          )}
        </Tooltip.Root>
      </Tooltip.Provider>
    </div>
  );
}
