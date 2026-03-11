import { Compass, Ruler, Hammer } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    icon: <Compass className="w-8 h-8" />,
    title: "Consult",
    desc: "We begin with a deep dive into your lifestyle, vision, and the unique potential of your space.",
  },
  {
    icon: <Ruler className="w-8 h-8" />,
    title: "Design",
    desc: "Concepts come to life through moodboards, floor plans, and curated material selections.",
  },
  {
    icon: <Hammer className="w-8 h-8" />,
    title: "Build",
    desc: "Our team manages every detail of installation and renovation to bring the design to fruition.",
  },
];

const ProcessTeaser = () => {
  return (
    <section className="py-24 bg-accent/20">
      <div className="max-w-[1600px] mx-auto px-[clamp(24px,5vw,80px)]">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4">
            How We Work
          </h2>
          <p className="text-muted-foreground">
            A collaborative journey from initial concept to final walkthrough.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-surface p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center text-secondary mb-6">
                {step.icon}
              </div>
              <h3 className="font-serif text-2xl text-primary mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
           <a href="/process" className="inline-block border-b border-primary text-primary hover:text-secondary hover:border-secondary transition-colors pb-1">
             View our full process &rarr;
           </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessTeaser;