import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoAudioHeroSection from "@/components/VideoAudioHeroSection";
import VideoAudioCapabilitiesSection from "@/components/VideoAudioCapabilitiesSection";
import VideoAudioAnnotationShowcaseSection from "@/components/VideoAudioAnnotationShowcaseSection";

const VideoAudioSolution = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <VideoAudioHeroSection />
        <VideoAudioCapabilitiesSection />
        <VideoAudioAnnotationShowcaseSection />
      </main>
      <Footer />
    </div>
  );
};

export default VideoAudioSolution;

