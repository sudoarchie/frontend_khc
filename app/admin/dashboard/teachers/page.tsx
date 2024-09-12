import { CardTwo } from "@/app/components/cardTwo";

export default function TeacherRouting() {
  const data = [
    {
      title: "Teacher Data",
      url: "/admin/dashboard/teachers/data",
    },
    {
      title: "Add Teacher",
      url: "/admin/dashboard/teachers/add",
    },
    {
      title: "Teacher Details",
      url: "/admin/dashboard/teachers/details",
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
