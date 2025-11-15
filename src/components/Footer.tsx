import { Link } from "react-router-dom";
import { Instagram, Linkedin, Mail } from "lucide-react";
const Footer = () => {
  const footerLinks = {
    Shop: [{
      name: "Personal",
      path: "/shop?category=Personal"
    }, {
      name: "Casual",
      path: "/shop?category=Casual"
    }, {
      name: "Hopeful",
      path: "/shop?category=Hopeful"
    }],
    Design: [{
      name: "Submit Design",
      path: "/design#submit"
    }, {
      name: "Past Winners",
      path: "/design#winners"
    }, {
      name: "Guidelines",
      path: "/design#submit"
    }],
    Causes: [{
      name: "Our NGO Partners",
      path: "/about#partners"
    }, {
      name: "Our Impact",
      path: "/causes#impact"
    }, {
      name: "Community",
      path: "/causes#community"
    }],
    About: [{
      name: "Our Story",
      path: "/about#story"
    }, {
      name: "Team",
      path: "/about#team"
    }, {
      name: "Contact",
      path: "/#contact"
    }]
  };
  return <footer className="bg-card border-t border-border mt-12 sm:mt-16 md:mt-20">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <h3 className="font-heading font-bold text-xl sm:text-2xl mb-3 sm:mb-4">TFAC</h3>
            <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
              Fashion that creates change.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/tees.4acause?igsh=ZjdnMm45N2R6Y21p" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="http://linkedin.com/company/teesforacause" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => <div key={category}>
              <h4 className="font-heading font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map(link => <li key={link.name}>
                    <Link to={link.path} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.name}
                    </Link>
                  </li>)}
              </ul>
            </div>)}
        </div>

        <div className="border-t border-border pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 sm:space-y-4 md:space-y-0">
            <p className="text-xs sm:text-sm text-muted-foreground text-center md:text-left"></p>
            <p className="text-xs sm:text-sm text-muted-foreground text-center">
              © 2025 Teesforacause. Mumbai, India.
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;