import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import DeleteAndUpdate from "@/components/ui/DeleteButton";
import Item from "@/page/items/item";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import UpdateButton from "../ui/UpdateButton";
import { useState } from "react";
import { Input } from "../ui/input";

type TId = {
  id: number;
};
const Services = () => {
  const [updateId, setUpdateId] = useState(null);

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
  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const paragraph = e.target.paragraph.value;
    const imgurl = e.target.imgurl.value;
    const item1 = e.target.item1.value;
    const item2 = e.target.item2.value;
    const item3 = e.target.item3.value;
    const item4 = e.target.item4.value;
    const item5 = e.target.item5.value;
    const data = { name, imgurl, paragraph, item1, item2, item3, item4, item5 };
    axios
      .put(`https://e-service-eosin.vercel.app/ourservice/${updateId}`, data)
      .then(() => {
        location.reload();

        console.log(updateId, "updated id....");
        alert("Services updated successfully");
      })
      .catch((error) => {
        console.error("Error deleting resource:", error);
      });
  };

  const handleRemove = (id: TId) => {
    axios
      .delete(`https://e-service-eosin.vercel.app/ourservice/${id}`)
      .then(() => {
        location.reload();
        alert("Service deleted successfully");
      })
      .catch((error) => {
        console.error("Error deleting resource:", error);
      });
  };

  return (
    <>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 w-full mx-auto">
        {data.data.map((item: Titem) =>
          item._id === updateId ? (
            <form
              className="bg-slate-100 border p-3 rounded mx-auto lg:auto-rows-[300px]"
              onSubmit={handleUpdate}
            >
              <label>Image URL</label>
              <Input
                className="w-full"
                type="text"
                name="imgurl"
                defaultValue={item.imgurl}
              />
              <label>Event Name</label>
              <Input type="text" name="name" defaultValue={item.name} />
              <label>Pragraph</label>
              <Input
                type="text"
                name="paragraph"
                defaultValue={item.paragraph}
              />
              <label>Item-1</label>
              <Input type="text" name="item1" defaultValue={item.item1} />
              <label>Item-2</label>
              <Input type="text" name="item2" defaultValue={item.item2} />
              <label>Item-3</label>
              <Input type="text" name="item3" defaultValue={item.item3} />
              <label>Item-4</label>
              <Input type="text" name="item4" defaultValue={item.item4} />
              <label>Item-5</label>
              <Input type="text" name="item5" defaultValue={item.item5} />
              <input
                className="btn bg-blue-600 text-white font-semibold px-6 py-3 rounded-md mt-3 w-full"
                type="submit"
                value="Update"
              />
            </form>
          ) : (
            <Card className="card shadow-md bg-slate-200 h-[569px] group-hover:opacity-0">
              <div className="mb-4">
                <img
                  src={item.imgurl}
                  className="h-[253px] p-6 w-full"
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
              <CardFooter>
                <div className="flex items-center justify-center">
                  <DeleteAndUpdate onClick={() => handleRemove(item._id)} />
                  <UpdateButton onClick={() => setUpdateId(item._id)} />
                </div>
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </>
  );
};

export default Services;
