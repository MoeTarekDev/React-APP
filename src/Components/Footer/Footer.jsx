import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-mainColor dark:bg-gray-900 relative bottom-0 left-0 right-0  ">
        <div className=" w-full ">
          <div className="">
            <div className="grid sm:grid-cols-3  gap-8 sm:gap-12  place-items-center py-[90px] px-[40px]">
              <div className="flex flex-col gap-2 text-center">
                <h2 className="text-[28px]  font-bold text-white uppercase  ">
                  LOCATION
                </h2>
                <ul className="text-white dark:text-gray-400 font-medium ">
                  <li className="mb-4">
                    <span className="">2215 John Daniel Drive</span>
                  </li>
                  <li>
                    <span className="">Clark, MO 65243</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3">
                <h2 className="text-[28px] font-bold text-white uppercase text-center">
                  AROUND THE WEB
                </h2>
                <ul className="flex items-center justify-center gap-1 text-gray-500 dark:text-gray-400 font-medium">
                  <li className=" w-[35px] h-[35px] rounded-full border border-white flex items-center justify-center text-white">
                    <i className="fa-brands fa-facebook"></i>
                  </li>
                  <li className=" w-[35px] h-[35px] rounded-full border border-white flex items-center justify-center text-white">
                    <i className="fa-brands fa-twitter"></i>
                  </li>
                  <li className=" w-[35px] h-[35px] rounded-full border border-white flex items-center justify-center text-white">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </li>
                  <li className=" w-[35px] h-[35px] rounded-full border border-white flex items-center justify-center text-white">
                    <i className="fa-solid fa-globe"></i>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-2 text-center">
                <h2 className="text-[28px]  font-bold text-white uppercase ">
                  ABOUT FREELANCER
                </h2>
                <p className="text-white">
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center bg-[#1a252f] py-[25px]  ">
            <span className="text-[16px]   dark:text-gray-400 text-white">
              Copyright © Your Website 2021
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
