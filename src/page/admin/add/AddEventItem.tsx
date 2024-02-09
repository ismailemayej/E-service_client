import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface IFormInput {
  eventimgurl: string; // Changed type to string
  EventName: string;
}

const AddEventItem = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (data: IFormInput) => {
      return axios.post("http://localhost:5000/eventitem", data);
    },
    onSuccess: (data) => {
      console.log("Event created successfully:", data);
      alert("New Event added successfully");
      navigate("/admin/eventitem");
    },
    onError: (error) => {
      console.error("Error creating event:", error.message || "Unknown error");
    },
  });

  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    mutation.mutate(data);
  };

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
      />
    </form>
  );
};

export default AddEventItem;
