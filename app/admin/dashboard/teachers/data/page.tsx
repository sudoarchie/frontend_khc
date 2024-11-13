"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

interface TeacherData {
  id: string;
  name: string;
  email: string;
  mobileNo: string;
  profileLink: string;
}

export default function Teacher() {
  const [table, setTable] = useState<TeacherData[]>([]);

  const { data, isLoading, error } = useQuery({
    queryKey: ["TeacherData"],
    queryFn: async (): Promise<TeacherData[]> => {
      const response = await axios({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/teacher/all`,
        method: "get",
        params: {
          take: 30,
        },
        withCredentials: true,
      });

      const formattedData = response.data.data.map((info: any) => ({
        id: info.id,
        name: info.name,
        email: info.email,
        mobileNo: info.mobileNo,
        profileLink: `/admin/dashboard/teachers/${info.id}`,
      }));

      setTable(formattedData);

      return formattedData;
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data.</p>;

  return (
    <div className="overflow-x-auto mt-5">
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Mobile No
            </th>
            <th className="px-6 py-3 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Profile
            </th>
          </tr>
        </thead>
        <tbody>
          {table.map((row) => (
            <tr key={row.id}>
              <td className="px-6 py-4 border-b text-sm text-gray-700">
                {row.id}
              </td>
              <td className="px-6 py-4 border-b text-sm text-gray-700">
                {row.name}
              </td>
              <td className="px-6 py-4 border-b text-sm text-gray-700">
                {row.email}
              </td>
              <td className="px-6 py-4 border-b text-sm text-gray-700">
                {row.mobileNo}
              </td>
              <td className="px-6 py-4 border-b text-sm text-blue-500">
                <a
                  href={row.profileLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Profile
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
