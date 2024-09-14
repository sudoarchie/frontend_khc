import Image from "next/image";
import { Navbar } from "./components/Navbar";
import img1 from "@/public/download.png";
export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-[#272F42] h-[500px]">
        <div className="flex justify-between items-center">
          <div className="w-1/2">
            <h1 className="text-4xl font-bold text-white">Welcome to KHC</h1>
          </div>
          <Image src={img1} alt={"Khc Image"} className="h-[500px]"></Image>
        </div>
      </div>
    </div>
  );
}
