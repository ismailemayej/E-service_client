import DeleteAndUpdate from "@/components/ui/DeleteButton";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import UpdateButton from "../ui/UpdateButton";
import { useState } from "react";
import { Input } from "../ui/input";

type TId = {
  id: number;
};

const RecentEvent = () => {
  const [updateId, setUpdateId] = useState(null);

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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleUpdate = (e: any) => {
    e.preventDefault();

    const recenteventimgurl = e.target.recenteventimgurl.value;
    const data = { recenteventimgurl };
    axios
      .put(`https://e-service-eosin.vercel.app/recentevent/${updateId}`, data)
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
      .delete(`https://e-service-eosin.vercel.app/recentevent/${id}`)
      .then(() => {
        location.reload();
        alert("eventitem deleted successfully");
      })
      .catch((error) => {
        console.error("Error deleting resource:", error);
      });
  };

  const style = "bg-green-500 p-[2px]";
  return (
    <>
      <div className="mt-[225px] grid items-center lg:grid-cols-2 grid-cols-1 gap-40 items-cente">
        <div className="grid grid-cols-3 w-full gap-4">
          {data.data.map((item: any, i) => (
            <div>
              <div>
                <img
                  key={i}
                  className={`${style} ${
                    i === 2 || i === 3
                      ? "w-[190px] h-[190px] rounded-[100%]"
                      : "w-[190px] h-[190px] rounded-[20%]"
                  }`}
                  src={item.recenteventimgurl}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
        <div className="text-left">
          <h1 className="text-[64px] font-bold">Recent Events</h1>
          <p className="text-[18px]">
            Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
            ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
          </p>
          <button className="mt-[64px] w-[174px] h-[52px] text-white bg-[#3461FF]">
            Learn more
          </button>
        </div>
      </div>
    </>
  );
};

export default RecentEvent;
