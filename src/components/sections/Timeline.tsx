"use client";
import { cn } from "@/lib/utils";

export function Timeline() {
  const steps = [
    { title: "Consultation", description: "Discuss your vision and needs." },
    { title: "Design", description: "Create a tailored design plan." },
    { title: "Build", description: "Transform your space into reality." },
  ];

  return (
    <div className="relative">
      {steps.map((step, index) => (
        <div key={index} className={cn("flex items-start mb-8", index % 2 === 0 ? "flex-row" : "flex-row-reverse")}>
          <div className="w-1/3 text-center">
            <h3 className="font-bold">{step.title}</h3>
          </div>
          <div className="w-2/3">
            <p>{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}