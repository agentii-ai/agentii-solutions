import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SyntheticUseCaseHeroSection from "@/components/SyntheticUseCaseHeroSection";
import SyntheticUseCaseGridSection from "@/components/SyntheticUseCaseGridSection";
import SyntheticUseCasePipelineSection from "@/components/SyntheticUseCasePipelineSection";
import SyntheticUseCaseComparisonSection from "@/components/SyntheticUseCaseComparisonSection";
import SyntheticUseCaseCTASection from "@/components/SyntheticUseCaseCTASection";

const SyntheticUseCase = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <SyntheticUseCaseHeroSection />
        <SyntheticUseCaseGridSection />
        <SyntheticUseCasePipelineSection />
        <SyntheticUseCaseComparisonSection />
        <SyntheticUseCaseCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default SyntheticUseCase;
