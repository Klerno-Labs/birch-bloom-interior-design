import { images } from "@/config/images";

const TestimonialParallax = () => {
  return (
    <section className="relative py-16">
      <img src={images.testimonial-bg.src} alt={images.testimonial-bg.alt} className="absolute inset-0 object-cover w-full h-full opacity-30" />
      <div className="relative z-10 text-center">
        <blockquote className="text-2xl italic mb-4">"Claire completely transformed our 1960s ranch into a modern sanctuary. We're still in awe."</blockquote>
        <cite className="text-lg">— The Hendersons</cite>
      </div>
    </section>
  );
};

export default TestimonialParallax;