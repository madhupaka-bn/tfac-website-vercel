import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import SizeSelector from "./SizeSelector";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  cause: string;
  availableSizes: string[];
}

const ProductCard = ({ name, price, image, cause, availableSizes }: ProductCardProps) => {
  const navigate = useNavigate();
  const [showSizeSelector, setShowSizeSelector] = useState(false);

  const handleBuyNow = () => {
    setShowSizeSelector(true);
  };

  const handleSizeSelect = (size: string) => {
    navigate("/checkout", { 
      state: { product: { name, price, image, cause, size } } 
    });
  };

  return (
    <Card className="group overflow-hidden border-border hover:border-primary transition-all hover:shadow-lg">
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-heading font-semibold mb-1">{name}</h3>
        <p className="text-lg font-heading font-bold">₹{price}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full hover-glow" onClick={handleBuyNow}>
          Buy Now
        </Button>
      </CardFooter>
      
      <SizeSelector
        isOpen={showSizeSelector}
        onClose={() => setShowSizeSelector(false)}
        onSelectSize={handleSizeSelect}
        productName={name}
      />
    </Card>
  );
};

export default ProductCard;
