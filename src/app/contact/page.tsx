import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { ContactForm } from '@/components/sections/ContactForm';

export const metadata = {
  title: 'Contact - Birch & Bloom',
  description: 'Get in touch with us for your interior design needs.',
  openGraph: {
    title: 'Contact - Birch & Bloom',
    description: 'Get in touch with us for your interior design needs.',
  },
};

export default function ContactPage() {
  return (
    <SectionWrapper>
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <ContactForm />
    </SectionWrapper>
  );
}