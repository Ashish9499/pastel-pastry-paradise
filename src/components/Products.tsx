import { useState } from "react";
import { MessageCircle, ExternalLink } from "lucide-react";
import { WaveDivider } from "./WaveDivider";
import { Sparkle } from "./Sparkle";

// Import product images
import chocolateCake from "@/assets/product-chocolate-cake.jpg";
import vanillaCake from "@/assets/product-vanilla-cake.jpg";
import cookies from "@/assets/product-cookies.jpg";
import puffs from "@/assets/product-puffs.jpg";
import weddingCake from "@/assets/product-wedding-cake.jpg";
import birthdayCake from "@/assets/product-birthday-cake.jpg";

const products = [
  {
    id: 1,
    name: "Descendant Choco Chips",
    price: 15,
    image: cookies,
    category: "Cookies",
  },
  {
    id: 2,
    name: "Classic Vanilla Chiffon Cake",
    price: 25,
    image: vanillaCake,
    category: "Cakes",
  },
  {
    id: 3,
    name: "Choco Mousse Extravaganza",
    price: 35,
    image: chocolateCake,
    category: "Cakes",
  },
  {
    id: 4,
    name: "Cream Puff Delight",
    price: 12,
    image: puffs,
    category: "Puffs",
  },
  {
    id: 5,
    name: "Elegant Wedding Cake",
    price: 150,
    image: weddingCake,
    category: "Cakes",
  },
  {
    id: 6,
    name: "Rainbow Birthday Cake",
    price: 45,
    image: birthdayCake,
    category: "Cakes",
  },
  {
    id: 7,
    name: "Butter Cookies Box",
    price: 18,
    image: cookies,
    category: "Cookies",
  },
  {
    id: 8,
    name: "Cheese Puffs",
    price: 10,
    image: puffs,
    category: "Puffs",
  },
];

const categories = ["All", "Cakes", "Cookies", "Puffs"] as const;
type Category = (typeof categories)[number];

export const Products = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const handleWhatsAppOrder = (productName: string, productImage: string, productPrice: number) => {
    // Get the full image URL for the product
    const baseUrl = window.location.origin;
    const imageUrl = productImage.startsWith('http') ? productImage : `${baseUrl}${productImage}`;
    
    const message = encodeURIComponent(
      `Hi! 👋\n\nI want to order this:\n\n🎂 *${productName}*\n💰 Listed Price: $${productPrice}\n\nIs this available and what is the final price?\n\n📸 Product Image: ${imageUrl}`
    );
    window.open(`https://wa.me/1234567890?text=${message}`, "_blank");
  };

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section id="products" className="relative bg-background py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 relative">
          <Sparkle className="absolute top-0 left-1/4 sparkle hidden md:block" size={18} />
          <Sparkle className="absolute -top-4 right-1/4 sparkle sparkle-delay-1 hidden md:block" size={22} />
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-coral mb-4">
            Our Signature
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Discover our handcrafted selection of cakes, cookies, and pastries. 
            Each piece is made fresh daily with love.
          </p>
        </div>

        {/* WhatsApp Order Notice */}
        <div className="bg-secondary/50 rounded-2xl p-4 md:p-6 mb-10 text-center border border-border/50">
          <div className="flex items-center justify-center gap-2 text-primary font-semibold mb-2">
            <MessageCircle size={20} />
            <span>Easy WhatsApp Ordering!</span>
          </div>
          <p className="text-foreground/70 text-sm md:text-base">
            Take a screenshot of your favorite items and send it to us on WhatsApp to order.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-secondary/70 text-foreground/70 hover:bg-secondary hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="product-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <span className="absolute top-4 left-4 bg-primary/90 text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  {product.category}
                </span>
              </div>

              {/* Product Info */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-1 line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-coral font-bold text-xl">
                      ${product.price}
                    </p>
                  </div>
                  
                  {/* WhatsApp Button */}
                  <button
                    onClick={() => handleWhatsAppOrder(product.name, product.image, product.price)}
                    className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center hover:bg-[#20BD5A] transition-colors duration-200 shadow-md hover:shadow-lg"
                    aria-label={`Order ${product.name} on WhatsApp`}
                  >
                    <MessageCircle size={20} />
                  </button>
                </div>

                <button className="mt-4 flex items-center gap-1 text-primary font-semibold text-sm hover:gap-2 transition-all duration-200">
                  More Details
                  <ExternalLink size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination (Visual Only) */}
        <div className="flex items-center justify-center gap-2 mt-12">
          <button className="w-10 h-10 rounded-full border-2 border-border hover:border-primary transition-colors flex items-center justify-center">
            ‹
          </button>
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              className={`w-10 h-10 rounded-full font-semibold transition-colors ${
                page === 1 
                  ? "bg-primary text-primary-foreground" 
                  : "text-foreground/60 hover:text-primary"
              }`}
            >
              {page}
            </button>
          ))}
          <span className="text-foreground/40 px-2">...</span>
          <button className="w-10 h-10 rounded-full font-semibold text-foreground/60 hover:text-primary transition-colors">
            10
          </button>
          <button className="w-10 h-10 rounded-full border-2 border-border hover:border-primary transition-colors flex items-center justify-center">
            ›
          </button>
        </div>
      </div>

      {/* Wave Divider */}
      <WaveDivider fillColor="hsl(var(--peach))" className="absolute bottom-0 left-0 right-0" />
    </section>
  );
};

export default Products;
