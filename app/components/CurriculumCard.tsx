import { useQuery } from "@tanstack/react-query";
import { PinCard } from "./PinCard";
import { useState } from "react";
import Loader from "./Loading";

interface CurriculumItem {
  name: string;
  description: string;
  url: string;
  logoUrl: string;
}

export function CurriculumCard() {
  const { data, isLoading, error } = useQuery<CurriculumItem[]>({
    queryKey: ["curriculum"],
    queryFn: async () => {
      const response = await fetch(
        "http://localhost:3000/api/v1/curriculum/data"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      return result.data.data;
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
    <div className="my-20 mb-20 flex flex-wrap w-[95%] md:w-[90%] gap-y-20 mx-auto justify-center">
      {data?.map((info: CurriculumItem, index: number) => (
        <PinCard
          title={info.name}
          discription={info.description}
          url={info.url}
          image={info.logoUrl}
          key={index}
        />
      ))}
    </div>
  );
}
