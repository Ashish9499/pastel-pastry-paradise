import { useState } from "react";
import { MessageCircle, ExternalLink, Loader2 } from "lucide-react";
import { WaveDivider } from "./WaveDivider";
import { useProducts, Product } from "@/hooks/useProducts";

// Import fallback product images
import chocolateCake from "@/assets/product-chocolate-cake.jpg";
import vanillaCake from "@/assets/product-vanilla-cake.jpg";
import cookies from "@/assets/product-cookies.jpg";
import puffs from "@/assets/product-puffs.jpg";
import weddingCake from "@/assets/product-wedding-cake.jpg";
import birthdayCake from "@/assets/product-birthday-cake.jpg";

// Fallback images based on category
const fallbackImages: Record<string, string> = {
  Cakes: chocolateCake,
  Cookies: cookies,
  Puffs: puffs,
};

// Additional fallback images for variety
const cakeFallbacks = [chocolateCake, vanillaCake, weddingCake, birthdayCake];

const categories = ["All", "Cakes", "Cookies", "Puffs"] as const;
type Category = (typeof categories)[number];

export const Products = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const { products, isLoading, error } = useProducts();

  const getProductImage = (product: Product, index: number): string => {
    // Use uploaded image if available
    if (product.image_url) return product.image_url;
    
    // Use category-based fallback with variety for cakes
    if (product.category === "Cakes") {
      return cakeFallbacks[index % cakeFallbacks.length];
    }
    return fallbackImages[product.category] || chocolateCake;
  };

  const handleWhatsAppOrder = (productName: string, productImage: string, productPrice: number) => {
    const baseUrl = window.location.origin;
    const imageUrl = productImage.startsWith('http') ? productImage : `${baseUrl}${productImage}`;
    
    const message = encodeURIComponent(
      `Hi! 👋\n\nI want to order this:\n\n🎂 *${productName}*\n💰 Listed Price: $${productPrice}\n\nIs this available and what is the final price?\n\n📸 Product Image: ${imageUrl}`
    );
    window.open(`https://wa.me/7206779411?text=${message}`, "_blank");
  };

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section id="products" className="relative bg-background py-16 md:py-28">
      <div className="container mx-auto px-4">

        {/* WhatsApp Order Notice - Mobile optimized */}
        <div className="glass rounded-2xl p-4 md:p-6 mb-8 text-center border border-coral/20">
          <div className="flex items-center justify-center gap-2 text-primary font-semibold mb-2">
            <MessageCircle size={20} className="animate-wiggle" />
            <span>Easy WhatsApp Ordering!</span>
          </div>
          <p className="text-foreground/70 text-sm md:text-base">
            Take a screenshot of your favorite items and send it to us on WhatsApp to order.
          </p>
        </div>

        {/* Category Tabs - Horizontal scroll on mobile */}
        <div className="flex gap-2 mb-8 overflow-x-auto scrollbar-hide pb-2 snap-x-mandatory -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap md:justify-center md:gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex-shrink-0 px-5 py-2.5 md:px-6 md:py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 touch-target snap-center ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-secondary/70 text-foreground/70 hover:bg-secondary hover:text-foreground active:scale-95"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex items-center justify-center py-16">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-16">
            <p className="text-foreground/60">Failed to load products. Please try again later.</p>
          </div>
        )}

        {/* Products Grid - 2 columns on mobile */}
        {!isLoading && !error && (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-8 perspective-container">
            {filteredProducts.map((product, index) => {
              const productImage = getProductImage(product, index);
              return (
                <div 
                  key={product.id} 
                  className="product-card animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Product Image */}
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={productImage}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <span className="absolute top-2 left-2 md:top-4 md:left-4 bg-primary/90 text-primary-foreground text-[10px] md:text-xs font-semibold px-2 py-0.5 md:px-3 md:py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>

                  {/* Product Info - Compact on mobile */}
                  <div className="p-3 md:p-5">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-3">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-foreground text-sm md:text-lg mb-1 line-clamp-2">
                          {product.name}
                        </h3>
                        <p className="text-coral font-bold text-lg md:text-xl">
                          ${product.price}
                        </p>
                      </div>
                      
                      {/* WhatsApp Button */}
                      <button
                        onClick={() => handleWhatsAppOrder(product.name, productImage, product.price)}
                        className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center hover:bg-[#20BD5A] active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg touch-target self-end md:self-auto"
                        aria-label={`Order ${product.name} on WhatsApp`}
                      >
                        <MessageCircle size={18} className="md:w-5 md:h-5" />
                      </button>
                    </div>

                    <button className="mt-3 md:mt-4 flex items-center gap-1 text-primary font-semibold text-xs md:text-sm hover:gap-2 transition-all duration-200">
                      More Details
                      <ExternalLink size={12} className="md:w-3.5 md:h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}

            {filteredProducts.length === 0 && !isLoading && (
              <div className="col-span-full text-center py-16">
                <p className="text-foreground/60">No products found in this category.</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Wave Divider */}
      <WaveDivider fillColor="hsl(var(--peach))" className="absolute bottom-0 left-0 right-0" />
    </section>
  );
};

export default Products;
