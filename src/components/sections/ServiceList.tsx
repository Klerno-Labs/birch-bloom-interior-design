import { images } from '@/config/images';

export function ServiceList() {
  const services = [
    { title: "Full Home Design", price: "From $15,000", description: "Complete design from concept to installation" },
    { title: "Room Refresh", price: "From $3,500", description: "Single room transformation" },
    { title: "Design Consultation", price: "$350/2hrs", description: "In-home walkthrough + design direction" },
    { title: "Virtual Design", price: "From $1,500", description: "Moodboard, floor plan, shopping list" },
    { title: "Staging for Sale", price: "From $2,500", description: "Maximize home value before listing" },
    { title: "Holiday Styling", price: "From $800", description: "Seasonal decor transformation" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {services.map(service => (
        <div key={service.title} className="border border-gray-300 rounded-lg p-6">
          <h3 className="text-xl font-bold">{service.title}</h3>
          <p className="text-lg">{service.price}</p>
          <p className="text-gray-600">{service.description}</p>
        </div>
      ))}
    </div>
  );
}