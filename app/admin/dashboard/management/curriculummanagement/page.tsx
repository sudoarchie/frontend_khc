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
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "@/app/components/Loading";
import { Error } from "@/app/components/error";
import { useState } from "react";
import Image from "next/image";

type Inputs = {
  countryId: string[];
  name: string;
  description: string;
  file: FileList;
};

export default function MaterialManagement() {
  const [filePreview, setFilePreview] = useState<string | null>(null);

  const {
    data: CategoryList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["country"],
    queryFn: async () => {
      const response = await axios({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/country`,
        method: "get",
      });
      return response.data.response;
    },
  });

  const data = [
    {
      ID: "1",
      Category: "Chemistry",
      MaterialName: "Organic Reactions",
      Doc: "organic_reactions.pdf",
      Time: "2024-09-05T10:00:00",
    },
    // ... other data remains the same
  ];

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      countryId: [],
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: {
      name: string;
      description: string;
      countryId: string[];
      file: File;
    }) => {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("description", data.description);
      data.countryId.forEach((id, index) => {
        formData.append(`countryId[${index}]`, id);
      });
      formData.append("file", data.file);

      const response = await axios({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/curriculum/add`,
        method: "post",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      return response.data;
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (data.file && data.file.length > 0) {
      mutation.mutate({
        name: data.name,
        description: data.description,
        countryId: data.countryId,
        file: data.file[0],
      });
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Create a preview of the image
      const reader = new FileReader();
      reader.onloadend = () => {
        setFilePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  if (isLoading) {
    return (
      <div>
        <Loader></Loader>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <Error></Error>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-[95%] m-5 mx-auto">
      <Box
        Heading="Material Management"
        SubHeading="Choose category and enter material name"
        className="w-full"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl fullWidth className="mt-5 mx-auto">
            <InputLabel>Choose Country</InputLabel>
            <Select
              label="Choose Country"
              defaultValue={[]}
              multiple
              {...register("countryId", { required: true })}
            >
              {CategoryList.map((category: { id: string; name: string }) => (
                <MenuItem key={category.id} value={category.id}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            label="Enter Curriculum"
            variant="outlined"
            fullWidth
            className="mt-5 mx-auto"
            {...register("name", { required: true })}
            error={!!errors.name}
            helperText={errors.name && "Curriculum name is required"}
          />

          <TextField
            label="Enter description"
            variant="outlined"
            fullWidth
            className="mt-5 mx-auto"
            {...register("description", { required: true })}
            error={!!errors.description}
            helperText={errors.description && "Description is required"}
          />

          <div className="mt-5">
            <input
              type="file"
              accept="image/*"
              {...register("file", { required: true })}
              onChange={handleFileChange}
              className="mb-3"
            />
            {errors.file && <p className="text-red-500">File is required</p>}

            {filePreview && (
              <div className="mt-3">
                <Image
                  src={filePreview}
                  alt="File Preview"
                  className="max-w-full h-auto max-h-64 object-contain"
                />
              </div>
            )}
          </div>

          <PrimaryButton
            Name={"+ ADD SUBJECT"}
            className="w-full mx-auto mt-5"
            type="submit"
          ></PrimaryButton>

          {mutation.isError && (
            <p className="text-red-500 mt-3">Error: {mutation.error.message}</p>
          )}
          {mutation.isSuccess && (
            <p className="text-green-500 mt-3">Subject added successfully!</p>
          )}
        </form>
      </Box>
      <TableField rows={data} deleteOption={true} className="w-full ml-5" />
    </div>
  );
}
