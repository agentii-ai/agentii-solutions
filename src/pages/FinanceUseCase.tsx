import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinanceHeroSection from "@/components/FinanceHeroSection";
import FinanceWorkflowsSection from "@/components/FinanceWorkflowsSection";
import FinanceDataMappingSection from "@/components/FinanceDataMappingSection";
import FinanceCTASection from "@/components/FinanceCTASection";
import DocumentProcessingFeaturesSection from "@/components/DocumentProcessingFeaturesSection";
import DocumentProcessingTableSection from "@/components/DocumentProcessingTableSection";

const FinanceUseCase = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <FinanceHeroSection />
        <FinanceWorkflowsSection />
        <DocumentProcessingFeaturesSection />
        <DocumentProcessingTableSection />
        <FinanceDataMappingSection />
        <FinanceCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default FinanceUseCase;
