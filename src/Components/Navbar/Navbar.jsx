import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  window.onscroll = function () {
    increasePadding();
  };
  function increasePadding() {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      document.querySelector("nav").classList.replace("py-[34px]", "py-[14px]");
    } else {
      document.querySelector("nav").classList.replace("py-[14px]", "py-[34px]");
    }
  }

  return (
    <>
      <nav className="bg-mainColor border-gray-200 dark:bg-gray-900 transition-all duration-500 py-[34px] text-white  fixed top-0 left-0 right-0 z-10">
        <div className="max-w-screen-xl px-5 mx-auto lg:px-[72px] md:px-[50px]">
          <div className="container  mx-auto ">
            <div className=" flex flex-wrap items-center justify-between transition-all duration-500">
              <Link
                to="/"
                className="flex items-center space-x-3 rtl:space-x-reverse"
              >
                <span className="self-center text-2xl md:text-[32px] font-bold whitespace-nowrap dark:text-white uppercase">
                  Start Framework
                </span>
              </Link>
              <button
                data-collapse-toggle="navbar-default"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
              <div
                className="hidden w-full md:block md:w-auto"
                id="navbar-default"
              >
                <ul className="font-medium  flex flex-col  md:p-0 mt-4  md:flex-row space-y-7 md:space-y-0 md:space-x-3 rtl:space-x-reverse md:mt-0 md:border-0 text-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li>
                    <Link
                      to="about"
                      className="md:block  py-2 md:px-3  px-2 focus:bg-otherColor  font-bold text-base rounded uppercase  md:border-0  dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="portfolio"
                      className="md:block py-2 md:px-3 px-2 focus:bg-otherColor  font-bold text-base rounded uppercase  md:border-0  dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="contact"
                      className="md:block py-2 md:px-3 px-2 focus:bg-otherColor  font-bold text-base rounded uppercase  md:border-0  dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
