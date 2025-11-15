import { Palette, ShoppingBag, Heart } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Palette,
      title: "Design",
      description: "Youth designers create meaningful artwork for our tees",
    },
    {
      icon: ShoppingBag,
      title: "Wear",
      description: "You purchase a tee that speaks to you and your values",
    },
    {
      icon: Heart,
      title: "Impact",
      description: "25% goes to Geet Foundation to empower youth across India",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Three simple steps from design to real-world impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary mb-6">
                <step.icon className="h-10 w-10 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 w-full h-0.5 bg-border z-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
