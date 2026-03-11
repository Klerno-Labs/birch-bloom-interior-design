import { images } from "@/config/images";

const Hero = ({ variant }: { variant: "cinematic" | "typography" | "split" }) => {
  return (
    <section className={`min-h-[80vh] flex items-center justify-center relative`}>
      {variant === "cinematic" && (
        <img src={images.hero.src} alt={images.hero.alt} className="absolute inset-0 object-cover w-full h-full" />
      )}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-6xl font-bold">Spaces That Tell Your Story</h1>
        <p className="mt-4 text-lg">Transforming your home into a sanctuary.</p>
        <button className="mt-8 bg-[#2c2c2c] text-white px-6 py-3 rounded">Book Consultation</button>
      </div>
    </section>
  );
};

export default Hero;