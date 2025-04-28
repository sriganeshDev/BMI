// "use client";

// import CommonButton from "@/app/components/ui/CommonButton";
// import { contextprovides } from "@/context/CommonContext";
// import React, { useState, useRef, useEffect } from "react";
// import { FaArrowLeft } from "react-icons/fa";

// export default function WeightScaleSelector() {
//   const { weight, setWeight } = contextprovides();
//   const [unit, setUnit] = useState(weight.unit);
//   const containerRef = useRef(null);

//   const minKg = 10;
//   const maxKg = 200;
//   const minLb = 100;
//   const maxLb = 440;

//   const weights =
//     unit === "kg"
//       ? [...Array(maxKg - minKg + 1).keys()].map((w) => w + minKg)
//       : [...Array(maxLb - minLb + 1).keys()].map((w) => w + minLb);

//   const handleScroll = () => {
//     const container = containerRef.current;
//     if (!container) return;

//     const containerCenter = container.scrollLeft + container.offsetWidth / 2;
//     const items = container.querySelectorAll(".weight-tick");

//     let closest = null;
//     let minDistance = Infinity;

//     items.forEach((item) => {
//       const itemCenter = item.offsetLeft + item.offsetWidth / 2;
//       const distance = Math.abs(containerCenter - itemCenter);
//       if (distance < minDistance) {
//         minDistance = distance;
//         closest = item;
//       }

//       const offset = (itemCenter - containerCenter) / 100;
//       item.style.transform = `scale(${1 - Math.abs(offset) * 0.3}) translateY(${
//         Math.abs(offset) * 10
//       }px)`;
//       item.style.opacity = `${1 - Math.abs(offset) * 0.5}`;
//     });

//     if (closest) {
//       setWeight({ unit, value: parseInt(closest.dataset.value) });
//     }
//   };

//   const scrollToWeight = (w) => {
//     const container = containerRef.current;
//     const selectedItem = container?.querySelector(`[data-value="${w}"]`);
//     if (selectedItem && container) {
//       const offset =
//         selectedItem.offsetLeft -
//         container.offsetWidth / 2 +
//         selectedItem.offsetWidth / 2;
//       container.scrollTo({ left: offset, behavior: "smooth" });
//     }
//   };

//   useEffect(() => {
//     scrollToWeight(weight.value);
//   }, [unit]);

//   const setUnitWithConversion = (newUnit) => {
//     if (newUnit === unit) return;
//     const convertedWeight =
//       newUnit === "kg"
//         ? Math.round(weight.value / 2.20462)
//         : Math.round(weight.value * 2.20462);
//     setWeight({ unit: newUnit, value: convertedWeight });
//     setUnit(newUnit);
//   };

//   return (
//     <>
//       <div className="flex w-full flex-col justify-start">
//         <div className="flex flex-col items-center justify-center">
//           <div className="w-full flex flex-col justify-center items-center">
//             <h2 className="text-lg md:text-xl lg:text-3xl lg:mb-10 w-full flex justify-center items-center font-semibold mb-4">
//               Select your weight
//             </h2>
//             <div className="flex lg:mb-8 md:mb-6 mb-3 flex-wrap justify-center sm:justify-start gap-2">
//               <button
//                 onClick={() => setUnitWithConversion("kg")}
//                 className={`lg:px-4 px-4 lg:py-1 lg:text-base text-sm rounded-full border transition-all duration-300 ease-in-out font-medium shadow-sm ${
//                   unit === "kg"
//                     ? "bg-black text-white border-black shadow-md scale-105"
//                     : "bg-white text-black border-gray-300 hover:bg-gray-300"
//                 }`}
//               >
//                 KG
//               </button>
//               <button
//                 onClick={() => setUnitWithConversion("lb")}
//                 className={`lg:px-4 px-4 lg:py-1 lg:text-base text-sm rounded-full border transition-all duration-300 ease-in-out font-medium shadow-sm ${
//                   unit === "lb"
//                     ? "bg-black text-white border-black shadow-md scale-105"
//                     : "bg-white text-black border-gray-300 hover:bg-gray-300"
//                 }`}
//               >
//                 LB
//               </button>
//             </div>
//           </div>

//           <div className="flex flex-col items-center justify-center">
//             <div className="relative bg-gradient-to-br from-[#fff8ef] to-[#fae7ce] rounded-2xl p-4 shadow-lg lg:w-[280px] lg:h-[320px] md:w-[200px] md:h-[280px] w-[150px] h-[200px] flex flex-col items-center justify-start border-4 border-white">
//               <div className="relative lg:w-48 lg:h-28 md:w-40 md:h-20 w-32 h-20 bg-white rounded-b-full shadow-inner overflow-hidden mb-4">
//                 <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-10">
//                   <div className="w-0 h-0 border-l-6 border-r-6 border-b-[14px] border-b-red-600"></div>
//                 </div>

//                 <div
//                   ref={containerRef}
//                   onScroll={handleScroll}
//                   className="absolute bottom-0 left-0 right-0 flex overflow-x-scroll scroll-smooth snap-x snap-mandatory gap-4 px-6 py-6 hide-scrollbar"
//                   style={{
//                     maskImage:
//                       "radial-gradient(circle at center top, black 60%, transparent 100%)",
//                     WebkitMaskImage:
//                       "radial-gradient(circle at center top, black 60%, transparent 100%)",
//                   }}
//                 >
//                   {weights.map((w) => (
//                     <div
//                       key={w}
//                       data-value={w}
//                       className="weight-tick snap-center w-12 h-20 flex items-end justify-center transition-transform duration-150 ease-out text-black font-semibold"
//                       onClick={() => setWeight({ unit, value: w })}
//                     >
//                       {w}
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col justify-between h-full">
//                 {weights.map((w) => (
//                   <div
//                     key={w}
//                     className="w-1 bg-gray-700"
//                     style={{
//                       height: "8px",
//                       margin: "2px 0",
//                     }}
//                   ></div>
//                 ))}
//               </div>

//               <div className="flex-grow w-full flex items-center justify-center">
//                 <span className="lg:text-3xl text-2xl font-bold text-black drop-shadow-md">
//                   {weight.value} {unit.toUpperCase()}
//                 </span>
//               </div>
//             </div>
//           </div>
//           <div className="lg:w-[40%] w-[90%] mt-5">
//             <CommonButton navroute={"/bmi"} />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

"use client";

import CommonButton from "@/app/components/ui/CommonButton";
import { contextprovides } from "@/context/CommonContext";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { FaArrowLeft } from "react-icons/fa";

export default function WeightScaleSelector() {
  const { weight, setWeight } = contextprovides();
  const [unit, setUnit] = useState(weight.unit);
  const containerRef = useRef(null);

  const minKg = 10;
  const maxKg = 200;
  const minLb = 100;
  const maxLb = 440;

  const weights =
    unit === "kg"
      ? [...Array(maxKg - minKg + 1).keys()].map((w) => w + minKg)
      : [...Array(maxLb - minLb + 1).keys()].map((w) => w + minLb);

  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const containerCenter = container.scrollLeft + container.offsetWidth / 2;
    const items = container.querySelectorAll(".weight-tick");

    let closest = null;
    let minDistance = Infinity;

    items.forEach((item) => {
      const itemCenter = item.offsetLeft + item.offsetWidth / 2;
      const distance = Math.abs(containerCenter - itemCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closest = item;
      }

      const offset = (itemCenter - containerCenter) / 100;
      item.style.transform = `scale(${1 - Math.abs(offset) * 0.3}) translateY(${
        Math.abs(offset) * 10
      }px)`;
      item.style.opacity = `${1 - Math.abs(offset) * 0.5}`;
    });

    if (closest) {
      setWeight({ unit, value: parseInt(closest.dataset.value) });
    }
  }, [unit, setWeight]);

  const scrollToWeight = (w) => {
    const container = containerRef.current;
    const selectedItem = container?.querySelector(`[data-value="${w}"]`);
    if (selectedItem && container) {
      const offset =
        selectedItem.offsetLeft -
        container.offsetWidth / 2 +
        selectedItem.offsetWidth / 2;
      container.scrollTo({ left: offset, behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToWeight(weight.value);
  }, [unit]);

  const setUnitWithConversion = (newUnit) => {
    if (newUnit === unit) return;
    const convertedWeight =
      newUnit === "kg"
        ? Math.round(weight.value / 2.20462)
        : Math.round(weight.value * 2.20462);
    setWeight({ unit: newUnit, value: convertedWeight });
    setUnit(newUnit);
  };

  return (
    <>
      <div className="flex w-full flex-col justify-start">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full flex flex-col justify-center items-center">
            <h2 className="text-lg md:text-xl lg:text-3xl lg:mb-10 w-full flex justify-center items-center font-semibold mb-4">
              Select your weight
            </h2>
            <div className="flex lg:mb-8 md:mb-6 mb-3 flex-wrap justify-center sm:justify-start gap-2">
              <button
                onClick={() => setUnitWithConversion("kg")}
                className={`lg:px-4 px-4 lg:py-1 lg:text-base text-sm rounded-full border transition-all duration-300 ease-in-out font-medium shadow-sm ${
                  unit === "kg"
                    ? "bg-red-100 text-red-700 border-red-500 scale-105" // Active button with light red theme
                    : "bg-white text-black border-gray-300 hover:bg-red-100 hover:border-red-500 hover:text-red-700" // Hover and default state
                }`}
              >
                KG
              </button>
              <button
                onClick={() => setUnitWithConversion("lb")}
                className={`lg:px-4 px-4 lg:py-1 lg:text-base text-sm rounded-full border transition-all duration-300 ease-in-out font-medium shadow-sm ${
                  unit === "lb"
                    ? "bg-red-100 text-red-700 border-red-500 scale-105" // Active button with light red theme
                    : "bg-white text-black border-gray-300 hover:bg-red-100 hover:border-red-500 hover:text-red-700" // Hover and default state
                }`}
              >
                LB
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="relative bg-gradient-to-br from-[#f4eee8] to-[#dabda1] rounded-2xl p-4 shadow-lg lg:w-[280px] lg:h-[320px] md:w-[200px] md:h-[280px] w-[170px] h-[230px] flex flex-col items-center justify-start border-4 border-white">
              <div className="relative lg:w-48 lg:h-28 md:w-40 md:h-20 w-34 h-20 bg-white rounded-b-full shadow-inner overflow-hidden mb-4">
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-0 h-0 border-l-6 border-r-6 border-b-[14px] border-b-red-600"></div>
                </div>

                <div
                  ref={containerRef}
                  onScroll={handleScroll}
                  className="absolute bottom-0 left-0 right-0 flex overflow-x-scroll scroll-smooth snap-x snap-mandatory gap-4 px-6 py-6 hide-scrollbar"
                  style={{
                    maskImage:
                      "radial-gradient(circle at center top, black 60%, transparent 100%)",
                    WebkitMaskImage:
                      "radial-gradient(circle at center top, black 60%, transparent 100%)",
                  }}
                >
                  {weights.map((w) => {
                    const isSelected = weight.value === w;
                    return (
                      <div
                        key={w}
                        data-value={w}
                        className={`weight-tick snap-center w-12 h-20 flex items-end justify-center transition-transform duration-150 ease-out font-semibold cursor-pointer ${
                          isSelected
                            ? "text-black text-lg scale-110"
                            : "text-gray-400 text-sm"
                        }`}
                        onClick={() => setWeight({ unit, value: w })}
                      >
                        {w}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex-grow w-full flex items-center justify-center">
                <span className="lg:text-2xl text-xl font-bold text-black drop-shadow-md">
                  {weight.value} {unit.toUpperCase()}
                </span>
              </div>
            </div>
          </div>
          <div className="lg:w-[50%] w-[90%]  mt-5 ">
            <CommonButton navroute={"/bmi"} />
          </div>
        </div>
      </div>
    </>
  );
}
