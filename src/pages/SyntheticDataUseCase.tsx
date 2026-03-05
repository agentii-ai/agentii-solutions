import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SyntheticDataHeroSection from "@/components/SyntheticDataHeroSection";
import SyntheticDataFabricationSection from "@/components/SyntheticDataFabricationSection";

const SyntheticDataUseCase = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <SyntheticDataHeroSection />
        <SyntheticDataFabricationSection />
      </main>
      <Footer />
    </div>
  );
};

export default SyntheticDataUseCase;
