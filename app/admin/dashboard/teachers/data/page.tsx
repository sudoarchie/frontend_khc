"use client";
import TableField from "@/app/components/TableField";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

export default function Teacher() {
  const [table, setTable] = useState([]);
  const { data, isLoading, error } = useQuery({
    queryKey: ["TeacherData"],
    queryFn: async () => {
      const response = await axios({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/teacher/all`,
        method: "get",
        params: {
          take: 30,
        },
        withCredentials: true,
      });
      console.log(response.data.data);

      // Flatten each entry to include only necessary fields directly
      const formattedData = response.data.data.map((info: any) => ({
        id: info.id,
        name: info.name,
        email: info.email,
        mobileNo: info.mobileNo,
        profileLink: `${process.env.NEXT_PUBLIC_BASE_URL}/teacher/${info.id}`,
      }));

      setTable(formattedData);

      return response.data.data;
    },
  });

  return (
    <div>
      <TableField rows={table} className="mt-5" />
    </div>
  );
}
