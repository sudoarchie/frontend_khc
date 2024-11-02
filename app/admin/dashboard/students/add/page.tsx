"use client";
import { PrimaryButton } from "@/app/components/PrimaryButton";
import { TextField } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: number;
  curriculum: string;
  grade: string;
  subject: string;
  country: string;
};
export default function AddStudent() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <div className="flex flex-col h-full  justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full sm:max-w-[900px] mt-16">
          <TextField
            label="First Name"
            placeholder=""
            variant="outlined"
            type="text"
            className="w-[95%] m-auto sm:w-[400px]"
            {...register("firstName", { required: true })}
          />
          <TextField
            label="Last Name"
            placeholder=""
            variant="outlined"
            type="text"
            className="w-[95%] m-auto sm:w-[400px]"
            {...register("lastName", { required: true })}
          />

          <TextField
            label="Email"
            placeholder=""
            variant="outlined"
            type="text"
            className="w-[95%] m-auto sm:w-[400px]"
            {...register("email", { required: true })}
          />

          <TextField
            label="Password"
            placeholder=""
            variant="outlined"
            type="password"
            className="w-[95%] m-auto sm:w-[400px]"
            {...register("password", { required: true })}
          />

          <TextField
            label="Phone Number"
            placeholder=""
            variant="outlined"
            type="text"
            className="w-[95%] m-auto sm:w-[400px]"
            {...register("phoneNumber", { required: true })}
          />

          <TextField
            label="Curriculum"
            placeholder=""
            variant="outlined"
            type="text"
            className="w-[95%] m-auto sm:w-[400px]"
            {...register("curriculum", { required: true })}
          />

          <TextField
            label="Grade"
            placeholder=""
            variant="outlined"
            type="text"
            className="w-[95%] m-auto sm:w-[400px]"
          />

          <TextField
            label="Subject"
            placeholder=""
            variant="outlined"
            type="text"
            className="w-[95%] m-auto sm:w-[400px]"
            {...register("subject", { required: true })}
          />

          <TextField
            label="Choose Country"
            placeholder=""
            variant="outlined"
            type="text"
            className="w-full sm:max-w-[860px] mt-5"
            {...register("country", { required: true })}
          />
        </div>
        <PrimaryButton
          Name={"ADD STUDENT"}
          type="submit"
          className="w-full sm:max-w-[860px] mt-5"
        ></PrimaryButton>
      </form>
    </div>
  );
}
