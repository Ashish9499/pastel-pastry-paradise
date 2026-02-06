import { useState, useEffect, useRef } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Sparkle } from "./Sparkle";

const reviews = [
  {
    id: 1,
    name: "Yashika Walia",
    avatar: "YW",
    rating: 5,
    date: "2 weeks ago",
    text: "I just have to say — this cake absolutely stole my heart the moment I laid eyes on it! From the delicate heart shape to the vibrant pink and cream color palette, every single detail was a work of art.",
  },
  {
    id: 2,
    name: "Sneha Rana",
    avatar: "SR",
    rating: 5,
    date: "1 month ago",
    text: "I recently ordered these cakes, and I must say they were absolutely stunning! The creativity and attention to detail were incredible — one cake designed like a cup of chai with 'I ❤️ CHAI' written on it!",
  },
  {
    id: 3,
    name: "Mehak Mehta",
    avatar: "MM",
    rating: 5,
    date: "3 weeks ago",
    text: "I ordered the cake at the last moment, and I truly appreciate how quickly it was prepared and delivered. The presentation was beautiful, and the cake tasted absolutely fresh and delicious.",
  },
  {
    id: 4,
    name: "Kanchan Pal",
    avatar: "KP",
    rating: 5,
    date: "1 week ago",
    text: "For my son's birthday, I ordered two cakes from Kanha Ji Baker, and they truly made the celebration extra special. The cakes were soft, moist, and perfectly sweet!",
  },
  {
    id: 5,
    name: "Jessica Taylor",
    avatar: "JT",
    rating: 5,
    date: "2 months ago",
    text: "The vanilla chiffon cake was so light and fluffy. Perfect for our anniversary celebration!",
  },
  {
    id: 6,
    name: "Ridhi Jain",
    avatar: "RJ",
    rating: 5,
    date: "1 month ago",
    text: "I have ordered many times cake from here and this place never make me feel regret. Always this bakery make me feel to order cake from here only. A1 cake😋😋",
  },
  {
    id: 7,
    name: "Raman Preet",
    avatar: "RP",
    rating: 5,
    date: "3 days ago",
    text: "Cake is happiness! If you know the way of the cake, you know the way of happiness! Totally delicious, entirely indulgent awesome cakes here at Kanha Ji Bakers.",
  },
  {
    id: 8,
    name: "Rashmi Botia",
    avatar: "RB",
    rating: 4,
    date: "2 weeks ago",
    text: "Dear Kanha bakers. Thank you for making such a beautiful cake for my son's birthday. Absolutely delicious! The cake was super soft, fresh, and perfectly sweetened.",
  },
  {
    id: 9,
    name: "Ashish Rohella",
    avatar: "AR",
    rating: 5,
    date: "1 week ago",
    text: "I wanted to express my sincere gratitude for the beautiful and delicious cake you made for my son's first birthday. The cake was not only visually stunning but also incredibly tasty!",
  },
  {
    id: 10,
    name: "Thomas Anderson",
    avatar: "TA",
    rating: 5,
    date: "4 weeks ago",
    text: "Incredible attention to detail. The custom decorations on my wife's cake were stunning!",
  },
  {
    id: 11,
    name: "Maria Garcia",
    avatar: "MG",
    rating: 5,
    date: "2 months ago",
    text: "Best cheese puffs in the city! Crispy outside, creamy inside. Absolutely addictive!",
  },
  {
    id: 12,
    name: "Kevin Brown",
    avatar: "KB",
    rating: 4,
    date: "5 days ago",
    text: "Great value for money. The butter cookies box is perfect for gifting. Highly recommend!",
  },
  {
    id: 13,
    name: "Nicole Lee",
    avatar: "NL",
    rating: 5,
    date: "1 month ago",
    text: "Discovered this gem through a friend. Now I order here for every celebration. Simply the best!",
  },
  {
    id: 14,
    name: "Christopher Davis",
    avatar: "CD",
    rating: 5,
    date: "3 weeks ago",
    text: "The quality is consistent every single time. That's what keeps me coming back!",
  },
  {
    id: 15,
    name: "Stephanie Moore",
    avatar: "SM",
    rating: 5,
    date: "1 week ago",
    text: "Ordered last minute and they still delivered a perfect cake. Amazing service and taste!",
  },
];

export const GoogleReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const reviewsPerView = isMobile ? 1 : 3;
  const maxIndex = reviews.length - reviewsPerView;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={14}
        className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-muted"}
      />
    ));
  };

  return (
    <section className="relative bg-secondary/30 py-16 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16 relative">
          <Sparkle className="absolute top-0 left-1/4 sparkle hidden md:block" size={18} />
          <Sparkle className="absolute -top-4 right-1/3 sparkle sparkle-delay-1 hidden md:block" size={22} />
          
          <div className="flex items-center justify-center gap-2 mb-4">
            <img 
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
              alt="Google" 
              className="h-5 md:h-8"
            />
            <span className="text-foreground/70 font-semibold text-sm md:text-base">Reviews</span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-coral mb-4">
            What Our Customers Say
          </h2>
          
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">{renderStars(5)}</div>
            <span className="text-foreground font-bold text-lg">4.9</span>
            <span className="text-foreground/60 text-sm">({reviews.length} reviews)</span>
          </div>
          
          <p className="text-foreground/70 text-sm md:text-lg max-w-2xl mx-auto">
            Don't just take our word for it – hear from our happy customers!
          </p>
        </div>

        {/* Reviews Slider */}
        <div className="relative">
          {/* Navigation Buttons - Hidden on mobile, swipe instead */}
          <button
            onClick={handlePrev}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 w-12 h-12 rounded-full bg-background shadow-lg border border-border items-center justify-center hover:bg-secondary transition-colors"
            aria-label="Previous reviews"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            onClick={handleNext}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 w-12 h-12 rounded-full bg-background shadow-lg border border-border items-center justify-center hover:bg-secondary transition-colors"
            aria-label="Next reviews"
          >
            <ChevronRight size={20} />
          </button>

          {/* Reviews Container */}
          <div 
            ref={scrollRef}
            className="overflow-hidden mx-0 md:mx-12"
          >
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / reviewsPerView)}%)` }}
            >
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="w-full md:w-1/3 flex-shrink-0 px-2 md:px-4"
                >
                  <div className="glass rounded-2xl p-5 md:p-6 h-full flex flex-col border border-border/30 hover:border-coral/30 transition-colors">
                    {/* Quote Icon */}
                    <Quote className="text-coral/40 mb-3" size={24} />
                    
                    {/* Review Text */}
                    <p className="text-foreground/80 text-sm md:text-base mb-4 flex-grow line-clamp-4">
                      "{review.text}"
                    </p>
                    
                    {/* Rating */}
                    <div className="flex gap-0.5 mb-4">
                      {renderStars(review.rating)}
                    </div>
                    
                    {/* Reviewer Info */}
                    <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-coral/30 to-primary/30 flex items-center justify-center text-primary font-bold text-sm">
                        {review.avatar}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm">{review.name}</p>
                        <p className="text-foreground/50 text-xs">{review.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Swipe Indicator */}
          <div className="md:hidden flex items-center justify-center gap-2 mt-4">
            <ChevronLeft size={16} className="text-foreground/40" />
            <span className="text-foreground/40 text-xs">Swipe</span>
            <ChevronRight size={16} className="text-foreground/40" />
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex items-center justify-center gap-1.5 md:gap-2 mt-6 md:mt-8">
          {Array.from({ length: Math.ceil(reviews.length / reviewsPerView) }, (_, i) => (
            <button
              key={i}
              onClick={() => {
                setCurrentIndex(i * reviewsPerView > maxIndex ? maxIndex : i * reviewsPerView);
              }}
              className={`h-2 rounded-full transition-all duration-300 touch-target ${
                Math.floor(currentIndex / reviewsPerView) === i
                  ? "bg-coral w-6"
                  : "bg-coral/30 w-2 hover:bg-coral/50"
              }`}
              aria-label={`Go to review group ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
