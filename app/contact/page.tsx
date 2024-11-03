"use client";
import img from "@/public/contact.png";
import Image from "next/image";
import { useForm } from "react-hook-form";

import axios from "axios";
import { useMutation } from "@tanstack/react-query";
// import { InputField } from "../components/Inputfield";
import { Button, TextField } from "@mui/material";
import { PrimaryButton } from "../components/PrimaryButton";
interface FormData {
  phoneNumber: string;
  message: string;
  email: string;
}
export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  const mutation = useMutation({
    mutationFn: (data: FormData) => {
      return axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/enquiry`, {
        email: data.email,
        mobileNo: data.phoneNumber,
        message: data.message,
      });
    },
    onSuccess: () => {
      reset();
    },
  });
  const onSubmit = handleSubmit((data) => mutation.mutate(data));

  return (
    <div className="flex">
      <div className="w-1/2 flex flex-col justify-center items-center h-[90vh]">
        <h1 className="text-4xl">Let&apos;s Get In Touch.</h1>
        <div className="flex gap-1">
          Or just reach out manually to{" "}
          <div className="text-[#D36799]">hello@gmail.com</div>
        </div>
        <Image src={img} alt={""}></Image>
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center">
        <h1 className="text-3xl">Please fill below form to reach Us.</h1>
        <div className="flex flex-col max-w-[600px] w-[70%] gap-5 mt-10 justify-center items-center">
          <form
            onSubmit={onSubmit}
            className="flex flex-col gap-5 w-full justify-center items-center"
          >
            <TextField
              id="outlined-basic"
              variant="outlined"
              label="Email Address"
              placeholder="Enter your Email Address"
              className="w-full sm:w-[80%] mx-auto sm:mx-0"
              type="text"
              {...register("email", { required: "Email is required" })}
              error={!!errors.email}
              helperText={errors.email ? "Email is required" : ""}
            ></TextField>
            <TextField
              id="outlined-basic"
              variant="outlined"
              label="Phone Number"
              placeholder="Enter your Phone Number"
              className="w-full sm:w-[80%] mx-auto sm:mx-0"
              type="number"
              {...register("phoneNumber", {
                required: "Phone number is required",
              })}
              error={!!errors.phoneNumber}
              helperText={errors.phoneNumber ? "Phone number is required" : ""}
            ></TextField>
            <TextField
              id="outlined-multiline-flexible"
              label="Enter Your Message"
              multiline
              className="w-full sm:w-[80%] mx-auto sm:mx-0"
              maxRows={4}
              {...register("message", { required: "Message is required" })}
              error={!!errors.message}
              helperText={errors.message ? "Message is required" : ""}
            />
            <Button
              variant="contained"
              className="w-full sm:w-[80%] mt-5 mx-auto sm:mx-0 bg-primary"
              type="submit"
              disabled={mutation.isPending}
            >
              {mutation.isPending ? "Sending..." : "Quick Enquiry"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
