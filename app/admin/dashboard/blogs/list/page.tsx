import { CardTwo } from "@/app/components/cardTwo";
import img1 from "@/public/430107972_7608970299142599_2611373766157426786_n.jpg";

export default function List() {
  const data = [
    {
      title: "Introduction to AI",
      url: "https://example.com/intro-to-ai",
      image: img1,
      description:
        "A beginner's guide to understanding artificial intelligence and its applications.",
    },
    {
      title: "Understanding Blockchain",
      url: "https://example.com/blockchain-basics",
      image: img1,
      description:
        "Learn the fundamentals of blockchain technology and how it's revolutionizing industries.",
    },
    {
      title: "Web Development with React",
      url: "https://example.com/react-web-development",
      image: img1,
      description:
        "Master the skills needed to build modern web applications using React.",
    },
    {
      title: "Mastering Data Science",
      url: "https://example.com/data-science-masterclass",
      image: img1,
      description:
        "An advanced course for data scientists, focusing on analysis, visualization, and machine learning.",
    },
    {
      title: "Cybersecurity Essentials",
      url: "https://example.com/cybersecurity-essentials",
      image: img1,
      description:
        "Understand key cybersecurity concepts and learn how to protect digital assets.",
    },
  ];
  return (
    <div className="flex flex-wrap gap-5 m-5">
      {data.map((info, index) => (
        <CardTwo
          title={info.title}
          url={info.url}
          image={info.image}
          discription={info.description}
        ></CardTwo>
      ))}
    </div>
  );
}
