"use client";
import { useQuery } from "@tanstack/react-query";
import { PinCard } from "./PinCard";
import axios from "axios";
import Loader from "./Loading";
import { Error } from "./error";
interface BlogItem {
  id: string;
  title: string;
  description: string;
  url: string;
}
export default function BlogComponent() {
  const { data, isLoading, error } = useQuery<BlogItem[]>({
    queryKey: ["Blog", { take: 10 }],
    queryFn: async () => {
      const response = await axios({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
        params: { take: 10 },
      });

      const result = response.data;
      console.log(result);
      return result.data;
    },
  });
  if (isLoading) {
    return (
      <div>
        <Loader></Loader>
      </div>
    ); // Handle loading state
  }

  if (error) {
    return <Error></Error>;
  }
  return (
    <div className="flex flex-wrap justify-center gap-y-20 my-20">
      {data?.map((info, index) => (
        <PinCard
          title={info.title}
          image={info.url}
          discription={info.description}
          key={index}
          url={`/blogs/${info.id}`}
        ></PinCard>
      ))}
    </div>
  );
}
