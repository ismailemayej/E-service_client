import PriceingList from "@/components/AllService/PricingList";
import Heading from "@/components/Heading";
import useScrollHook from "@/components/Hook/ScrollHook";
import { motion } from "framer-motion";

const PriceingExplore = () => {
  const { style, componentRef } = useScrollHook();
  return (
    <motion.div style={style} ref={componentRef} className="w-full">
      <Heading
        title="Explore our pricing plans"
        subTitle="Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem."
      />
      <PriceingList />
    </motion.div>
  );
};

export default PriceingExplore;
