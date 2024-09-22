import img from "@/public/contact.png";
import Image from "next/image";
// import { InputField } from "../components/Inputfield";
import { TextField } from "@mui/material";
import { PrimaryButton } from "../components/PrimaryButton";
export default function Contact() {
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
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Email Address"
            placeholder="Enter your Email Address"
            className="w-full sm:w-[80%] mx-auto sm:mx-0"
            type="text"
          ></TextField>
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Phone Number"
            placeholder="Enter your Phone Number"
            className="w-full sm:w-[80%] mx-auto sm:mx-0"
            type="number"
          ></TextField>
          <TextField
            id="outlined-multiline-flexible"
            label="Enter Your Message"
            multiline
            className="w-full sm:w-[80%] mx-auto sm:mx-0"
            maxRows={4}
          />
          <PrimaryButton
            Name={"Contact Us"}
            className="w-full sm:w-[80%] mx-auto sm:mx-0"
          ></PrimaryButton>
        </div>
      </div>
    </div>
  );
}
