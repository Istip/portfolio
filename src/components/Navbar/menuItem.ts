export type MenuItem = {
  id: number;
  bg: string;
  name: string;
  link: string;
};

export type MenuItemTranslation =
  | "home"
  | "about"
  | "showcase"
  | "services"
  | "contact";

export const menuItems = [
  { id: 1, bg: "bg-red-500", name: "home", link: "/" },
  { id: 2, bg: "bg-sky-500", name: "about", link: "/about" },
  { id: 3, bg: "bg-amber-500", name: "showcase", link: "/showcase" },
  { id: 4, bg: "bg-lime-500", name: "services", link: "/services" },
  { id: 5, bg: "bg-orange-500", name: "contact", link: "/contact" },
];
