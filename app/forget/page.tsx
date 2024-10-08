"use client";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";

import graphicsLogin from "@/public/8ff238e5b5acb1cf34f2dd1e1e2bcbea.png";
import Link from "next/link";
import { NavbarSec } from "@/app/components/NavbarSecoundary";
import { Button, TextField } from "@mui/material";
import OptionField from "../components/OptionField";

export default function Page() {
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
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

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
            <h1 className="text-2xl">Forget Password?</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-20">
              <OptionField
                Label={"Category"}
                Option={["Student", "Teacher"]}
                className="w-full sm:w-[80%] mx-auto sm:mx-0"
              ></OptionField>
              <TextField
                id="outlined-basic"
                variant="outlined"
                label="Email Address"
                placeholder="admin@gmail.com"
                className="mt-10 w-full sm:w-[80%] mx-auto sm:mx-0"
                type="text"
                {...register("email", { required: true })}
              ></TextField>
              <TextField
                label="OTP"
                id="outlined-basic"
                variant="outlined"
                className="w-full sm:w-[80%] mt-10 mx-auto sm:mx-0"
                placeholder={""}
                type="text"
                {...register("password", { required: true })}
              ></TextField>

              <Button
                variant="contained"
                className="w-full sm:w-[80%] mt-10 mx-auto sm:mx-0 bg-primary"
                type="submit"
              >
                Next
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
