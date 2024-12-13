"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Student {
  name: string;
}

interface Subject {
  name: string;
}

interface DataItem {
  student: Student;
  subject: Subject;
  videoAllow: boolean;
  timing: string;
  enrollmentDate: string;
}

const StudentDataTable: React.FC = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["StudentDataforTeacher"],
    queryFn: async () => {
      const response = await axios({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/enroll/studentlist`,
        withCredentials: true,
        method: "get",
      });
      return response.data.data;
    },
  });

  if (isLoading) {
    return <div className="p-4">Loading...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">Error loading data</div>;
  }

  if (!data) {
    return <div className="p-4">No data available</div>;
  }

  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-lg">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Student Name</th>
            <th className="py-3 px-6 text-left">Subject</th>
            <th className="py-3 px-6 text-center">Video Allowed</th>
            <th className="py-3 px-6 text-center">Timing</th>
            <th className="py-3 px-6 text-center">Enrollment Date</th>
            <th className="py-3 px-6 text-center">Class Link</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {data.map((item: DataItem, index: number) => (
            <tr
              key={index}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6 text-left whitespace-nowrap">
                <div className="font-medium">{item.student.name}</div>
              </td>
              <td className="py-3 px-6 text-left">
                <div>{item.subject.name}</div>
              </td>
              <td className="py-3 px-6 text-center">
                <span
                  className={`bg-${
                    item.videoAllow ? "green" : "red"
                  }-200 text-${
                    item.videoAllow ? "green" : "red"
                  }-600 py-1 px-3 rounded-full text-xs`}
                >
                  {item.videoAllow ? "Yes" : "No"}
                </span>
              </td>
              <td className="py-3 px-6 text-center">
                <div>{item.timing}</div>
              </td>
              <td className="py-3 px-6 text-center">
                <div>{new Date(item.enrollmentDate).toLocaleDateString()}</div>
              </td>
              <td className="py-3 px-6 text-center">
                <div className="bg-primary text-white rounded-full p-2">
                  Join
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentDataTable;
