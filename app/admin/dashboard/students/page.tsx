import TableField from "@/app/components/TableField";
import Link from "next/link";

export default function Student() {
  const Header = [
    "Student ID",
    "Name",
    "Phone No",
    "Join Date",
    "Status",
    "Payment",
    "Assignment & Doc",
    "Allowed video",
  ];
  const data = [
    [
      "S12345",
      "Alice Johnson",
      "+1234567890",
      "2024-01-10",
      "Active",
      "Paid",
      "Submitted",
      "Yes",
    ],
    [
      "S12346",
      "Bob Smith",
      "+1234567891",
      "2023-12-05",
      "Inactive",
      "Unpaid",
      "Pending",
      "No",
    ],
    [
      "S12347",
      "Charlie Brown",
      "+1234567892",
      "2024-03-15",
      "Active",
      "Paid",
      "Submitted",
      "Yes",
    ],
    [
      "S12348",
      "Diana Prince",
      "+1234567893",
      "2023-11-22",
      "Active",
      "Partial",
      "Pending",
      "Yes",
    ],
    [
      "S12349",
      "Eve Adams",
      "+1234567894",
      "2024-02-28",
      "Inactive",
      "Unpaid",
      "Not Submitted",
      "No",
    ],
    [
      "S12350",
      "Frank Miller",
      "+1234567895",
      "2023-10-12",
      "Active",
      "Paid",
      "Submitted",
      "Yes",
    ],
  ];
  return (
    <div>
      <TableField Header={Header} Rows={data} className="my-5"></TableField>
    </div>
  );
}
