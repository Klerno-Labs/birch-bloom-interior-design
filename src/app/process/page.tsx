import { Metadata } from "next";
import Timeline from "@/components/sections/Timeline";

export const metadata: Metadata = {
  title: "Process | Birch & Bloom Interior Design",
  description: "Discover our design process from consultation to completion.",
  openGraph: {
    title: "Process | Birch & Bloom Interior Design",
    description: "Discover our design process from consultation to completion.",
  },
};

export default function Process() {
  return (
    <main>
      <h1 className="text-center text-4xl font-bold mb-8">How We Work</h1>
      <Timeline />
    </main>
  );
}