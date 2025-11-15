import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Upload, Award, TrendingUp } from "lucide-react";
const Design = () => {
  const pastWinners = [{
    designer: "Yasshita Karamchandani",
    design: "Solace",
    image: "/assets/design-solace.png"
  }, {
    designer: "Aarav Malkani",
    design: "CN Tower",
    image: "/assets/design-cn-tower.jpeg"
  }, {
    designer: "Janhavi More",
    design: "Emotion and Sound",
    image: "/assets/design-emotion-sound.png"
  }, {
    designer: "Deeksha Deulkar",
    design: "Stay in the Musical Trance",
    image: "/assets/design-musical-trance.png"
  }, {
    designer: "Aayaan Shah",
    design: "Strings Attached",
    image: "/assets/design-strings-attached.png"
  }];
  return <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Design for a Cause
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Open to students and young artists across India
            </p>
            <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-destructive font-semibold">
                The tournament concluded on October 25th, and submissions are now closed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="submit" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 fade-in">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                The Design Tournament
              </h2>
              <p className="text-lg text-muted-foreground">
                Submit your design, win royalties, and see your art make a difference
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="p-6 rounded-lg bg-card border border-border text-center fade-in">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary mb-4">
                  <Upload className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">Submit Your Design</h3>
                <p className="text-muted-foreground">
                  Upload your artwork with the cause it supports
                </p>
              </div>

              <div className="p-6 rounded-lg bg-card border border-border text-center fade-in" style={{
              animationDelay: "0.1s"
            }}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary mb-4">
                  <Award className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">Get Selected</h3>
                <p className="text-muted-foreground">
                  Our team reviews and selects winning designs
                </p>
              </div>

              <div className="p-6 rounded-lg bg-card border border-border text-center fade-in" style={{
              animationDelay: "0.2s"
            }}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary mb-4">
                  <TrendingUp className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">Earn Royalties</h3>
                <p className="text-muted-foreground">
                  Receive ₹5 for every tee sold with your design
                </p>
              </div>
            </div>

            <div className="bg-primary/10 border border-primary/20 rounded-lg p-8 mb-8 fade-in">
              <h3 className="text-2xl font-heading font-bold mb-4 text-center">
                What You Get
              </h3>
              <ul className="space-y-3 max-w-2xl mx-auto">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>₹5 royalty for every T-shirt sold</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Portfolio credit and featured artist spotlight</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Your design supports a cause you care about</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Connect with the TFAC community of changemakers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Prize packages including products from other youth-led brands</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Designs are launched for sale and featured on the TFAC website and social media page</span>
                </li>
              </ul>
            </div>

            <div className="text-center fade-in">
              <Button size="lg" className="hover-glow text-lg">
                <Upload className="mr-2 h-5 w-5" />
                Submit Your Design
              </Button>
              <p className="mt-4 text-sm text-muted-foreground">
                Submissions open to ages 14-30 • Review time: 2-3 weeks
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Past Winners */}
      <section id="winners" className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Past Winners Gallery
            </h2>
            <p className="text-lg text-muted-foreground">
              Celebrating the talented designers who've made an impact
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pastWinners.map((winner, index) => <div key={index} className="rounded-lg overflow-hidden border border-border bg-background fade-in" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="aspect-square overflow-hidden">
                  <img src={winner.image} alt={winner.design} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-lg mb-1">{winner.design}</h3>
                  <p className="text-sm text-muted-foreground">by {winner.designer}</p>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Designer Spotlight */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="fade-in">
                <img src="/assets/designer-spotlight.jpg" alt="Designer Aisha" className="w-full rounded-lg" />
              </div>
              <div className="fade-in">
                <h2 className="text-3xl font-heading font-bold mb-4">Meet Maahi: A Student Designer Making a Difference</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">Maahi, a 15-year-old who has always had a deep love for art. That student who’s always eager to participate in art competitions at school, using every chance to express her creativity. When she came across TFAC (Tees For A Cause), an NGO that supports women through the Geet Foundation, She said''I felt inspired to contribute.TFAC and the Geet Foundation have taught me that art can make a real difference, grateful for how my passion has turned into a way to give back and support others.''</p>
                <p className="text-muted-foreground leading-relaxed"></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Design;