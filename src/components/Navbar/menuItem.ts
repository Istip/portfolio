import { IconName } from "../Icon/Icon";

export type MenuItem = {
  id: number;
  bg: string;
  name: string;
  link: string;
  icon: IconName;
};

export type MenuItemTranslation =
  | "home"
  | "about"
  | "showcase"
  | "services"
  | "contact";

export const menuItems = [
  {
    id: 1,
    icon: "home",
    bg: "bg-yellow-500",
    name: "home",
    link: "/",
  },
  {
    id: 2,
    icon: "userProfile",
    bg: "bg-amber-500",
    name: "about",
    link: "/about",
  },
  {
    id: 3,
    icon: "showcase",
    bg: "bg-orange-500",
    name: "showcase",
    link: "/showcase",
  },
  {
    id: 4,
    icon: "services",
    bg: "bg-rose-500",
    name: "services",
    link: "/services",
  },
  {
    id: 5,
    icon: "envelope",
    bg: "bg-red-600",
    name: "contact",
    link: "/contact",
  },
];
