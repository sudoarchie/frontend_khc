import { Box } from "@/app/components/Box";
import { InputField } from "@/app/components/Inputfield";
import OptionField from "@/app/components/OptionField";
import { PrimaryButton } from "@/app/components/PrimaryButton";
import TableField from "@/app/components/TableField";

export default function StudentData() {
  const teacherList = ["shivam", "krishna", "adi"];
  const subjectList = ["java", "typescript", "c"];
  const studentGrade = [
    {
      Subject: "Mathematics",
      Grade: "A",
    },
    {
      Subject: "English",
      Grade: "B+",
    },
    {
      Subject: "Science",
      Grade: "A-",
    },
    {
      Subject: "History",
      Grade: "B",
    },
    {
      Subject: "Art",
      Grade: "A+",
    },
  ];
  const studentTiming = [
    {
      DateChosen: "2024-09-01",
      TimeChosen: "10:30 AM",
    },
    {
      DateChosen: "2024-09-02",
      TimeChosen: "02:15 PM",
    },
    {
      DateChosen: "2024-09-03",
      TimeChosen: "08:45 AM",
    },
    {
      DateChosen: "2024-09-04",
      TimeChosen: "05:00 PM",
    },
    {
      DateChosen: "2024-09-05",
      TimeChosen: "11:00 AM",
    },
  ];

  return (
    <div className="w-full">
      <div className="flex ">
        <Box Heading="Profile Details" className=" w-1/2">
          <div className="flex flex-col mt-5">
            <InputField
              label={"Student Name"}
              placeholder={""}
              type={"text"}
              className="w-full mt-2"
            ></InputField>
            <InputField
              label={"Email Address"}
              placeholder={""}
              type={"text"}
              className="w-full mt-5"
            ></InputField>
            <InputField
              label={"Country"}
              placeholder={""}
              type={"text"}
              className="w-full mt-5"
            ></InputField>
            <InputField
              label={"Grade"}
              placeholder={""}
              type={"text"}
              className="w-full mt-5"
            ></InputField>
            <InputField
              label={"Curriculum"}
              placeholder={""}
              type={"text"}
              className="w-full mt-5"
            ></InputField>
            <PrimaryButton Name={"Save"} className="mt-5"></PrimaryButton>
          </div>
        </Box>

        <Box Heading="Preffered Timing By Student" className="w-1/2">
          <TableField
            rows={studentTiming}
            className="h-[310px] w-full overflow-x-hidden my-5"
          ></TableField>
        </Box>
      </div>

      <Box Heading="Assign a Teacher">
        <div className="flex flex-col">
          <OptionField
            Label={"Teacher Name"}
            Option={teacherList}
            className="mt-5 max-w-[700px] m-auto"
          ></OptionField>
          <OptionField
            Label={"Subject Name"}
            Option={subjectList}
            className="mt-5 max-w-[700px] m-auto"
          ></OptionField>
          <PrimaryButton
            Name={"Assign Teacher now"}
            className="mt-5 md:w-[700px] max-w-[700px] m-auto"
          ></PrimaryButton>
        </div>
      </Box>

      <Box Heading="Subject and Grade">
        {/* <h1 className="text-xl font-bold">Subject and Grade</h1> */}
        <TableField rows={studentGrade} className="my-5"></TableField>
      </Box>
    </div>
  );
}
