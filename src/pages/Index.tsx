import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Products from "@/components/Products";
import GoogleReviews from "@/components/GoogleReviews";
import HowToOrder from "@/components/HowToOrder";
import CakeJournal from "@/components/CakeJournal";
import Newsletter from "@/components/Newsletter";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <Features />
      <Products />
      <GoogleReviews />
      <HowToOrder />
      <CakeJournal />
      <Newsletter />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
