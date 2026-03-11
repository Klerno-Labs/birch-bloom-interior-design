export function InvestmentCards() {
  const investments = [
    { title: "Full Home Design", price: "From $15,000" },
    { title: "Room Refresh", price: "From $3,500" },
    { title: "Design Consultation", price: "$350/2hrs" },
    { title: "Virtual Design", price: "From $1,500" },
    { title: "Staging for Sale", price: "From $2,500" },
    { title: "Holiday Styling", price: "From $800" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {investments.map(investment => (
        <div key={investment.title} className="border border-gray-300 rounded-lg p-6">
          <h3 className="text-xl font-bold">{investment.title}</h3>
          <p className="text-lg">{investment.price}</p>
        </div>
      ))}
    </div>
  );
}