import { CardTwo } from "@/app/components/cardTwo";
import img1 from "@/public/12.png";
import img2 from "@/public/13.png";
import img3 from "@/public/14.png";
export default function Blog() {
  return (
    <div className="flex flex-wrap gap-5 m-5">
      <CardTwo
        title={"Add New Blog"}
        image={img1}
        url={"/admin/dashboard/blogs/add"}
      ></CardTwo>
      <CardTwo
        title={"List Blog"}
        image={img2}
        url={"/admin/dashboard/blogs/list"}
      ></CardTwo>
      <CardTwo
        title={"Edit Blog"}
        image={img3}
        url={"/admin/dashboard/blogs/edit"}
      ></CardTwo>
      <CardTwo
        title={"Preview Blog"}
        image={img1}
        url={"/admin/dashboard/blogs/preview"}
      ></CardTwo>
    </div>
  );
}
