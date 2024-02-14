import BlogAndNews from "./BlogAndNews/BlogAndNews";
import EmailSubcribtion from "./EmailSubcribtion/EmailSubcribtion";
import HeroSection from "./HeroSection/HeroSection";
import OurClient from "./OurClient/OurClient";
import OurEvent from "./OurEvent/OurEvent";
import OurServices from "./OurServices/OurServices";
import Gallary from "./PhotoGallery/Gallary";
import PriceingExplore from "./PricigPacakege/PriceingExplore";
import RecentEvent from "./RecentEvent/RecentEvent";
import ClientSays from "./Reviews/ClientSays";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <OurClient />
      <OurServices />
      <OurEvent />
      <PriceingExplore />
      <Gallary />
      <ClientSays />
      <RecentEvent />
      <BlogAndNews />
      <EmailSubcribtion />
    </div>
  );
};

export default Home;
