import TableField from "@/app/components/TableField";

export default function StudentToTeacher() {
  const data = [
    {
      id: "1",
      teacherName: "Mrs. Anderson",
      studentName: "John Doe",
      file: "https://example.com/files/assignment1.pdf",
      type: "Chapter Assignment",
      chapterName: "Chapter 1: Introduction to AI",
      shareDate: "2024-09-01",
    },
    {
      id: "2",
      teacherName: "Mr. Smith",
      studentName: "Jane Smith",
      file: "https://example.com/files/assignment2.pdf",
      type: "Chapter Assignment",
      chapterName: "Chapter 2: Basics of Machine Learning",
      shareDate: "2024-09-02",
    },
    {
      id: "3",
      teacherName: "Mrs. Johnson",
      studentName: "Alice Johnson",
      file: "https://example.com/files/assignment3.pdf",
      type: "Chapter Assignment",
      chapterName: "Chapter 3: Neural Networks",
      shareDate: "2024-09-03",
    },
    {
      id: "4",
      teacherName: "Mr. Brown",
      studentName: "Bob Williams",
      file: "https://example.com/files/assignment4.pdf",
      type: "Chapter Assignment",
      chapterName: "Chapter 4: Deep Learning",
      shareDate: "2024-09-04",
    },
    {
      id: "5",
      teacherName: "Mrs. Davis",
      studentName: "Emma Brown",
      file: "https://example.com/files/assignment5.pdf",
      type: "Chapter Assignment",
      chapterName: "Chapter 5: Reinforcement Learning",
      shareDate: "2024-09-05",
    },
  ];
  return (
    <div className="w-[95%] m-5 mx-auto">
      <TableField rows={data}></TableField>
    </div>
  );
}
