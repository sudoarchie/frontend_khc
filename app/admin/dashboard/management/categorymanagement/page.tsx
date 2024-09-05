import { Box } from "@/app/components/Box";
import { InputField } from "@/app/components/Inputfield";
import OptionField from "@/app/components/OptionField";
import { PrimaryButton } from "@/app/components/PrimaryButton";
import TableField from "@/app/components/TableField";

export default function CategoryManagement() {
  const CategoryList = ["cbse", "igsc", "Upboard"];
  const data = [
    {
      id: "1",
      Category: "Cbse",
      subjectName: "Hindi",
      EditLink: "https://edilitlink.com",
    },
  ];
  return (
    <div className="flex flex-col w-[95%] m-5 mx-auto">
      <Box
        Heading="Add Category"
        SubHeading="Choose category and enter category name"
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
