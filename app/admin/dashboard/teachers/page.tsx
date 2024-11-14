import { CardTwo } from "@/app/components/cardTwo";
import img1 from "@/public/4.png";
import img2 from "@/public/5.png";
import img3 from "@/public/6.png";
export default function TeacherRouting() {
  const data = [
    {
      title: "Teacher Data",
      url: "/admin/dashboard/teachers/data",
      image: img1,
    },
    {
      title: "Add Teacher",
      url: "/admin/dashboard/teachers/add",
      image: img2,
    },
    {
      title: "Teacher Details",
      url: "/admin/dashboard/teachers/details",
      image: img3,
    },
  ];
  return (
    <div className="flex gap-5 p-5 w-[95%]">
      {data.map((info, index) => (
        <CardTwo
          title={info.title}
          url={info.url}
          key={index}
          image={info.image}
        ></CardTwo>
      ))}
    </div>
  );
}
