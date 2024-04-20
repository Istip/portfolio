"use client";

import { usePathname } from "next/navigation";

export default function NavbarRoundel() {
  const pathname = usePathname();

  if (pathname !== "/") return null;

  return (
    <div className="hidden lg:flex text-dark">
      <svg
        width="8"
        height="8"
        viewBox="0 0 8 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 0H0C4.41846 0 8 3.58167 8 8V0Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
