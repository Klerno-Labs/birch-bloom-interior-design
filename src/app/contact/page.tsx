import { Metadata } from "next";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Birch & Bloom Interior Design",
  description: "Get in touch with us to start your design journey.",
  openGraph: {
    title: "Contact | Birch & Bloom Interior Design",
    description: "Get in touch with us to start your design journey.",
  },
};

export default function Contact() {
  return (
    <main>
      <h1 className="text-center text-4xl font-bold mb-8">Let's Create Together</h1>
      <ContactForm />
    </main>
  );
}