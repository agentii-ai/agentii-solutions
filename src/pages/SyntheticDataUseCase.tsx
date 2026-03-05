import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SyntheticDataHeroSection from "@/components/SyntheticDataHeroSection";
import SyntheticDataFabricationSection from "@/components/SyntheticDataFabricationSection";
import SyntheticDataImpactSection from "@/components/SyntheticDataImpactSection";
import SyntheticDataBenefitsSection from "@/components/SyntheticDataBenefitsSection";

const SyntheticDataUseCase = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <SyntheticDataHeroSection />
        <SyntheticDataFabricationSection />
        <SyntheticDataImpactSection />
        <SyntheticDataBenefitsSection />
      </main>
      <Footer />
    </div>
  );
};

export default SyntheticDataUseCase;
