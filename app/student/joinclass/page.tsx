import { PrimaryButton } from "@/app/components/PrimaryButton";
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

export default function JoinClass() {
  const data = [
    {
      subject: "Maths",
      joinclass: "https://www.google.com",
    },
  ];
  return (
    <div>
      <TableContainer component={Paper} className="w-[50%] mx-auto">
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Subject</TableCell>
              <TableCell align="center">Join Class</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{row.subject}</TableCell>
                <TableCell align="center">
                  <Link href={row.joinclass}>
                    <PrimaryButton
                      Name="+ Join"
                      className="rounded-full mx-auto"
                    ></PrimaryButton>
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
