"use client";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  teacherName: string;
  nameOne: string;
  nameTwo: string;
  nameThree: string;
  email: string;
  country: string;
  MobileNumber: number;
  joinedDate: Date;
  bankName: string;
  branch: string;
  accountNumber: string;
  ifsccode: string;
  paypalemail: string;
};
import { Box } from "@/app/components/Box";
import { InputField } from "@/app/components/Inputfield";
import Image from "next/image";
import dp from "@/public/dp.jpg";
import { CardOne } from "@/app/components/CardOne";
import TableField from "@/app/components/TableField";
import { PrimaryButton } from "@/app/components/PrimaryButton";

export default function TeacherDetails() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
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
    <form onSubmit={handleSubmit(onSubmit)}>
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
            defaultValue={data.teacherName}
            type={"text"}
            className="mt-5 w-[70%]"
            {...register("teacherName", { required: true })}
          ></InputField>
          <InputField
            label={"Name one"}
            placeholder={""}
            defaultValue={data.NameOne}
            type={""}
            {...register("nameOne", { required: true })}
            className="mt-5 w-[70%]"
          ></InputField>
          <InputField
            label={"Name two"}
            placeholder={""}
            defaultValue={data.NameTwo}
            type={""}
            className="mt-5 w-[70%]"
            {...register("nameTwo", { required: true })}
          ></InputField>
          <InputField
            label={"Name three"}
            placeholder={""}
            defaultValue={data.NameThree}
            type={""}
            {...register("nameThree", { required: true })}
            className="mt-5 w-[70%]"
          ></InputField>
          <InputField
            label={"Email Address"}
            placeholder={""}
            defaultValue={data.Email}
            type={"email"}
            {...register("email", { required: true })}
            className="mt-5 w-[70%]"
          ></InputField>
          <InputField
            label={"Country"}
            placeholder={""}
            defaultValue={data.Country}
            type={"text"}
            className="mt-5 w-[70%]"
            {...register("country", { required: true })}
          ></InputField>
          <InputField
            label={"Phone Number"}
            placeholder={""}
            defaultValue={data.Phone}
            type={"number"}
            className="mt-5 w-[70%]"
            {...register("MobileNumber", { required: true })}
          ></InputField>
          <InputField
            label={"Joined In"}
            placeholder={""}
            defaultValue={data.JoinedIn}
            type={"date"}
            className="mt-5 w-[70%]"
            {...register("joinedDate", { required: true })}
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
            defaultValue={bankData.bankName}
            className="w-[70%] mt-5 mx-auto"
            type={""}
            {...register("bankName", { required: true })}
          ></InputField>
          <InputField
            label={"Branch"}
            placeholder={""}
            defaultValue={bankData.branch}
            className="w-[70%] mt-5 mx-auto"
            type={"text"}
            {...register("branch", { required: true })}
          ></InputField>
          <InputField
            label={"Account Number "}
            placeholder={""}
            defaultValue={bankData.accountNumber}
            className="w-[70%] mt-5 mx-auto"
            type={"text"}
            {...register("accountNumber", { required: true })}
          ></InputField>
          <InputField
            label={"IFSC Code"}
            placeholder={""}
            defaultValue={bankData.ifscCode}
            className="w-[70%] mt-5 mx-auto"
            type={"text"}
            {...register("ifsccode", { required: true })}
          ></InputField>
          <InputField
            label={"Paypal Email"}
            placeholder={""}
            defaultValue={bankData.paypalEmail}
            className="w-[70%] mt-5 mx-auto"
            type={"text"}
            {...register("paypalemail", { required: true })}
          ></InputField>
        </div>
      </Box>
      <PrimaryButton
        Name={"Update"}
        className="w-[70%] m-auto my-5"
        type="submit"
      ></PrimaryButton>
    </form>
  );
}
