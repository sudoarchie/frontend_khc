import { Box } from "@/app/components/Box";
import { InputField } from "@/app/components/Inputfield";
import { TextAreaField } from "@/app/components/TextAreaField";
import { UploadField } from "@/app/components/UploadField";

export default function Add() {
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
      </Box>
    </div>
  );
}
