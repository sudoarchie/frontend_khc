import Image, { StaticImageData } from "next/image";
import GradientCard from "./gradientCard";
import img from "@/public/Frame 97 (1).png";

interface DashboardInterface {
  title: string;
  dataNumber: number;
  image?: StaticImageData;
}
export function DashboardCard({
  title,
  dataNumber,
  image,
}: DashboardInterface) {
  return (
    <GradientCard>
      <div className=" flex w-[400px]  justify-between items-center  aspect-video   rounded-2xl border-2 border-borderColor">
        <div className="flex flex-col justify-center px-5">
          <h1 className="font-bold text-2xl text-center">{dataNumber}</h1>
          <h2 className="text-gray-500 relative top-5 text-center">{title}</h2>
        </div>
        <Image src={image || img} alt=""></Image>
      </div>
    </GradientCard>
  );
}
