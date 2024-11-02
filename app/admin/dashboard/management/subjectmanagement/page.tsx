"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { Box } from "@/app/components/Box";
import { PrimaryButton } from "@/app/components/PrimaryButton";
import TableField from "@/app/components/TableField";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

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
          <FormControl fullWidth className="mt-5 mx-auto">
            <InputLabel>Choose Category</InputLabel>
            <Select
              label="Choose Category"
              defaultValue=""
              {...register("category", { required: true })}
            >
              {CategoryList.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            label="Enter material"
            variant="outlined"
            fullWidth
            className="mt-5 mx-auto"
            {...register("material", { required: true })}
          />

          <PrimaryButton
            Name={"+ ADD SUBJECT"}
            className="w-full mx-auto mt-5"
            type="submit"
          />
        </form>
      </Box>
      <TableField rows={data} deleteOption={true} className="w-full ml-5" />
    </div>
  );
}
