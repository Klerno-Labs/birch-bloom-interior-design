import { cn } from '@/lib/utils';
import ContactForm from '@/components/sections/ContactForm';

export const metadata = {
  title: "Contact | Birch & Bloom Interior Design",
  description: "Get in touch with us to start your design journey.",
  openGraph: {
    title: "Contact | Birch & Bloom Interior Design",
    description: "Get in touch with us to start your design journey.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
  },
};

export default function ContactPage() {
  return (
    <main className={cn("pt-20")}>
      <section className="bg-white py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Let's Create Together</h1>
        <div className="max-w-3xl mx-auto">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}