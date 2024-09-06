import { CardTwo } from "@/app/components/cardTwo";

export default function Blog() {
  return (
    <div className="flex flex-wrap gap-5 m-5">
      <CardTwo
        title={"Add New Blog"}
        url={"/admin/dashboard/blogs/add"}
      ></CardTwo>
      <CardTwo
        title={"List Blog"}
        url={"/admin/dashboard/blogs/list"}
      ></CardTwo>
      <CardTwo
        title={"Edit Blog"}
        url={"/admin/dashboard/blogs/edit"}
      ></CardTwo>
      <CardTwo
        title={"Preview Blog"}
        url={"/admin/dashboard/blogs/preview"}
      ></CardTwo>
    </div>
  );
}
