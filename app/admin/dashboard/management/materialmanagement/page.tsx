import { Box } from "@/app/components/Box";
import { InputField } from "@/app/components/Inputfield";
import OptionField from "@/app/components/OptionField";
import { PrimaryButton } from "@/app/components/PrimaryButton";
import TableField from "@/app/components/TableField";

export default function MaterialManagement() {
  const CategoryList = ["cbse", "igsc", "Upboard"];
  const data = [
    {
      ID: "1",
      Category: "Chemistry",
      MaterialName: "Organic Reactions",
      Doc: "organic_reactions.pdf",
      Time: "2024-09-05T10:00:00",
    },
    {
      ID: "2",
      Category: "Physics",
      MaterialName: "Quantum Mechanics",
      Doc: "quantum_mechanics.docx",
      Time: "2024-09-05T11:30:00",
    },
    {
      ID: "3",
      Category: "Mathematics",
      MaterialName: "Linear Algebra",
      Doc: "linear_algebra.xlsx",
      Time: "2024-09-04T15:45:00",
    },
    {
      ID: "4",
      Category: "Computer Science",
      MaterialName: "Data Structures",
      Doc: "data_structures.pdf",
      Time: "2024-09-03T09:20:00",
    },
    {
      ID: "5",
      Category: "Biology",
      MaterialName: "Genetics",
      Doc: "genetics.pptx",
      Time: "2024-09-02T14:10:00",
    },
  ];
  return (
    <div className="flex flex-col w-[95%] m-5 mx-auto">
      <Box
        Heading="Material Management"
        SubHeading="Choose category and enter material name"
        className="w-full "
      >
        <OptionField
          Label={"Choose Category"}
          Option={CategoryList}
          className=" mx-auto mt-5"
        ></OptionField>
        <InputField
          label={"Enter material "}
          placeholder={""}
          className=" mx-auto mt-5"
          type={""}
        ></InputField>
        <PrimaryButton
          Name={"+ ADD SUBJECT"}
          className="w-full mx-auto mt-5"
        ></PrimaryButton>
      </Box>
      <TableField
        rows={data}
        deleteOption={true}
        className="w-full ml-5"
      ></TableField>
    </div>
  );
}
