import { Box } from "@/app/components/Box";
import { InputField } from "@/app/components/Inputfield";
import { MultiOptionSelect } from "@/app/components/MultiOptionSearch";
import { PrimaryButton } from "@/app/components/PrimaryButton";
import { TextAreaField } from "@/app/components/TextAreaField";
import { UploadField } from "@/app/components/UploadField";
import { MultiSelect } from "react-multi-select-component";

export default function Add() {
  const option = [
    { label: "cat1", value: "cat1" },
    { label: "cat2", value: "cat2" },
    { label: "cat3", value: "cat3" },
    { label: "cat4", value: "cat4" },
    { label: "cat5", value: "cat5" },
  ];
  return (
    <div className=" w-full">
      <Box Heading="Create a new post" className="p-5 flex flex-col gap-5">
        <InputField
          label="Title"
          placeholder={"Blog Heading"}
          type={"Text"}
          className=""
        ></InputField>
        <TextAreaField
          label={"Discription"}
          placeholder={""}
          rows={3}
        ></TextAreaField>

        <Box Heading="" className="w-full m-auto">
          <TextAreaField
            label={"Content"}
            placeholder={""}
            rows={10}
          ></TextAreaField>
          <br></br>
          <h1 className="font-bold text-xl my-5">Cover Image</h1>
          <UploadField></UploadField>
        </Box>
        <Box
          Heading="Properties"
          SubHeading="Additional attribute and functionality"
        >
          <MultiOptionSelect label={"Tags"} option={option}></MultiOptionSelect>
        </Box>
        <div className="flex gap-5 ">
          <PrimaryButton
            Name={"Preview"}
            className="bg-secondary w-32"
          ></PrimaryButton>
          <PrimaryButton Name={"Submit"} className="w-32"></PrimaryButton>
        </div>
      </Box>
    </div>
  );
}
