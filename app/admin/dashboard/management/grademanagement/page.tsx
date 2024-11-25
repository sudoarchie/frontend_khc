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
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Loader from "@/app/components/Loading";
import { Error } from "@/app/components/error";
import toast, { Toaster } from "react-hot-toast";
type Inputs = {
  curriculumId: string;
  name: string;
};

export default function CategoryManagement() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (data: { name: string; curriculumId: string }) => {
      const response = await axios({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/grade/add`,
        method: "post",
        data,
        withCredentials: true,
      });
    },
    onSuccess: () => {
      toast.success("Student Created Successfully!");
      queryClient.invalidateQueries({ queryKey: ["Grade"] });
      reset();
    },
    onError: () => {
      toast.error("Error while creating!!");
    },
  });
  const {
    data: gradeData,
    isLoading: loading2,
    error: error2,
  } = useQuery({
    queryKey: ["Grade"],
    queryFn: async () => {
      const response = await axios({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/grade/data`,
        method: "get",
        params: {
          take: 30,
        },
      });
      console.log(response.data.data);
      return response.data.data;
    },
  });
  const {
    data: CategoryList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["CategoryList"],
    queryFn: async () => {
      const response = await axios({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/curriculum/list`,
        method: "get",
      });
      console.log(response.config);
      console.log(response.data.data);
      return response.data.data;
    },
  });

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) =>
    mutation.mutate({ name: data.name, curriculumId: data.curriculumId });

  if (isLoading) {
    return <Loader></Loader>;
  }
  if (error) {
    return <Error></Error>;
  }
  if (loading2) {
    return <Loader></Loader>;
  }
  if (error) {
    return <Error></Error>;
  }
  if (mutation.isPending) {
    return <Loader></Loader>;
  }

  return (
    <div className="flex flex-col w-[95%] m-5 mx-auto">
      <Toaster position="top-right" reverseOrder={false} />
      <Box
        Heading="Add Category"
        SubHeading="Choose category and enter category name"
        className="w-full "
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl fullWidth className="mt-5 mx-auto">
            <InputLabel>Choose Category</InputLabel>
            <Select
              label="Choose Category"
              defaultValue=""
              {...register("curriculumId", { required: true })}
            >
              {CategoryList.map((category: { id: string; name: string }) => (
                <MenuItem key={category.id} value={category.id}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            label="Enter Grade"
            variant="outlined"
            fullWidth
            className="mt-5 mx-auto"
            {...register("name", { required: true })}
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
                Grade
              </th>

              <th className="border border-gray-300 px-4 py-2 text-left font-medium text-gray-600">
                Curriculum
              </th>
            </tr>
          </thead>
          <tbody>
            {gradeData.map(
              (
                info: {
                  name: string;
                  curriculum: { name: string };
                },
                index: number,
              ) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2">
                    {info.name}
                  </td>

                  <td className="border border-gray-300 px-4 py-2">
                    {info.curriculum.name}
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
