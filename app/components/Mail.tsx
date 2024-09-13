"use client";
import { useState } from "react";
interface Message {
  subject: string;
  time: string;
  body: string;
  username: string;
  useremail: string;
}
interface MailInterface {
  data: Message[];
  className?: string;
  onSubmit: (formData: any) => void;
  register: any;
}
export default function Mail({
  data,
  className,
  onSubmit,
  register,
}: MailInterface) {
  const [open, setOpen] = useState<number>(0);
  function MailOpener(id: number) {
    setOpen(id);
  }

  return (
    <main className={`flex w-full h-full shadow-lg rounded-3xl ${className}`}>
      <section className="flex flex-col pt-3 w-4/12 bg-gray-50 h-full overflow-y-scroll">
        <ul className="mt-6">
          {data.map((info, index: number) => (
            <li
              key={index}
              className="py-5 border-b px-3 transition hover:bg-indigo-100"
            >
              <div
                className="flex justify-between items-center"
                onClick={() => MailOpener(index)}
              >
                <h3 className="text-lg font-semibold">{info.subject}</h3>
                <p className="text-md text-gray-400">{info.time}</p>
              </div>
              <div className="text-md italic text-gray-400">
                {info.body.split(" ").slice(0, 5).join(" ")}...
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="w-6/12 px-4 flex flex-col bg-white rounded-r-3xl">
        <div className="flex justify-between items-center h-48 border-b-2 mb-8">
          <div className="flex space-x-4 items-center">
            <div className="h-12 w-12 rounded-full overflow-hidden">
              <img
                src="https://bit.ly/2KfKgdy"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="font-semibold text-lg">{data[open].username}</h3>
              <p className="text-light text-gray-400">{data[open].useremail}</p>
            </div>
          </div>
          {/* Icons omitted for brevity */}
        </div>

        <section>
          <article className="mt-8 text-gray-500 leading-7 tracking-wider">
            {data[open].body}
          </article>
        </section>

        <section className="mt-6 border rounded-xl bg-gray-50 mb-3">
          <form onSubmit={onSubmit}>
            <textarea
              className="w-full bg-gray-50 p-2 rounded-xl"
              placeholder="Type your reply here..."
              rows={3}
              {...register("reply")}
            ></textarea>
            <div className="flex items-center justify-between p-2">
              <button type="button" className="h-6 w-6 text-gray-400">
                {/* Icon omitted for brevity */}
              </button>
              <button
                type="submit"
                className="bg-purple-600 text-white px-6 py-2 rounded-xl"
              >
                Reply
              </button>
            </div>
          </form>
        </section>
      </section>
    </main>
  );
}
