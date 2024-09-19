"use client";
import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
interface Data {
  title: string;
  discription: string;
}
interface faq {
  data: Data[];
}
export const Faq = ({ data }: faq) => {
  const [vIndex, setVIndex] = useState<number | null>();
  return (
    <section className="mx-auto max-w-7xl px-2 py-10 md:px-0">
      <div>
        <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
          {data.map((info, index) => (
            <div
              className="cursor-pointer rounded-md border border-gray-400 shadow-lg transition-all duration-200"
              key={index}
            >
              <button
                type="button"
                className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
                onClick={() => setVIndex(vIndex == index ? null : index)}
              >
                <span className="flex text-lg font-semibold text-black">
                  {info.title}
                </span>

                <ChevronUp className="h-5 w-5 text-gray-500" />
              </button>
              {vIndex == index ? (
                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                  <p className="text-gray-500">{info.discription}</p>
                </div>
              ) : (
                <></>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
