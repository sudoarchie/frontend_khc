import Image, { StaticImageData } from "next/image";
import { PrimaryButton } from "./PrimaryButton";
import img1 from "@/public/faq-main 1.png";

interface Banner {
  Heading: string;
  discription?: string;
  btnOne?: string;
  btnTwo?: string;
  image: HTMLImageElement | StaticImageData;
}
export function Banner({
  Heading,
  discription,
  image,
  btnOne,
  btnTwo,
}: Banner) {
  return (
    <div className="w-full h-[300px]">
      <Image
        src={image}
        alt={""}
        className="w-[95%] h-full object-cover brightness-[0.25] mx-auto rounded-2xl"
      ></Image>
      <div className="relative text-white top-[-80%] sm:left-[50px] xl:left-[150px] flex">
        <div className="w-full lg:w-1/2">
          <h1 className=" font-bold text-4xl">{Heading}</h1>
          <p>{discription}</p>
          <div className="flex  gap-5 my-5 xl:my-16">
            {btnOne ? <PrimaryButton Name={btnOne}></PrimaryButton> : <></>}

            {btnTwo ? <PrimaryButton Name={btnTwo}></PrimaryButton> : <></>}
          </div>
        </div>
        <div className="w-1/2">
          <Image
            src={img1}
            alt={""}
            className="w-[300px] hidden lg:block relative md:left-5 lg:left-16 2xl:left-40"
          ></Image>
        </div>
      </div>
    </div>
  );
}
