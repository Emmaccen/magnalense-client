import ProductPage from "@/components/pages/productPages/ProductPage";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RelatedProducts from "@/components/pages/productPages/RelatedProduct";
import ProductSection from "@/components/pages/productPages/ProductSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <ProductSection />
      <ProductPage />
      {/* Related Products Section */}
      <div className="bg-white border-t border-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <RelatedProducts />
        </div>
      </div>
      <Footer />
    </main>
  );
}
