import { Check } from "lucide-react";
import Button from "@/components/ui/Button";

const investments = [
  {
    title: "Full Home Design",
    price: "From $15,000",
    desc: "Complete design from concept to installation.",
    features: [
      "Concept Development",
      "Floor Plans & 3D Renderings",
      "Material & Finish Selections",
      "Procurement Management",
      "Installation Supervision"
    ]
  },
  {
    title: "Room Refresh",
    price: "From $3,500",
    desc: "Single room transformation using existing furnishings.",
    features: [
      "Space Planning",
      "Furniture Layout",
      "Decor & Accessorizing",
      "Color Palette Refresh",
      "Shopping List (Optional)"
    ]
  },
  {
    title: "Virtual Design",
    price: "From $1,500",
    desc: "Moodboard, floor plan, and shopping list.",
    features: [
      "Questionnaire Review",
      "Digital Moodboard",
      "Floor Plan Layout",
      "Shopping List with Links",
      "One Video Consult"
    ]
  }
];

const InvestmentCards = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-[1600px] mx-auto px-[clamp(24px,5vw,80px)]">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4">
            Investment
          </h2>
          <p className="font-italic text-secondary text-xl max-w-2xl mx-auto">
            Transparent pricing tailored to the scope of your project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {investments.map((item, idx) => (
            <div key={idx} className="bg-surface p-8 rounded-lg border border-accent/30 hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <h3 className="font-serif text-2xl text-primary mb-2">{item.title}</h3>
              <p className="text-secondary font-medium text-lg mb-4">{item.price}</p>
              <p className="text-muted-foreground mb-8 flex-grow">{item.desc}</p>
              
              <ul className="space-y-4 mb-8">
                {item.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-sm text-primary">
                    <Check className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button 
                label="Inquire" 
                href="/contact" 
                className="w-full justify-center" 
                variant="outline"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentCards;