"use client";
import { useQuery } from "@tanstack/react-query";
import { VideoCard } from "../components/videoCard";
import axios from "axios";
import Loader from "../components/Loading";
interface VideoSchema {
  id: string;
  name: string;
  discription: string;
  url: string;
}
export default function Videos() {
  const { data, isLoading, error } = useQuery<VideoSchema[]>({
    queryKey: ["video"],
    queryFn: async () => {
      const response = await axios({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/video?take=15&skip=0`,
        method: "get",
      });
      console.log(response.data.data);
      return response.data.data;
    },
  });
  if (isLoading) {
    return <Loader></Loader>;
  }
  if (error) {
    return <div>Error</div>;
  }
  return (
    <div>
      <h1 className="text-center font-bold text-4xl my-5">More Videos</h1>
      <div className="flex flex-wrap gap-5 justify-center w-[90%] mx-auto">
        {data?.map(({ id, name, url }) => (
          <VideoCard title={name} href={url} key={id} />
        ))}
      </div>
    </div>
  );
}
