import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoHeroSection from "@/components/VideoHeroSection";
import VideoUseCasesSection from "@/components/VideoUseCasesSection";
import VideoTrainingPipelineSection from "@/components/VideoTrainingPipelineSection";
import VideoModelCompatibilitySection from "@/components/VideoModelCompatibilitySection";
import VideoUseCaseCTASection from "@/components/VideoUseCaseCTASection";

const VideoUseCase = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <VideoHeroSection />
        <VideoUseCasesSection />
        <VideoTrainingPipelineSection />
        <VideoModelCompatibilitySection />
        <VideoUseCaseCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default VideoUseCase;
