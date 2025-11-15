import { useLocation, useNavigate } from "react-router-dom";
import { createOrder, verifyPayment } from "@/api/api.js"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Instagram, Facebook, Twitter } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const shippingSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address"),
  phone: z.string().trim().min(10, "Phone number must be at least 10 digits").max(15, "Phone number must be less than 15 digits"),
  address: z.string().trim().min(10, "Please provide a complete address").max(500, "Address must be less than 500 characters"),
});

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;
  const cart = location.state?.cart;
  const [showShippingForm, setShowShippingForm] = useState(false);

  const form = useForm<z.infer<typeof shippingSchema>>({
    resolver: zodResolver(shippingSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
    },
  });

  useEffect(() => {
    if (!product && !cart) {
      navigate("/shop");
    }
  }, [product, cart, navigate]);

  if (!product && !cart) return null;

  const onSubmit = async (data: z.infer<typeof shippingSchema>) => {
  try {
    toast.loading("Creating your order...");

    // Call backend to create order
    const order = await createOrder(total);

    toast.dismiss();
    toast.success("Order created! Redirecting to payment...");

    // 2️⃣ Razorpay Checkout (No verification now)
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Tees for a Cause",
      description: "T-shirt Order Payment",
      handler: function (response) {
        toast.dismiss();

        toast.success(
          `${data.name}, your payment is completed! You may receive an email for the order confirmation.`
        );

        form.reset();
        navigate("/shop");
      },
      prefill: {
        name: data.name,
        email: data.email,
        contact: data.phone,
      },
      notes: {
        address: data.address,
        size: product?.size,
        product_name: product?.name,
        cause:product?.cause || "",
      },
      theme: {
        color: "#1E3A8A",
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();

  } catch (err) {
    console.error(err);
    toast.dismiss();
    toast.error("Something went wrong!");
  }
};

  const originalPrice = 699;
  const discount = 110;
  const finalPrice = product.price || 589;
  const geetDonation = 50;
  const designerSupport = 5;
  const shipping = 50;
  const subtotal = finalPrice;
  const total = subtotal + shipping;

  console.log("PRODUCT", product) ; 

  return (
    <div className="min-h-screen">
      <Navbar /> 
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Side - Product Details */}
              <div className="space-y-6 fade-in">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">
                    Teesforacause
                  </p>
                  <h1 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-wide">
                    {product.name}
                  </h1>
                  <p className="text-muted-foreground">
                    Designed by Meera Shah (HYD)
                  </p>
                </div>

                <div className="border-t border-border pt-4 space-y-2">
                  <p className="text-lg">
                    <span className="text-muted-foreground">PRICE:</span> ₹{originalPrice}
                  </p>
                  <p className="text-lg">
                    <span className="text-muted-foreground">discount:</span> ₹{discount}
                  </p>
                  <p className="text-xl font-bold">
                    <span className="text-muted-foreground">final price:</span> ₹{finalPrice}
                  </p>
                </div>

                <div className="border-t border-border pt-4 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    ₹{geetDonation} from your purchase goes to GEET (Girls Education
                    Empowerment Trust), dedicated to building a girl child's education.
                    <br />
                    <span className="text-sm">Visit GEET on Instagram @GEETFOUNDATION</span>
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    ₹{designerSupport} from your T-shirt goes to Meera Shah, empowering a young
                    designer.
                    <br />
                    <span className="text-sm">Visit her on Instagram @meeradesigns</span>
                  </p>
                  <p className="text-lg font-semibold">
                    Your total contribution: ₹{geetDonation + designerSupport}
                  </p>
                </div>

                <div className="border-t border-border pt-6">
                  <h3 className="text-2xl font-heading font-bold mb-4 uppercase">
                    Final Details
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    {product?.size && (
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                        <span>Size: {product.size}</span>
                      </li>
                    )}
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      <span>Delivery: 7 days</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      <span>Subtotal: ₹{subtotal}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      <span>Shipping: ₹{shipping}</span>
                    </li>
                    <li className="flex items-center gap-2 text-lg font-bold text-foreground">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      <span>Total: ₹{total}</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Side - Product Image & CTA */}
              <div className="space-y-6 fade-in lg:sticky lg:top-24">
                <div className="bg-card rounded-lg p-8 shadow-lg border border-border">
                  <div className="aspect-square bg-background rounded-lg overflow-hidden mb-6">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <Button 
                    size="lg" 
                    className="w-full text-lg font-bold uppercase tracking-wider hover-glow"
                    onClick={() => setShowShippingForm(true)}
                  >
                    Order Now!
                  </Button>

                  <div className="flex items-center justify-center gap-6 mt-8">
                    <a 
                      href="https://instagram.com/geetfoundation" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a 
                      href="https://facebook.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Facebook className="w-6 h-6" />
                    </a>
                    <a 
                      href="https://twitter.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Twitter className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={showShippingForm} onOpenChange={setShowShippingForm}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Shipping Details</DialogTitle>
          </DialogHeader>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="your@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="1234567890" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Shipping Address</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Enter your complete shipping address" 
                        className="resize-none"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full hover-glow">
                Place Order
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Checkout;
