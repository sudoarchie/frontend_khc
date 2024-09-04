import { CardTwo } from "@/app/components/cardTwo";

export default function Management() {
  return (
    <div className="flex gap-5 p-5 w-[95%]">
      <CardTwo
        title={"Subject Management"}
        url={"/admin/dashboard/management/subjectmanagement"}
      ></CardTwo>
      <CardTwo
        title={"Category Management"}
        url={"/admin/dashboard/management/categorymanagement"}
      ></CardTwo>
      <CardTwo
        title={"Material Management"}
        url={"/admin/dashboard/management/materialmanagement"}
      ></CardTwo>
    </div>
  );
}
