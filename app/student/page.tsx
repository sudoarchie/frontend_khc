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

export default function Page() {
  const dashboardData = [
    {
      title: "Total Number of Student",
      data: 3423,
      image: img2,
    },
    {
      title: "Total Number of Teacher",
      data: 423,
      image: img1,
    },
    {
      title: "Total Number of Teacher",
      data: 423,
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

  const data = [];
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
      <div className="mt-5">
        <h1 className="text-3xl font-semibold">Latest Uploads</h1>
        <h2 className="text-gray-600 mb-5">All latest video uploaded </h2>
        <div className="flex flex-wrap justify-center items-center gap-5">
          {VideoData.map((info, index) => (
            <VideoCard
              title={info.title}
              href={info.href}
              image={info.image}
              key={index}
            ></VideoCard>
          ))}
        </div>
        <PrimaryButton
          Name={"Watch More"}
          className="mx-auto mt-5"
        ></PrimaryButton>
      </div>
    </div>
  );
}
