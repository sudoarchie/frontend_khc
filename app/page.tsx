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

import { Poppins } from "next/font/google";
import { SecoundaryButton } from "./components/SecoundaryButton";
import { PrimaryButton } from "./components/PrimaryButton";
import { CardFour } from "./components/Cardfour";
// import { Bold } from "lucide-react";
const poppins = Poppins({
  subsets: ["latin"],
  weight: "800",
});
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
              KHC Tuition is customized as per individual student's grasping
              power.
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
            child's level of understanding - uplifting him/her every day.
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
    </div>
  );
}
