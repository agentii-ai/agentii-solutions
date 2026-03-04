import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoAudioHeroSection from "@/components/VideoAudioHeroSection";

const VideoAudioSolution = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <VideoAudioHeroSection />
      </main>
      <Footer />
    </div>
  );
};

export default VideoAudioSolution;
