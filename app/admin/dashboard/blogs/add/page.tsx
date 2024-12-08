"use client";
import { Box } from "@/app/components/Box";
import { MultiOptionSelect } from "@/app/components/MultiOptionSearch";
import { PrimaryButton } from "@/app/components/PrimaryButton";
import { TextAreaField } from "@/app/components/TextAreaField";
import { UploadField } from "@/app/components/UploadField";
import { MultiSelect } from "react-multi-select-component";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import Image from "next/image";
import Loader from "@/app/components/Loading";
import toast, { Toaster } from "react-hot-toast";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
interface Inputs {
  title: string;
  description: string;
  content: string;
  file: FileList;
}
export default function Add() {
  const [preview, setPreview] = useState();
  const [value, setValue] = useState("");

  const mutation = useMutation({
    mutationFn: async (data: Inputs) => {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("content", data.content);

      // Append the first file from the FileList
      if (data.file && data.file.length > 0) {
        formData.append("file", data.file[0]);
      }

      const res = await axios({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/add`,
        method: "POST",
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
      title: data.title,
      description: data.description,
      content: value,
      file: data.file,
    });
  if (mutation.isPending) {
    return <Loader />;
  }
  return (
    <div className="w-full">
      <Toaster></Toaster>
      <Box Heading="Create a new post" className="p-5 flex flex-col gap-5">
        {/* Replaced InputField with MUI TextField */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Title"
            placeholder="Blog Heading"
            variant="outlined"
            fullWidth
            className=""
            {...register("title")}
          />
          <div className="mt-5">
            <TextField
              label="Description"
              placeholder="Blog Description"
              variant="outlined"
              fullWidth
              className=""
              {...register("description")}
            />
          </div>
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            className="mt-5"
          />
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
              <Image src={preview} alt="Preview" width={200} height={200} />
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
