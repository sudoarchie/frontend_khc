"use client";
import Image from "next/image";
import img from "@/public/download.png";
import { PrimaryButton } from "../components/PrimaryButton";
import { PinCard } from "../components/PinCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "../components/Loading";

interface BlogData {
  id: string;
  title: string;
  description: string;
  url: string;
}

export default function Blogs() {
  const { data, isLoading, error } = useQuery<BlogData[]>({
    queryKey: ["blog"],
    queryFn: async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/blog/?take=15`,
      );
      return response.data.data;
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error fetching blogs. Please try again later.</div>;
  }

  const pinBlog = data ? data.slice(0, 1) : [];
  const remainingBlog = data ? data.slice(1) : [];

  return (
    <div className="mt-10">
      {pinBlog.length > 0 && (
        <div className="w-[90%] h-[400px] mx-auto rounded-xl border-[2px] border-borderColor flex p-10">
          <Image
            src={img}
            alt="blog"
            className="rounded-lg object-cover w-1/2"
          />
          <div className="w-1/2">
            <h1 className="font-bold text-3xl">{pinBlog[0].title}</h1>
            <p className="h-[220px] truncate text-wrap text-justify text-gray-700 mt-5">
              {pinBlog[0].description}
            </p>
            <PrimaryButton Name="Read More" className="mt-2" />
          </div>
        </div>
      )}
      <div className="flex flex-wrap justify-center gap-y-24 my-20">
        {remainingBlog.map((info, index) => (
          <PinCard
            key={index}
            title={info.title}
            discription={info.description}
            image={info.url}
            url={info.url}
          />
        ))}
      </div>
    </div>
  );
}
