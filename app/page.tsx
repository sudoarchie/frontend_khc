import Image from "next/image";
import { Navbar } from "./components/Navbar";
import img1 from "@/public/download.png";
import img2 from "@/public/frof.gif";
import img3 from "@/public/download1.png";
import img4 from "@/public/download (2).png";
import img5 from "@/public/download3.png";
import img6 from "@/public/download4.png";
import img7 from "@/public/download5.png";
import img8 from "@/public/Vector.png";
import img9 from "@/public/download (1).png";
import img10 from "@/public/dog-sit-cartoon-golden-retriever-cute-pet_81894-10138.jpg";
import { Poppins } from "next/font/google";
import { SecoundaryButton } from "./components/SecoundaryButton";
import { PrimaryButton } from "./components/PrimaryButton";
import { CardFour } from "./components/Cardfour";
import { CardTwo } from "./components/cardTwo";
import { Box } from "./components/Box";
import { InputField } from "./components/Inputfield";
import { Faq } from "./components/faq";
const poppins = Poppins({
  subsets: ["latin"],
  weight: "800",
});

const curriculum = [
  {
    title: "CBSE",
    description:
      "The Central Board of Secondary Education is a national-level board of education in India for public and private schools.",
    url: "https://www.cbse.gov.in",
  },
  {
    title: "IGCSE",
    description:
      "The International General Certificate of Secondary Education is an English language-based examination similar to GCSE.",
    url: "https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse/",
  },
  {
    title: "Cambridge International",
    description:
      "Cambridge Assessment International Education prepares school students for life, helping them develop an informed curiosity and a lasting passion for learning.",
    url: "https://www.cambridgeinternational.org",
  },
  {
    title: "ICSE",
    description:
      "The Indian Certificate of Secondary Education is an examination conducted by the Council for the Indian School Certificate Examinations.",
    url: "https://www.cisce.org",
  },
  {
    title: "IB",
    description:
      "The International Baccalaureate is an international educational foundation offering four educational programmes for children aged 3–19.",
    url: "https://www.ibo.org",
  },
];

const faqData = {
  data: [
    {
      title: "What do KHC tuition courses include?",
      discription: `Clear Concept building
        Strong Foundation
        Regular & Extensive Practice
        Exam-Style/Keyword Focusing
        More extensive for IGCSE & AS/A-Level
        Regular Test
        Regular Doubt Discussion
        Regular update about the sessions`,
    },
    {
      title: "Will there be tuition homework?",
      discription: `Homework is important
        Given after each lesson
        Homework submission before the next lesson is compulsory
        Homework Shortcomings & learning gaps are discussed (worked) in the beginning of the next lesson
        For students who need less homework, separate discussion with the parents is done to ultimately bring the outcome effectively`,
    },
    {
      title: "How frequent is the test?",
      discription: `In general, monthly once per subject
        Depends on the grade of the student & how frequently are the lessons planned weekly`,
    },
    {
      title: "How many lessons per week?",
      discription: `Twice weekly per subject is advisable
        Can be fixed once, twice, thrice, or even daily based on the student’s requirement
        Customizable as one-to-one & 100% personalized`,
    },
  ],
};
const blogs = [
  {
    title: "Understanding JavaScript Closures",
    image: img2,
    description:
      "Learn about closures in JavaScript, how they work, and where you can use them in your projects.",
  },
  {
    title: "Exploring React Hooks",
    image: img2,
    description:
      "A deep dive into React Hooks, including useState, useEffect, and custom hooks, with practical examples.",
  },
  {
    title: "Mastering CSS Grid",
    image: img2,
    description:
      "This guide covers the CSS Grid layout system with tips, tricks, and real-world use cases for building responsive layouts.",
  },
  {
    title: "Optimizing Web Performance with Next.js",
    image: img2,
    description:
      "Discover various strategies to optimize web performance in Next.js applications, from static generation to code splitting.",
  },
  {
    title: "TypeScript Best Practices",
    image: img2,
    description:
      "A guide to writing clean, scalable, and maintainable TypeScript code by following best practices and design patterns.",
  },
];

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-[#272F42] h-[500px]">
        <div className="flex justify-between items-center mx-20">
          <div className="w-1/2 ">
            <div className={poppins.className}>
              <h1 className="text-4xl font-bold text-white mb-2">
                Welcome to KHC
              </h1>
              <div className="flex">
                <span className="text-primary  text-4xl inline">
                  Personalized&nbsp;
                </span>

                <h1 className="text-4xl text-white">Online Tution</h1>
              </div>
            </div>
            <p className="text-white w-3/4 mt-5">
              Online Tuition - Effective,convenient & Time-saving  only when you
              are under correct tutor/guidance
            </p>
            <button className="text-white p-3 mt-5 rounded-full bg-primary ">
              JOIN NOW
            </button>
          </div>
          <Image src={img1} alt={"Khc Image"} className="h-[500px]"></Image>
        </div>
      </div>
      <div className="bg-[#e7d5ca] h-[500px] flex justify-between items-center px-20">
        <Image src={img2} alt={""} className="rounded-full mt-5"></Image>
        <div className="w-1/2">
          <h1 className="text-4xl font-extrabold">
            Every Student is different
          </h1>
          <ul className="list-disc mt-5 ml-5 text-gray-600">
            <li className="mt-2">
              KHC Tuition is customized as per individual student&apos;s
              grasping power.
            </li>
            <li className="mt-2">
              Personalized Attention for young Geniuses of Primary to A-Level.
            </li>
            <li className="mt-2">
              Be the student below average or exceptionaly bright, KHC Tuition
              provides the right solution.
            </li>
          </ul>
          <div className="flex justify-start pl-5 mt-5 gap-5">
            <SecoundaryButton Name={"Join Our Courses Now"}></SecoundaryButton>
            <PrimaryButton Name={"Login Now"}></PrimaryButton>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-center text-4xl font-extrabold my-10">Why KHC?</h1>
        <div>
          <div className="flex justify-center gap-10 items-center">
            <CardFour
              title={"Clear Concept Building"}
              image={img3}
              discription={
                "Clear concept building ensures strong foundational knowledge for effective learning."
              }
            ></CardFour>
            <div
              className="h-[300px] border-solid border-2
             border-borderColor"
            ></div>
            <CardFour
              title={"Regular Assignment"}
              image={img4}
              discription={
                "Regular assignments reinforce learning and ensure consistent progress in mastering topics."
              }
            ></CardFour>
            <div
              className="h-[300px] border-solid border-2
             border-borderColor"
            ></div>
            <CardFour
              title={"Past Paper Solving"}
              image={img3}
              discription={
                "Past paper solving enhances exam readiness and strengthens understanding of key concepts."
              }
            ></CardFour>
          </div>
          <hr className="my-10 w-[70%] mx-auto border-2"></hr>
          <div className="flex justify-center gap-10 items-center">
            <CardFour
              title={"Srong Foundation"}
              image={img5}
              discription={
                "Making a strong foundation ensures a deeper understanding and lasting academic success."
              }
            ></CardFour>
            <div
              className="h-[300px] border-solid border-2
             border-borderColor"
            ></div>
            <CardFour
              title={"Doubt Discussion"}
              image={img6}
              discription={
                "Doubt discussion clears confusion and fosters a deeper understanding of concepts."
              }
            ></CardFour>
            <div
              className="h-[300px] border-solid border-2
             border-borderColor"
            ></div>
            <CardFour
              title={"Critical Thinking"}
              image={img7}
              discription={
                "Promoting critical thinking enhances problem-solving skills and deeper understanding."
              }
            ></CardFour>
          </div>
        </div>
      </div>
      <div className="mt-10 w-[70%] mx-auto">
        <h1 className="text-4xl font-extrabold text-center my-5">
          Learning The Art of Learning
        </h1>
        <ul className="p-4">
          <li className="flex items-center mb-6 gap-5">
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.333008 16.9999C0.333008 7.79517 7.79492 0.333252 16.9997 0.333252C26.2043 0.333252 33.6663 7.79517 33.6663 16.9999C33.6663 26.2046 26.2043 33.6666 16.9997 33.6666C7.79492 33.6666 0.333008 26.2046 0.333008 16.9999ZM23.1782 12.4881C23.829 13.1389 23.829 14.1942 23.1782 14.8451L17.0402 20.9831C16.0973 21.9259 14.5687 21.9259 13.6258 20.9831L10.8212 18.1784C10.1703 17.5276 10.1703 16.4722 10.8212 15.8214C11.472 15.1706 12.5273 15.1706 13.1782 15.8214L15.333 17.9762L20.8212 12.4881C21.472 11.8372 22.5273 11.8372 23.1782 12.4881Z"
                  fill="#F39237"
                />
              </svg>
            </div>
            Understand the concepts thoroughly. Be able to identify the
            inter-connections between different topics.
          </li>
          <li className="flex items-center mb-6 gap-5">
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.333008 16.9999C0.333008 7.79517 7.79492 0.333252 16.9997 0.333252C26.2043 0.333252 33.6663 7.79517 33.6663 16.9999C33.6663 26.2046 26.2043 33.6666 16.9997 33.6666C7.79492 33.6666 0.333008 26.2046 0.333008 16.9999ZM23.1782 12.4881C23.829 13.1389 23.829 14.1942 23.1782 14.8451L17.0402 20.9831C16.0973 21.9259 14.5687 21.9259 13.6258 20.9831L10.8212 18.1784C10.1703 17.5276 10.1703 16.4722 10.8212 15.8214C11.472 15.1706 12.5273 15.1706 13.1782 15.8214L15.333 17.9762L20.8212 12.4881C21.472 11.8372 22.5273 11.8372 23.1782 12.4881Z"
                  fill="#F39237"
                />
              </svg>
            </div>
            Clear doubts and then enjoy solving lots of topic-based questions.
          </li>
          <li className="flex items-center mb-6 gap-5">
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.333008 16.9999C0.333008 7.79517 7.79492 0.333252 16.9997 0.333252C26.2043 0.333252 33.6663 7.79517 33.6663 16.9999C33.6663 26.2046 26.2043 33.6666 16.9997 33.6666C7.79492 33.6666 0.333008 26.2046 0.333008 16.9999ZM23.1782 12.4881C23.829 13.1389 23.829 14.1942 23.1782 14.8451L17.0402 20.9831C16.0973 21.9259 14.5687 21.9259 13.6258 20.9831L10.8212 18.1784C10.1703 17.5276 10.1703 16.4722 10.8212 15.8214C11.472 15.1706 12.5273 15.1706 13.1782 15.8214L15.333 17.9762L20.8212 12.4881C21.472 11.8372 22.5273 11.8372 23.1782 12.4881Z"
                  fill="#F39237"
                />
              </svg>
            </div>
            Welcome Mysteries and Trust in your Knowledge Key.
          </li>
          <li className="flex items-center mb-6 gap-5">
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.333008 16.9999C0.333008 7.79517 7.79492 0.333252 16.9997 0.333252C26.2043 0.333252 33.6663 7.79517 33.6663 16.9999C33.6663 26.2046 26.2043 33.6666 16.9997 33.6666C7.79492 33.6666 0.333008 26.2046 0.333008 16.9999ZM23.1782 12.4881C23.829 13.1389 23.829 14.1942 23.1782 14.8451L17.0402 20.9831C16.0973 21.9259 14.5687 21.9259 13.6258 20.9831L10.8212 18.1784C10.1703 17.5276 10.1703 16.4722 10.8212 15.8214C11.472 15.1706 12.5273 15.1706 13.1782 15.8214L15.333 17.9762L20.8212 12.4881C21.472 11.8372 22.5273 11.8372 23.1782 12.4881Z"
                  fill="#F39237"
                />
              </svg>
            </div>
            Our One-to-One Online Sessions provide personal attention as per the
            child&apos;s level of understanding - uplifting him/her every day.
          </li>
          <li className="flex items-center mb-6 gap-5">
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.333008 16.9999C0.333008 7.79517 7.79492 0.333252 16.9997 0.333252C26.2043 0.333252 33.6663 7.79517 33.6663 16.9999C33.6663 26.2046 26.2043 33.6666 16.9997 33.6666C7.79492 33.6666 0.333008 26.2046 0.333008 16.9999ZM23.1782 12.4881C23.829 13.1389 23.829 14.1942 23.1782 14.8451L17.0402 20.9831C16.0973 21.9259 14.5687 21.9259 13.6258 20.9831L10.8212 18.1784C10.1703 17.5276 10.1703 16.4722 10.8212 15.8214C11.472 15.1706 12.5273 15.1706 13.1782 15.8214L15.333 17.9762L20.8212 12.4881C21.472 11.8372 22.5273 11.8372 23.1782 12.4881Z"
                  fill="#F39237"
                />
              </svg>
            </div>
            Our Group Online Classes are available for IGCSE Grade 9 & 10, and
            CBSE.
          </li>
          <li className="flex items-center mb-6 gap-5">
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.333008 16.9999C0.333008 7.79517 7.79492 0.333252 16.9997 0.333252C26.2043 0.333252 33.6663 7.79517 33.6663 16.9999C33.6663 26.2046 26.2043 33.6666 16.9997 33.6666C7.79492 33.6666 0.333008 26.2046 0.333008 16.9999ZM23.1782 12.4881C23.829 13.1389 23.829 14.1942 23.1782 14.8451L17.0402 20.9831C16.0973 21.9259 14.5687 21.9259 13.6258 20.9831L10.8212 18.1784C10.1703 17.5276 10.1703 16.4722 10.8212 15.8214C11.472 15.1706 12.5273 15.1706 13.1782 15.8214L15.333 17.9762L20.8212 12.4881C21.472 11.8372 22.5273 11.8372 23.1782 12.4881Z"
                  fill="#F39237"
                />
              </svg>
            </div>
            Grade 10 & 12 students following curriculums like Cambridge, CBSE &
            IBDP are made to solve lots of past exam papers to build confidence
            and better understanding of exam-style questions and marking
            schemes.
          </li>
          <li className="flex gap-5 items-center mb-6">
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.333008 16.9999C0.333008 7.79517 7.79492 0.333252 16.9997 0.333252C26.2043 0.333252 33.6663 7.79517 33.6663 16.9999C33.6663 26.2046 26.2043 33.6666 16.9997 33.6666C7.79492 33.6666 0.333008 26.2046 0.333008 16.9999ZM23.1782 12.4881C23.829 13.1389 23.829 14.1942 23.1782 14.8451L17.0402 20.9831C16.0973 21.9259 14.5687 21.9259 13.6258 20.9831L10.8212 18.1784C10.1703 17.5276 10.1703 16.4722 10.8212 15.8214C11.472 15.1706 12.5273 15.1706 13.1782 15.8214L15.333 17.9762L20.8212 12.4881C21.472 11.8372 22.5273 11.8372 23.1782 12.4881Z"
                  fill="#F39237"
                />
              </svg>
            </div>
            To ensure mental and physical health, we focus on Yoga. Realizing
            its benefits, the Yoga course is open for students, faculty,
            friends, family of students & faculty, and anyone interested in
            learning this great methodology known for keeping the mind calm &
            concentrated and the body fit.
          </li>
        </ul>
      </div>
      <div className="bg-primary text-white p-10 w-[70%] h-[200px] mx-auto flex flex-col justify-center items-center rounded-xl">
        <h2 className="text-3xl font-bold mb-5 ">Ready to join our course</h2>
        <div className="flex flex-wrap justify-center items-center">
          Get in touch: hello@xyz.com | Or apply for our course{" "}
          <SecoundaryButton
            Name={"Join Now"}
            className="mx-5"
          ></SecoundaryButton>
        </div>
      </div>
      <div className="flex h-[700px] relative top-[-100px] -z-10">
        <div className="w-1/2 bg-[#272F41] text-white rounded-r-xl flex flex-col justify-center items-center gap-5">
          <h1 className="text-4xl font-bold ">Start journey in 3 steps</h1>
          <div className="w-[400px] h-[100px] rounded-lg p-5 flex  items-center gap-5 border-2 ">
            <div className="rounded-full bg-primary h-[30px] w-[30px] flex justify-center items-center">
              1
            </div>
            <div className="text-2xl font-bold"> Enquire</div>
          </div>
          <div className="w-[400px] h-[100px] rounded-lg p-5 flex  items-center gap-5 border-2 ">
            <div className="rounded-full bg-primary h-[30px] w-[30px] flex justify-center items-center">
              2
            </div>
            <div className="text-2xl font-bold"> Take a free trial</div>
          </div>
          <div className="w-[400px] h-[100px] rounded-lg p-5 flex  items-center gap-5 border-2 ">
            <div className="rounded-full bg-primary h-[30px] w-[30px] flex justify-center items-center">
              3
            </div>
            <div className="text-2xl font-bold">
              Start your learning journey
            </div>
          </div>
        </div>
        <div className="w-1/2 flex flex-col justify-center items-baseline bg-[#ffebde]">
          <Image
            src={img9}
            alt={"Enquire"}
            className="h-[500px] aspect-square object-contain"
          ></Image>
          <div className="flex flex-col mx-auto justify-center items-center">
            <h1 className="text-4xl font-bold text-center">Inquire</h1>
            <div className="text-center text-gray-600">
              Enroll in Our Courses with KHC Online Education
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="text-4xl font-bold text-center">Our Popular Courses</h1>
        <h2 className="text-gray-600 text-center">
          Choose your Curriculum, Grade & subjects required for tutoring to get
          free trial
        </h2>
        <div className="mt-5 flex flex-wrap gap-5 w-[90%] mx-auto justify-center">
          {curriculum.map((info, index) => (
            <CardTwo
              title={info.title}
              discription={info.description}
              url={info.url}
              key={index}
            ></CardTwo>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <h1 className="text-4xl font-bold text-center">
          Post your tutoring requirement here
        </h1>
        <Box className="w-[800px] mx-auto flex flex-col gap-5">
          <InputField label={"Email"}></InputField>
          <InputField label={"Phone Number"}></InputField>
          <InputField label={"Message"}></InputField>
          <PrimaryButton Name={"Quick Enquiry"}></PrimaryButton>
        </Box>
      </div>
      <div className="flex">
        <div className="flex flex-col justify-center items-center mx-auto mt-5 w-1/2 ">
          <h1 className="text-4xl font-bold ">Got questions?</h1>
          <h3 className="text-gray-700 ">
            Have a look through our frequently asked questions
          </h3>
          <Image src={img10} alt={""}></Image>
        </div>
        <div className="w-1/2">
          <Faq data={faqData.data}></Faq>
        </div>
      </div>

      <div className="w-[70%] h-[200px] mx-auto rounded-xl bg-secondary text-white flex flex-col justify-center items-center mt-10">
        <h2 className="text-4xl font-bold">
          Get ready to build your future with us.
        </h2>
        <div className="mt-5 flex gap-5 justify-center items-center">
          Get in touch: email@gmail.com | Or post your tutoring requiment here
          <PrimaryButton Name={"Quick Enquiry"}></PrimaryButton>
        </div>
      </div>
      <div>
        <div className="text-center mt-10 font-bold text-4xl">Latest Blogs</div>
        <div className="flex flex-wrap mt-5 justify-center gap-5">
          {blogs.map((info, index) => (
            <CardTwo
              title={info.title}
              image={info.image}
              discription={info.description}
              key={index}
              url={""}
            ></CardTwo>
          ))}
        </div>
        <PrimaryButton
          Name={"Show All Blogs"}
          className="mt-5 mx-auto"
        ></PrimaryButton>
      </div>
    </div>
  );
}
