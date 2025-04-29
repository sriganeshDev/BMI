//

"use client";

import React from "react";
import { FaMars, FaVenus } from "react-icons/fa";
import CommonButton from "../ui/CommonButton";
import { contextprovides } from "@/context/CommonContext";

const genders = [
  { label: "Male", icon: <FaMars />, value: "male" },
  { label: "Female", icon: <FaVenus />, value: "female" },
];

const GenderCompo = () => {
  const { selectedGender, setSelectedGender } = contextprovides();

  return (
    <div className="w-full max-w-md mx-auto px-4 mt-5 lg:py-8 flex flex-col items-center text-center">
      <h1 className="text-2xl md:text-3xl text-black font-bold mb-2 relative">
        BMI Calculator
      </h1>
      <p className="text-gray-600 mb-6">Please choose your gender</p>

      <div className="w-full flex flex-col gap-20">
        <div className="grid grid-cols-2 gap-4">
          {genders.map((g) => (
            <button
              key={g.value}
              onClick={() => setSelectedGender(g.value)}
              className={`flex flex-col items-center cursor-pointer justify-center p-4 rounded-xl border transition duration-200 ${
                selectedGender === g.value
                  ? "bg-red-100 border-red-500 text-red-700 shadow-md"
                  : "border-gray-200 text-gray-500 hover:bg-red-100 hover:border-red-400 hover:text-red-500"
              }`}
            >
              <div className="text-3xl md:text-4xl">{g.icon}</div>
              <span className="text-sm md:text-base mt-2 font-medium">
                {g.label}
              </span>
            </button>
          ))}
        </div>

        <div className="w-full lg:px-10 ">
          <CommonButton navroute={"/onboarding/age"} />
        </div>
      </div>
    </div>
  );
};

export default GenderCompo;
