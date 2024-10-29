"use client";
import { useQuery } from "@tanstack/react-query";
import { PinCard } from "./PinCard";
import { useState } from "react";
import Loader from "./Loading";
import axios from "axios";

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
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/curriculum/data`
      );

      // Check for a successful response
      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }

      const result = response.data;
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
