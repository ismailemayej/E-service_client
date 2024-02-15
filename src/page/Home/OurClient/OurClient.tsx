import Heading from "@/components/Heading";
import useScrollHook from "@/components/ScrollHook";
import { motion } from "framer-motion";
import {
  Adobe,
  Amazon,
  Asana,
  Evernote,
  Google,
  Microsoft,
  Paypal,
  Uber,
} from "@/page/ClientLogos/Logos";

const OurClient = () => {
  return (
    <div className="place-content-center mx-auto items-center mt-8">
      <Heading subTitle="" title="Our Valuable client" />
      <div className="grid">
        <div className="lg:gap-56 gap-20 mb-10 grid grid-cols-4">
          <Google />
          <Uber />
          <Microsoft />
          <Paypal />
        </div>
        <div className="lg:gap-56 gap-20 grid grid-cols-4">
          <Adobe />
          <Evernote />
          <Amazon />
          <Asana />
        </div>
      </div>
    </div>
  );
};

export default OurClient;
