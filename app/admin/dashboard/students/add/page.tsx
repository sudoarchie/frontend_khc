"use client";
import { InputField } from "@/app/components/Inputfield";
import { PrimaryButton } from "@/app/components/PrimaryButton";
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
          <InputField
            label={"First Name"}
            placeholder={""}
            type={"text"}
            className="w-[95%] m-auto sm:w-[400px] "
            {...register("firstName", { required: true })}
          ></InputField>
          <InputField
            label={"Last Name"}
            placeholder={""}
            type={"text"}
            className="w-[95%] m-auto sm:w-[400px]"
            {...register("lastName", { required: true })}
          ></InputField>
          <InputField
            label={"Email"}
            placeholder={""}
            type={"text"}
            className="w-[95%] m-auto sm:w-[400px]"
            {...register("email", { required: true })}
          ></InputField>
          <InputField
            label={"Password"}
            placeholder={""}
            type={"Password"}
            className="w-[95%] m-auto sm:w-[400px]"
            {...register("password", { required: true })}
          ></InputField>
          <InputField
            label={"Phone Number"}
            placeholder={""}
            type={"text"}
            className="w-[95%] m-auto sm:w-[400px]"
            {...register("phoneNumber", { required: true })}
          ></InputField>
          <InputField
            label={"Curriculum"}
            placeholder={""}
            type={"text"}
            className="w-[95%] m-auto sm:w-[400px]"
            {...register("curriculum", { required: true })}
          ></InputField>
          <InputField
            label={"Grade"}
            placeholder={""}
            type={"text"}
            className="w-[95%] m-auto sm:w-[400px]"
          ></InputField>
          <InputField
            label={"Subject"}
            placeholder={""}
            type={"text"}
            className="w-[95%] m-auto sm:w-[400px]"
            {...register("subject", { required: true })}
          ></InputField>
        </div>
        <InputField
          label={"Choose Country"}
          placeholder={""}
          type={"text"}
          className="w-full sm:max-w-[860px] mt-5"
          {...register("country", { required: true })}
        ></InputField>
        <PrimaryButton
          Name={"ADD STUDENT"}
          type="submit"
          className="w-full sm:max-w-[860px] mt-5"
        ></PrimaryButton>
      </form>
    </div>
  );
}
