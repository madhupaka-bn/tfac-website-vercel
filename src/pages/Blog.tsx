import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
const Blog = () => {
  const videos = [
    {
      title: "Creating Impact Together",
      url: "https://res.cloudinary.com/dg4wzx8c8/video/upload/v1761825572/app_images/pbgbgmkkmxzevukfw7e9.mp4"
    },
    {
      title: "Youth Empowerment Journey",
      url: "https://res.cloudinary.com/dg4wzx8c8/video/upload/v1761825705/app_images/tfjv8shpkk1vwyrn4wkx.mp4"
    },
    {
      title: "Designer Stories",
      url: "https://res.cloudinary.com/dg4wzx8c8/video/upload/v1761825773/app_images/zltmdavc9slxybl4eg9q.mp4"
    },
    {
      title: "Community Voices",
      url: "https://res.cloudinary.com/dg4wzx8c8/video/upload/v1761825800/app_images/gebcciwqlrhx3g2hfdpf.mp4"
    },
    {
      title: "Making a Difference",
      url: "https://res.cloudinary.com/dg4wzx8c8/video/upload/v1761825826/app_images/gpau6ioyulhdh7wjaybn.mp4"
    }
  ];
  return <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Stories of Change
            </h1>
            <p className="text-xl text-muted-foreground">
              Impact stories, youth voices, and designer spotlights
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center fade-in">
            <h2 className="text-2xl font-heading font-bold mb-4">
              Stay Inspired
            </h2>
            <p className="text-muted-foreground mb-6">Join 800+ changemakers getting weekly stories of impact</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button className="hover-glow">
                Subscribe <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Watch Our Impact Unfold
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real stories from our community of young designers, changemakers, and impact partners
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {videos.map((video, index) => (
              <article 
                key={index} 
                className="rounded-lg overflow-hidden border border-border bg-card hover:border-primary transition-all group fade-in" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video bg-muted overflow-hidden">
                  <video 
                    controls 
                    preload="metadata"
                    className="w-full h-full object-cover"
                  >
                    <source src={video.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-xl group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center fade-in">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Want to Share Your Story?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              We love featuring our community members, designers, and impact partners
            </p>
            <Button size="lg" className="hover-glow">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Blog;