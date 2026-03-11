const Timeline = () => {
  return (
    <section className="py-16">
      <h2 className="text-center text-3xl font-bold mb-8">Our Design Process</h2>
      <div className="flex flex-col">
        <div className="flex items-center mb-4">
          <div className="w-1 h-10 bg-[#8b7355] mr-4"></div>
          <div>
            <h3 className="font-semibold">Step 1: Consultation</h3>
            <p>We discuss your vision and needs.</p>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <div className="w-1 h-10 bg-[#8b7355] mr-4"></div>
          <div>
            <h3 className="font-semibold">Step 2: Design</h3>
            <p>We create a tailored design plan.</p>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <div className="w-1 h-10 bg-[#8b7355] mr-4"></div>
          <div>
            <h3 className="font-semibold">Step 3: Build</h3>
            <p>We transform your space into reality.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;