import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoHeroSection from "@/components/VideoHeroSection";

const VideoUseCase = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <VideoHeroSection />
      </main>
      <Footer />
    </div>
  );
};

export default VideoUseCase;
