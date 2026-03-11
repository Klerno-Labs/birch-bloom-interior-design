const logos = [
  "Architectural Digest",
  "Vogue Living",
  "Southern Living",
  "House Beautiful",
  "Elle Decor",
  "Dwell",
  "Veranda",
  "Interior Design"
];

const Marquee = () => {
  return (
    <div className="bg-primary py-8 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...logos, ...logos, ...logos].map((logo, idx) => (
          <span key={idx} className="text-background/40 font-serif text-xl mx-8 uppercase tracking-widest">
            {logo}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;