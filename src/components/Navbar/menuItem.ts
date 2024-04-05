export type MenuItem = {
  id: number;
  bg: string;
  name: string;
  link: string;
};

export const menuItems = [
  { id: 1, bg: "bg-red-500", name: "Home", link: "/" },
  { id: 2, bg: "bg-sky-500", name: "About", link: "/about" },
  { id: 3, bg: "bg-amber-500", name: "Showcase", link: "/showcase" },
  { id: 4, bg: "bg-lime-500", name: "Services", link: "/services" },
  { id: 5, bg: "bg-orange-500", name: "Contact", link: "/contact" },
];
