import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  url: string;
  link?: string;
}

export default function SimpleCard(blogData: BlogPost) {
  return (
    <Link href={blogData.link || ""}>
      <div className="w-[400px]  mx-auto px-4 py-8 cursor-pointer">
        <article className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative w-full h-64 sm:h-80 md:h-96">
            <Image
              src={blogData.url}
              alt={blogData.title}
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          <div className="p-6 h-[200px]">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {blogData.title}
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed">
              {blogData.description}
            </p>
          </div>
        </article>
      </div>
    </Link>
  );
}
