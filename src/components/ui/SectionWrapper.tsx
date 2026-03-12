import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  background?: "alabaster" | "white" | "sand";
  padding?: "standard" | "tight" | "none";
  className?: string;
}

const SectionWrapper = ({
  children,
  background = "alabaster",
  padding = "standard",
  className,
}: SectionWrapperProps) => {
  const backgrounds = {
    alabaster: &quot;bg-background",
    white: "bg-surface",
    sand: "bg-accent/30",
  };

  const paddings = {
    standard: "py-16 md:py-24 lg:py-32",
    tight: "py-8 md:py-12",
    none: "",
  };

  return (
    <section
      className={cn(
        backgrounds[background],
        paddings[padding],
        "w-full relative",
        className
      )}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;