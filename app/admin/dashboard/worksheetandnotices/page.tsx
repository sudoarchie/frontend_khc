import { Banner } from "@/app/components/Banner";
import { Box } from "@/app/components/Box";
import { FolderCard } from "@/app/components/FolderCard";
import img1 from "@/public/worksheetbg.jpeg";
import Link from "next/link";
export default function WorksheetAndNotice() {
  const worksheetData = {
    Number: 34,
    type: "Worksheets",
    dis: "Share document with students and Teachers",
    btnOneName: "SHARE WITH STUDENTS",
    btnTwoName: "SHARE WITH TEACHERS",
  };
  const data = [
    {
      Name: "Worksheets",
      SubName: "All",
    },
  ];
  return (
    <div className="w-full my-5">
      <Banner
        image={img1}
        Heading={`${worksheetData.Number} ${worksheetData.type}`}
        discription={worksheetData.dis}
        btnOne={worksheetData.btnOneName}
        btnTwo={worksheetData.btnTwoName}
      ></Banner>
      <Box Heading="Worksheets" className="w-[95%] m-auto my-5">
        <div className="flex flex-wrap m-5 gap-5">
          {data.map((info, index) => (
            <Link href={"/admin/dashboard/worksheetandnotices/allassignment"}>
              <FolderCard
                Name={info.Name}
                SubName={info.SubName}
                key={index}
              ></FolderCard>
            </Link>
          ))}
        </div>
      </Box>
    </div>
  );
}
