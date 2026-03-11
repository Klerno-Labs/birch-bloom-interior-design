import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Timeline } from "@/components/sections/Timeline";

export const metadata = {
  title: "Our Process | Birch & Bloom Interior Design",
  description: "Discover our unique design process that ensures a seamless experience.",
  openGraph: {
    title: "Our Process | Birch & Bloom Interior Design",
    description: "Discover our unique design process that ensures a seamless experience.",
  },
};

export default function ProcessPage() {
  return (
    <SectionWrapper>
      <h1 className="text-4xl font-bold text-center mb-8">Our Design Process</h1>
      <Timeline />
    </SectionWrapper>
  );
}