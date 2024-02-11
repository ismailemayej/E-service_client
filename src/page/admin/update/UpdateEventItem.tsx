import { Input } from "@/components/ui/input";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

interface IFormInput {
  eventimgurl: string; // Changed type to string
  EventName: string;
}

const UpdateEventItem = ({ id }) => {
  console.log(id);

  const navigate = useNavigate();

  const handleUpdate = (data) => {
    axios
      .put(`https://e-service-eosin.vercel.app/eventitem/${id}`, data)
      .then(() => {
        alert("eventitem update successfully");
      })
      .catch((error) => {
        console.error("Error deleting resource:", error);
      });
  };

  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {};

  return (
    <form
      className="bg-slate-100 border p-3 rounded mx-auto lg:w-[50%] "
      onSubmit={handleSubmit(onSubmit)}
    >
      <label>Image URL</label>
      <Input {...register("eventimgurl")} />
      <label>Event Name</label>
      <Input {...register("EventName")} />
      <input
        className="btn bg-blue-600 text-white font-semibold px-6 py-3 rounded-md mt-3 w-full"
        type="submit"
        value="Update"
      />
    </form>
  );
};

export default UpdateEventItem;
