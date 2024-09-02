import { Sidebar } from "@/app/components/SideBar";

import { NavbarThird } from "../../components/NavbarThird";
import { Breadcrumb } from "@/app/components/Breadcrumbs";
import { SectionHeader } from "@/app/components/SectionHeader";

export default function AdminPanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <NavbarThird></NavbarThird>
      <div className="flex">
        <Sidebar></Sidebar>
        <div className="w-full">
          <div className="mx-4">
            <SectionHeader></SectionHeader>
            <Breadcrumb></Breadcrumb>
          </div>
          <div className="w-full">{children}</div>
        </div>
      </div>
    </div>
  );
}
