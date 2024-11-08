"use client";
import { DashboardCard } from "@/app/components/DashboardCard";
import { Error } from "@/app/components/error";
import Loader from "@/app/components/Loading";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function Page() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["AdminDashboard"],
    queryFn: async () => {
      const response = await axios({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/admin/dashboard`,
        method: "get",
        withCredentials: true,
      });
      console.log(response.data.data);
      return response.data.data;
    },
  });
  const dashboardData = [
    {
      title: "Total Number of Student",
      data: 3423,
    },
    {
      title: "Total Number of Teacher",
      data: 423,
    },
  ];
  if (isLoading) {
    return <Loader></Loader>;
  }
  if (error) {
    return <Error></Error>;
  }
  return (
    <div className="w-full flex flex-wrap justify-left items-center gap-5 m-14">
      <DashboardCard
        title={"Number of student"}
        dataNumber={data.NumberOfStudent}
      ></DashboardCard>
      <DashboardCard
        title={"Number of Teacher"}
        dataNumber={data.NumberOfTeacher}
      ></DashboardCard>
      <DashboardCard
        title={"Number of Courses"}
        dataNumber={data.NumberOfCourses}
      ></DashboardCard>
      <DashboardCard
        title={"Number of Blog"}
        dataNumber={data.NumberOfBlog}
      ></DashboardCard>
      <DashboardCard
        title={"Number of Assignment"}
        dataNumber={data.NumberOfAssignment}
      ></DashboardCard>
      <DashboardCard
        title={"Number of General Videos"}
        dataNumber={data.NumberOfGeneralVideo}
      ></DashboardCard>
      <DashboardCard
        title={"Number of General Videos"}
        dataNumber={data.NumberOfMasterClassVideos}
      ></DashboardCard>
    </div>
  );
}
