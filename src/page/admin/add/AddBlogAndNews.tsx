import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface IFormInput {
  blogimgurl: string; // Changed type to string
  headline: string;
  catgory: string;
  news: string;
}

const AddBlogAndNews = () => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (data: IFormInput) => {
      return axios.post("https://e-service-eosin.vercel.app/blogandnews", data);
    },
    onSuccess: (data) => {
      console.log("Event created successfully:", data);
      alert("News added successfully");
      navigate("/admin/blogandnews");
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
      <label>Head Line</label>
      <Input {...register("headline")} />
      <label>Thumbarial</label>
      <Input {...register("blogimgurl")} />
      <label>Category</label>
      <Input {...register("catgory")} />
      <label>news</label>
      <textarea
        className="h-44 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        {...register("news")}
      />
      <input
        className="btn bg-blue-600 text-white font-semibold px-6 py-3 rounded-md mt-3 w-full"
        type="submit"
      />
    </form>
  );
};

export default AddBlogAndNews;
