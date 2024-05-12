import React from "react";
import imageOne from "../../../public/poert1.png";
import imageTwo from "../../../public/port2.png";
import imageThree from "../../../public/port3.png";
export default function Box({ oneBox, showAndSet }) {
  let { imageURL } = oneBox;
  return (
    <>
      <div
        className="group box rounded-xl cursor-pointer relative"
        onClick={() => {
          showAndSet(imageURL);
        }}
      >
        <img className="rounded-xl" src={imageURL} alt="project image" />
        <div className=" group-hover:opacity-100  transition-opacity duration-500 absolute inset-0 bg-otherColor bg-opacity-80  items-center justify-center rounded-xl flex opacity-0">
          <i className="fa-solid fa-plus text-white text-8xl"></i>
        </div>
      </div>
    </>
  );
}
