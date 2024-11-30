import { Box } from "@/app/components/Box";
// import { InputField } from "@/app/components/Inputfield";
import OptionField from "@/app/components/OptionField";
import { PrimaryButton } from "@/app/components/PrimaryButton";
import { UploadField } from "@/app/components/UploadField";

export default function AssignmentAndDocuments() {
  const students = [
    "John Doe",
    "Jane Smith",
    "Alice Johnson",
    "Bob Williams",
    "Emma Brown",
    "Liam Davis",
    "Sophia Miller",
    "Mason Wilson",
    "Olivia Moore",
    "Aiden Taylor",
  ];
  return (
    <div className="w-[95%] mx-auto m-5">
      <Box
        Heading="Share Assignment and Documents"
        className="flex flex-col w-full"
      >
        <OptionField
          Label={"Choose Student"}
          Option={students}
          className="mt-5"
        ></OptionField>

        {/* <InputField
          label={"Enter chapter Name"}
          placeholder={"Chapter 1"}
          type={"text"}
          className="mt-5"
        ></InputField> */}

        <div className="border-dashed border-2 w-full mx-auto  rounded-xl mt-5">
          <UploadField></UploadField>
        </div>
        <PrimaryButton Name={"Submit"} className="w-full mt-5"></PrimaryButton>
      </Box>
    </div>
  );
}
