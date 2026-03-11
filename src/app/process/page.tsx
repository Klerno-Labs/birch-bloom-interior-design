import { cn } from '@/lib/utils';

export const metadata = {
  title: "Process | Birch & Bloom Interior Design",
  description: "Discover our design process and how we create beautiful spaces.",
  openGraph: {
    title: "Process | Birch & Bloom Interior Design",
    description: "Discover our design process and how we create beautiful spaces.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
  },
};

export default function ProcessPage() {
  return (
    <main className={cn("pt-20")}>
      <section className="bg-white py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Our Process</h1>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg mb-4">
            Our design process is a collaborative journey that involves understanding your needs, creating tailored solutions, and executing with precision. We guide you through every step, ensuring a seamless experience.
          </p>
          <ol className="list-decimal list-inside">
            <li className="mb-2">Consultation: Understanding your vision and requirements.</li>
            <li className="mb-2">Design: Crafting a personalized design plan.</li>
            <li>Build: Bringing your vision to life with meticulous attention to detail.</li>
          </ol>
        </div>
      </section>
    </main>
  );
}