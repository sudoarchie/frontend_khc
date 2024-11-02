"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { Box } from "@/app/components/Box";
import { PrimaryButton } from "@/app/components/PrimaryButton";
import TableField from "@/app/components/TableField";
import TextField from "@mui/material/TextField";

type Inputs = {
  subject: string;
};

export default function Country({ params }: { params: { country: string } }) {
  const subjectList = [
    { Subject: "Maths" },
    { Subject: "Physics" },
    { Subject: "Chemistry" },
    { Subject: "Computer Science" },
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
          <TextField
            label="Subject Name"
            variant="outlined"
            fullWidth
            className="w-[95%] mx-auto mt-5"
            {...register("subject", { required: true })}
          />
          <PrimaryButton
            Name={"+ ADD SUBJECT"}
            className="w-[95%] mx-auto mt-5"
            type="submit"
          />
        </form>
      </Box>
      <Box className="w-[95%] mx-auto">
        <TableField rows={subjectList} />
      </Box>
    </div>
  );
}
