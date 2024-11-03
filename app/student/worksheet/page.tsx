"use client";
import { Error } from "@/app/components/error";
import Loader from "@/app/components/Loading";
import { PrimaryButton } from "@/app/components/PrimaryButton";
import { SecoundaryButton } from "@/app/components/SecoundaryButton";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
export default function Worksheet() {
  const { data, isLoading, error } = useQuery({
    queryKey: [`AssignmentStudent`],
    queryFn: async () => {
      const response = await axios({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/assignment/?take=10`,
        withCredentials: true,
      });
      console.log(response.data.data);
      return response.data.data;
    },
  });
  if (isLoading) {
    return <Loader></Loader>;
  }
  if (error) {
    return <Error></Error>;
  }

  const Data = [
    {
      id: 234,
      name: "Kafka",
      subject: "Cloud",
      teacher: "shivam singh",
      status: true,
      date: "12/12/24",
      assignmentlink: "https://kafka.apache.org/intro",
    },
    {
      id: 234,
      name: "Kafka",
      subject: "Cloud",
      teacher: "shivam singh",
      status: false,
      date: "12/12/24",
      assignmentlink: "https://kafka.apache.org/intro",
    },
  ];
  return (
    <div className="flex flex-wrap gap-5">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Subject</TableCell>
              <TableCell align="center">Teacher</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Date</TableCell>

              <TableCell align="center">Assignment</TableCell>
              <TableCell align="center">Submit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((info: any, index: number) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  {info.assignment.name}
                </TableCell>
                <TableCell align="center">
                  {info.assignment.subject.name}
                </TableCell>
                <TableCell align="center">{info.teacher.name}</TableCell>
                <TableCell align="center">
                  {info.completed ? (
                    <div className="rounded-full mx-auto text-white py-2 w-[100px] bg-green-500">
                      Completed
                    </div>
                  ) : (
                    <div className="rounded-full mx-auto text-white py-2 w-[100px] bg-red-400">
                      Incomplete
                    </div>
                  )}
                </TableCell>
                <TableCell align="center">{info.deadline}</TableCell>
                <TableCell align="center">
                  <Link href={info.assignment.url} className="mx-auto">
                    <PrimaryButton
                      Name={"View"}
                      className="mx-auto"
                    ></PrimaryButton>
                  </Link>
                </TableCell>
                <TableCell align="center">
                  <Link href={`/student/submit/${info.id}`}>
                    <SecoundaryButton
                      Name={"Submit Assignment"}
                      className="mx-auto"
                    ></SecoundaryButton>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
