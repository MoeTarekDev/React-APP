import React from "react";
import avatar from "../../../public/avataaars.svg";

export default function Front() {
  return (
    <>
      <div className=" bg-otherColor">
        <div className="max-w-screen-xl mx-auto px-5 flex flex-col items-center gap-3 pt-[135px] pb-[63px]">
          <img className="w-[250px] mb-3" src={avatar} alt="avatar image" />
          <h1 className="text-[40px] font-bold  text-white text-center">
            START FRAMEWORK
          </h1>
          <div className=" px-3 relative before:absolute before:left-full before:top-1/2 before:h-1 before:bg-white before:w-[80px]   after:absolute after:right-full after:top-1/2 after:h-1 after:bg-white after:w-[80px]   ">
            <i className="fa-solid fa-star text-white"></i>
          </div>
          <p className="text-white">
            Graphic Artist - Web Designer - Illustrator
          </p>
        </div>
      </div>
    </>
  );
}
