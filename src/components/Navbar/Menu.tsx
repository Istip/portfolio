import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Icon from "../Icon/Icon";
import { MenuItem, menuItems } from "./menuItem";
import Link from "next/link";
import Text from "../Text/Text";

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Menu({ setOpen }: Props) {
  const [selected, setSelected] = useState<null | MenuItem>(null);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [setOpen]);

  useEffect(() => {
    console.log("✅ selected:", selected);
  }, [selected]);

  return (
    <motion.div
      initial={{ opacity: 0, x: "100vw" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 1, x: "100vw" }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 w-full h-full bg-dark z-[99999] center"
      onClick={() => setOpen(false)}
    >
      <button
        className="absolute right-6 top-6 pl-6"
        onClick={() => setOpen(false)}
      >
        <Icon name="close" />
      </button>
      <div className="grid grid-cols-3 w-full h-full">
        <motion.div
          className={`center transition-colors ease-in-out duration-500 ${
            selected?.bg ?? "bg-primary"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {selected?.name}
        </motion.div>
        <div className="col-span-2 flex items-center p-10 group">
          <ul className="flex flex-col">
            {menuItems.map((item) => (
              <Link
                href={item.link}
                key={item.id}
                onMouseEnter={() => setSelected(item)}
                onMouseLeave={() => setSelected(null)}
              >
                <Text as="li" className="uppercase text-7xl">
                  {item.name}
                </Text>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
