import React from "react";
import Link from "next/link";
import { cookies } from "next/headers";

// Define the types for the props
interface SidebarItem {
  href: string;
  label: string;
  icon: React.ReactNode;
}

interface SidebarSectionProps {
  title: string;
  items: SidebarItem[];
}

interface SidebarProps {
  sidebarData: {
    title: string;
    items: SidebarItem[];
  }[];
}

// SidebarSection component
const SidebarSection: React.FC<SidebarSectionProps> = ({ title, items }) => (
  <>
    <div className="text-sm font-bold">{title}</div>
    {items.map((item, index) => (
      <Link href={item.href} key={index}>
        <div
          role="button"
          className="flex items-center w-full p-3 leading-tight transition-all rounded-full outline-none text-start hover:bg-secondary/20 hover:bg-opacity-80 hover:text-secondary focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-secondary/80 active:bg-opacity-80 active:text-secondary"
        >
          <div className="grid mr-4 place-items-center">{item.icon}</div>
          {item.label}
        </div>
      </Link>
    ))}
    {title !== "Other" && <hr />}
    <Link
      href={"../"}
      onClick={() => {
        document.cookie = `studenttoken=; admintoken=; teachertoken=; path=/; expires=${new Date(
          0
        ).toUTCString()}`;
      }}
    >
      <div
        role="button"
        className="flex items-center w-full p-3 leading-tight transition-all rounded-full outline-none text-start hover:bg-secondary/20 hover:bg-opacity-80 hover:text-secondary focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-secondary/80 active:bg-opacity-80 active:text-secondary"
      >
        <div className="grid mr-4 place-items-center">
          {" "}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.4 17L12 13.4L15.6 17L17 15.6L13.4 12L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4L10.6 12L7 15.6L8.4 17ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
              fill="#49454F"
            />
          </svg>
        </div>
        Sign Out
      </div>
    </Link>
  </>
);

// Sidebar component
export const Sidebar: React.FC<SidebarProps> = ({ sidebarData }) => (
  <div className="relative flex h-screen w-full max-w-[20rem] flex-col rounded-xl bg-white bg-clip-border p-4 text-gray-700 shadow-xl shadow-blue-gray-900/5">
    <div className="p-4 mb-2">
      <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
        KHC Online Education
      </h5>
    </div>
    <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
      {sidebarData.map((section, index) => (
        <SidebarSection
          key={index}
          title={section.title}
          items={section.items}
        />
      ))}
    </nav>
  </div>
);
