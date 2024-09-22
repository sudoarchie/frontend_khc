import Image from "next/image";
import img from "@/public/download.png";
import { PrimaryButton } from "../components/PrimaryButton";
import { PinCard } from "../components/PinCard";
export default function Blogs() {
  const data = [
    {
      title: "Understanding JavaScript Closures",
      description:
        "In this comprehensive guide, we dive into the intricacies of artificial intelligence and machine learning, exploring how these technologies are reshaping In this comprehensive guide, we dive into the intricacies of artificial intelligence and machine learning, exploring how these technologies are reshaping industries from healthcare to automotive. You'll learn about the algorithms that power AI, how neural networks simulate human brain activity, and the potential future applications of machine learning that are set to revolutionize the world. Whether you're a beginner or an expert, this guide offers valuable insights into the industries from healthcare to automotive. You'll learn about the algorithms thIn this comprehensive guide, we dive into the intricacies of artificial intelligence and machine learning, exploring how these technologies are reshaping industries from healthcare to automotive. You'll learn about the algorithms that power AI, how neural networks simulate human brain activity, and the potential future applications of machine learning that are set to revolutionize the world. Whether you're a beginner or an expert, this guide offers valuable insights into theat power AI, how neural networks simulate human brain activity, and the potentialIn this comprehensive guide, we dive into the intricacies of artificial intelligence and machine learning, exploring how these technologies are reshaping industries from healthcare to automotive. You'll learn about the algorithms that power AI, how neural networks simulate human brain activity, and the potential future applications of machine learning that are set to revolutionize the world. Whether you're a beginner or an expert, this guide offers valuable insights into the future applications of machine learning that are set to revolutionize the world.In this comprehensive guide, we dive into the intricacies of artificial intelligence and machine learning, exploring how these technologies are reshaping industries from healthcare to automotive. You'll learn about the algorithms that power AI, how neural networks simulate human brain activity, and the potential future applications of machine learning that are set to revolutionize the world. Whether you're a beginner or an expert, this guide offers valuable insights into the Whether you're a beginner or an expert, this guide offers valuable insights into In this comprehensive guide, we dive into the intricacies of artificial intelligence and machine learning, exploring how these technologies are reshaping industries from healthcare to automotive. You'll learn about the algorithms that power AI, how neural networks simulate human brain activity, and the potential future applications of machine learning that are set to revolutionize the world. Whether you're a beginner or an expert, this guide offers valuable insights into thethe most cutting-edge trends in AI, completely unrelated to JavaScript or its cloIn this comprehensive guide, we dive into the intricacies of artificial intelligence and machine learning, exploring how these technologies are reshaping industries from healthcare to automotive. You'll learn about the algorithms that power AI, how neural networks simulate human brain activity, and the potential future applications of machine learning that are set to revolutionize the world. Whether you're a beginner or an expert, this guide offers valuable insights into thesures.",
      image: "https://example.com/images/js-closures.jpg",
    },
    {
      title: "Top 10 Web Development Trends in 2024",
      description:
        "This blog explores the art of backyard gardening, focusing on how to grow your own tomatoes. From selecting the right soil and understanding the perfect watering schedule to choosing the best tomato varieties, this detailed guide will help you become a master gardener. With tips on managing pests, optimizing sunlight exposure, and harvesting techniques, you’ll have a thriving garden in no time. Unfortunately, this has nothing to do with web development trends, but it's perfect for aspiring gardeners!",
      image: "https://example.com/images/web-development-trends-2024.jpg",
    },
    {
      title: "Mastering React Hook Form",
      description:
        "Ancient Egyptian pyramids have fascinated historians and travelers for centuries. This article takes you on a journey back in time, exploring the engineering marvels that allowed the Egyptians to construct these monumental structures without the aid of modern technology. You'll learn about the religious significance of pyramids, the labor force behind their construction, and the mysteries that still surround these ancient wonders. Though it’s not related to React or form handling in any way, this deep dive into history is sure to captivate your imagination.",
      image: "https://example.com/images/react-hook-form-guide.jpg",
    },
    {
      title: "Building Scalable APIs with Node.js",
      description:
        "As technology advances, smartphones continue to be an essential part of daily life. In this article, we review the top smartphones of 2024, analyzing their features, specifications, and overall performance. Whether you're looking for a phone with the best camera, the fastest processor, or the longest battery life, we've got you covered. Detailed comparisons between Android and iOS devices will help you make the right choice. Although this has nothing to do with building APIs in Node.js, it's a must-read for tech enthusiasts looking to upgrade their devices.",
      image: "https://example.com/images/nodejs-api-scalability.jpg",
    },
    {
      title: "CSS Grid vs Flexbox: When to Use Which",
      description:
        "Planning a trip across Europe can be daunting, but with the right guidance, it can also be the adventure of a lifetime. This blog takes you through the most popular European destinations, from the historic streets of Rome to the picturesque landscapes of the Swiss Alps. You'll find tips on budgeting, packing, and navigating local cultures, along with recommendations for must-see landmarks and hidden gems. Although this has absolutely nothing to do with CSS layout techniques like Grid and Flexbox, it’s perfect for the travel-hungry reader ready to explore Europe.",
      image: "https://example.com/images/css-grid-vs-flexbox.jpg",
    },
    {
      title: "Mastering React Hook Form",
      description:
        "Ancient Egyptian pyramids have fascinated historians and travelers for centuries. This article takes you on a journey back in time, exploring the engineering marvels that allowed the Egyptians to construct these monumental structures without the aid of modern technology. You'll learn about the religious significance of pyramids, the labor force behind their construction, and the mysteries that still surround these ancient wonders. Though it’s not related to React or form handling in any way, this deep dive into history is sure to captivate your imagination.",
      image: "https://example.com/images/react-hook-form-guide.jpg",
    },
    {
      title: "Building Scalable APIs with Node.js",
      description:
        "As technology advances, smartphones continue to be an essential part of daily life. In this article, we review the top smartphones of 2024, analyzing their features, specifications, and overall performance. Whether you're looking for a phone with the best camera, the fastest processor, or the longest battery life, we've got you covered. Detailed comparisons between Android and iOS devices will help you make the right choice. Although this has nothing to do with building APIs in Node.js, it's a must-read for tech enthusiasts looking to upgrade their devices.",
      image: "https://example.com/images/nodejs-api-scalability.jpg",
    },
    {
      title: "CSS Grid vs Flexbox: When to Use Which",
      description:
        "Planning a trip across Europe can be daunting, but with the right guidance, it can also be the adventure of a lifetime. This blog takes you through the most popular European destinations, from the historic streets of Rome to the picturesque landscapes of the Swiss Alps. You'll find tips on budgeting, packing, and navigating local cultures, along with recommendations for must-see landmarks and hidden gems. Although this has absolutely nothing to do with CSS layout techniques like Grid and Flexbox, it’s perfect for the travel-hungry reader ready to explore Europe.",
      image: "https://example.com/images/css-grid-vs-flexbox.jpg",
    },
    {
      title: "Mastering React Hook Form",
      description:
        "Ancient Egyptian pyramids have fascinated historians and travelers for centuries. This article takes you on a journey back in time, exploring the engineering marvels that allowed the Egyptians to construct these monumental structures without the aid of modern technology. You'll learn about the religious significance of pyramids, the labor force behind their construction, and the mysteries that still surround these ancient wonders. Though it’s not related to React or form handling in any way, this deep dive into history is sure to captivate your imagination.",
      image: "https://example.com/images/react-hook-form-guide.jpg",
    },
    {
      title: "Building Scalable APIs with Node.js",
      description:
        "As technology advances, smartphones continue to be an essential part of daily life. In this article, we review the top smartphones of 2024, analyzing their features, specifications, and overall performance. Whether you're looking for a phone with the best camera, the fastest processor, or the longest battery life, we've got you covered. Detailed comparisons between Android and iOS devices will help you make the right choice. Although this has nothing to do with building APIs in Node.js, it's a must-read for tech enthusiasts looking to upgrade their devices.",
      image: "https://example.com/images/nodejs-api-scalability.jpg",
    },
    {
      title: "CSS Grid vs Flexbox: When to Use Which",
      description:
        "Planning a trip across Europe can be daunting, but with the right guidance, it can also be the adventure of a lifetime. This blog takes you through the most popular European destinations, from the historic streets of Rome to the picturesque landscapes of the Swiss Alps. You'll find tips on budgeting, packing, and navigating local cultures, along with recommendations for must-see landmarks and hidden gems. Although this has absolutely nothing to do with CSS layout techniques like Grid and Flexbox, it’s perfect for the travel-hungry reader ready to explore Europe.",
      image: "https://example.com/images/css-grid-vs-flexbox.jpg",
    },
    {
      title: "Mastering React Hook Form",
      description:
        "Ancient Egyptian pyramids have fascinated historians and travelers for centuries. This article takes you on a journey back in time, exploring the engineering marvels that allowed the Egyptians to construct these monumental structures without the aid of modern technology. You'll learn about the religious significance of pyramids, the labor force behind their construction, and the mysteries that still surround these ancient wonders. Though it’s not related to React or form handling in any way, this deep dive into history is sure to captivate your imagination.",
      image: "https://example.com/images/react-hook-form-guide.jpg",
    },
    {
      title: "Building Scalable APIs with Node.js",
      description:
        "As technology advances, smartphones continue to be an essential part of daily life. In this article, we review the top smartphones of 2024, analyzing their features, specifications, and overall performance. Whether you're looking for a phone with the best camera, the fastest processor, or the longest battery life, we've got you covered. Detailed comparisons between Android and iOS devices will help you make the right choice. Although this has nothing to do with building APIs in Node.js, it's a must-read for tech enthusiasts looking to upgrade their devices.",
      image: "https://example.com/images/nodejs-api-scalability.jpg",
    },
    {
      title: "CSS Grid vs Flexbox: When to Use Which",
      description:
        "Planning a trip across Europe can be daunting, but with the right guidance, it can also be the adventure of a lifetime. This blog takes you through the most popular European destinations, from the historic streets of Rome to the picturesque landscapes of the Swiss Alps. You'll find tips on budgeting, packing, and navigating local cultures, along with recommendations for must-see landmarks and hidden gems. Although this has absolutely nothing to do with CSS layout techniques like Grid and Flexbox, it’s perfect for the travel-hungry reader ready to explore Europe.",
      image: "https://example.com/images/css-grid-vs-flexbox.jpg",
    },
    {
      title: "Mastering React Hook Form",
      description:
        "Ancient Egyptian pyramids have fascinated historians and travelers for centuries. This article takes you on a journey back in time, exploring the engineering marvels that allowed the Egyptians to construct these monumental structures without the aid of modern technology. You'll learn about the religious significance of pyramids, the labor force behind their construction, and the mysteries that still surround these ancient wonders. Though it’s not related to React or form handling in any way, this deep dive into history is sure to captivate your imagination.",
      image: "https://example.com/images/react-hook-form-guide.jpg",
    },
    {
      title: "Building Scalable APIs with Node.js",
      description:
        "As technology advances, smartphones continue to be an essential part of daily life. In this article, we review the top smartphones of 2024, analyzing their features, specifications, and overall performance. Whether you're looking for a phone with the best camera, the fastest processor, or the longest battery life, we've got you covered. Detailed comparisons between Android and iOS devices will help you make the right choice. Although this has nothing to do with building APIs in Node.js, it's a must-read for tech enthusiasts looking to upgrade their devices.",
      image: "https://example.com/images/nodejs-api-scalability.jpg",
    },
    {
      title: "CSS Grid vs Flexbox: When to Use Which",
      description:
        "Planning a trip across Europe can be daunting, but with the right guidance, it can also be the adventure of a lifetime. This blog takes you through the most popular European destinations, from the historic streets of Rome to the picturesque landscapes of the Swiss Alps. You'll find tips on budgeting, packing, and navigating local cultures, along with recommendations for must-see landmarks and hidden gems. Although this has absolutely nothing to do with CSS layout techniques like Grid and Flexbox, it’s perfect for the travel-hungry reader ready to explore Europe.",
      image: "https://example.com/images/css-grid-vs-flexbox.jpg",
    },
  ];

  const pinBlog = data.splice(0, 1);
  const remainingBlog = data.splice(1);
  return (
    <div className="mt-10">
      <div className="w-[90%] h-[400px]  mx-auto rounded-xl border-[2px] border-borderColor flex p-10 ">
        <Image
          src={img}
          alt={"blog"}
          className="rounded-lg  object-cover w-1/2"
        />
        <div className="w-1/2">
          <h1 className="font-bold text-3xl">{pinBlog[0].title}</h1>
          <p className=" h-[220px] truncate text-wrap text-justify text-gray-700 mt-5">
            {pinBlog[0].description}
          </p>
          <PrimaryButton Name="Read More" className="mt-2"></PrimaryButton>
        </div>
      </div>
      <div className="flex flex-wrap  justify-center gap-y-24 my-20">
        {remainingBlog.map((info, index) => (
          <PinCard
            title={info.title}
            // image={info.image}
            discription={info.description}
            key={index}
            url={"https://google.com"}
          ></PinCard>
        ))}
      </div>
    </div>
  );
}
