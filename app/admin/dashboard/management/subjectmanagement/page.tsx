"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { Box } from "@/app/components/Box";
import { InputField } from "@/app/components/Inputfield";
import OptionField from "@/app/components/OptionField";
import { PrimaryButton } from "@/app/components/PrimaryButton";
import TableField from "@/app/components/TableField";

type Inputs = {
  category: string;
  material: string;
};
export default function SubjectManagement() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const CategoryList = ["cbse", "igsc", "Upboard"];
  const data = [
    {
      id: "1",
      Category: "Cbse",
      subjectName: "Hindi",
      EditLink: "https://edilitlink.com",
    },
  ];
  return (
    <div className="flex flex-col w-[95%] m-5 mx-auto">
      <Box
        Heading="Add Subject"
        SubHeading="Add Category and name of subject"
        className="w-full "
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <OptionField
            Label={"Choose Category"}
            Option={CategoryList}
            className=" mx-auto mt-5"
            {...register("category", { required: true })}
          ></OptionField>
          <InputField
            label={"Enter material "}
            placeholder={""}
            className=" mx-auto mt-5"
            type={""}
            {...register("material", { required: true })}
          ></InputField>
          <PrimaryButton
            Name={"+ ADD SUBJECT"}
            className="w-full mx-auto mt-5"
            type="submit"
          ></PrimaryButton>
        </form>
      </Box>
      <TableField
        rows={data}
        deleteOption={true}
        className="w-full ml-5"
      ></TableField>
    </div>
  );
}
