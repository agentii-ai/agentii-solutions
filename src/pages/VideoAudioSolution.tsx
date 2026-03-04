import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoAudioHeroSection from "@/components/VideoAudioHeroSection";
import VideoAudioCapabilitiesSection from "@/components/VideoAudioCapabilitiesSection";

const VideoAudioSolution = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <VideoAudioHeroSection />
        <VideoAudioCapabilitiesSection />
      </main>
      <Footer />
    </div>
  );
};

export default VideoAudioSolution;

