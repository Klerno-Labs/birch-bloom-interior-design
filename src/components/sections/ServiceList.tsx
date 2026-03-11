"use client";
import { images } from '@/config/images';

export default function ServiceList() {
  const services = [
    { title: "Full Home Design", price: "From $15,000", description: "Complete design from concept to installation", image: images.service-1.src },
    { title: "Room Refresh", price: "From $3,500", description: "Single room transformation", image: images.service-2.src },
    { title: "Design Consultation", price: "$350/2hrs", description: "In-home walkthrough + design direction", image: images.service-3.src },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {services.map(service => (
        <div key={service.title} className="border rounded-lg p-4">
          <img src={service.image} alt={service.title} className="rounded-lg mb-4" />
          <h3 className="text-xl font-bold">{service.title}</h3>
          <p className="text-gray-700">{service.description}</p>
          <p className="text-lg font-semibold">{service.price}</p>
        </div>
      ))}
    </div>
  );
}