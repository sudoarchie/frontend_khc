"use client";
import { Error } from "@/app/components/error";
import Loader from "@/app/components/Loading";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
interface DataEntry {
  id: string;
  curriculum: {
    name: string;
  };
  country: {
    name: string;
  };
}

export default function CountryWiseSubject() {
  const country = ["india", "denmark", "china", "Russia"];
  const { data, isLoading, error } = useQuery<DataEntry[]>({
    queryKey: ["countrywiseCurriculum"],
    queryFn: async () => {
      const response = await axios({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/country/all`,
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
    return <Error></Error>;
  }
  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold leading-tight">Data Table</h2>
        </div>
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full leading-normal">
            <thead>
              <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">ID</th>
                <th className="py-3 px-6 text-left">Curriculum</th>
                <th className="py-3 px-6 text-left">Country</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {data?.map((entry: DataEntry) => (
                <tr
                  key={entry.id}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="font-medium">{entry.id}</span>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-left">
                    <div className="flex items-center">
                      <span>{entry.curriculum.name}</span>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-left">
                    <div className="flex items-center">
                      <span>{entry.country.name}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
