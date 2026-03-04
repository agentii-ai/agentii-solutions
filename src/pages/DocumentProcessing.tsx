import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentProcessingHeroSection from "@/components/DocumentProcessingHeroSection";
import DocumentProcessingFeaturesSection from "@/components/DocumentProcessingFeaturesSection";
import DocumentProcessingIngestionSection from "@/components/DocumentProcessingIngestionSection";
import DocumentProcessingClassificationSection from "@/components/DocumentProcessingClassificationSection";
import DocumentProcessingHumanReviewSection from "@/components/DocumentProcessingHumanReviewSection";
import DocumentProcessingTableSection from "@/components/DocumentProcessingTableSection";
import DocumentProcessingCTASection from "@/components/DocumentProcessingCTASection";

const DocumentProcessing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <DocumentProcessingHeroSection />
        <DocumentProcessingFeaturesSection />
        <DocumentProcessingIngestionSection />
        <DocumentProcessingClassificationSection />
        <DocumentProcessingTableSection />
        <DocumentProcessingHumanReviewSection />
        <DocumentProcessingCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default DocumentProcessing;
