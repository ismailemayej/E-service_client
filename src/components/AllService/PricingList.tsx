import { LuArrowRight, LuBox, LuLayers } from "react-icons/lu";
import PricingLisfIcon from "../ui/PricingLisfIcon";
import { PiAirplaneTilt } from "react-icons/pi";

const PriceingList = () => (
  <div className="mt-12  lg:w-[100%] gap-5 sm:mt-16 grid sm:grid-cols-1 md:mx-auto lg:grid-cols-3 md:grid-cols-2 mx-0">
    <div className="border border-t-4 border-b-0 border-l-0 border-r-0 bg-white border-[#F249C8] rounded-2xl shadow-sm divide-y divide-slate-200">
      <div className="p-6">
        <div className="flex justify-between mb-8">
          <h4 className="p-5 bg-[#FEEDFA] text-[#F249C8] h-20 w-20 text-[40px]">
            <LuBox />
          </h4>
          <h4 className="text-[#F249C8]  font-bold text-[48px]">$21</h4>
        </div>
        <h2 className="text-2xl font-semibold text-slate-900">Starter</h2>
        <p className="mt-2 text-base text-slate-700 leading-tight">
          Upgrade your social portfolio with a stunning profile & enhanced
          shots.
        </p>

        <button className="btn border-2 font-bold text-4 flex items-center text-blue-500 rounded-sm px-6 mt-8 py-1 border-blue-700">
          <span> Get this package</span>{" "}
          <LuArrowRight className="ml-3 text-xl" />
        </button>
      </div>
      <div className="pt-6 pb-8 px-6">
        <ul role="list" className="mt-4 space-y-3">
          <PricingLisfIcon className="">User Dashboard</PricingLisfIcon>
          <PricingLisfIcon className="">Post 3 Ads per week</PricingLisfIcon>
          <PricingLisfIcon className="">
            Multiple images & videos
          </PricingLisfIcon>
          <PricingLisfIcon className="line-through text-[#42526b3b]">
            Basic customer support
          </PricingLisfIcon>
          <PricingLisfIcon className="line-through text-[#42526b3b]">
            Featured ads
          </PricingLisfIcon>
          <PricingLisfIcon className="line-through text-[#42526b3b]">
            Special ads badge
          </PricingLisfIcon>
          <PricingLisfIcon className="line-through text-[#42526b3b]">
            Call to Action in Every Ads
          </PricingLisfIcon>
          <PricingLisfIcon className="line-through text-[#42526b3b]">
            Max 12 team members
          </PricingLisfIcon>
        </ul>
      </div>
    </div>
    {/* ------------------------------------------------ */}
    <div className="border relative border-t-4 border-b-0 border-l-0 border-r-0 bg-white border-[#0B63E5] rounded-2xl shadow-sm divide-y divide-slate-200">
      <div className="absolute bg-blue-500 left-[40%] text-white p-1 rounded-t-lg top-[-32px]">
        Recomended
      </div>
      <div className="p-6">
        <div className="flex justify-between mb-8">
          <h4 className="p-5 bg-[#FEEDFA] text-[#0B63E5] h-20 w-20 text-[40px]">
            <LuLayers />
          </h4>
          <h4 className="text-[#0B63E5] font-bold text-[48px]">$49</h4>
        </div>
        <h2 className="text-2xl font-semibold text-slate-900">Premium</h2>
        <p className="mt-2 text-base text-slate-700 leading-tight">
          Quisque auctor erat velit, quis ultrices nisi vestibulum at. Donec
          vitae purus lorem.
        </p>

        <button className="btn border-2 font-bold text-4 flex bg-[#0B63E5] items-center text-white rounded-sm px-6 mt-8 py-1 border-blue-700">
          <span> Get this package</span>{" "}
          <LuArrowRight className="ml-3 text-xl" />
        </button>
      </div>
      <div className="pt-6 pb-8 px-6">
        <ul role="list" className="mt-4 space-y-3">
          <PricingLisfIcon className="">User Dashboard</PricingLisfIcon>
          <PricingLisfIcon className="">Post 3 Ads per week</PricingLisfIcon>
          <PricingLisfIcon className="">
            Multiple images & videos
          </PricingLisfIcon>
          <PricingLisfIcon className="">Basic customer support</PricingLisfIcon>
          <PricingLisfIcon className="">Featured ads</PricingLisfIcon>
          <PricingLisfIcon className="">Special ads badge</PricingLisfIcon>
          <PricingLisfIcon className="line-through text-[#42526b3b]">
            Call to Action in Every Ads
          </PricingLisfIcon>
          <PricingLisfIcon className="line-through text-[#42526b3b]">
            Max 12 team members
          </PricingLisfIcon>
        </ul>
      </div>
    </div>
    {/* ------------------------------------------------- */}
    <div className="border border-t-4 border-b-0 border-l-0 border-r-0 bg-white border-[#E54545] rounded-2xl shadow-sm divide-y divide-slate-200">
      <div className="p-6">
        <div className="flex justify-between mb-8">
          <h4 className="p-5 bg-[#FEEDFA] text-[#E54545] h-20 w-20 text-[40px]">
            <PiAirplaneTilt />
          </h4>
          <h4 className="text-[#E54545] font-bold text-[48px]">$124</h4>
        </div>
        <h2 className="text-2xl font-semibold text-slate-900">Business</h2>
        <p className="mt-2 text-base text-slate-700 leading-tight">
          In ornare ligula lorem, sit amet faucibus velit vehicula eget.
        </p>

        <button className="btn border-2 font-bold text-4 flex items-center text-blue-500 rounded-sm px-6 mt-8 py-1 border-blue-700">
          <span> Get this package</span>{" "}
          <LuArrowRight className="ml-3 text-xl" />
        </button>
      </div>
      <div className="pt-6 pb-8 px-6">
        <ul role="list" className="mt-4 space-y-3">
          <PricingLisfIcon>User Dashboard</PricingLisfIcon>
          <PricingLisfIcon>Post 3 Ads per week</PricingLisfIcon>
          <PricingLisfIcon>Multiple images & videos</PricingLisfIcon>
          <PricingLisfIcon>Basic customer support</PricingLisfIcon>
          <PricingLisfIcon>Featured ads</PricingLisfIcon>
          <PricingLisfIcon>Special ads badge</PricingLisfIcon>
          <PricingLisfIcon>Call to Action in Every Ads</PricingLisfIcon>
          <PricingLisfIcon>Max 12 team members</PricingLisfIcon>
        </ul>
      </div>
    </div>
  </div>
);

export default PriceingList;
