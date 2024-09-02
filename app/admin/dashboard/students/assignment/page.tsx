import TableField from "@/app/components/TableField";
import Link from "next/link";

export default function Assignment() {
  const Header = [
    "Document Name",
    "Document Type",
    "Type",
    "Chapter",
    "Shared Date",
  ];
  const data = [
    ["Introduction to Java", "PDF", "Lecture Notes", "Chapter 1", "2024-01-10"],
    [
      "Data Structures Overview",
      "DOCX",
      "Assignment",
      "Chapter 3",
      "2024-02-15",
    ],
    [
      "Operating Systems Basics",
      "PPT",
      "Lecture Slides",
      "Chapter 2",
      "2024-03-05",
    ],
    ["Networking Fundamentals", "PDF", "Lab Manual", "Chapter 4", "2024-04-01"],
    [
      "Database Management Systems",
      "PDF",
      "Lecture Notes",
      "Chapter 5",
      "2024-05-12",
    ],
    [
      "Software Engineering Concepts",
      "DOCX",
      "Project Document",
      "Chapter 6",
      "2024-06-20",
    ],
  ];
  return (
    <div>
      <TableField Header={Header} Rows={data} className="my-5"></TableField>
    </div>
  );
}
