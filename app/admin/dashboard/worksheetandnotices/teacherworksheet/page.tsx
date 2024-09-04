import TableField from "@/app/components/TableField";

export default function TeacherWorksheet() {
  const data = [
    {
      assignment: "Chapter 1: Introduction to AI",
      type: "Chapter Assignment",
      link: "https://example.com/assignments/chapter1-ai",
      dateOfSent: "2024-09-01",
    },
    {
      assignment: "Chapter 2: Basics of Machine Learning",
      type: "Chapter Assignment",
      link: "https://example.com/assignments/chapter2-ml",
      dateOfSent: "2024-09-02",
    },
    {
      assignment: "Chapter 3: Neural Networks",
      type: "Chapter Assignment",
      link: "https://example.com/assignments/chapter3-nn",
      dateOfSent: "2024-09-03",
    },
  ];
  return (
    <div className="w-[95%] m-5 mx-auto">
      <TableField rows={data}></TableField>
    </div>
  );
}
