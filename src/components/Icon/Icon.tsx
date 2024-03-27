import { cloneElement } from "react";
import icons from "./icons/_icons";

export type IconName = keyof typeof icons;

type Props = {
  name: IconName;
  size?: number;
  color?: string;
};

const Icon: React.FC<Props> = ({ name, size, color }) => {
  const selectedIcon = icons[name];

  if (!selectedIcon) {
    return null;
  }

  return (
    <div className="flex items-center">
      {cloneElement(selectedIcon, { size, color })}
      <span className="sr-only">{name.toUpperCase()}</span>
    </div>
  );
};

export default Icon;
