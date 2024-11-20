"use client";

import { useState } from "react";
import {
  CalendarIcon,
  EnvelopeClosedIcon,
  PersonIcon,
  HomeIcon,
} from "@radix-ui/react-icons";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface TeacherSubject {
  subject: { name: string };
}

interface Student {
  name: string;
}

interface Enrollment {
  student: Student;
}

interface UserProfileProps {
  id: string;
  name: string;
  email: string;
  mobileNo: string;
  teacherSubjects: TeacherSubject[];
  enrollments: Enrollment[];
  createdAt: string;
}

export default function Component({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState<string>("about");

  const { data, isLoading, error } = useQuery<UserProfileProps>({
    queryKey: ["TeacherId", params.id],
    queryFn: async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/teacher/get`,
        { params: { id: params.id }, withCredentials: true }
      );
      // Convert the `Enrollment` field to lowercase `enrollments` in the response
      const apiData = response.data.response;
      return {
        ...apiData,
        enrollments: apiData.Enrollment,
      };
    },
    enabled: !!params.id,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading profile</div>;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header/Cover Photo */}
      <div className="h-64 bg-gradient-to-r from-blue-500 to-purple-500"></div>

      {/* Profile Information */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
          <div className="flex">
            <img
              className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
              src={`https://api.dicebear.com/6.x/initials/svg?seed=${data?.name}`}
              alt={data?.name}
            />
          </div>
          <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
            <div className="sm:hidden md:block mt-6 min-w-0 flex-1">
              <h1 className="text-2xl font-bold text-gray-900 truncate">
                {data?.name}
              </h1>
            </div>
          </div>
        </div>
        <div className="hidden sm:block md:hidden mt-6 min-w-0 flex-1">
          <h1 className="text-2xl font-bold text-gray-900 truncate">
            {data?.name}
          </h1>
        </div>
      </div>

      {/* Tabs and Content */}
      <div className="mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {["about", "subjects", "students"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`${
                  activeTab === tab
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm capitalize`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {activeTab === "about" && (
          <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-6">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Profile Information
              </h3>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
              <dl className="sm:divide-y sm:divide-gray-200">
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500 flex items-center">
                    <PersonIcon className="mr-2 h-4 w-4" />
                    Full name
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {data?.name}
                  </dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500 flex items-center">
                    <EnvelopeClosedIcon className="mr-2 h-4 w-4" />
                    Email address
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {data?.email}
                  </dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500 flex items-center">
                    <HomeIcon className="mr-2 h-4 w-4" />
                    Phone number
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {data?.mobileNo}
                  </dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500 flex items-center">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    Member since
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {/* Placeholder for member since date */}
                    {data?.createdAt}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        )}

        {activeTab === "subjects" && (
          <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-6">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Subjects Taught
              </h3>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
              <div className="py-4 sm:py-5 sm:px-6">
                <div className="flex flex-wrap gap-2">
                  {data?.teacherSubjects.map((ts, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                    >
                      {ts.subject.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "students" && (
          <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-6">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Enrolled Students
              </h3>
            </div>
            <ul className="border-t border-gray-200 divide-y divide-gray-200">
              {data?.enrollments?.map((enrollment, index) => (
                <li key={index} className="px-4 py-4 sm:px-6 flex items-center">
                  <img
                    className="h-10 w-10 rounded-full mr-4"
                    src={`https://api.dicebear.com/6.x/initials/svg?seed=${enrollment.student.name}`}
                    alt={enrollment.student.name}
                  />
                  <span className="text-sm font-medium text-gray-900">
                    {enrollment.student.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
