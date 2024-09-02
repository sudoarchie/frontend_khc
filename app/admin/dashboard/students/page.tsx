import TableField from "@/app/components/TableField";
import Link from "next/link";

export default function Student() {
  const data = [
    {
      "Student ID": "S12345",
      Name: "Alice Johnson",
      "Phone No": "+1234567890",
      "Join Date": "2024-01-10",
      Status: "Active",
      Payment: "Paid",
      "Assignment & Doc": "Submitted",
      "Allowed video": "Yes",
    },
    {
      "Student ID": "S12346",
      Name: "Bob Smith",
      "Phone No": "+1234567891",
      "Join Date": "2023-12-05",
      Status: "Inactive",
      Payment: "Unpaid",
      "Assignment & Doc": "Pending",
      "Allowed video": "No",
    },
    {
      "Student ID": "S12347",
      Name: "Charlie Brown",
      "Phone No": "+1234567892",
      "Join Date": "2024-03-15",
      Status: "Active",
      Payment: "Paid",
      "Assignment & Doc": "Submitted",
      "Allowed video": "Yes",
    },
    {
      "Student ID": "S12348",
      Name: "Diana Prince",
      "Phone No": "+1234567893",
      "Join Date": "2023-11-22",
      Status: "Active",
      Payment: "Partial",
      "Assignment & Doc": "Pending",
      "Allowed video": "Yes",
    },
    {
      "Student ID": "S12349",
      Name: "Eve Adams",
      "Phone No": "+1234567894",
      "Join Date": "2024-02-28",
      Status: "Inactive",
      Payment: "Unpaid",
      "Assignment & Doc": "Not Submitted",
      "Allowed video": "No",
    },
    {
      "Student ID": "S12350",
      Name: "Frank Miller",
      "Phone No": "+1234567895",
      "Join Date": "2023-10-12",
      Status: "Active",
      Payment: "Paid",
      "Assignment & Doc": "Submitted",
      "Allowed video": "Yes",
    },
  ];
  return (
    <div>
      <TableField className="my-5" rows={data}></TableField>
    </div>
  );
}
