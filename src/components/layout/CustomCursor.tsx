"use client";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [cursorStyle, setCursorStyle] = useState({ left: 0, top: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorStyle({ left: e.clientX, top: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none w-8 h-8 bg-black rounded-full transform -translate-x-1/2 -translate-y-1/2"
      style={{ left: cursorStyle.left, top: cursorStyle.top }}
    />
  );
};

export default CustomCursor;