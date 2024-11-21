import React from "react";
import { FileText } from "lucide-react";

interface Grade {
  name: string;
}

interface AssignmentSubmitGrade {
  marks: number;
}

interface AssignmentSubmit {
  SubmitUrl: string;
  assignmentSubmitGrade: AssignmentSubmitGrade;
}

interface StudentAssignment {
  student: {
    name: string;
    email: string;
    mobileNo: string;
    grade: Grade;
  };
  deadline: string;
  Completed: boolean;
  assignmentSubmit: AssignmentSubmit;
}

interface AssignmentCardProps {
  assignmentTitle: string;
  pdfUrl: string;
  description: string;
  subject: string;
  students: StudentAssignment[];
}

const AssignmentCard: React.FC<AssignmentCardProps> = ({
  assignmentTitle,
  pdfUrl,
  description,
  subject,
  students,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-6xl mx-auto">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">{assignmentTitle}</h2>
        <p className="mb-4">{description}</p>
        <p className="font-semibold">Subject: {subject}</p>
        <div className="flex items-center space-x-4 mt-4">
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white hover:underline"
          >
            <FileText className="w-4 h-4 mr-2" />
            View Assignment PDF
          </a>
        </div>
      </div>

      {/* Student Table */}
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4">Student List</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border-b border-gray-200 px-4 py-2 text-left">
                  Name
                </th>
                <th className="border-b border-gray-200 px-4 py-2 text-left">
                  Email
                </th>
                <th className="border-b border-gray-200 px-4 py-2 text-left">
                  Mobile Number
                </th>
                <th className="border-b border-gray-200 px-4 py-2 text-left">
                  Grade
                </th>
                <th className="border-b border-gray-200 px-4 py-2 text-left">
                  Deadline
                </th>
                <th className="border-b border-gray-200 px-4 py-2 text-left">
                  Status
                </th>
                <th className="border-b border-gray-200 px-4 py-2 text-left">
                  PDF
                </th>
                <th className="border-b border-gray-200 px-4 py-2 text-left">
                  Marks
                </th>
              </tr>
            </thead>
            <tbody>
              {students.map(
                ({ student, deadline, Completed, assignmentSubmit }, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border-b border-gray-200 px-4 py-2">
                      {student.name}
                    </td>
                    <td className="border-b border-gray-200 px-4 py-2">
                      {student.email}
                    </td>
                    <td className="border-b border-gray-200 px-4 py-2">
                      {student.mobileNo}
                    </td>
                    <td className="border-b border-gray-200 px-4 py-2">
                      {student.grade.name}
                    </td>
                    <td className="border-b border-gray-200 px-4 py-2">
                      {deadline}
                    </td>
                    <td className="border-b border-gray-200 px-4 py-2">
                      <span
                        className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                          Completed
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {Completed ? "Completed" : "Incomplete"}
                      </span>
                    </td>
                    <td className="border-b border-gray-200 px-4 py-2">
                      <a
                        href={assignmentSubmit.SubmitUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline flex items-center"
                      >
                        <FileText className="w-4 h-4 mr-1" />
                        View
                      </a>
                    </td>
                    <td className="border-b border-gray-200 px-4 py-2">
                      {assignmentSubmit.assignmentSubmitGrade.marks}
                    </td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AssignmentCard;
