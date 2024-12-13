"use client";

import { Box } from "@/app/components/Box";
import { PrimaryButton } from "@/app/components/PrimaryButton";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import Image from "next/image";
import Loader from "@/app/components/Loading";
import toast, { Toaster } from "react-hot-toast";
import dynamic from 'next/dynamic';

// Dynamically import ReactQuill to prevent SSR issues
const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading editor...</p>
});
import 'react-quill/dist/quill.snow.css';

// Interface for form inputs
interface Inputs {
  title: string;
  description: string;
  content: string;
  file: FileList;
}

export default function Add() {
  // State for image preview and rich text content
  const [preview, setPreview] = useState<string | undefined>(undefined);
  const [value, setValue] = useState<string>("");

  // Mutation for blog post creation
  const mutation = useMutation({
    mutationFn: async (data: Inputs) => {
      try {
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
      } catch (error) {
        console.error("Blog creation error:", error);
        throw error;
      }
    },
    onError: (error: any) => {
      console.error("Mutation error:", error);
      toast.error("Unable to create blog!");
    },
    onSuccess: () => {
      toast.success("Blog Created Successfully");
      // Optional: Reset form or navigate away
    },
  });

  // React Hook Form setup
  const { register, handleSubmit } = useForm<Inputs>();

  // Submit handler
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    mutation.mutate({
      title: data.title,
      description: data.description,
      content: value,
      file: data.file,
    });
  };

  // Handle file preview
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const objectUrl = URL.createObjectURL(e.target.files[0]);
      setPreview(objectUrl);

      // Clean up function
      return () => {
        URL.revokeObjectURL(objectUrl);
      };
    }
  };

  // Show loader while mutation is pending
  if (mutation.isPending) {
    return <Loader />;
  }

  return (
    <div className="w-full">
      <Toaster />
      <Box Heading="Create a new post" className="p-5 flex flex-col gap-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Title"
            placeholder="Blog Heading"
            variant="outlined"
            fullWidth
            {...register("title", { required: "Title is required" })}
          />
          <div className="mt-5">
            <TextField
              label="Description"
              placeholder="Blog Description"
              variant="outlined"
              fullWidth
              multiline
              rows={3}
              {...register("description", { required: "Description is required" })}
            />
          </div>

          <div className="mt-5">
            <ReactQuill
              theme="snow"
              value={value}
              onChange={setValue}
              placeholder="Write your blog content here..."
            />
          </div>

          <Box Heading="" className="w-full m-auto my-5">
            <h1 className="font-bold text-xl my-5">Cover Image</h1>
            <input
              type="file"
              accept="image/*"
              {...register("file", { required: "Cover image is required" })}
              onChange={handleFileChange}
            />
            {preview && (
              <div className="mt-4">
                <Image
                  src={preview}
                  alt="Preview"
                  width={200}
                  height={200}
                  className="object-cover"
                />
              </div>
            )}
          </Box>

          <div className="flex gap-5">
            <PrimaryButton
              Name="Preview"
              className="bg-secondary w-32"
              type="submit"

            />
            <PrimaryButton
              Name="Submit"
              className="w-32"
              type="submit"
            />
          </div>
        </form>
      </Box>
    </div>
  );
}
