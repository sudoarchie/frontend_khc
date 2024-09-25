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
import Link from "next/link";

export default function Worksheet() {
  const data = [
    {
      id: 234,
      name: "Kafka",
      subject: "Cloud",
      teacher: "shivam singh",
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
            {data.map((info, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  {info.name}
                </TableCell>
                <TableCell align="center">{info.subject}</TableCell>
                <TableCell align="center">{info.teacher}</TableCell>
                <TableCell align="center">
                  <Link href={info.assignmentlink} className="mx-auto">
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
