"use client";
import Image from "next/image";
import { PrimaryButton } from "../components/PrimaryButton";
import { PinCard } from "../components/PinCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "../components/Loading";
import { Error } from "../components/error";
import Link from "next/link";
import SimpleCard from "../components/SimpleCard";

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
        `${process.env.NEXT_PUBLIC_BASE_URL}/blog/?take=15`
      );
      return response.data.data;
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error></Error>;
  }

  const pinBlog = data ? data.slice(0, 1) : [];
  const remainingBlog = data ? data.slice(1) : [];

  return (
    <div className="mt-10">
      {pinBlog.length > 0 && (
        <div
          className="w-[90%] h-[500px] mx-auto rounded-xl border-[2px]
      bg-blue-50  border-borderColor flex p-10 justify-center items-center"
        >
          <Image
            src={pinBlog[0].url}
            width={400}
            height={400}
            alt="blog"
            className="rounded-lg object-cover w-1/2 scale-90 h-[400px]"
          />
          <div className="w-1/2 justify-center items-center">
            <h1 className="font-bold text-3xl">{pinBlog[0].title}</h1>
            <p className="max-h-[200px] truncate text-wrap text-justify text-gray-700 mt-5">
              {pinBlog[0].description}
            </p>
            <Link href={`/blogs/${pinBlog[0].id}`}>
              <PrimaryButton Name="Read More" className="mt-5" />
            </Link>
          </div>
        </div>
      )}
      <div className="flex flex-wrap justify-center gap-y-24 my-20">
        {remainingBlog.map((info, index) => (
          <SimpleCard
            key={info.id}
            id={info.id}
            title={info.title}
            description={info.description}
            url={info.url}
            link={`/blogs/${info.id}`}
          />
        ))}
      </div>
    </div>
  );
}
