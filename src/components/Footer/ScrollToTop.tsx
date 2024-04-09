"use client";

import Icon from "../Icon/Icon";

export default function ScrollToTop() {
  return (
    <button
      className="text-dark"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <div className="transform rotate-180 bg-primaryDark p-0.5 rounded-full text-light transition-all hover:animate-pulse">
        <Icon name="arrowDown" />
      </div>
    </button>
  );
}
