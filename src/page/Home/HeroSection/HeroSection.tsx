import mobile from "../../../assets/mobile.jpg";

const HeroSection = () => {
  return (
    <div className="grid lg:grid-cols-12 grid-cols-1 items-center">
      <div className="col-span-8">
        <p className="font-bold lg:text-6xl text-5xl mb-0 leading-[58px]">
          BRAND NEW <br />
          <span>EVENT PACKEGE </span>
        </p>
        <span className="font-bold text-[#FE8900] text-5xl">FOR WINTER</span>
        <p className="my-8 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
          imperdiet sed id elementum. Quam vel aliquam sit vulputate. Faucibus
          nec gravida ipsum pulvinar vel non.
        </p>
        <button className="lg:px-[78px] lg:py-4 py-3 px-16 bg-black text-white">
          Exploer
        </button>

        <div className="my-20 grid w-full lg:grid-cols-3 gap-3">
          <div className="border-4 rounded-3xl px-4 py-6 border-white lg:w-56 lg:h-48 ">
            <div className="flex">
              <span className="bg-blue-500 rounded-full h-10 w-10"></span>
            </div>
            <div className="text-[16px] py-4">
              Lorem ipsum dolor sit amet, consectetu adipiscing elit. Cursus
              imperdiet sed id.
            </div>
          </div>
          <div className="border-4 rounded-3xl px-4 py-6 border-white lg:w-56 lg:h-48 ">
            <div className="flex">
              <span className="bg-blue-200 rounded-full h-10 w-10"></span>
            </div>
            <div className="text-[16px] py-4">
              Lorem ipsum dolor sit amet, consectetu adipiscing elit. Cursus
              imperdiet sed id.
            </div>
          </div>
          <div className="border-4 rounded-3xl px-4 py-6 border-white lg:w-56 lg:h-48">
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
      <div className="col-span-4 w-full">
        <img src={mobile} alt="mobile" className="mx-auto w-full rounded-md" />
      </div>
    </div>
  );
};

export default HeroSection;
