import Image, { StaticImageData } from "next/image";
import img from "@/public/Untitled design.png";
import Link from "next/link";
import GradientCard from "./gradientCard";
interface video {
  image?: StaticImageData | string;
  title: string;
  href?: string;
}
export function VideoCard({ image, title, href }: video) {
  return (
    <GradientCard>
      <Link
        className="w-[350px] h-[290px] border-solid border-[2px] border-borderColor rounded-2xl overflow-hidden group"
        href={href || ""}
      >
        <Image
          src={image || img}
          alt="thumbnail"
          width={0}
          height={0}
          sizes="100vw"
          className="group-hover:scale-95 transition-transform duration-200 w-[95%] mx-auto mt-2 rounded-2xl"
        />

        <div className="p-4">
          <h2 className="font-bold text-lg text-zinc-700 group-hover:scale-95 transition-transform duration-200 ">
            {title}
          </h2>
        </div>
      </Link>
    </GradientCard>
  );
}
