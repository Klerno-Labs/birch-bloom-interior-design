import { ContactForm } from "@/components/sections/ContactForm";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export const metadata = {
  title: "Contact | Birch & Bloom Interior Design",
  description: "Get in touch with us to start your design journey.",
  openGraph: {
    title: "Contact | Birch & Bloom Interior Design",
    description: "Get in touch with us to start your design journey.",
  },
};

export default function ContactPage() {
  return (
    <SectionWrapper>
      <h1 className="text-4xl font-bold text-center mb-8">Let's Create Together</h1>
      <ContactForm />
    </SectionWrapper>
  );
}