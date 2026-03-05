import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoAudioHeroSection from "@/components/VideoAudioHeroSection";
import VideoAudioCapabilitiesSection from "@/components/VideoAudioCapabilitiesSection";
import VideoAudioSceneUnderstandingSection from "@/components/VideoAudioSceneUnderstandingSection";
import VideoAudioTrackingSegmentationSection from "@/components/VideoAudioTrackingSegmentationSection";
import VideoAudioAnnotationShowcaseSection from "@/components/VideoAudioAnnotationShowcaseSection";
import VideoAudioCTASection from "@/components/VideoAudioCTASection";

const VideoAudioSolution = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <VideoAudioHeroSection />
        <VideoAudioCapabilitiesSection />
        <VideoAudioSceneUnderstandingSection />
        <VideoAudioTrackingSegmentationSection />
        <VideoAudioAnnotationShowcaseSection />
        <VideoAudioCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default VideoAudioSolution;

