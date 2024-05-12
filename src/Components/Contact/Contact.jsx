import React, { useState } from "react";

export default function Contact() {
  let [userInput, setUserInput] = useState([
    {
      title: "userName",
      paragraph: "userName :",
      type: "text",
      id: 55,
    },
    {
      title: "userAge",
      paragraph: "userAge :",
      type: "text",
      id: 45,
    },
    {
      title: "userEmail",
      paragraph: "userEmail :",
      type: "email",
      id: 15,
    },
    {
      title: "userPassword",
      paragraph: "userPassword :",
      type: "text",
      id: 25,
    },
  ]);

  function showLabel() {
    let formInput = document.querySelectorAll("form div input");

    for (let singleInput of formInput) {
      if (singleInput.value) {
        singleInput.previousElementSibling.classList.remove("translate-y-10");

        singleInput.previousElementSibling.classList.remove("relative");
      } else {
        singleInput.previousElementSibling.classList.add("translate-y-10");

        singleInput.previousElementSibling.classList.add("relative");
      }
    }
  }

  return (
    <>
      <div className="bg-white ">
        <div className="max-w-screen-xl mx-auto px-5  lg:px-[72px] md:px-[50px]">
          <div className=" flex flex-col items-center  gap-20 pt-[130px] pb-[30px] container mx-auto">
            <header className="flex flex-col items-center">
              <h2 className="text-[40px] font-bold  text-mainColor text-center">
                CONTACT SECTION
              </h2>
              <div className=" px-3 relative before:absolute before:left-full before:top-1/2 before:h-1 before:bg-mainColor before:w-[80px]   after:absolute after:right-full after:top-1/2 after:h-1 after:bg-mainColor after:w-[80px]   ">
                <i className="fa-solid fa-star text-mainColor"></i>
              </div>
            </header>

            <form className="flex justify-center flex-col gap-3 items-center max-w-[650px] w-full ">
              {userInput.map((oneInput) => (
                <div className="w-full overflow-hidden" key={oneInput.id}>
                  <p className="text-green-400 mb-2  translate-y-10 relative transition-transform duration-500">
                    {oneInput.paragraph}
                  </p>
                  <input
                    onInput={() => {
                      showLabel();
                    }}
                    className=" relative z-1 w-full border-0 border-b border-gray-300 rounded-lg focus:shadow-none  focus:outline-none focus:"
                    type={oneInput.type}
                    placeholder={oneInput.title}
                  />
                </div>
              ))}

              <button
                type="button"
                className="self-start mt-5 sm:w-[130px]  focus:outline-none text-white bg-otherColor font-medium rounded-lg text-sm px-2 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
