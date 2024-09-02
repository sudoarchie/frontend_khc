import Image from "next/image";

import graphicsLogin from "@/public/8ff238e5b5acb1cf34f2dd1e1e2bcbea.png";
import Link from "next/link";
import { NavbarSec } from "@/app/components/NavbarSecoundary";
import { Button, TextField } from "@mui/material";

export default function Page() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <NavbarSec></NavbarSec>
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
            <h1 className="text-2xl">Sign in to your account</h1>
            <div className=" flex gap-1">
              Don&apos;t have an account?
              <Link href="/signup" className="text-primary">
                Get started
              </Link>
            </div>
            <div className="mt-20">
              <TextField
                id="outlined-basic"
                variant="outlined"
                label="Email Address"
                placeholder="admin@gmail.com"
                className="w-full sm:w-[80%] mx-auto sm:mx-0"
                type="text"
              ></TextField>
              <TextField
                label="Password"
                id="outlined-basic"
                variant="outlined"
                className="w-full sm:w-[80%] mt-10 mx-auto sm:mx-0"
                placeholder={"8+ characters"}
                type="password"
              ></TextField>
              <Button
                variant="contained"
                className="w-full sm:w-[80%] mt-10 mx-auto sm:mx-0 bg-primary"
              >
                SIGN IN
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
