import React from "react";
import GenderCompo from "./components/onboard/genderComp";
import FixedImage from "./components/onboard/fixedImage";

const Onbboardlayout = () => {
  return (
    <div className="flex lg:p-10 md:p-7  flex-col md:flex-row h-screen  ">
      <FixedImage />
      <div
        className={` antialiased w-full md:w-1/2 h-3/3 md:h-full  bg-zinc-100 rounded-r-2xl flex items-center justify-center max-md:p-3 `}
      >
        <GenderCompo />
      </div>
    </div>
  );
};

export default Onbboardlayout;
