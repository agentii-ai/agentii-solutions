import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SyntheticDataHeroSection from "@/components/SyntheticDataHeroSection";
import SyntheticDataFabricationSection from "@/components/SyntheticDataFabricationSection";
import SyntheticDataImpactSection from "@/components/SyntheticDataImpactSection";

const SyntheticDataUseCase = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <SyntheticDataHeroSection />
        <SyntheticDataFabricationSection />
        <SyntheticDataImpactSection />
      </main>
      <Footer />
    </div>
  );
};

export default SyntheticDataUseCase;
