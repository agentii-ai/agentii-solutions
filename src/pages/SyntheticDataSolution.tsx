import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SyntheticDataHeroSection from "@/components/SyntheticDataHeroSection";
import SyntheticDataFabricationSection from "@/components/SyntheticDataFabricationSection";
import SyntheticDataPipelineSection from "@/components/SyntheticDataPipelineSection";
import SyntheticDataImpactSection from "@/components/SyntheticDataImpactSection";
import SyntheticDataBenefitsSection from "@/components/SyntheticDataBenefitsSection";
import SyntheticDataScaleSection from "@/components/SyntheticDataScaleSection";
import SyntheticDataSuiteSection from "@/components/SyntheticDataSuiteSection";

const SyntheticDataSolution = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <SyntheticDataHeroSection />
        <SyntheticDataFabricationSection />
        <SyntheticDataPipelineSection />
        <SyntheticDataImpactSection />
        <SyntheticDataBenefitsSection />
        <SyntheticDataScaleSection />
        <SyntheticDataSuiteSection />
      </main>
      <Footer />
    </div>
  );
};

export default SyntheticDataSolution;
