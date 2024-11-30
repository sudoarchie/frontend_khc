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

interface Inputs {
  title: string;
  description: string;
  file: FileList;
}
export default function Add() {
  const [preview, setPreview] = useState();
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <div className="w-full">
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
          <TextField
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={4}
            className="w-full mt-5"
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
