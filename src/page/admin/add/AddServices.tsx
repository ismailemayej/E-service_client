import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface TFormInput {
  imgurl: URL;
  name: string;
  item1: string;
  item2: string;
  item3: string;
  item4: string;
  item5: string;
  paragraph: string;
}
const AddServices = () => {
  const navigate = useNavigate();
  const mutation = useMutation<void, Error, TFormInput>({
    mutationFn: (data) => {
      return axios.post("https://e-service-eosin.vercel.app/ourservice", data);
    },
    onSuccess: (data) => {
      console.log("service created successfully:", data);
      alert("new services added successfully");
      navigate("/admin/ourservices");
      // You can perform additional actions on success if needed
    },
    onError: (error) => {
      console.error("Error creating services:", error);
    },
  });
  const { register, handleSubmit } = useForm<TFormInput>();
  const onSubmit: SubmitHandler<TFormInput> = (data: TFormInput) => {
    mutation.mutate(data);
  };

  return (
    <form
      className="bg-slate-100 border p-3 rounded mx-auto lg:w-[50%] "
      onSubmit={handleSubmit(onSubmit)}
    >
      <label>image url</label>
      <Input {...register("imgurl")} />
      <label>Service Name</label>
      <Input {...register("name")} />
      <label>Paragraph</label>
      <Input {...register("paragraph")} />
      <label>item-1</label>
      <Input {...register("item1")} />
      <label>item-2</label>
      <Input {...register("item2")} />
      <label>item-3</label>
      <Input {...register("item3")} />
      <label>item-4</label>
      <Input {...register("item4")} />
      <label>item-5</label>
      <Input {...register("item5")} />
      <input
        className="btn bg-blue-600 text-white font-semibold px-6 py-3 rounded-md mt-3 w-full"
        type="submit"
      />
    </form>
  );
};

export default AddServices;
