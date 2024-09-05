import TableField from "@/app/components/TableField";

export default function Enquiry() {
  const data = [
    {
      "subject": "Mathematics",
      "studentName": "Alice Johnson",
      "grade": "A",
      "country": "USA",
      "phoneNo": "+1-202-555-0123",
      "email": "alice.johnson@example.com",
      "time": "2024-09-05T14:23:00Z"
    },
    {
      "subject": "Physics",
      "studentName": "David Smith",
      "grade": "B",
      "country": "Canada",
      "phoneNo": "+1-416-555-0145",
      "email": "david.smith@example.com",
      "time": "2024-09-05T10:45:00Z"
    },
    {
      "subject": "History",
      "studentName": "Maria Garcia",
      "grade": "A+",
      "country": "Spain",
      "phoneNo": "+34-910-555-0189",
      "email": "maria.garcia@example.com",
      "time": "2024-09-04T16:15:00Z"
    },
    {
      "subject": "Chemistry",
      "studentName": "Chen Wei",
      "grade": "B+",
      "country": "China",
      "phoneNo": "+86-10-5555-0123",
      "email": "chen.wei@example.cn",
      "time": "2024-09-04T08:30:00Z"
    },
    {
      "subject": "English Literature",
      "studentName": "John Doe",
      "grade": "C",
      "country": "UK",
      "phoneNo": "+44-20-5555-0198",
      "email": "john.doe@example.co.uk",
      "time": "2024-09-05T09:50:00Z"
    }
  ]
  return (<div className="m-5">
    <TableField rows={data} deleteOption={true}></TableField>
  </div>);
}
