import { CardTwo } from "@/app/components/cardTwo";
import img1 from "@/public/10.png";
import img2 from "@/public/11.png";

export default function Contact() {
  return (
    <div className="flex gap-5 flex-wrap m-5">
      <CardTwo
        image={img1}
        title={"Free Class Enquiry"}
        url={"/admin/dashboard/contact/enquiry"}
      ></CardTwo>
      {/* <CardTwo
        image={img2}
        title={"Inbox"}
        url={"/admin/dashboard/contact/inbox"}
      ></CardTwo> */}
    </div>
  );
}
