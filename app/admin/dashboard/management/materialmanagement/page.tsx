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

export default function MaterialManagement() {
  const CategoryList = ["cbse", "igsc", "Upboard"];
  const data = [
    {
      ID: "1",
      Category: "Chemistry",
      MaterialName: "Organic Reactions",
      Doc: "organic_reactions.pdf",
      Time: "2024-09-05T10:00:00",
    },
    {
      ID: "2",
      Category: "Physics",
      MaterialName: "Quantum Mechanics",
      Doc: "quantum_mechanics.docx",
      Time: "2024-09-05T11:30:00",
    },
    {
      ID: "3",
      Category: "Mathematics",
      MaterialName: "Linear Algebra",
      Doc: "linear_algebra.xlsx",
      Time: "2024-09-04T15:45:00",
    },
    {
      ID: "4",
      Category: "Computer Science",
      MaterialName: "Data Structures",
      Doc: "data_structures.pdf",
      Time: "2024-09-03T09:20:00",
    },
    {
      ID: "5",
      Category: "Biology",
      MaterialName: "Genetics",
      Doc: "genetics.pptx",
      Time: "2024-09-02T14:10:00",
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
    <div className="flex flex-col w-[95%] m-5 mx-auto">
      <Box
        Heading="Material Management"
        SubHeading="Choose category and enter material name"
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
