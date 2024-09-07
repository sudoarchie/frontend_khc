import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import img1 from "@/public/cardTwo.jpg";

interface cardData {
  title: string;
  discription?: string;
  image?: StaticImageData;
  url: string;
}
export function CardTwo({ title, discription, image, url }: cardData) {
  return (
    <Link
      className="flex flex-col w-[300px] h-[350px] group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg focus:outline-none focus:shadow-lg transition "
      href={url}
    >
      <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden ">
        <Image
          className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl "
          src={image || img1}
          alt="Card Image"
        ></Image>
      </div>
      <div className="px-4 md:px-5 py-2">
        <h3 className="text-lg font-bold text-gray-800 ">{title}</h3>
        {discription ? (
          <p className="mt-1 text-gray-500 ">
            {discription.split(" ").slice(0, 5).join(" ")}...
          </p>
        ) : (
          <></>
        )}
      </div>
    </Link>
  );
}
