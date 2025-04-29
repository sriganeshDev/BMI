"use client";
import BMIResult from "@/app/components/Charts/BMIResult";
import BodyFigure from "@/app/pages/result/BodyWise";
import { contextprovides } from "@/context/CommonContext";
import React from "react";

const ResultPage = () => {
  const { bmi, bmiInfo } = contextprovides();

  return (
    <div className="flex w-full min-h-screen bg-gray-50 items-center justify-center lg:px-10 py-2 md:py-5 ">
      <div className="flex flex-col sticky lg:top-48 lg:flex-row w-full  gap-8">
        <div className="w-full lg:w-3/3 flex justify-center items-start">
          <div className=" w-full p-6 flex flex-col justify-center items-center rounded-2xl border-2 border-gray-200 bg-white shadow-md space-y-4">
            <BMIResult bmi={bmi} bmiInfo={bmiInfo} />
          </div>
        </div>
        <div className="w-full lg:w-2/4 flex justify-center items-start">
          <div className=" w-full lg:p-6 flex flex-col justify-start items-center rounded-2xl border-2 border-gray-200 bg-white shadow-md space-y-4 lg:overflow-y-auto hide-scrollbar lg:max-h-[calc(100vh-8rem)]">
            <BodyFigure bmi={bmi} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
