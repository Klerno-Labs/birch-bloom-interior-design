export function Marquee() {
  const logos = [
    { src: "https://via.placeholder.com/150", alt: "Logo 1" },
    { src: "https://via.placeholder.com/150", alt: "Logo 2" },
    { src: "https://via.placeholder.com/150", alt: "Logo 3" },
  ];

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className="flex animate-marquee">
        {logos.map(logo => (
          <img key={logo.alt} src={logo.src} alt={logo.alt} className="h-12 mx-4" />
        ))}
      </div>
    </div>
  );
}