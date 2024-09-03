import { Box } from "@/app/components/Box";
import { InputField } from "@/app/components/Inputfield";
import Image from "next/image";
import dp from "@/public/dp.jpg";
import { CardOne } from "@/app/components/CardOne";
import TableField from "@/app/components/TableField";
import { PrimaryButton } from "@/app/components/PrimaryButton";

export default function TeacherDetails() {
  const data = {
    imagelink: dp,
    teacherName: "shivam singh",
    NameOne: "Ansh Singh",
    NameTwo: "Archie",
    NameThree: "Bhola",
    Email: "shivam@xyz.com",
    Country: "India",
    Phone: 7734789134,
    JoinedIn: "12/04/2024",
  };
  const bankData = {
    bankName: "First National Bank",
    branch: "Downtown Branch",
    accountNumber: "123456789012",
    ifscCode: "FNB0012345",
    paypalEmail: "john.doe@paypal.com",
  };
  const StudentData = [
    {
      name: "John Doe",
      phone: "+1-202-555-0170",
      email: "johndoe@example.com",
      classLink: "https://example.com/class/english101",
    },
    {
      name: "Jane Smith",
      phone: "+1-202-555-0145",
      email: "janesmith@example.com",
      classLink: "https://example.com/class/math201",
    },
    {
      name: "Michael Brown",
      phone: "+1-202-555-0112",
      email: "michaelbrown@example.com",
      classLink: "https://example.com/class/history101",
    },
    {
      name: "Emily Davis",
      phone: "+1-202-555-0168",
      email: "emilydavis@example.com",
      classLink: "https://example.com/class/science301",
    },
    {
      name: "Chris Johnson",
      phone: "+1-202-555-0125",
      email: "chrisjohnson@example.com",
      classLink: "https://example.com/class/physics101",
    },
    {
      name: "Sarah Wilson",
      phone: "+1-202-555-0178",
      email: "sarahwilson@example.com",
      classLink: "https://example.com/class/chemistry202",
    },
    {
      name: "David Martinez",
      phone: "+1-202-555-0156",
      email: "davidmartinez@example.com",
      classLink: "https://example.com/class/art101",
    },
    {
      name: "Sophia Hernandez",
      phone: "+1-202-555-0199",
      email: "sophiahernandez@example.com",
      classLink: "https://example.com/class/music301",
    },
    {
      name: "Daniel Lee",
      phone: "+1-202-555-0188",
      email: "daniellee@example.com",
      classLink: "https://example.com/class/geography101",
    },
    {
      name: "Olivia Garcia",
      phone: "+1-202-555-0134",
      email: "oliviagarcia@example.com",
      classLink: "https://example.com/class/biology202",
    },
  ];
  return (
    <div>
      <Box Heading="Profile Details">
        <div className="flex flex-col justify-center items-center">
          <Image
            src={data.imagelink}
            alt={""}
            className="w-40 h-40 rounded-full mt-5"
          ></Image>
          <InputField
            label={"Teacher Name"}
            placeholder={""}
            value={data.teacherName}
            type={""}
            className="mt-5 w-[70%]"
          ></InputField>
          <InputField
            label={"Name one"}
            placeholder={""}
            value={data.NameOne}
            type={""}
            className="mt-5 w-[70%]"
          ></InputField>
          <InputField
            label={"Name two"}
            placeholder={""}
            value={data.NameTwo}
            type={""}
            className="mt-5 w-[70%]"
          ></InputField>
          <InputField
            label={"Teacher three"}
            placeholder={""}
            value={data.NameThree}
            type={""}
            className="mt-5 w-[70%]"
          ></InputField>
          <InputField
            label={"Email Address"}
            placeholder={""}
            value={data.Email}
            type={"email"}
            className="mt-5 w-[70%]"
          ></InputField>
          <InputField
            label={"Conuntry"}
            placeholder={""}
            value={data.Country}
            type={"text"}
            className="mt-5 w-[70%]"
          ></InputField>
          <InputField
            label={"Phone Number"}
            placeholder={""}
            value={data.Phone}
            type={"email"}
            className="mt-5 w-[70%]"
          ></InputField>
          <InputField
            label={"Joined In"}
            placeholder={""}
            value={data.JoinedIn}
            type={"email"}
            className="mt-5 w-[70%]"
          ></InputField>
        </div>
      </Box>
      <Box Heading="Teacher Id and Highest Qualification" className="p-5">
        <div className=" w-full flex gap-5 border-dashed border-2 border-borderColor p-5">
          <CardOne
            title={"Id Proof"}
            dis={""}
            firstButton={"View"}
            secoundButton={"Download"}
          ></CardOne>
          <CardOne
            title={"Qualification"}
            dis={""}
            firstButton={"View"}
            secoundButton={"Download"}
          ></CardOne>
        </div>
      </Box>
      <Box Heading="Student Assigned">
        <TableField rows={StudentData} className="mt-5"></TableField>
      </Box>
      <Box Heading="Bank Details">
        <div className="flex flex-wrap">
          <InputField
            label={"Bank Name"}
            placeholder={""}
            value={bankData.bankName}
            className="w-[70%] mt-5 mx-auto"
            type={""}
          ></InputField>
          <InputField
            label={"Branch"}
            placeholder={""}
            value={bankData.branch}
            className="w-[70%] mt-5 mx-auto"
            type={"text"}
          ></InputField>
          <InputField
            label={"Account Number "}
            placeholder={""}
            value={bankData.accountNumber}
            className="w-[70%] mt-5 mx-auto"
            type={"text"}
          ></InputField>
          <InputField
            label={"IFSC Code"}
            placeholder={""}
            value={bankData.ifscCode}
            className="w-[70%] mt-5 mx-auto"
            type={"text"}
          ></InputField>
          <InputField
            label={"Paypal Email"}
            placeholder={""}
            value={bankData.paypalEmail}
            className="w-[70%] mt-5 mx-auto"
            type={"text"}
          ></InputField>
        </div>
      </Box>
      <PrimaryButton
        Name={"Update"}
        className="w-[70%] m-auto my-5"
      ></PrimaryButton>
    </div>
  );
}
