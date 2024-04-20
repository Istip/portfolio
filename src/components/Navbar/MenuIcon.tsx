import { useI18n } from "@/locales/client";
import Text from "../Text/Text";

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  text: string;
}

export default function MenuIcon({ setOpen, text }: Props) {
  const t = useI18n();

  const bg = text === "text-dark" ? "bg-dark" : "lg:bg-light bg-dark";

  return (
    <li>
      <button
        className="center gap-2 group uppercase"
        onClick={() => setOpen(true)}
      >
        <Text>{t("menu")}</Text>
        <div className={`transition-all`}>
          <span className="sr-only">{t("menu")}</span>
          <div
            className={`h-[1px] w-8 transition-all duration-200 group-hover:w-16 ${bg} ${text} rounded-full mb-1`}
          />
          <div
            className={`h-[1px] w-8 transition-all duration-200 group-hover:w-16 ${bg} ${text} rounded-full mb-1`}
          />
          <div
            className={`h-[1px] w-8 transition-all duration-200 group-hover:w-16 ${bg} ${text} rounded-full`}
          />
        </div>
      </button>
    </li>
  );
}
