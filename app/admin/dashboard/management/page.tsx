import { CardTwo } from "@/app/components/cardTwo";
import img1 from "@/public/7.png";

import img2 from "@/public/8.png";
export default function Management() {
  return (
    <div className="flex gap-5 p-5 w-[95%]">
      <CardTwo
        title={"Subject Management"}
        image={img1}
        url={"/admin/dashboard/management/subjectmanagement"}
      ></CardTwo>
      <CardTwo
        title={"Category Management"}
        image={img2}
        url={"/admin/dashboard/management/categorymanagement"}
      ></CardTwo>
    </div>
  );
}
