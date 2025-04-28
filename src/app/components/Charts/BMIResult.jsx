"use client";
import { useRouter } from "next/navigation";
import GaugeChart from "./GaugeChart";

const BMIResult = ({ bmi, bmiInfo }) => {
  const router = useRouter();
  return (
    <div className="w-full flex-col space-y-4 flex justify-center items-center mx-auto relative">
      <button
        onClick={() => {
          router.push("/bmi");
        }}
        className="bg-[#e7000b] max-md:hidden  text-white flex absolute top-0 left-0  px-4 py-2   transition"
        style={{
          clipPath:
            "polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%)",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 3h6a2 2 0 012 2v2H7V5a2 2 0 012-2zM7 9h10M7 13h4m-4 4h10"
          />
        </svg>
        ReCalculate
      </button>

      <h1 className="lg:text-3xl md:text-2xl text-xl font-bold text-center">
        BMI Result
      </h1>

      <div className="flex w-full justify-center items-center h-full">
        <GaugeChart bmi={bmi} />
      </div>

      <div className="flex justify-center">
        <div className="p-4 rounded-xl max-md:p-2 bg-gray-300 text-center">
          <p className="md:text-2xl lg:text-xl text-lg">Your BMI</p>
          <p className="lg:text-3xl md:text-2xl text-xl font-bold text-blue-900">
            {bmi.toFixed(1)}
          </p>
        </div>
      </div>

      <div className="flex justify-center flex-wrap gap-3 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-500" /> Under Weight
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-500" /> Normal
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-yellow-400" /> Over Weight
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" /> Obesity
        </div>
      </div>

      <div className="mt-3 lg:p-2 md:p-3 p-1 border-2 rounded-xl border-gray-300 grid grid-cols-2 sm:grid-cols-3 gap-4 text-center text-gray-600">
        <div>
          <p className="lg:text-lg md:text-lg  mb-2 text-base">
            Healthy BMI range
          </p>
          <p className="font-semibold max-md:text-sm text-blue-800 text-lg">
            {bmiInfo.healthyRange}
          </p>
        </div>
        <div>
          <p className="lg:text-lg md:text-lg  mb-2 text-base">
            Healthy weight for this height
          </p>
          <p className="font-semibold max-md:text-sm text-blue-800 text-lg">
            {bmiInfo.idealWeight}
          </p>
        </div>
        <div className="max-sm:col-span-2">
          <p className="lg:text-lg md:text-lg text-base mb-2">Action</p>
          <p className="text-red-600 font-semibold max-md:text-sm text-lg">
            {bmiInfo.actionText}
          </p>
        </div>
      </div>
      <div className="mt-4 w-full lg:hidden md:hidden flex justify-center">
        <button
          onClick={() => {
            router.push("/bmi");
          }}
          className="bg-[#e7000b] text-white uppercase text-sm max-md:text-xs font-semibold flex items-center  px-6 py-2 relative"
          style={{
            clipPath:
              "polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 3h6a2 2 0 012 2v2H7V5a2 2 0 012-2zM7 9h10M7 13h4m-4 4h10"
            />
          </svg>
          ReCalculate
        </button>
      </div>
    </div>
  );
};

export default BMIResult;
