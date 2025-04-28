// "use client";

// import React, { useState, useRef, useEffect, useCallback } from "react";
// import Image from "next/image";
// import { FixedSizeList as List } from "react-window";
// import { FaArrowLeft } from "react-icons/fa";
// import { useRouter } from "next/navigation";
// import CommonButton from "@/app/components/ui/CommonButton";
// import { contextprovides } from "@/context/CommonContext";

// export default function HeightSelector() {
//   const { height, setHeight } = contextprovides();

//   console.log("====================================");
//   console.log(height);
//   console.log("====================================");

//   const [unit, setUnit] = useState(height.unit);
//   const listRef = useRef();
//   const router = useRouter();
//   const getHeights = () => {
//     if (unit === "cm") {
//       return Array.from({ length: 51 }, (_, i) => 145 + i);
//     }

//     if (unit === "ft") {
//       const heights = [];
//       for (let feet = 4; feet <= 6; feet++) {
//         for (let inch = 0; inch < 12; inch++) {
//           const cm = (feet * 12 + inch) * 2.54;
//           if (cm >= 145 && cm <= 195) {
//             heights.push(cm / 30.48); // convert to ft
//           }
//         }
//       }
//       return heights;
//     }

//     if (unit === "in") {
//       return Array.from({ length: 21 }, (_, i) => 57 + i);
//     }

//     return [];
//   };

//   const heights = getHeights();
//   const itemSize = 48;
//   const listHeight = itemSize * 5;
//   const visibleMiddleIndex = Math.floor(listHeight / itemSize / 2);
//   const Row = ({ index, style }) => {
//     const value = heights[index];
//     const displayValue =
//       unit === "cm"
//         ? `${Math.round(value)} cm`
//         : unit === "ft"
//         ? `${Math.floor(value)}' ${Math.round((value % 1) * 12)}"`
//         : `${Math.round(value)} in`;

//     const isSelected =
//       Math.round(
//         unit === "cm" ? value : unit === "ft" ? value * 30.48 : value * 2.54
//       ) === Math.round(height);

//     const handleClick = () => {
//       const newHeight =
//         unit === "cm" ? value : unit === "ft" ? value * 30.48 : value * 2.54;
//       setHeight(Math.round(newHeight));
//     };

//     const tickSize = index % 5 === 0 ? "w-3" : "w-3";

//     // const selectedValue =
//     //   unit === "cm"
//     //     ? `${height} cm`
//     //     : unit === "ft"
//     //     ? `${Math.floor(height / 30.48)}' ${Math.round(
//     //         ((height / 30.48) % 1) * 12
//     //       )}"`
//     //     : `${Math.round(height / 2.54)} in`;

//     // useEffect(() => {
//     //   setHeight(selectedValue);
//     // }, []);

//     // console.log("selectedValue", height);
//     return (
//       <div
//         onClick={handleClick}
//         style={{
//           ...style,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "start",
//           cursor: "pointer",
//         }}
//         className={`relative  transition-all duration-200 ${
//           isSelected
//             ? "text-black font-bold text-base md:text-lg lg:text-lg"
//             : "text-gray-400 text-sm"
//         }`}
//       >
//         <div className={`h-[1px] ${tickSize} bg-gray-400 mr-4`} />

//         <span className="flex">{displayValue}</span>

//         {isSelected && (
//           <svg
//             width="14"
//             height="7"
//             viewBox="0 0 12 6"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             className="ml-2 rotate-90"
//           >
//             <path d="M6 6L0 0H12L6 6Z" fill="#2DD4BF" />
//           </svg>
//         )}
//       </div>
//     );
//   };

//   const handleScroll = useCallback(
//     ({ scrollOffset }) => {
//       const index = Math.round(scrollOffset / itemSize);
//       const newValue = heights[index + visibleMiddleIndex];
//       if (newValue !== undefined) {
//         const newHeight =
//           unit === "cm"
//             ? newValue
//             : unit === "ft"
//             ? newValue * 30.48
//             : newValue * 2.54;
//         setHeight(Math.round(newHeight));
//       }
//     },
//     [heights, unit]
//   );

//   useEffect(() => {
//     if (listRef.current) {
//       const heightInCurrentUnit =
//         unit === "cm" ? height : unit === "ft" ? height / 30.48 : height / 2.54;
//       const index = getHeights().findIndex(
//         (h) => Math.round(h) === Math.round(heightInCurrentUnit)
//       );
//       const offset = (index - visibleMiddleIndex) * itemSize;
//       listRef.current.scrollTo(offset);
//     }
//   }, [unit]);

//   return (
//     <div className=" flex flex-col justify-start ">
//       <div className="relative top-0   mb-5 left-0 md:hidden">
//         <button
//           type="button"
//           onClick={() => router.push("/onboarding/age")}
//           className="flex items-center gap-2 text-xs text-black hover:text-blue-600 rounded-full transition-all duration-300"
//         >
//           <FaArrowLeft />
//           Back
//         </button>
//       </div>
//       <div className=" flex flex-col items-center justify-center ">
//         <div className="w-full flex  flex-col justify-center items-center ">
//           <h2 className="text-lg  md:text-xl lg:text-3xl  lg:mb-10 w-full flex justify-center items-center   font-semibold mb-4">
//             Select your Height
//           </h2>
//           <div className="flex lg:mb-8 md:mb-6 mb-3 flex-wrap justify-center sm:justify-start gap-2">
//             {["cm", "ft", "in"].map((u) => (
//               <button
//                 key={u}
//                 className={`lg:px-4 px-2 lg:py-1 lg:text-base text-sm rounded-full border transition-all duration-300 ease-in-out font-medium shadow-sm
//           ${
//             unit === u
//               ? "bg-black text-white  border-black shadow-md scale-105"
//               : "bg-white text-black border-gray-300 hover:bg-gray-300"
//           }`}
//                 onClick={() => setUnit(u)}
//               >
//                 {u === "cm" ? "Centimeter" : u === "ft" ? "Feet" : "Inch"}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className=" bg-white  my-3.5 h-full  rounded-2xl shadow-xl lg:p-6  w-full  flex items-center justify-between gap-6">
//           <div className="flex-shrink-0 w-32 h-56 lg:h-72 relative">
//             <Image
//               src="/human.png"
//               alt="Human silhouette"
//               fill
//               className="object-contain rounded-2xl "
//             />
//           </div>

//           <div className="flex-1">
//             <div className="relative lg:h-[240px] h-[200px] lg:w-[140px]  w-[120px]  rounded-lg  overflow-hidden">
//               <div className="h-full   relative z-10">
//                 <List
//                   ref={listRef}
//                   height={listHeight}
//                   itemCount={heights.length}
//                   itemSize={itemSize}
//                   width="100%"
//                   onScroll={handleScroll}
//                   className="hide-scrollbar "
//                 >
//                   {Row}
//                 </List>
//               </div>
//             </div>

//             {/* <div className="text-center mt-4 font-bold text-lg">
//               {unit === "cm"
//                 ? `${height} cm`
//                 : unit === "ft"
//                 ? `${Math.floor(height / 30.48)}' ${Math.round(
//                     ((height / 30.48) % 1) * 12
//                   )}"`
//                 : `${Math.round(height / 2.54)} in`}
//             </div> */}
//           </div>
//         </div>
//         <div className="w-full   ">
//           <CommonButton navroute={"/onboarding/weight"} />
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { FixedSizeList as List } from "react-window";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
import CommonButton from "@/app/components/ui/CommonButton";
import { contextprovides } from "@/context/CommonContext";

export default function HeightSelector() {
  const { height, setHeight } = contextprovides();
  const [unit, setUnit] = useState("cm");
  const listRef = useRef();
  const router = useRouter();

  const getHeights = () => {
    if (unit === "cm") {
      return Array.from({ length: 51 }, (_, i) => 145 + i);
    }

    if (unit === "ft") {
      const heights = [];
      for (let feet = 4; feet <= 6; feet++) {
        for (let inch = 0; inch < 12; inch++) {
          const cm = (feet * 12 + inch) * 2.54;
          if (cm >= 145 && cm <= 195) {
            heights.push(cm / 30.48); // convert to ft
          }
        }
      }
      return heights;
    }

    if (unit === "in") {
      return Array.from({ length: 21 }, (_, i) => 57 + i);
    }

    return [];
  };

  const heights = getHeights();
  const itemSize = 48;
  const listHeight = itemSize * 5;
  const visibleMiddleIndex = Math.floor(listHeight / itemSize / 2);

  const handleClick = (value) => {
    if (unit === "cm") {
      setHeight({
        unit: "cm",
        cm: Math.round(value),
        feet: 0,
        inches: 0,
        inchesOnly: 0,
      });
    } else if (unit === "ft") {
      const feet = Math.floor(value);
      const inches = Math.round((value % 1) * 12);
      setHeight({
        unit: "ft",
        feet,
        inches,
        cm: 0,
        inchesOnly: 0,
      });
    } else if (unit === "in") {
      setHeight({
        unit: "in",
        inchesOnly: Math.round(value),
        cm: 0,
        feet: 0,
        inches: 0,
      });
    }
  };

  const Row = ({ index, style }) => {
    const value = heights[index];
    const displayValue =
      unit === "cm"
        ? `${Math.round(value)} cm`
        : unit === "ft"
        ? `${Math.floor(value)}' ${Math.round((value % 1) * 12)}"`
        : `${Math.round(value)} in`;

    const selectedCm =
      unit === "cm"
        ? height.cm
        : unit === "ft"
        ? height.feet * 30.48 + height.inches * 2.54
        : height.inchesOnly * 2.54;

    const isSelected =
      Math.round(
        unit === "cm" ? value : unit === "ft" ? value * 30.48 : value * 2.54
      ) === Math.round(selectedCm);

    return (
      <div
        onClick={() => handleClick(value)}
        style={{
          ...style,
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          cursor: "pointer",
        }}
        className={`relative transition-all duration-200 ${
          isSelected
            ? "text-black font-bold text-base md:text-lg lg:text-lg"
            : "text-gray-400 text-sm"
        }`}
      >
        <div className="h-[1px] w-3 bg-gray-400 mr-4" />

        <span className="flex">{displayValue}</span>

        {isSelected && (
          <svg
            width="14"
            height="7"
            viewBox="0 0 12 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 rotate-90"
          >
            <path d="M6 6L0 0H12L6 6Z" fill="#2DD4BF" />
          </svg>
        )}
      </div>
    );
  };

  const handleScroll = useCallback(
    ({ scrollOffset }) => {
      const index = Math.round(scrollOffset / itemSize);
      const newValue = heights[index + visibleMiddleIndex];
      if (newValue !== undefined) {
        handleClick(newValue);
      }
    },
    [heights, unit]
  );

  useEffect(() => {
    if (listRef.current) {
      const selectedCm =
        unit === "cm"
          ? height.cm
          : unit === "ft"
          ? height.feet * 30.48 + height.inches * 2.54
          : height.inchesOnly * 2.54;

      const heightInCurrentUnit =
        unit === "cm"
          ? selectedCm
          : unit === "ft"
          ? selectedCm / 30.48
          : selectedCm / 2.54;

      const index = getHeights().findIndex(
        (h) => Math.round(h) === Math.round(heightInCurrentUnit)
      );

      const offset = (index - visibleMiddleIndex) * itemSize;
      listRef.current.scrollTo(offset);
    }
  }, [unit]);

  return (
    <div className="flex flex-col justify-start">
      <div className="relative top-0 mb-5 left-0 md:hidden">
        {/* <button
          type="button"
          onClick={() => router.push("/onboarding/age")}
          className="flex items-center gap-2 text-xs text-black hover:text-blue-600 rounded-full transition-all duration-300"
        >
          <FaArrowLeft />
          Back
        </button> */}
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="w-full flex flex-col justify-center items-center">
          <h2 className="text-lg md:text-xl lg:text-3xl text-black lg:mb-10 w-full flex justify-center items-center font-semibold mb-4">
            Select your Height
          </h2>
          <div className="flex lg:mb-8 md:mb-6 mb-3 flex-wrap justify-center sm:justify-start gap-2">
            {["cm", "ft", "in"].map((u) => (
              <button
                key={u}
                className={`lg:px-4 px-2 lg:py-1 lg:text-base text-sm rounded-full border transition-all duration-300 ease-in-out font-medium shadow-sm ${
                  unit === u
                    ? "bg-red-100 text-red-700 border-[#C6000A] scale-105" // Active button with light red theme
                    : "bg-white text-black border-gray-300 hover:bg-red-100 hover:border-red-200 hover:text-red-400" // Hover and default state
                }`}
                onClick={() => setUnit(u)}
              >
                {u === "cm" ? "Centimeter" : u === "ft" ? "Feet" : "Inch"}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white my-3.5 h-full rounded-2xl shadow-xl lg:p-6 w-full flex items-center justify-between gap-6">
          <div className="flex-shrink-0 w-32 h-56 lg:h-72 relative">
            <Image
              src="/human.png"
              alt="Human silhouette"
              fill
              className="object-contain rounded-2xl"
            />
          </div>

          <div className="flex-1">
            <div className="relative lg:h-[240px] h-[200px] lg:w-[140px] w-[120px] rounded-lg overflow-hidden">
              <div className="h-full relative z-10">
                <List
                  ref={listRef}
                  height={listHeight}
                  itemCount={heights.length}
                  itemSize={itemSize}
                  width="100%"
                  onScroll={handleScroll}
                  className="hide-scrollbar"
                >
                  {Row}
                </List>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full  ">
          <CommonButton navroute={"/onboarding/weight"} />
        </div>
      </div>
    </div>
  );
}
