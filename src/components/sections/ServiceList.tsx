import { images } from "@/config/images";

const services = [
  { title: "Full Home Design", price: "From $15,000", description: "Complete design from concept to installation." },
  { title: "Room Refresh", price: "From $3,500", description: "Single room transformation." },
  { title: "Design Consultation", price: "$350/2hrs", description: "In-home walkthrough + design direction." },
  { title: "Virtual Design", price: "From $1,500", description: "Moodboard, floor plan, shopping list." },
  { title: "Staging for Sale", price: "From $2,500", description: "Maximize home value before listing." },
  { title: "Holiday Styling", price: "From $800", description: "Seasonal decor transformation." },
];

const InteractiveServiceList = () => {
  return (
    <section className="py-16">
      <h2 className="text-center text-3xl font-bold mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => (
          <div key={service.title} className="border p-6 rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="text-lg">{service.price}</p>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InteractiveServiceList;