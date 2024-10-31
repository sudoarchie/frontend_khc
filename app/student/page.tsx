"use client";
import { Breadcrumb } from "@/app/components/Breadcrumbs";
import { DashboardCard } from "@/app/components/DashboardCard";
import { NavbarSec } from "@/app/components/NavbarSecoundary";
import { NavbarThird } from "@/app/components/NavbarThird";
import { Sidebar } from "@/app/components/SideBar";
import img from "@/public/Frame 97 (1).png";
import img1 from "@/public/Frame 97 (2).png";
import img2 from "@/public/Frame 97.png";
import { VideoCard } from "../components/videoCard";
import { PrimaryButton } from "../components/PrimaryButton";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "../components/Loading";
import { StaticImageData } from "next/image";
import { Key } from "react";
import Link from "next/link";

export default function Page() {
  const { data, isLoading, error } = useQuery({
    queryKey: [`DashboardData`],
    queryFn: async () => {
      const data = await axios({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/student/dashboarddata`,
        method: "get",
        withCredentials: true,
      });

      return data.data.data;
    },
  });
  const videoData = useQuery({
    queryKey: [`generalvideo`],
    queryFn: async () => {
      const data = await axios({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/video?take=15&skip=0`,
        method: "get",
        withCredentials: true,
      });
      return data.data.data;
    },
  });
  console.log(videoData.data);
  if (isLoading) {
    return <Loader></Loader>;
  }
  if (error) {
    return <div> error</div>;
  }
  console.log(data);
  const dashboardData = [
    {
      title: "Course Enrolled",
      data: data.enrollment,
      image: img2,
    },
    {
      title: "Number of Assignment",
      data: data.Assignment,
      image: img1,
    },
    {
      title: "Average Assignment Marks",
      data: data.testmarks || 0,
      image: img,
    },
  ];

  const VideoData = [
    {
      title: "Terraform Course - Automate your AWS cloud infrastructure",
      href: "https://www.youtube.com/watch?v=SLB_c_ayRMo",
      image:
        "https://i.ytimg.com/vi/SLB_c_ayRMo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAqHLXrmXXHVTjWsI9BDYCqAMcpIA",
    },
    {
      title: "Terraform Course - Automate your AWS cloud infrastructure",
      href: "https://www.youtube.com/watch?v=SLB_c_ayRMo",
      image:
        "https://i.ytimg.com/vi/SLB_c_ayRMo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAqHLXrmXXHVTjWsI9BDYCqAMcpIA",
    },
    {
      title: "Terraform Course - Automate your AWS cloud infrastructure",
      href: "https://www.youtube.com/watch?v=SLB_c_ayRMo",
      image:
        "https://i.ytimg.com/vi/SLB_c_ayRMo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAqHLXrmXXHVTjWsI9BDYCqAMcpIA",
    },
    {
      title: "Terraform Course - Automate your AWS cloud infrastructure",
      href: "https://www.youtube.com/watch?v=SLB_c_ayRMo",
      image:
        "https://i.ytimg.com/vi/SLB_c_ayRMo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAqHLXrmXXHVTjWsI9BDYCqAMcpIA",
    },
    {
      title: "Terraform Course - Automate your AWS cloud infrastructure",
      href: "https://www.youtube.com/watch?v=SLB_c_ayRMo",
      image:
        "https://i.ytimg.com/vi/SLB_c_ayRMo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAqHLXrmXXHVTjWsI9BDYCqAMcpIA",
    },
    {
      title: "Terraform Course - Automate your AWS cloud infrastructure",
      href: "https://www.youtube.com/watch?v=SLB_c_ayRMo",
      image:
        "https://i.ytimg.com/vi/SLB_c_ayRMo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAqHLXrmXXHVTjWsI9BDYCqAMcpIA",
    },
  ];

  return (
    <div className="w-full flex flex-wrap gap-5 m-14">
      {dashboardData.map((info, index) => (
        <DashboardCard
          title={info.title}
          key={index}
          dataNumber={info.data}
          image={info.image}
        ></DashboardCard>
      ))}
      <div className="mt-5 w-full">
        <h1 className="text-3xl font-semibold">Latest Uploads</h1>
        <h2 className="text-gray-600 mb-5 w-full">
          All latest video uploaded{" "}
        </h2>
        <div className="flex flex-wrap  items-center gap-5">
          {videoData.data.map(
            (
              info: {
                name: string;
                url: string | undefined;
                image: string | StaticImageData | undefined;
              },
              index: Key | null | undefined
            ) => (
              <VideoCard
                title={info.name}
                href={info.url}
                image={info.image}
                key={index}
              ></VideoCard>
            )
          )}
        </div>
        <Link href={"../videos"}>
          <PrimaryButton
            Name={"Watch More"}
            className="mx-auto mt-5"
          ></PrimaryButton>
        </Link>
      </div>
    </div>
  );
}
