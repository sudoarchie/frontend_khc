"use client";
import { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

interface MultiOption {
  label: string;
  option: Options[];
}
interface Options {
  label: string;
  value: string;
}

export function MultiOptionSelect({ label, option }: MultiOption) {
  const [selected, setSelected] = useState([]);

  return (
    <div>
      <h1 className="my-5 ">{label}</h1>
      {/* <pre>{JSON.stringify(selected)}</pre> */}
      <MultiSelect
        options={option}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      />
    </div>
  );
}
