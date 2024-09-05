import { CardTwo } from "@/app/components/cardTwo";

export default function Contact() {
  return (
    <div className="flex gap-5 flex-wrap m-5">
      <CardTwo
        title={"Free Class Enquiry"}
        url={"/admin/dashboard/contact/enquiry"}
      ></CardTwo>
      <CardTwo title={"Inbox"} url={"/admin/dashboard/contact/inbox"}></CardTwo>
    </div>
  );
}
