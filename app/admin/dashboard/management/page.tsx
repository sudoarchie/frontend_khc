"use client";
import { CardTwo } from "@/app/components/cardTwo";
import img1 from "@/public/7.png";

import img2 from "@/public/8.png";
import img3 from "@/public/9.png";
export default function Management() {
  return (
    <div className="flex gap-5 p-5 w-[95%]">
      <CardTwo
        title={"Subject Management"}
        image={img1}
        url={"/admin/dashboard/management/subjectmanagement"}
      ></CardTwo>
      <CardTwo
        title={"Grade Management"}
        image={img2}
        url={"/admin/dashboard/management/grademanagement"}
      ></CardTwo>
      <CardTwo
        title={"Curriculum Management"}
        image={img3}
        url={"/admin/dashboard/management/curriculummanagement"}
      ></CardTwo>
    </div>
  );
}
