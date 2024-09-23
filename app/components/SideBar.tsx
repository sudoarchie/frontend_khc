import React from "react";
import Link from "next/link";

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
