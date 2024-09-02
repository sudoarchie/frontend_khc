import { Breadcrumb } from "@/app/components/Breadcrumbs";
import { DashboardCard } from "@/app/components/DashboardCard";
import { NavbarSec } from "@/app/components/NavbarSecoundary";
import { NavbarThird } from "@/app/components/NavbarThird";
import { Sidebar } from "@/app/components/SideBar";

export default function Page() {
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
  return (
    <div className="w-full flex gap-5 m-14">
      {dashboardData.map((info, index) => (
        <DashboardCard
          title={info.title}
          key={index}
          dataNumber={info.data}
        ></DashboardCard>
      ))}
    </div>
  );
}
