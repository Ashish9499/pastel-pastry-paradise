import { Instagram, Facebook, Twitter } from "lucide-react";

const footerLinks = {
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Story", href: "#" },
    { label: "Store Locations", href: "#contact" },
    { label: "Testimonials", href: "#" },
  ],
  products: [
    { label: "Shop Cakes", href: "#products" },
    { label: "Our Values", href: "#about" },
  ],
  support: [
    { label: "FAQ", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Refund Policy", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-12 md:pt-16 pb-8 safe-bottom">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 mb-10 md:mb-12">
          {/* Brand - Full width on mobile */}
          <div className="col-span-2 lg:col-span-2 text-center lg:text-left">
            <h2 className="font-display text-2xl md:text-3xl mb-4">Kanha Bakery</h2>
            <p className="text-primary-foreground/80 mb-6 max-w-xs mx-auto lg:mx-0 text-sm md:text-base">
              Bringing sweetness to every celebration. Handcrafted with love, 
              delivered with care.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-primary-foreground/80 text-sm md:text-base">
              <p className="font-semibold text-primary-foreground">
                (+123) 456 7890
              </p>
              <p>bakejoy.cakeshop@mail.com</p>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6 justify-center lg:justify-start">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-all duration-200 active:scale-95 touch-target"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links - Compact on mobile */}
          <div>
            <h4 className="font-bold text-base md:text-lg mb-3 md:mb-4">Company</h4>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200 text-sm md:text-base"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-base md:text-lg mb-3 md:mb-4">Products</h4>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200 text-sm md:text-base"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-1">
            <h4 className="font-bold text-base md:text-lg mb-3 md:mb-4">Support</h4>
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-2 md:gap-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200 text-sm md:text-base"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-xs md:text-sm text-center md:text-left">
              © 2024 BakeJoy. All rights reserved. Made with 🧁 and love.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-xs md:text-sm transition-colors">
                Privacy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-xs md:text-sm transition-colors">
                Terms
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-xs md:text-sm transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
