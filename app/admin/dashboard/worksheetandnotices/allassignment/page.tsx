"use client";
import { Error } from "@/app/components/error";
import Loader from "@/app/components/Loading";
import TableField from "@/app/components/TableField";
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

export default function TeacherWorksheet() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["AssignmentAll"],
    queryFn: async () => {
      const response = await axios({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/assignment/all`,
        method: "get",
        withCredentials: true,
        params: {
          take: 30,
        },
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
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>URL</TableCell>
            <TableCell>By Admin</TableCell>
            <TableCell>Subject</TableCell>
            <TableCell>Created At</TableCell>
            <TableCell>More Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(
            (
              info: {
                id: string;
                name: string;
                url: string;
                visible: boolean;
                subject: { name: string };
                createdAt: string;
              },
              index: number,
            ) => (
              <TableRow className="hover:bg-slate-200 duration-150" key={index}>
                <TableCell>{info.name}</TableCell>
                <TableCell>
                  <a
                    href={info.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-400 duration-150 text-white px-4 py-2 rounded-md"
                  >
                    Open Assignment
                  </a>
                </TableCell>
                <TableCell>{info.visible ? "Yes" : "No"}</TableCell>
                <TableCell>{info.subject.name}</TableCell>
                <TableCell>
                  {new Date(info.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <Link
                    href={`/assignment/${info.id}`}
                    className="bg-primary px-4 py-2 rounded-full text-white"
                  >
                    View
                  </Link>
                </TableCell>
              </TableRow>
            ),
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
