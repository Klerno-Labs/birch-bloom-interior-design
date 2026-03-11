"use client";
import { useEffect, useRef } from 'react';

export default function Marquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (marquee) {
      const scrollWidth = marquee.scrollWidth;
      let start = 0;
      const animate = () => {
        start = (start + 1) % scrollWidth;
        marquee.scrollLeft = start;
        requestAnimationFrame(animate);
      };
      animate();
    }
  }, []);

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div ref={marqueeRef} className="inline-block">
        <span className="mx-4">Featured in Architectural Digest</span>
        <span className="mx-4">Best of Houzz 2023</span>
        <span className="mx-4">ASID Certified</span>
      </div>
    </div>
  );
}