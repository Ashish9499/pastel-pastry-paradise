import { Sparkle } from "./Sparkle";
import { WaveDividerAlt } from "./WaveDivider";

const steps = [
  {
    number: 1,
    title: "Choose",
    description: "Pick your favorite cake flavor and design.",
    emoji: "🎂",
  },
  {
    number: 2,
    title: "Order",
    description: "Take a screenshot and send it via WhatsApp.",
    emoji: "📱",
  },
  {
    number: 3,
    title: "Customize",
    description: "Add personal touches and special requests.",
    emoji: "✨",
  },
];

export const HowToOrder = () => {
  return (
    <section className="relative section-peach py-16 md:py-28">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 relative">
          <Sparkle className="absolute -top-6 left-1/3 sparkle hidden md:block" size={20} />
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-primary mb-4">
            How to Order
          </h2>
          <p className="text-foreground/70 text-base md:text-lg max-w-xl mx-auto">
            Ordering from BakeJoy is as easy as 1-2-3!
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connection Line - Desktop */}
            <div className="hidden md:block absolute top-8 left-8 right-8 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 z-0" />
            
            <div className="grid md:grid-cols-3 gap-6 md:gap-12 relative z-10">
              {steps.map((step, index) => (
                <div 
                  key={step.number} 
                  className="flex flex-col items-center text-center animate-fade-in perspective-container"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Step Number with 3D effect */}
                  <div className="step-number mb-4 md:mb-6 card-3d relative">
                    <span className="absolute -top-2 -right-2 text-2xl">{step.emoji}</span>
                    {step.number}
                  </div>
                  
                  {/* Step Content */}
                  <h3 className="font-display text-xl md:text-2xl text-coral mb-2">
                    {step.title}
                  </h3>
                  <p className="text-foreground/70 text-sm md:text-base">
                    {step.description}
                  </p>

                  {/* Connection dots - Mobile */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden flex flex-col items-center my-3">
                      <div className="w-0.5 h-6 bg-gradient-to-b from-primary to-primary/20" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="text-center mt-10 md:mt-12">
            <a
              href="https://wa.me/9728855586"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn inline-flex touch-target pulse-glow"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Start Your Order
            </a>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <WaveDividerAlt fillColor="hsl(var(--mint))" className="absolute bottom-0 left-0 right-0" />
    </section>
  );
};

export default HowToOrder;
