import { useEffect } from "react";
import { motion } from "framer-motion";
import Icon from "../Icon/Icon";

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Menu({ setOpen }: Props) {
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

  return (
    <motion.div
      initial={{ opacity: 0, x: "100vw" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 1, x: "100vw" }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 w-full h-full bg-dark z-[99999] center"
    >
      <button
        className="absolute right-6 top-6 pl-6"
        onClick={() => setOpen(false)}
      >
        <Icon name="close" />
      </button>
      <div className="grid grid-cols-3 w-full h-full">
        <motion.div
          className="bg-primary center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          1
        </motion.div>
        <div className="col-span-2 center">2</div>
      </div>
    </motion.div>
  );
}
