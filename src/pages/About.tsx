import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Users, Target, Sparkles } from "lucide-react";
const About = () => {
  const values = [{
    icon: Heart,
    title: "Transparency",
    description: "Every rupee accounted for. See exactly where your money goes."
  }, {
    icon: Users,
    title: "Inclusivity",
    description: "Fashion and impact for everyone, designed by diverse voices."
  }, {
    icon: Target,
    title: "Sustainability",
    description: "Quality materials and ethical practices in every step."
  }, {
    icon: Sparkles,
    title: "Empowerment",
    description: "Creating opportunities for youth designers and communities."
  }];
  const team = [{
    name: "Vaanya Abrol",
    role: "Chief of Design",
    image: "/assets/team-vaanya.jpg"
  }, {
    name: "Para Thanavala",
    role: "Chief of Marketing",
    image: "/assets/team-para.jpg"
  }, {
    name: "Shrika Lele",
    role: "Chief of Operations",
    image: "/assets/team-shrika.jpg"
  }];
  return <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Who We Are
            </h1>
            <p className="text-xl text-muted-foreground">
              Fashion that Creates Change
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="fade-in">
              <h2 className="text-3xl font-heading font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">Teesforacause is a youth-driven
brand that provides affordable,
trendy and impactful apparel
while fostering a community
dedicated to creating a social
impact.</p>
            </div>
            <div className="fade-in" style={{
            animationDelay: "0.1s"
          }}>
              <h2 className="text-3xl font-heading font-bold mb-4">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">To become the go-to brand for
teenagers who want to look
good while doing good, wearing
fashion that speaks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Geet Foundation Partnership */}
      <section id="partners" className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto fade-in">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-center">Our NGO Partners</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">Introducing our partners — the driving force behind the “cause” in Tees for a Cause. We proudly collaborate with impactful NGOs such as Yuva Parivartan, CORO India, Antarang Foundation, and Geet Foundation, all dedicated to empowering youth through education, skill development, and social awareness initiatives.</p>
            <p className="text-lg text-muted-foreground leading-relaxed">Through these partnerships, 50% of every purchase goes directly to programs that help young people across India access the education and opportunities they deserve.</p>
            <div className="mt-8 p-6 rounded-lg bg-primary/10 border border-primary/20">
              <p className="text-center text-lg font-heading font-semibold">
                Together, we've donated ₹2,50,000+ to youth empowerment programs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section id="story" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="fade-in">
                <img src="/assets/founder-portrait.jpg" alt="Trissha Rupani" className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="fade-in" style={{
              animationDelay: "0.15s"
            }}>
                <h2 className="text-3xl font-heading font-bold mb-4">Meet Trissha</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  "I started TFAC because I saw two things: incredible young designers 
                  with powerful messages, and a generation that wants their choices to 
                  matter. I wanted to create fashion that speaks for something bigger."
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  As a designer and activist, Trissha Rupani founded Teesforacause to 
                  bridge the gap between style and substance, proving that what we wear 
                  can be a force for good.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our Team
            </h2>
            <p className="text-muted-foreground">
              Passionate individuals driving change through fashion
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => <div key={index} className="text-center p-6 rounded-lg bg-background border border-border fade-in" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full object-cover mx-auto mb-4" />
                <h3 className="font-heading font-semibold text-lg mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => <div key={index} className="text-center fade-in" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary mb-4">
                  <value.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default About;