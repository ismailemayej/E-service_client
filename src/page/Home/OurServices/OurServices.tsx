import Heading from "@/components/Heading";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

import Item from "@/page/items/item";
import { useQuery } from "@tanstack/react-query";
const OurServices = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["services"],
    queryFn: () => {
      return fetch("https://e-service-eosin.vercel.app/ourservice").then(
        (res) => res.json()
      );
    },
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="mt-10">
      <Heading
        title="Our Services"
        subTitle="Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra."
      />
      <>
        <div className="mt-12  lg:w-[100%] w-[100%] gap-5 grid sm:grid-cols-1 md:mx-auto lg:grid-cols-3 md:grid-cols-2">
          {data.data.map((item: Titem) => (
            <div className="group relative rounded-lg flex justify-center content-div bg-cover group-hover:bg-red-500">
              <Card className="card shadow-md bg-slate-200 h-[569px] w-[100%] group-hover:opacity-0">
                <div className="mb-4">
                  <img
                    src={item.imgurl}
                    className="h-[253px] w-[100%] px-6 mx-auto lg:w-[362px] lg:p-6 pt-6"
                    alt=""
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-[25px] font-extrabold">
                    {item.name}
                  </CardTitle>

                  <Item>{item.item1}</Item>
                  <Item>{item.item2}</Item>
                  <Item>{item.item3}</Item>
                  <Item>{item.item4}</Item>
                  <Item>{item.item5}</Item>
                </CardHeader>
              </Card>
              <div className="border-4 border-white flex justify-center gap-5 mx-auto absolute transition hover:-translate-y-0.5 hover:duration-500 ease-linear rounded-xl opacity-0 fd-sh group-hover:opacity-100">
                <Card className="h-[569px] lg:w-[380px] w-[100%] bg-slate-200">
                  <CardHeader>
                    <CardTitle className="text-[25px] font-extrabold">
                      {item.name}
                    </CardTitle>
                    <span className="pb-8">{item.paragraph}</span>

                    <Item>{item.item1}</Item>
                    <Item>{item.item2}</Item>
                    <Item>{item.item3}</Item>
                    <Item>{item.item4}</Item>
                    <Item>{item.item5}</Item>
                  </CardHeader>
                  <CardFooter className="flex justify-center absolute bottom-0 w-full">
                    <button className="bg-[#3461FF] p-4 w-full right-0  text-white relative rounded-sm">
                      Check it Out
                    </button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </>
    </div>
  );
};

export default OurServices;
