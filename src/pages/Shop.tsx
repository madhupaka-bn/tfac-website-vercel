import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedFilter, setSelectedFilter] = useState(() => {
    return searchParams.get("category") || "All";
  });

  useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      setSelectedFilter(category);
    }
  }, [searchParams]);
  const filters = ["All", "Personal", "Casual", "Hopeful"];
  const products = [{
    name: "You Decide",
    price: 699,
    image: "/assets/shop-personal-peace.jpg",
    cause: "Personal",
    availableSizes: ["S", "M", "L", "XL"]
  }, {
    name: "Be the Creator",
    price: 699,
    image: "/assets/shop-chasing-ghost.jpg",
    cause: "Personal",
    availableSizes: ["S", "M", "L", "XL"]
  }, {
    name: "The Sky is the Limit",
    price: 699,
    image: "/assets/shop-dream-big.jpg",
    cause: "Hopeful",
    availableSizes: ["S", "M", "L", "XL"]
  }, {
    name: "Always a Kid",
    price: 799,
    image: "/assets/shop-inner-child.jpg",
    cause: "Hopeful",
    availableSizes: ["S", "M", "L", "XL"]
  }, {
    name: "Growing?",
    price: 699,
    image: "/assets/shop-getting-old.jpg",
    cause: "Personal",
    availableSizes: ["S", "M", "L", "XL"]
  }, {
    name: "Red Bean",
    price: 799,
    image: "/assets/shop-coffee-pocket-light.jpg",
    cause: "Casual",
    availableSizes: ["S", "M", "L", "XL"]
  }, {
    name: "Matcha",
    price: 799,
    image: "/assets/shop-coffee-pocket-teal.jpg",
    cause: "Casual",
    availableSizes: ["S", "M", "L", "XL"]
  }, {
    name: "Don't make me math",
    price: 699,
    image: "/assets/dont-make-me-math.jpeg",
    cause: "Casual",
    availableSizes: ["S", "M", "L", "XL"]
  }];
  const filteredProducts = selectedFilter === "All" ? products : products.filter(p => p.cause === selectedFilter);
  return <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">Shop with Purpose</h1>
            <p className="text-xl text-muted-foreground">
              Every tee supports causes we collaborate with • 100% Cotton • ₹499 - ₹799
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map(filter => <Button key={filter} variant={selectedFilter === filter ? "default" : "outline"} onClick={() => setSelectedFilter(filter)} className={selectedFilter === filter ? "hover-glow" : ""}>
                {filter}
              </Button>)}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => <div key={index} className="fade-in" style={{
            animationDelay: `${index * 0.05}s`
          }}>
                <ProductCard {...product} />
              </div>)}
          </div>

          {filteredProducts.length === 0 && <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No products found for this filter.</p>
            </div>}
        </div>
      </section>

      {/* Impact Message */}
      <section id="pricing" className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center fade-in">
            <h2 className="text-3xl font-heading font-bold mb-6">Transparent Pricing Breakdown (eg ₹700)</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="p-6 rounded-lg bg-background border border-border">
                <p className="text-3xl font-heading font-bold mb-2">₹450</p>
                <p className="text-sm text-muted-foreground">T-shirt Cost & Operations</p>
              </div>
              <div className="p-6 rounded-lg bg-primary/10 border border-primary">
                <p className="text-3xl font-heading font-bold mb-2">₹90</p>
                <p className="text-sm text-muted-foreground">Donated to Causes</p>
              </div>
              <div className="p-6 rounded-lg bg-background border border-border">
                <p className="text-3xl font-heading font-bold mb-2">₹90</p>
                <p className="text-sm text-muted-foreground">Goes to Community</p>
              </div>
              <div className="p-6 rounded-lg bg-background border border-border">
                <p className="text-3xl font-heading font-bold mb-2">₹70</p>
                <p className="text-sm text-muted-foreground">Reinvested in Growth</p>
              </div>
            </div>
            <p className="text-lg text-muted-foreground">You're making a real difference with every purchase 💛</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Shop;