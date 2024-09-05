import { Box } from "@/app/components/Box";
import { InputField } from "@/app/components/Inputfield";
import { PrimaryButton } from "@/app/components/PrimaryButton";
import TableField from "@/app/components/TableField";

export default function Country({ params }: { params: { country: string } }) {
  const subjectList = [
    {
      Subject: "Maths",
    },
    {
      Subject: "Physics",
    },
    {
      Subject: "Chemistry",
    },
    {
      Subject: "Computer science",
    },
  ];
  return (
    <div>
      <Box Heading="ADD SUBJECT" className="w-[95%] mx-auto">
        <InputField
          label={"Subject Name"}
          placeholder={""}
          type={"text"}
          className="w-[95%] mx-auto mt-5"
        ></InputField>
        <PrimaryButton
          Name={"+ ADD SUBJECT"}
          className="w-[95%] mx-auto mt-5"
        ></PrimaryButton>
      </Box>
      <Box className="w-[95%] mx-auto">
        <TableField rows={subjectList}></TableField>
      </Box>
    </div>
  );
}
