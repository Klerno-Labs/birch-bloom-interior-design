import ContactForm from "@/components/sections/ContactForm";

export default function Contact() {
  return (
    <div className="min-h-screen pt-32">
      <section className="bg-accent/20 pb-24 pt-10">
        <div className="max-w-4xl mx-auto px-[clamp(24px,5vw,80px)] text-center">
          <h1 className="font-serif text-5xl md:text-6xl text-primary mb-6">
            Let's Create Together
          </h1>
          <p className="text-muted-foreground text-lg">
            We'd love to hear from you. Fill out the form below or visit our studio.
          </p>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-[1600px] mx-auto px-[clamp(24px,5vw,80px)]">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}