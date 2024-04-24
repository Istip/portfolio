"use client";

import { Tilt } from "react-tilt";

export default function TiltCard({ children }: { children: React.ReactNode }) {
  const options = {
    reverse: false,
    max: 35,
    perspective: 1000,
    scale: "1",
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
  };

  return (
    <Tilt options={options} className="relative group -z-0">
      <div className="relative z-10">{children}</div>
      <div className="absolute w-full h-full bg-primaryDark transition-all top-0 left-0 scale-100 rounded-3xl group-hover:rounded-3xl group-hover:scale-105 hidden lg:block" />
    </Tilt>
  );
}
