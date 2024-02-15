import useScrollHook from "@/components/ScrollHook";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";

const RecentEvent = () => {
  const { style, componentRef } = useScrollHook();
  const { isLoading, data } = useQuery({
    queryKey: ["recentevent"],
    queryFn: () => {
      return fetch("https://e-service-eosin.vercel.app/recentevent").then(
        (res) => res.json()
      );
    },
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }
  const styles = "bg-green-500 p-[2px]";
  return (
    <>
      <div className="relative gap-10  flex flex-col-reverse lg:px-4 py-16 mx-auto lg:block lg:flex-col lg:py-32 xl:py-48 md:px-8 sm:max-w-xl md:max-w-full">
        <div className="z-0 flex justify-center h-full mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
          <div className="grid grid-cols-3 flex-wrap-reverse lg:mr-24 w-full gap-4">
            {data.data.map((item: any, i) => (
              <motion.div style={style} ref={componentRef}>
                <div>
                  <img
                    key={i}
                    className={`${styles} ${
                      i === 2 || i === 3
                        ? "w-[190px] h-[190px] rounded-[100%]"
                        : "w-[190px] h-[190px] rounded-[20%]"
                    }`}
                    src={item.recenteventimgurl}
                    alt=""
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="relative flex justify-end max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl">
          <div className="text-left">
            <h1 className="text-[64px] font-bold">Recent Events</h1>
            <p className="text-[18px]">
              Ut posuere felis arcu tellus tempus in in ultricies. <br />{" "}
              Gravida id nibh ornare viverra. Ultrices faucibus neque velit{" "}
              <br /> risus ac id lorem.
            </p>
            <button className="mt-[64px] w-[174px] h-[52px] text-white bg-[#3461FF]">
              Learn more
            </button>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default RecentEvent;
