"use client";
import AssignmentCard from "@/app/components/AssignmentCard";
import { Error } from "@/app/components/error";
import Loader from "@/app/components/Loading";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function AssignmentDetails({
  params,
}: {
  params: { id: string };
}) {
  const students = [
    { id: 1, name: "John Doe", status: "Submitted", pdfUrl: "something" },
    { id: 2, name: "Jane Smith", status: "Pending", pdfUrl: "some" },
    { id: 3, name: "Sam Wilson", status: "Submitted", pdfUrl: "hsdfk" },
  ];
  const { data, isLoading, error } = useQuery({
    queryKey: ["AssingmentDetails", { params }],
    queryFn: async () => {
      const response = await axios({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/assignment/details`,
        params: {
          take: 10,
          id: params.id,
        },
        withCredentials: true,
      });
      console.log(response.data.response);
      return response.data.response;
    },
  });
  if (!params) {
    return (
      <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
        No Params found for Assignment
      </div>
    );
  }
  if (isLoading) {
    return <Loader></Loader>;
  }
  if (error) {
    return <Error></Error>;
  }
  return (
    <div>
      <div className="p-4">
        <AssignmentCard
          assignmentTitle={data.name}
          pdfUrl={data.url}
          students={data.studentAssignment}
          description={""}
          subject={""}
        />
      </div>
    </div>
  );
}
