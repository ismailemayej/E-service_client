import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import DeleteAndUpdate from "@/page/admin/DeleteAndUpdate";
import Item from "@/page/items/item";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type TId = {
  id: number;
};
const Services = () => {
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
  const handleRemove = (id: TId) => {
    axios
      .delete(`https://e-service-eosin.vercel.app/ourservice/${id}`)
      .then(() => {
        alert("Service deleted successfully");
      })
      .catch((error) => {
        console.error("Error deleting resource:", error);
      });
  };

  return (
    <>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 w-full mx-auto">
        {data.data.map((item: Titem) => (
          <Card className="shadow-md bg-slate-200 w-auto h-[569px]">
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
            <CardFooter>
              <DeleteAndUpdate onClick={() => handleRemove(item._id)} />
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Services;
