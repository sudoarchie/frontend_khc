"use client";
import { Error } from "@/app/components/error";
import Loader from "@/app/components/Loading";
import TableField from "@/app/components/TableField";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";

export default function Student() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["StudentData"],
    queryFn: async () => {
      const response = await axios({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/student/data`,
        params: {
          take: 10,
        },
        method: "get",
        withCredentials: true,
      });
      console.log(response.data.data);
      return response.data.data;
    },
    select: (data) =>
      data.map(
        (info: {
          id: string;
          name: string;
          email: string;
          mobileNo: number;
          country: string;
          Enrollment: {
            subject: { name: string };
            teacher: { name: string };
          }[];
          grade: { name: string; curriculum: { name: string } };
          createdAt: string | number | Date;
        }) => ({
          id: info.id,
          name: info.name,
          email: info.email,
          mobileNo: info.mobileNo,
          country: info.country,
          gradeName: info.grade?.name,
          curriculumName: info.grade?.curriculum?.name,
          createdAt: new Date(info.createdAt).toLocaleDateString(),
          subjects: info.Enrollment.map((enrollment) => {
            return enrollment.subject.name + " | ";
          }), // Extract subjects
          teachers: info.Enrollment.map((enrollment) => {
            return enrollment.teacher.name + ` | `;
          }),
        })
      ),
  });
  if (isLoading) {
    <Loader></Loader>;
  }
  if (error) {
    <Error></Error>;
  }
  return (
    <div>
      <TableField className="my-5" rows={data}></TableField>
    </div>
  );
}
