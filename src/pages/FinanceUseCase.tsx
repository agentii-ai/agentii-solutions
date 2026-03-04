import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinanceHeroSection from "@/components/FinanceHeroSection";

const FinanceUseCase = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <FinanceHeroSection />
      </main>
      <Footer />
    </div>
  );
};

export default FinanceUseCase;
