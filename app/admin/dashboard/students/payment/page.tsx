"use client";
import { Box } from "@/app/components/Box";
import { InputField } from "@/app/components/Inputfield";
import { PrimaryButton } from "@/app/components/PrimaryButton";
import { TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
export default function Payment() {
  return (
    <Box className="mx-auto w-[90%] h-[500px] border-2 border-borderColor rounded-lg m-10 flex flex-col justify-center items-center">
      <InputField
        label="Enter amount"
        className="w-[70%]"
        placeholder={""}
        type={"text"}
      ></InputField>
      <InputField
        label="Enter Date"
        className="w-[70%] mt-5"
        placeholder={""}
        type={"date"}
      ></InputField>

      <PrimaryButton Name={"SAVE NOW"} className="w-[70%] mt-5"></PrimaryButton>
    </Box>
  );
}
