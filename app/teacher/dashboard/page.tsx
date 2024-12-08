'use client'
import { DashboardCard } from "@/app/components/DashboardCard";
import { Error } from "@/app/components/error";
import Loader from "@/app/components/Loading";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function Page() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["teacherDashboard"],
    queryFn: async () => {
      const response = await axios({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/teacher/dashboard`,
        method: "get",
        withCredentials: true,
      });
      console.log(response.data);
      return response.data;
    },
  });

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
        dataNumber={data.data}
      ></DashboardCard>

    </div>
  );
}
