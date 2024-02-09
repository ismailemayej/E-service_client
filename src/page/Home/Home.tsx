import HeroSection from "./HeroSection/HeroSection";
import OurClient from "./OurClient/OurClient";
import OurEvent from "./OurEvent/OurEvent";
import OurServices from "./OurServices/OurServices";
import Gallary from "./PhotoGallery/Gallary";
import PriceingExplore from "./PricigPacakege/PriceingExplore";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <OurClient />
      <OurServices />
      <OurEvent />
      <PriceingExplore />
      <Gallary />
    </div>
  );
};

export default Home;
