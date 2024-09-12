import { CardTwo } from "@/app/components/cardTwo";

export default function StudentRouting() {
  const data = [
    {
      title: "Student Data",
      url: "/admin/dashboard/students/data",
    },
    {
      title: "Add Student",
      url: "/admin/dashboard/students/add",
    },
    {
      title: "Assignment",
      url: "/admin/dashboard/students/assignment",
    },
    {
      title: "Student Details",
      url: "/admin/dashboard/students/details",
    },
  ];
  return (
    <div className="flex gap-5 p-5 w-[95%]">
      {data.map((info, index) => (
        <CardTwo title={info.title} url={info.url} key={index}></CardTwo>
      ))}
    </div>
  );
}
