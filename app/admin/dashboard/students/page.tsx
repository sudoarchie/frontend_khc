import { CardTwo } from "@/app/components/cardTwo";
import img1 from "@/public/1.png";
import img2 from "@/public/2.png";
import img3 from "@/public/3.png";

export default function StudentRouting() {
  const data = [
    {
      title: "Student Data",
      url: "/admin/dashboard/students/data",
      image: img1,
    },
    {
      title: "Add Student",
      url: "/admin/dashboard/students/add",
      image: img2,
    },
    {
      title: "Assignment",
      url: "/admin/dashboard/students/assignment",
      image: img3,
    },
    // {
    //   title: "Student Details",
    //   url: "/admin/dashboard/students/details",
    // },
  ];
  return (
    <div className="flex gap-5 p-5 w-[95%]">
      {data.map((info, index) => (
        <CardTwo
          title={info.title}
          url={info.url}
          image={info.image}
          key={index}
        ></CardTwo>
      ))}
    </div>
  );
}
