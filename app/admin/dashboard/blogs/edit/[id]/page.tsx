"use client";
import { Box } from "@/app/components/Box";
import { TextField, Button } from "@mui/material";
import { MultiOptionSelect } from "@/app/components/MultiOptionSearch";
import { UploadField } from "@/app/components/UploadField";
import img1 from "@/public/430107972_7608970299142599_2611373766157426786_n.jpg";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Loader from "@/app/components/Loading";
import { PrimaryButton } from "@/app/components/PrimaryButton";
import Image from "next/image";
import { Error } from "@/app/components/error";

interface Inputs {
  id: string;
  title: string;
  description: string;
  file: FileList;
}
export default function EditBlog() {
  const [preview, setPreview] = useState();
  const { id } = useParams<{ id: string }>();
  console.log(id);
  const { data, isLoading, error } = useQuery({
    queryKey: ["blog", id],
    queryFn: async () => {
      const res = await axios({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/serve`,
        params: {
          id,
        },
      });
      setPreview(res.data.data.url);
      return res.data.data;
    },
  });
  const mutation = useMutation({
    mutationFn: async (data: Inputs) => {
      const formData = new FormData();
      formData.append("id", data.id);
      formData.append("title", data.title);
      formData.append("description", data.description);

      // Append the first file from the FileList
      if (data.file && data.file.length > 0) {
        formData.append("file", data.file[0]);
      }

      const res = await axios({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/`,
        method: "put",
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: formData,
      });
      return res.data;
    },
    onError: () => {
      toast.error("Unable to create blog!");
    },
    onSuccess: () => {
      toast.success("Blog Created Successfully");
    },
  });
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) =>
    mutation.mutate({
      id,
      title: data.title,
      description: data.description,
      file: data.file,
    });
  if (mutation.isPending) {
    return <Loader />;
  }
  if (isLoading) return <Loader />;
  if (error) return <Error></Error>;

  return (
    <div className="w-full">
      <Toaster></Toaster>
      <Box Heading="Update " className="p-5 flex flex-col gap-5">
        {/* Replaced InputField with MUI TextField */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Title"
            placeholder="Blog Heading"
            variant="outlined"
            fullWidth
            className=""
            defaultValue={data?.title}
            {...register("title")}
          />
          <TextField
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={4}
            className="w-full mt-5"
            defaultValue={data?.description}
            {...register("description")}
          />{" "}
          <Box Heading="" className="w-full m-auto my-5">
            <h1 className="font-bold text-xl my-5">Cover Image</h1>
            <input
              type="file"
              accept="image/*"
              {...register("file")}
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setPreview(URL.createObjectURL(e.target.files[0]) as any);
                }
              }}
            />
            {preview && (
              <Image
                src={preview}
                alt="Preview"
                width={200}
                height={200}
                className="w-[50%] h-full object-cover mt-5"
              />
            )}
          </Box>
          <div className="flex gap-5">
            <PrimaryButton Name="Preview" className="bg-secondary w-32" />
            <PrimaryButton Name="Submit" className="w-32" type="submit" />
          </div>
        </form>
      </Box>
    </div>
  );
}
