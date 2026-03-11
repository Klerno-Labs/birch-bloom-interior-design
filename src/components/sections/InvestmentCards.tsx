const InvestmentCards = () => {
  const investments = [
    { title: "Full Home Design", price: "From $15,000" },
    { title: "Room Refresh", price: "From $3,500" },
    { title: "Design Consultation", price: "$350/2hrs" },
    { title: "Virtual Design", price: "From $1,500" },
    { title: "Staging for Sale", price: "From $2,500" },
    { title: "Holiday Styling", price: "From $800" },
  ];

  return (
    <section className="py-16">
      <h2 className="text-center text-3xl font-bold mb-8">Investment Tiers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {investments.map((investment) => (
          <div key={investment.title} className="border p-6 rounded-lg">
            <h3 className="text-xl font-semibold">{investment.title}</h3>
            <p className="text-lg">{investment.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InvestmentCards;