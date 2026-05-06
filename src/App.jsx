import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import JourneySection from "./components/JourneySection";
import QuoteSection from "./components/QuoteSection";
import GallerySection from "./components/GallerySection";
import FooterQuote from "./components/FooterQuote";

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <HeroSection />
      <JourneySection />
      <QuoteSection />
      <GallerySection />
      <FooterQuote />
    </div>
  );
}

export default App;