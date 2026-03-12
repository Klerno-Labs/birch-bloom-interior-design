import { images } from "@/config/images";

export default function PortfolioPage() {
  return (
    <section className="pt-20">
      <h1 className="text-4xl font-bold text-center">Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example project cards */}
        <div className="border rounded-lg overflow-hidden">
          <img src={images["gallery-1"].src} alt={images["gallery-1"].alt} className="w-full h-48 object-cover" />
          <h2 className="text-lg font-semibold">{images["gallery-1"].alt}</h2>
        </div>
        {/* Add more project cards as needed */}
      </div>
    </section>
  );
}