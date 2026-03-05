import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AgenticSearchHeroSection from "@/components/AgenticSearchHeroSection";
import AgenticSearchProblemSection from "@/components/AgenticSearchProblemSection";
import AgenticSearchArchitectureSection from "@/components/AgenticSearchArchitectureSection";
import AgenticSearchBenchmarkSection from "@/components/AgenticSearchBenchmarkSection";
import AgenticSearchUseCasesSection from "@/components/AgenticSearchUseCasesSection";
import AgenticSearchCTASection from "@/components/AgenticSearchCTASection";

const AgenticSearch = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <AgenticSearchHeroSection />
        <AgenticSearchProblemSection />
        <AgenticSearchArchitectureSection />
        <AgenticSearchBenchmarkSection />
        <AgenticSearchUseCasesSection />
        <AgenticSearchCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default AgenticSearch;
