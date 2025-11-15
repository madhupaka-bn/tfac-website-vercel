import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Mail, Phone, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImpactCounter from "@/components/ImpactCounter";
import HowItWorks from "@/components/HowItWorks";
import ProductCard from "@/components/ProductCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import nakshtraImage from "@/assets/story-nakshtra.jpg";
import mediaRedFmLogo from "@/assets/media-redfm-logo.png";
import mediaPrasaranRtm from "@/assets/media-prasaran-rtm.png";
import mediaGunvantiGujarat from "@/assets/media-gunvanti-gujarat.png";
import mediaNirmalGujarat from "@/assets/media-nirmal-gujarat.png";
import mediaGujaratPravahBhuj from "@/assets/media-gujarat-pravah-bhuj.png";
import mediaGujaratPravahAhmedabad from "@/assets/media-gujarat-pravah-ahmedabad.png";
import mediaNirmalGujaratAnand from "@/assets/media-nirmal-gujarat-anand.png";
import mediaNirmalGujaratAhmedabad from "@/assets/media-nirmal-gujarat-ahmedabad.png";
import mediaGujaratPravahVadodara from "@/assets/media-gujarat-pravah-vadodara.png";
import mediaGujaratPravahBharuch from "@/assets/media-gujarat-pravah-bharuch.png";
import mediaKarnavatiExpress from "@/assets/media-karnavati-express.png";
const Index = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollArticles = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const targetScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  const featuredProducts = [{
    name: "You Decide",
    price: 699,
    image: "/assets/shop-personal-peace.jpg",
    cause: "Youth Empowerment",
    availableSizes: ["S", "M", "L", "XL"]
  }, {
    name: "Red Bean",
    price: 799,
    image: "/assets/shop-coffee-pocket-light.jpg",
    cause: "Education",
    availableSizes: ["S", "M", "L", "XL"]
  }, {
    name: "The Sky is the Limit",
    price: 699,
    image: "/assets/shop-dream-big.jpg",
    cause: "Education",
    availableSizes: ["S", "M", "L", "XL"]
  }, {
    name: "Matcha",
    price: 799,
    image: "/assets/shop-coffee-pocket-teal.jpg",
    cause: "Environment",
    availableSizes: ["S", "M", "L", "XL"]
  }, {
    name: "Always a Kid",
    price: 799,
    image: "/assets/shop-inner-child.jpg",
    cause: "Youth Empowerment",
    availableSizes: ["S", "M", "L", "XL"]
  }, {
    name: "Growing?",
    price: 699,
    image: "/assets/shop-getting-old.jpg",
    cause: "Youth Empowerment",
    availableSizes: ["S", "M", "L", "XL"]
  }];
  const faqs = [{
    question: "How much of my purchase goes to charity?",
    answer: "50% of profits earned after every purchase is donated directly to foundations we collaborate with, and whatever profits remain are reinvested into our community building activities/programmes."
  }, {
    question: "What causes does TFAC support?",
    answer: "TFAC represents empowerment through collaboration, opening doors for those who deserve every opportunity. Our partnerships with multiple organizations help make this mission possible."
  }, {
    question: "Can I submit my own design?",
    answer: "Yes! We run regular design tournaments where students and young artists can submit designs. Winners receive royalties of ₹5 per t-shirt sold."
  }, {
    question: "What are the t-shirts made of?",
    answer: "All our tees are made from 100% cotton (180-210 GSM) for comfort and durability."
  }, {
    question: "How do I track the impact of my purchase?",
    answer: "Visit our Causes page to see real-time updates on donations and impact stories from the communities we support."
  }];
  return <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden w-full">
        <div className="absolute inset-0 z-0">
          <img src="/assets/hero-banner.png" alt="Youth wearing TFAC tees" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/70" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-32 relative z-10">
          <div className="max-w-2xl fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-heading font-bold mb-3 sm:mb-4 md:mb-6 leading-tight text-foreground">
              Wear Change.
              <br />
              <span className="text-primary">Be the Change.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-4 sm:mb-6 md:mb-8">
              Every tee supports youth causes through various NGOs.
              <br className="hidden sm:block" />
              <span className="sm:inline block">Fashion with purpose — not just good looks</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button size="lg" className="hover-glow text-base sm:text-lg w-full sm:w-auto" asChild>
                <Link to="/shop">
                  Shop Now <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base sm:text-lg w-full sm:w-auto" asChild>
                <Link to="/causes">Join the Movement</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Counter */}
      <ImpactCounter />

      {/* How It Works */}
      <HowItWorks />

      {/* Design Submission Section - HIGHLIGHTED */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[hsl(var(--highlight-bg))] to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iaHNsKDE1LCA1MCUsIDcwJSkiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 sm:mb-6 px-2">
              Your Art, Our Platform
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-4 sm:mb-6 md:mb-8 px-2">
              Are you an artist or designer with a vision for change? Submit your designs and earn ₹5 royalty per t-shirt sold while making a difference!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-12">
            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all border-2 border-accent/20 fade-in">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                <span className="text-2xl md:text-3xl">🎨</span>
              </div>
              <h3 className="text-lg md:text-xl font-heading font-bold mb-2 md:mb-3">Create Your Design</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Express your creativity and design tees that represent causes you care about. No limits on imagination!
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all border-2 border-accent/20 fade-in" style={{
            animationDelay: '0.1s'
          }}>
              <div className="w-12 h-12 md:w-16 md:h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                <span className="text-2xl md:text-3xl">🏆</span>
              </div>
              <h3 className="text-lg md:text-xl font-heading font-bold mb-2 md:mb-3">Win Design Tournaments</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Participate in our regular design competitions. Winners get featured and earn royalties on every sale!
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all border-2 border-accent/20 fade-in" style={{
            animationDelay: '0.2s'
          }}>
              <div className="w-12 h-12 md:w-16 md:h-16 bg-secondary/50 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                <span className="text-2xl md:text-3xl">💰</span>
              </div>
              <h3 className="text-lg md:text-xl font-heading font-bold mb-2 md:mb-3">Earn Royalties</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Receive ₹5 for every t-shirt sold with your design. Turn your passion into income while creating impact!
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" className="hover-glow shadow-2xl" asChild>
              <Link to="/design">
                Submit Your Design <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products - HIGHLIGHTED */}
      <section className="py-12 sm:py-14 md:py-16 bg-gradient-to-br from-[hsl(var(--highlight-bg))] to-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 fade-in">
            <div className="inline-block px-6 py-2 bg-primary/20 text-primary-foreground rounded-full text-sm font-semibold mb-4 shadow-lg border border-primary/30">
              Shop for Change
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Featured Tees
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each tee tells a story and supports a cause
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {featuredProducts.map((product, index) => <div key={index} className="fade-in" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <ProductCard {...product} />
              </div>)}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/shop">
                View All Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Founder Message */}
      <section className="py-12 sm:py-14 md:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center fade-in px-2">
            <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-heading font-semibold italic mb-3 sm:mb-4">
              "I wanted to create fashion that speaks for something bigger."
            </blockquote>
            <p className="text-sm sm:text-base text-muted-foreground">
              — Trissha Rupani, Founder
            </p>
          </div>
        </div>
      </section>

      {/* Making Impact Together - HIGHLIGHTED */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[hsl(var(--highlight-bg))] to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iaHNsKDIxNSw2NSUsNDUlKSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          {/* Merged Banner with Partner Info */}
          <div className="max-w-6xl mx-auto mb-8 sm:mb-10 md:mb-12 fade-in">
            <div className="bg-primary rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
              <div className="relative z-10">
                <div className="text-center mb-6 sm:mb-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-white mb-3 sm:mb-4">
                    <Heart className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary" />
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold mb-2 sm:mb-3 px-2">
                    Making Impact Together
                  </h2>
                  
                  <p className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-2">50% of our profits goes directly to youth empowerment programs.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                  <div className="text-center bg-white rounded-lg sm:rounded-xl p-4 sm:p-6">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-1 sm:mb-2 text-primary">₹2,50,000+</div>
                    <div className="text-xs sm:text-sm md:text-base text-foreground">Total Donated</div>
                  </div>
                  <div className="text-center bg-white rounded-lg sm:rounded-xl p-4 sm:p-6">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-1 sm:mb-2 text-primary">1000+</div>
                    <div className="text-xs sm:text-sm md:text-base text-foreground">Youth Impacted</div>
                  </div>
                  <div className="text-center bg-white rounded-lg sm:rounded-xl p-4 sm:p-6">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-1 sm:mb-2 text-primary">15+</div>
                    <div className="text-xs sm:text-sm md:text-base text-foreground">Programs Funded</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="text-center fade-in">
              <Button size="lg" className="hover-glow" asChild>
                <Link to="/causes">
                  Learn More About Our Impact <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What Our Community Says - HIGHLIGHTED */}
      <section className="py-12 sm:py-14 md:py-16 bg-gradient-to-br from-[hsl(var(--highlight-bg))] to-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              What Our Community Says
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
            {[{
            name: "Aisha K.",
            role: "Student Designer",
            text: "Seeing my design on a tee that helps fund education is surreal. TFAC made my art matter."
          }, {
            name: "Rohan M.",
            role: "Customer",
            text: "Finally, fashion that aligns with my values. Every purchase feels meaningful."
          }, {
            name: "Priya S.",
            role: "Campus Ambassador",
            text: "Being part of this movement has connected me with like-minded changemakers."
          }].map((testimonial, index) => <div key={index} className="p-6 rounded-lg bg-background border border-border fade-in" style={{
            animationDelay: `${index * 0.15}s`
          }}>
                <p className="mb-4 text-muted-foreground italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-heading font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Media Mentions - HIGHLIGHTED */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[hsl(var(--highlight-bg))] to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iaHNsKDIwMCw5NSUsNDAlKSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12 fade-in">
            <div className="inline-block px-6 py-2 bg-primary/20 text-primary-foreground rounded-full text-sm font-semibold mb-4 shadow-lg border border-primary/30">
              In the Spotlight
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Media Mentions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear what others are saying about our mission to create positive change through fashion
            </p>
          </div>

          {/* Radio Interview - Full Width */}
          <div className="max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12">
            <div className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl border-2 border-accent/20 fade-in">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center p-2 flex-shrink-0">
                  <img src={mediaRedFmLogo} alt="Red FM Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-heading font-bold">Radio Interview with Trissha Rupani and RJ Sona (RedFM)</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Listen to our founder's story</p>
                </div>
              </div>
              <audio controls className="w-full" preload="metadata">
                <source src="https://res.cloudinary.com/dg4wzx8c8/video/upload/v1761826165/app_images/jor9zonbszc5wabbnkqg.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>

          {/* Newspaper Articles - Horizontal Scroll */}
          <div className="relative group">
            {/* Left Scroll Button */}
            <button
              onClick={() => scrollArticles('left')}
              className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 z-10 bg-primary/90 hover:bg-primary text-primary-foreground rounded-full p-2 md:p-3 shadow-lg opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 hover:scale-110"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
            </button>

            {/* Right Scroll Button */}
            <button
              onClick={() => scrollArticles('right')}
              className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-10 bg-primary/90 hover:bg-primary text-primary-foreground rounded-full p-2 md:p-3 shadow-lg opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 hover:scale-110"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
            </button>

            <div ref={scrollContainerRef} className="overflow-x-auto pb-4 scrollbar-hide mx-10 sm:mx-12 md:mx-0">
              <div className="flex gap-4 md:gap-6">
                <a href="https://khwazaexpress.com/national/16-year-old-girl-launches-youth-leadership-campaign-that-conveys-creativity-compassion-and-confidence-in-a-new-way/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-72 md:w-80 bg-card rounded-2xl shadow-xl border-2 border-accent/20 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl overflow-hidden group">
                  <div className="h-40 md:h-48 overflow-hidden">
                    <img src={nakshtraImage} alt="Nakshtra Sharma" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="p-4 md:p-6">
                    <h3 className="text-base md:text-lg font-heading font-bold mb-2">Khwaza Express</h3>
                    <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-4">Online Article</p>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-3 md:mb-4">
                      16-year-old girl launches youth leadership campaign that conveys creativity, compassion, and confidence.
                    </p>
                    <span className="inline-block text-sm text-primary font-semibold hover:underline">
                      Read Full Article →
                    </span>
                  </div>
                </a>

                <a href="/assets/prasaran-rtm-edition.pdf" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-72 md:w-80 bg-card rounded-2xl shadow-xl border-2 border-accent/20 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl overflow-hidden group">
                  <div className="h-40 md:h-48 bg-muted flex items-center justify-center overflow-hidden">
                    <img src={mediaPrasaranRtm} alt="Prasaran RTM Article" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="p-4 md:p-6">
                    <h3 className="text-base md:text-lg font-heading font-bold mb-2">Trissha's Feature in Prasaran - Ratlam</h3>
                    <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-4">Full Newspaper Edition</p>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-3 md:mb-4">
                      View Trissha's article featuring her youth leadership campaign and community impact work.
                    </p>
                    <span className="inline-block text-sm text-primary font-semibold hover:underline">
                      View Full Newspaper →
                    </span>
                  </div>
                </a>

                <a href="/assets/gunvanti-gujarat.pdf" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-72 md:w-80 bg-card rounded-2xl shadow-xl border-2 border-accent/20 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl overflow-hidden group">
                  <div className="h-40 md:h-48 bg-muted flex items-center justify-center overflow-hidden">
                    <img src={mediaGunvantiGujarat} alt="Gunvanti Gujarat Article" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="p-4 md:p-6">
                    <h3 className="text-base md:text-lg font-heading font-bold mb-2">Gunvanti Gujarat - Bhavnagar</h3>
                    <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-4">Full Newspaper Edition</p>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-3 md:mb-4">
                      View Trissha's article in the full newspaper edition.
                    </p>
                    <span className="inline-block text-sm text-primary font-semibold hover:underline">
                      View Full Newspaper →
                    </span>
                  </div>
                </a>

                <a href="/assets/nirmal-gujarat.pdf" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-72 md:w-80 bg-card rounded-2xl shadow-xl border-2 border-accent/20 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl overflow-hidden group">
                  <div className="h-40 md:h-48 bg-muted flex items-center justify-center overflow-hidden">
                    <img src={mediaNirmalGujarat} alt="Nirmal Gujarat Article" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="p-4 md:p-6">
                    <h3 className="text-base md:text-lg font-heading font-bold mb-2">Nirmal Gujarat - Nadiad</h3>
                    <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-4">Full Newspaper Edition</p>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-3 md:mb-4">
                      View Trissha's article in the full newspaper edition.
                    </p>
                    <span className="inline-block text-sm text-primary font-semibold hover:underline">
                      View Full Newspaper →
                    </span>
                  </div>
                </a>

                <a href="#" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-72 md:w-80 bg-card rounded-2xl shadow-xl border-2 border-accent/20 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl overflow-hidden group">
                  <div className="h-40 md:h-48 bg-muted flex items-center justify-center overflow-hidden">
                    <img src={mediaNirmalGujaratAnand} alt="Nirmal Gujarat Anand Edition" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="p-4 md:p-6">
                    <h3 className="text-base md:text-lg font-heading font-bold mb-2">Nirmal Gujarat - Anand Edition</h3>
                    <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-4">Full Newspaper Edition</p>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-3 md:mb-4">
                      Featured in Nirmal Gujarat, Anand Edition.
                    </p>
                    <span className="inline-block text-sm text-primary font-semibold hover:underline">
                      View Full Newspaper →
                    </span>
                  </div>
                </a>

                <a href="#" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-72 md:w-80 bg-card rounded-2xl shadow-xl border-2 border-accent/20 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl overflow-hidden group">
                  <div className="h-40 md:h-48 bg-muted flex items-center justify-center overflow-hidden">
                    <img src={mediaNirmalGujaratAhmedabad} alt="Nirmal Gujarat Ahmedabad Edition" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="p-4 md:p-6">
                    <h3 className="text-base md:text-lg font-heading font-bold mb-2">Nirmal Gujarat - Ahmedabad Edition</h3>
                    <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-4">Full Newspaper Edition</p>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-3 md:mb-4">
                      Featured in Nirmal Gujarat, Ahmedabad Edition.
                    </p>
                    <span className="inline-block text-sm text-primary font-semibold hover:underline">
                      View Full Newspaper →
                    </span>
                  </div>
                </a>

                <a href="/assets/gujarat-pravah-bhuj.pdf" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-72 md:w-80 bg-card rounded-2xl shadow-xl border-2 border-accent/20 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl overflow-hidden group">
                  <div className="h-40 md:h-48 bg-muted flex items-center justify-center overflow-hidden">
                    <img src={mediaGujaratPravahBhuj} alt="Gujarat Pravah Bhuj Article" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="p-4 md:p-6">
                    <h3 className="text-base md:text-lg font-heading font-bold mb-2">Gujarat Pravah - Bhuj</h3>
                    <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-4">Full Newspaper Edition</p>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-3 md:mb-4">
                      View Trissha's article in the full newspaper edition.
                    </p>
                    <span className="inline-block text-sm text-primary font-semibold hover:underline">
                      View Full Newspaper →
                    </span>
                  </div>
                </a>

                <a href="/assets/gujarat-pravah-ahmedabad.pdf" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-72 md:w-80 bg-card rounded-2xl shadow-xl border-2 border-accent/20 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl overflow-hidden group">
                  <div className="h-40 md:h-48 bg-muted flex items-center justify-center overflow-hidden">
                    <img src={mediaGujaratPravahAhmedabad} alt="Gujarat Pravah Ahmedabad Article" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="p-4 md:p-6">
                    <h3 className="text-base md:text-lg font-heading font-bold mb-2">Gujarat Pravah - Ahmedabad</h3>
                    <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-4">Full Newspaper Edition</p>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-3 md:mb-4">
                      View Trissha's article in the full newspaper edition.
                    </p>
                    <span className="inline-block text-sm text-primary font-semibold hover:underline">
                      View Full Newspaper →
                    </span>
                  </div>
                </a>

                <a href="#" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-72 md:w-80 bg-card rounded-2xl shadow-xl border-2 border-accent/20 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl overflow-hidden group">
                  <div className="h-40 md:h-48 bg-muted flex items-center justify-center overflow-hidden">
                    <img src={mediaGujaratPravahVadodara} alt="Gujarat Pravah Vadodara Article" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="p-4 md:p-6">
                    <h3 className="text-base md:text-lg font-heading font-bold mb-2">Gujarat Pravah - Vadodara</h3>
                    <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-4">Full Newspaper Edition</p>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-3 md:mb-4">
                      Featured in Gujarat Pravah, Vadodara Edition.
                    </p>
                    <span className="inline-block text-sm text-primary font-semibold hover:underline">
                      View Full Newspaper →
                    </span>
                  </div>
                </a>

                <a href="#" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-72 md:w-80 bg-card rounded-2xl shadow-xl border-2 border-accent/20 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl overflow-hidden group">
                  <div className="h-40 md:h-48 bg-muted flex items-center justify-center overflow-hidden">
                    <img src={mediaGujaratPravahBharuch} alt="Gujarat Pravah Bharuch Article" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="p-4 md:p-6">
                    <h3 className="text-base md:text-lg font-heading font-bold mb-2">Gujarat Pravah - Bharuch</h3>
                    <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-4">Full Newspaper Edition</p>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-3 md:mb-4">
                      Featured in Gujarat Pravah, Bharuch Edition.
                    </p>
                    <span className="inline-block text-sm text-primary font-semibold hover:underline">
                      View Full Newspaper →
                    </span>
                  </div>
                </a>

                <a href="#" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-72 md:w-80 bg-card rounded-2xl shadow-xl border-2 border-accent/20 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl overflow-hidden group">
                  <div className="h-40 md:h-48 bg-muted flex items-center justify-center overflow-hidden">
                    <img src={mediaKarnavatiExpress} alt="Karnavati Express Article" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="p-4 md:p-6">
                    <h3 className="text-base md:text-lg font-heading font-bold mb-2">Karnavati Express - Ahmedabad</h3>
                    <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-4">Full Newspaper Edition</p>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-3 md:mb-4">
                      Featured in Karnavati Express, Ahmedabad Edition.
                    </p>
                    <span className="inline-block text-sm text-primary font-semibold hover:underline">
                      View Full Newspaper →
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Community - HIGHLIGHTED */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[hsl(var(--highlight-bg))] to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iaHNsKDIwMCw5NSUsNDAlKSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center max-w-6xl mx-auto">
            <div className="fade-in">
              <img src="/assets/community-join.png" alt="Community collaboration" className="rounded-2xl w-full max-w-full object-cover shadow-2xl shadow-accent/20 ring-2 ring-accent/10" />
            </div>
            <div className="fade-in">
              <div className="inline-block px-6 py-2 bg-primary/20 text-primary-foreground rounded-full text-sm font-semibold mb-4 shadow-lg border border-primary/30">
                Connect & Grow
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Join Our Community
              </h2>
              <p className="text-muted-foreground mb-6">
                Be part of a movement that's changing the world through fashion. 
                Connect with designers, changemakers, and like-minded individuals 
                who believe in making a difference.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <span>Connect with 10,000+ young changemakers</span>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <span>Participate in design tournaments and workshops</span>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <span>Become a campus ambassador</span>
                </li>
              </ul>
              <Button size="lg" className="hover-glow" asChild>
                <Link to="/causes">
                  Join the Movement <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Get In Touch */}
      <section id="contact" className="py-12 sm:py-14 md:py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center max-w-6xl mx-auto">
            <div className="fade-in order-2 lg:order-1">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-4">
                Get In Touch
              </h2>
              <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">
                Want to join our team, collaborate with us, or have questions? 
                We'd love to hear from you!
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:teesforacause2024@gmail.com" className="hover:text-primary transition-colors">
                    teesforacause2024@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <a href="tel:+919876543210" className="hover:text-primary transition-colors">+91 8928001615</a>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="hover-glow" asChild>
                  <Link to="/about">
                    Join Our Team <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="mailto:teesforacause2024@gmail.com">Collaborate With Us</a>
                </Button>
              </div>
            </div>
            <div className="fade-in order-1 lg:order-2">
              <img src="/assets/get-in-touch-new.png" alt="Get in touch with our team" className="rounded-lg w-full max-w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-14 md:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Got questions? We've got answers.</p>
          </div>

          <div className="max-w-3xl mx-auto fade-in">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-heading font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Index;