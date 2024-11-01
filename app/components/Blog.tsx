"use client";
import { useQuery } from "@tanstack/react-query";
import { PinCard } from "./PinCard";
import axios from "axios";
import Loader from "./Loading";
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

      // Check for a successful response
      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }

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
    return <div>Error: {error.message}</div>; // Handle error state
  }
  return (
    <div className="flex flex-wrap justify-center gap-y-20 my-20">
      {data?.map((info, index) => (
        <PinCard
          title={info.title}
          image={info.url}
          discription={info.description}
          key={index}
          url={`/blog/${info.id}`}
        ></PinCard>
      ))}
    </div>
  );
}
