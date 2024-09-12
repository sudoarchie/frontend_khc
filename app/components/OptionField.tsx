import React, { forwardRef, SelectHTMLAttributes } from "react";

interface OptionFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  Label: string;
  Option: string[];
  className?: string;
}

const OptionField = forwardRef<HTMLSelectElement, OptionFieldProps>(
  ({ Label, Option, className, ...props }, ref) => {
    return (
      <div className={`w-full ${className}`}>
        <label className="block mb-1 text-sm text-slate-800">{Label}</label>

        <div className="relative">
          <select
            ref={ref}
            className="w-full h-10 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
            {...props}
          >
            {Option.map((info, index) => (
              <option value={info} key={index}>
                {info}
              </option>
            ))}
          </select>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.2"
            stroke="currentColor"
            className="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-slate-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
            />
          </svg>
        </div>
      </div>
    );
  }
);

OptionField.displayName = "OptionField";

export default OptionField;
