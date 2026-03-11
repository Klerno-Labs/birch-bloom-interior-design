import ServiceList from "@/components/sections/ServiceList";
import InvestmentCards from "@/components/sections/InvestmentCards";

export default function Services() {
  return (
    <div className="min-h-screen pt-32">
      {/* Hero Variant: Split */}
      <section className="min-h-[60vh] flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 bg-surface flex items-center justify-center p-12">
          <div className="max-w-xl">
            <h1 className="font-serif text-5xl md:text-6xl text-primary mb-6">
              Services & Expertise
            </h1>
            <p className="text-muted-foreground text-lg">
              From single room refreshes to comprehensive new builds, we offer a range of services tailored to your specific needs.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative">
           <img 
             src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2000" 
             alt="Interior Texture" 
             className="w-full h-full object-cover"
           />
        </div>
      </section>

      <ServiceList />
      <InvestmentCards />
    </div>
  );
}