import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Sparkle } from "./Sparkle";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "SJ",
    rating: 5,
    date: "2 weeks ago",
    text: "Absolutely divine! The chocolate cake was the star of my daughter's birthday party. Everyone asked where I got it from!",
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "MC",
    rating: 5,
    date: "1 month ago",
    text: "Best bakery in town! The croissants are buttery perfection. I'm a regular customer now.",
  },
  {
    id: 3,
    name: "Emily Williams",
    avatar: "EW",
    rating: 5,
    date: "3 weeks ago",
    text: "Ordered a custom wedding cake and it exceeded all expectations. Beautiful design and incredible taste!",
  },
  {
    id: 4,
    name: "David Rodriguez",
    avatar: "DR",
    rating: 4,
    date: "1 week ago",
    text: "Great variety of cookies and pastries. The cream puffs are to die for! Will definitely come back.",
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
    name: "Robert Kim",
    avatar: "RK",
    rating: 5,
    date: "1 month ago",
    text: "Outstanding customer service and even better cakes. The WhatsApp ordering is so convenient!",
  },
  {
    id: 7,
    name: "Amanda Foster",
    avatar: "AF",
    rating: 5,
    date: "3 days ago",
    text: "Fresh, delicious, and beautifully presented. These are the best cookies I've ever had!",
  },
  {
    id: 8,
    name: "James Wilson",
    avatar: "JW",
    rating: 4,
    date: "2 weeks ago",
    text: "Ordered for a corporate event and everyone was impressed. Great quality and timely delivery.",
  },
  {
    id: 9,
    name: "Lisa Patel",
    avatar: "LP",
    rating: 5,
    date: "1 week ago",
    text: "The rainbow birthday cake was a hit! My kids loved it. Thank you for making our day special!",
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
  const reviewsPerView = 3;
  const maxIndex = reviews.length - reviewsPerView;

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
      />
    ));
  };

  return (
    <section className="relative bg-secondary/30 py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 relative">
          <Sparkle className="absolute top-0 left-1/4 sparkle hidden md:block" size={18} />
          <Sparkle className="absolute -top-4 right-1/3 sparkle sparkle-delay-1 hidden md:block" size={22} />
          
          <div className="flex items-center justify-center gap-2 mb-4">
            <img 
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
              alt="Google" 
              className="h-6 md:h-8"
            />
            <span className="text-foreground/70 font-semibold">Reviews</span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-coral mb-4">
            What Our Customers Say
          </h2>
          
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">{renderStars(5)}</div>
            <span className="text-foreground font-bold text-lg">4.9</span>
            <span className="text-foreground/60">({reviews.length} reviews)</span>
          </div>
          
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Don't just take our word for it – hear from our happy customers!
          </p>
        </div>

        {/* Reviews Slider */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background shadow-lg border border-border flex items-center justify-center hover:bg-secondary transition-colors"
            aria-label="Previous reviews"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background shadow-lg border border-border flex items-center justify-center hover:bg-secondary transition-colors"
            aria-label="Next reviews"
          >
            <ChevronRight size={20} />
          </button>

          {/* Reviews Container */}
          <div className="overflow-hidden mx-6 md:mx-12">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / reviewsPerView)}%)` }}
            >
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="w-full md:w-1/3 flex-shrink-0 px-2 md:px-4"
                >
                  <div className="bg-background rounded-2xl p-6 shadow-md border border-border/50 h-full flex flex-col">
                    {/* Quote Icon */}
                    <Quote className="text-primary/30 mb-3" size={28} />
                    
                    {/* Review Text */}
                    <p className="text-foreground/80 text-sm md:text-base mb-4 flex-grow line-clamp-4">
                      "{review.text}"
                    </p>
                    
                    {/* Rating */}
                    <div className="flex gap-0.5 mb-4">
                      {renderStars(review.rating)}
                    </div>
                    
                    {/* Reviewer Info */}
                    <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
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
        </div>

        {/* Dots Indicator */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: Math.ceil(reviews.length / reviewsPerView) }, (_, i) => (
            <button
              key={i}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentIndex(i * reviewsPerView > maxIndex ? maxIndex : i * reviewsPerView);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / reviewsPerView) === i
                  ? "bg-primary w-6"
                  : "bg-primary/30 hover:bg-primary/50"
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
