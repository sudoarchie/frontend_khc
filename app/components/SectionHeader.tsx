"use client";
import { useEffect, useState } from "react";

export function SectionHeader() {
  const [section, setSection] = useState<string>("");
  useEffect(() => {
    const urlExtract = () => {
      const currentUrl = window.location.href;
      const urlArray = currentUrl.split("/");
      const value = urlArray[urlArray.length - 1];
      setSection(value.toUpperCase());
    };

    urlExtract();
  }, []);

  return <h2 className="text-2xl m-2 font-bold">{section}</h2>;
}
