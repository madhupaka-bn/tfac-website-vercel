import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Shop", path: "/shop" },
    { name: "Design", path: "/design" },
    { name: "Causes", path: "/causes" },
    { name: "Stories", path: "/blog" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/assets/logo.png" alt="TFAC Logo" className="h-8 sm:h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-body text-sm transition-colors ${
                  isActive(link.path)
                    ? "text-foreground font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button asChild className="hover-glow">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScU7Qhu2zYOOtV05QXKA5J7lqJFvy_QZ-edt460zAy54R6FIg/viewform" target="_blank" rel="noopener noreferrer">
                Join Our Movement
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block font-body text-sm py-2 ${
                  isActive(link.path)
                    ? "text-foreground font-semibold"
                    : "text-muted-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="w-full hover-glow">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScU7Qhu2zYOOtV05QXKA5J7lqJFvy_QZ-edt460zAy54R6FIg/viewform" target="_blank" rel="noopener noreferrer">
                Join Our Movement
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
