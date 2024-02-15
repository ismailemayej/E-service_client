import Heading from "@/components/Heading";
import useScrollHook from "@/components/ScrollHook";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";

const OurEvent = () => {
  const { style, componentRef } = useScrollHook();
  const { isLoading, data } = useQuery({
    queryKey: ["eventitem"],
    queryFn: () => {
      return fetch("https://e-service-eosin.vercel.app/eventitem").then((res) =>
        res.json()
      );
    },
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }
  const styles = "bg-[#D9D9D9] border-2 rounded-lg lg:p-6 p-2";
  return (
    <motion.div style={style} ref={componentRef}>
      <Heading
        title="Event Items"
        subTitle="Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem."
      />
      <>
        <div className="grid lg:grid-cols-6 md:grid-cols-2 grid-cols-1 w-full lg:auto-rows-[300px] gap-4 lg:my-8">
          {data?.data?.map((item, i) => (
            <div
              key={i}
              className={`${styles} ${
                i === 0 || i === 1 || i === 5 || i === 2 ? "lg:col-span-2" : ""
              } ${i === 2 ? "lg:row-span-2" : ""}`}
            >
              <div className="w-full h-[85%]">
                <img
                  className=" w-[100%] h-[100%] object-cover rounded-lg bg"
                  src={item.eventimgurl}
                  alt={item.EventName}
                />
              </div>
              <div className="font-medium lg:text-[20px] flex justify-between mt-2 items-center w-full h-[15%] space-x-1">
                <h2>{item.EventName}</h2>
              </div>
            </div>
          ))}
        </div>
      </>
    </motion.div>
  );
};

export default OurEvent;
