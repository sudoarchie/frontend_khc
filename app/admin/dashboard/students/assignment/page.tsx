import TableField from "@/app/components/TableField";
import Link from "next/link";

export default function Assignment() {
  const data = [
    {
      "Document Name": "Introduction to Java",
      "Document Type": "PDF",
      Type: "Lecture Notes",
      Chapter: "Chapter 1",
      "Shared Date": "2024-01-10",
    },
    {
      "Document Name": "Data Structures Overview",
      "Document Type": "DOCX",
      Type: "Assignment",
      Chapter: "Chapter 3",
      "Shared Date": "2024-02-15",
    },
    {
      "Document Name": "Operating Systems Basics",
      "Document Type": "PPT",
      Type: "Lecture Slides",
      Chapter: "Chapter 2",
      "Shared Date": "2024-03-05",
    },
    {
      "Document Name": "Networking Fundamentals",
      "Document Type": "PDF",
      Type: "Lab Manual",
      Chapter: "Chapter 4",
      "Shared Date": "2024-04-01",
    },
    {
      "Document Name": "Database Management Systems",
      "Document Type": "PDF",
      Type: "Lecture Notes",
      Chapter: "Chapter 5",
      "Shared Date": "2024-05-12",
    },
    {
      "Document Name": "Software Engineering Concepts",
      "Document Type": "DOCX",
      Type: "Project Document",
      Chapter: "Chapter 6",
      "Shared Date": "2024-06-20",
    },
  ];
  return (
    <div>
      <TableField className="my-5" rows={data}></TableField>
    </div>
  );
}
