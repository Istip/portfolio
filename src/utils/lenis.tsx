"use client";

import { useEffect } from "react";
import LenisScroll from "@studio-freight/lenis";

export default function Lenis() {
  useEffect(() => {
    const lenis = new LenisScroll({ duration: 1.5 });
    let animationFrameId: number;

    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <></>;
}
