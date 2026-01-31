import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const navLinks = [{
  label: "About",
  href: "#about"
}, {
  label: "Products",
  href: "#products"
},{
  label: "Contact",
  href: "#contact"
}];
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="font-display text-2xl md:text-3xl text-primary">Kanha Bakery</span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <li key={link.label}>
                <a href={link.href} className="text-foreground/80 hover:text-primary font-semibold transition-colors duration-200">
                  {link.label}
                </a>
              </li>)}
          </ul>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="btn-primary-glow text-sm px-6 py-2">
              Order Now
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden py-4 border-t border-border">
            <ul className="flex flex-col gap-4">
              {navLinks.map(link => <li key={link.label}>
                  <a href={link.href} className="block py-2 text-foreground/80 hover:text-primary font-semibold transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
                    {link.label}
                  </a>
                </li>)}
              <li>
                <Button className="w-full btn-primary-glow mt-2">
                  Order Now
                </Button>
              </li>
            </ul>
          </div>}
      </div>
    </header>;
};
export default Header;