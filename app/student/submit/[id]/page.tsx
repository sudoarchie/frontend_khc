import GradientCard from "@/app/components/gradientCard";
import { PrimaryButton } from "@/app/components/PrimaryButton";
import { UploadField } from "@/app/components/UploadField";

export default function Submit() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-[400px]">
        <div className="border-[2px] p-5 mb-5 rounded-lg">
          <b>Name: </b> name of assignemt,
          <br></br>
          <b> Teacher:</b> teacher name
          <br></br>
          <b>Subject: </b> Subject name
        </div>
        <UploadField></UploadField>
        <PrimaryButton Name="Submit" className="mt-5 w-full"></PrimaryButton>
      </div>
    </div>
  );
}
