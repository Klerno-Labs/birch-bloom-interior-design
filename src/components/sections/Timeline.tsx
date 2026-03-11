import { cn } from "@/lib/utils";

const steps = [
  {
    step: "01",
    title: "Discovery",
    desc: "We meet to discuss your vision, budget, and timeline. We walk through the space to understand its potential and constraints."
  },
  {
    step: "02",
    title: "Concept Design",
    desc: "We present moodboards, material palettes, and preliminary floor plans. We refine the direction until it perfectly aligns with your vision."
  },
  {
    step: "03",
    title: "Documentation",
    desc: "Final designs are translated into comprehensive drawings and specifications. We source materials and furniture to ensure availability."
  },
  {
    step: "04",
    title: "Installation",
    desc: "The fun part! We manage contractors, deliveries, and installation, ensuring every detail is executed to perfection."
  }
];

const Timeline = () => {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-[clamp(24px,5vw,80px)]">
        <h2 className="font-serif text-4xl md:text-5xl text-primary text-center mb-16">
          Our Process
        </h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-secondary/20 -translate-x-1/2 md:-translate-x-1/2" />

          {steps.map((item, idx) => (
            <div key={idx} className={cn(
              "relative flex flex-col md:flex-row items-start md:items-center mb-16 last:mb-0",
              idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            )}>
              {/* Node */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-secondary border-4 border-background -translate-x-1/2 z-10" />

              {/* Content */}
              <div className={cn(
                "w-full md:w-5/12",
                idx % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"
              )}>
                <span className="font-italic text-secondary text-sm mb-2 block">
                  Step {item.step}
                </span>
                <h3 className="font-serif text-2xl text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;