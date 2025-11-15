import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { Heart, Users, BookOpen, ArrowRight, X } from "lucide-react";
import communityInternships from "@/assets/community-internships-new.jpg";
import communityCampusAmbassadors from "@/assets/community-campus-ambassadors-new.jpg";
import communityWorkshops from "@/assets/community-workshops-new.jpg";

const Causes = () => {
  const [isInternshipDialogOpen, setIsInternshipDialogOpen] = useState(false);
  const programs = [{
    icon: BookOpen,
    title: "School Kit Distribution",
    description: "Providing notebooks, pens, and essential supplies to 1000+ students",
    image: "/assets/program-school-kits.jpg"
  }, {
    icon: Users,
    title: "Skill Workshops",
    description: "Workshops in art, expression, and speech",
    image: "/assets/program-skill-workshops.jpg"
  }, {
    icon: Heart,
    title: "Mentorship Programs",
    description: "Connecting young people with mentors in various fields",
    image: "/assets/program-mentorship.jpg"
  }];
  return <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Every Purchase Has a Purpose
            </h1>
            <p className="text-xl text-muted-foreground">50% of every sale supports youth empowerment through various NGOs</p>
          </div>
        </div>
      </section>

      {/* Current Cause */}
      <section id="impact" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-primary/10 border-2 border-primary rounded-lg p-8 md:p-12 mb-12 fade-in">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Current Impact through Causes</h2>
                <p className="text-lg text-muted-foreground">
                  Empowering youth through education and opportunity
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-heading font-bold mb-2">₹2,50,000+</div>
                  <div className="text-muted-foreground">Total Donated</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-heading font-bold mb-2">1000+</div>
                  <div className="text-muted-foreground">Youth Impacted</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-heading font-bold mb-2">15+</div>
                  <div className="text-muted-foreground">Programs Funded</div>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Programs We Support
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {programs.map((program, index) => <div key={index} className="rounded-lg overflow-hidden bg-background border border-border fade-in" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="aspect-video overflow-hidden">
                  <img src={program.image} alt={program.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary mb-4">
                    <program.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-3">{program.title}</h3>
                  <p className="text-muted-foreground">{program.description}</p>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Transparency Chart */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 fade-in">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Complete Transparency
              </h2>
              <p className="text-lg text-muted-foreground">
                See exactly where your money goes with every purchase
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8 fade-in">
              <div className="p-6 rounded-lg bg-card border border-border text-center">
                <div className="text-3xl font-heading font-bold mb-2">64%</div>
                <div className="text-sm text-muted-foreground">Production & Operations</div>
                <div className="text-xs text-muted-foreground mt-2">Fabric, printing, shipping</div>
              </div>
              <div className="p-6 rounded-lg bg-primary/10 border-2 border-primary text-center">
                <div className="text-3xl font-heading font-bold mb-2">12.5%</div>
                <div className="text-sm font-semibold">Causes & Empowerment</div>
                <div className="text-xs text-muted-foreground mt-2">Direct impact programs</div>
              </div>
              <div className="p-6 rounded-lg bg-card border border-border text-center">
                <div className="text-3xl font-heading font-bold mb-2">12.5%</div>
                <div className="text-sm text-muted-foreground">Community Powered</div>
                <div className="text-xs text-muted-foreground mt-2">Giving young artists a platform to grow</div>
              </div>
              <div className="p-6 rounded-lg bg-card border border-border text-center">
                <div className="text-3xl font-heading font-bold mb-2">8%</div>
                <div className="text-sm text-muted-foreground">Growth & Innovation</div>
                <div className="text-xs text-muted-foreground mt-2">Expanding our impact</div>
              </div>
              <div className="p-6 rounded-lg bg-card border border-border text-center">
                <div className="text-3xl font-heading font-bold mb-2">3%</div>
                <div className="text-sm text-muted-foreground">Designer Royalties</div>
                <div className="text-xs text-muted-foreground mt-2">Supporting young artists</div>
              </div>
            </div>

            <div className="text-center fade-in">
              <p className="text-muted-foreground mb-6">For a ₹700 tee, ₹90 goes directly to various NGOs supporting youth empowerment. </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Programs */}
      <section id="community" className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 fade-in">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Join Our Community
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="rounded-lg overflow-hidden bg-background border border-border fade-in">
                <div className="aspect-video overflow-hidden">
                  <img src={communityInternships} alt="Youth Internships" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-xl mb-3">Youth Internships</h3>
                  <p className="text-muted-foreground mb-4">
                    Gain real-world experience in social entrepreneurship, design, and marketing
                  </p>
                  <Button variant="outline" size="sm" onClick={() => setIsInternshipDialogOpen(true)}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden bg-background border border-border fade-in" style={{
              animationDelay: "0.1s"
            }}>
                <div className="aspect-video overflow-hidden">
                  <img src={communityCampusAmbassadors} alt="Campus Ambassadors" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-xl mb-3">Campus Ambassadors</h3>
                  <p className="text-muted-foreground mb-4">
                    Spread the movement at your college and earn rewards for referrals
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScU7Qhu2zYOOtV05QXKA5J7lqJFvy_QZ-edt460zAy54R6FIg/viewform?usp=dialog', '_blank')}
                  >
                    Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden bg-background border border-border fade-in" style={{
              animationDelay: "0.2s"
            }}>
                <div className="aspect-video overflow-hidden">
                  <img src={communityWorkshops} alt="Impact Workshops" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-xl mb-3">Impact Workshops</h3>
                  <p className="text-muted-foreground mb-4">
                    Free workshops on sustainable fashion and social entrepreneurship
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open('https://calendar.google.com/calendar/u/0?cid=dGVlc2ZvcmFjYXVzZTIwMjRAZ21haWwuY29t', '_blank')}
                  >
                    View Schedule <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="fade-in">
                <img src="/assets/story-nakshtra.png" alt="Nakshtra's success story" className="w-full rounded-lg" />
              </div>
              <div className="fade-in">
                <h2 className="text-3xl font-heading font-bold mb-4">
                  Impact Story: Meet Nakshtra
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">Nakshtra, a 17-year-old passionate about making a difference, has connected with over 20 NGOs through TFAC’s support. Along the way, she strengthened her communication skills, learned the value of teamwork, and discovered her love for sketching.</p>
                <p className="text-muted-foreground leading-relaxed">“TFAC showed me that collaboration and creativity can open new paths in life. It gave me a platform to grow and find a hobby that inspires me every day,” she says.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Internship Details Dialog */}
      <Dialog open={isInternshipDialogOpen} onOpenChange={setIsInternshipDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden">
          <DialogClose className="absolute right-4 top-4 z-10 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground bg-background/80 backdrop-blur-sm p-2">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
          <div className="overflow-y-auto max-h-[90vh]">
            <img 
              src="https://res.cloudinary.com/dg4wzx8c8/image/upload/v1761830668/app_images/yjhqfkqh2qwmr4v4lboe.jpg" 
              alt="Youth Internship Details" 
              className="w-full h-auto"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>;
};
export default Causes;