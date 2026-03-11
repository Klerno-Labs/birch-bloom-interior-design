"use client";
import { useEffect } from "react";
import { Lenis } from "@studio-freight/lenis";

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => t,
      smooth: true,
    });

    const scroll = () => {
      lenis.raf();
      requestAnimationFrame(scroll);
    };

    requestAnimationFrame(scroll);
    return () => lenis.destroy();
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;