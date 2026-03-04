import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentProcessingHeroSection from "@/components/DocumentProcessingHeroSection";
import DocumentProcessingFeaturesSection from "@/components/DocumentProcessingFeaturesSection";
import DocumentProcessingIngestionSection from "@/components/DocumentProcessingIngestionSection";

const DocumentProcessing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <DocumentProcessingHeroSection />
        <DocumentProcessingFeaturesSection />
        <DocumentProcessingIngestionSection />
      </main>
      <Footer />
    </div>
  );
};

export default DocumentProcessing;
