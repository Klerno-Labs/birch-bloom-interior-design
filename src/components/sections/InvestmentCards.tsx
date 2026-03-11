"use client";
import { cn } from '@/lib/utils';

export default function InvestmentCards() {
  const investments = [
    { title: "Full Home Design", price: "From $15,000" },
    { title: "Room Refresh", price: "From $3,500" },
    { title: "Design Consultation", price: "$350/2hrs" },
    { title: "Virtual Design", price: "From $1,500" },
    { title: "Staging for Sale", price: "From $2,500" },
    { title: "Holiday Styling", price: "From $800" },
  ];

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-6")}>
      {investments.map(investment => (
        <div key={investment.title} className="border rounded-lg p-4">
          <h3 className="text-xl font-bold">{investment.title}</h3>
          <p className="text-lg font-semibold">{investment.price}</p>
        </div>
      ))}
    </div>
  );
}