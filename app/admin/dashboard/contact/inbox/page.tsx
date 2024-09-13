"use client";
import { useForm } from "react-hook-form";
import Mail from "@/app/components/Mail";

export default function Inbox() {
  const data = [
    {
      subject: "Project Collaboration",
      time: "1hr",
      body: "Hello team, I would like to discuss our upcoming project and the next steps to be taken for its successful execution.",
      username: "Alice Johnson",
      useremail: "alice.johnson@example.com",
    },
    {
      subject: "Weekly Standup Meeting",
      time: "45min",
      body: "Just a reminder about our weekly standup meeting scheduled for tomorrow at 10 AM. Please be prepared with updates.",
      username: "John Doe",
      useremail: "john.doe@example.com",
    },
    {
      subject: "Bug Fixes in the Latest Release",
      time: "15min",
      body: "The latest release has some minor bugs that need to be addressed. The issues have been reported and are currently under review.",
      username: "Maria Garcia",
      useremail: "maria.garcia@example.com",
    },
    {
      subject: "Client Feedback on Design",
      time: "2hrs",
      body: "The client provided feedback on the design prototype. There are a few adjustments required before we proceed with the next phase.",
      username: "David Smith",
      useremail: "david.smith@example.com",
    },
    {
      subject: "Code Review",
      time: "3hrs",
      body: "Please review the code changes made in the last commit and provide your feedback. Ensure to focus on the performance improvements.",
      username: "Chen Wei",
      useremail: "chen.wei@example.cn",
    },
  ];

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (formData: any) => {
    console.log("Reply Submitted:", formData);
    reset(); // Reset the form after submission
  };

  return (
    <div className="m-5 w-full">
      <Mail
        className="w-full"
        data={data}
        onSubmit={handleSubmit(onSubmit)}
        register={register}
      ></Mail>
    </div>
  );
}
