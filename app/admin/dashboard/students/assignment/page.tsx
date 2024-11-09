"use client";
import TableField from "@/app/components/TableField";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";

export default function Assignment() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Assignment"],
    queryFn: async () => {
      const response = await axios({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/assignment/all`,
        method: "get",
        withCredentials: true,
        params: {
          take: 30,
        },
      });
      console.log(response.data.data);
      return response.data.data;
    },
  });

  return (
    <div>
      <TableField className="my-5" rows={data}></TableField>
    </div>
  );
}
