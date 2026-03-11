"use client";
import { images } from "@/config/images";

export function ServiceList() {
  const services = [
    { title: "Full Home Design", description: "Complete design from concept to installation", price: "From $15,000" },
    { title: "Room Refresh", description: "Single room transformation", price: "From $3,500" },
    { title: "Design Consultation", description: "In-home walkthrough + design direction", price: "$350/2hrs" },
    { title: "Virtual Design", description: "Moodboard, floor plan, shopping list", price: "From $1,500" },
    { title: "Staging for Sale", description: "Maximize home value before listing", price: "From $2,500" },
    { title: "Holiday Styling", description: "Seasonal decor transformation", price: "From $800" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service) => (
        <div key={service.title} className="border rounded-lg p-4 bg-white shadow-md">
          <h3 className="text-lg font-bold">{service.title}</h3>
          <p className="text-gray-600">{service.description}</p>
          <p className="text-gray-900 font-semibold">{service.price}</p>
        </div>
      ))}
    </div>
  );
}