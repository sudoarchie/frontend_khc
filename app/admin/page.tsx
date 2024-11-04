"use client";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";

import graphicsLogin from "@/public/8ff238e5b5acb1cf34f2dd1e1e2bcbea.png";
import Link from "next/link";
import { Button, TextField } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Loader from "../components/Loading";
import { Error } from "../components/error";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  type Inputs = {
    email: string;
    password: string;
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const mutation = useMutation({
    mutationFn: async (data: Inputs) => {
      const response = await axios({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/admin/login`,
        method: "post",
        data,
        withCredentials: true,
      });
      return response.data;
    },
    onSuccess: () => {
      router.push("/admin/dashboard"); // Redirect on successful login
    },
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => mutation.mutate(data);
  if (mutation.isPending) {
    return <Loader></Loader>;
  }
  if (mutation.isError) {
    return <Error></Error>;
  }

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="flex h-screen items-center">
        <div className="hidden sm:block w-1/2">
          <h1 className="text-4xl text-center ">Hi, Welcome back</h1>
          <h2 className="font-light text-center">
            More effectively with optimized workflows.
          </h2>
          <Image
            src={graphicsLogin}
            alt={"Signin and Signup"}
            className="mt-4"
          ></Image>
        </div>
        <div className=" w-full sm:w-1/2">
          <div className="mx-10 mb-5">
            <h1 className="text-2xl">Sign into your account</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
              <TextField
                id="outlined-basic"
                variant="outlined"
                label="Email Address"
                placeholder="admin@gmail.com"
                className="w-full sm:w-[80%] mx-auto sm:mx-0"
                type="text"
                {...register("email", { required: true })}
              ></TextField>
              <TextField
                label="Password"
                id="outlined-basic"
                variant="outlined"
                className="w-full sm:w-[80%] mt-10 mx-auto sm:mx-0"
                placeholder={"8+ characters"}
                type="password"
                {...register("password", { required: true })}
              ></TextField>
              <Button
                variant="contained"
                className="w-full sm:w-[80%] mt-10 mx-auto sm:mx-0 bg-primary"
                type="submit"
              >
                SIGN IN
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
