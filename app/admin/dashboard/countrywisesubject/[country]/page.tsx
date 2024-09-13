"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { Box } from "@/app/components/Box";
import { InputField } from "@/app/components/Inputfield";
import { PrimaryButton } from "@/app/components/PrimaryButton";
import TableField from "@/app/components/TableField";

type Inputs = {
  subject: string;
};
export default function Country({ params }: { params: { country: string } }) {
  const subjectList = [
    {
      Subject: "Maths",
    },
    {
      Subject: "Physics",
    },
    {
      Subject: "Chemistry",
    },
    {
      Subject: "Computer science",
    },
  ];
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div>
      <Box Heading="ADD SUBJECT" className="w-[95%] mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField
            label={"Subject Name"}
            placeholder={""}
            type={"text"}
            className="w-[95%] mx-auto mt-5"
            {...register("subject", { required: true })}
          ></InputField>
          <PrimaryButton
            Name={"+ ADD SUBJECT"}
            className="w-[95%] mx-auto mt-5"
            type="submit"
          ></PrimaryButton>
        </form>
      </Box>
      <Box className="w-[95%] mx-auto">
        <TableField rows={subjectList}></TableField>
      </Box>
    </div>
  );
}
