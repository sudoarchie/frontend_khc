import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import img1 from "@/public/cardTwo.jpg";
import { PinContainer } from "./ui/3d-pin";
import { CardSpotlight } from "./ui/card-spotlight";
import GradientCard from "./gradientCard";

interface cardData {
  title: string;
  discription?: string;
  image?: string;
  url: string;
}
export function PinCard({ title, discription, image, url }: cardData) {
  return (
    <PinContainer title={title} href={url}>
      <div className="w-[300px] h-[360px]  rounded-xl">
        <h1 className="font-bold mb-1 text-xl">{title}</h1>

        <Image
          src={image || img1}
          alt={`${title} Logo`}
          width={300}
          height={200}
          className="rounded-2xl mx-auto w-[250px] aspect-square"
        ></Image>
        <p className="my-2 line-clamp-2">{discription}</p>
      </div>
    </PinContainer>
  );
}
