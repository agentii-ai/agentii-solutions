import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InsuranceHeroSection from "@/components/InsuranceHeroSection";
import InsuranceWorkflowsSection from "@/components/InsuranceWorkflowsSection";
import InsuranceDataMappingSection from "@/components/InsuranceDataMappingSection";
import InsuranceCTASection from "@/components/InsuranceCTASection";
import DocumentProcessingFeaturesSection from "@/components/DocumentProcessingFeaturesSection";
import DocumentProcessingTableSection from "@/components/DocumentProcessingTableSection";

const InsuranceUseCase = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <InsuranceHeroSection />
        <InsuranceWorkflowsSection />
        <DocumentProcessingFeaturesSection />
        <DocumentProcessingTableSection />
        <InsuranceDataMappingSection />
        <InsuranceCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default InsuranceUseCase;
