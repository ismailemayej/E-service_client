import { motion } from "framer-motion";
import mobile from "../../../assets/mobile.jpg";
const HeroSection = () => {
  return (
    <div className="grid lg:grid-cols-12 grid-cols-1 items-center">
      <div className="col-span-8">
        <motion.p
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1.5 }}
          className="font-bold lg:text-6xl text-5xl mb-0 leading-[58px]"
        >
          BRAND NEW <br />
          <span>EVENT PACKEGE </span>
        </motion.p>
        <motion.h2
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1.5 }}
          className="font-bold text-[#FE8900] text-5xl"
        >
          FOR WINTER
        </motion.h2>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1.5 }}
          className="my-8 text-xl"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
          imperdiet sed id elementum. Quam vel aliquam sit vulputate. Faucibus
          nec gravida ipsum pulvinar vel non.
        </motion.p>
        <button className="lg:px-[78px] lg:py-4 py-3 px-16 bg-black text-white">
          Exploer
        </button>

        <div className="my-20 grid w-full lg:grid-cols-3 gap-3">
          <div className="transition hover:bg-slate-200 hover:scale-95 hover:delay-75 border-4 rounded-3xl px-4 py-6 border-white lg:w-56 lg:h-48 ">
            <div className="flex">
              <span className="bg-blue-500 rounded-full h-10 w-10"></span>
            </div>
            <div className="text-[16px] py-4">
              Lorem ipsum dolor sit amet, consectetu adipiscing elit. Cursus
              imperdiet sed id.
            </div>
          </div>
          <div className="transition hover:bg-slate-200 hover:scale-95 hover:delay-75 border-4 rounded-3xl px-4 py-6 border-white lg:w-56 lg:h-48 ">
            <div className="flex">
              <span className="bg-blue-200 rounded-full h-10 w-10"></span>
            </div>
            <div className="text-[16px] py-4">
              Lorem ipsum dolor sit amet, consectetu adipiscing elit. Cursus
              imperdiet sed id.
            </div>
          </div>
          <div className="transition hover:bg-slate-300 hover:scale-95 hover:delay-75 border-4 rounded-3xl px-4 py-6 border-white lg:w-56 lg:h-48">
            <div className="flex">
              <span className="bg-blue-300 rounded-full h-10 w-10"></span>
            </div>
            <div className="text-[16px] py-4">
              Lorem ipsum dolor sit amet, consectetu adipiscing elit. Cursus
              imperdiet sed id.
            </div>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ y: -500, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1.5 }}
        className="col-span-4 w-full"
      >
        <img src={mobile} alt="mobile" className="mx-auto w-full rounded-md" />
      </motion.div>
    </div>
  );
};
export default HeroSection;
