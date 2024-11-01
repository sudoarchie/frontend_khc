"use client";
import { Sidebar } from "@/app/components/SideBar";

import { NavbarThird } from "../components/NavbarThird";
import { Breadcrumb } from "@/app/components/Breadcrumbs";
import { SectionHeader } from "@/app/components/SectionHeader";
import { validateToken } from "@/utils/studentLoginValidate";
import { useRouter } from "next/navigation";

export default function AdminPanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const sidebarData = [
    {
      title: "Student",
      items: [
        {
          href: "/student",
          label: "Dashboard",
          icon: (
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 18C1.45 18 0.975 17.8083 0.575 17.425C0.191667 17.025 0 16.55 0 16V2C0 1.45 0.191667 0.983334 0.575 0.600001C0.975 0.2 1.45 0 2 0H16C16.55 0 17.0167 0.2 17.4 0.600001C17.8 0.983334 18 1.45 18 2V16C18 16.55 17.8 17.025 17.4 17.425C17.0167 17.8083 16.55 18 16 18H2ZM9 13C9.63333 13 10.2083 12.8167 10.725 12.45C11.2417 12.0833 11.6 11.6 11.8 11H16V2H2V11H6.2C6.4 11.6 6.75833 12.0833 7.275 12.45C7.79167 12.8167 8.36667 13 9 13Z"
                fill="#007867"
              />
            </svg>
          ),
        },
        {
          href: "/student/joinclass",
          label: "Join Class",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-paperclip"
            >
              <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
            </svg>
          ),
        },
        {
          href: "/student/worksheet",
          label: "Worksheets",
          icon: (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 20C3.45 20 2.97917 19.8042 2.5875 19.4125C2.19583 19.0208 2 18.55 2 18V6C2 5.45 2.19583 4.97917 2.5875 4.5875C2.97917 4.19583 3.45 4 4 4H10L12 6H20C20.55 6 21.0208 6.19583 21.4125 6.5875C21.8042 6.97917 22 7.45 22 8V18C22 18.55 21.8042 19.0208 21.4125 19.4125C21.0208 19.8042 20.55 20 20 20H4Z"
                fill="#625B71"
              />
            </svg>
          ),
        },
        // {
        //   href: "/student/Announcement",
        //   label: "Annoucement",
        //   icon: (
        //     <svg
        //       xmlns="http://www.w3.org/2000/svg"
        //       width="20"
        //       height="20"
        //       viewBox="0 0 24 24"
        //       fill="none"
        //       stroke="currentColor"
        //       stroke-width="2"
        //       stroke-linecap="round"
        //       stroke-linejoin="round"
        //       className="lucide lucide-bell"
        //     >
        //       <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
        //       <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
        //     </svg>
        //   ),
        // },
      ],
    },
  ];

  async function checkValidation() {
    const validatedToken = await validateToken(); // Wait for Validate to complete
    console.log(validatedToken);

    if (!validatedToken) {
      router.push("/login");
    }
  }

  checkValidation();
  return (
    <div className="overflow-x-hidden">
      <div className="flex">
        <Sidebar sidebarData={sidebarData}></Sidebar>

        <div className="w-full overflow-y-scroll">
          <div className="mx-4">
            <SectionHeader></SectionHeader>
            <Breadcrumb></Breadcrumb>
          </div>
          <div className="w-full ">{children}</div>
        </div>
      </div>
    </div>
  );
}
