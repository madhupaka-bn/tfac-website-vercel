import { TrendingUp, MapPin, HandHeart } from "lucide-react";
const ImpactCounter = () => {
  const stats = [{
    icon: TrendingUp,
    value: "₹2,50,000",
    label: "Donated to Causes"
  }, {
    icon: MapPin,
    value: "10+",
    label: "Cities"
  }, {
    icon: HandHeart,
    value: "20+",
    label: "Volunteers"
  }];
  return <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Our Impact So Far
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Every purchase contributes to real change through our partnerships with NGOs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => <div key={index} className="text-center p-8 rounded-lg bg-background border border-border hover:border-primary transition-all fade-in" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-4xl font-heading font-bold mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default ImpactCounter;