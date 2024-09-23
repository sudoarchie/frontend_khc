import { CardThree } from "../components/CardThree";
import GradientCard from "../components/gradientCard";
import { Navbar } from "../components/Navbar";
import { BackgroundGradient } from "../components/ui/background-gradient";
import img1 from "@/public/430107972_7608970299142599_2611373766157426786_n.jpg";
export default function Courses() {
  const data = [
    {
      title: "The Future of AI",
      description:
        "An in-depth look into the advancements in Artificial Intelligence and its impact on society.",
      image: img1,
      url: "https://example.com/articles/future-of-ai",
    },
    {
      title: "Understanding Quantum Computing",
      description:
        "A beginner's guide to the world of quantum computing and its potential applications.",
      image: img1,
      url: "https://example.com/articles/quantum-computing",
    },
    {
      title: "Top 10 Web Development Frameworks in 2024",
      description:
        "A comprehensive list of the most popular web development frameworks used by developers.",
      image: img1,
      url: "https://example.com/articles/web-development-frameworks",
    },
    {
      title: "How to Build a Personal Brand",
      description:
        "Learn the essential steps to building a strong personal brand in the digital era.",
      image: img1,
      url: "https://example.com/articles/personal-brand",
    },
    {
      title: "The Rise of Electric Vehicles",
      description:
        "Exploring the growth of electric vehicles and their impact on the environment and economy.",
      image: img1,
      url: "https://example.com/articles/electric-vehicles",
    },
  ];
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-5">Our Courses</h1>
      <div className="m-5 flex flex-wrap gap-5 justify-center">
        {data.map((info, index) => (
          <GradientCard key={index}>
            <CardThree
              title={info.title}
              discription={info.description}
              image={info.image}
              url={info.url}
              key={index}
            ></CardThree>
          </GradientCard>
        ))}
      </div>
    </div>
  );
}
