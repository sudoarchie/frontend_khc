import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import img1 from "@/public/cardTwo.jpg";
import { PinContainer } from "./ui/3d-pin";
import { CardSpotlight } from "./ui/card-spotlight";
import GradientCard from "./gradientCard";

interface cardData {
  title: string;
  discription?: string;
  image?: StaticImageData | string;
  url: string;
}
export function PinCard({ title, discription, image, url }: cardData) {
  return (
    <PinContainer title={title} href={url}>
      <div className="w-[300px] h-[350px]  py-2 rounded-xl">
        <h1 className="font-bold my-2 text-xl">{title}</h1>

        <Image
          src={image ? image : img1}
          alt={""}
          className="rounded-2xl mx-auto"
        ></Image>
        <p className="my-2">{discription}</p>
      </div>
    </PinContainer>
  );
}
