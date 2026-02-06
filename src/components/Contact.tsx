import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "09728855586",
    href: "tel:+919728855586",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "09728855586",
    href: "https://wa.me/9728855586",
  },
  {
    icon: Mail,
    label: "Email",
    value: "kanha@bakery.com",
    href: "mailto:kanha@bakery.com",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon-Sun: 10AM - 10PM",
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="relative bg-background py-16 md:py-28 safe-bottom">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact Info & Map */}
          <div>
            <h2 className="font-display text-3xl sm:text-4xl text-primary mb-6 text-center lg:text-left">
              Visit Our Bakery
            </h2>
            
            <div className="flex items-start gap-3 mb-6 bg-secondary/30 rounded-2xl p-4">
              <MapPin className="w-6 h-6 text-coral flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-foreground">Kanha Bakery</p>
                <p className="text-foreground/70 text-sm md:text-base">
                  Brahamkumari chowk, 424/C, Gobindnagar, Jagadhari Rd,
                  near The PALM Hotel, Ambala Cantt, Haryana 133001
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-card mb-6 aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.46492211853!2d76.85785457502192!3d30.337734204616194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fb7450cda2ac1%3A0x9e440bfd7c03780!2sKanha%20G%20Bakers!5e0!3m2!1sen!2sin!4v1769846041855!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="BakeJoy Bakery Location"
              />
            </div>

            {/* Contact Details - 2x2 grid */}
            <div className="grid grid-cols-2 gap-3">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href?.startsWith("http") ? "_blank" : undefined}
                  rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`flex items-center gap-2 p-3 md:p-4 rounded-xl glass border border-border/30 transition-all duration-200 touch-target ${
                    item.href ? "hover:bg-secondary hover:border-primary active:scale-95 cursor-pointer" : ""
                  }`}
                >
                  <item.icon className="w-4 h-4 md:w-5 md:h-5 text-coral flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wide">
                      {item.label}
                    </p>
                    <p className="font-semibold text-foreground text-xs md:text-sm truncate">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass rounded-3xl p-5 md:p-8 border border-border/30">
            <h3 className="font-display text-2xl md:text-3xl text-coral mb-2">
              Send us a message
            </h3>
            <p className="text-foreground/70 text-sm md:text-base mb-6">
              Have a question or special request? We'd love to hear from you!
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-12 rounded-xl touch-target"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (234) 567-890"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="h-12 rounded-xl touch-target"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your order or question..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="rounded-xl resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 active:scale-95 transition-all duration-300 touch-target"
              >
                <Send size={18} className="mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
