"use client";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/dist/client/components/navigation";
import axios from "axios";
import Loader from "@/app/components/Loading";
import { Error } from "@/app/components/error";

const playfair = Playfair_Display({ subsets: ["latin"] });

interface BlogPost {
  id: string;
  title: string;
  description: string;
  url: string;
  date: string;
  content: string;
}

export default function BlogReadingPage() {
  const { id } = useParams();
  console.log(id);
  const { data, isLoading, error } = useQuery({
    queryKey: ["blog", id],
    queryFn: async () => {
      const response = await axios({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/serve`,
        params: {
          id,
        },
      });
      console.log(response.data.data);
      return response.data.data;
    },
  });
  if (isLoading) return <Loader></Loader>;
  if (error) return <Error />;
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>
          <header className="mb-8">
            <h1
              className={`${playfair.className} text-4xl sm:text-5xl font-bold text-gray-900 mb-4`}
            >
              {data.title}
            </h1>
            <p className="text-xl text-gray-500 mb-6">{data.description}</p>
          </header>

          <div className="relative w-full h-96 mb-12">
            <Image
              src={data.url}
              alt={data.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              priority
            />
          </div>

          <div
            className="prose prose-lg max-w-none prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-8 prose-h2:mb-4"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
        </article>
      </main>
    </div>
  );
}
