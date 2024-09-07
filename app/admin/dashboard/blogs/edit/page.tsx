import { Box } from "@/app/components/Box";
import { InputField } from "@/app/components/Inputfield";
import { MultiOptionSelect } from "@/app/components/MultiOptionSearch";
import { PrimaryButton } from "@/app/components/PrimaryButton";
import { TextAreaField } from "@/app/components/TextAreaField";
import { UploadField } from "@/app/components/UploadField";
import { MultiSelect } from "react-multi-select-component";
import img1 from "@/public/430107972_7608970299142599_2611373766157426786_n.jpg";

export default function EditBlog() {
  const data = {
    title: "Exploring Artificial Intelligence",
    description:
      "An in-depth exploration of AI, its history, applications, and future trends.",
    content:
      "Artificial Intelligence (AI) has been a growing field over the past few decades, evolving from simple rule-based systems to advanced machine learning and deep learning algorithms. This article delves into how AI is transforming industries and what the future holds for this revolutionary technology.",
    image: img1, // Placeholder for the image
    tags: [
      { label: "AI", value: "AI" },
      { label: "Machine Learning", value: "Machine Learning" },
      { label: "Future Technology", value: "Future Technology" },
      { label: "Automation", value: "Automation" },
    ],
  };
  const option = [
    { label: "cat1", value: "cat1" },
    { label: "cat2", value: "cat2" },
    { label: "cat3", value: "cat3" },
    { label: "cat4", value: "cat4" },
    { label: "cat5", value: "cat5" },
  ];
  return (
    <div className=" w-full">
      <Box Heading="Edit post" className="p-5 flex flex-col gap-5">
        <InputField
          label="Title"
          placeholder={"Blog Heading"}
          type={"Text"}
          value={data.title}
          className=""
        ></InputField>
        <TextAreaField
          label={"Discription"}
          placeholder={""}
          value={data.description}
          rows={3}
        ></TextAreaField>

        <Box Heading="" className="w-full m-auto">
          <TextAreaField
            label={"Content"}
            placeholder={""}
            value={data.content}
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
          <MultiOptionSelect
            label={"Tags"}
            values={data.tags}
            option={option}
          ></MultiOptionSelect>
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
