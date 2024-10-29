"use client";

import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { Box } from "./Box";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
interface FormData {
  phoneNumber: string;
  message: string;
  email: string;
}
export default function EnquiryComponent() {
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
    <Box className="w-[95%] md:w-[800px] mx-auto flex flex-col gap-5 mt-5">
      <form
        onSubmit={onSubmit}
        className="flex flex-col justify-center items-center"
      >
        <TextField
          id="email"
          variant="outlined"
          label="Email Address"
          placeholder="admin@gmail.com"
          className="w-full sm:w-[80%] mx-auto sm:mx-0 mb-5"
          type="email"
          {...register("email", { required: "Email is required" })}
          error={!!errors.email}
          helperText={errors.email ? "Email is required" : ""}
        />
        <TextField
          id="phone-number"
          variant="outlined"
          label="Phone Number"
          placeholder="+91 1234567890"
          className="w-full sm:w-[80%] mx-auto sm:mx-0 mb-5"
          type="text"
          {...register("phoneNumber", { required: "Phone number is required" })}
          error={!!errors.phoneNumber}
          helperText={errors.phoneNumber ? "Phone number is required" : ""}
        />
        <TextField
          id="message"
          label="Message"
          placeholder="Enter your message"
          variant="outlined"
          multiline
          rows={3}
          className="w-full sm:w-[80%] mx-auto sm:mx-0 mb-5"
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
    </Box>
  );
}
