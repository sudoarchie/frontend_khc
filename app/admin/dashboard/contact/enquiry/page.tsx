"use client";
import { Error } from "@/app/components/error";
import Loader from "@/app/components/Loading";
import TableField from "@/app/components/TableField";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
interface Data {
  email: string;
  mobileNo: string;
  message: string;
}
export default function Enquiry() {
  const { data, isLoading, error } = useQuery<Data[]>({
    queryKey: ["enquire"],
    queryFn: async () => {
      const response = await axios({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/enquiry/`,
        method: "GET",
        params: {
          take: 30,
        },
      });
      return response.data.data;
    },
  });
  if (isLoading) return <Loader></Loader>;
  if (error) return <Error></Error>;

  return (
    <div className="m-5">
      <table className="w-full">
        <thead className="bg-blue-600 text-white  h-16">
          <tr>
            <th>Email</th>
            <th>Mobile No</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item: Data) => (
            <tr className="border-b border-gray-200 text-center h-16">
              <td>{item.email}</td>
              <td>{item.mobileNo}</td>
              <td className="text-wrap">{item.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
