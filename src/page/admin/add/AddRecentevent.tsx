import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface IFormInput {
  recenteventimgurl: string; // Changed type to string
  deatails: string;
}

const AddRecentevent = () => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (data: IFormInput) => {
      return axios.post("https://e-service-eosin.vercel.app/recentevent", data);
    },
    onSuccess: (data) => {
      console.log("RecentEvent created successfully:", data);
      alert("New Event added successfully");
      navigate("/admin/recentevent");
    },
    onError: (error) => {
      console.error(
        "Error creating Recentevent:",
        error.message || "Unknown error"
      );
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
      <Input {...register("recenteventimgurl")} />
      <label>Deatails</label>
      <Input {...register("deatail")} />
      <input
        className="btn bg-blue-600 text-white font-semibold px-6 py-3 rounded-md mt-3 w-full"
        type="submit"
      />
    </form>
  );
};

export default AddRecentevent;
