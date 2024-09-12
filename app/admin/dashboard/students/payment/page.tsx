"use client";
import { Box } from "@/app/components/Box";
import { InputField } from "@/app/components/Inputfield";
import { PrimaryButton } from "@/app/components/PrimaryButton";
import { TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  amount: number;
  date: Date;
};
export default function Payment() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box className="mx-auto w-[90%] h-[500px] border-2 border-borderColor rounded-lg m-10 flex flex-col justify-center items-center">
        <InputField
          className="w-[70%]"
          label="Enter amount"
          placeholder={""}
          type={"text"}
          {...register("amount")}
        ></InputField>
        <InputField
          label="Enter Date"
          className="w-[70%] mt-5"
          placeholder={""}
          type={"date"}
          {...register("date")}
        ></InputField>

        <PrimaryButton
          Name={"SAVE NOW"}
          className="w-[70%] mt-5"
          type="submit"
        ></PrimaryButton>
      </Box>
    </form>
  );
}
