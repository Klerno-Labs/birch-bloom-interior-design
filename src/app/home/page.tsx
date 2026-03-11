```typescript
import { images } from '@/config/images';

export default function HomePage() {
  return (
    <main>
      <section className="min-h-[80vh] bg-cover bg-center" style={{ backgroundImage: `url(${images.hero.src})` }}>
        <div className="bg-gradient-to-t from-black/60 to-transparent h-full flex items-end p-8">
          <h1 className="text-6xl font-bold text-[#faf8f5]">Spaces That Tell Your Story</h1>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <h2 className="text-3xl font-bold text-center">Curating Sanctuaries</h2>
        <p className="text-lg text-center">Transforming your home into a beautiful and functional space.</p>
      </section>
      {/* Additional sections will go here */}
    </main>
  );
}
```