"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { Box } from "@/app/components/Box";
import { PrimaryButton } from "@/app/components/PrimaryButton";
import TableField from "@/app/components/TableField";
import TextField from "@mui/material/TextField";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "@/app/components/Loading";
import { Error } from "@/app/components/error";
import { useState } from "react";

type Inputs = {
  curriculum: string;
  grade: string;
  subject: string;
};

export default function SubjectManagement() {
  const [grade, setGrade] = useState<Array<{ id: string; name: string }>>([]);
  const mutation = useMutation({
    mutationFn: async (data: { name: string; gradeId: string }) => {
      const response = await axios({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/subject/add`,
        data,
        withCredentials: true,
        method: "post",
      });
      return response.data;
    },
  });
  const {
    data: subjectAllData,
    isLoading: Loading,
    error: error2,
  } = useQuery({
    queryKey: ["SubjectAll"],
    queryFn: async () => {
      const response = await axios({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/subject/all`,
        method: "get",
      });
      console.log(response.data.data);
      return response.data.data;
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) =>
    mutation.mutate({ name: data.subject, gradeId: data.grade });

  const data = [
    {
      id: "1",
      Category: "Cbse",
      subjectName: "Hindi",
      EditLink: "https://edilitlink.com",
    },
  ];

  const {
    data: curriculum,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["curriculum"],
    queryFn: async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/curriculum/list`,
      );
      return response.data.data;
    },
  });

  const fetchGrade = async (selectedCurriculumId: string) => {
    try {
      console.log(
        `${process.env.NEXT_PUBLIC_BASE_URL}/grade/datacurriculumwise`,
      );
      console.log(selectedCurriculumId);
      const response = await axios({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/grade/datacurriculumwise`,
        method: "GET",
        params: { curriculumId: selectedCurriculumId },
      });
      setGrade(response.data.data.data);
      console.log(response.data.data.data);
    } catch (err) {
      console.error("Failed to fetch grades", err);
    }
  };

  if (isLoading) {
    return <Loader />;
  }
  if (Loading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }
  if (error2) {
    return <Error />;
  }

  return (
    <div className="flex flex-col w-[95%] m-5 mx-auto">
      <Box
        Heading="Add Subject"
        SubHeading="Add Category and name of subject"
        className="w-full"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl fullWidth className="mt-5 mx-auto">
            <InputLabel>Choose Curriculum</InputLabel>
            <Select
              label="Choose Curriculum"
              defaultValue=""
              {...register("curriculum", { required: true })}
              onChange={(event: SelectChangeEvent<string>) => {
                const selectedCurriculumId = event.target.value;
                fetchGrade(selectedCurriculumId);
              }}
            >
              {curriculum?.map((category: { id: string; name: string }) => (
                <MenuItem key={category.id} value={category.id}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth className="mt-5 mx-auto">
            <InputLabel>Choose Grade</InputLabel>
            <Select
              label="Choose Grade"
              defaultValue=""
              {...register("grade", { required: true })}
            >
              {grade.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label="Subject Name"
            variant="outlined"
            fullWidth
            className="mt-5 mx-auto"
            {...register("subject", { required: true })}
            error={!!errors.subject}
            helperText={errors.subject ? "Subject name is required" : ""}
          />

          <PrimaryButton
            Name={"+ ADD SUBJECT"}
            className="w-full mx-auto mt-5"
            type="submit"
          />
        </form>
      </Box>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left font-medium text-gray-600">
                Subject
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left font-medium text-gray-600">
                Grade
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left font-medium text-gray-600">
                Curriculum
              </th>
            </tr>
          </thead>
          <tbody>
            {subjectAllData.map(
              (
                info: {
                  name: string;
                  grade: { name: string; curriculum: { name: string } };
                },
                index: number,
              ) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2">
                    {info.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {info.grade.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {info.grade.curriculum.name}
                  </td>
                </tr>
              ),
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
