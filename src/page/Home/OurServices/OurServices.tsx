import Heading from "@/components/Heading";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

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
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 w-full mx-auto">
        {data.data.map((item: Titem) => (
          <Card className="shadow-md bg-slate-200 w-[412px] h-[569px] mx-auto">
            <div className="mb-4 ">
              <img
                src={item.imgurl}
                className="h-[253px] p-6 w-full rounded-sm"
                alt=""
              />
            </div>
            <CardHeader>
              <CardTitle className="text-[32px] font-extrabold">
                {item.name}
              </CardTitle>
              <Item>{item.item1}</Item>
              <Item>{item.item2}</Item>
              <Item>{item.item3}</Item>
              <Item>{item.item4}</Item>
              <Item>{item.item5}</Item>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
