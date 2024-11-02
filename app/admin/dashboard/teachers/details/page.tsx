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
import { TextField } from "@mui/material";

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
            alt="Profile"
            className="w-40 h-40 rounded-full mt-5"
          />
          <TextField
            label="Teacher Name"
            defaultValue={data.teacherName}
            fullWidth
            className="mt-5 w-[70%]"
            {...register("teacherName", { required: true })}
            error={!!errors.teacherName}
            helperText={errors.teacherName && "Teacher Name is required"}
          />
          <TextField
            label="Name One"
            defaultValue={data.NameOne}
            fullWidth
            className="mt-5 w-[70%]"
            {...register("nameOne", { required: true })}
            error={!!errors.nameOne}
            helperText={errors.nameOne && "Name One is required"}
          />
          <TextField
            label="Name Two"
            defaultValue={data.NameTwo}
            fullWidth
            className="mt-5 w-[70%]"
            {...register("nameTwo", { required: true })}
            error={!!errors.nameTwo}
            helperText={errors.nameTwo && "Name Two is required"}
          />
          <TextField
            label="Name Three"
            defaultValue={data.NameThree}
            fullWidth
            className="mt-5 w-[70%]"
            {...register("nameThree", { required: true })}
            error={!!errors.nameThree}
            helperText={errors.nameThree && "Name Three is required"}
          />
          <TextField
            label="Email Address"
            defaultValue={data.Email}
            fullWidth
            className="mt-5 w-[70%]"
            {...register("email", { required: true })}
            error={!!errors.email}
            helperText={errors.email && "Email is required"}
          />
          <TextField
            label="Country"
            defaultValue={data.Country}
            fullWidth
            className="mt-5 w-[70%]"
            {...register("country", { required: true })}
            error={!!errors.country}
            helperText={errors.country && "Country is required"}
          />
          <TextField
            label="Phone Number"
            defaultValue={data.Phone}
            type="number"
            fullWidth
            className="mt-5 w-[70%]"
            {...register("MobileNumber", { required: true })}
            error={!!errors.MobileNumber}
            helperText={errors.MobileNumber && "Phone Number is required"}
          />
          <TextField
            label="Joined Date"
            type="date"
            defaultValue={data.JoinedIn}
            fullWidth
            className="mt-5 w-[70%]"
            InputLabelProps={{ shrink: true }}
            {...register("joinedDate", { required: true })}
            error={!!errors.joinedDate}
            helperText={errors.joinedDate && "Joined Date is required"}
          />
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
          <TextField
            label="Bank Name"
            variant="outlined"
            defaultValue={bankData.bankName}
            fullWidth
            className="w-[70%] mt-5 mx-auto"
            {...register("bankName", { required: true })}
          />

          <TextField
            label="Branch"
            variant="outlined"
            defaultValue={bankData.branch}
            fullWidth
            className="w-[70%] mt-5 mx-auto"
            {...register("branch", { required: true })}
          />

          <TextField
            label="Account Number"
            variant="outlined"
            defaultValue={bankData.accountNumber}
            fullWidth
            className="w-[70%] mt-5 mx-auto"
            {...register("accountNumber", { required: true })}
          />

          <TextField
            label="IFSC Code"
            variant="outlined"
            defaultValue={bankData.ifscCode}
            fullWidth
            className="w-[70%] mt-5 mx-auto"
            {...register("ifsccode", { required: true })}
          />

          <TextField
            label="Paypal Email"
            variant="outlined"
            defaultValue={bankData.paypalEmail}
            fullWidth
            className="w-[70%] mt-5 mx-auto"
            {...register("paypalemail", { required: true })}
          />
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
