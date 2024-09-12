"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Box } from "@/app/components/Box";
import { InputField } from "@/app/components/Inputfield";
import OptionField from "@/app/components/OptionField";
import { PrimaryButton } from "@/app/components/PrimaryButton";
import TableField from "@/app/components/TableField";

type StudentInputs = {
  name: string;
  email: string;
  country: string;
  grade: string;
  curriculum: string;
};

type TeacherInputs = {
  teacherName: string;
  subject: string;
};

type TableRow = {
  [key: string]: string;
};

const StudentData: React.FC = () => {
  const {
    register: registerStudent,
    handleSubmit: handleStudentSubmit,
    formState: { errors: studentErrors },
  } = useForm<StudentInputs>();

  const {
    register: registerTeacher,
    handleSubmit: handleTeacherSubmit,
    formState: { errors: teacherErrors },
  } = useForm<TeacherInputs>();

  const onStudentSubmit: SubmitHandler<StudentInputs> = (data) =>
    console.log(data);
  const onTeacherSubmit: SubmitHandler<TeacherInputs> = (data) =>
    console.log(data);

  const teacherList = ["shivam", "krishna", "adi"];
  const subjectList = ["java", "typescript", "c"];
  const studentGrade: TableRow[] = [
    { Subject: "Mathematics", Grade: "A" },
    { Subject: "English", Grade: "B+" },
    { Subject: "Science", Grade: "A-" },
    { Subject: "History", Grade: "B" },
    { Subject: "Art", Grade: "A+" },
  ];
  const studentTiming: TableRow[] = [
    { DateChosen: "2024-09-01", TimeChosen: "10:30 AM" },
    { DateChosen: "2024-09-02", TimeChosen: "02:15 PM" },
    { DateChosen: "2024-09-03", TimeChosen: "08:45 AM" },
    { DateChosen: "2024-09-04", TimeChosen: "05:00 PM" },
    { DateChosen: "2024-09-05", TimeChosen: "11:00 AM" },
  ];

  return (
    <div className="w-full">
      <div className="flex">
        <Box Heading="Profile Details" className="w-1/2">
          <form
            onSubmit={handleStudentSubmit(onStudentSubmit)}
            className="flex flex-col mt-5"
          >
            {["name", "email", "country", "grade", "curriculum"].map(
              (field) => (
                <InputField
                  key={field}
                  label={field.charAt(0).toUpperCase() + field.slice(1)}
                  placeholder=""
                  type="text"
                  className={`w-full ${field !== "name" ? "mt-5" : "mt-2"}`}
                  {...registerStudent(field as keyof StudentInputs, {
                    required: true,
                  })}
                />
              )
            )}
            <PrimaryButton Name="Save" type="submit" className="mt-5" />
          </form>
        </Box>

        <Box Heading="Preferred Timing By Student" className="w-1/2">
          <TableField
            rows={studentTiming}
            className="h-[310px] w-full overflow-x-hidden my-5"
          />
        </Box>
      </div>

      <Box Heading="Assign a Teacher">
        <form
          onSubmit={handleTeacherSubmit(onTeacherSubmit)}
          className="flex flex-col"
        >
          <OptionField
            Label="Teacher Name"
            Option={teacherList}
            className="mt-5 max-w-[700px] m-auto"
            {...registerTeacher("teacherName", { required: true })}
          />
          <OptionField
            Label="Subject Name"
            Option={subjectList}
            className="mt-5 max-w-[700px] m-auto"
            {...registerTeacher("subject", { required: true })}
          />
          <PrimaryButton
            Name="Assign Teacher now"
            className="mt-5 md:w-[700px] max-w-[700px] m-auto"
            type="submit"
          />
        </form>
      </Box>

      <Box Heading="Subject and Grade">
        <TableField rows={studentGrade} className="my-5" />
      </Box>
    </div>
  );
};

export default StudentData;
