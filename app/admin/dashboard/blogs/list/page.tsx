"use client";
import { CardTwo } from "@/app/components/cardTwo";
import { Error } from "@/app/components/error";
import Loader from "@/app/components/Loading";
import img1 from "@/public/430107972_7608970299142599_2611373766157426786_n.jpg";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

interface BlogData {
  id: string;
  title: string;
  description: string;
  url: string;
}

export default function List() {
  const { data, isLoading, error } = useQuery<BlogData[]>({
    queryKey: ["blog"],
    queryFn: async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/blog/?take=15`
      );
      return response.data.data;
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }
  // const data = [
  //   {
  //     title: "Introduction to AI",
  //     url: "https://example.com/intro-to-ai",
  //     image: img1,
  //     description:
  //       "A beginner's guide to understanding artificial intelligence and its applications.",
  //   },
  //   {
  //     title: "Understanding Blockchain",
  //     url: "https://example.com/blockchain-basics",
  //     image: img1,
  //     description:
  //       "Learn the fundamentals of blockchain technology and how it's revolutionizing industries.",
  //   },
  //   {
  //     title: "Web Development with React",
  //     url: "https://example.com/react-web-development",
  //     image: img1,
  //     description:
  //       "Master the skills needed to build modern web applications using React.",
  //   },
  //   {
  //     title: "Mastering Data Science",
  //     url: "https://example.com/data-science-masterclass",
  //     image: img1,
  //     description:
  //       "An advanced course for data scientists, focusing on analysis, visualization, and machine learning.",
  //   },
  //   {
  //     title: "Cybersecurity Essentials",
  //     url: "https://example.com/cybersecurity-essentials",
  //     image: img1,
  //     description:
  //       "Understand key cybersecurity concepts and learn how to protect digital assets.",
  //   },
  // ];
  return (
    <div>
      <table className="w-[95%] mx-auto">
        <thead>
          <tr className="bg-blue-600 text-white h-16">
            <th>Title</th>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((info, index) => (
            <tr key={index} className="h-16">
              <td className="pl-2 text-gray-700">{info.title}</td>
              <td className="pl-2 text-gray-700 truncate max-w-[500px]">
                {info.description}
              </td>
              <td className="text-center text-blue-600">
                <Link href={`/admin/dashboard/blogs/edit/${info.id}`}>
                  Edit
                </Link>
              </td>
              <td className="text-center text-red-600">Delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
