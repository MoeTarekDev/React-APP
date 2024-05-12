import React from "react";

export default function About() {
  return (
    <>
      <div className=" bg-otherColor">
        <div className="max-w-screen-xl mx-auto px-5">
          <div className="flex flex-col items-center gap-3 pt-[225px] pb-[190px] container mx-auto ">
            <h2 className="text-[40px] font-bold  text-white text-center">
              ABOUT COMPONENT
            </h2>
            <div className=" px-3 relative before:absolute before:left-full before:top-1/2 before:h-1 before:bg-white before:w-[80px]   after:absolute after:right-full after:top-1/2 after:h-1 after:bg-white after:w-[80px]   ">
              <i className="fa-solid fa-star text-white"></i>
            </div>
            <div className=" max-w-[950px] flex-col sm:flex-row flex items-center gap-5 text-white justify-center ">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
