import { Award, Palette, Truck, DollarSign, Heart } from "lucide-react";
import { Sparkle } from "./Sparkle";
import { WaveDividerAlt } from "./WaveDivider";

// Import cake images
import chocolateCake from "@/assets/product-chocolate-cake.jpg";
import vanillaCake from "@/assets/product-vanilla-cake.jpg";
import weddingCake from "@/assets/product-wedding-cake.jpg";
import birthdayCake from "@/assets/product-birthday-cake.jpg";

const features = [
  { icon: Award, label: "Quality Ingredients", variant: "primary" as const },
  { icon: Palette, label: "Personalized Designs", variant: "primary" as const },
  { icon: Truck, label: "On-Time Delivery", variant: "primary" as const },
  { icon: DollarSign, label: "Affordable Prices", variant: "primary" as const },
  { icon: Heart, label: "Made with Love", variant: "outline" as const },
];

const cakeImages = [
  { src: chocolateCake, alt: "Chocolate Cake" },
  { src: vanillaCake, alt: "Vanilla Cake" },
  { src: weddingCake, alt: "Wedding Cake" },
  { src: birthdayCake, alt: "Birthday Cake" },
];

export const Features = () => {
  return (
    <section id="about" className="relative section-peach py-12 md:py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="relative order-2 lg:order-1 px-1 sm:px-2">
            <Sparkle className="absolute -top-6 -left-2 sparkle hidden md:block" size={18} />
            <Sparkle className="absolute top-12 right-0 sparkle sparkle-delay-1 hidden md:block" size={14} />
            
            <h2 className="font-display text-lg sm:text-xl md:text-2xl lg:text-4xl text-primary mb-4 sm:mb-6 text-center lg:text-left">
              Best Choice for{" "}
              <span className="text-coral relative inline-block">
                Every Occasion
                <svg className="absolute -bottom-1 left-0 w-full h-2 text-coral/30" viewBox="0 0 100 8" preserveAspectRatio="none">
                  <path d="M0 4 Q 25 0, 50 4 T 100 4" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </span>
            </h2>
            
            <p className="text-foreground/80 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8 text-center lg:text-left max-w-md sm:max-w-lg mx-auto lg:mx-0">
              At Kanha Bakery, we turn simple ingredients into delectable works of 
              edible art. Satisfy your cravings with our irresistible pastries and 
              baked goods, delivered fresh from oven for you truly.
            </p>

            {/* Feature Badges - Mobile first approach */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3 justify-center lg:justify-start">
              <button className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 touch-target active:scale-95">
                <span className="text-xs sm:text-sm md:text-base">+</span>
              </button>
              {features.map((feature) => (
                <span
                  key={feature.label}
                  className={`feature-badge text-xs px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 ${
                    feature.variant === "primary" 
                      ? "feature-badge-primary" 
                      : "feature-badge-outline"
                  }`}
                >
                  <span className="truncate max-w-20 sm:max-w-none">{feature.label}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Decorative Image Area - Mobile horizontal scroll, desktop grid */}
          <div className="relative order-1 lg:order-2">
            {/* Desktop Grid */}
            <div className="hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-br from-coral/20 to-primary/10 rounded-full blur-3xl" />
              <div className="relative glass rounded-3xl p-6 border border-border/30 perspective-container">
                <div className="grid grid-cols-2 gap-4">
                  {cakeImages.map((cake, i) => (
                    <div 
                      key={i} 
                      className="aspect-square rounded-2xl overflow-hidden shadow-lg card-3d"
                    >
                      <img 
                        src={cake.src} 
                        alt={cake.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Grid Layout */}
            <div className="lg:hidden -mx-2 sm:-mx-4 px-2 sm:px-4">
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {cakeImages.map((cake, i) => (
                  <div 
                    key={i} 
                    className="aspect-square rounded-2xl overflow-hidden shadow-lg card-3d"
                  >
                    <img 
                      src={cake.src} 
                      alt={cake.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              {/* Swipe indicator */}
              <div className="flex items-center justify-center gap-1 mt-3">
                <div className="w-4 h-1 rounded-full bg-coral" />
                <div className="w-1 h-1 rounded-full bg-coral/40" />
                <div className="w-1 h-1 rounded-full bg-coral/40" />
                <div className="w-1 h-1 rounded-full bg-coral/40" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <WaveDividerAlt fillColor="hsl(var(--background))" className="absolute bottom-0 left-0 right-0" />
    </section>
  );
};

export default Features;
