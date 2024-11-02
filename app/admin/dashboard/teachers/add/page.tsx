"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { Box } from "@/app/components/Box";
import { PrimaryButton } from "@/app/components/PrimaryButton";
import { UploadField } from "@/app/components/UploadField";
import TextField from "@mui/material/TextField";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useEffect, useState } from "react";

type Inputs = {
  fullName: string;
  phoneNo: number;
  email: string;
  password: string;
  subjects: string[];
};

export default function AddTeacher() {
  const { register, handleSubmit, setValue } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);

  const handleSubjectChange = (
    event: React.ChangeEvent<{ value: unknown }>,
  ) => {
    const value = event.target.value as string[];
    setSelectedSubjects(value);
    setValue("subjects", value); // Update form value in react-hook-form
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box Heading="Credential">
        <div className="grid grid-cols-2 justify-items-center gap-y-5 my-5">
          <TextField
            label="Full Name"
            placeholder=""
            variant="outlined"
            type="text"
            className="w-3/4"
            {...register("fullName", { required: true })}
          />
          <TextField
            label="Phone Number"
            placeholder=""
            variant="outlined"
            type="text"
            className="w-3/4"
            {...register("phoneNo", { required: true })}
          />
          <TextField
            label="Email"
            placeholder=""
            variant="outlined"
            type="email"
            className="w-3/4"
            {...register("email", { required: true })}
          />
          <TextField
            label="Password"
            placeholder=""
            variant="outlined"
            type="password"
            className="w-3/4"
            {...register("password", { required: true })}
          />
        </div>
      </Box>
      <Box Heading="Upload Files">
        <div className="grid grid-cols-2 justify-items-center mt-5">
          <div className="flex flex-col w-[70%]">
            <UploadField />
            <h2 className="text-lg mt-5 text-center">Government certified</h2>
          </div>
          <div className="flex flex-col w-[70%]">
            <UploadField />
            <h2 className="text-lg mt-5 text-center">
              Highest qualification certificate
            </h2>
          </div>
        </div>
      </Box>
      <Box Heading="Subject">
        <div className="grid grid-cols-2 justify-items-center gap-y-5 my-5">
          <FormControl fullWidth>
            <InputLabel id="demo-multiple-select-label">Subject</InputLabel>
            <Select
              labelId="demo-multiple-select-label"
              id="demo-multiple-select"
              multiple
              value={selectedSubjects}
              onChange={handleSubjectChange}
              label="Subjects"
              renderValue={(selected) => (selected as string[]).join(", ")}
            >
              <MenuItem value={"sub1"}>sub1</MenuItem>
              <MenuItem value={"sub2"}>sub2</MenuItem>
              <MenuItem value={"sub3"}>sub3</MenuItem>
            </Select>
          </FormControl>
        </div>
      </Box>
      <PrimaryButton
        Name={"ADD TEACHER"}
        className="w-[calc(100%-40px)] mx-auto"
      />
    </form>
  );
}
