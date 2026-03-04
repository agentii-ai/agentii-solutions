import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentProcessingHeroSection from "@/components/DocumentProcessingHeroSection";
import DocumentProcessingFeaturesSection from "@/components/DocumentProcessingFeaturesSection";

const DocumentProcessing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <DocumentProcessingHeroSection />
        <DocumentProcessingFeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default DocumentProcessing;
