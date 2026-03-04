import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHeroSection from "@/components/AboutHeroSection";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar tone="about" />
      <main>
        <AboutHeroSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
