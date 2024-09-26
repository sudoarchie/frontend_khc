import { TextField } from "@mui/material";

interface Input {
  label: string;
  placeholder: string;
  className?: string;
  value?: string | number;
  rows: number;
}
export function TextAreaField({
  placeholder,
  label,
  className,
  value,
  rows,
}: Input) {
  return (
    <div className={`relative   ${className}`}>
      <TextField
        placeholder={placeholder}
        defaultValue={value}
        rows={rows}
        label="Outlined"
        variant="outlined"
        id="outlined-basic"
        // className="peer h-full w-full rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-primary focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
      />
    </div>
  );
}
