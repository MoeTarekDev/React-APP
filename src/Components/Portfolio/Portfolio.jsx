import React, { useState } from "react";
import imageOne from "../../../public/poert1.png";
import imageTwo from "../../../public/port2.png";
import imageThree from "../../../public/port3.png";
import Box from "../Box/Box";
export default function Portfolio() {
  let [boxes, setBox] = useState([
    {
      imageURL: imageOne,
      id: 1,
    },
    {
      imageURL: imageTwo,
      id: 2,
    },
    {
      imageURL: imageThree,
      id: 3,
    },
    {
      imageURL: imageOne,
      id: 4,
    },
    {
      imageURL: imageTwo,
      id: 5,
    },
    {
      imageURL: imageThree,
      id: 6,
    },
  ]);
  let [holder, setHolder] = useState(null);

  function showAndSet(imageUrl) {
    document.querySelector(".pop-over").classList.replace("hidden", "flex");
    setHolder(imageUrl);
  }
  function hideAndUnset() {
    document.querySelector(".pop-over").classList.replace("flex", "hidden");
    setHolder(null);
  }
  return (
    <>
      <div className="bg-white ">
        <div className="max-w-screen-xl mx-auto px-5  lg:px-[72px] md:px-[50px]">
          <div className=" flex flex-col  gap-5 pt-[130px] pb-[30px] container mx-auto">
            <header className="flex flex-col items-center">
              <h2 className="text-[40px] font-bold  text-mainColor text-center">
                PORTFOLIO COMPONENT
              </h2>
              <div className=" px-3 relative before:absolute before:left-full before:top-1/2 before:h-1 before:bg-mainColor before:w-[80px]   after:absolute after:right-full after:top-1/2 after:h-1 after:bg-mainColor after:w-[80px]   ">
                <i className="fa-solid fa-star text-mainColor"></i>
              </div>
            </header>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {boxes.map((oneBox) => (
                <Box
                  oneBox={oneBox}
                  setHolder={setHolder}
                  showAndSet={showAndSet}
                  key={oneBox.id}
                />
              ))}
            </div>
          </div>
        </div>
        <div
          onClick={(e) => {
            if (!e.target.classList.contains("w-[600px]")) {
              hideAndUnset();
            }
          }}
          className="pop-over fixed hidden left-0 right-0 top-0 bottom-0 bg-blue-500 bg-opacity-30 z-50  items-center justify-center"
        >
          <img className="w-[600px]" src={holder} alt="project image" />
        </div>
      </div>
    </>
  );
}
