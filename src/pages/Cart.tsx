import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { Minus, Plus, Trash2 } from "lucide-react";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, updateQuantity, removeFromCart, getCartTotal } = useCart();

  const handleCheckout = () => {
    if (cart.length > 0) {
      navigate("/checkout", { state: { cart } });
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">Your Cart</h1>
            
            {cart.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground mb-6">Your cart is empty</p>
                <Button onClick={() => navigate("/shop")} className="hover-glow">
                  Continue Shopping
                </Button>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map((item, index) => (
                  <div
                    key={`${item.name}-${item.size}-${index}`}
                    className="bg-background border border-border rounded-lg p-6 flex flex-col md:flex-row gap-6"
                  >
                    <div className="w-full md:w-32 h-32 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-grow space-y-2">
                      <h3 className="font-heading font-semibold text-xl">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">Size: {item.size}</p>
                      <p className="text-sm text-muted-foreground">Category: {item.cause}</p>
                      <p className="text-lg font-heading font-bold">₹{item.price}</p>
                    </div>

                    <div className="flex md:flex-col items-center md:items-end justify-between md:justify-start gap-4">
                      <div className="flex items-center gap-3 border border-border rounded-lg p-2">
                        <button
                          onClick={() => updateQuantity(item.name, item.size, item.quantity - 1)}
                          className="hover:text-primary transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.name, item.size, item.quantity + 1)}
                          className="hover:text-primary transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.name, item.size)}
                        className="text-destructive hover:text-destructive/80 transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}

                <div className="border-t border-border pt-6 space-y-4">
                  <div className="flex justify-between items-center text-xl font-heading font-bold">
                    <span>Total:</span>
                    <span>₹{getCartTotal()}</span>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => navigate("/shop")}
                    >
                      Continue Shopping
                    </Button>
                    <Button
                      className="flex-1 hover-glow"
                      onClick={handleCheckout}
                    >
                      Proceed to Checkout
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cart;
