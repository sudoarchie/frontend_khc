import TableField from "@/app/components/TableField";

export default function Teacher() {
  const data = [
    {
      TeacherID: "T001",
      Name: "John Doe",
      Email: "johndoe@example.com",
      PhoneNo: "+1-555-123-4567",
      JoinDate: "2023-01-15",
      ViewProfile: "https://example.com/teachers/johndoe",
      DisplayName: "Mr. John",
    },
    {
      TeacherID: "T002",
      Name: "Jane Smith",
      Email: "janesmith@example.com",
      PhoneNo: "+1-555-234-5678",
      JoinDate: "2022-08-20",
      ViewProfile: "https://example.com/teachers/janesmith",
      DisplayName: "Ms. Smith",
    },
    {
      TeacherID: "T003",
      Name: "Robert Brown",
      Email: "robertbrown@example.com",
      PhoneNo: "+1-555-345-6789",
      JoinDate: "2021-09-30",
      ViewProfile: "https://example.com/teachers/robertbrown",
      DisplayName: "Mr. Brown",
    },
    {
      TeacherID: "T004",
      Name: "Emily Davis",
      Email: "emilydavis@example.com",
      PhoneNo: "+1-555-456-7890",
      JoinDate: "2023-03-12",
      ViewProfile: "https://example.com/teachers/emilydavis",
      DisplayName: "Ms. Emily",
    },
    {
      TeacherID: "T005",
      Name: "Michael Johnson",
      Email: "michaeljohnson@example.com",
      PhoneNo: "+1-555-567-8901",
      JoinDate: "2020-11-05",
      ViewProfile: "https://example.com/teachers/michaeljohnson",
      DisplayName: "Mr. Johnson",
    },
  ];
  return (
    <div>
      <TableField rows={data} className="mt-5"></TableField>
    </div>
  );
}
