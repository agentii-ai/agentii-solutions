import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentProcessingHeroSection from "@/components/DocumentProcessingHeroSection";
import DocumentProcessingFeaturesSection from "@/components/DocumentProcessingFeaturesSection";
import DocumentProcessingIngestionSection from "@/components/DocumentProcessingIngestionSection";
import DocumentProcessingClassificationSection from "@/components/DocumentProcessingClassificationSection";

const DocumentProcessing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <DocumentProcessingHeroSection />
        <DocumentProcessingFeaturesSection />
        <DocumentProcessingIngestionSection />
        <DocumentProcessingClassificationSection />
      </main>
      <Footer />
    </div>
  );
};

export default DocumentProcessing;
