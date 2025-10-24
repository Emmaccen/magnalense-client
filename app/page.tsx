import Hero from "@/components/pages/homepage/Hero"
import FeaturedEyewearProductPage from "@/components/pages/homepage/FeaturedEyewearProductPage"
import CustomersFavoritesEyewearProductPage from "@/components/pages/homepage/CustomersFavoritesEyewearProductPage"
import SatisfiedCustomers from "@/components/pages/homepage/SatisfiedCustomers"
import NewsletterSignup from "@/components/pages/homepage/NewsletterSignup"
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default function Home() {
  return (
   <div className="min-h-screen bg-white">
        <Header />
   <Hero />
      <FeaturedEyewearProductPage />
      <CustomersFavoritesEyewearProductPage />
      <SatisfiedCustomers />
      <NewsletterSignup />
      <Footer />
   </div>
  );
}
