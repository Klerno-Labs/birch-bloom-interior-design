import Timeline from "@/components/sections/Timeline";
import Button from "@/components/ui/Button";

export default function Process() {
  return (
    <div className="min-h-screen pt-32">
      <section className="bg-background pb-24 pt-10">
        <div className="max-w-4xl mx-auto px-[clamp(24px,5vw,80px)] text-center">
          <span className="font-italic text-secondary text-lg mb-4 block">How We Work</span>
          <h1 className="font-serif text-5xl md:text-6xl text-primary mb-8">
            The Design Journey
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our process is designed to be collaborative, transparent, and exciting. We guide you through every step, ensuring you feel supported and informed.
          </p>
        </div>
      </section>

      <section className="bg-surface py-24">
        <Timeline />
      </section>

      <section className="py-24 bg-background text-center">
        <h2 className="font-serif text-3xl text-primary mb-6">Ready to start?</h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          Take the first step towards your dream home with a consultation.
        </p>
        <Button label="Book Consultation" href="/contact" />
      </section>
    </div>
  );
}