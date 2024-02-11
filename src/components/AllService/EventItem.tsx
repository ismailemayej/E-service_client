import DeleteAndUpdate from "@/components/ui/DeleteButton";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import UpdateButton from "../ui/UpdateButton";
import { useState } from "react";
import { Input } from "../ui/input";
type TId = {
  id: number;
};

const EventItem = () => {
  const [updateId, setUpdateId] = useState(null);

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

  const handleUpdate = (e) => {
    e.preventDefault();
    const EventName = e.target.EventName.value;
    const eventimgurl = e.target.eventimgurl.value;
    const data = { EventName, eventimgurl };
    axios
      .put(`https://e-service-eosin.vercel.app/eventitem/${updateId}`, data)
      .then(() => {
        location.reload();
        console.log(updateId, "updated id....");
        alert("eventitem updated successfully");
      })
      .catch((error) => {
        console.error("Error deleting resource:", error);
      });
  };

  const handleRemove = (id: TId) => {
    axios
      .delete(`https://e-service-eosin.vercel.app/eventitem/${id}`)
      .then(() => {
        location.reload();
        alert("eventitem deleted successfully");
      })
      .catch((error) => {
        console.error("Error deleting resource:", error);
      });
  };

  const style = "bg-[#D9D9D9] border-2 rounded-lg p-2";
  return (
    <>
      <div className="grid lg:grid-cols-6 grid-cols-1 w-full lg:auto-rows-[300px] gap-4 my-8">
        {data.data.map((item, i) =>
          item._id === updateId ? (
            <form
              className="bg-slate-100 border p-3 rounded mx-auto lg:w-full "
              onSubmit={handleUpdate}
            >
              <label>Image URL</label>
              <Input
                className="w-full"
                type="text"
                name="eventimgurl"
                defaultValue={item.eventimgurl}
              />
              <label>Event Name</label>
              <Input
                type="text"
                name="EventName"
                defaultValue={item.EventName}
              />
              <input
                className="btn bg-blue-600 text-white font-semibold px-6 py-3 rounded-md mt-3 w-full"
                type="submit"
                value="Update"
              />
            </form>
          ) : (
            <div
              key={i}
              className={`${style} ${
                i === 0 || i === 1 || i === 5 || i === 2 ? "lg:col-span-2" : ""
              } ${i === 2 ? "lg:row-span-2" : ""}`}
            >
              <div className="w-full h-[85%] bg-white">
                <img
                  className="w-full h-auto rounded-lg"
                  src={item.eventimgurl}
                  alt=""
                />
              </div>
              <div className="font-semibold text-xl flex justify-between my-1 items-center w-full h-[15%]">
                <h2>{item.EventName}</h2>
                <div className="flex items-center justify-center">
                  <DeleteAndUpdate onClick={() => handleRemove(item._id)} />

                  <UpdateButton onClick={() => setUpdateId(item._id)} />
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default EventItem;
