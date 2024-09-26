"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function SectionHeader() {
  const [section, setSection] = useState<string>("");
  const pathname = usePathname();
  useEffect(() => {
    const urlExtract = () => {
      const currentUrl = window.location.href;
      const urlArray = currentUrl.split("/");
      const value = urlArray[urlArray.length - 1];
      setSection(value.toUpperCase());
    };

    urlExtract();
  }, [pathname]);

  return <h2 className="text-2xl m-2 font-bold">{section}</h2>;
}
