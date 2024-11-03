"use client";
import { useQuery } from "@tanstack/react-query";
import { CardThree } from "../components/CardThree";
import GradientCard from "../components/gradientCard";
import axios from "axios";
import Loader from "../components/Loading";
import { Error } from "../components/error";
interface responseData {
  id: string;
  name: string;
  description: string;
  logoUrl: string;
}
export default function Courses() {
  const { data, isLoading, error } = useQuery<responseData[]>({
    queryKey: ["curriculum"],
    queryFn: async () => {
      const response = await axios({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/curriculum/data`,
        method: "get",
      });
      console.log(response.data.data.data);
      return response.data.data.data;
    },
  });
  if (isLoading) {
    return <Loader></Loader>;
  }
  if (error) {
    return <Error></Error>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-5">Our Courses</h1>
      <div className="m-5 flex flex-wrap gap-5 justify-center">
        {data?.map((info, index) => (
          <GradientCard key={index}>
            <CardThree
              title={info.name}
              discription={info.description}
              image={info.logoUrl}
              url={"/"}
              key={index}
            ></CardThree>
          </GradientCard>
        ))}
      </div>
    </div>
  );
}
