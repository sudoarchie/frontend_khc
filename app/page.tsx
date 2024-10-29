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

import { Faq } from "./components/faq";
import { PinCard } from "./components/PinCard";
import { useQuery } from "@tanstack/react-query";
import { CurriculumCard } from "./components/CurriculumCard";
import BlogComponent from "./components/Blog";
import EnquiryComponent from "./components/EnquiryComponent";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "800",
});

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

export default function Home() {
  return (
    <div className="w-full">
      <div className="bg-[#272F42] min-h-[500px] py-10">
        <div className="flex flex-col md:flex-row justify-between items-center mx-4 md:mx-20">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className={poppins.className}>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Welcome to KHC
              </h1>
              <div className="flex flex-wrap">
                <span className="text-primary text-3xl md:text-4xl inline">
                  Personalized&nbsp;
                </span>
                <h1 className="text-3xl md:text-4xl text-white">
                  Online Tution
                </h1>
              </div>
            </div>
            <p className="text-white w-full md:w-3/4 mt-5">
              Online Tuition - Effective, convenient & Time-saving only when you
              are under correct tutor/guidance
            </p>
            <button className="text-white p-3 mt-5 rounded-full bg-primary">
              JOIN NOW
            </button>
          </div>
          <Image
            src={img1}
            alt={"Khc Image"}
            className="h-auto md:h-[500px] w-full md:w-auto"
          ></Image>
        </div>
      </div>

      <div className="bg-[#e7d5ca] min-h-[500px] py-10 flex flex-col md:flex-row justify-between items-center px-4 md:px-20">
        <Image
          src={img2}
          alt={""}
          className="rounded-full mt-5 w-full md:w-auto"
        ></Image>
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <h1 className="text-3xl md:text-4xl font-extrabold">
            Every Student is different
          </h1>
          <ul className="list-disc mt-5 ml-5 text-gray-600">
            <li className="mt-2">
              KHC Tuition is customized as per individual student&apos;s
              grasping power.
            </li>
            <li className="mt-2">
              Personalized Attention for young Geniuses of Primary to A-Level.
            </li>
            <li className="mt-2">
              Be the student below average or exceptionally bright, KHC Tuition
              provides the right solution.
            </li>
          </ul>
          <div className="flex flex-col md:flex-row justify-start pl-5 mt-5 gap-5">
            <SecoundaryButton Name={"Join Our Courses Now"}></SecoundaryButton>
            <PrimaryButton Name={"Login Now"}></PrimaryButton>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-center text-3xl md:text-4xl font-extrabold my-10">
          Why KHC?
        </h1>
        <div className="flex flex-col md:flex-row justify-center gap-10 items-center flex-wrap">
          <CardFour
            title={"Clear Concept Building"}
            image={img3}
            discription={
              "Clear concept building ensures strong foundational knowledge for effective learning."
            }
          ></CardFour>
          <div className="hidden md:block h-[300px] border-solid border-2 border-borderColor"></div>
          <CardFour
            title={"Regular Assignment"}
            image={img4}
            discription={
              "Regular assignments reinforce learning and ensure consistent progress in mastering topics."
            }
          ></CardFour>
          <div className="hidden md:block h-[300px] border-solid border-2 border-borderColor"></div>
          <CardFour
            title={"Past Paper Solving"}
            image={img3}
            discription={
              "Past paper solving enhances exam readiness and strengthens understanding of key concepts."
            }
          ></CardFour>
        </div>
        <hr className="my-10 w-[90%] md:w-[70%] mx-auto border-2"></hr>
        <div className="flex flex-col md:flex-row justify-center gap-10 items-center flex-wrap">
          <CardFour
            title={"Strong Foundation"}
            image={img5}
            discription={
              "Making a strong foundation ensures a deeper understanding and lasting academic success."
            }
          ></CardFour>
          <div className="hidden md:block h-[300px] border-solid border-2 border-borderColor"></div>
          <CardFour
            title={"Doubt Discussion"}
            image={img6}
            discription={
              "Doubt discussion clears confusion and fosters a deeper understanding of concepts."
            }
          ></CardFour>
          <div className="hidden md:block h-[300px] border-solid border-2 border-borderColor"></div>
          <CardFour
            title={"Critical Thinking"}
            image={img7}
            discription={
              "Promoting critical thinking enhances problem-solving skills and deeper understanding."
            }
          ></CardFour>
        </div>
      </div>

      <div className="mt-10 w-[90%] md:w-[70%] mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center my-5">
          Learning The Art of Learning
        </h1>
        <ul className="p-4">
          {/* ... (keep the list items as they are, they're already responsive) */}
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
          </li>{" "}
        </ul>
      </div>

      <div className="bg-primary text-white p-6 md:p-10 w-[90%] md:w-[70%] mx-auto flex flex-col justify-center items-center rounded-xl mt-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-5 text-center">
          Ready to join our course
        </h2>
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center text-center md:text-left">
          <span className="mb-4 md:mb-0">
            Get in touch: hello@xyz.com | Or apply for our course
          </span>
          <SecoundaryButton
            Name={"Join Now"}
            className="mt-4 md:mt-0 md:ml-5"
          ></SecoundaryButton>
        </div>
      </div>

      <div className="flex flex-col md:flex-row min-h-[700px] relative md:top-[-100px] -z-10 mt-20 md:mt-0">
        <div className="w-full md:w-1/2 bg-[#272F41] text-white rounded-b-xl md:rounded-r-xl flex flex-col justify-center items-center gap-5 py-10">
          <h1 className="text-3xl md:text-4xl font-bold text-center">
            Start journey in 3 steps
          </h1>
          <div className="w-[90%] md:w-[400px] h-[100px] rounded-lg p-5 flex items-center gap-5 border-2">
            <div className="rounded-full bg-primary h-[30px] w-[30px] flex justify-center items-center">
              1
            </div>
            <div className="text-xl md:text-2xl font-bold"> Enquire</div>
          </div>
          <div className="w-[90%] md:w-[400px] h-[100px] rounded-lg p-5 flex items-center gap-5 border-2">
            <div className="rounded-full bg-primary h-[30px] w-[30px] flex justify-center items-center">
              2
            </div>
            <div className="text-xl md:text-2xl font-bold">
              {" "}
              Take a free trial
            </div>
          </div>
          <div className="w-[90%] md:w-[400px] h-[100px] rounded-lg p-5 flex items-center gap-5 border-2">
            <div className="rounded-full bg-primary h-[30px] w-[30px] flex justify-center items-center">
              3
            </div>
            <div className="text-xl md:text-2xl font-bold">
              Start your learning journey
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-[#ffebde] py-10">
          <Image
            src={img9}
            alt={"Enquire"}
            className="h-auto md:h-[500px] w-full md:w-auto object-contain"
          ></Image>
          <div className="flex flex-col mx-auto justify-center items-center mt-5">
            <h1 className="text-3xl md:text-4xl font-bold text-center">
              Inquire
            </h1>
            <div className="text-center text-gray-600">
              Enroll in Our Courses with KHC Online Education
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          Our Popular Courses
        </h1>
        <h2 className="text-gray-600 text-center mt-2">
          Choose your Curriculum, Grade & subjects required for tutoring to get
          free trial
        </h2>

        <CurriculumCard></CurriculumCard>
      </div>

      <div className="mt-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          Post your tutoring requirement here
        </h1>
        <EnquiryComponent></EnquiryComponent>
      </div>

      <div className="flex flex-col md:flex-row mt-10">
        <div className="flex flex-col justify-center items-center mx-auto mt-5 w-full md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold text-center">
            Got questions?
          </h1>
          <h3 className="text-gray-700 text-center mt-2">
            Have a look through our frequently asked questions
          </h3>
          <Image src={img10} alt={""} className="mt-5 w-full md:w-auto"></Image>
        </div>
        <div className="w-full md:w-1/2 mt-10 md:mt-0">
          <Faq data={faqData.data}></Faq>
        </div>
      </div>

      <div className="w-[90%] md:w-[70%] mx-auto rounded-xl bg-secondary text-white flex flex-col justify-center items-center mt-10 py-10 px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Get ready to build your future with us.
        </h2>
        <div className="mt-5 flex flex-col md:flex-row gap-5 justify-center items-center text-center md:text-left">
          <span>
            Get in touch: email@gmail.com | Or post your tutoring requirement
            here
          </span>
          <PrimaryButton Name={"Quick Enquiry"}></PrimaryButton>
        </div>
      </div>

      <div>
        <div className="text-center mt-10 font-bold text-3xl md:text-4xl">
          Latest Blogs
        </div>
        <BlogComponent></BlogComponent>
        <PrimaryButton
          Name={"Show All Blogs"}
          className="mt-5 mx-auto"
        ></PrimaryButton>
      </div>
    </div>
  );
}
