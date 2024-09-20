import React from "react";
import khclogo from "@/public/logo_2 1.png";
import Image from "next/image";
import Link from "next/link";
export function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-[#01000F] text-white mt-5">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="inline-flex items-center">
                <Image src={khclogo} alt={"KHC logo"}></Image>
                <span className="ml-4 text-lg font-bold">KHC</span>
              </div>
              <div>
                <ul className="flex  items-center gap-5">
                  <li>
                    <Link href={""}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.2737 10.1635L23.2023 0H21.0872L13.3313 8.82305L7.14125 0H0L9.3626 13.3433L0 24H2.11504L10.3002 14.6806L16.8388 24H23.98M2.8784 1.5619H6.12769L21.0856 22.5148H17.8355"
                          fill="white"
                        />
                      </svg>
                    </Link>{" "}
                  </li>
                  <li>
                    <Link href={""}>
                      <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.9805 2.163C16.1845 2.163 16.5645 2.175 17.8305 2.233C21.0825 2.381 22.6015 3.924 22.7495 7.152C22.8075 8.417 22.8185 8.797 22.8185 12.001C22.8185 15.206 22.8065 15.585 22.7495 16.85C22.6005 20.075 21.0855 21.621 17.8305 21.769C16.5645 21.827 16.1865 21.839 12.9805 21.839C9.77647 21.839 9.39647 21.827 8.13147 21.769C4.87147 21.62 3.36047 20.07 3.21247 16.849C3.15447 15.584 3.14247 15.205 3.14247 12C3.14247 8.796 3.15547 8.417 3.21247 7.151C3.36147 3.924 4.87647 2.38 8.13147 2.232C9.39747 2.175 9.77647 2.163 12.9805 2.163ZM12.9805 0C9.72147 0 9.31347 0.014 8.03347 0.072C3.67547 0.272 1.25347 2.69 1.05347 7.052C0.994469 8.333 0.980469 8.741 0.980469 12C0.980469 15.259 0.994469 15.668 1.05247 16.948C1.25247 21.306 3.67047 23.728 8.03247 23.928C9.31347 23.986 9.72147 24 12.9805 24C16.2395 24 16.6485 23.986 17.9285 23.928C22.2825 23.728 24.7105 21.31 24.9075 16.948C24.9665 15.668 24.9805 15.259 24.9805 12C24.9805 8.741 24.9665 8.333 24.9085 7.053C24.7125 2.699 22.2915 0.273 17.9295 0.073C16.6485 0.014 16.2395 0 12.9805 0ZM12.9805 5.838C9.57747 5.838 6.81847 8.597 6.81847 12C6.81847 15.403 9.57747 18.163 12.9805 18.163C16.3835 18.163 19.1425 15.404 19.1425 12C19.1425 8.597 16.3835 5.838 12.9805 5.838ZM12.9805 16C10.7715 16 8.98047 14.21 8.98047 12C8.98047 9.791 10.7715 8 12.9805 8C15.1895 8 16.9805 9.791 16.9805 12C16.9805 14.21 15.1895 16 12.9805 16ZM19.3865 4.155C18.5905 4.155 17.9455 4.8 17.9455 5.595C17.9455 6.39 18.5905 7.035 19.3865 7.035C20.1815 7.035 20.8255 6.39 20.8255 5.595C20.8255 4.8 20.1815 4.155 19.3865 4.155Z"
                          fill="white"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href={""}>
                      <svg
                        width="25"
                        height="18"
                        viewBox="0 0 25 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.5955 0.184125C16.9915 -0.0618748 8.96447 -0.0608748 5.36547 0.184125C1.46847 0.450125 1.00947 2.80412 0.980469 9.00012C1.00947 15.1851 1.46447 17.5491 5.36547 17.8161C8.96547 18.0611 16.9915 18.0621 20.5955 17.8161C24.4925 17.5501 24.9515 15.1961 24.9805 9.00012C24.9515 2.81512 24.4965 0.451125 20.5955 0.184125ZM9.98047 13.0001V5.00013L17.9805 8.99312L9.98047 13.0001Z"
                          fill="white"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href={""}>
                      <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.9805 0H5.98047C3.21947 0 0.980469 2.239 0.980469 5V19C0.980469 21.761 3.21947 24 5.98047 24H19.9805C22.7425 24 24.9805 21.761 24.9805 19V5C24.9805 2.239 22.7425 0 19.9805 0ZM8.98047 19H5.98047V8H8.98047V19ZM7.48047 6.732C6.51447 6.732 5.73047 5.942 5.73047 4.968C5.73047 3.994 6.51447 3.204 7.48047 3.204C8.44647 3.204 9.23047 3.994 9.23047 4.968C9.23047 5.942 8.44747 6.732 7.48047 6.732ZM20.9805 19H17.9805V13.396C17.9805 10.028 13.9805 10.283 13.9805 13.396V19H10.9805V8H13.9805V9.765C15.3765 7.179 20.9805 6.988 20.9805 12.241V19Z"
                          fill="white"
                        />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                Pages
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-white hover:text-white/70"
                    href="#"
                  >
                    Home
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-white hover:text-white/70"
                    href="#"
                  >
                    Courses
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-white hover:text-white/70"
                    href="#"
                  >
                    Blogs
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-white hover:text-white/70"
                    href="#"
                  >
                    Videos
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-base font-medium text-white hover:text-white/70"
                    href="#"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                Apply for Courses
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-white hover:text-white/70"
                    href="#"
                  >
                    Cambridge
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-white hover:text-white/70"
                    href="#"
                  >
                    IB
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-white hover:text-white/70"
                    href="#"
                  >
                    CBSE
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-white hover:text-white/70"
                    href="#"
                  >
                    Franch
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-white hover:text-white/70"
                    href="#"
                  >
                    Spanish
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-white hover:text-white/70"
                    href="#"
                  >
                    Hindi
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                Login
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-white hover:text-white/70"
                    href="#"
                  >
                    Student Login
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-white hover:text-white/70"
                    href="#"
                  >
                    Teacher Login
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-base font-medium text-white hover:text-white/70"
                    href="#"
                  >
                    Admin Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
