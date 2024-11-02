"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Box } from "@/app/components/Box";
import { PrimaryButton } from "@/app/components/PrimaryButton";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

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

type TableRowData = {
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
  const studentGrade: TableRowData[] = [
    { Subject: "Mathematics", Grade: "A" },
    { Subject: "English", Grade: "B+" },
    { Subject: "Science", Grade: "A-" },
    { Subject: "History", Grade: "B" },
    { Subject: "Art", Grade: "A+" },
  ];
  const studentTiming: TableRowData[] = [
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
            {["name", "email"].map((field) => (
              <TextField
                key={field}
                label={field.charAt(0).toUpperCase() + field.slice(1)}
                variant="outlined"
                type="text"
                className={`w-full ${field !== "name" ? "mt-5" : "mt-2"}`}
                {...registerStudent(field as keyof StudentInputs, {
                  required: true,
                })}
                error={!!studentErrors[field as keyof StudentInputs]}
                helperText={
                  studentErrors[field as keyof StudentInputs]
                    ? "This field is required"
                    : ""
                }
              />
            ))}

            {/* Country Select */}
            <FormControl variant="outlined" className="w-full mt-5">
              <InputLabel>Country</InputLabel>
              <Select
                label="Country"
                defaultValue=""
                {...registerStudent("country", { required: true })}
                error={!!studentErrors.country}
              >
                <MenuItem value="USA">USA</MenuItem>
                <MenuItem value="India">India</MenuItem>
                <MenuItem value="UK">UK</MenuItem>
                <MenuItem value="Canada">Canada</MenuItem>
                {/* Add more countries as needed */}
              </Select>
            </FormControl>

            {/* Grade Select */}
            <FormControl variant="outlined" className="w-full mt-5">
              <InputLabel>Grade</InputLabel>
              <Select
                label="Grade"
                defaultValue=""
                {...registerStudent("grade", { required: true })}
                error={!!studentErrors.grade}
              >
                <MenuItem value="A">A</MenuItem>
                <MenuItem value="B">B</MenuItem>
                <MenuItem value="C">C</MenuItem>
                <MenuItem value="D">D</MenuItem>
                {/* Add more grades as needed */}
              </Select>
            </FormControl>

            {/* Curriculum Select */}
            <FormControl variant="outlined" className="w-full mt-5">
              <InputLabel>Curriculum</InputLabel>
              <Select
                label="Curriculum"
                defaultValue=""
                {...registerStudent("curriculum", { required: true })}
                error={!!studentErrors.curriculum}
              >
                <MenuItem value="curriculum1">Curriculum 1</MenuItem>
                <MenuItem value="curriculum2">Curriculum 2</MenuItem>
                <MenuItem value="curriculum3">Curriculum 3</MenuItem>
                {/* Add more options as needed */}
              </Select>
            </FormControl>

            <PrimaryButton Name="Save" type="submit" className="mt-5" />
          </form>{" "}
        </Box>

        <Box Heading="Preferred Timing By Student" className="w-1/2">
          <TableContainer
            component={Paper}
            className="h-[310px] w-full overflow-x-hidden my-5"
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Date Chosen</TableCell>
                  <TableCell>Time Chosen</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {studentTiming.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.DateChosen}</TableCell>
                    <TableCell>{row.TimeChosen}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </div>

      <Box Heading="Assign a Teacher">
        <form
          onSubmit={handleTeacherSubmit(onTeacherSubmit)}
          className="flex flex-col"
        >
          <FormControl
            variant="outlined"
            className="mt-5 w-full max-w-[700px] m-auto"
          >
            <InputLabel>Teacher Name</InputLabel>
            <Select
              label="Teacher Name"
              defaultValue=""
              {...registerTeacher("teacherName", { required: true })}
            >
              {teacherList.map((teacher) => (
                <MenuItem key={teacher} value={teacher}>
                  {teacher}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl
            variant="outlined"
            className="mt-5 w-full max-w-[700px] m-auto"
          >
            <InputLabel>Subject Name</InputLabel>
            <Select
              label="Subject Name"
              defaultValue=""
              {...registerTeacher("subject", { required: true })}
            >
              {subjectList.map((subject) => (
                <MenuItem key={subject} value={subject}>
                  {subject}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <PrimaryButton
            Name="Assign Teacher now"
            className="mt-5 md:w-[700px] max-w-[700px] m-auto"
            type="submit"
          />
        </form>
      </Box>

      <Box Heading="Subject and Grade">
        <TableContainer component={Paper} className="my-5">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Subject</TableCell>
                <TableCell>Grade</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {studentGrade.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.Subject}</TableCell>
                  <TableCell>{row.Grade}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

export default StudentData;
