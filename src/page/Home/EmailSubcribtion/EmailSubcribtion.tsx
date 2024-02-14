import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface IFormInput {
  EmailSubcribtion: string;
}

const EmailSubcribtion = () => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (data: IFormInput) => {
      return axios.post(
        "https://e-service-eosin.vercel.app/emailsubcribtion",
        data
      );
    },

    onSuccess: (data) => {
      console.log("RecentEvent created successfully:", data);
      alert(`This email ${data} is Subcribe Successfully`);

      navigate("/");
    },
    onError: (error) => {
      alart("unsuccess");
      console.error(error);
    },
  });

  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    mutation.mutate(data);
  };

  return (
    <form
      className="bg-slate-300 border p-10 rounded mx-auto mt-10 lg:w-[80%] "
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="mb-3 lg:text-3xl text-2xl font-semibold">
        Email Subcribtion
      </h1>
      <div className="flex items-center gap-4">
        <Input
          type="email"
          className="h-14"
          {...register("EmailSubcribtion")}
          placeholder="Type your Email"
        />
        <input
          className="btn bg-blue-600 text-white font-semibold px-6 py-4 rounded-lg"
          type="submit"
        />
      </div>
    </form>
  );
};

export default EmailSubcribtion;
