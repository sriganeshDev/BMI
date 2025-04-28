import React from "react";
import Header from "../components/ui/header";

const BmiResult = ({ children }) => {
  return (
    <div className="flex  flex-col bg-zinc-100  px-3    ">
      <Header />
      <div
        className={` antialiased  
         `}
      >
        {children}
      </div>
    </div>
  );
};

export default BmiResult;
